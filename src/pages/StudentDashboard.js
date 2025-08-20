import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const grievances = [
    { id: 1, title: "Library WiFi Issue", status: "Pending" },
    { id: 2, title: "Hostel Food Quality", status: "In Review" },
  ];

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>My Grievances</h2>
          <Link to="/submit-grievance" className="submit-btn">
            + Submit New
          </Link>
        </div>
        <ul className="grievance-list">
          {grievances.map((g) => (
            <li key={g.id} className="grievance-item">
              <span className="grievance-title">{g.title}</span>
              <span
                className={`status-badge ${
                  g.status === "Pending" ? "status-pending" : "status-review"
                }`}
              >
                {g.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
