const createOptions = (list: string[], title: string) => {
  const optionsList = list.map((t) => (
    <option key={"period" + t} value={t}>
      {t}
    </option>
  ));
  optionsList.splice(
    0,
    0,
    <option key={"period"} value="">
      {title}
    </option>
  );
  return optionsList;
};

export default createOptions;
