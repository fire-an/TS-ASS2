import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"; //import useForm hook
import { ICategory } from "../../type/category";
import { Button, Form, Input, Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { useNavigate, useParams } from "react-router-dom";
import { redirect } from "react-router-dom";
interface IProps {
  onAdd: (product: ICategory) => void;
}
interface IFormInput {
  id: number;
  name: string;
}
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const AddCategoryPage = (props: IProps) => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const newCategory = {
      id: values.id,
      name: values.name,
    };
    props.onAdd(newCategory);
    alert("Successfully");
    navigate("/admin/categories");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
          label="Tên danh mục"
          name="name"
          rules={[{ required: true, message: "Không được để trống tên!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Thêm danh mục
          </Button>
        </Form.Item>
      </Form>

      {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button type="submit">Add New Product</button>
            </form> */}
    </div>
  );
};

export default AddCategoryPage;
