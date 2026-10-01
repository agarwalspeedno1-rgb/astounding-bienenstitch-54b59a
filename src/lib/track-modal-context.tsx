import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

interface TrackModalContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
}

const TrackModalContext = createContext<TrackModalContextValue | null>(null)

export function TrackModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen],
  )

  return <TrackModalContext.Provider value={value}>{children}</TrackModalContext.Provider>
}

export function useTrackModal() {
  const ctx = useContext(TrackModalContext)
  if (!ctx) {
    throw new Error('useTrackModal must be used within a TrackModalProvider')
  }
  return ctx
}
