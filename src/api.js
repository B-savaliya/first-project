import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com/",
  //   timeout: 1000,
  headers: { "X-Custom-Header": "foobar", Authorization: "Bearer token" },
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

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // console.log("this is request interceptor*********", config);

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const getRefreshToken = (token) => {
  // Your logic to refresh the token goes here
  // return refreshedToken
};

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // console.log("this is response interceptor*********", response);

    if (response.status === 401) {
      // refresh token
      // const newToken = getRefreshToken(response.headers.Authorization)
      // response.headers['Authorization'] = newToken
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
