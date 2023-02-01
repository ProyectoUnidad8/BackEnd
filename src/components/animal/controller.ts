import type { Request, Response } from "express";
import prisma from "../../datasource";


export const findUser = async (req: Request, res: Response) => {

    try {
        const {body} = req;

        const petOwner = await prisma.usuario.findFirst(
            {
                where:{
                    body.email,
                },
                include:{
                    animales: true,
                }
            },
        );

        res.status(200).json({
            ok: true,
            data: petOwner,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            data: error,
        });
    };
};