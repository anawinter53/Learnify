import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Shapes from '.';

describe("Shapes Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Shapes />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a carc", () => {
        const card = screen.getByRole('card')

        expect(card).toBeInTheDocument();
    })

})
