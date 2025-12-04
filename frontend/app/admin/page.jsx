// app/admin/page.jsx
import React from "react";

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-xl shadow">
          <div className="text-sm text-gray-500">Total Products</div>
          <div className="text-3xl font-semibold mt-2">128</div>
        </div>
        <div className="p-4 bg-white rounded-xl shadow">
          <div className="text-sm text-gray-500">Orders (this month)</div>
          <div className="text-3xl font-semibold mt-2">42</div>
        </div>
        <div className="p-4 bg-white rounded-xl shadow">
          <div className="text-sm text-gray-500">Revenue</div>
          <div className="text-3xl font-semibold mt-2">$5,420</div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white rounded-xl shadow">
        <h3 className="font-semibold mb-2">Recent Orders</h3>
        <p className="text-sm text-gray-500">A simple placeholder table can go here.</p>
      </div>
    </div>
  );
}
