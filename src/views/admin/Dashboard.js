import { Select, Radio } from "antd";
import React, { useEffect, useState } from "react";
import {
  kegiatanPrioritas,
  majorProject,
  prioritasNasional,
  programPrioritas,
  rencanaKerja,
  updateRencanaKerja,
} from "../../api";
import { Messaege } from "../../helper/message";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

export default function Dashboard() {
  const history = useHistory();
  const { id } = useParams();
  const [unitKerja, setUnitKerja] = useState("");
  const [nomenklatur, setNomenKlatur] = useState("");
  const [anggaran, setAnggaran] = useState("");
  const [jp, setJp] = useState("");
  const [pn, setPn] = useState("");
  const [listpn, setlistPn] = useState([]);
  const [pp, setPp] = useState("");
  const [listpp, setlistPp] = useState([]);
  const [kp, setKp] = useState("");
  const [listkp, setlistKp] = useState([]);
  const [mp, setMp] = useState("");
  const [listmp, setlistMp] = useState([]);
  // const [total, setTotal] = useState("");
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);
  const onChange1 = (e) => {
    console.log("radio checked", e.target.value);
    setValue1(e.target.value);
  };
  const onChange2 = (e) => {
    console.log("radio checked", e.target.value);
    setValue2(e.target.value);
  };
  const onChange3 = (e) => {
    console.log("radio checked", e.target.value);
    setValue3(e.target.value);
  };
  const handleChangepn = (value) => {
    console.log(`selected ${value}`);
    setPn(value);
  };
  const handleChangepp = (value) => {
    console.log(`selected ${value}`);
    setPp(value);
  };
  const handleChangemp = (value) => {
    console.log(`selected ${value}`);
    setMp(value);
  };
  const handleChangekp = (value) => {
    console.log(`selected ${value}`);
    setKp(value);
  };

  function getprioritasNasional() {
    prioritasNasional().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setlistPn(tempList);
    });
  }
  function getkegiatanPrioritas() {
    kegiatanPrioritas().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setlistKp(tempList);
    });
  }
  function getMajorProject() {
    majorProject().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setlistMp(tempList);
    });
  }
  function getprogramPrioritas() {
    programPrioritas().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setlistPp(tempList);
    });
  }

  useEffect(() => {
    getprioritasNasional();
    getMajorProject();
    getkegiatanPrioritas();
    getprogramPrioritas();
    console.log(pn);
  }, []);

  const PostRencanaKerja = async (e) => {
    try {
      e.preventDefault();
      const response = await rencanaKerja({
        nama: localStorage.getItem("nama"),
        unitKerja,
        idSekretariatDeputi: localStorage.getItem("iduser"),
        nomenklatur,
        anggaranAwal: anggaran,
        prioritas: value1,
        dibawakanRapatkoordinasi: value2,
        tercantumDalamLaporan: value3,
        prioritasNasional: pn,
        prioritasProgram: pp,
        prioritasKegiatan: kp,
        janjiPresiden: jp,
        majorProject: mp,
        mean: "2",
        status: "submitted",
        // totalAnggaranTambahan: "",
        totalAnggaranKomponen: "Rp. 1.088.088.000",
      });
      Messaege("Succes", "Success submitted", "success");
      setTimeout(() => {
        history.push("/admin/submitted");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `failed submiited`, "error");
    }
  };

  const EditRencanaKerja = async (e) => {
    try {
      e.preventDefault();
      const response = await updateRencanaKerja(`/${id}`, {
        nama: localStorage.getItem("nama"),
        unitKerja,
        idSekretariatDeputi: localStorage.getItem("iduser"),
        nomenklatur,
        anggaranAwal: anggaran,
        prioritas: value1,
        dibawakanRapatkoordinasi: value2,
        tercantumDalamLaporan: value3,
        prioritasNasional: pn,
        prioritasProgram: pp,
        prioritasKegiatan: kp,
        janjiPresiden: jp,
        majorProject: mp,
        mean: "2",
        status: "submitted",
        // totalAnggaranTambahan: "",
        totalAnggaranKomponen: "Rp. 1.088.088.000",
      });
      Messaege("Succes", "Success submitted", "success");
      setTimeout(() => {
        history.push("/admin/submitted");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `failed submiited`, "error");
    }
  };

  return (
    <>
      {/* section 1 */}
      <div>
        <h2 className="font-bold text-2xl">Rencana Kinerja dan Anggaran</h2>
        <div className="relative flex flex-col break-words mb-6 shadow-lg rounded-lg border bg-white  mt-10">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="py-10">
              <div className="relative w-full mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Unit Kerja
                </label>
                <input
                  type="text"
                  className="border px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder=""
                  onChange={(e) => setUnitKerja(e.target.value)}
                />
              </div>

              <div className="relative w-full mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Nomenklatur Komponen
                </label>
                <textarea
                  type="text"
                  className="border px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder=""
                  onChange={(e) => setNomenKlatur(e.target.value)}
                />
              </div>
              <div className="relative w-full mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Anggaran Awal
                </label>
                <input
                  type="text"
                  className="border px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder=""
                  onChange={(e) => setAnggaran(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Kegiatan Prioritas
                </label>
                <div className="">
                  <label className="inline-flex items-center cursor-pointer">
                    <Radio.Group onChange={onChange1} value={value1}>
                      <Radio value={1}>Ya</Radio>
                      <Radio value={2}>Tidak</Radio>
                    </Radio.Group>
                  </label>
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
              <div className="relative w-full mb-10">
                <h2 className="font-bold text-xl mb-10">RPJMN 2020-2024</h2>

                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Prioritas Nasional
                </label>
                <Select
                  defaultValue="Pilih Prioritas"
                  className="text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  onChange={handleChangepn}
                  options={listpn}
                />
              </div>

              <div className="relative w-full mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Program Prioritas
                </label>
                <Select
                  defaultValue="Pilih Prioritas"
                  className="text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  onChange={handleChangepp}
                  options={listpp}
                />
              </div>
              <div className="relative w-full mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Kegiatan Prioritas
                </label>
                <Select
                  defaultValue="Pilih Prioritas"
                  className="text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  onChange={handleChangekp}
                  options={listkp}
                />
              </div>
              <div className="flex justify-between mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Dibawakan dalam Rapat Koordinasi
                </label>
                <div className="">
                  <label className="inline-flex items-center cursor-pointer">
                    <Radio.Group onChange={onChange2} value={value2}>
                      <Radio value={1}>Ya</Radio>
                      <Radio value={2}>Tidak</Radio>
                    </Radio.Group>
                  </label>
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Tercantum dalam Laporan
                </label>
                <div className="">
                  <label className="inline-flex items-center cursor-pointer">
                    <Radio.Group onChange={onChange3} value={value3}>
                      <Radio value={1}>Ya</Radio>
                      <Radio value={2}>Tidak</Radio>
                    </Radio.Group>
                  </label>
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
              <div className="relative w-full mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Janji Presiden
                </label>
                <input
                  type="text"
                  className="border px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder=""
                  onChange={(e) => setJp(e.target.value)}
                />
              </div>
              <div className="relative w-full mb-10">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Major Project
                </label>
                <Select
                  defaultValue="Pilih Major Project"
                  className="text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  onChange={handleChangemp}
                  options={listmp}
                />
              </div>
              {/* <div className="relative w-full">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Total Anggaran Tambahan
                </label>
                <input
                  type="text"
                  className="border px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder=""
                  onChange={(e) => setTotal(e.target.value)}
                />
              </div> */}
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
                Total Anggaran Komponen
              </label>
              <span className="ml-2 text-sm font-medium text-slate-600">
                Rp. 1.043.864.806
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-10 w-full ease-linear transition-all duration-150"
        type="button"
        onClick={localStorage.getItem('edit') == "true" ? EditRencanaKerja : PostRencanaKerja}
      >
        Submit
      </button>
      
    </>
  );
}
