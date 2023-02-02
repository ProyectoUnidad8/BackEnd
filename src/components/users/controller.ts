import prisma from "../../datasource";
import { Request, Response } from "express";

export const findAllUsers = async (_req: Request, res: Response): Promise<void> => {
	try {
		const users = await prisma.usuario.findMany();
		res.status(200).json({ ok: true, data: users })
	} catch (error) {
		res.status(500).json({ ok: false, message: error })
	}	
}

export const findUserPets = async (req:Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const result = await prisma.usuario.findFirst({
			where: {
				id: Number(id)
			},
			include: {
				pet: true
			}
		});
		if (!result) { res.status(404).json({ ok: false, message: "Usuario no encontrado" }) }
		else { res.status(200).json({ ok: true, data: result }) }
	} catch (error) {
		console.log(error)
		res.status(500).json({ ok: false, message: error })
	}
}

export const store = async (req: Request, res: Response): Promise<void> => {
	try{
		const { email, name, role } = req.body;
		const result = await prisma.usuario.create({ 
			data: {
				email, name, role
			}
		});
		res.status(201).json({ ok: true, message: "Usuario Creado", data: result })
	} catch(error) {
		res.status(500).json({ ok: false, message: error })
	}
}


export const updateUser = async (req:Request, res:Response): Promise<void> => {
	try{
		const { id } = req.params;
		const { email, name, role  } = req.body;
		const result = await prisma.usuario.update({
			where: {
				id: Number(id) 	
			},
			data: {
				email, name, role
			}
		});
		res.status(200).json({ ok: true, message: "Usuario actualizado", data: result })
	} catch (error) {
		console.log(error)
		res.status(500).json({ ok: false, message: error })
	}
}


export const deleteUser = async (req:Request, res:Response): Promise<void> => {
	try {
		const { id } = req.params;
		const result = await prisma.usuario.delete({
			where: { id: Number(id) }
		})
		res.status(200).json({ ok:true, message: "Usuario eliminado", data: result })
	} catch (error) {
		console.log(error)
		res.status(500).json({ ok: false, message: error })
	}
}