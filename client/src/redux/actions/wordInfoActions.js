import axios from "axios";

import { GET_WORD_INFO, GET_DEFINITION, WORDINFO_LOADING } from "./types";

const dictionaryApiUrl = process.env.REACT_APP_DICTIONARY_API_URL;
const mwDictionaryApiKey = process.env.REACT_APP_MW_DICTIONARY_API_KEY;

export const getWordInfo = word => dispatch => {
  console.log(dictionaryApiUrl + " " + mwDictionaryApiKey);
  dispatch({ type: WORDINFO_LOADING });
  axios
    .get(dictionaryApiUrl + word, {
      params: { key: mwDictionaryApiKey },
    })
    .then(res =>
      dispatch({ type: GET_DEFINITION, payload: res.data[0].shortdef[0] })
    );
};
