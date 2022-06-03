import { useState } from "react";
import useGetData, { Budget } from "../../hooks/useGetData";
import BudgetBreakdown from "../BudgetBreakdown";

export default function BudgetViewer() {
  const data = useGetData();
  const [selectedBudget, setSelectedBudget] = useState<Budget>();

  return (
    <div className="bg-white p-4 w-1/3 h-1/3 flex justify-evenly flex-col">
      <div className="font-bold p-1">Budget</div>
      <select
        data-testid="budget-select"
        className="w-750 p-0"
        onChange={(event) =>
          setSelectedBudget(
            data.find((budget) => budget.id === event.target.value) as Budget
          )
        }
      >
        <option value="">Select a budget</option>
        {data?.map((budget) => (
          <option
            data-testid="select-option"
            value={budget.id}
            key={budget.id}
          >{`${budget.year} ${budget.budgetName} Q${budget.quarter}`}</option>
        ))}
      </select>
      {selectedBudget?.categories.map((category) => (
        <BudgetBreakdown key={Math.random()} category={category} />
      ))}
      {selectedBudget?.id === "dril" && (
        <a
          href="https://twitter.com/dril/status/384408932061417472"
          rel="noreferrer"
          className="font-bold text-blue-700 underline"
        >
          source
        </a>
      )}
    </div>
  );
}
