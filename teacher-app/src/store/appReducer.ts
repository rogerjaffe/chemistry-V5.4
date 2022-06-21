import { createReducer } from "@reduxjs/toolkit";
import {
  authenticatedAction,
  clearExpired,
  clearRedirectTo,
  importFieldSet,
  importFileAction,
  importParseAction,
  inProcess,
  refresh,
  selectStudentAction,
  setFilter,
  setInProcess,
} from "./actions";
import initialAppState from "./initialAppState";
import { AnyAction } from "redux";

const jsonwebtoken = require("jsonwebtoken");

// Use the initialState as a default value
const appReducer = createReducer(initialAppState, (builder) => {
  builder
    .addCase(authenticatedAction, (state, action) => {
      // The JWT is saved with the decoded teacher data in the matcher reducer below
      // state.jwt = action.payload.jwt;
    })

    .addCase(importFileAction, (state, action) => {
      state.csv = action.payload.csv;
      state.skipFirstLine = action.payload.skipFirstLine;
    })

    .addCase(importParseAction, (state, action) => {
      state.parsed = action.payload.parsed;
    })

    .addCase(importFieldSet, (state, action) => {
      state.fieldSet = action.payload.fieldSet;
    })

    .addCase(clearRedirectTo, (state, action) => {
      state.redirectTo = null;
    })
    .addCase(clearExpired, (state, action) => {
      state.tokenExpired = false;
    })

    .addCase(refresh, (state, action) => {
      state.refresh = state.refresh + 1;
    })

    .addCase(selectStudentAction, (state, action) => {
      state.selectedStudent =
        state.studentList?.find(
          (s) => s.studentId === action.payload.studentId
        ) ?? null;
      state.selectedStudentId = action.payload.studentId;
    })

    .addCase(inProcess, (state, action) => {
      state.inProcess = action.payload.inProcess;
    })

    .addCase(setInProcess, (state, action) => {
      state.inProcess = true;
    })

    .addCase(setFilter, (state, action) => {
      if (
        action.payload.type === "nameFilter" ||
        action.payload.type === "classFilter" ||
        action.payload.type === "periodFilter"
      ) {
        state[action.payload.type] = action.payload.value;
      }
    })

    // Matchers for api
    .addMatcher(
      (action: AnyAction) => action.type === "apiState/executeQuery/fulfilled",
      (state, action) => {
        if (action.payload.error) {
        } else {
          switch (action.meta.arg.endpointName) {
            case "getStudentList":
              state.studentListIsLoading = false;
              state.studentList = action.payload.studentList;
              break;

            case "getAnswerLog":
              state.answerLogIsLoading = false;
              state.answerLog = action.payload.answerLog;
              break;

            case "getQuestionMetadata":
              state.questionMetadataIsLoading = false;
              state.questionMetadata = action.payload.questionMetadata;
              break;

            case "updateQuestionFilter":
              break;
          }
        }
      }
    )
    .addMatcher(
      (action: AnyAction) => action.type === "apiState/executeQuery/pending",
      (state, action) => {
        switch (action.meta.arg.endpointName) {
          case "getStudentList":
            state.studentListIsLoading = true;
            break;

          case "getAnswerLog":
            state.answerLogIsLoading = true;
            break;

          case "getQuestionMetadata":
            state.questionMetadataIsLoading = true;
            break;
        }
      }
    )
    .addMatcher(
      (action: AnyAction) =>
        action.type === "apiState/executeMutation/fulfilled",
      (state, action) => {
        if (action.payload.error) {
        } else {
          switch (action.meta.arg.endpointName) {
            case "authenticate":
              state.jwt = action.payload.jwt;
              state.redirectTo = "/dashboard";
              state.inProcess = false;
              break;

            case "refreshJwt":
              state.jwt = action.payload.jwt;
              break;

            case "updateQuestionFilter":
              state.jwt = action.payload.jwt;
              break;
          }
        }
      }
    )

    .addMatcher(
      (action: AnyAction) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        if (action.payload.error === "TokenExpiredError") {
          state.tokenExpired = true;
        }
      }
    )

    // Decode the JWT when included in the payload to include user information in state
    .addMatcher(
      (action) => typeof action.payload?.jwt === "string",
      (state, action) => {
        let decoded,
          newState = state;
        try {
          let jwt = action.payload.jwt;
          decoded = jsonwebtoken.decode(jwt);
          newState = { ...state, ...decoded, jwt };
        } catch (e) {
          console.log(e);
        }
        return newState;
      }
    );
});

export default appReducer;
