import { type Request, Response } from "express";
import prisma from "../../datasource";


export const findAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await prisma.petAdoption.findMany();

    res.status(200).json({
      ok: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error
    })
  }
};

