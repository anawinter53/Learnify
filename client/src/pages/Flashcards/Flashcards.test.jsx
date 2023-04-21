import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Flashcards from '.';
import { CategoryProvider, useCategory, category, setCategory } from "../../context/CategoryContext"

describe("Flashcards Page", () => {
    beforeEach(() => {
        render(
            <CategoryProvider category='category'>
                <BrowserRouter>
                    <Flashcards />
                </BrowserRouter>
            </CategoryProvider>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", async () => {
        const heading = screen.getByRole('headingone')
        waitFor(() => expect(heading).toBeInTheDocument());
        waitFor(() => expect(heading.textContent).toBe("Flashcards"))
    })

})
