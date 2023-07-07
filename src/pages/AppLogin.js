import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function AppLogin() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    const password = e.target.value;
    let newuser = { ...user, password };
    setUser(newuser);

    // Password validation
    const passwordPattern =
      /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password should contain at least one digit, one special character, and one alphabet. Minimum length should be 6."
      );
    } else {
      setPasswordError("");
    }
  };

  let handlerEmailAction = (e) => {
    const email = e.target.value;
    let newuser = { ...user, email };
    setUser(newuser);

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      setEmailError(
        "Please enter a valid Gmail address ending with '@gmail.com'."
      );
    } else {
      setEmailError("");
    }
  };

  let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus || emailError || passwordError) {
        return;
      }

      // BACKEND :: ...
      let url = `http://localhost:4000/login-by-post`;
      let data = { email: user.email, password: user.password };
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/button", { replace: true });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          <div className="fs-2">Login</div>

          <form ref={formRef} className="needs-validation">
            <input
              type="email"
              className={`form-control form-control-lg mb-2 ${
                emailError ? "is-invalid" : ""
              }`}
              placeholder="Enter Email"
              value={user.email}
              onChange={handlerEmailAction}
              required
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
            <input
              type="password"
              className={`form-control form-control-lg mb-2 ${
                passwordError ? "is-invalid" : ""
              }`}
              placeholder="Enter password"
              value={user.password}
              onChange={handlerPasswordAction}
              required
            />
            {passwordError && (
              <div className="invalid-feedback">{passwordError}</div>
            )}

            <input
              type="button"
              value="Login"
              className="w-100 btn btn-lg btn-success"
              onClick={loginAction}
            />
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
    </>
  );
}

export default AppLogin;
