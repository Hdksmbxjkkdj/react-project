import { forwardRef, useEffect, useRef } from 'react';

export const Textarea = forwardRef(function Textarea({ className = '', isFocused = false, ...props }, ref) {
    const textarea = ref;

    useEffect(() => {
        if (isFocused) {
            textarea.current.focus();
        }
    }, []);

    return (
        <div class="form-group">
            <label>{props.label} {props.required && <span className="require">÷</span>}</label>
            <textarea
                {...props}
                className={
                    'form-control' +
                    className
                }
                ref={textarea}
            >{props.value}</textarea>
           {
            props.error && <p  className={props.classNameError ? props.classNameError : 'text-danger'}>
                {props.error}
            </p>
            }
        </div>
    );
});