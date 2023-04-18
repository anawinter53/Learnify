import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import QuizQuestion from '.';

describe("Quiz Question Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <QuizQuestion />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", () => {
        const heading = waitFor(() => screen.getByRole('heading'))
        expect(heading).toBeInTheDocument();
    })

    // it("Button changes colour based on answer", () => {
    //     const heading = screen.getByRole('heading')
    //     expect(heading).toBeInTheDocument();
    // })

    // select button from dom
    // simulate click on button with userevent (await)
    // check the h2 has changed

})
