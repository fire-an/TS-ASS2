import { IUser } from "../type/user";
import instance from "./instance";

export const login = (user:IUser) =>{
    return instance.post('/users',user)
}