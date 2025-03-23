import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'admin' | 'vendor' | 'affiliate';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Mock users for testing
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Vendor User',
    email: 'vendor@example.com',
    role: 'vendor',
  },
  {
    id: '3',
    name: 'Affiliate User',
    email: 'affiliate@example.com',
    role: 'affiliate',
  },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const user = mockUsers.find((u) => u.email === email);
        if (!user) {
          throw new Error('Invalid credentials');
        }

        // In a real app, you would verify the password here
        if (password.length < 6) {
          throw new Error('Invalid credentials');
        }

        set({ user, isAuthenticated: true });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);