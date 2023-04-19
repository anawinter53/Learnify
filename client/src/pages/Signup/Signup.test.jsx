import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Signup from '.';
import { AuthProvider } from '../../context/AuthContext';

describe("Signup Page", () => {
    beforeEach(() => {
        render(
            <AuthProvider>
                <BrowserRouter>
                    <Signup />
                </BrowserRouter>
            </AuthProvider>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Renders signup component", () => {
        const confirmPassword = screen.getByText('Confirm Password')
        expect(confirmPassword).toBeInTheDocument();
    })

})
