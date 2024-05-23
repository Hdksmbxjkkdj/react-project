const   Error = () => {
  return (
    <>
      <section class="error__area pt-60 pb-100">
        <div class="container">
          <div class="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
            <div class="error__content text-center">
              <div class="error__number">
                <h1>404</h1>
              </div>
              <span>component not found</span>
              <h2>Nothing To See Here!</h2>
              <p>
                The page are looking for has been moved or doesn’t exist
                anymore, if you like you can return to our homepage. If the
                problem persists, please send us an email to{" "}
                <span class="highlight comment">
                  <a href="/cdn-cgi/l/email-protection#27734f424a427752554267404a464e4b0944484a">
                    <span
                      class="__cf_email__"
                      data-cfemail="b5e1ddd0d8d0e5c0c7d0f5d2d8d4dcd99bd6dad8"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </span>
              </p>

              <div class="error__search">
                <form action="#">
                  <input type="text" placeholder="Enter Your Text..." />
                  <button type="submit" class="t-y-btn t-y-btn-grey">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export { Error };
