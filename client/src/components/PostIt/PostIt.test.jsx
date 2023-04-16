import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import PostIt from '.';

describe("PostIt Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <PostIt />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a card", () => {
        const card = screen.getByRole('card')

        expect(card).toBeInTheDocument();
    })

})
