import html2pdf from "html2pdf.js";

export const generatePdfBlob = async (elementId: string): Promise<Blob> => {
    const element = document.getElementById(elementId);

    if (!element) {
        throw new Error("Elemento PDF no encontrado");
    }

    const prevScale = element.style.transform;
    element.style.transform = 'scale(1)';

    const blob = await html2pdf()
        .from(element)
        .outputPdf("blob");
        
    element.style.transform = prevScale;

    return blob;
};