import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteFilled,
  EditFilled,
} from "@ant-design/icons";
import { listrencanaKerja } from "../../api";
const columns = [
  {
    title: "Nama",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Unit Kerja",
    dataIndex: "unit",
    key: "unit",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tanggal",
    dataIndex: "tanggal",
    key: "tanggal",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Prioritas",
    key: "tags",
    dataIndex: "tags",
    render: (text) => (
      <a>{text == "yes" ? <CheckCircleOutlined /> : <CloseCircleOutlined />}</a>
    ),
  },
  {
    title: "Status",
    dataIndex: "address",
    key: "address",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Mean",
    dataIndex: "mean",
    key: "mean",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <EditFilled />
        </a>
        <a>
          <DeleteFilled />
        </a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    unit: "Asdep Hukum dan Perjanjian Maritim",
    tanggal: "19/07/2023",
    address: "Submitted",
    tags: "no",
    mean: "2",
  },
  {
    key: "2",
    name: "Jim Green",
    unit: "Asdep Hukum dan Perjanjian Maritim",
    tanggal: "19/07/2023",
    address: "Submitted",
    tags: "yes",
    mean: "2",
  },
  {
    key: "3",
    name: "Joe Black",
    unit: "Asdep Hukum dan Perjanjian Maritim",
    tanggal: "19/07/2023",
    address: "Submitted",
    tags: "yes",
    mean: "2",
  },
];
const Submitted = () => {
  const [dataRencanaKerja, setdataRencanakerja] = useState([]);
  function getrencanaKerja() {
    listrencanaKerja().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setdataRencanakerja(tempList);
    });
  }
  useEffect(() => {
    getrencanaKerja();
  }, []);
  const items = dataRencanaKerja?.map((item) => {
    const data = {};
    data.name = item.nama;
    data.unit = item.unitKerja;
    data.tanggal = item.createdAt;
    data.address = item.status;
    data.tags = item.prioritas;
    data.mean = item.mean;

    return data;
  });
  return <Table columns={columns} dataSource={items} />;
};
export default Submitted;
