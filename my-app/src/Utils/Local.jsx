import { usePage } from "@inertiajs/react"

const Local = () => {
    let local = usePage().props.local.lang

    if (local == undefined || local == '') {
        local = 'fa'
    }

    return local;
}

export { Local };
