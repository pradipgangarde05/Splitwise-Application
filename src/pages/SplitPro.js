function SplitPro() {
  return (
    <>
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-md-8 col-lg-6 mb-5">
            <h1 style={{ "text-align": "center" }}>
              Try Splitwise Pro free for one week
            </h1>
            <p>
              Get all of Splitwises most powerful features, including receipt
              scanning, default splits, and no ads, free for your first week.
              Scroll down for a full list of features, or sign up now!
            </p>

            <a href="/login">
              <input
                type="button"
                value="Join Splitwise"
                className="btn btn-lg mb-2"
                style={{
                  width: "250px",
                  height: "62px",
                  background: "#8656cd",
                  "border-radius": "5px",
                  border: "none",
                  color: "white",
                  "font-weight": "bold",
                  "font-size": "larger",
                  "align-items": "center",
                }}
              />
            </a>
          </div>
        </div>
        <br />
        <h1 style={{ "text-align": "center" }}>
          Get SplitWise Pro for a ton of extra features.
        </h1>

        <div className="row text-left">
          <div className="col-md-6 mb-5 mb-md-0">
            <h1>Receipt scanning</h1>
            <p>
              Add complicated bills to Splitwise with ease! Just take a picture
              of your receipt, and Splitwise will automatically scan its
              contents.
            </p>
          </div>
          <div className="col-md-6">
            <div>
              <img src="image/s1.png" />
            </div>
          </div>
        </div>

        <div className="row text-left">
          <div className="col-md-6 mb-5 mb-md-0">
            <h1>Itemization</h1>
            <p>
              After scanning a receipt, Splitwise will detect the individual
              items so that you can assign them to your friends. Perfect for
              splitting restaurant and grocery bills.
            </p>
          </div>
          <div className="col-md-6">
            <div>
              <img src="image/s2.png" />
            </div>
          </div>
        </div>

        <div className="row text-left">
          <div className="col-md-6 mb-5 mb-md-0">
            <h1>Default split settings</h1>
            <p>
              Want to split all expenses with your partner 55%/45%? Travelling
              with multiple families and want to assign each family a certain
              number of shares? Create a group default split so you can set it
              and forget it.
            </p>
          </div>
          <div className="col-md-6">
            <div>
              <img src="image/s3.png" />
            </div>
          </div>
        </div>

        <div className="row text-left">
          <div className="col-md-6 mb-5 mb-md-0">
            <h1>Default split settings</h1>
            <p>
              Want to split all expenses with your partner 55%/45%? Travelling
              with multiple families and want to assign each family a certain
              number of shares? Create a group default split so you can set it
              and forget it.
            </p>
          </div>
          <div className="col-md-6">
            <div>
              <img src="image/s4.png" />
            </div>
          </div>
        </div>

        <div className="row text-left">
          <div className="col-md-6 mb-5 mb-md-0">
            <h1>Expense search</h1>
            <p>
              Make sure you've entered everything correctly. Our search feature
              will help you locate old bills so you can double-check and edit
              them as needed.
            </p>
          </div>
          <div className="col-md-6">
            <div>
              <img src="image/s5.png" />
            </div>
          </div>
        </div>

        <div className="row text-left">
          <div className="col-md-6 mb-5 mb-md-0">
            <h1>Charts and graphs</h1>
            <p>
              Keep your budget on track, at home or on a trip. We break down
              your spending by category and show you trends over time, so you
              can identify excessive spending and save money.
            </p>
          </div>
          <div className="col-md-6">
            <div>
              <img src="image/s6.png" />
            </div>
          </div>
        </div>

        <br />
        <div
          style={{
            "font-weight": "bolder",
            color: "rgb(29, 27, 27)",
            "font-size": "xx - large",
            "align-items": "center",
            "justify-content": "center",
            height: "100px",
            display: "flex",
            "background-color": "#b89be4",
            "font-size": "50px",
          }}
        >
          Plus...
        </div>
      </div>
    </>
  );
}

export default SplitPro;
