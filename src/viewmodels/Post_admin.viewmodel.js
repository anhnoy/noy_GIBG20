import Post_admin from "@/services/Post_admin";

export default {
  async Post_data() {
    const handleLogin = async (id, password) => {
      await Post_admin.login(id, password).then((response) => {
        if (response) {
            console.log('Login complete')
        }
      }).catch((error) =>{
        console.log(error)
        console.log("eeeeeeeeeeeeeeeeeeeeeeeeee")
      })
      ;
    };
    return handleLogin;
  },
};
