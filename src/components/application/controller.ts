import { type Request, Response } from "express"; 
import prisma from "../../datasource";

export const findApplication = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const application = await prisma.application.findUnique({
            where: {id: Number(id)}
        });

        res.status(200).json({
            ok: true,
            data: application,
        });
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        });
    }
};

export const findAllApplication = async (req: Request, res: Response): Promise<void> => {
    try {
        const applications = await prisma.application.findMany();

        res.status(200).json({
            ok: true,
            data: applications,
        });
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        });
    }
};

export const addApplication = async (req : Request, res: Response): Promise<void> => {
    try {
        const data = req.body;

        await prisma.application.create({
            data
        });

        res.status(201).json({
            ok:true,
            message: "Solicitud creada correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: error
        });
    }
};

export const updateApplication = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = req.body;

        const application = await prisma.application.update({
            where: { id: Number(id)},
            data,
        });

        res.status(200).json({
            ok:true,
            message: "Solicitud actualizada correctamente",
            data: application,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error,
        });
    }
};

export const deleteApplication = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const deleteApplication = await prisma.application.delete({
            where: { id: Number(id)}
        })

        res.status(200).json({
            ok: true,
            message: "Solicitud eliminada correctamente",
            data: deleteApplication,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error,
        });
    }
}