import React from 'react';
import { BrowserRouter, useParams } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Quizzes from '.';


describe("Questions page", () => {
    const { subject } = useParams()

    beforeEach(() => {
        render(
                <BrowserRouter subject='subject'>
                    <Quizzes/>
                </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", async () => {
        const heading =  screen.getByRole('heading')
        waitFor(() => expect(heading).toBeInTheDocument());
        waitFor(() => expect(heading.textContent).toBe("404: Page not found"))
    })

})
