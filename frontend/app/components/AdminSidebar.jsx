// components/AdminSidebar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBox, FiShoppingCart, FiUsers, FiSettings, FiLogOut, FiPlusSquare } from "react-icons/fi";

export default function AdminSidebar() {
  const pathname = usePathname();

  const nav = [
    { href: "/admin", label: "Dashboard", icon: <FiHome /> },
    { href: "/admin/products", label: "Products", icon: <FiBox /> },
    { href: "/admin/products/add", label: "Add Product", icon: <FiPlusSquare /> },
    { href: "/admin/orders", label: "Orders", icon: <FiShoppingCart /> },
    { href: "/admin/customers", label: "Customers", icon: <FiUsers /> },
    { href: "/admin/settings", label: "Settings", icon: <FiSettings /> },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-50 border-r shadow-md sticky top-0">
      <div className="p-4 border-b bg-white">
        <h1 className="text-2xl font-bold text-gray-800">MyStore Admin</h1>
      </div>

      <nav className="p-4">
        {nav.map((n) => {
          const active = pathname === n.href;
          return (
            <Link
              key={n.href}
              href={n.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200
                ${
                  active
                    ? "bg-blue-600 text-white font-semibold shadow"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
            >
              <span className="text-lg">{n.icon}</span>
              <span className="text-sm">{n.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button className="w-full flex items-center gap-2 px-4 py-3 rounded-lg text-red-700 hover:bg-red-100 hover:text-red-800 transition-colors">
          <FiLogOut className="text-lg" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
