import axios from "axios"
const BASE_URL = process.env.REACT_APP_BASE_URL
export const axiosInstance = axios.create({});

export const apiConnector = (method, bodyData, headers, params) => {
    return axiosInstance({
        method:`${method}`,
        url:BASE_URL + "/enroll",
        data: bodyData ? bodyData : null,
        headers: headers ? headers: null,
        params: params ? params : null,
    });
}

// const response = await apiConnector(
//     "POST",
//     url to call,
//     data to be send
// 
//   )





