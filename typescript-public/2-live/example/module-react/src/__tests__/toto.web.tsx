import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Toto } from "..";

describe("Example Module React", () => {
  test("basic", () => {
    expect(1).toEqual(1);
  });

  test("testing library basic", () => {
    const { getByText } = render(<Toto />);
    const linkElement = getByText(/Ok!/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("testing library interaction", () => {
    render(<Toto />);
    expect(screen.getByText(/Ok!/i)).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("Count is 0");
    expect(screen.getByRole("heading")).not.toHaveTextContent("Count is 1");
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByRole("heading")).toHaveTextContent("Count is 1");
    expect(screen.getByRole("heading")).not.toHaveTextContent("Count is 0");
  });
});
