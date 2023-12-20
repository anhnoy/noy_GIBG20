import API from './API';

export default {

    getMembers(start, end, id,  name, phone, status, page, size, type ){
        const url = '/api/member/search';
        const params = {startDate:start,endDate:end,id:id,name:name,phone:phone,status:status, page:page, size:size, type:type };
        
        return API().get(url,{params:params});

    }


}