import { useState } from "react";
import axios from "axios";

function AddDoctor() {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [fees, setFees] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/doctors/add",
        {
          name,
          specialization,
          experience,
          fees,
        }
      );

      alert(res.data.message);

      setName("");
      setSpecialization("");
      setExperience("");
      setFees("");
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

        <div className="col-md-5 mb-4">
          <img
            src="/src/assets/docter.jpeg"
            alt="Doctor and Patient"
            className="img-fluid rounded shadow"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
            }}
          />
        </div>
        {/* Add Doctor Form */}
        <div className="col-md-7">

          <div className="card shadow p-4">

            <h2 className="text-center text-primary mb-4">
              👨‍⚕️ Add Doctor
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">
                  Doctor Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter doctor name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Specialization
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter specialization"
                  value={specialization}
                  onChange={(e) =>
                    setSpecialization(e.target.value)
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Experience (Years)
                </label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter experience"
                  value={experience}
                  onChange={(e) =>
                    setExperience(e.target.value)
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Consultation Fees (₹)
                </label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter fees"
                  value={fees}
                  onChange={(e) =>
                    setFees(e.target.value)
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Add Doctor
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddDoctor;