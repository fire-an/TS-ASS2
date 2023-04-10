// import { useEffect, useState } from "react";
// import { IProduct } from "../type/product";
// import { ICategory } from "../type/category";
// import { useForm } from "react-hook-form";
// import { Button, Form, Input, Modal, Upload } from "antd";
// interface IProps {
//   products: IProduct[];
//   categories: ICategory[];
//   onRemove: (id: number) => void;
// }
// const SignInPage = (props: IProps) => {
//   const [data, setData] = useState<IProduct[]>([]);
//   const [category, setCategory] = useState<ICategory[]>([]);
//   const onFinish = (values: any) => {
//     const newUser = {
//       id: values.id,
//       name: values.name,
//       email: values.email,
//       password: values.password,
//     };
//     props.onAdd(newUser);
//     alert("Successfully");
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log("Failed:", errorInfo);
//   };
//   useEffect(() => {
//     setData(props.products);
//   }, [props]);
//   useEffect(() => {
//     setCategory(props.categories);
//   }, [props]);
//   const removeProduct = (id: number) => {
//     props.onRemove(id);
//   };
//   return (
//     <div>
//       <header className="container mx-auto flex justify-between items-center">
//         <nav>
//           <a className="px-4 py-3" href="#">
//             Danh mục 1
//           </a>
//           <a className="px-4 py-3" href="#">
//             Danh mục 2
//           </a>
//           <a className="px-4 py-3" href="#">
//             Danh mục 3
//           </a>
//           <a className="px-4 py-3" href="#">
//             Danh mục 4
//           </a>
//           <a className="px-4 py-3" href="#">
//             Danh mục 5
//           </a>
//         </nav>
//         <form action="">
//           <input className="border-2 mr-2" type="text" placeholder="Tìm kiếm" />
//           <input className="bg-[#34A1E8]" type="submit" />
//         </form>
//         <div>
//           <button className="mx-3 border p-2">
//             <a href="/signin">Đăng nhập</a>
//           </button>
//           <button className="mx-3 border p-2">
//             <a href="/signup">Đăng ký</a>
//           </button>
//         </div>
//       </header>
//       <section>
//         <img
//           src="https://hoangphuongtek.com/wp-content/uploads/2021/03/Banner-Infinity-Gear.jpg"
//           alt=""
//         />
//       </section>
//       <h2 className="text-center font-bold text-4xl my-5">Sản phẩm mới</h2>
//       <section>
//         <div>
//           <Form
//             name="basic"
//             labelCol={{ span: 8 }}
//             wrapperCol={{ span: 16 }}
//             style={{ maxWidth: 600 }}
//             initialValues={{ remember: true }}
//             onFinish={onFinish}
//             onFinishFailed={onFinishFailed}
//             autoComplete="off"
//           >
//             <Form.Item
//               label="Tên người dùng"
//               name="name"
//               rules={[{ required: true, message: "Không được để trống tên!" }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Email"
//               name="email"
//               rules={[
//                 { required: true, message: "Không được để trống email!" },
//               ]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Mật khẩu"
//               name="password"
//               rules={[{ required: true, message: "Không được để trống!" }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//               <Button type="primary" htmlType="submit">
//                 Thêm người dùng
//               </Button>
//             </Form.Item>
//           </Form>

//           {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
//                 <input type="text" {...register("name")} />
//                 <input type="number" {...register("price")} />
//                 <button type="submit">Add New Product</button>
//             </form> */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SigninPage;
