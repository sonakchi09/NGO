"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function VolunteerFormModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    city: "",
    helpType: "",
    message: "", 
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
  "https://ngo-backend-rosy.vercel.app/api/volunteer",
  formData
);

      alert(res.data.message);
      onClose();
    } catch (error: any) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      <div className="relative bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Make an Impact
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 border-black"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 border-black"
            onChange={handleChange}
            required
          />

          <input
            name="phoneno"
            type="tel"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 border-black"
            onChange={handleChange}
            required
          />

          <input
            name="city"
            type="text"
            placeholder="City / Location"
            className="w-full border px-4 py-2 border-black"
            onChange={handleChange}
            required
          />

          <select
            name="helpType"
            className="w-full border px-4 py-2 border-black"
            onChange={handleChange}
            required
          >
            <option value="">How can you help?</option>
            <option value="Field Work">Field Work</option>
            <option value="Medical Help">Medical Help</option>
            <option value="Fundraising">Fundraising</option>
            <option value="Social Media">Social Media</option>
            <option value="Logistics">Logistics</option>
          </select>

          <textarea
            name="message"
            placeholder="Why do you want to volunteer?"
            rows={3}
            className="w-full border px-4 py-2 border-black"
            onChange={handleChange}
          />

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white py-2 rounded-md"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 border py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}