import { render, screen } from "@testing-library/react";
import Home from './Home';

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home title="Title" />);
    expect(
      screen.getByText("Title")
    ).toBeInTheDocument();
  });
});
