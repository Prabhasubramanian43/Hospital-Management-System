import { useEffect, useState } from "react";
import axios from "axios";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments();
  }, []);

  const getAppointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/appointments"
      );

      setAppointments(res.data.appointments);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelAppointment = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/appointments/${id}`
      );

      alert(res.data.message);

      getAppointments();
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="container mt-5 mb-5">

      <div className="text-center mb-4">
        <h2 className="text-primary">
          📋 My Appointments
        </h2>

        <p className="text-muted">
          Manage your hospital appointments
        </p>
      </div>

      {appointments.length === 0 ? (
        <div className="card shadow text-center p-5">
          <h4>No Appointments Found</h4>

          <p className="text-muted">
            You haven't booked any appointments yet.
          </p>
        </div>
      ) : (

        <div className="row">

          {appointments.map((appointment) => (

            <div
              className="col-md-6 col-lg-4 mb-4"
              key={appointment._id}
            >

              <div className="card shadow h-100">

                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">
                    🏥 Appointment
                  </h5>
                </div>

                <div className="card-body">

                  <h5>
                    {appointment.patientName}
                  </h5>

                  <hr />

                  <p>
                    <strong>👨‍⚕️ Doctor:</strong>
                    <br />
                    {appointment.doctorId?.name ||
                      "Doctor Not Found"}
                  </p>

                  <p>
                    <strong>Specialization:</strong>
                    <br />
                    {appointment.doctorId?.specialization ||
                      "-"}
                  </p>

                  <p>
                    <strong>📅 Date:</strong>
                    <br />
                    {appointment.appointmentDate}
                  </p>

                  <p>
                    <strong>⏰ Time:</strong>
                    <br />
                    {appointment.appointmentTime}
                  </p>

                  <div className="mb-3">
                    <strong>Status:</strong>

                    <span
                      className={`badge ms-2 ${appointment.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-success"
                        }`}
                    >
                      {appointment.status}
                    </span>
                  </div>

                  <button
                    className="btn btn-danger w-100"
                    onClick={() => {

                      if (
                        window.confirm(
                          "Are you sure you want to cancel this appointment?"
                        )
                      ) {
                        cancelAppointment(
                          appointment._id
                        );
                      }

                    }}
                  >
                    Cancel Appointment
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Appointments;