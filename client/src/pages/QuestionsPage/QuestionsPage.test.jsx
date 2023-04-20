import React from 'react';
import { BrowserRouter, useParams } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import QuestionsPage from '.';
import { QuizQuestion } from '../../components';


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
        const heading =  await waitFor(() => screen.findByRole('heading'))
        await waitFor(() => expect(heading).toBeInTheDocument());
        await waitFor(() => expect(heading.textContent).toBe("loading..."))
    })

    it("Renders quiz question", async () => {
        const headingtwo = await waitFor(() => screen.getAllByRole('headingtwo'))
        await waitFor(() => expect(headingtwo).toBeInTheDocument())
        await waitFor(() => expect(heading.textContent).toContain("Question"))
    })

})
