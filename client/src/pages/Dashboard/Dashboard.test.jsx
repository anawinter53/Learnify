import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Dashboard from '.';

describe("Dashboard Page", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", () => {
        const heading = screen.getAllByRole('heading')
        expect(heading[0]).toBeInTheDocument();
        expect(heading[0].textContent).toBe("Welcome back User")
    })

})
