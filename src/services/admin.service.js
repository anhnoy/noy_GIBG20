import API from './API';

export default {

    getAdmins(start, end, id,  name, phone, page, size, type, activation){
        const url = '/api/admin/search';
        const params = {startDate:start,endDate:end,id:id,name:name,phone:phone, page:page, size:size ,type:type, activation:activation};
        
        return API().get(url,{params:params});

    }
}

