import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

import PostIt from ".";
import PostItSummary from "../PostItSummary";

describe("PostIt Component", () => {
  let card0Ref, card1Ref, card2Ref, card3Ref;

  beforeEach(() => {
    card0Ref = React.createRef();
    card1Ref = React.createRef();
    card2Ref = React.createRef();
    card3Ref = React.createRef();

    render(
      <BrowserRouter>
        <PostIt
          card0={card0Ref}
          card1={card1Ref}
          card2={card2Ref}
          card3={card3Ref}
        />
        <PostItSummary ref={card0Ref} colour="orange" reverse={false} />
        <PostItSummary ref={card1Ref} colour="red" reverse={true} />
        <PostItSummary ref={card2Ref} colour="green" reverse={false} />
        <PostItSummary ref={card3Ref} colour="blue" reverse={true} />
      </BrowserRouter>
    );
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
