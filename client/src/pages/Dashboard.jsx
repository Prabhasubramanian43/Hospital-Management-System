import { Link } from "react-router-dom";

function Dashboard() {

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="container mt-5 mb-5">

      {/* Welcome */}
      <div className="card shadow p-4 mb-4 bg-primary text-white">

        <h2>
          Welcome, {user?.name || "User"} 👋
        </h2>

        <p className="mb-0">
          Welcome to the Hospital Management System.
        </p>

      </div>


      {/* Dashboard Cards */}
      <div className="row">

        {/* Doctors */}
        <div className="col-md-6 col-lg-3 mb-4">

          <div className="card shadow h-100 text-center p-4">

            <div style={{ fontSize: "50px" }}>
              👨‍⚕️
            </div>

            <h5 className="mt-3">
              Doctors
            </h5>

            <p className="text-muted">
              View available doctors
            </p>

            <Link
              to="/doctors"
              className="btn btn-primary"
            >
              View Doctors
            </Link>

          </div>

        </div>


        {/* Add Doctor */}
        <div className="col-md-6 col-lg-3 mb-4">

          <div className="card shadow h-100 text-center p-4">

            <div style={{ fontSize: "50px" }}>
              ➕
            </div>

            <h5 className="mt-3">
              Add Doctor
            </h5>

            <p className="text-muted">
              Add a new doctor
            </p>

            <Link
              to="/add-doctor"
              className="btn btn-success"
            >
              Add Doctor
            </Link>

          </div>

        </div>


        {/* Book Appointment */}
        <div className="col-md-6 col-lg-3 mb-4">

          <div className="card shadow h-100 text-center p-4">

            <div style={{ fontSize: "50px" }}>
              📅
            </div>

            <h5 className="mt-3">
              Appointment
            </h5>

            <p className="text-muted">
              Book an appointment
            </p>

            <Link
              to="/book-appointment"
              className="btn btn-warning"
            >
              Book Now
            </Link>

          </div>

        </div>


        {/* My Appointments */}
        <div className="col-md-6 col-lg-3 mb-4">

          <div className="card shadow h-100 text-center p-4">

            <div style={{ fontSize: "50px" }}>
              📋
            </div>

            <h5 className="mt-3">
              My Appointments
            </h5>

            <p className="text-muted">
              Manage appointments
            </p>

            <Link
              to="/appointments"
              className="btn btn-info"
            >
              View Appointments
            </Link>

          </div>

        </div>

      </div>


      {/* Information */}
      <div className="card shadow mt-3">

        <div className="card-body text-center p-4">

          <h3 className="text-primary">
            🏥 Your Health, Our Priority
          </h3>

          <p className="text-muted">
            Manage doctors and appointments easily
            using our Hospital Management System.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;