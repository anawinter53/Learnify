import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Landing from '.';
import { AuthProvider } from '../../context/AuthContext';

describe("Landing page", () => {
    beforeEach(() => {
        render(
            <AuthProvider>
                <BrowserRouter>
                    <Landing />
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
        expect(heading.textContent).toBe("Join our community of learners today and unlock your full potential.")
    })

    it("Displays a button that changes location when clicked", async () => {
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();

        expect(window.location.href).not.toContain('/signup');
        const signup = screen.getByText('Get Started!');
        await userEvent.click(signup)
        expect(window.location.href).toContain('/signup');
    })

})
