import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: `http://localhost:666`,
    headers: {
        'content-type': "application/json",
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
   
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.authorization = `Bearer ${token}`
      
    }
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
  
    throw error;
});
export default axiosClient;