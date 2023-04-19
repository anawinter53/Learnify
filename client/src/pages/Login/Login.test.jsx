import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Login from '.';
import { AuthProvider } from '../../context/AuthContext';

describe("Login Page", () => {
    beforeEach(() => {
        render(
            <AuthProvider>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </AuthProvider>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Renders login component", () => {
        const username = screen.getByText('Username')
        expect(username).toBeInTheDocument();
    })

})
