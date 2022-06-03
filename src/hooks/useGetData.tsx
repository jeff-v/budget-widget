import data from "../data.json";

export interface Category {
  name: string;
  spent: number;
  limit: number;
}

export interface Budget {
  id: string;
  year: string;
  quarter: number;
  budgetName: string;
  categories: Category[];
}

const useGetData = () => data as Budget[];

export default useGetData;
