import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GrievanceForm() {
  const [form, setForm] = useState({ title: "", category: "", description: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Grievance:", form);
    navigate("/dashboard");
  };

  return (
    <div>
      <Header />
      <div className="p-6 flex justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Submit Grievance</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input name="title" placeholder="Title"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              onChange={handleChange} />
            <input name="category" placeholder="Category"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              onChange={handleChange} />
            <textarea name="description" placeholder="Description"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 h-32"
              onChange={handleChange}></textarea>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
