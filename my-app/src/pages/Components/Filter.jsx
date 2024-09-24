import axios from "axios";
import { Notif } from "../../Utils";
import { useEffect,useState } from "react";

import { useParams } from "react-router-dom";
const getResultFilter = async (getData, query,setItems, eMessage, local, secendFilterValue) => {
    // let url = '/' + local + '/products/filter' + query
    // console.log(count?.start,"count?.start")
    // let url=`http://localhost:313/best_selling?_page=${count?.start}&_per_page=${count?.Limit}`+query
         let url='http://localhost:313/best_selling?'+ query
    
    //  let url=`http://localhost:313/best_selling?price=${secendFilterValue}`
    // console.log(url)
    let status = null
    try {
        let message;
        getData(1)
        // await axios.get(url).then((response) => {
        //     // console.log("filter");
        //     // console.log(response);
          
        //     // setItems(response.data.items)
        //     // setItems(response.data)
        //     setItems(response.data)
          
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



 


export const Filter = (getData,setItems, length, filterItem, filterValue, eMessage, local ,type = 'str', secondFilterItem = null, secendFilterValue = null) => {
   
    if (filterItem == null || filterItem == undefined) return
    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search)
        let oldParam = searchParams.get('color-id');
        console.log(type,filterItem,oldParam)
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
              searchParams.set(secondFilterItem, secendFilterValue);
            
                break;
            default:
                // if (oldParam == filterValue) {
                //     searchParams.delete(filterItem)
                //     console.log('errore')
                // } else {
                //     searchParams.set(filterItem, filterValue);
                // }
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
        getResultFilter(getData, query,setItems, eMessage, local,secendFilterValue);

    } else {
        Notif('error', 'your browser is oldest, please update it')
    }
}

export const removeFilter = (getData, setItems, eMessage, local) => {
  
    try {
        window?.history.pushState(null, '', window.location.href.split('?')[0] + '?');
        getResultFilter(getData,'', setItems, eMessage, local)
    } catch (error) {
        Notif('error', 'your browser is oldest, please update it')
    }
}