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
                <thead class="bg-gray-200 border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Nama
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Nomenklatur
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Tanggal
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Prioritas
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Skor
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Mean
                    </th>{" "}
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Jumlah Penilai
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.nama}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {data.nomenklatur}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {moment(data.updatedAt, "YYYY-MM-DD").format("D MMMM YYYY")}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {data.prioritas == 1 ? "Iya" : "Tidak"}{" "}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {data.skor}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {data.mean}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {data.penilai}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableExport;
