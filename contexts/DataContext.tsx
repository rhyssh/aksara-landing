"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { projects as initialProjects, categories as initialCategories, techStacks as initialTechStacks, Project, Category, TechStack } from "@/data/mockData";

interface DataContextType {
  projects: Project[];
  categories: Category[];
  techStacks: TechStack[];
  addProject: (project: Omit<Project, "id" | "createdAt">) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  addCategory: (category: Omit<Category, "id">) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  addTechStack: (techStack: Omit<TechStack, "id">) => void;
  updateTechStack: (id: string, techStack: Partial<TechStack>) => void;
  deleteTechStack: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [techStacks, setTechStacks] = useState<TechStack[]>([]);
  const [isLoading, setIsLoading] = useState(true); // ← Tambahan untuk menghindari warning

  // Load data from localStorage once on mount
  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem("akarsa_projects");
      const storedCategories = localStorage.getItem("akarsa_categories");
      const storedTechStacks = localStorage.getItem("akarsa_techstacks");

      setProjects(storedProjects ? JSON.parse(storedProjects) : initialProjects);
      setCategories(storedCategories ? JSON.parse(storedCategories) : initialCategories);
      setTechStacks(storedTechStacks ? JSON.parse(storedTechStacks) : initialTechStacks);
    } catch (error) {
      console.error("Failed to load data from localStorage:", error);
      // Fallback ke initial data
      setProjects(initialProjects);
      setCategories(initialCategories);
      setTechStacks(initialTechStacks);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Projects CRUD
  const addProject = (project: Omit<Project, "id" | "createdAt">) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem("akarsa_projects", JSON.stringify(updatedProjects));
  };

  const updateProject = (id: string, updatedData: Partial<Project>) => {
    const updatedProjects = projects.map((p) => (p.id === id ? { ...p, ...updatedData } : p));
    setProjects(updatedProjects);
    localStorage.setItem("akarsa_projects", JSON.stringify(updatedProjects));
  };

  const deleteProject = (id: string) => {
    const updatedProjects = projects.filter((p) => p.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem("akarsa_projects", JSON.stringify(updatedProjects));
  };

  // Categories CRUD
  const addCategory = (category: Omit<Category, "id">) => {
    const newCategory: Category = {
      ...category,
      id: Date.now().toString(),
    };
    const updatedCategories = [...categories, newCategory];
    setCategories(updatedCategories);
    localStorage.setItem("akarsa_categories", JSON.stringify(updatedCategories));
  };

  const updateCategory = (id: string, updatedData: Partial<Category>) => {
    const updatedCategories = categories.map((c) => (c.id === id ? { ...c, ...updatedData } : c));
    setCategories(updatedCategories);
    localStorage.setItem("akarsa_categories", JSON.stringify(updatedCategories));
  };

  const deleteCategory = (id: string) => {
    const updatedCategories = categories.filter((c) => c.id !== id);
    setCategories(updatedCategories);
    localStorage.setItem("akarsa_categories", JSON.stringify(updatedCategories));
  };

  // Tech Stacks CRUD
  const addTechStack = (techStack: Omit<TechStack, "id">) => {
    const newTechStack: TechStack = {
      ...techStack,
      id: Date.now().toString(),
    };
    const updatedTechStacks = [...techStacks, newTechStack];
    setTechStacks(updatedTechStacks);
    localStorage.setItem("akarsa_techstacks", JSON.stringify(updatedTechStacks));
  };

  const updateTechStack = (id: string, updatedData: Partial<TechStack>) => {
    const updatedTechStacks = techStacks.map((t) => (t.id === id ? { ...t, ...updatedData } : t));
    setTechStacks(updatedTechStacks);
    localStorage.setItem("akarsa_techstacks", JSON.stringify(updatedTechStacks));
  };

  const deleteTechStack = (id: string) => {
    const updatedTechStacks = techStacks.filter((t) => t.id !== id);
    setTechStacks(updatedTechStacks);
    localStorage.setItem("akarsa_techstacks", JSON.stringify(updatedTechStacks));
  };

  const value: DataContextType = {
    projects,
    categories,
    techStacks,
    addProject,
    updateProject,
    deleteProject,
    addCategory,
    updateCategory,
    deleteCategory,
    addTechStack,
    updateTechStack,
    deleteTechStack,
  };

  // Optional loading state
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading data...</div>;
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
