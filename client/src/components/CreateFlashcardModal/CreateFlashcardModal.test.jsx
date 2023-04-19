import React, { useContext }from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';


import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import CreateFlashcardModal from '.';

describe("Create Flashcard Modal Component", () => {
    beforeEach(() => {
         render(
                <BrowserRouter>
                    <CreateFlashcardModal />
                </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a form", async () => {
        const form = screen.findByRole('form')
        waitFor(() => expect(form).toBeInTheDocument())
    })
})
