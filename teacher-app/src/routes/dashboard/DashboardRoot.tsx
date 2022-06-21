import { useSelector } from "react-redux";
import { StateType } from "../../types/AppStateType";
import DashboardIsLoading from "./DashboardIsLoading";
import DashboardDisplay from "./DashboardDisplay";
import DashboardNoQuestionData from "./DashboardNoQuestionData";

function DashboardRoot() {
  const {
    questionMetadata: _questionMetadata,
    studentListIsLoading,
    questionMetadataIsLoading,
    answerLogIsLoading,
  } = useSelector((state: StateType) => state.appState);

  if (studentListIsLoading || questionMetadataIsLoading || answerLogIsLoading) {
    return <DashboardIsLoading />;
  } else if (!_questionMetadata || _questionMetadata.length === 0) {
    return <DashboardNoQuestionData />;
  } else {
    return <DashboardDisplay />;
  }
}

export default DashboardRoot;
