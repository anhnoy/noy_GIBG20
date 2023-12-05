
import Get_data from "@/services/Get_data";

export default {

    async getData() {

        try{
            const resp = await Get_data.get_partner();
            return resp.data;
        }   
        catch(error){
            console.error('Exception occurred while try to load admin information',error);
        }
    },

}