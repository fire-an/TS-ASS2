import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"; //import useForm hook
import { IUser } from "../../type/user";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { redirect } from "react-router-dom";
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
const AddUserPage = (props: IProps) => {
  const onFinish = (values: any) => {
    const newUser = {
      id: values.id,
      name: values.name,
      email: values.email,
      password: values.password,
    };
    props.onAdd(newUser);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // upload image
  // const [previewOpen, setPreviewOpen] = useState(false);
  // const [previewImage, setPreviewImage] = useState('');
  // const [previewTitle, setPreviewTitle] = useState('');
  // const [fileList, setFileList] = useState<UploadFile[]>([]);

  // const handleCancel = () => setPreviewOpen(false);

  // const handlePreview = async (file: UploadFile) => {
  //     if (!file.url && !file.preview) {
  //         file.preview = await getBase64(file.originFileObj as RcFile);
  //     }

  //     setPreviewImage(file.url || (file.preview as string));
  //     setPreviewOpen(true);
  //     setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  // };

  // const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);

  // setFileList(newFileList);

  // const uploadButton = (
  //     <div>
  //         <PlusOutlined />
  //         <div style={{ marginTop: 8 }}>Upload</div>
  //     </div>
  // );
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
          label="Tên người dùng"
          name="name"
          rules={[{ required: true, message: "Không được để trống tên!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Không được để trống email!" }]}
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
          <Button type="primary" htmlType="submit">
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
  );
};

export default AddUserPage;
