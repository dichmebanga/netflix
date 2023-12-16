import axios from "axios"

export async function getDataFilmMoiCapNhap(page: any) {
  try {
    const response = await axios({
      method: "get",
      url: `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${page}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error in getDataFilmMoiCapNhap:', error);
    throw error;
  }
}

