import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './NotFound.css';

function NotFound() {

  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(6000);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(countdown - 1000);
      if (countdown <= 0) {
        clearInterval(timer);
        navigate('/', { replace: true });
      }
    }, 1000);
  }, [navigate, countdown]);
  return (
    <main class='container'>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>4</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <span class='particle'>0</span>
      <article class='content'>
        <p>Damnit stranger,</p>
        <h2>not NotFound, autodirecting after {countdown / 1000} seconds</h2>
      </article>
    </main>
  )
}

export default NotFound;