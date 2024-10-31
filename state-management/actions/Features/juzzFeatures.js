import axios from "axios";
import { HATEEM_JUZZ } from "../../types/types";
import { GetHateemJuzz } from "./hateems";

export const JoinJuzz =
  (data, setLoading, setPop, setAllJuzz, currentJuzz, allJuzz) =>
  (dispatch) => {
    setLoading(true);
    axios
      .put(`/juzz/join/juzz`, data)
      .then((response) => {
        if (response?.data?.msg == "Success") {
          // GetHateemJuzz(data?.hateemID, setLoading);
          let tempArr = allJuzz?.filter((e) => {
            return e?.juzz_id != currentJuzz?.juzz_id;
          });
          currentJuzz["user_id"] = data?.userID;
          tempArr.push(currentJuzz);
          tempArr?.sort((a, b) => a?.juzz_id - b?.juzz_id);
          console.log(tempArr);
          setAllJuzz(tempArr);
          setPop(false);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
