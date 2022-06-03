interface BudgetBarProps {
  percentFilled: number;
}

const colorPicker = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber < 10) {
    return "bg-green-500";
  }

  if (randomNumber < 20) {
    return "bg-red-500";
  }

  if (randomNumber < 30) {
    return "bg-yellow-500";
  }

  if (randomNumber < 40) {
    return "bg-blue-500";
  }

  if (randomNumber < 50) {
    return "bg-gray-500";
  }

  if (randomNumber < 60) {
    return "bg-indigo-500";
  }

  if (randomNumber < 70) {
    return "bg-orange-500";
  }

  if (randomNumber < 80) {
    return "bg-pink-500";
  }

  if (randomNumber < 90) {
    return "bg-violet-500";
  }

  return "bg-red-200";
};

// tailwind does NOT like trying to deal with percentages
const BudgetBar = ({ percentFilled }: BudgetBarProps) => (
  <div
    className={`${colorPicker()} h-3 rounded`}
    style={{ width: `${percentFilled}%` }}
  >
    <p className="opacity-0">filler text</p>{" "}
  </div>
);

export default BudgetBar;
