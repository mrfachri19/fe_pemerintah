import React from "react";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { listrencanaKerja, updateRencanaKerja } from "../../api";
import { useState } from "react";
import { Messaege } from "../../helper/message";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Penilaian() {
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState({});
  const [nilai1, setnilai1] = useState(0);
  const [nilai2, setnilai2] = useState(0);
  const [nilai3, setnilai3] = useState(0);
  const [nilai4, setnilai4] = useState(0);
  const [nilai5, setnilai5] = useState(0);
  const [nilai6, setnilai6] = useState(0);

  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };

  function getIdRencanaKerja() {
    listrencanaKerja(`/${id}`).then((res) => {
      var tempList;
      tempList = res.data.data[0];
      console.log("List Data => ", tempList);
      setData(tempList);
    });
  }

  useEffect(() => {
    getIdRencanaKerja();
  }, []);

  let nilai = nilai1 + nilai2 + nilai3 + nilai4 + nilai5 + nilai6;

  const PostPenilaian = async (e) => {
    try {
      e.preventDefault();
      const response = await updateRencanaKerja(`/${id}`, {
        skor: nilai,
        totalAnggaranKomponen: nilai * 5438638057
      });
      Messaege("Succes", "Success submitted", "success");
      setTimeout(() => {
        history.push("/admin/biroPerencanaan");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `failed submiited`, "error");
    }
  };
  const sparator = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <>
      {/* section 1 */}
      <div>
        <h2 className="font-bold text-2xl">Rencana Kinerja dan Anggaran</h2>
        <div className="flex mt-3">
          <UserOutlined className="text-yellow-500 mr-1" />
          <span className="text-xs text-slate-500 mr-2">{data.nama}</span>
          <span className="text-xs text-slate-500 mr-2">.</span>
          <ClockCircleOutlined className="text-yellow-500 mr-1" />
          <span className="text-xs text-slate-500">{data.updatedAt}</span>
        </div>
        <div className="relative flex flex-col break-words mb-6 shadow-lg rounded-lg border bg-white  mt-10">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="py-10">
              <div className="relative w-full mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Unit Kerja
                </label>
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-slate-600  ">
                  {data.unitKerja}
                </label>
              </div>

              <div className="relative w-full mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Nomenklatur Komponen
                </label>
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-slate-600  ">
                  {data.nomenklatur}
                </label>
              </div>
              <div className="relative w-full mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Anggaran Awal
                </label>
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-slate-600  ">
                  {data.anggaranAwal}
                </label>
              </div>
              <div className="relative w-full mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Kegiatan Prioritas
                </label>
                <div className="flex">
                  <label className="text-grey-60 text-xs font-semibold text-slate-600  ">
                    Kegiatan Prioritas
                  </label>
                  {data.prioritas == "true" ? (
                    <CheckCircleOutlined className="text-yellow-500 ml-3" />
                  ) : (
                    <CloseCircleOutlined className="text-yellow-500 ml-3" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section  */}
      <div>
        <div className="relative flex flex-col break-words mb-6 shadow-lg rounded-lg border bg-white  mt-10">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="py-10">
              <div className="flex justify-between"></div>
              <div className="relative w-full mb-10">
                <h2 className="font-bold text-xl mb-10">RPJMN 2020-2024</h2>
                <div className="flex justify-between">
                  <div>
                    <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                      Prioritas Nasional
                    </label>
                    <label className="block text-grey-60 text-xs font-semibold text-slate-600  ">
                      {data.prioritasNasional}
                    </label>
                  </div>
                  <div className="block">
                    <span className="text-xs block text-slate-600">Skor</span>
                    <input
                      max={5}
                      min={0}
                      type="number"
                      className="border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder=""
                      onChange={(e) => setnilai1(parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <div>
                  <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                    Program Prioritas{" "}
                  </label>
                  <label className="block text-grey-60 text-xs font-semibold text-slate-600  ">
                    {data.prioritasProgram}
                  </label>
                </div>
                <div className="block">
                  <span className="text-xs block text-slate-600">Skor</span>
                  <input
                    max={5}
                    min={0}
                    type="number"
                    className="border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    placeholder=""
                    onChange={(e) => setnilai2(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                    Kegiatan Prioritas
                  </label>
                  <label className="block text-grey-60 text-xs font-semibold text-slate-600  ">
                    {data.prioritasKegiatan}
                  </label>
                </div>
                <div className="block">
                  <span className="text-xs block text-slate-600">Skor</span>
                  <input
                    max={5}
                    min={0}
                    type="number"
                    className="border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    placeholder=""
                    onChange={(e) => setnilai3(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div>
        <div className="relative flex flex-col break-words mb-6 shadow-lg rounded-lg border bg-white  mt-10">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="py-10">
              <div className="flex justify-between mb-10">
                <div>
                  <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                    Janji Presiden
                  </label>
                  <label className="block text-grey-60 text-xs font-semibold text-slate-600  ">
                    {data.janjiPresiden}
                  </label>
                </div>
                <div className="block">
                  <span className="text-xs block text-slate-600">Skor</span>
                  <input
                    max={5}
                    min={0}
                    type="number"
                    className="border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    placeholder=""
                    onChange={(e) => setnilai4(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <div>
                  <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                    Major Project
                  </label>
                  <label className="block text-grey-60 text-xs font-semibold text-slate-600  ">
                    {data.majorProject}
                  </label>
                </div>
                <div className="block">
                  <span className="text-xs block text-slate-600">Skor</span>
                  <input
                    max={5}
                    min={0}
                    type="number"
                    className="border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    placeholder=""
                    onChange={(e) => setnilai5(parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="flex justify-between mb-10">
                <div>
                  <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                    Total Anggaran Tambahan
                  </label>
                  <label className="block text-grey-60 text-xs font-semibold text-slate-600  ">
                    {data.totalAnggaranTambahan}
                  </label>
                </div>
                <div className="block">
                  <span className="text-xs block text-slate-600">Skor</span>
                  <input
                    max={5}
                    min={0}
                    type="number"
                    className="border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    placeholder=""
                    onChange={(e) => setnilai6(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="relative flex flex-col mb-6 shadow-lg rounded-lg border bg-white  mt-10">
        <div className="flex-auto px-4 lg:px-10 pt-2">
          <div className="py-10">
            <div className="flex justify-between">
              <label className="block text-grey-60 text-xs font-semibold text-grey-20  ">
                Total Skor
              </label>
              <span className="ml-2 text-sm font-medium text-slate-600">
                {nilai}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col mb-6 shadow-lg rounded-lg border bg-white  mt-10">
        <div className="flex-auto px-4 lg:px-10 pt-2">
          <div className="py-10">
            <div className="flex justify-between">
              <label className="block text-grey-60 text-xs font-semibold text-grey-20  ">
                Total Anggaran Komponen
              </label>
              <span className="ml-2 text-sm font-medium text-slate-600">
               Rp {sparator(nilai * 5438638057)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-10 w-full ease-linear transition-all duration-150"
        type="button"
        onClick={PostPenilaian}
      >
        Submit
      </button>
    </>
  );
}
