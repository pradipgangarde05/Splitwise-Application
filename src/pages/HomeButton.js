import { useNavigate } from "react-router-dom";

function HomeButton() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login", { replace: true });
  };

  // Assistance of LocalStorage
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }
  return (
    <>
      <section>
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-xl-8 text-center">
            <h1 class="mb-4">Welcome To Login Home Page</h1>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-md-4 mb-5 mb-md-0">
            <div class="d-flex justify-content-center mb-4">
              <a href="/user-list">
                <img
                  src="image/green-user-icon.jpg"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </a>
            </div>
            <h5 class="mb-3">Profile</h5>
          </div>

          <div class="col-md-4 mb-5 mb-md-0">
            <div class="d-flex justify-content-center mb-4">
              <a href="/split-bill">
                <img
                  src="image/splitbutton.JPG"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </a>
            </div>
            <h5 class="mb-3">SplitWise App</h5>
          </div>

          <div class="col-md-4 mb-5 mb-md-0">
            <div class="d-flex justify-content-center mb-4">
              <a href="/billdivider">
                <img
                  src="image/billcal.png"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </a>
            </div>
            <h5 class="mb-3">Bill Split</h5>
          </div>

          <div class="col-md-4 mb-0">
            <div class="d-flex justify-content-center mb-4">
              <img
                src="image/logout.jpg"
                class="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                onClick={logOutAction}
              />
            </div>
            <h5 class="mb-3">Log Out</h5>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeButton;
