import { type Request, Response } from "express";
import prisma from "../../datasource";


export const findAllPetToAdopt = async (req: Request, res: Response): Promise<void> => {
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

export const findOnePetToAdopt = async (req: Request, res: Response): Promise<void> => {
  try {

    const { id } = req.params;

    const result = await prisma.petAdoption.findFirst({
      where: {
        id: Number(id)
      }
    });

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

export const storePetToAdopt = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;

    const result = await prisma.petAdoption.create({ data });

    res.status(201).json({
      ok: true,
      message: "Mascota añadida para adopción",
      data: result
    })

  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error
    });
  }
};

export const updatePetToAdopt = async (req: Request, res: Response): Promise<void> => {
  try {
    const {id} = req.params;
    const data = req.body;

    const result = await prisma.petAdoption.update({
      where:{
        id: Number(id)
      },
      data
    });

    res.status(201).json({
      ok:true,
      message: "Mascota actualizada",
      data: result
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error
    });
  }
};

export const deletePetToAdopt = async (req: Request, res: Response): Promise <void> => {
  try {
    const {id} = req.params;
    
    const result = await prisma.petAdoption.delete({
      where: {
        id: Number(id)
      }
    });

    res.status(204).json({
      ok: true,
      message: "Mascota eliminada de la lista adopción.",
      data: result
    });

  } catch (error) {
    res.status(500).json({
      ok:false,
      message: error
    })
  }
};