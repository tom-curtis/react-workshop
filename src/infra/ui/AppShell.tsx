import type { ReactNode } from 'react'

export type ExerciseNavItem = {
    id: number
    title: string
    description: string
}

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from '@heroui/react'

type AppShellProps = {
    exercises: ExerciseNavItem[]
    activeExerciseId?: number | null
    onOpenExercise: (id: number) => void
    children?: ReactNode
}
export function AppShell({ exercises, activeExerciseId, onOpenExercise, children }: AppShellProps) {
    const activeExercise = exercises.find((ex) => ex.id === activeExerciseId)

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar isBordered className="backdrop-blur bg-background/70" maxWidth="xl">
                <NavbarBrand className="gap-3">
                    <div className="flex items-center gap-2">
                        {/* Logos */}
                        <div className="flex items-center gap-1">
                            <img alt="React logo" className="h-12 w-12" src="/react.svg" />
                            <img alt="Hacksmiths logo" className="h-16 w-16 " src="/hack.svg" />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col leading-tight">
                            <span className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-[0.7rem]">
                                Hacksmiths
                            </span>
                            <span className="text-sm font-semibold sm:text-base">
                                React Masterclass
                            </span>
                        </div>
                    </div>
                </NavbarBrand>

                <NavbarContent className="gap-3" justify="end">
                    {exercises.length > 0 && (
                        <NavbarItem>
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Button
                                        className="max-w-xs truncate"
                                        color="primary"
                                        radius="full"
                                        size="sm"
                                    >
                                        {activeExercise ? (
                                            <span className="truncate">
                                                Exercise {activeExercise.id}: {activeExercise.title}
                                            </span>
                                        ) : (
                                            'Choose an exercise'
                                        )}
                                    </Button>
                                </DropdownTrigger>

                                <DropdownMenu
                                    aria-label="Select exercise"
                                    onAction={(key) => onOpenExercise(Number(key))}
                                >
                                    {exercises.map((ex) => (
                                        <DropdownItem
                                            key={ex.id}
                                            description={ex.description}
                                            textValue={`Exercise ${ex.id}: ${ex.title}`}
                                        >
                                            <span className="text-sm font-medium">
                                                Exercise {ex.id}: {ex.title}
                                            </span>
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarItem>
                    )}
                </NavbarContent>
            </Navbar>

            <main className="mx-auto max-w-4xl px-3 py-6">
                {activeExercise === null ? (
                    <div className="flex flex-col items-start gap-2 text-sm text-default-500">
                        <p className="font-medium text-default-600">Welcome 👋</p>
                        <p>
                            Pick an exercise from the top-right menu to get started. You’ll
                            implement the logic in the editor below.
                        </p>
                    </div>
                ) : (
                    children
                )}
            </main>
        </div>
    )
}
