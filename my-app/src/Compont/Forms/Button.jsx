import React from 'react';
import {Lang} from '../index';

export const Button = (props) => {
  let {label, onClick, className, disabled} = props;

  className = className?className:"btn btn-primary w-20";
  if(disabled) className += " disabled";

  return(
      <button
        type="button" 
        className={className} 
        onClick={(event)=> onClick(event)}
      >
        {Lang('public.'+label)}
      </button>
  );
}
