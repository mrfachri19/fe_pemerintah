import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Space, Table } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteFilled,
  EditFilled,
} from "@ant-design/icons";
import { deleteRencanaKerja, listrencanaKerja } from "../../api";
import moment from "moment";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { Messaege } from "../../helper/message";

const Submitted = () => {
  const history = useHistory();

  const { confirm } = Modal;

  const showConfirm = (id) => {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      onOk() {
        delrencanaKerja(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  function delrencanaKerja(id) {
    deleteRencanaKerja(`/${id}`).then((res) => {
      Messaege("Succes", "Success Delete", "success");
      setTimeout(() => {
        getrencanaKerja();
      }, 2000);
      console.log(res);
    });
  }
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
      title: "Jumlah Penilai",
      dataIndex: "penilai",
      key: "penilai",
      render: (text) => <a>{text}</a>,
    },
    {
      dataIndex: "action",
      key: "action",
      render: (id) => (
        <Space size="middle" className="flex justify-center">
          <a>
            <EditFilled
              onClick={() => {
                history.push(`/admin/home/${id}`);
                localStorage.setItem("edit", "true");
              }}
            />
          </a>
          <a>
            <DeleteFilled onClick={() => showConfirm(id)} />
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
    data.address = item.status;
    data.tags = item.prioritas;
    data.mean = item.mean;
    data.action = item.id;

    return data;
  });
  return <Table columns={columns} dataSource={items} />;
};
export default Submitted;