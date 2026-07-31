import { useEffect, useState } from "react";
import axios from "axios";

function BookAppointment() {
  const [patientName, setPatientName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/appointments/book",
        {
          patientName,
          doctorId,
          appointmentDate,
          appointmentTime,
        }
      );

      alert(res.data.message);

      setPatientName("");
      setDoctorId("");
      setAppointmentDate("");
      setAppointmentTime("");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="container mt-5 mb-5">

      <div className="row align-items-center">

        {/* Image */}
        <div className="col-md-5 mb-4">

          <img
            src="/src/assets/Online_appoinment.jpeg"
            alt="Doctor and Patient"
            className="img-fluid rounded shadow"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
            }}
          />

        </div>

        {/* Appointment Form */}
        <div className="col-md-7">

          <div className="card shadow p-4">

            <h2 className="text-center text-primary mb-4">
              📅 Book Appointment
            </h2>

            <form onSubmit={handleSubmit}>

              {/* Patient Name */}
              <div className="mb-3">

                <label className="form-label">
                  Patient Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter patient name"
                  value={patientName}
                  onChange={(e) =>
                    setPatientName(e.target.value)
                  }
                  required
                />

              </div>

              {/* Doctor */}
              <div className="mb-3">

                <label className="form-label">
                  Select Doctor
                </label>

                <select
                  className="form-select"
                  value={doctorId}
                  onChange={(e) =>
                    setDoctorId(e.target.value)
                  }
                  required
                >

                  <option value="">
                    -- Select Doctor --
                  </option>

                  {doctors.map((doctor) => (
                    <option
                      key={doctor._id}
                      value={doctor._id}
                    >
                      {doctor.name} -{" "}
                      {doctor.specialization}
                    </option>
                  ))}

                </select>

              </div>

              {/* Date */}
              <div className="mb-3">

                <label className="form-label">
                  Appointment Date
                </label>

                <input
                  type="date"
                  className="form-control"
                  value={appointmentDate}
                  onChange={(e) =>
                    setAppointmentDate(e.target.value)
                  }
                  required
                />

              </div>

              {/* Time */}
              <div className="mb-3">

                <label className="form-label">
                  Appointment Time
                </label>

                <input
                  type="time"
                  className="form-control"
                  value={appointmentTime}
                  onChange={(e) =>
                    setAppointmentTime(e.target.value)
                  }
                  required
                />

              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                📅 Book Appointment
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BookAppointment;