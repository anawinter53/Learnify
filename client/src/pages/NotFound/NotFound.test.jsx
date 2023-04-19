import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import NotFound from '.';
import { AuthProvider } from '../../context/AuthContext';

describe("NotFound page", () => {
    beforeEach(() => {
        render(
            <AuthProvider>
                <BrowserRouter>
                    <NotFound />
                </BrowserRouter>
            </AuthProvider>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", () => {
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("404: Page not found")
    })

})
