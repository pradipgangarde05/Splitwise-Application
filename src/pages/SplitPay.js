function SplitPay() {
  return (
    <>
      <div className="row text-center">
        <div className="col-md-12 mb-5 mb-md-0">
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1" }}>
              <img src="image/payplane.svg" />
              <h1>
                Our #1 requested feature is here: Pay your friends directly in
                Splitwise.
              </h1>
              <a href="/splitpay">
                <input
                  type="button"
                  value="Get Access"
                  className="btn btn-lg mb-2 mt-2"
                  style={{ "background-color": "#008080", color: "white" }}
                />
              </a>
              <br />
              <h1>Here’s what folks are saying</h1>
              <h1>about Splitwise Pay</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="image/quote.webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h4 className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i>It’s nice that it’s all
            integrated. It also feels more private.
          </h4>
        </div>

        <div className="col-md-4 mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="image/quote.webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h4 className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i>It’s more convenient now
            that my bank is connected, I don’t have to take extra steps to
            settle up.
          </h4>
        </div>

        <div className="col-md-4 mb-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="image/quote.webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h4 className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i>Pretty much a no brainer.
            I use Splitwise Pay for all of my payments.
          </h4>
        </div>
      </div>
      <div className="row justify-content-center ms-5 me-5">
        <div className="col-md-8 mb-4 mb-md-0">
          <div className="justify-content-center mb-4">
            <h5>How do I get access to Splitwise Pay?</h5>
            <p>
              We’re rolling Splitwise Pay out to eligible folks over the next
              few months. If you’ve been granted access, you should see a wallet
              icon in the top left hand corner of your app, and a brand new
              Splitwise Pay tab on your Account page. If you haven’t been
              granted access, but want to try it out, please email
              payments.help@splitwise.com
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center ms-5 me-5">
        <div className="col-md-8 mb-4 mb-md-0">
          <div className="justify-content-center mb-4">
            <h5>How do I sign up for Splitwise Pay?</h5>
            <p>
              Follow the steps below to sign up. Please note that Splitwise Pay
              is currently only available for U.S. residents.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center ms-5 me-5">
        <div className="col-md-8 mb-4 mb-md-0">
          <div className="justify-content-center mb-4">
            <h5>Can I link my existing bank account?</h5>
            <p>
              To use Splitwise Pay, you have to be a US resident, 18 years or
              older, accept the Splitwise Pay Terms of Service, and provide some
              additional information to activate your account. To comply with
              Federal law, Splitwise Pay requires a verified phone number, legal
              name, home address, date of birth, and Social Security number.
              Verifying your identity also helps us protect your security by
              making sure it's really you before linking your account. If you
              have any questions, please contact payments.help@splitwise.com.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center ms-5 me-5">
        <div className="col-md-8 mb-4 mb-md-0">
          <div className="justify-content-center mb-4">
            <h5>What is required to use Splitwise Pay?</h5>
            <p>
              Splitwise Pay does not charge transaction fees for standard
              electronic funds transfers and there is no monthly fee or cost to
              sign up. (For your linked bank accounts, check with your financial
              institution for any fees they may charge).
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center ms-5 me-5">
        <div className="col-md-8 mb-4 mb-md-0">
          <div className="justify-content-center mb-4">
            <h5>How do I use Splitwise Pay?</h5>
            <p>
              When settling balances that you owe, select Splitwise Pay as your
              payment method. You can view all of your Splitwise Pay
              transactions at any time by visiting your Splitwise Pay wallet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SplitPay;
