import { useEffect, useState } from "react";
import axios from "axios";

export const SidebarData=[]
export const Test = () =>{
    const [slider, setSlider] = useState();
  useEffect(() => {
    axios.get("http://localhost:313/best_selling").then((res) => {
        setSlider(res);
    });
  }, []);
    return<>
    </>
} 

