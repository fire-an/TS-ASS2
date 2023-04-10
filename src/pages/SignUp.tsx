import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"; //import useForm hook
import { IUser } from "../type/user";
import { Button, Form, Input, Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { redirect } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
interface IProps {
  onAdd: (product: IUser) => void;
}
interface IFormInput {
  id: number;
  name: string;
  email: string;
  password: string;
}
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const SignUpPage = (props: IProps) => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const newUser = {
      id: values.id,
      name: values.name,
      email: values.email,
      password: values.password,
    };
    props.onAdd(newUser);
    alert("Successfully");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <header className="container mx-auto flex justify-between items-center">
        <nav>
          <a className="px-4 py-3" href="#">
            Danh mục 1
          </a>
          <a className="px-4 py-3" href="#">
            Danh mục 2
          </a>
          <a className="px-4 py-3" href="#">
            Danh mục 3
          </a>
          <a className="px-4 py-3" href="#">
            Danh mục 4
          </a>
          <a className="px-4 py-3" href="#">
            Danh mục 5
          </a>
        </nav>
        <form action="">
          <input className="border-2 mr-2" type="text" placeholder="Tìm kiếm" />
          <input className="bg-[#34A1E8]" type="submit" />
        </form>
        <div>
          <button className="mx-3 border p-2">
            <a href="/signin">Đăng nhập</a>
          </button>
          <button className="mx-3 border p-2">
            <a href="/signup">Đăng ký</a>
          </button>
        </div>
      </header>
      <section>
        <img
          src="https://hoangphuongtek.com/wp-content/uploads/2021/03/Banner-Infinity-Gear.jpg"
          alt=""
        />
      </section>
      <h2 className="text-center font-bold text-4xl my-5">Đăng ký</h2>
      <section>
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Tên người dùng"
              name="name"
              rules={[{ required: true, message: "Không được để trống tên!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Không được để trống email!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Không được để trống!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="default" htmlType="submit">
                Thêm người dùng
              </Button>
            </Form.Item>
          </Form>

          {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button type="submit">Add New Product</button>
            </form> */}
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
