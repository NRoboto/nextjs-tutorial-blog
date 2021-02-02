import { format, parseISO } from "date-fns";

type DateProps = {
  dateString: string;
};

export const Date = ({ dateString }: DateProps) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "do LLL, yyyy")}</time>;
};
