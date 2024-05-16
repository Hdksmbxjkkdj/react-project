import { toast } from 'react-toastify';

export const Notif = (type = 'success', message, close = 4000, hover = true, position = 'top-right') => {
    return toast[type](message, {
        position: position,
        autoClose: close,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: hover,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}