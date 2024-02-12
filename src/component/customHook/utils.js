import {useEffect, useState} from "react"
const useResize = () => {
    const [windowsize, setWindowsize] = useState(0)
    const handleResize = () => {
        const windowNewSize =  window.innerWidth
        console.log(windowNewSize)
        setWindowsize(windowNewSize)
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [])
    return windowsize
}

export default useResize