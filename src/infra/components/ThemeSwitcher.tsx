import React from 'react'
import { Button } from '@heroui/react'
import { Moon, Sun, SunMoon } from 'lucide-react'

export type ThemeMode = 'system' | 'light' | 'dark'

export default function ThemeSwitcher() {
    const [mode, setMode] = React.useState<ThemeMode>('system')
    const [spinning, setSpinning] = React.useState(false)

    const applyTheme = React.useCallback((m: ThemeMode) => {
        if (typeof window === 'undefined') {
            return
        }

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const isDark = m === 'dark' || (m === 'system' && prefersDark)

        document.documentElement.classList.toggle('dark', isDark)
    }, [])

    // Load stored theme on mount
    React.useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        const stored = (localStorage.getItem('theme') as ThemeMode | null) ?? 'system'
        setMode(stored)
    }, [])

    // Apply theme + listen to system changes when in `system` mode
    React.useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        applyTheme(mode)

        if (mode !== 'system') {
            return
        }

        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const listener = () => applyTheme('system')

        media.addEventListener('change', listener)
        return () => media.removeEventListener('change', listener)
    }, [mode, applyTheme])

    const cycleMode = React.useCallback(() => {
        setSpinning(true)
        setTimeout(() => setSpinning(false), 400)

        setMode((prev) => {
            const next: ThemeMode =
                prev === 'system' ? 'dark' : prev === 'dark' ? 'light' : 'system'

            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', next)
            }

            return next
        })
    }, [])

    const prefersDark =
        typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

    const isDark = mode === 'dark' || (mode === 'system' && prefersDark)
    const modeLabel = mode === 'system' ? 'System' : mode === 'dark' ? 'Dark' : 'Light'

    const icon =
        mode === 'system' ? (
            <SunMoon className="h-5 w-5" />
        ) : isDark ? (
            <Moon className="h-5 w-5" />
        ) : (
            <Sun className="h-5 w-5" />
        )

    return (
        <Button
            isIconOnly
            aria-label={`Toggle theme (current: ${modeLabel})`}
            title={`Theme: ${modeLabel}`}
            variant="light"
            onPress={cycleMode}
        >
            <span
                className={
                    'inline-flex h-5 w-5 items-center justify-center' +
                    (spinning ? ' theme-spin-once' : '')
                }
            >
                {icon}
            </span>
        </Button>
    )
}
