import axios from "axios";

export const AddToNotifications = (notificationData) => (dispatch) => {
  console.log(notificationData);
  axios
    .post(`/notifications/add/`, notificationData)
    .then((res) => {
      console.log(res?.data);
    })

    .catch((e) => {
      console.log(e);
    });
};
