


export default class Admin {

    constructor (amdid, type, id, password, password_expiredate, name, phone, activation, comp_mng, mbr_mng, srvc_mng, rsv_mng, cnt_mng,writedate,modifydate){
        this.amdid = amdid;
        this.type = type;
        this.id = id;
        this.password = password;
        this.password_expiredate = password_expiredate;
        this.name = name;
        this.phone = phone;
        this.activation = activation;
        this.comp_mng = comp_mng;
        this.mbr_mng = mbr_mng;
        this.srvc_mng = srvc_mng;
        this.rsv_mng = rsv_mng;
        this.cnt_mng = cnt_mng;
        this.writedate = writedate;
        this.modifydate = modifydate;

    }
}