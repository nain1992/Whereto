import axios from "axios";
import {
  GET_ALL_TAFRIJIYAH,
  GET_TAFRIJIYAH_DETAILS,
  SINGLE_TAFRIJIYAH,
  GET_ALL_HATEEMS,
  GET_ALL_FATH,
  CURRENT_USER,
} from "../../types/types";
import { Alert } from "react-native";

export const CreateTafrijiyah =
  (data, id, navigation, setLoading) => (dispatch) => {
    console.log(data, id);
    setLoading(true);
    axios
      .post(`tafrijiyah/add/${id}`, data)
      .then((res) => {
        console.log(res?.data?.tafrijiyah_id);
        if (res.data.status == "success") {
          axios
            .get(`tafrijiyah/${res?.data?.tafrijiyah_id}`)
            .then((res) => {
              console.log("here", res.data.msg);
              if (res?.data?.msg == "Success") {
                dispatch({
                  type: SINGLE_TAFRIJIYAH,
                  payload: res.data,
                });

                navigation.navigate("RemainingHateem");
              }
              setLoading(false);
            })
            .catch((e) => {
              console.log(e);
              setLoading(false);
            });
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

export const TafrijiyahCount = (data, navigation, setLoading) => (dispatch) => {
  setLoading(true);
  axios
    .post(`tafrijiyah/addUser`, data)
    .then((res) => {
      setLoading(false);
      console.log(res.data);
      navigation.navigate("CounterTafrijiyah");
    })
    .catch((e) => {
      console.log(e);
      setLoading(false);
    });
};

export const getTafrijiyahCountDetails =
  (data, setData, setLoading) => (dispatch) => {
    setLoading(true);
    console.log("user", data);
    axios
      .post(`tafrijiyah/details/user`, data)
      .then((res) => {
        dispatch({
          type: GET_TAFRIJIYAH_DETAILS,
          payload: res.data,
        });
        console.log(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

export const getAllTafrijiyah = (setLoading) => (dispatch) => {
  setLoading(true);
  axios
    .get(`tafrijiyah`)
    .then((res) => {
      setLoading(false);
      dispatch({
        type: GET_ALL_TAFRIJIYAH,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
      setLoading(false);
    });
};

export const getSingleTafrijiyah =
  (id, navigation, setLoading) => (dispatch) => {
    setLoading(true);
    axios
      .get(`tafrijiyah/${id}`)
      .then((res) => {
        console.log("here", res.data.msg);
        if (res?.data?.msg == "Success") {
          dispatch({
            type: SINGLE_TAFRIJIYAH,
            payload: res.data,
          });

          navigation.navigate("RemainingHateem");
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

export const CompleteTafrijiyahCount =
  (data, navigation, setLoading) => (dispatch) => {
    setLoading(true);
    axios
      .post(`tafrijiyah/userComplete`, data)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        if (res?.data?.message === "success") {
          Alert.alert("Tasbhi Completed", 'Press "OK" to Recite More', [
            {
              text: "Cancel",
              onPress: () => navigation.navigate("Home"),
              style: "cancel",
            },
            { text: "OK", onPress: () => navigation.navigate("HateemJoin") },
          ]);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

export const getAllHateems = (setLoading) => (dispatch) => {
  axios
    .get(`/hateems`)
    .then((res) => {
      dispatch({
        type: GET_ALL_HATEEMS,
        payload: res.data,
      });
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};

export const getAllFath = (setLoading) => (dispatch) => {
  axios
    .get(`/alfath`)
    .then((res) => {
      dispatch({
        type: GET_ALL_FATH,
        payload: res.data,
      });
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};

export const CreateAlFath =
  (data, id, navigation, setLoading) => (dispatch) => {
    console.log(data, id);
    setLoading(true);
    axios
      .post(`tafrijiyah/add/${id}`, data)
      .then((res) => {
        console.log(res?.data?.tafrijiyah_id);
        if (res.data.status == "success") {
          axios
            .get(`tafrijiyah/${res?.data?.tafrijiyah_id}`)
            .then((res) => {
              console.log("here", res.data.msg);
              if (res?.data?.msg == "Success") {
                dispatch({
                  type: SINGLE_TAFRIJIYAH,
                  payload: res.data,
                });

                navigation.navigate("RemainingHateem");
              }
              setLoading(false);
            })
            .catch((e) => {
              console.log(e);
              setLoading(false);
            });
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };


  // export const UpdateUser = ()=>(dispatch)=>{

  // }
