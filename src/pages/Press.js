function Press() {
  return (
    <>
      <main className="bg-facets pt-8">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 mb-5 mb-md-0">
              <h1 className="text-3xl block mb-4 lg:text-4xl">
                Writing a story on Splitwise?
              </h1>
              <p>
                If you'd like to do an interview or a story about Splitwise,
                we'd love to talk with you.
                <br />
                <br />
                Drop us a line at
                <a
                  href="mailto:press@splitwise.com?Subject=Hello Splitwise"
                  className="text-teal"
                >
                  press@splitwise.com
                </a>
                .
              </p>
            </div>
            <div className="col-md-6">
              <div
                id="gallery-stage"
                className="gallery-stage border border-grey-lightest"
              >
                <a href="1-iPhoneX.jpg">
                  <img
                    src="image/1-iPhoneX.jpg"
                    className="object-cover gallery-image"
                    data-item="1"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-12 col-sm-12 mb-5 mb-md-0">
              <h1 className="text-3xl mb-4">iOS screenshots</h1>
              <div className="row justify-content-center">
                <div className="col-6 col-md-2">
                  <img src="image/i1.png" alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-6 col-md-2">
                  <img src="image/i2.png" alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-6 col-md-2">
                  <img src="image/i3.png" alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-6 col-md-2">
                  <img src="image/i4.png" alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-6 col-md-2">
                  <img src="image/i5.png" alt="" className="img-fluid mb-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-12 mb-5 mb-md-0">
              <h1 className="text-3xl mb-4">Android screenshots</h1>
              <div className="row justify-content-center">
                <div className="col-6 col-md-2">
                  <img src="image/an1.png" alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-6 col-md-2">
                  <img src="image/an2.png" alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-6 col-md-2">
                  <img src="image/an3.png" alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-6 col-md-2">
                  <img src="image/an4.png" alt="" className="img-fluid mb-4" />
                </div>
                <div className="col-6 col-md-2">
                  <img src="image/an5.png" alt="" className="img-fluid mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Press;
