import React from 'react';
import { BrowserRouter, useParams } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import QuestionsPage from '.';


describe("Questions page", () => {
    beforeEach( () => {
        render(
            <BrowserRouter path='/:subject'>
                <QuestionsPage />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", async () => {
        const heading =  screen.getByRole('heading')
        waitFor(() => expect(heading).toBeInTheDocument());
        waitFor(() => expect(heading.textContent).toBe("Quizzes"))
    })

    it("Renders quiz question", async () => {
        const headingtwo = screen.getAllByRole('headingtwo')
        await waitFor(() => expect(headingtwo).toBeInTheDocument())
        await waitFor(() => expect(heading.textContent).toContain("Question"))
    })

})
