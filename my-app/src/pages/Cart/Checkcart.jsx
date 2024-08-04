export const Check = (id,cart)=> {
    if(cart!=null)
    {
        if (getObject(cart.id)?.includes(id))
        {
            return true
        }
    }
    return false
}
const getObject = (value)=> {
    return value == undefined ? {} : value;
}