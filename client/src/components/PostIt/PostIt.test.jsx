import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import PostIt from ".";
import PostItSummary from "../PostItSummary";

const renderPostIt = () => {
  const cardRefs = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];

  const { container } = render(
    <BrowserRouter>
      <PostIt
        card0={cardRefs[0]}
        card1={cardRefs[1]}
        card2={cardRefs[2]}
        card3={cardRefs[3]}
      />
      {cardRefs.map((ref, index) => (
        <PostItSummary
          key={index}
          ref={ref}
          colour={index % 2 ? "red" : "orange"}
          reverse={index % 2 !== 0}
        />
      ))}
    </BrowserRouter>
  );

  return { container, cardRefs };
};

describe("PostIt Component", () => {
  beforeEach(() => {
    renderPostIt();
  });

  afterEach(() => {
    cleanup();
  });

  it("Displays four cards", () => {
    const cards = screen.getAllByRole("card");

    expect(cards.length).toBe(4);
  });

  it("Scrolls to the correct position on card click", async () => {
    const cards = screen.getAllByRole("card");

    window.scrollTo = vi.fn();
    fireEvent.click(cards[0]);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: "smooth",
    });
  });
});
