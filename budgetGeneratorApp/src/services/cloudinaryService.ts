export interface CloudinaryUploadResponse {
    previewUrl: string
    downloadUrl: string
    publicId: string
    bytes: number
    createdAt: string
}

interface CloudinaryRawResponse {
    secure_url: string
    public_id: string
    bytes: number
    created_at: string
}

export const uploadPdf = async (
    file: Blob,
    fileName: string
): Promise<CloudinaryUploadResponse> => {

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

    const formData = new FormData();
    formData.append("file", file, fileName);
    formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error("Cloudinary upload failed");
    }

    const data: CloudinaryRawResponse = await response.json();

    if (!data.secure_url) {
        throw new Error("Cloudinary secure_url missing");
    }

    const previewUrl = data.secure_url;

    const downloadUrl = previewUrl.replace(
        "/upload/",
        "/upload/fl_attachment/"
    );

    return {
        previewUrl,
        downloadUrl,
        publicId: data.public_id,
        bytes: data.bytes,
        createdAt: data.created_at,
    };
};