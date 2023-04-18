import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Flashcards from '.';

describe("Flashcards Page", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Flashcards />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", () => {
        const heading = screen.getByRole('headingone')
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Flashcards")
    })

})
