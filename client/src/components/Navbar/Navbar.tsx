import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div>
        <Link to="/"><img className="navbar__logo" src="https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/l-intro-1645231221.jpg" alt="Coffee"></img></Link>
      </div>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button id="signup_button" onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button id="login_button" onClick={() => navigate("/login")}>Login</button>
          </>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
