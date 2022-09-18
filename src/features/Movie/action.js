import instance from "api/instance";

export const SET_MOVIES = "movie/SET_MOVIES";

export const fetchMoviesAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: "/api/QuanLyPhim/LayDanhSachPhim",
      method: "GET",
      params: {
        maNhom: "GP07",
      },
    });
    dispatch({
      type: SET_MOVIES,
      payload: res.data.content,
    });
  } catch (err) {
    console.log("errors", err.response?.data);
  }
};
