import { usePage } from "@inertiajs/react"

const User = () => {
    let check = usePage().props.user

    if (check == undefined || check == '') {
        return false;
    }

    return check;
}

export { User };
