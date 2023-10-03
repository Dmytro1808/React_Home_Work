import Input from "../../components/Input/Input.js";
import InputPassword from "../../components/InputPassword/InputPassword.js";
import Button from "../../components/Button/Button.js";
import "./Login.css";

function Login() {
  return (
    <div className="wrapper">
      <form >
        <h1>Harvey Norman</h1>
        <div className="input-box">
          <Input />
        </div>
        <div className="input-box">
          <InputPassword />
        </div>
        <Button />
      </form>
    </div>
  );
}

export default Login;