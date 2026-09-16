import html2pdf from "html2pdf.js";

interface generarPDFProps {
    element: HTMLElement
    fileName: string
}

export const generatePDF = async ({ element, fileName }: generarPDFProps ) => {

    html2pdf()
    .from(element)
    .set({
    margin: 0,
    filename: fileName
    })
    .save()
}

export const generatePdfBlob = async (element: HTMLElement): Promise<Blob> => {

    const blob = await html2pdf()
        .from(element)
        .outputPdf("blob");
    return blob;
};