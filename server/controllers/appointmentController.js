import Appointment from "../models/Appointment.js";

// Book Appointment
export const bookAppointment = async (req, res) => {
  try {
    const {
      patientName,
      doctorId,
      appointmentDate,
      appointmentTime,
    } = req.body;

    const appointment = await Appointment.create({
      patientName,
      doctorId,
      appointmentDate,
      appointmentTime,
    });

    res.status(201).json({
      success: true,
      message: "Appointment Booked Successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate(
      "doctorId",
      "name specialization"
    );

    res.status(200).json({
      success: true,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Cancel Appointment
export const cancelAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment Cancelled Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};