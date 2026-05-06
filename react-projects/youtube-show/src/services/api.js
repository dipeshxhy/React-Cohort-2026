import axios from 'axios';

export const getAllVideos = async () => {
  try {
    const response = await axios.get(
      `https://api.freeapi.app/api/v1/public/youtube/videos`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};
export const getRelatedVideos = async (videoId) => {
  try {
    const response = await axios.get(
      `https://api.freeapi.app/api/v1/public/youtube/related/${videoId}`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

export const getVideoById = async (videoId) => {
  try {
    const response = await axios.get(`
https://api.freeapi.app/api/v1/public/youtube/videos/${videoId}`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching video:', error);
    throw error;
  }
};
