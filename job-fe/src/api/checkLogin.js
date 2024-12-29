import { message } from "antd";
import axiosClient from "./axiosClient";

class CheckLoginApi {
    checkLogin = (params) => {
        const url = '/checkLogin';
        return axiosClient.get(url);

    };

}
const checkLoginApi = new CheckLoginApi();
export default checkLoginApi;