import axios from "axios";
import { Notif } from "../../Utils";

const getResultFilter = async (query, setItems, eMessage, local) => {
    let url = '/' + local + '/products/filter' + query
    let status = null

    try {
        let message;

        await axios.get(url).then((response) => {
            setItems(response.data.items)
            if (response.data.status) status = response.data.status
            message = response.data.message
        })

        if (status != null) {
            Notif('error', message)
        }

    } catch (error) {
        Notif('error', eMessage)
    }
}

export const Filter = (setItems, length, filterItem, filterValue, eMessage, local, type = 'str', secondFilterItem = null, secendFilterValue = null) => {
    if (filterItem == null || filterItem == undefined) return

    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search)
        console.log(searchParams)
        let oldParam = searchParams.get('category');
        switch (type) {
            case 'array':
                if (oldParam != null) {
                    oldParam = [...new Set(oldParam.split(','))]
                    let index = oldParam.indexOf(filterValue.toString());
                    if (index > -1) {
                        oldParam.splice(index, 1);
                        filterValue = oldParam
                    } else {
                        if (oldParam != '') {
                            filterValue = [...oldParam, filterValue]
                        }
                    }

                }
                searchParams.set(filterItem, filterValue);
                break;
            case 'domain':
                searchParams.set(filterItem, filterValue);
                searchParams.set(secondFilterItem, secendFilterValue);
                break;
            default:
                if (oldParam == filterValue) {
                    searchParams.delete(filterItem)
                } else {
                    searchParams.set(filterItem, filterValue);
                }
                break;
        }
        
        var query = '?' + searchParams.toString();
        var newRelativePathQuery = window.location.pathname + query;
         var t=window?.history.pushState(null, '', newRelativePathQuery);
         
        getResultFilter(query, setItems, eMessage, local);

    } else {
        Notif('error', 'your browser is oldest, please update it')
    }
}

// export const removeFilter = (setItems, eMessage, local) => {
//     try {
//         history.pushState(null, '', window.location.href.split('?')[0] + '?');
//         getResultFilter('', setItems, eMessage, local)
//     } catch (error) {
//         Notif('error', 'your browser is oldest, please update it')
//     }
// }