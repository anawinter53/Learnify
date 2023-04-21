import React from 'react';
import { describe, expect, beforeEach, afterEach, it } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
 
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import SideNav from '.'

describe('SideNav Component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SideNav />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a nav bar with 2 main links and 4 sublinks", () => {
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument();
        expect(nav.childNodes.length).toBe(2)
        const options = screen.getByRole('options')
        expect(options).toBeInTheDocument();
        expect(options.childNodes.length).toBe(4)
    })

    it('Changes location when a navlink is clicked', async () => {
        expect(window.location.href).not.toContain('/quizzes');
        const quizzes = screen.getByText('Quizzes');
        await userEvent.click(quizzes)
        expect(window.location.href).toContain('/quizzes');
    })
})
