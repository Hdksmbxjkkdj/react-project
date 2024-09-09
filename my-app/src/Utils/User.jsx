// import { usePage } from "@inertiajs/react"

const User = () => {
  // let check = usePage().props.user

  // if (user == undefined || user == '') {
  //     return false;
  // }
  if (localStorage.getItem("user")) {
    var user = localStorage.getItem("user");
    user = JSON.parse(user);
    // return check;
    return user;
  }
};

export { User };
