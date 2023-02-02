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

export const findAllPet = async (req: Request, res: Response): Promise<void> => {
  try {
    const pets = await prisma.pet.findMany();
    
    res.status(200).json({
      ok: true,
      data: pets,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

export const addPet = async (req: Request, res: Response): Promise<void> => {

    try {
      const data = req.body;

      await prisma.pet.create({ data });
  
      res.status(201).json({ 
        ok: true, 
        message: "Pet añadida correctamente" 
    });

    } catch (error) {
      res.status(500).json({ 
        ok: false, 
        message: error });
    }
    
  };


export const updatePet = async (req: Request, res: Response): Promise<void> => {
  
  try {
    const { id } = req.params;
    const data = req.body;
    
    const pet = await prisma.pet.update({
      where: { id: Number(id) },
      data,
    });
    
    res.status(200).json({
          ok: true,
          message: "Pet actualizado correctamente",
          data: pet,
        });

    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
  };

  export const deletePet = async (req: Request, res: Response): Promise<void> => {

    try {
        const { id } = req.params;

        const deletedPet = await prisma.pet.delete({
            where: {
                id: Number(id)
            }
        });

        res.status(200).json({
            ok: true,
            message: "Mascota Eliminada",
            data: deletedPet,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        })
    }
}


export const findPetById = async (req: Request, res: Response): Promise<void> => {

    try {
        const { id } = req.params;

        const pet = await prisma.pet.findFirst({
            where: {
                id: Number(id)
            }
        });

        res.status(200).json({
            ok: true,
            message: pet
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        });
    }
};