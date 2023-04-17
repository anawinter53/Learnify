import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import PostItSummary from '.';

describe("PostItSummary Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <PostItSummary />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a p tag", () => {
        const paragraph = screen.getByRole('paragraph')

        expect(paragraph).toBeInTheDocument();
    })

})
