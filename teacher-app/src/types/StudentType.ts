import { AnswerLogType } from "./AnswerLogType";

export interface StudentType {
  studentId: string;
  lastName: string;
  firstName: string;
  password: string;
  period: string;
  className: string;
  log?: AnswerLogType[];
}
