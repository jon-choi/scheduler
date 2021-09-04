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

export function getInterviewersForDay(state, day) {
  const filteredAppts = state.days.filter(d => d.name === day);
  let interviewers = [];

  if (filteredAppts.length) {
    interviewers = filteredAppts[0].interviewers.map(x => state.interviewers[x]);
  }
  return interviewers;
}