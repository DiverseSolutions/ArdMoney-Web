export type TableProp = {
  header: string[];
  rows: Row[];
};

type Row = {
  texts: string[];
  link: string;
};
