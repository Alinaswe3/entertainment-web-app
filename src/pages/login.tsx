import FormInput from "@/components/FormInput";
import Link from "next/link";
import { Logo } from "@/components/Icons";
import { useState } from "react";

/**
 * A log-in form component to handle user login
 * @component
 * @returns {JSX.Element} The sign up form
 */
const Login = () => {
  // Setting the state for input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Checks if input elements have values otherwise changes the CSS to show an error
   * @returns void
   */
  const checkInput = () => {
    if (email === "")
      document.getElementById("email-error")?.classList.add("form-error");
    else document.getElementById("email-error")?.classList.remove("form-error");
    if (password === "")
      document.getElementById("password-error")?.classList.add("form-error");
    else
      document.getElementById("password-error")?.classList.remove("form-error");
  };

  /**
   * handles the form submission of input data.
   * @param event - the submit event of the HTML form
   */
  const handleLogin = (event) => {
    event.preventDefault();
    checkInput();
  };

  return (
    <main className="auth">
      <Logo />
      <div className="auth__form">
        <h1 className="mb-xmd heading--large">Login</h1>
        <form className="form mb-smd" onSubmit={handleLogin}>
          <FormInput
            type={"email"}
            id={"email"}
            placeText={"Email address"}
            handleChange={setEmail}
          />
          <FormInput
            type={"password"}
            id={"password"}
            placeText={"Password"}
            handleChange={setPassword}
          />
          <button className="form__submit body-text body-text--medium">
            Login to your account
          </button>
        </form>
        <p className="auth--alt body-text body-text--medium">
          Don't have an account?&nbsp;
          <Link className="link" href="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
