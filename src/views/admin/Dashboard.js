import { Select, Radio } from "antd";
import React, { useEffect, useState } from "react";
import {
  janjiPresiden,
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
  const [pn, setPn] = useState("");
  const [listpn, setlistPn] = useState([]);
  const [pp, setPp] = useState("");
  const [listpp, setlistPp] = useState([]);
  const [kp, setKp] = useState("");
  const [listkp, setlistKp] = useState([]);
  const [mp, setMp] = useState("");
  const [listmp, setlistMp] = useState([]);
  const [jp, setJp] = useState("");
  const [listJp, setlistJp] = useState([]);
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
  const handleChangepn = (value, data) => {
    console.log(`selected ${value}`);
    console.log(data);
    setPn(data);
  };
  const handleChangepp = (value, data) => {
    console.log(`selected ${value}`);
    setPp(data);
  };
  const handleChangemp = (value, data) => {
    console.log(`selected ${value}`);
    setMp(data);
  };
  const handleChangejp = (value, data) => {
    console.log(`selected ${value}`);
    setJp(data);
  };
  const handleChangekp = (value, data) => {
    console.log(`selected ${value}`);
    setKp(data);
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
      if (pn.id === 1) {
        let temps = tempList.filter((item) => {
          return item.id < 46;
        });
        setlistKp(temps);
      }
      // pn 1 ============================
      else if (pp.id === 1 && pn.id === 1) {
        let temps = tempList.filter((item) => {
          return item.id < 6;
        });
        setlistKp(temps);
      } else if (pp.id === 2 && pn.id === 1) {
        let temps = tempList.filter((item) => {
          return item.id < 12 && item.id > 5;
        });
        setlistKp(temps);
      } else if (pp.id === 3 && pn.id === 1) {
        let temps = tempList.filter((item) => {
          return item.id < 17 && item.id > 11;
        });
        setlistKp(temps);
      } else if (pp.id === 4 && pn.id === 1) {
        let temps = tempList.filter((item) => {
          return item.id < 22 && item.id > 16;
        });
        setlistKp(temps);
      } else if (pp.id === 5 && pn.id === 1) {
        let temps = tempList.filter((item) => {
          return item.id < 27 && item.id > 21;
        });
        setlistKp(temps);
      } else if (pp.id === 6 && pn.id === 1) {
        let temps = tempList.filter((item) => {
          return item.id < 33 && item.id > 26;
        });
        setlistKp(temps);
      } else if (pp.id === 7 && pn.id === 1) {
        let temps = tempList.filter((item) => {
          return item.id < 40 && item.id > 32;
        });
        setlistKp(temps);
      } else if (pp.id === 8 && pn.id === 1) {
        let temps = tempList.filter((item) => {
          return item.id < 46 && item.id > 39;
        });
        setlistKp(temps);
      }
      // pn 2 ==============================================
      else if (pn.id === 2) {
        let temps = tempList.filter((item) => {
          return item.id < 81 && item.id >= 46;
        });
        setlistKp(temps);
      } else if (pp.id === 1 && pn.id === 2) {
        let temps = tempList.filter((item) => {
          return item.id < 51 && item.id >= 46;
        });
        setlistKp(temps);
      } else if (pp.id === 2 && pn.id === 2) {
        let temps = tempList.filter((item) => {
          return item.id < 56 && item.id >= 51;
        });
        setlistKp(temps);
      } else if (pp.id === 3 && pn.id === 2) {
        let temps = tempList.filter((item) => {
          return item.id < 61 && item.id >= 56;
        });
        setlistKp(temps);
      } else if (pp.id === 4 && pn.id === 2) {
        let temps = tempList.filter((item) => {
          return item.id < 66 && item.id >= 61;
        });
        setlistKp(temps);
      } else if (pp.id === 5 && pn.id === 2) {
        let temps = tempList.filter((item) => {
          return item.id < 71 && item.id >= 66;
        });
        setlistKp(temps);
      } else if (pp.id === 6 && pn.id === 2) {
        let temps = tempList.filter((item) => {
          return item.id < 76 && item.id >= 71;
        });
        setlistKp(temps);
      } else if (pp.id === 7 && pn.id === 2) {
        let temps = tempList.filter((item) => {
          return item.id < 81 && item.id >= 76;
        });
        setlistKp(temps);
      }
      // pn 3 ===========================
      else if (pn.id === 3) {
        let temps = tempList.filter((item) => {
          return item.id < 110 && item.id >= 81;
        });
        setlistKp(temps);
      } else if (pp.id === 1 && pn.id === 3) {
        let temps = tempList.filter((item) => {
          return item.id < 85 && item.id >= 81;
        });
        setlistKp(temps);
      } else if (pp.id === 2 && pn.id === 3) {
        let temps = tempList.filter((item) => {
          return item.id < 89 && item.id >= 85;
        });
        setlistKp(temps);
      } else if (pp.id === 3 && pn.id === 3) {
        let temps = tempList.filter((item) => {
          return item.id < 94 && item.id >= 89;
        });
        setlistKp(temps);
      } else if (pp.id === 4 && pn.id === 3) {
        let temps = tempList.filter((item) => {
          return item.id < 99 && item.id >= 94;
        });
        setlistKp(temps);
      } else if (pp.id === 5 && pn.id === 3) {
        let temps = tempList.filter((item) => {
          return item.id < 102 && item.id >= 99;
        });
        setlistKp(temps);
      } else if (pp.id === 6 && pn.id === 3) {
        let temps = tempList.filter((item) => {
          return item.id < 106 && item.id >= 102;
        });
        setlistKp(temps);
      } else if (pp.id === 7 && pn.id === 3) {
        let temps = tempList.filter((item) => {
          return item.id < 110 && item.id >= 106;
        });
        setlistKp(temps);
      }
      // pn 4 ===========================
      else if (pn.id === 4) {
        let temps = tempList.filter((item) => {
          return item.id < 130 && item.id >= 110;
        });
        setlistKp(temps);
      } else if (pp.id === 1 && pn.id === 4) {
        let temps = tempList.filter((item) => {
          return item.id < 116 && item.id >= 110;
        });
        setlistKp(temps);
      } else if (pp.id === 2 && pn.id === 4) {
        let temps = tempList.filter((item) => {
          return item.id < 121 && item.id >= 116;
        });
        setlistKp(temps);
      } else if (pp.id === 3 && pn.id === 4) {
        let temps = tempList.filter((item) => {
          return item.id < 126 && item.id >= 121;
        });
        setlistKp(temps);
      } else if (pp.id === 4 && pn.id === 4) {
        let temps = tempList.filter((item) => {
          return item.id < 130 && item.id >= 126;
        });
        setlistKp(temps);
      }
      // pn 5 ===========================
      else if (pn.id === 5) {
        let temps = tempList.filter((item) => {
          return item.id < 151 && item.id >= 130;
        });
        setlistKp(temps);
      } else if (pp.id === 1 && pn.id === 5) {
        let temps = tempList.filter((item) => {
          return item.id < 130 && item.id >= 126;
        });
        setlistKp(temps);
      } else if (pp.id === 2 && pn.id === 5) {
        let temps = tempList.filter((item) => {
          return item.id < 141 && item.id >= 130;
        });
        setlistKp(temps);
      } else if (pp.id === 3 && pn.id === 5) {
        let temps = tempList.filter((item) => {
          return item.id < 145 && item.id >= 141;
        });
        setlistKp(temps);
      } else if (pp.id === 4 && pn.id === 5) {
        let temps = tempList.filter((item) => {
          return item.id < 148 && item.id >= 145;
        });
        setlistKp(temps);
      } else if (pp.id === 5 && pn.id === 5) {
        let temps = tempList.filter((item) => {
          return item.id < 151 && item.id >= 148;
        });
        setlistKp(temps);
      }
      // pn 6 ===========================
      else if (pn.id === 6) {
        let temps = tempList.filter((item) => {
          return item.id < 162 && item.id >= 151;
        });
        setlistKp(temps);
      } else if (pp.id === 1 && pn.id === 6) {
        let temps = tempList.filter((item) => {
          return item.id < 155 && item.id >= 151;
        });
        setlistKp(temps);
      } else if (pp.id === 2 && pn.id === 6) {
        let temps = tempList.filter((item) => {
          return item.id < 157 && item.id >= 155;
        });
        setlistKp(temps);
      } else if (pp.id === 3 && pn.id === 6) {
        let temps = tempList.filter((item) => {
          return item.id < 162 && item.id >= 157;
        });
        setlistKp(temps);
      }
      // pn 6 ===========================
      else if (pn.id === 7) {
        let temps = tempList.filter((item) => {
          return item.id < 182 && item.id > 163;
        });
        setlistKp(temps);
      } else if (pp.id === 1 && pn.id === 7) {
        let temps = tempList.filter((item) => {
          return item.id < 165 && item.id >= 162;
        });
        setlistKp(temps);
      } else if (pp.id === 2 && pn.id === 7) {
        let temps = tempList.filter((item) => {
          return item.id < 169 && item.id >= 165;
        });
        setlistKp(temps);
      } else if (pp.id === 3 && pn.id === 7) {
        let temps = tempList.filter((item) => {
          return item.id < 173 && item.id >= 169;
        });
        setlistKp(temps);
      } else if (pp.id === 4 && pn.id === 7) {
        let temps = tempList.filter((item) => {
          return item.id < 177 && item.id >= 173;
        });
        setlistKp(temps);
      } else if (pp.id === 5 && pn.id === 7) {
        let temps = tempList.filter((item) => {
          return item.id < 182 && item.id >= 177;
        });
        setlistKp(temps);
      }
      // all =========================
      else {
        setlistKp(tempList);
      }
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
  function getJanjiPresiden() {
    janjiPresiden().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setlistJp(tempList);
    });
  }
  function getprogramPrioritas() {
    programPrioritas().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      if (pn.id === 1) {
        let temps = tempList.filter((item) => {
          return item.id <= 8;
        });
        console.log(temps);
        setlistPp(temps);
      } else if (pn.id === 2) {
        let temps = tempList.filter((item) => {
          return item.id > 8 && item.id < 16;
        });
        console.log(temps);
        setlistPp(temps);
      } else if (pn.id === 3) {
        let temps = tempList.filter((item) => {
          return item.id > 15 && item.id < 23;
        });
        setlistPp(temps);
      } else if (pn.id === 4) {
        let temps = tempList.filter((item) => {
          return item.id > 22 && item.id < 27;
        });
        console.log(temps);
        setlistPp(temps);
      } else if (pn.id === 5) {
        let temps = tempList.filter((item) => {
          return item.id > 26 && item.id < 32;
        });
        setlistPp(temps);
      } else if (pn.id === 6) {
        let temps = tempList.filter((item) => {
          return item.id > 31 && item.id < 35;
        });
        console.log(temps);
        setlistPp(temps);
      } else if (pn.id === 7) {
        let temps = tempList.filter((item) => {
          return item.id > 34 && item.id < 40;
        });
        console.log(temps);
        setlistPp(temps);
      } else {
        setlistPp(tempList);
      }
      // setlistPp(tempList);
    });
  }

  useEffect(() => {
    getprioritasNasional();
    getMajorProject();
    getkegiatanPrioritas();
    getprogramPrioritas();
    getJanjiPresiden();
  }, [pn, pp, mp, kp, jp]);

  const PostRencanaKerja = async (e) => {
    try {
      e.preventDefault();
      const response = await rencanaKerja({
        nama: localStorage.getItem("nama"),
        unitKerja,
        idSekretariatDeputi: localStorage.getItem("iduser"),
        nomenklatur,
        prioritas: value1,
        dibawakanRapatkoordinasi: value2,
        tercantumDalamLaporan: value3,
        prioritasNasional: pn,
        prioritasProgram: pp,
        prioritasKegiatan: kp,
        janjiPresiden: jp,
        majorProject: mp,
        mean: "0",
        status: "submitted",
        penilai: 0,
        // totalAnggaranTambahan: "",
        // totalAnggaranKomponen: "Rp.54.386.380,57",
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
        penilai: 0,
        // totalAnggaranTambahan: "",
        totalAnggaranKomponen: "Rp.54.386.380,57",
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
      {value1 === 1 ? (
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
          {/* section 3 */}
          <div className="relative flex flex-col break-words mb-6 shadow-lg rounded-lg border bg-white  mt-10">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="py-10">
                <div className="relative w-full mb-10">
                  <label className="block text-grey-60 text-xs font-semibold mb-2 text-grey-20  ">
                    Janji Presiden
                  </label>
                  <Select
                    defaultValue="Pilih Janji Presiden"
                    className="text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={handleChangejp}
                    options={listJp}
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
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* section 4 */}
      {/* <div className="relative flex flex-col mb-6 shadow-lg rounded-lg border bg-white  mt-10">
        <div className="flex-auto px-4 lg:px-10 pt-2">
          <div className="py-10">
            <div className="flex justify-between">
              <label className="block text-grey-60 text-xs font-semibold text-grey-20  ">
                Total Anggaran Komponen
              </label>
              <span className="ml-2 text-sm font-medium text-slate-600">
                Rp. 54.386.380,57
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <button
        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-10 w-full ease-linear transition-all duration-150"
        type="button"
        onClick={
          localStorage.getItem("edit") === "true"
            ? EditRencanaKerja
            : PostRencanaKerja
        }
      >
        Submit
      </button>
    </>
  );
}
