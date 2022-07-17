

export const fileUpload = async(file) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/mannelpz25/upload';
    const formData = new FormData();
    formData.append('upload_preset','journal-app');
    formData.append('file',file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        const cloudResp  = await resp.json();
        return cloudResp.secure_url;
        
    } catch (error) {
        throw new Error (error.message);
    }

}
