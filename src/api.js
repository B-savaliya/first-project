import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com/",
  //   timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});


export const ApiGet = async (url) => {
  try {
    const res = await instance.get(url);
    if (res.status === 200) {
      return res;
    } 
  } catch (error) {
    return error.message;
  }
};

export default instance;
