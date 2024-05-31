export const Show = (classname,addclass="show")=> {
    window?.$("#"+classname).toggleClass(addclass);
}