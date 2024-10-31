import {
  SURAH_LIST,
  JUZZ_LIST,
  FULL_SURAH,
  FULL_JUZZ,
  CURRENT_USER,
  SINGLE_HATEEM,
  HATEEM_JUZZ,
  SINGLE_TAFRIJIYAH,
  GET_ALL_TAFRIJIYAH,
  GET_TAFRIJIYAH_DETAILS,
  GET_ALL_HATEEMS,
  GET_ALL_FATH
} from "../types/types";
const initialState = {
  surah_list: null,
  juzz_list: null,
  full_surah: null,
  full_juzz: null,
  current_user: null,
  single_hateem: null,
  hateem_juzz: null,
  single_tafrijiyah: null,
  get_all_tafrijiyah: null,
  get_tafrijiyah_details: null,
  get_all_hateems:null,
  get_all_fath: null
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SURAH_LIST:
      return {
        ...state,
        surah_list: action.payload,
      };

    case FULL_SURAH:
      return {
        ...state,
        full_surah: action.payload,
      };
    case CURRENT_USER:
      return {
        ...state,
        current_user: action.payload,
      };
    case SINGLE_HATEEM:
      return {
        ...state,
        single_hateem: action.payload,
      };

    case HATEEM_JUZZ:
      return {
        ...state,
        hateem_juzz: action.payload,
      };
    case JUZZ_LIST:
      return {
        ...state,
        juzz_list: action.payload,
      };
    case FULL_JUZZ:
      return {
        ...state,
        full_juzz: action.payload,
      };
    case SINGLE_TAFRIJIYAH:
      return {
        ...state,
        single_tafrijiyah: action.payload,
      };
    case GET_ALL_TAFRIJIYAH:
      return {
        ...state,
        get_all_tafrijiyah: action.payload,
      };
    case GET_TAFRIJIYAH_DETAILS:
      return {
        ...state,
        get_tafrijiyah_details: action.payload,
      };
      case GET_ALL_HATEEMS:
        return {
          ...state,
          get_all_hateems: action.payload,
        };
        case GET_ALL_FATH:
          return {
            ...state,
            get_all_fath: action.payload,
          };
    default:
      return state;
  }
};
export default mainReducer;
