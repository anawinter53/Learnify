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

    // it('Should show sign up button', () => {

    // })

    // it("Scrolls to the correct position on card click", async () => {
    //     const cards = screen.getAllByRole("card");
        
    //     const headerOffset = 80;
    //     const elementPosition = 954;
    //     const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
    //     window.scrollTo = vi.fn();
    //     fireEvent.click(cards[0]);
      
    //     await new Promise((resolve) => setTimeout(resolve, 1000));
      
    //     expect(window.scrollTo).toHaveBeenCalledWith({
    //       top: expect.any(Number),
    //       behavior: "smooth",
    //     });
      
    //     expect(elementPosition).toBeGreaterThan(headerOffset);
    //     expect(offsetPosition).toBeGreaterThan(window.pageYOffset);
    //   });

    // it('Shows nav when scrolling', async () => {
    //     window.scrollTo = 110
    // })


    
})
