import axios from "axios";
// import { promises } from "fs";
import router from "../router/index"
const request = axios.create({
});
request.interceptors.request.use((config) => {
    return ({
        ...config,
        headers: {
            ...config.headers,
            token:window.localStorage.getItem("token")
            }
    })
}, (error) => Promise.reject(error))
request.interceptors.response.use((response) => {
    return {
        ...response
    }
}, (error) => {
    const response = error.response;
    const status = response.status;
    // console.log(status)
    if (status > 400) {
        switch (status) {
            case 401:
                router.push("/loaging")
                break
            case 403:
                alert("没有权限");
                break;
            case 404:
                alert("页面走丢了")
                break;

        }
    }
    return Promise.reject(error)
})
export default {
    get(url,data){
      return   request.get(url,{
        params:data
        })
    },
    post(url,data){
       return request.post(url,{...data})
    }
}