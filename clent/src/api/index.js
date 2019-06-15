import request from "../utils/request"
export default {

    // 首页数据home
    getdata:(data)=>request.get("/api/user/info", {data}),
    // 详情页数据
    getres:(data)=>request.get("",{data})
    // 
}