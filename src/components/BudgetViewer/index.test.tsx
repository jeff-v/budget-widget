import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BudgetViewer from ".";

describe("BudgetViewer", () => {
  const renderBudgetViewer = () => render(<BudgetViewer />);

  it('should say "Budget"', () => {
    renderBudgetViewer();
    expect(screen.getByText("Budget")).toBeTruthy();
  });

  /**
   * something really, really screwy is going on with this test and frankly i've
   * been trying to debug it longer than it took to write this whole thing so
   * i'm calling it a day
   */

  it("should change the data displayed when the dropdown option changes", () => {
    renderBudgetViewer();
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", {
        name: "2021 Personal Budget Q1",
      })
    );
    const selectBar = screen.getByTestId("budget-select");
    expect(screen.queryByText("275/300")).toBeFalsy();
    expect(screen.queryByTestId("one")).toBeFalsy();
    fireEvent.change(selectBar, { target: { value: "one" } });
    expect(screen.getByTestId("one")).toBeTruthy();
    expect(screen.queryByText("275/300")).toBeTruthy();
    fireEvent.click(screen.getByTestId("dril"));
    expect(screen.queryByTestId("one")).toBeFalsy();
    expect(screen.queryByText("275/300")).toBeFalsy();
  });
});
