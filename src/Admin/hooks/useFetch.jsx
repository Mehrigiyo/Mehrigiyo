import { useEffect } from "react"
import { useState } from "react"

const useFetch = (url, options) => {
    const [status, setStatus] = useState({
        loading: false,
        data: undefined,
        error: null
    })

    const fetchData = (url, options) => {
        setStatus({ loading: true })
        fetch(url, options)
            .then(response => response.json())
            .then(data => setStatus({ loading: false, data }))
            .catch(error => setStatus({ loading: false, error }))
    }

    useEffect(() => {
        if (url) {
            fetchData(url,options)
        }
    }, [])

    return {...status, fetchData}

}



export default useFetch

