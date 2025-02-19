import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const secureAxios = axios.create({
  // baseURL: "https://medical-camp-management-system-server-chi.vercel.app",
  baseURL: "http://localhost:5000",
});

const useSecureAxios = () => {
  let navigate = useNavigate();
  const { accountLogOut } = useAuth();

  secureAxios.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");

      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  secureAxios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (status === 401 || status === 403) {
        await accountLogOut();
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );
  return secureAxios;
};

export default useSecureAxios;
