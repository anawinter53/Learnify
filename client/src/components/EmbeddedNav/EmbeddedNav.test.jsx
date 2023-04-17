import React from 'react';
import { describe, expect, beforeEach, afterEach, it } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
 
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import EmbeddedNav from '.'
import { AuthProvider } from '../../context/AuthContext';

describe('EmbeddedNav Component', () => {
    beforeEach(() => {
        render(
            <AuthProvider>
                <BrowserRouter>
                    <EmbeddedNav />
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

    it('Changes location when a navlink is clicked', async () => {
        expect(window.location.href).not.toContain('/login');
        const login = screen.getByText('Login');
        await userEvent.click(login)
        expect(window.location.href).toContain('/login');
    })
})
