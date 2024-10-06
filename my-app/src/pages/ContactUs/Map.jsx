import { useEffect, useState } from "react"

export const Map = () =>{
    useEffect(() => {
        map()
    

      }, [])
    
     const map =()=>{
        window?.$("#map").addClass("loading-map").fadeOut(1000);
      
     }
   
     

       return <>
          <section className="contact__area">
            <div className="container-fluid p-0">
                <div className="row gx-0">
                    <div className="col-xxl-12">
                        <div className="contact__map">
                        <div id="map"></div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3283.179738915667!2d50.87282331982338!3d34.624897900000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1725955064336!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                        
                        </div>

                    </div>
                </div>
            </div>
        </section>
    
    
         
       </>
       
        
}