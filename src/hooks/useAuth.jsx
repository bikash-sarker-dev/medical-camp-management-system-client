import { useContext } from "react";
import { AuthContext } from "../contextApi";

const useAuth = () => {
  const result = useContext(AuthContext);
  return result;
};

export default useAuth;
