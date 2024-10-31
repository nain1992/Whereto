import axios from "axios";

export const RegisterNewUser = (data, navigation) => (dispatch) => {
  axios
    .post("register", data)
    .then((res) => {
      if (res.data.status === "success") {
        alert(res.data.message);
        navigation.navigate("Login");
      } else {
        alert(res.data.message);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
