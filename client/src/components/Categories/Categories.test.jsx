import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';


import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Categories from '.';

describe("Categories Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Categories />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays 9 headings", () => {
        const heading = screen.getAllByRole('heading')

        waitFor(() => expect(heading).toBeInTheDocument()) 
    })

})
