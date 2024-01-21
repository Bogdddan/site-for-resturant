import axios from "axios";

export const getRandomUser = () => async (dispatch) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    dispatch(setRandomUser(response.data));
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching random user:", error);
  }
};

const setRandomUser = (user) => ({
  type: 'SET_RANDOM_USER',
  payload: user,
});
