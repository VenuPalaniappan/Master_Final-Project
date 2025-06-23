import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import "./login.scss"


const Login =() => {

const {login} = useContext(AuthContext);
const handleLogin = () =>{
  login();
};
  return (
    <div className="login">
      <div className="card">
        <div className="left">
         <h1>Welcome to JustClickLa</h1>
          <p>Only app design to connect with nearby buddies</p>
        <span>No Account? Just register La !</span>
      <Link to="/register">
      <button>Register</button>
      </Link>
      
    </div>
    <div className ="right">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password"/>
        <button>JUSTCLICKLA</button>
      </form>
    </div>
    </div>
    
    </div>

  )
}

export default Login
