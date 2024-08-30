import { RefObject, useState, useMemo, useEffect } from "react"

export default function useIsVisible(ref: RefObject<HTMLElement>) {
    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(
        () =>
            new IntersectionObserver(
                ([entry]) => setIntersecting(entry.isIntersecting),
                {
                    threshold: 1,
                },
            ),
        [ref],
    )

    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current)
            return () => observer.disconnect()
        }
    }, [])

    return isIntersecting
}
