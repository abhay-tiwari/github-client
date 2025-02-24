import moment from "moment";

export const formatDate = (date: Date): string => {
  const momentDate = moment(date);
  return momentDate.format("YYYY-MM-DD");
};
