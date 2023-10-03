import { useState } from "react";
import "./InputPassword.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputPassword() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="Input-position">
      <input value={password} autoComplete="current-password" type={visible ? "text" : "password"} placeholder="Password" 
        id="password" onChange={(e) => setPassword(e.target.value)} />
      <span className="span_eye" onClick={toggleVisibility}>
        {visible ? (
          <FaEye className="text-white text-2xl" />
        ) : (
          <FaEyeSlash className="text-white text-2xl" />
        )}
      </span>
    </div>
  );
}

export default InputPassword;