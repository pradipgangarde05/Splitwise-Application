function ResetPass() {
  return (
    <>
      <div className="container" style={{ "margin-top": "70px" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img
              height="300px"
              width="300px"
              src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
              alt="Logo"
            />
            <div className="card mt-3">
              <div className="card-body">
                <div className="ms-4">
                  <h2 style={{ "font-weight": "bold" }}>Reset your password</h2>
                  <p>
                    Enter your email address or phone number and we’ll send you
                    a link to reset your password.
                  </p>
                  <div>
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/resetpass"
                        >
                          Email
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/resetpass"
                        >
                          Phone number
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>Your email address</p>
                    <input
                      id="email-input"
                      className="form-control input-sm-12 mb-1"
                      type="text"
                    />
                    <span
                      id="email-error-message"
                      style={{ color: "red", display: "none" }}
                    >
                      Please enter a valid email address
                    </span>
                    <span
                      id="email-blank-message"
                      style={{ color: "red", display: "none" }}
                    >
                      Email cannot be blank
                    </span>

                    <p>Your mobile number</p>
                    <input
                      id="mobile-input"
                      className="form-control input-sm-12 mb-1 mt-2"
                      type="text"
                    />
                    <span
                      id="mobile-error-message"
                      style={{ color: "red", display: "none" }}
                    >
                      Please enter a valid 10-digit mobile number
                    </span>
                    <span
                      id="mobile-blank-message"
                      style={{ color: "red", display: "none" }}
                    >
                      Mobile number cannot be blank
                    </span>

                    <button
                      id="reset-button"
                      type="button"
                      className="btn btn-success"
                    >
                      Reset password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPass;
