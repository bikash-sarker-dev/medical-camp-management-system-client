import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";

const useOrganizer = () => {
  const { user } = useAuth();
  const axiosPublic = useSecureAxios();
  const secureAxios = useSecureAxios();

  const { data: isOrganize, isLoading } = useQuery({
    queryKey: ["organize"],
    queryFn: async () => {
      const res = await secureAxios.get(`/users/organizer/${user.email}`);
      return res.data.organizer;
    },
  });
  return [isOrganize, isLoading];
};

export default useOrganizer;
