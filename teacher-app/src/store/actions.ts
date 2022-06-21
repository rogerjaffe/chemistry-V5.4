import { createAction } from "@reduxjs/toolkit";

export const authenticatedAction =
  createAction<{ jwt: string }>("ops/authenticated");
export const getStudentListAction =
  createAction<{ jwt: string }>("ops/getStudentList");
export const getAnswerLogAction = createAction<{ jwt: string }>(
  "ops/getAnswerLogAction"
);
export const selectStudentAction = createAction<{ studentId: string }>(
  "ops/selectStudentAction"
);

export const importFileAction =
  createAction<{ csv: string; skipFirstLine: boolean }>("import/csv");
export const importParseAction =
  createAction<{ parsed: string[][] }>("import/parsed");
export const importFieldSet =
  createAction<{ fieldSet: string[] }>("import/fieldSet");

export const errorEmailNotConfirmedAction = createAction(
  "error/emailNotConfirmed"
);
export const errorAuthenticationFailedAction = createAction(
  "error/authenticationFailed"
);
export const refresh = createAction("ops/refresh");

export const clearRedirectTo = createAction("ops/clearRedirect");
export const clearExpired = createAction("ops/clearExpired");
export const inProcess = createAction<{ inProcess: boolean }>("ops/inProcess");
export const setInProcess = createAction("ops/setInProcess");

export const setShowDetailStudents = createAction<string[]>(
  "ops/setShowDetailStudents"
);
export const setFilter =
  createAction<{ type: string; value: string }>("ops/setFilter");
