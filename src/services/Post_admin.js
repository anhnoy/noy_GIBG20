
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
    },
    get_admin(page, size){
        const url = "/api/admin?page="+page+"&size="+size
        return API().get(url);
    },
    find_member(page, size, params,){
        const url = "/api/find_condition_member"
        return API().post(url, {
            page: page,
            size: size,
            params: {
              status: params.status || null,
              id: params.id || null,
              name: params.name || null,
              phone: params.phone || null,
              startDate: params.startDate || null,
              endDate: params.endDate || null
            }
          });
    },
}