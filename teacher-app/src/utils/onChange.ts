import { ChangeEvent, Dispatch, SetStateAction } from "react";

const onChange =
  (setter: Dispatch<SetStateAction<string>>) =>
  (evt: ChangeEvent<HTMLInputElement>) => {
    setter(evt.currentTarget.value);
  };

export default onChange;
