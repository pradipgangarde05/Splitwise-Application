import { useRef, useState } from "react";

function MYRegistration() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [emailError, setEmailError] = useState("");
  let [usernameError, setUsernameError] = useState("");
  let [mobileError, setMobileError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  let handlerUsernameAction = (e) => {
    const username = e.target.value;
    let newuser = { ...user, username };
    setUser(newuser);

    // Username validation
    const usernamePattern = /^[a-zA-Z]+\d{2}$/;
    if (!usernamePattern.test(username)) {
      setUsernameError(
        "Username should start with alphabets and end with two digits."
      );
    } else {
      setUsernameError("");
    }
  };

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

  let handlerMobileAction = (e) => {
    const mobile = e.target.value;
    let newuser = { ...user, mobile };
    setUser(newuser);

    // Mobile number validation
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobile)) {
      setMobileError("Mobile number should be 10 digits long.");
    } else {
      setMobileError("");
    }
  };

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (
        !formStatus ||
        emailError ||
        usernameError ||
        passwordError ||
        mobileError
      ) {
        return;
      }

      // BACKEND
      let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;

      let res = await fetch(url);

      if (res.status !== 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        username: "",
        password: "",
        email: "",
        mobile: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      alert("Registration Successful");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          <div className="fs-2">INTRODUCE YOURSELF</div>

          <form ref={formRef} className="needs-validation">
            <input
              type="text"
              className={`form-control form-control-lg mb-2 mt-1  ${
                usernameError ? "is-invalid" : ""
              }`}
              placeholder="Enter username"
              value={user.username}
              onChange={handlerUsernameAction}
              required
            />
            {usernameError && (
              <div className="invalid-feedback">{usernameError}</div>
            )}
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
              type="text"
              className={`form-control form-control-lg mb-2 ${
                mobileError ? "is-invalid" : ""
              }`}
              placeholder="Enter mobile"
              value={user.mobile}
              onChange={handlerMobileAction}
              required
            />
            {mobileError && (
              <div className="invalid-feedback">{mobileError}</div>
            )}
            <input
              type="button"
              value="Register"
              className="w-100 btn btn-lg btn-success"
              // style={{ backgroundColor: "teal", color: "white" }}
              onClick={registerAction}
            />
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
    </>
  );
}

export default MYRegistration;
