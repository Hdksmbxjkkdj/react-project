
import { useLocation } from "react-router-dom";
import * as tf from '@tensorflow/tfjs';

import { useState } from "react";
export const Copy = () => {

const location = useLocation();
const currentUrl = `${window.location.protocol}//${window.location.host}${location.pathname}${location.search}${location.hash}`;
 const copy=(e=null)=>{
  if(e==null){e=currentUrl}
   navigator.clipboard.writeText(e);
 }

 return copy
};
