import React from "react";
import { Space, Table, Button, Popconfirm } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ICategory } from "../../type/category";
import { Link } from "react-router-dom";

interface DataType {
  key: string | number;
  id: number;
  name: string;
}
interface IProps {
  categories: ICategory[];
  onRemove: (id: number) => void;
}

const CategoryManagementPage = (props: IProps) => {
  const removeCategory = (id: number) => {
    props.onRemove(id);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          {/* <Button
            type="primary"
            style={{ backgroundColor: "red" }}
            onClick={() => removeCategory(record.id)}
          >
            Xóa
          </Button> */}
          <Button
            type="primary"
            style={{ backgroundColor: "red" }}
            onClick={() => removeCategory(record.id)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.categories.map((item: ICategory) => {
    return {
      key: item.id,
      ...item,
    };
  });

  return (
    <div>
      <h1 className="font-bold text-3xl mb-4">Quản lý danh mục</h1>
      <Button type="default">
        <Link to={"/admin/categories/add"}>Thêm danh mục</Link>
      </Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default CategoryManagementPage;
