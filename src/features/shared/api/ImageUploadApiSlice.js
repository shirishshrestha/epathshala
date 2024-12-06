import { createAxiosInstance } from "../utils/instance";

const instance = createAxiosInstance();

export const getPresignedUrlForImage = async (folder) => {
  try {
    const response = await instance.get(`url/?imageFor=${folder}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const uploadImageToCloudinary = async (file, presignedData) => {
  const data = presignedData?.data.data;

  const formData = new FormData();
  formData.append("folder", data.folder);
  formData.append("timestamp", data.timestamp);
  formData.append("upload_preset", data.upload_preset);
  formData.append("signature", data.signature);
  formData.append("api_key", data.api_key);

  // Include file or image
  if (file) {
    formData.append("file", file);
  }

  const postUrl = data.postUrl;

  try {
    const response = await fetch(postUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.secure_url;
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
