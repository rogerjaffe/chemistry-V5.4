const isFiltered = (str: string, filter: string) =>
  str.toLowerCase().indexOf(filter.toLowerCase()) >= 0;

export default isFiltered;
