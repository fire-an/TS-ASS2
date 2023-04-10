import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "./api/product";
import { addUser, deleteUser, getAllUser, getOneUser } from "./api/user";
import AddProductPage from "./pages/admin/AddProduct";
import AddUserPage from "./pages/admin/AddUser";
import AddCategoryPage from "./pages/admin/AddCategory";
import Dashboard from "./pages/admin/Dashboard";
import ProductManagementPage from "./pages/admin/ProductManagement";
import UpdateProductPage from "./pages/admin/UpdateProduct";
import HomePage from "./pages/HomePage";
import AdminLayout from "./pages/layouts/AdminLayout";
import ProductPage from "./pages/Product";
import ProductDetailPage from "./pages/ProductDetail";
import CategoryManagementPage from "./pages/admin/CategoryManagement";
import UserManagementPage from "./pages/admin/UserManagement";
import { IProduct } from "./type/product";
import { ICategory } from "./type/category";
import { IUser } from "./type/user";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "./api/category";

import SignUpPage from "./pages/SignUp";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data));
  }, []);
  useEffect(() => {
    getAllUser().then(({ data }) => setUsers(data));
  }, []);
  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data));
  }, []);
  //product
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() =>
      setProducts(products.filter((item: IProduct) => item.id !== id))
    );
  };
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() =>
      getAllProduct().then(({ data }) => setProducts(data))
    );
  };
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() =>
      getAllProduct().then(({ data }) => setProducts(data))
    );
  };
  //categories
  const onHandleRemoveCategory = (id: number) => {
    deleteCategory(id).then(() =>
      setCategories(products.filter((item: ICategory) => item.id !== id))
    );
  };
  const onHandleAddCategory = (category: ICategory) => {
    addCategory(category).then(() =>
      getAllCategory().then(({ data }) => setCategories(data))
    );
  };
  const onHandleUpdateCategory = (category: ICategory) => {
    updateCategory(category).then(() =>
      getAllCategory().then(({ data }) => setCategories(data))
    );
  };
  //user
  const onHandleRemoveUser = (id: number) => {
    deleteUser(id).then(() =>
      setUsers(users.filter((item: IUser) => item.id !== id))
    );
  };
  const onHandleAddUser = (user: IUser) => {
    addUser(user).then(() => getAllUser().then(({ data }) => setUsers(data)));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <HomePage
                products={products}
                categories={categories}
                onRemove={onHandleRemove}
              />
            }
          />
          <Route
            path="products"
            element={
              <ProductPage products={products} onRemove={onHandleRemove} />
            }
          />
          <Route
            path="signup"
            element={<SignUpPage onAdd={onHandleAddUser} />}
          />

          <Route
            path="products/:id"
            element={<ProductDetailPage products={products} />}
          />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route
              index
              element={
                <ProductManagementPage
                  products={products}
                  onRemove={onHandleRemove}
                />
              }
            />
            <Route
              path="add"
              element={<AddProductPage onAdd={onHandleAdd} />}
            />
            <Route
              path=":id/update"
              element={
                <UpdateProductPage
                  onUpdate={onHandleUpdate}
                  products={products}
                />
              }
            />
          </Route>
          <Route path="categories">
            <Route
              index
              element={
                <CategoryManagementPage
                  categories={categories}
                  onRemove={onHandleRemoveCategory}
                />
              }
            />
            <Route
              path="add"
              element={<AddCategoryPage onAdd={onHandleAddCategory} />}
            />
          </Route>
          <Route path="users">
            <Route
              index
              element={
                <UserManagementPage
                  users={users}
                  onRemove={onHandleRemoveUser}
                />
              }
            />
            <Route
              path="add"
              element={<AddUserPage onAdd={onHandleAddUser} />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
