import FormInput from "@/components/FormInput";
import Link from "next/link";
import { Logo } from "@/components/Icons";
import { useState } from "react";

/**
 * A sign-up form component to handle user signs up
 * @component
 * @returns {JSX.Element} The sign up form
 */
const Signup = () => {
  // State for the input elements in the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");

  /**
   * Checks if input elements have values otherwise changes the CSS to show an error
   * @returns void
   */
  const checkInput = () => {
    if (email === "")
      document.getElementById("email-error")?.classList.add("display-block");
    else
      document.getElementById("email-error")?.classList.remove("display-block");
    if (password === "")
      document.getElementById("password-error")?.classList.add("display-block");
    else
      document
        .getElementById("password-error")
        ?.classList.remove("display-show");
    if (reEnteredPassword === "")
      document
        .getElementById("re-password-error")
        ?.classList.add("display-block");
    else
      document
        .getElementById("re-password-error")
        ?.classList.remove("display-show");
  };

  /**
   * handles the form submission of input data.
   * @param event - the submit event of the HTML form
   */
  const handleSignup = (event) => {
    event.preventDefault();
    checkInput();
  };

  return (
    <main className="auth">
      <Logo />
      <div className="auth__form">
        <h1 className="mb-xmd heading--large">Sign Up</h1>
        <form className="form mb-smd" onSubmit={handleSignup}>
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
          <FormInput
            type={"password"}
            id={"re-password"}
            placeText={"Repeat password"}
            handleChange={setReEnteredPassword}
          />
          <button className="form__submit body-text body-text--medium">
            Create an account
          </button>
        </form>
        <p className="auth--alt body-text body-text--medium">
          Already have an account&nbsp;
          <Link className="link" href="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;
