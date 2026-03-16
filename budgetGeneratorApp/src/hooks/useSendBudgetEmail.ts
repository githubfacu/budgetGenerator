import { useState } from "react";
import { generatePdfBlob, sendBudgetEmail, uploadPdf } from "../services";

interface SendEmailParams {
    elementId: string;
    fileName: string;
    from: string;
    to: string;
    subject: string;
    message: string;
}

export const useSendBudgetEmail = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [feedMessage, setFeedMessage] = useState('');
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = async (params: SendEmailParams) => {

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {

            setFeedMessage("📄 Generando PDF...");
            const blob = await generatePdfBlob(params.elementId);

            setFeedMessage("☁️ Subiendo PDF...");
            const uploadResult = await uploadPdf(blob, params.fileName);

            setPreviewUrl(uploadResult.previewUrl);
            setDownloadUrl(uploadResult.downloadUrl);

            setFeedMessage("📧 Enviando email...");
            await sendBudgetEmail({
                from: params.from,
                to: params.to,
                subject: params.subject,
                message: params.message,
                previewUrl: uploadResult.previewUrl,
                downloadUrl: uploadResult.downloadUrl,
            });

            setSuccess(true);

            return uploadResult;

        } catch (err) {
            console.error(err);
            setError(
                "⚠️ Error de conexión con el servicio de correo. Reintentar en unos minutos."
            );
            throw err;

        } finally {
            setLoading(false);
            setFeedMessage('');
        }
    };

    return {
        loading,
        error,
        success,
        previewUrl,
        downloadUrl,
        feedMessage,
        sendEmail,
    };
};