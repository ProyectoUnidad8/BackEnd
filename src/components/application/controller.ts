import { type Request, Response } from "express"; 
import prisma from "../../datasource";
import { TwilioSendSMS } from "../../services"; 

export const findApplication = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const result = await prisma.application.findUnique({
            where: {id: Number(id)}
        });

        res.status(200).json({
            ok: true,
            data: result,
        });
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        });
    }
};

export const findAllApplication = async (_req: Request, res: Response): Promise<void> => {
    try {
        const result = await prisma.application.findMany();

        res.status(200).json({
            ok: true,
            data: result,
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
        const sms = await TwilioSendSMS(data.name, data.phone)
        
        if (!sms.status){
            res.status(401).json({
                ok: false,
                message: "Ha ocurrido un error con el servicio de Twilio",
                sms
              });
            }
        else {
            await prisma.application.create({
                data
            });
            
            res.status(201).json({
                ok:true,
                message: "Solicitud creada correctamente",
                sms
            });
        }
       

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