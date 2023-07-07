function ContactUs() {
  return (
    <>
      <main class="bg-facets py-8">
        <div class="container mx-auto px-8">
          <h1 class="text-3xl lg:text-4xl mt-4">Contact support</h1>

          <div class="lg:flex">
            <div class="lg:w-1/2 my-8">
              <h3 class="text-2xl">✉️ Email</h3>
              <p class="text-2xl">
                <a
                  href="mailto:support@splitwise.com"
                  class="text-teal-darkest"
                >
                  support@splitwise.com
                </a>
                <br />
              </p>
              <p class="mt-6">
                We aim to reply to most support requests within 1 business day.
              </p>
            </div>

            <div class="lg:w-1/2 my-8">
              <h3 class="text-2xl">❓ Frequently asked questions</h3>
              <p class="text-2xl">
                <a
                  href="http://feedback.splitwise.com"
                  class="text-teal-darkest"
                >
                  http://feedback.splitwise.com
                </a>
                <br />
              </p>
              <p class="mt-6">
                Find answers to common questions about Splitwise.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactUs;
