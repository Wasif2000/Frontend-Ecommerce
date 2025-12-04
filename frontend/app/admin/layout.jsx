// app/admin/layout.jsx
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

export const metadata = {
  title: "Admin - MyStore",
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex text-gray-900">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AdminNavbar />

        {/* Page content */}
        <main className="p-6 bg-gray-50 flex-1">
          {/* Optional: Add shadow or rounded corners to content cards */}
          <div className="w-full h-full rounded-lg bg-white shadow-sm p-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
