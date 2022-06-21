import { StudentType } from "./StudentType";
import { AnswerLogType } from "./AnswerLogType";
import { QuestionMetadataType } from "../api";

export interface AppStateType {
  authenticationFailed: boolean;
  emailNotConfirmed: boolean;
  jwt: string | null;
  accountWasCreated: boolean;

  redirectTo: string | null;
  thunkErrorName: string | null;
  inProcess: boolean;
  apiError: boolean;

  lastName: string;
  firstName: string;
  email: string;
  school: string;
  questionFilter: string;
  accountExpiration: number | null;
  accountDeletion: number | null;
  emailConfirmed: boolean;
  studentList: StudentType[];
  answerLog: AnswerLogType[];
  questionMetadata: QuestionMetadataType[];
  studentListIsLoading: boolean;
  answerLogIsLoading: boolean;
  questionMetadataIsLoading: boolean;

  showDetailStudents: string[];
  nameFilter: string;
  periodFilter: string;
  classFilter: string;

  selectedStudentId: string;
  selectedStudent: StudentType | null;

  csv: string;
  skipFirstLine: boolean;
  parsed: string[][] | null;
  fieldSet: string[];

  tokenExpired: boolean;
  refresh: number;
}

export interface StateType {
  appState: AppStateType;
  apiState: unknown;
}
