import { useEffect, useState } from "react";
import axios from "axios";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/doctors"
      );

      setDoctors(res.data.doctors);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDoctor = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/doctors/${id}`
      );

      alert(res.data.message);

      getDoctors();
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>👨‍⚕️ Our Doctors</h2>

        <a
          href="/add-doctor"
          className="btn btn-success"
        >
          + Add Doctor
        </a>
      </div>

      <div className="row">

        {doctors.length === 0 ? (
          <div className="text-center">
            <p>No doctors found.</p>
          </div>
        ) : (
          doctors.map((doctor) => (
            <div
              className="col-md-4 mb-4"
              key={doctor._id}
            >

              <div className="card shadow h-100">

                <div className="card-body">

                  <h4 className="card-title">
                    {doctor.name}
                  </h4>

                  <p className="text-success fw-bold">
                    {doctor.specialization}
                  </p>

                  <p>
                    <strong>Experience:</strong>{" "}
                    {doctor.experience} Years
                  </p>

                  <p>
                    <strong>Consultation Fees:</strong>{" "}
                    ₹{doctor.fees}
                  </p>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this doctor?"
                        )
                      ) {
                        deleteDoctor(doctor._id);
                      }
                    }}
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Doctors;