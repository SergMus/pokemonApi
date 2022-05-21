import axios from "axios";
import * as types from "./types";
import { loaderOn, loaderOff } from "../loader/actions";


// lists pokemon on load

export const setPokemonsList = (size) => {
  return async (dispatch) => {
    dispatch(loaderOn());

    const pokemonsList = [];
    for (let i = 1; i < size; i++) {
      pokemonsList.push(await getPokemonData(i));
    }

    dispatch({
      type: types.SET_POKEMON_LIST,
      payload: pokemonsList,
    });

    dispatch(loaderOff());
  };
};

const getPokemonData = async (id) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.data;
};



// lists pokemon on input

export const setInputList = (txt) => {
  return async (dispatch) => {
    dispatch(loaderOn());

    const findedPokemons = await findPokemon(txt);

    const pokemonsList = [];
    for (let i = 1; i < findedPokemons.length; i++) {
      pokemonsList.push(await getPokemonDataByURL(findedPokemons[i].url));
    }

    dispatch({
      type: types.SET_TYPES_LIST,
      payload: pokemonsList,
    });

    dispatch(loaderOff());
  };
};

const findPokemon = async (txt) => {
  const data = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  return data.data.results.filter((item) => item.name.toLowerCase().includes(txt));
};

const getPokemonDataByURL = async (url) => {
  const res = await axios.get(`${url}`);
  return res.data;
};
