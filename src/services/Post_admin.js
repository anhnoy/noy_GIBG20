
import API from './API';

export default {

    login(usr, passwd) {
        const url = 'api/auth/signin';
        return API().post(url, {
            id: usr,
            password: passwd,
          })
    },
    otp(usr, code, passwd) {
        const url = 'api/auth/otp';
        return API().post(url, {
            id: usr,
            secode_code: code,
            password: passwd,
          })
    },
    get_member(page, size){
        const url = "/api/member?page="+page+"&size="+size
        return API().get(url);
    }
}