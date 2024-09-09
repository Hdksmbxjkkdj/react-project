

import axios from "axios";
import {Notif } from "../../Utils";
import { useState } from "react";
// import { Items } from "../Products/Items";

export const LoadMore = ({ setModal, lastPage, length,Items }) => {

    let page = localStorage.getItem('page') || 1
    const eMessage = 'error_message'
    const [items, setItems] = useState(null);


    const getMore = async (setItems) => {
        page++
        localStorage.setItem('page', page)

        if (parseInt(window?.$('#total').text()) < page * length) {
            window?.$('#to').html(window?.$('#total').text())
        } else {
            window?.$('#to').html(page * length)
        }

        var searchParams = new URLSearchParams(window.location.search)
        searchParams.set('page', page);

        var query = '?' + searchParams.toString();
        var url = window.location.pathname + query;

       window?.$('a.origin-load-more').fadeOut(0)
        window?.$('a.loading-load-more').fadeIn(300)
        console.log(url,'url')
        try {
            await axios.get(url).then((response) => {
                // items = {...items, data:[...items.data, ...response.data.data]}
                setItems(response.data)
            })
        } catch (error) {
            Notif('error', eMessage)
        }
    }

    return <>

        {items && <Items items={items} key={Math.random()} />}
        {
            !items ? < div className="text-center pt--20">
                <a onClick={() => getMore(setItems)} className="axil-btn btn-bg-lighter btn-load-more origin-load-more">موارد بیشتر</a>
                <a className="axil-btn btn-bg-lighter btn-load-more loading-load-more" style={{ verticalAlign: '-0.425', display: "none" }}>
                    در حال بارگزاری ... <span class="spinner-grow spinner-grow-lg" role="status" aria-hidden="true"></span></a>
            </div> : page >= lastPage ? '' : <LoadMore lastPage={lastPage} length={length} />
        }

    </>
}