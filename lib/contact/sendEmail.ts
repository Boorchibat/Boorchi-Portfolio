import { postEmail } from "../getDatafromBackend";

export interface EmailPayload {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export interface EmailResponse {
  ok: boolean;
  message: string;
}

export async function sendContactEmail(
  data: EmailPayload
): Promise<EmailResponse> {
  return postEmail<EmailResponse>("/contact", data);
}