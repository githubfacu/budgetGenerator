
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface SendEmailParams {
    from: string;
    to: string;
    subject: string;
    message: string;
    previewUrl: string;
    downloadUrl: string;
}

export const sendBudgetEmail = async ({
    from,
    to,
    subject,
    message,
    previewUrl,
    downloadUrl
}: SendEmailParams) => {

    return emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            from_email: from,
            to_email: to,
            subject: subject,
            message: message,
            pdf_url_preview: previewUrl,
            pdf_url_download: downloadUrl
        },
        PUBLIC_KEY
    );
};