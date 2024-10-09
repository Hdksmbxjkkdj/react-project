import axios from "axios";
import { Notif } from "../../Utils";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
// const getResultFilter = async (getData,query,setItems, eMessage, local, secendFilterValue) => {
    const getResultFilter = async (getData,query,setItems, eMessage, local) => {

    // let url = '/' + local + '/products/filter' + query

     let url='http://localhost:313/best_selling?'+ query
    
   

    let status = null
    try {
        let message;
        getData(1)
        // await axios.get(url).then((response) => {
            
          
        //     // setItems(response.data.items)
        //     setItems(response)
          
        //     if (response.data.status) status = response.data.status
        //     message = response.data.message
          
        // })
        
        


        if (status != null) {
            Notif('error', message)
         }

     }
     catch (error) {
        Notif('error', eMessage)

 }
   
}



 


export const Filter = (getData,setItems, length, filterItem, filterValue, eMessage, local ,type = 'str') => {
  
    if (filterItem == null || filterItem == undefined) return
    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search)
      
        let oldParam = searchParams.get('price_lte');
      
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
            searchParams.set(filterItem, filterValue);//
            //   searchParams=(filterValue)
            //   searchParams.set(secondFilterItem, secendFilterValue);
            
                break;
            default:
                if (oldParam == filterValue) {
                    searchParams.delete(filterItem)
                } else {
                    searchParams.set(filterItem, filterValue);
                }
                break;
        }
        // var query = '?' + searchParams.toString();
          var query =  searchParams.toString();

      
        var newRelativePathQuery = window.location.pathname+"?" + query;

        // var newRelativePathQuery = window.location.pathname +'?'+query;
        window?.history.pushState(null, '', newRelativePathQuery);
        // getResultFilter( getData,query,setItems, eMessage, local,secendFilterValue);
        getResultFilter( getData,query,setItems, eMessage, local);


    } else {
        Notif('error', 'your browser is oldest, please update it')
    }
}

export const removeFilter = (getData,setItems, eMessage, local) => {
    try {
        window?.history.pushState(null, '', window.location.href.split('?')[0] + '?');
        getResultFilter(getData,'', setItems, eMessage, local)
    } catch (error) {
        Notif('error', 'your browser is oldest, please update it')
    }
}