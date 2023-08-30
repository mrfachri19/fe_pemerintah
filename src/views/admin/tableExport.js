import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listrencanaKerja } from "../../api";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import moment from "moment";

const TableExport = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  function getIdRencanaKerja() {
    listrencanaKerja(`/${id}`).then((res) => {
      var tempList;
      tempList = res.data.data[0];
      console.log("data rencana kerja => ", tempList);
      setData(tempList);
    });
  }

  useEffect(() => {
    getIdRencanaKerja();
  }, []);
  return (
    <>
      <div className="justify-around items-center  flex flex-1">
        <h1 className="text-center mb-5">Table Preview</h1>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-10 w-32 ease-linear transition-all duration-150"
          table="table-to-xls"
          filename="rencana-kerja"
          sheet="rencana-kerja"
          buttonText="Export"
        />
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full" id="table-to-xls">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Nama
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.nama}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Unit Kerja
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.unitKerja}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Nomenklatur
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.nomenklatur}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Anggaran Awal
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.anggaranAwal ? data.anggaranAwal : "-"}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Dibawakan Rapat Koordinasi
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.dibawakanRapatkoordinasi === 1 ? "iya" : "tidak"}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Tercantum Dalam laporan
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.tercantumDalamLaporan === 1 ? "iya" : "tidak"}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Prioritas nasional
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.prioritasNasional}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Prioritas Program
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.prioritasProgram}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Prioritas Kegiatan
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.prioritasKegiatan}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Janji Presiden
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.janjiPresiden}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Major Project
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.majorProject}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Mean
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.mean}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Status
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.status}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Skor
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.skor}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Penilai
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.penilai}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Total Anggaran Tambahan
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {data.totalAnggaranTambahan
                      ? data.totalAnggaranTambahan
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Total Anggaran Komponen
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    Rp. {data.totalAnggaranKomponen}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    class="text-sm  font-medium text-gray-900 px-6 py-4 text-left bg-gray-100 border-b"
                  >
                    Updated at
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-sm font-medium text-gray-900">
                    {moment(data.updatedAt, "YYYY-MM-DD").format("D MMMM YYYY")}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableExport;
