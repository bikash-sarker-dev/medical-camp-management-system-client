import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";

const uesProfile = () => {
  const { user } = useAuth();
  const secureAxios = useSecureAxios();
  const {
    data: profile = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await secureAxios.get(`/profile/${user.email}`);
      return res.data;
    },
  });
  return [profile, refetch, isLoading];
};

export default uesProfile;
