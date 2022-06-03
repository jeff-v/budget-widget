import { render, screen } from "@testing-library/react";
import BudgetBar from ".";

describe("Budget Bar", () => {
  const renderBudgetBar = () => render(<BudgetBar percentFilled={50} />);

  it("should not show the filler text", () => {
    renderBudgetBar();
    const fillerText = screen.getByText("filler text");
    expect(fillerText.className).toContain("opacity-0");
  });
});
