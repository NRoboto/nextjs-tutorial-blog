import { format, parseISO } from "date-fns";

export const Date = ({ dateString }) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "do LLL, yyyy")}</time>;
};
