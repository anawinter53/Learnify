import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import SignupForm from '.';

describe("SignupForm Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SignupForm />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a form", () => {
        const form = screen.getByRole('form')

        expect(form).toBeInTheDocument();
    })

})