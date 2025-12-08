import type { ExerciseNavItem } from '@/infra/components/AppShell'
import type { ReactNode } from 'react'

import { Modal, ModalContent, ModalHeader, ModalBody } from '@heroui/react'

type Props = {
    open: boolean
    exercise: ExerciseNavItem | null
    onClose: () => void
    children: ReactNode
}

export function ExerciseModal({ open, exercise, onClose, children }: Props) {
    return (
        <Modal
            backdrop="blur"
            isOpen={open}
            scrollBehavior="inside"
            size="3xl"
            onOpenChange={(isOpen) => {
                if (!isOpen) {
                    onClose()
                }
            }}
        >
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex items-center justify-between gap-2">
                            <div>
                                <div className="text-xs text-default-400">
                                    Exercise {exercise?.id}
                                </div>
                                <div className="text-sm font-semibold">{exercise?.title}</div>
                                <div className="text-xs text-default-500">
                                    {exercise?.description}
                                </div>
                            </div>
                        </ModalHeader>
                        <ModalBody className="pb-4">{children}</ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
