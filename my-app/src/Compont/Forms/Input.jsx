import { forwardRef, useEffect, useRef } from 'react';

export const Input = forwardRef(function Input({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = useRef()
    // const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div class="form-group d-flex">
            <label>{props.label} {props.required && <span className="require"></span>}</label>
            <input
                
                
                {...props}
                type={type}
                className={
                    'form-control' +
                    className
                }
                ref={input}
                required
            />
           {
            props.error && <p className={props.classNameError ? props.classNameError : 'text-danger'}>
                {props.error}
            </p>
            }
        </div>
    );
});