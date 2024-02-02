import axios from "axios";

export const getDishes = () => async (dispatch) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    dispatch(setDishes(response.data.results));
    console.log(response.data.results);
  } catch (error) {
    console.error("Error fetching random user:", error);
  }
};

const setDishes = (dishes) => ({
  type: 'SET_DISHES',
  payload: dishes,
});