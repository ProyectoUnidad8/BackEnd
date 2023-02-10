import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

interface TwilioConstructor {
	new(accoundSid: any, authToken: any): any;
}

const TWILIO_ACCOUNT_SID = "AC9e13a565768dbe7799cf451db121904f"
const TWILIO_AUTH_TOKEN = "f75fbc8f1142408a6b5be2110e8ec799"
const TWILIO_PHONE_NUMBER = "+19707030678"
const MY_PHONE_NUMBER = "986278170"

const Twilio: TwilioConstructor = twilio as unknown as TwilioConstructor;

const client = new Twilio(TWILIO_ACCOUNT_SID,
	TWILIO_AUTH_TOKEN);

export default async function sendSMS(name:string, phone:string) {
	try {
		const result = await client.messages.create({
			body: `¡Tienes una nueva solicitud de adopción de ${name} con el número ${phone}!`,
			to: `+51${MY_PHONE_NUMBER}`,
			from: TWILIO_PHONE_NUMBER
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