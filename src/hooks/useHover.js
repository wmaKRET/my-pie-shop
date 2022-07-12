import { useState, useEffect, useRef } from "react"

function useHover(){
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    const mouseIsOver = () => setHovered(true)
    const mouseIsNotOver = () => setHovered(false)

    useEffect(() => {
        const node = ref.current
        if (node) {
            node.addEventListener("mouseover", mouseIsOver)
            node.addEventListener("mouseleave", mouseIsNotOver)
            return () => {
                node.addEventListener("mouseover", mouseIsOver)
                node.addEventListener("mouseleave", mouseIsNotOver)
            }
        }
    }, [])

    return [hovered, ref]
}

export default useHover