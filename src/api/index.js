import axios from "axios";
import CONFIG from "../config";

const fullURL = (path) => {
  return `${CONFIG.API_URL}/${path}`;
};

export const handleNetworkError = (error) => {
  if (error.message === "Network request failed") {
    alert(
      "Kesalahan Jaringan",
      "Silakan periksa koneksi Anda dan coba kembali.",
      "iconNoInet"
    );
  }
  throw error;
};

const post = (api) => (data) => {
  return axios.post(fullURL(api), data, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
  });
};

const patch =
  (api) =>
  async (param = "", data) => {
    return axios.patch(`${fullURL(api)}${param}`, data, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    });
  };

const get =
  (api) =>
  async (param = "") => {
    try {
      return await axios(
        `${fullURL(api)}${param}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        },
        { handleNetworkError }
      );
    } catch (err) {
      console.log(err);
    }
  };

const del =
  (api) =>
  async (param = "") => {
    return axios.delete(`${fullURL(api)}${param}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    });
  };

const getWithSlug = (api) => (slug, token) => {
  return axios(
    `${fullURL(api)}${slug}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    },
    { handleNetworkError }
  ).catch((err) => {});
};

// auth
export const RegisterUser = post("auth/register");
export const Signin = post("auth/login");
export const ResetPassword = patch("auth/reset-password");
// home
export const prioritasNasional = get("productpn");
export const kegiatanPrioritas = get("productkp");
export const programPrioritas = get("productpp");
export const majorProject = get("productmp");
export const rencanaKerja = post("productrk");
export const listrencanaKerja = get("productrk");
export const updateRencanaKerja = patch("productrk");
export const deleteRencanaKerja = del("productrk");

const API = {
  // auth
  RegisterUser,
  ResetPassword,
  Signin,
  // home
  prioritasNasional,
  kegiatanPrioritas,
  programPrioritas,
  majorProject,
  rencanaKerja,
  listrencanaKerja,
  deleteRencanaKerja,
};

export default API;
