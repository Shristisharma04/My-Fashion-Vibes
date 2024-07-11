// src/unsplashService.js
const UNSPLASH_ACCESS_KEY = '-5vcjmyNPDTAZoYLDjyqA1GMaz67QQkeX8ct_RzyIhs';

export const fetchProducts = async () => {
  try {
    const response = await fetch('https://api.unsplash.com/search/photos?query=partywear+dress&per_page=8', {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching products from Unsplash:', error);
    throw error;
  }
};

export const searchDresses = async (query) => {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=8`, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.results.map((photo) => ({
      title: photo.alt_description || 'No description',
      url: photo.urls.small,
      id: photo.id,
    }));
  } catch (error) {
    console.error('Error searching dresses on Unsplash:', error);
    throw error;
  }
};
