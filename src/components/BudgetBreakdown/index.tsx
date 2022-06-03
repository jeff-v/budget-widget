import { Category } from "../../hooks/useGetData";
import BudgetBar from "../BudgetBar";

interface BudgetBreakdownProps {
  category: Category;
}

const BudgetBreakdown = ({ category }: BudgetBreakdownProps) => (
  <div className="p-2">
    <div className="flex justify-between">
      <div className="font-bold">{category.name}</div>
      <div>{`${category.spent}/${category.limit}`}</div>
    </div>
    <BudgetBar
      percentFilled={Math.floor((category.spent / category.limit) * 100)}
    />
  </div>
);

export default BudgetBreakdown;
