import { useEffect, useState } from 'react'

function getExerciseIdFromUrl(): number | null {
    const params = new URLSearchParams(window.location.search)
    const raw = params.get('ex')

    if (!raw) {
        return null
    }
    const n = Number(raw)

    return Number.isFinite(n) ? n : null
}

export function useExerciseUrlState() {
    const [activeId, setActiveId] = useState<number | null>(() => getExerciseIdFromUrl())

    useEffect(() => {
        function handlePop() {
            setActiveId(getExerciseIdFromUrl())
        }
        window.addEventListener('popstate', handlePop)

        return () => window.removeEventListener('popstate', handlePop)
    }, [])

    function openExercise(id: number) {
        const url = new URL(window.location.href)

        url.searchParams.set('ex', String(id))
        window.history.pushState({}, '', url)
        setActiveId(id)
    }

    function closeExercise() {
        const url = new URL(window.location.href)

        url.searchParams.delete('ex')
        window.history.pushState({}, '', url)
        setActiveId(null)
    }

    return { activeId, openExercise, closeExercise }
}
