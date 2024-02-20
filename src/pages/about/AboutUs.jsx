import { NavLink } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";

function AboutUs() {
  return (
    <>
      about us pages
      <NavLink to='/'>Home</NavLink>
      <Reviews />
    </>
  )
}

export default AboutUs;