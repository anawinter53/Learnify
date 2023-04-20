import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import UserProfile from '.';

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
        const heading = await screen.findByRole('heading')
        waitFor(() => expect(heading).toBeInTheDocument());
        expect(heading.textContent).toContain("Username:")
    })

    it("Displays user details", async () => {
        const email = await screen.findByRole('email')
        waitFor(() => expect(email).toBeInTheDocument())
        expect(email.textContent).toContain("Email:")

        const highscore = await screen.findByRole('highscore')
        waitFor(() => expect(highscore).toBeInTheDocument())
        expect(highscore.textContent).toContain("High Score:")

        const points = await screen.findByRole('points')
        waitFor(() => expect(points).toBeInTheDocument())
        expect(points.textContent).toContain("Points:")

        const percentage = await screen.findByRole('percentage')
        expect(percentage.childNodes[0].nodeValue).toStrictEqual("Percentage: ")
    })

})
