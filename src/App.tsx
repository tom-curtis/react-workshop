// src/App.tsx
import type { ExerciseNavItem } from '@/infra/components/AppShell'

import { AppShell } from '@/infra/components/AppShell'
import WorkbookContent from '@/infra/components/WorkbookContent'
import { ExerciseModal } from '@/infra/components/ExerciseModal'

import { useExerciseUrlState } from './infra/hooks/useExerciseUrlState.ts'

// NEW EXERCISES
import Ex1RecipeGallery from './exercises/Ex1RecipeGallery'
import Ex2MoodTracker from './exercises/Ex2MoodTracker'
import Ex3EventRegistrationForm from './exercises/Ex3EventRegistrationForm'
import Ex4ProductFilter from './exercises/Ex4ProductFilter'
import Ex5UserPreferences from './exercises/Ex5UserPreferences'
import Ex6NotificationCenter from './exercises/Ex6NotificationCenter'

const exercises: ExerciseNavItem[] = [
    {
        id: 1,
        title: 'Recipe Gallery',
        description: 'Components & lists',
    },
    {
        id: 2,
        title: 'Mood Tracker',
        description: 'State & conditional UI',
    },
    {
        id: 3,
        title: 'Event Registration Form',
        description: 'Forms & validation',
    },
    {
        id: 4,
        title: 'Product Filter',
        description: 'Filtering & derived state',
    },
    {
        id: 5,
        title: 'User Preferences',
        description: 'useEffect & localStorage',
    },
    {
        id: 6,
        title: 'Notifications Center',
        description: 'Effects, timers & lists',
    },
]

function renderExercise(id: number) {
    switch (id) {
        case 1:
            return <Ex1RecipeGallery />
        case 2:
            return <Ex2MoodTracker />
        case 3:
            return <Ex3EventRegistrationForm />
        case 4:
            return <Ex4ProductFilter />
        case 5:
            return <Ex5UserPreferences />
        case 6:
            return <Ex6NotificationCenter />
        default:
            return null
    }
}

export default function App() {
    const { activeId, openExercise, closeExercise } = useExerciseUrlState()
    const activeMeta = exercises.find((e) => e.id === activeId) ?? null

    return (
        <>
            <AppShell
                activeExerciseId={activeId}
                exercises={exercises}
                onOpenExercise={openExercise}
            >
                <WorkbookContent />
            </AppShell>

            <ExerciseModal
                exercise={
                    activeMeta && {
                        id: activeMeta.id,
                        title: activeMeta.title,
                        subtitle: activeMeta.description ?? '',
                    }
                }
                open={activeId !== null}
                onClose={closeExercise}
            >
                {activeId !== null && renderExercise(activeId)}
            </ExerciseModal>
        </>
    )
}
