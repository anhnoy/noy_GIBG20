
import Admin from "@/models/admin.model";
import adminService from "@/services/admin.service";
import {reactive} from 'vue'


export const admin =  reactive(new Admin());

export default {

    async loadAdmin(id) {

        try{
            const resp = await adminService.getAdmin(id);
            const data = resp.data;
            admin.amdid = data.amdid;
            admin.id = data.id;
            admin.name = data.type;
        }   
        catch(error){
            console.error('Exception occurred while try to load admin information',error);
        }


    },

    async updateAdmin(event){
        event.preventDefault();
        try{
            await adminService.update(admin);
        }catch(error){
            console.error('Exception occurred while try to load admin information',error);
        }

        

    }



}
