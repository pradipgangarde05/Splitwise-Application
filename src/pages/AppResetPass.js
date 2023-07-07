import { useRef, useState } from "react";

function AppResetPass() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [emailError, setEmailError] = useState("");
  let [mobileError, setMobileError] = useState("");

  let [user, setUser] = useState({
    email: "",
    mobile: "",
  });

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

  let resetAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus || emailError || mobileError) {
        return;
      }

      // BACKEND
      let url = `http://localhost:4000/addreset?username=email=${user.email}&mobile=${user.mobile}`;

      let res = await fetch(url);

      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        email: "",
        mobile: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      alert("Password Reset Link is Send");
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
          <div className="fs-2">Reset your password</div>

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
              value="Reset password"
              className="w-100 btn btn-lg btn-success"
              onClick={resetAction}
            />
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
    </>
  );
}

export default AppResetPass;
