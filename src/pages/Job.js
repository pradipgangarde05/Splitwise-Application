function Job() {
  return (
    <>
      <div className="container ">
        <div className="row ">
          <div id="top">
            <div id="inner">
              <h1 style={{ "font-size": "90px" }}>Hey you.</h1>
            </div>
            <br />
            <h2 style={{ opacity: "1" }}>
              Yes,
              <strong>you</strong>. Want to come work for Splitwise?
            </h2>
          </div>

          <img src="image/jobimg.png" />
          <div className="row">
            <div className="col-md-6">
              <h3>
                Made with <span style={{ "font-size": "40px" }}>😀️</span>
                <br />
                in Providence, RI
              </h3>
              <p>Our office is at the heart of the city's tech scene.</p>
            </div>
          </div>

          <div className="container ">
            <div className="row justify-content-center">
              <div
                className="col-md-6"
                style={{ "font-size": "18px", color: "#666" }}
              >
                <h3>
                  Help Splitwise strengthen millions <br />
                  of relationships
                </h3>
                <div>
                  <p>
                    Splitwise’s mission is to remove the stress, awkwardness,
                    and confusion that money places on our most important
                    relationships. We’ve built the world’s most popular mobile
                    apps for managing interpersonal finances, and we help
                    millions of people stay on the same page about money every
                    month. We’re on a journey to do even more for our customers
                    and are passionate about building a world-className product
                    and solving important social problems through technology and
                    design.
                  </p>

                  <p>
                    For many years, we were a small tech company headquartered
                    in Providence, RI. In 2022, we plan to grow our team
                    significantly and will also be posting jobs in Cambridge,
                    MA, other major US cities, and full-remote positions
                    (currently only for US-based employees). We offer
                    competitive compensation, great benefits, and equity in
                    Splitwise, and the chance to work with our wonderful team.
                  </p>

                  <p>
                    Interested? Let us know at
                    <a href="mailto:jobs@splitwise.com?subject=Hello!">
                      jobs@splitwise.com
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <h4 style={{ color: "black" }}>Open jobs at Splitwise</h4>
                <div className="job">
                  <span className="title">Software Engineer, Backend</span>
                  <br />
                  <span className="subtitle">
                    Providence, Boston, New York, Remote
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1>Join a growing team</h1>
              <h3>
                We love building great things together, and we can’t wait to
                meet you.
              </h3>
              <a href="mailto:jobs@splitwise.com?subject=Hello!">Apply now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
