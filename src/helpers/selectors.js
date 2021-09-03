export function getAppointmentsForDay(state, day) {
  const filteredAppts = state.days.filter(d => d.name === day);
  let appts = [];

  if (filteredAppts.length) {
    appts = filteredAppts[0].appointments.map(x => state.appointments[x]);
  }
  return appts;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewObj = {
    student: interview.student,
  }
  interviewObj.interviewer = state.interviewers[interview.interviewer]

  return interviewObj;
}