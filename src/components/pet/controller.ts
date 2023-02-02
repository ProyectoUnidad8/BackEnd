import { type Request, Response } from "express";
import prisma from "../../datasource";

export const findUserPets = async (req: Request, res: Response): Promise<void> => {

    try {
        const { id } = req.body;

        const result = await prisma.pet.findMany({
            where: {
                ownerId: id
            }
        });

        res.status(200).json({
            ok: true,
            message: result
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        })
    }

};