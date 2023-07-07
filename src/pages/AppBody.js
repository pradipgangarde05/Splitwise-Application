
function AppBody() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <h1 className="text-3xl block mb-4 lg:text-4xl mt-4">
              Less stress when sharing expenses with housemates.
            </h1>
            <p>
              Keep track of your shared expenses and balances with housemates,
              trips, groups, friends, and family.
              <br />
              <br />
            </p>
          </div>
          <div className="col-md-6 ">
            <div>
              <img src="image/logo-faceted.svg" height="400px" width="350px" />
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-12 col-sm-12 mb-5 mb-md-0">
          <h1 className="text-3xl mb-4">SplitWise</h1>
          <div className="row justify-content-center">
            <div className="col-6 col-md-2 ms-2">
              <img src="image/h1.JPG" alt="" className="img-fluid mb-4" />
            </div>
            <div className="col-6 col-md-2 ms-2">
              <img src="image/h2.JPG" alt="" className="img-fluid mb-4" />
            </div>
            <div className="col-6 col-md-2 ms-2">
              <img src="image/h3.JPG" alt="" className="img-fluid mb-4" />
            </div>
            <div className="col-6 col-md-2 ms-2">
              <img src="image/h4.JPG" alt="" className="img-fluid mb-4" />
            </div>
            <div className="col-6 col-md-2 ms-2">
              <img src="image/h5.JPG" alt="" className="img-fluid mb-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center ms-2 me-2">
        <div className="col-sm-6 col-md-10 ms-6 me-8">
          <iframe
            width="100%"
            height="400"
            className=""
            src="https://www.youtube.com/embed/CNQG0fRbqTI"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default AppBody;
