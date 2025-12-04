// app/admin/products/[id]/page.jsx
"use client";

import { useEffect, useState } from "react";
import axios from "@/lib/axiosInstance";
import { useParams, useRouter } from "next/navigation";

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({ name: "", price: "", stock: "", description: "", image: "" });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get(`/api/products/${id}`);
        setForm(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to load product");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      setSaving(true);
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("price", form.price);
      fd.append("stock", form.stock);
      fd.append("description", form.description);
      if (imageFile) fd.append("image", imageFile);

      await axios.put(`/api/products/${id}`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Updated");
      router.push("/admin/products");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

      <form className="bg-white shadow rounded p-6 max-w-2xl" onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-sm">Name</label>
          <input name="name" value={form.name || ""} onChange={onChange} className="w-full border p-2 rounded" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Price</label>
            <input name="price" value={form.price || ""} onChange={onChange} className="w-full border p-2 rounded" required />
          </div>
          <div>
            <label className="block text-sm">Stock</label>
            <input name="stock" value={form.stock || ""} onChange={onChange} className="w-full border p-2 rounded" />
          </div>
        </div>

        <div className="mb-4 mt-4">
          <label className="block text-sm">Description</label>
          <textarea name="description" value={form.description || ""} onChange={onChange} className="w-full border p-2 rounded" rows="4" />
        </div>

        <div className="mb-4">
          <label className="block text-sm">Current Image</label>
          {form.image ? (
            <img src={form.image} alt="current" className="w-40 h-40 object-cover rounded" />
          ) : (
            <div className="w-40 h-40 bg-gray-100 flex items-center justify-center rounded">No Image</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm">Replace Image</label>
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
        </div>

        <div className="flex gap-2">
          <button disabled={saving} className="px-4 py-2 bg-green-600 text-white rounded">
            {saving ? "Saving..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
