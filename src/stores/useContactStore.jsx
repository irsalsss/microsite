import create from 'zustand';
import { persist } from 'zustand/middleware';

const useContactStore = create()(
  persist(
    (set, get) => ({
      contact: '021-12345678',
      setContact: (value) => set({ contact: value }),
    }),
    {
      name: 'contact',
      getStorage: () => localStorage,
    }
  )
);

export default useContactStore;
