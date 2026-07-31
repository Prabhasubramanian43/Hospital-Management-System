import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      {/* Hero Section */}
      <div className="container mt-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-primary">
              Hospital
              <br />
              Management System
            </h1>

            <p className="lead">
              Quality healthcare at your fingertips.
            </p>

            <p>
              Manage doctors, appointments and patients
              easily and efficiently.
            </p>

            <Link
              to="/book-appointment"
              className="btn btn-primary me-3"
            >
              Book Appointment
            </Link>

            <Link
              to="/doctors"
              className="btn btn-outline-primary"
            >
              View Doctors
            </Link>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
              alt="Hospital"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>

      {/* Services */}
      <div className="container mt-5 mb-5">

        <h2 className="text-center mb-4">
          Our Services
        </h2>

        <div className="row">

          <div className="col-md-4 mb-3">
            <div className="card shadow h-100 text-center p-4">
              <h1>👨‍⚕️</h1>
              <h4>Expert Doctors</h4>
              <p>
                Find and consult experienced doctors.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow h-100 text-center p-4">
              <h1>📅</h1>
              <h4>Easy Appointments</h4>
              <p>
                Book appointments quickly and easily.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow h-100 text-center p-4">
              <h1>🏥</h1>
              <h4>Better Healthcare</h4>
              <p>
                Manage your healthcare efficiently.
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;