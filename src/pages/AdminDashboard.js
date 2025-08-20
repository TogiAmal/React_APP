import Header from "../components/Header";

export default function AdminDashboard() {
  const grievances = [
    { id: 1, title: "Library WiFi Issue", status: "Pending" },
    { id: 2, title: "Hostel Food Quality", status: "In Review" },
  ];

  const handleUpdateStatus = (id, status) => {
    console.log(`Grievance ${id} updated to ${status}`);
  };

  return (
    <div>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Admin Dashboard</h2>
        <ul className="space-y-3">
          {grievances.map((g) => (
            <li key={g.id} className="p-4 border rounded-lg shadow bg-white flex justify-between items-center">
              <span className="font-medium">{g.title} - <strong>{g.status}</strong></span>
              <div className="space-x-2">
                <button onClick={() => handleUpdateStatus(g.id, "In Review")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow transition">
                  Review
                </button>
                <button onClick={() => handleUpdateStatus(g.id, "Resolved")}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded shadow transition">
                  Resolve
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
