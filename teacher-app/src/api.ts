import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StudentType } from "./types/StudentType";
import { AnswerLogType } from "./types/AnswerLogType";

const API_GATEWAY_URL =
  "https://laqywsahf8.execute-api.us-west-1.amazonaws.com/prod/api/";

export type BaseResponseType = {
  error: boolean;
  type?: string;
  stack?: string;
};

interface TeacherDataType {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  school: string;
  host: string;
  protocol: string;
}

export type QuestionMetadataType = {
  seq: number;
  route: string;
  text: string;
  abbrevText?: string;
};

interface GetQuestionMetadataResponse {
  error: boolean;
  token: string;
  questionMetadata: QuestionMetadataType[];
  version: string;
}

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_GATEWAY_URL }),
  reducerPath: "apiState",
  tagTypes: ["question"],
  endpoints: (build) => ({
    getQuestionMetadata: build.query<GetQuestionMetadataResponse, null>({
      query: (body) => {
        return {
          url: "get-question-metadata",
          method: "POST",
        };
      },
    }),
    getStudentList: build.query<
      BaseResponseType & { newJwt: string; studentList: StudentType[] },
      {
        jwt: string;
        refresh: number;
      }
    >({
      query: (body) => {
        return {
          url: "get-student-list",
          method: "POST",
          body,
        };
      },
    }),
    getAnswerLog: build.query<
      BaseResponseType & { newJwt: string; answerLog: AnswerLogType[] },
      {
        jwt: string;
        refresh: number;
      }
    >({
      query: (body) => {
        return {
          url: "get-answer-log",
          method: "POST",
          body,
        };
      },
    }),

    authenticate: build.mutation<
      BaseResponseType & { jwt?: string },
      { email: string; password: string }
    >({
      query: (body) => {
        return {
          url: "authenticate",
          method: "POST",
          body,
        };
      },
    }),
    sendConfirmAccountEmail: build.mutation<
      BaseResponseType,
      { email: string; host: string; protocol: string }
    >({
      query: (body) => {
        return {
          url: "send-confirm-account-email",
          method: "POST",
          body,
        };
      },
    }),
    deleteStudent: build.mutation<
      BaseResponseType & { newJwt?: string },
      {
        email: string;
        jwt: string;
        studentId: string;
      }
    >({
      query: (body) => {
        return {
          url: "delete-student",
          method: "POST",
          body,
        };
      },
    }),
    updateStudentList: build.mutation<
      BaseResponseType & { newJwt: string },
      {
        jwt: string;
        newStudentListJSON: string;
        shouldMerge: boolean;
        shouldReplace: boolean;
      }
    >({
      query: (body) => {
        return {
          url: "update-student-list",
          method: "POST",
          body,
        };
      },
    }),
    createAccount: build.mutation<BaseResponseType, TeacherDataType>({
      query: (body) => {
        return {
          url: "create-account",
          method: "POST",
          body,
        };
      },
    }),
    forgotPassword: build.mutation<
      BaseResponseType,
      { email: string; host: string; protocol: string }
    >({
      query: (body) => {
        return {
          url: "send-password-reset-email",
          method: "POST",
          body,
        };
      },
    }),
    resetPassword: build.mutation<
      BaseResponseType,
      { password: string; code: string }
    >({
      query: (body) => {
        return {
          url: "reset-password",
          method: "POST",
          body,
        };
      },
    }),
    confirmAccount: build.mutation<
      BaseResponseType,
      { confirmationCode: string }
    >({
      query: (body) => {
        return {
          url: "confirm-account",
          method: "POST",
          body,
        };
      },
    }),
    updateAccount: build.mutation<
      BaseResponseType,
      {
        jwt: string;
        lastName: string;
        firstName: string;
        school: string;
        password?: string;
      }
    >({
      query: (body) => {
        return {
          url: "update-account",
          method: "POST",
          body,
        };
      },
    }),
    updateQuestionFilter: build.mutation<
      BaseResponseType & { jwt: string },
      {
        jwt: string;
        newQuestionFilter: string;
      }
    >({
      query: (body) => {
        return {
          url: "update-question-filter",
          method: "POST",
          body,
        };
      },
    }),
    refreshJwt: build.mutation<
      BaseResponseType & { jwt: string },
      {
        jwt: string;
      }
    >({
      query: (body) => {
        return {
          url: "refresh-jwt",
          method: "POST",
          body,
        };
      },
    }),
    validateCaptcha: build.mutation<
      BaseResponseType & { jwt: string },
      {
        token: string;
      }
    >({
      query: (body) => {
        return {
          url: "validate-captcha",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

// Auto-generated hooks
export default api;

export const {
  useGetQuestionMetadataQuery,
  useGetAnswerLogQuery,
  useGetStudentListQuery,

  useAuthenticateMutation,
  useSendConfirmAccountEmailMutation,
  useDeleteStudentMutation,
  useUpdateStudentListMutation,
  useCreateAccountMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useConfirmAccountMutation,
  useUpdateAccountMutation,
  useUpdateQuestionFilterMutation,
  useRefreshJwtMutation,
  useValidateCaptchaMutation,
} = api;
