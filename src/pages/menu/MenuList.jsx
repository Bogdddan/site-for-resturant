import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getRandomUser } from "../../redux/MenuList/operations";
import { selectRandomUser } from "../../redux/MenuList/selectors";

function MenuList() {

  const [isLoading, setIsLoading] = useState(true);
  const randomUserData = useSelector(selectRandomUser);
  console.log(randomUserData);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(getRandomUser())}>Click to Fetch Random User</button>
      <NavLink to='/'>Home</NavLink>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <ul>
          {randomUserData.results.map((result) => (
            <li key={result.name}>{result.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default MenuList;