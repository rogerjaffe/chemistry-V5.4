import {StudentType} from "./StudentType";
import {AnswerLogType} from "./AnswerLogType";

export interface TeacherType {
  email: string,
  accountExpiration: number,
  school: string,
  accountDeletion: number,
  lastName: string,
  firstName: string,
  students: StudentType[],
  problemLog: AnswerLogType[]
}
