import { useState } from "react"

function useLocalStore(key, value = undefined) {
    const [data, setData] = useState('')
    if (value) {
        localStorage.setItem(key, JSON.stringify(value))
        setData(JSON.parse(localStorage(key)))
    }
    return { data }
}

export { useLocalStore }