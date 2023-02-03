import { Request, Response, NextFunction } from "express";
import { verify, Secret } from "jsonwebtoken";


export function validateAuthorization(req: Request, res: Response, next: NextFunction) {
	
	const { authorization } = req.headers;

	if (!authorization) 
		return res.status(401).json({	
			message: "No autorizado" 
		});
	
	if (!authorization.startsWith("Bearer "))
		return res.status(401).json({
			message: "Formato inválido de Token"
		});

	const token = authorization.replace("Bearer ", "");

	verify(token, process.env.TOKEN_SECRET as Secret, (err, decoded) => {
		if (err) return res.status(401).json({
			message: "Token Inválido"
		});

		next();
	});
}