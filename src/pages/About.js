function About() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 col-sm-12 mb-5 mb-md-0">
            <div className="flex-md" style={{ display: "flex" }}>
              <div style={{ flex: "1" }}>
                <h1>What is Splitwise?</h1>
                <p>
                  Splitwise is a Providence, RI-based company that makes it easy
                  to split bills with friends and family. We organize all your
                  shared expenses and IOUs in one place, so that everyone can
                  see who they owe. Whether you are sharing a ski vacation,
                  splitting rent with roommates, or paying someone back for
                  lunch, Splitwise makes life easier. We store your data in the
                  cloud so that you can access it anywhere: on iPhone, Android,
                  or on your computer.
                </p>
                <h4>We focus on fairness</h4>
                <p>
                  Most people want to be fair to each other, but sometimes they
                  forget, or cant decide on what fair is. In addition to helping
                  people honor their debts, we provide mediation advice about
                  fairness issues through our “fairness calculators.” These
                  calculators turn our crowdsourced data into a neutral fairness
                  opinion about your personal situation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div class="row d-flex justify-content-center">
            <div class="col-md-10 col-xl-8 text-center">
              <h1 class="mb-4">Meet the team</h1>
            </div>
          </div>

          <div class="row text-center">
            <div class="col-md-4 mb-5 mb-md-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src="image/Mayuri.JPG"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </div>
              <h5 class="mb-3">Mayuri Patade</h5>
              <h6 class="text-primary mb-3">CDAC MUMBAI Juhu</h6>
              <h6 class="text-success mb-3">mayuri@gmail.com</h6>
            </div>
            <div class="col-md-4 mb-5 mb-md-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src="image/Pradip.JPG"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </div>
              <h5 class="mb-3">Pradip Gangarde</h5>
              <h6 class="text-primary mb-3">CDAC MUMBAI Kharghar</h6>
              <h6 class="text-success mb-3">pradip@gmail.com</h6>
            </div>
            <div class="col-md-4 mb-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src="image/Shanshank.JPG"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </div>
              <h5 class="mb-3">Shashank Deshpande</h5>
              <h6 class="text-primary mb-3">CDAC MUMBAI Kharghar</h6>
              <h6 class="text-success mb-3">shanshank@gmail.com</h6>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
