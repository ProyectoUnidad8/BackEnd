import prisma from "../../datasource";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";


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
		res.status(500).json({ ok: false, message: error })
	}
}


export const signup = async (req: Request, res: Response): Promise<void> => {
	try{
		const { email, password, name, role } = req.body;

		const hash = await bcrypt.hash(password, 13);

		const result = await prisma.usuario.create({ 
			data: {
				email, name, role ,password: hash
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
		const { email, password, name, role  } = req.body;

		const hash = await bcrypt.hash(password, 13);

		const result = await prisma.usuario.update({
			where: {
				id: Number(id) 	
			},
			data: {
				email, name, role, password:hash
			}
		});
		res.status(200).json({ ok: true, message: "Usuario actualizado", data: result })
	} catch (error) {
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
		res.status(500).json({ ok: false, message: error })
	}
}


export const login = async (req:Request, res: Response): Promise<void> => {
	const { email, password } = req.body;
	try {
		if (!email || !password) {
				res.status(401).json({ message: "Envío incorrecto de datos" });
            return
        }

        const usuario = await prisma.usuario.findFirst({
            where: { email },
        })

				const role = usuario?.role;

        if (!usuario) {
				res.status(401).json({ message: "Usuario equivocado" });
          return
        }

        const isValid = await bcrypt.compare(password, usuario.password) && bcrypt.compare(email, usuario.email)
        if (!isValid) {
				res.status(401).json({ message: "Password incorrecto" });
          return
        }

        const token = jwt.sign(
            { email, password }, 
            process.env.TOKEN_SECRET as Secret,
            {
                expiresIn: "2h",
            });

        res.status(201).json({ email, role, token });

	} catch (error) {
		res.status(500).json({
			ok: false,
			message: "Logeo incorrecto"
		});
	}
}