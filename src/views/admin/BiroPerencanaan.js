import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { listrencanaKerja } from "../../api";
import { Space, Table } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import moment from "moment";
const BiroPerencanaan = () => {
  const history = useHistory();
  const columns = [
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Nomenklatur",
      dataIndex: "unit",
      key: "unit",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      render: (text) => (
        <a>{moment(text, "YYYY-MM-DD").format("D MMMM YYYY")}</a>
      ),
    },
    {
      title: "Prioritas",
      key: "tags",
      dataIndex: "tags",
      render: (text) => (
        <a className="flex justify-center">
          {text == 1 ? (
            <CheckCircleOutlined className="text-green-500" />
          ) : (
            <CloseCircleOutlined className="text-gray-500" />
          )}
        </a>
      ),
    },
    {
      title: "Skor",
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
      title: "Jumlah Penilai",
      dataIndex: "penilai",
      key: "penilai",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (id) => (
        <Space size="middle">
          <a>
            <DownloadOutlined
              onClick={() => {
                history.push(`/admin/table/${id}`);
              }}
            />
          </a>
          <a>
            <button
              className="bg-yellow-500 text-white text-xs font-normal px-2 py-1 rounded-lg shadow outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                history.push(`/admin/penilaian/${id}`);
              }}
            >
              Nilai
            </button>
          </a>
        </Space>
      ),
    },
  ];
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
    data.unit = item.nomenklatur;
    data.tanggal = item.createdAt;
    data.tags = item.prioritas;
    data.address = item.skor ? item.skor : "0";
    data.mean = item.mean;
    data.penilai = item.penilai;
    data.action = item.id;

    return data;
  });
  return <Table columns={columns} dataSource={items} />;
};
export default BiroPerencanaan;
