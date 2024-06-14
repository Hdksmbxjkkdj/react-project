export const ContactForm= ()=>{
    return<>
         <div className="col-xxl-8 col-xl-8 col-lg-7">
                        <div className="contact__form">
                            <h3 className="contact__title">Our Main Office.</h3>
                            <form action="#">
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact__input">
                                            <span>Name</span>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact__input">
                                            <span>Email</span>
                                            <input type="email"/>
                                        </div>
                                    </div>
                                    <div className="col-xxl-12">
                                        <div className="contact__input">
                                            <span>Phone Number</span>
                                            <input type="tel" />
                                        </div>
                                    </div>
                                    <div className="col-xxl-12">
                                        <div className="contact__input">
                                            <span>What’s on your mind?</span>
                                            <textarea></textarea>
                                        </div>
                                    </div>
                                    <div className="col-xxl-12">
                                        <div className="contact__btn">
                                            <button type="submit" className="t-y-btn">send message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
    </>
}