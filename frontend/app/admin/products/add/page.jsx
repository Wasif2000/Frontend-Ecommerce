// app/admin/products/add/page.jsx
"use client";

import { useState } from "react";
import axios from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    category: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Quick client-side check
    if (!form.category) {
      alert("Please select a category.");
      return;
    }

    try {
      setSaving(true);

      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("price", form.price);
      fd.append("stock", form.stock);
      fd.append("description", form.description);
      fd.append("category", form.category);

      if (imageFile) {
        fd.append("image", imageFile);
      }

      const res = await axios.post("/api/products", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product added successfully!");
      router.push("/admin/products");
    } catch (err) {
      console.error(err?.response?.data?.message || err.message);
      alert(err?.response?.data?.message || "Failed to create product");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add Product</h2>

      <form
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Price & Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock
            </label>
            <input
              name="stock"
              type="number"
              value={form.stock}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={onChange}
            rows="4"
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={onChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          >
            <option value="">-- Select Category --</option>
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
          </select>
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="text-gray-700"
          />
        </div>

        {/* Submit */}
        <div className="flex gap-2">
          <button
            disabled={saving}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {saving ? "Saving..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}
