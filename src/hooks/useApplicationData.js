import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((response) => {
      setState((prev) => ({
        ...prev,
        days: response[0].data,
        appointments: response[1].data,
        interviewers: response[2].data,
      }));
    });
  }, []);

  function setDay(day) {
    setState({ ...state, day });
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then((response) => {
        setState((prev) => ({ ...prev, appointments }));
        updateSpots(id, appointments);
      });
  }

  function cancelInterview(id) {
    const nullAppointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: nullAppointment,
    };

    return axios.delete(`api/appointments/${id}`).then((response) => {
      setState((prev) => ({ ...prev, appointments }));
      updateSpots(id, appointments);
    });
  }

  const updateSpots = (appId, appointments) => {
    const newDay =
      state.days.filter((day) => day.appointments.includes(appId))[0].id - 1;
    const appts = state.days.filter((day) =>
      day.appointments.includes(appId))[0].appointments;
    
    const spotsRemaining = appts.filter((appt) => !appointments[appt].interview).length;
      

    const dayArr = [...state.days];
    dayArr[newDay] = { ...dayArr[newDay], spots: spotsRemaining };
    setState((prev) => ({ ...prev, days: [...dayArr] }));
  };

  return { state, setDay, bookInterview, cancelInterview };
}
