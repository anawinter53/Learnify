import React, { useContext }from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';


import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import Categories from '.';
import { CategoryProvider, useCategory, category, setCategory } from "../../context/CategoryContext";

describe("Categories Component", () => {
    beforeEach(() => {

        render(
            <CategoryProvider value={{ category, setCategory }}>
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

})
