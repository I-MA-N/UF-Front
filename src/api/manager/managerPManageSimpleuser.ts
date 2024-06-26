import { useMutation, useQueryClient } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";

function managerPManageSimpleuser(username: string) {
   const queryClient = useQueryClient();

   const { mutate, data } = useMutation({
      mutationKey: ['managerP: manage simpleuser', username],
      mutationFn: async (action: string) => {
         const formData = getFormData({action});
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + `/manager-manage-account/${username}`, formData);
         return req.data
      },
      onSuccess: (data) => {
         if (data.error) {
            throw new Error('Action not executed!');
         }

         queryClient.invalidateQueries({
            queryKey: ['managerG: simpleuser active', username]
         })
      }
   })

   return { mutate, data }
}

export default managerPManageSimpleuser;