import React from "react";
import { Space, Table, Button, message, Popconfirm } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "../../type/product";
import { Link } from "react-router-dom";

interface DataType {
  key: string | number;
  id: number;
  name: string;
  price: number;
  description: string;
  categoryId: number;
}
interface IProps {
  products: IProduct[];
  onRemove: (id: number) => void;
}

const ProductManagementPage = (props: IProps) => {
  const removeProduct = (id: number) => {
    props.onRemove(id);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (imgLink) => <img src={imgLink} alt="" />,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            style={{ backgroundColor: "red" }}
            onClick={() => console.log(record.id)}
          >
            Xóa
          </Button>

          <Button type="text">
            <Link to={`/admin/products/${record.id}/update`}>Cập nhật</Link>
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.products.map((item: IProduct) => {
    return {
      key: item.id,
      ...item,
    };
  });

  return (
    <div>
      <h1 className="font-bold text-3xl mb-4">Quản lý sản phẩm</h1>
      <Button type="default">
        <Link to={"/admin/products/add"}>Thêm sản phẩm</Link>
      </Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ProductManagementPage;
