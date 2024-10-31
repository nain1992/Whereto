import axios from "axios";
import { HATEEM_JUZZ, SINGLE_HATEEM } from "../../types/types";

export const _CreateHateem =
  (data, id, setLoading, navigation) => (dispatch) => {
    setLoading(true);
    axios
      .post(`/hateems/add/${id}`, data)
      .then((res) => {
        if (res?.data?.error) {
          alert(res?.data?.error);
          setLoading(false);
        } else {
          axios
            .get(`/hateems/${res?.data?.hateem_id}`)
            .then((response) => {
              if (response?.data?.error) {
                setLoading(false);
                alert(response?.data?.error);
              } else {
                dispatch({
                  type: SINGLE_HATEEM,
                  payload: response?.data?.data[0],
                });
                navigation.navigate("HateemProgress");
                setLoading(false);
              }
            })
            .catch((e) => {
              setLoading(false);
              console.log(e);
            });
          axios
            .get(`/juzz/${res?.data?.hateem_id}`)
            .then((response) => {
              let id = res?.data?.hateem_id;
              if (response?.data?.error) {
                setLoading(false);
                alert(response?.data?.error);
              } else {
                // dispatch({
                //   type: HATEEM_JUZZ,
                //   payload: response?.data?.data,
                // });
                navigation.navigate("HateemProgress", { id });
                setLoading(false);
              }
            })
            .catch((e) => {
              setLoading(false);
              console.log(e);
            });
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

export const GetHateemJuzz = (id, setLoading) => (dispatch) => {
  setLoading(true);
  axios
    .get(`/juzz/${id}`)
    .then((response) => {
      if (response?.data?.error) {
        setLoading(false);
        alert(response?.data?.error);
      } else {
        dispatch({
          type: HATEEM_JUZZ,
          payload: response?.data?.data,
        });
        setLoading(false);
      }
    })
    .catch((e) => {
      setLoading(false);
      console.log(e);
    });
};



export const getSingleHateem =
  (id, navigation, setLoading) => (dispatch) => {
    setLoading(true);
    axios
      .get(`hateems/${id}`)
      .then((res) => {
        console.log("here", res.data);
        if (res?.data?.msg == "Success") {
          dispatch({
            type: SINGLE_HATEEM,
            payload: res?.data?.data[0],
          });

          navigation.navigate("HateemProgress");
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };