import { useEffect, useState } from "react";
import axios from "axios";

export const SidebarData=[]
// for(let i=1;i <= 2;i++){
//     var id,price,img;
//     SidebarData.push(
//          {
                    
       
//                  img:`https://picsum.photos/20${i}`,
//                  id:i,
//                  price:300+i,
//                  title:'Australian Large Granny Smith Apples',
//         }
        
//     )
//     // console.log(SidebarData)
// console.log(slider)
export const Test = () =>{
    const [slider, setSlider] = useState();
  useEffect(() => {
    axios.get("http://localhost:313/best_selling").then((res) => {
        setSlider(res);
    });
  }, []);
  console.log(slider)
    return<>
    </>
} 

