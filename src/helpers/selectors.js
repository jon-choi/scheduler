export function getAppointmentsForDay(state, day) {
  const filteredAppts = state.days.filter(d => d.name === day);
  let appts = [];

  if (filteredAppts.length) {
    appts = filteredAppts[0].appointments.map(x => state.appointments[x]);
  }
  return appts;
}