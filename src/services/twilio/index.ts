import twilio from "twilio";

interface TwilioConstructor {
	new(accoundSid: any, authToken: any): any;
}

const Twilio: TwilioConstructor = twilio as unknown as TwilioConstructor;

const client = new Twilio(process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN);

export default async function sendSMS(name:string, phone:string, phoneNumber:string) {
	try {
		const message = await client.messages.create({
			body: `¡Tienes una nueva solicitud de adopción de ${name} con el número ${phone}!`,
			to: `+51${phoneNumber}`,
			from: process.env.TWILIO_PHONE_NUMBER
		});
		return { message }
	} catch (error) {
		console.log(error);
		return error
	}
}