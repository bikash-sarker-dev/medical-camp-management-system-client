import axios from "axios";

const publicRequestInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosPublic = () => {
  return publicRequestInstance;
};

export default useAxiosPublic;
