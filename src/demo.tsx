import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  age: number;
  tel: string;
  phone: number;
  address: string;
}

const data: DataType[] = [
  {
    key: "1",
    tel: "0571-22098909",
    address: "New York No. 1 Lake Park",
    children: [
      {
        name: "John Brown",
        age: 32,
        phone: 18889898989,
      },
      {
        name: "Lary Brown",
        age: 18,
        phone: 18889898988,
      },
      {
        name: "Goer Brown",
        age: 16,
        phone: 18889898987,
      },
    ],
  },
  {
    key: "2",
    tel: "0571-22098333",
    address: "London No. 2 Lake Park",
    children: [
      {
        name: "Jim Green",
        age: 42,
        phone: 13389898888,
      },
      {
        name: "Argk Hode",
        age: 39,
        phone: 13389898887,
      },
    ],
  },
  {
    key: "3",
    tel: "0575-22098909",
    address: "Sidney No. 1 Lake Park",
    children: [
      {
        name: "Joe Black",
        age: 32,
        phone: 18900010002,
      },
      {
        name: "Joker White",
        age: 42,
        phone: 18900010002,
      },
    ],
  },
  {
    key: "4",
    tel: "0575-22098909",
    address: "London No. 3 Lake Park",
    children: [
      {
        name: "Jim Red",
        age: 18,
        phone: 18900010002,
      },
    ],
  },
  {
    key: "5",
    tel: "0575-22098909",
    address: "Dublin No. 2 Lake Park",
    children: [
      {
        name: "Jake White",
        age: 23,
        phone: 18000010002,
      },
    ],
  },
].reduce((ac, item) => {
  const { children, key, ...rest } = item;
  children.forEach((child, i) => {
    ac.push({
      ...child,
      ...rest,
      key: `${key}-${i}`,
      rowSpan: i === 0 ? children.length : 0,
    });
  });
  return ac;
}, []);
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (_: DataType, index: number) => {
  return { rowSpan: _.rowSpan };
};

const columns: ColumnsType<DataType> = [
  {
    title: "Address",
    dataIndex: "address",
    onCell: sharedOnCell,
  },
  {
    title: "Home phone",
    dataIndex: "tel",
    onCell: sharedOnCell,
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
];

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} bordered />
);

export default App;
