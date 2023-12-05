
import API from './API';

export default {

    get_partner(){
        const url = "/home";
        return API().get(url);
    }
}