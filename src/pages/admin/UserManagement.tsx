import React from "react";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IUser } from "../../type/user";
import { Link } from "react-router-dom";

interface DataType {
  key: string | number;
  id: number;
  name: string;
  email: string;
  password: string;
}
interface IProps {
  users: IUser[];
  onRemove: (id: number) => void;
}

const UserManagementPage = (props: IProps) => {
  const removeUser = (id: number) => {
    props.onRemove(id);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Username",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
            onClick={() => removeUser(record.id)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.users.map((item: IUser) => {
    return {
      key: item.id,
      ...item,
    };
  });

  return (
    <div>
      <h1 className="font-bold text-3xl mb-4">Quản lý người dùng</h1>
      <Button type="default">
        <Link to={"/admin/users/add"}>Thêm người dùng</Link>
      </Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default UserManagementPage;
