// import { usePage } from "@inertiajs/react"

const User = () => {
    // let check = usePage().props.user

    let user = localStorage.getItem("user")
    if (user == undefined || user == '') {
        return false;
    }
    user = JSON.parse(user)
    // return check;
    return user;
}

export { User };
