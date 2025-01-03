import { useQuery } from "@tanstack/react-query"
import getFormData from "../../utils/getFormData"
import axios from "axios";
import UserData from "../../types/UserData";

function GUserData(username?: string) {
   const { data, isError, isPending } = useQuery({
      queryKey: ['get: user data', username || ''],
      queryFn: async () => {
         const formData = getFormData({for: username});
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + '/get-info/', username && formData);

         return req.data
      },
      select: (data) => {
         if (data?.access === 'true') {
            return data as UserData
         }
         
         throw new Error();
      }
   })

   return { data, isError, isPending }
}

export default GUserData