import { FULL_JUZZ, FULL_SURAH, SURAH_LIST } from "../../types/types";

export const GetSurahs = (setLoading) => (dispatch) => {
  return fetch("https://api.quran.gading.dev/surah")
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: SURAH_LIST,
        payload: json.data,
      });
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
    });
};

export const GetFullSurah = (number, setLoading) => (dispatch) => {
  return fetch(`https://api.quran.gading.dev/surah/${number}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: FULL_SURAH,
        payload: json.data,
      });
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
    });
};

export const GetJuzz = (setLoading) => (dispatch) => {
  let Juzz = new Array(30).fill(1);
  setLoading(false);
  return Juzz;
};

export const GetFullJuzz = (number, setLoading) => (dispatch) => {
  return fetch(`https://api.quran.gading.dev/juz/${number}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: FULL_JUZZ,
        payload: json.data,
      });
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
    });
};
