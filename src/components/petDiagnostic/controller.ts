import { type Request, Response } from "express";
import prisma from "../../datasource";

export const findAllPetDiagnostic = async (req:Request, res:Response): Promise<void> => {
    try {
        const data = await prisma.diagnostic.findMany();

        res.status(200).json({
            ok: true,
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        })
    }
};

export const findOnePetDiagnostic = async (req:Request, res:Response):Promise<void> => {
    try {
        const { id } = req.params;

        const data = await prisma.diagnostic.findFirst({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json({
            ok: true,
            data: data
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        })
    }
};

export const storePetDiagnostic = async (req:Request, res:Response):Promise<void> => {
    try {
        const data = req.body;

        const result = await prisma.diagnostic.create({ data });

        res.status(201).json({
            ok: true,
            message: "Diagnostico añadido",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        })
    }
};

export const updatePetDiagnostic = async (req:Request, res:Response):Promise<void> => {
    try {
        const { id } = req.params;
        const data = req.body;

        const result = await prisma.diagnostic.update({
            where: {
                id: Number(id)
            },
            data
        });

        res.status(201).json({
            ok: true,
            message: "Diagnostico actualizado",
            data: result
        })

    } catch(error) {
        res.status(500).json({
            ok: false,
            message: error
        });
    }
};

export const deletePetDiagnostic = async (req:Request, res:Response):Promise<void> => {
    try {
        const { id } = req.params;

        const result = await prisma.diagnostic.delete({
            where: {
                id: Number(id)
            }
        });

        res.status(204).json({
            ok: true,
            message: "Diagnostico eliminado del historial"
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        })
    }
}