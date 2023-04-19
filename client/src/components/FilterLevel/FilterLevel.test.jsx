import React, { useContext }from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';


import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import FilterLevels from '.';

describe("Filter Level Component", () => {
    beforeEach(() => {

        render(
                <BrowserRouter>
                    <FilterLevels />
                </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it('Has a container', () => {
        const container = screen.getByRole('container')
        expect(container).toBeInTheDocument()
    })
})
