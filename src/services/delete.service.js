import API from './API';

export default {

    deleteMember(route,delete_Status) {
        const url = '/api/member/delete';
        return API().patch(url,{
            mid: route,
            delete_yn: delete_Status,
        });
    },
}