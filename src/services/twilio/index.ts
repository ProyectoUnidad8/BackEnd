import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

interface TwilioConstructor {
	new(accoundSid: any, authToken: any): any;
}


const Twilio: TwilioConstructor = twilio as unknown as TwilioConstructor;

const client = new Twilio(process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN);

export default async function sendSMS(name:string, phone:string) {
	try {
		const result = await client.messages.create({
			body: `¡Tienes una nueva solicitud de adopción de ${name} con el número ${phone}!`,
			to: `+51${process.env.MY_PHONE_NUMBER}`,
			from: process.env.TWILIO_PHONE_NUMBER
		});
		return { status:true, message: "Mensaje enviado con éxito", result }
	} catch (error) {
		console.log(error);
		return {
			status: false,
			message: "Error al enviar mensaje",
			error
		}
	}
}