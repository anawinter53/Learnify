import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import UserProfile from '.';
import userEvent from '@testing-library/user-event';

describe("UserProfile Page", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <UserProfile />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", async () => {
        const heading = await screen.findByRole('headingone')
        waitFor(() => expect(heading).toBeInTheDocument());
    })

    it("Displays user details", async () => {
        const email = await screen.findByRole('email')
        waitFor(() => expect(email).toBeInTheDocument())
        expect(email.textContent).toContain("Email:")

        const points = await screen.findByRole('points')
        waitFor(() => expect(points).toBeInTheDocument())
        expect(points.textContent).toContain("Total XP:")

        const percentage = await screen.findByRole('percentage')
        expect(percentage.childNodes[0].nodeValue).toStrictEqual("Average accuracy: ")
    })

    it("Toggles form on and off with click", async () => {
        const button = await screen.findAllByRole('button')
        userEvent.click(button[0])
        const form = await screen.findAllByRole('update-details')
        expect(form).toBeInTheDocument
        userEvent.click(button[0])
        expect(form).not.toBeInTheDocument
    })

})
