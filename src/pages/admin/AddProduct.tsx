import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"; //import useForm hook
import { IProduct } from "../../type/product";
import { Button, Form, Input, InputNumber, Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { redirect } from "react-router-dom";
interface IProps {
  onAdd: (product: IProduct) => void;
}
interface IFormInput {
  id: number;
  name: string;
  price: number;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const AddProductPage = (props: IProps) => {
  // const { register, handleSubmit } = useForm<IFormInput>()
  // //register là hàm dể đăng ký các trường dữ liệu trong form
  // //handleSubmit là hàm dể xử lý khi submit form
  // const onHandleSubmit: SubmitHandler<IFormInput> = (data: IProduct) => {
  //     props.onAdd(data);
  // }
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    const newProduct = {
      id: values.id,
      name: values.name,
      price: values.price,
      description: values.description,
      categoryId: values.categoryId,
      image: values.image.file.name,
    };
    props.onAdd(newProduct);
    alert("Successfully");
    navigate("/admin/products");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // upload image
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  // setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
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
          label="Tên sản phẩm"
          name="name"
          rules={[
            { required: true, message: "Không được để trống tên sản phẩm!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá sản phẩm"
          name="price"
          rules={[
            { required: true, message: "Không được để trống giá sản phẩm!" },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="description"
          rules={[{ required: true, message: "Cần phải có mô tả!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Danh mục"
          name="categoryId"
          rules={[{ required: true, message: "Không được để trống danh mục!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Ảnh"
          name="image"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Upload
            // action="http://localhost:3000/products"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          {/* <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal> */}
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add New Product
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

export default AddProductPage;
