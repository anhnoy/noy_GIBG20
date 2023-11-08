
import API from './API';

export default {

    login(id, passwd) {
        const url = '/admin?id='+id+'&passwd='+passwd;
        return API().post(url)
    },

    getAdmin(id){
        const url = '/admin/'+id;
        return API().get(url);
    }
}