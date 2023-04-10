import instance from "./instance";
import { ICategory } from "../type/category";

const addCategory = (category: ICategory) => {
    return instance.post('/categories', category);
}
const deleteCategory = (id: number) => {
    return instance.delete('/categories/' + id);
}
const updateCategory = (category: ICategory) => {
    return instance.put('/categories/' + category.id, category);
}
const getAllCategory = () => {
    return instance.get('/categories');
}
const getOneCategory = (id: number) => {
    return instance.get('/categories/' + id);
}

export {getAllCategory,getOneCategory,updateCategory,deleteCategory,addCategory }