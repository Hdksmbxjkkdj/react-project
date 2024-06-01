import { AddUser } from "./AddUser";
const Register = () => {
  return (
    <>
      <main>
        <section class="login-area pb-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <div class="basic-login">
                  <h3 class="text-center mb-60">Signup From Here</h3>
                  <form action="#">
                    <label for="name">
                      Username <span>**</span>
                    </label>
                    <input id="name" type="text" placeholder="Enter Username" />
                    <label for="email-id">
                      Email Address <span>**</span>
                    </label>
                    <input
                      id="email-id"
                      type="text"
                      placeholder="Email address..."
                    />
                    <label for="pass">
                      Password <span>**</span>
                    </label>
                    <input
                      id="pass"
                      type="password"
                      placeholder="Enter password..."
                    />
                    <div class="mt-10"></div>
                    <button class="t-y-btn w-100" onClick={()=>AddUser()}>Register Now</button>
                    <div class="or-divide">
                      <span>or</span>
                    </div>
                    <a href="login.html" class="t-y-btn t-y-btn-grey w-100">
                      login Now
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export {Register}