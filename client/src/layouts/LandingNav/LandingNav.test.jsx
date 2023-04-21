import React from 'react';
import { describe, expect, beforeEach, afterEach, it } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
 
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import LandingNav from '.'
import { AuthProvider, setAuth } from '../../context/AuthContext';

describe('LandingNav Component', () => {
    beforeEach(() => {
        render(
            <AuthProvider value={{ auth: true, setAuth }}>
                <BrowserRouter>
                    <LandingNav />
                </BrowserRouter>
            </AuthProvider>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a nav bar with 2 links", () => {
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument();
        expect(nav.childNodes.length).toBe(2)
    })
    
})
