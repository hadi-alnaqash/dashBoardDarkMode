import create from 'zustand'

export const useAppStore = create((set) => ({
    darkMode: false,
    setdarkMode: (darkMode) => set({darkMode}),
}))