import instance from "./instance";
import { IUser } from "../type/user";

const getAllUser  = () => {
    return instance.get('/users');
}
const getOneUser = (id: number) => {
    return instance.get('/products/' + id);
}
const addUser = (user: IUser) => {
    return instance.post('/users', user);
}
const deleteUser = (id: number) => {
    return instance.delete('/products/' + id);
}
// const updateProduct = (product: IProduct) => {
//     return instance.put('/products/' + product.id, product);
// }


export { getAllUser, getOneUser, addUser, deleteUser}