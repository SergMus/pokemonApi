import axios from "axios";
import * as types from "./types";
import { loaderOn, loaderOff } from "../loader/actions";

// lists and grouping pokemon types

export const setGroupedTypesList = () => {
  return async (dispatch) => {
    dispatch(loaderOn());

    const dataList = await getAllTypes();
    const typesList = [];
    for (let i = 1; i < dataList.length; i++) {
      typesList.push({
        name: dataList[i].name,
        amount: await getDataLength(dataList[i].url),
      });
    }

    dispatch({
      type: types.SET_GROUP_LIST,
      payload: typesList,
    });

    dispatch(loaderOff());
  };
};

const getAllTypes = async () => {
  const res = await axios.get("https://pokeapi.co/api/v2/type");
  return res.data.results;
};

const getDataLength = async (url) => {
  const res = await axios.get(`${url}`);
  return res.data.pokemon.length;
};

// list of pokemons sorted by desc

// export function setSortedTypesList() {
//   return async function getAllPokemons(dispatch, getState) {
//     const response = await axios
//       .get(`https://pokeapi.co/api/v2/pokemon/?limit=0&offset=0`)

//     dispatch(loaderOn());

//     dispatch({
//       type: types.SET_DESC_LIST,
//       payload: response,
//     });

//     dispatch(loaderOff());
//   };
// }

export function setSortedTypesList() {
  return async function getAllPokemons(dispatch) {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        // 'Content-Type': 'application/json'
      },
    };
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=1300&offset=0,",
      options
    );
    const data = await response.json();

    dispatch(loaderOn());

    dispatch({
      type: types.SET_DESC_LIST,
      payload: data,
    });

    dispatch(loaderOff());
  };
}
