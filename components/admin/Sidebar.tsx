"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, FolderOpen, Tags, Layers, LogOut, Sparkles } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext"; // ← pastikan path ini benar

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: FolderOpen, label: "Projects", path: "/admin/projects" },
  { icon: Tags, label: "Categories", path: "/admin/categories" },
  { icon: Layers, label: "Tech Stacks", path: "/admin/techstacks" },
];

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname(); // pengganti useLocation()
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  return (
    <div className="w-64 h-screen bg-[#0F2A3F]/40 backdrop-blur-xl border-r border-white/10 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-[#2EC4B6]/20 to-[#3EDBF0]/20 rounded-lg">
            <Sparkles className="w-6 h-6 text-[#3EDBF0]" />
          </div>
          <div>
            <h2 className="text-lg text-white">Akarsa Admin</h2>
            <p className="text-xs text-white/60">CMS Dashboard</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <motion.button
              key={item.path}
              whileHover={{ x: 4 }}
              onClick={() => router.push(item.path)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${isActive ? "bg-gradient-to-r from-[#2EC4B6]/20 to-[#3EDBF0]/20 text-[#3EDBF0] border border-[#3EDBF0]/30 shadow-lg shadow-[#3EDBF0]/10" : "text-white/70 hover:text-white hover:bg-white/5"}
              `}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <motion.button
          whileHover={{ x: 4 }}
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-red-500/10 hover:border-red-500/30 transition-all border border-transparent"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </motion.button>
      </div>
    </div>
  );
}
