import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"

export const ContactArea = () =>{
    return<>
         <section className="contact__area box-plr-90 pt-55 pb-100">
            <div className="container-fluid">
                <div className="row">
                    <ContactInfo></ContactInfo>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    </>
}