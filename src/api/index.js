import requests from "./request";
export const reqGrade=(username)=>requests(
    {
        url:`/grade?username=${username}`,
        method:'get'
    }
)

export const reqLogin=(username,password)=>requests(
    {
        url:`/login?username=${username}&password=${password}`,
        method:'get'
    }
)