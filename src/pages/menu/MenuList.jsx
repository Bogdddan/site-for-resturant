import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getDishes } from "../../redux/MenuList/operations";
import { selectDishes } from "../../redux/MenuList/selectors";

function MenuList() {
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(getDishes())}>Click to Fetch Dishes</button>
      <NavLink to="/">Home</NavLink>
      {dishes ? (
        <div>
          <h2>Dishes:</h2>
          {dishes.map((dish) => (
            <div key={dish.id}>
              <h3>{dish.name}</h3>
              {/* Відображення інших властивостей страви */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default MenuList;