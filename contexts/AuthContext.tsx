"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  email: string;
  name: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // ← Tambahan untuk menghindari flash

  // Load user from localStorage only once on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("akarsa_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("akarsa_user");
      }
    }
    setIsLoading(false);
  }, []); // Empty dependency = run once on mount

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    if (email === "admin@akarsa.com" && password === "admin123") {
      const userData: User = {
        email,
        name: "Admin User",
        token: "mock-jwt-token-" + Date.now(),
      };
      setUser(userData);
      localStorage.setItem("akarsa_user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("akarsa_user");
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  // Optional: Tampilkan loading state saat pertama kali load
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
