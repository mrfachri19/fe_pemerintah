import { Select } from "antd";
import React, { useEffect, useState } from "react";
import {
  kegiatanPrioritas,
  majorProject,
  prioritasNasional,
  programPrioritas,
  rencanaKerja,
} from "../../api";
import { Messaege } from "../../helper/message";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Dashboard() {
  const history = useHistory();
  const [unitKerja, setUnitKerja] = useState("");
  const [nomenklatur, setNomenKlatur] = useState("");
  const [anggaran, setAnggaran] = useState("");
  const [prioritas, setPrioritas] = useState(false);
  const [jp, setJp] = useState("");
  const [pn, setPn] = useState("");
  const [listpn, setlistPn] = useState([]);
  const [pp, setPp] = useState("");
  const [listpp, setlistPp] = useState([]);
  const [kp, setKp] = useState("");
  const [listkp, setlistKp] = useState([]);
  const [mp, setMp] = useState("");
  const [listmp, setlistMp] = useState([]);
  const [total, setTotal] = useState("");

  const handleChangepn = (value) => {
    console.log(`selected ${value}`);
    setPn(value);
  };
  const handleChangepp = (value) => {
    console.log(`selected ${value}`);
    setPn(value);
  };
  const handleChangemp = (value) => {
    console.log(`selected ${value}`);
    setPn(value);
  };
  const handleChangekp = (value) => {
    console.log(`selected ${value}`);
    setPn(value);
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
        prioritas,
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
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      onChange={() => setPrioritas(true)}
                    />
                    <span className="ml-2 text-sm font-medium text-slate-600">
                      Prioritas
                    </span>
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
                  defaultValue="Meningkatkan Sumber Daya Manusia Berkualitas Dan Berdaya"
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
                  defaultValue="Pembangunan Wilayah Nusa Tenggara"
                  className="text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  onChange={handleChangepp}
                  options={listpp}
                />
              </div>
              <div className="relative w-full">
                <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                  Kegiatan Prioritas
                </label>
                <Select
                  defaultValue="Pengembangan Daerah Tertinggal, Kawasan Perbatasan, Perdesaan, dan Transmigrasi"
                  className="text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  onChange={handleChangekp}
                  options={listkp}
                />
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
                  defaultValue="10 Destinasi Pariwisata Prioritas"
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
        onClick={PostRencanaKerja}
      >
        Submit
      </button>
    </>
  );
}
