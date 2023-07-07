function Login() {
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
                <h3 className="text-uppercase text-muted font-weight-bold">
                  Login:
                </h3>

                <div className="form-group">
                  <label for="email">Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                  <span id="email-error" className="error-message"></span>
                </div>

                <div className="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                  <span id="password-error" className="error-message"></span>
                </div>

                <div className="form-group mt-3">
                  <input
                    type="button"
                    value="Login"
                    className="btn btn-success btn-lg"
                    onclick="validateForm()"
                  />
                </div>

                <div className="form-group">
                  <p className="text-muted">
                    <a href="/resetpass">Forgot password?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
