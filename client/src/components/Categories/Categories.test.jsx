import React, { useContext } from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';


import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Categories from '.';
import { CategoryProvider, useCategory, category, setCategory } from "../../context/CategoryContext";

describe("Categories Component", () => {
    beforeEach(() => {
        // const { category } = useCategory();

        render(
            <CategoryProvider category='category'>
                <BrowserRouter>
                    <Categories />
                </BrowserRouter>
            </CategoryProvider>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", async () => {
        const heading = screen.findByRole('heading')
        waitFor(() => expect(heading).toBeInTheDocument())
    })

    it('Returns 9 cards', async () => {
        const cards = screen.findAllByRole('card')
        waitFor(() => expect(cards[0]).toBeInTheDocument())
        waitFor(() => expect(cards).toHaveLength(9))
    })

    it('Returns the first card as Geography', async () => {
        const cards = waitFor(() => screen.findAllByRole('card'))
        console.log(cards[0])
        // waitFor(() => expect(cards[0]).toBeInTheDocument())
        // waitFor(() => expect(cards).toHaveLength(9))
    })
})
