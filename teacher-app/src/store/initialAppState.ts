import { AppStateType } from "../types/AppStateType";

const initialAppState: AppStateType = {
  // Login states
  authenticationFailed: false,
  emailNotConfirmed: false,
  jwt: null,
  accountWasCreated: false,

  // Program states
  redirectTo: null,
  thunkErrorName: null,
  inProcess: false,
  apiError: false,

  // User state information
  lastName: "",
  firstName: "",
  email: "",
  school: "",
  questionFilter: "",
  accountExpiration: null,
  accountDeletion: null,
  emailConfirmed: false,
  studentList: [],
  answerLog: [],
  questionMetadata: [],
  studentListIsLoading: false,
  answerLogIsLoading: false,
  questionMetadataIsLoading: false,

  // Dashboard state
  showDetailStudents: [],
  nameFilter: "",
  periodFilter: "",
  classFilter: "",

  // Selected student
  selectedStudentId: "",
  selectedStudent: null,

  // Import states
  csv: "",
  skipFirstLine: true,
  parsed: null,
  fieldSet: [],

  tokenExpired: false,
  refresh: 0,
};

export default initialAppState;
