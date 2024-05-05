const Contact = () => {
  const contact = [
    {
      text:"Topico is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready.",
      serviceTime:"Hotline Free 24/7:",
      p_number:"(+100) 123 456 7890",
      address:"1234 Heaven Stress, Beverly Hill, Melbourne, USA.",
      e_mail:"[email protected]",
      fax:"(+100) 123 456 7890 - (+100) 123 456 7891",
      businessPhone:"(+100) 123 456 7890",

    }
  ]
  const form = [
    {
      name:"Name",
      email:"Email",
      phonenumber:"PhoneNumber",
      textarea:"What's on your mind ?",
    }
  ]
  return (
    <>
      <section class="contact__area">
        <div class="container-fluid p-0">
          <div class="row gx-0">
            <div class="col-xxl-12">
              <div class="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977788454!2d90.34928580896482!3d23.780777744508946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1639716493055!5m2!1sbn!2sbd"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact__area box-plr-90 pt-55 pb-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xxl-4 col-xl-4 col-lg-5">
              <div class="contact__info">
                <h3 class="contact__title">Our Main Office.</h3>
                <p class="contact__text">
                  {contact[0].text}
                </p>

                <div class="contact__hotline d-flex align-items-center mb-35">
                  <div class="contact__hotline-icon mr-20">
                    <i class="fa fa-headset"></i>
                  </div>
                  <div class="contact__hotline-info">
                    <span>{contact[0].serviceTime}</span>
                    <h6>
                      <a href="tel:06-900-6789-00">{contact[0].p_number}</a>
                    </h6>
                  </div>
                </div>
                <div class="contact__address mb-20">
                  <ul>
                    <li>
                      <p>
                        <span>Add:</span>
                        {contact[0].address}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Email:</span>
                        <a
                          href="/cdn-cgi/l/email-protection"
                          class="__cf_email__"
                          data-cfemail="ff96919990bf8b979a9d8a9a8c9486d19c9092"
                        >
                          {contact[0].e_mail}
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Fax:</span>
                        <a href="tel:06-900-6789-00">
                          {contact[0].fax}
                        </a> -{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Business Phone: </span>
                        <a href="tel:06-900-6789-00">{contact[0].businessPhone}</a>
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="contact__social">
                  <span>Social Share:</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-basketball-ball"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-8 col-xl-8 col-lg-7">
              <div class="contact__form">
                <h3 class="contact__title">Our Main Office.</h3>
                <form action="#">
                  <div class="row">
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div class="contact__input">
                        <span>{form[0].name}</span>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div class="contact__input">
                        <span>{form[0].email}</span>
                        <input type="email" />
                      </div>
                    </div>
                    <div class="col-xxl-12">
                      <div class="contact__input">
                        <span>{form[0].phonenumber}</span>
                        <input type="tel" />
                      </div>
                    </div>
                    <div class="col-xxl-12">
                      <div class="contact__input">
                        <span>{form[0].textarea}</span>
                        <textarea></textarea>
                      </div>
                    </div>
                    <div class="col-xxl-12">
                      <div class="contact__btn">
                        <button type="submit" class="t-y-btn">
                          send message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export { Contact };