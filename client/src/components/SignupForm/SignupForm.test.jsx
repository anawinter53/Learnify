import React from 'react';
import { BrowserRouter, useNavigate } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import UserEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import SignupForm from '.';
import { AuthProvider, setAuth } from '../../context/AuthContext';

const mockedUsedNavigate = vi.fn();
const mockedUsedLocation = vi.fn();
vi.mock('react-router-dom', async () => ({
    ...(await vi.importActual('react-router-dom')),
    useLocation: () => mockedUsedLocation,
    useNavigate: () => mockedUsedNavigate,
}));


describe("SignupForm Component", () => {
    beforeEach(() => {
        render(
                <BrowserRouter >
                    <SignupForm />
                </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a form and heading", () => {
        const form = screen.getByRole('form')
        expect(form).toBeInTheDocument();
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument();
    })

    it('Triggers invalid when required fields are empty', async () => {
        const onSubmit = vi.fn()
        const onInvalid = vi.fn()

        render(
            <BrowserRouter>
            <SignupForm onInvalid={onInvalid} onSubmit={onSubmit} />
            </BrowserRouter>
        )

        const submitButton = screen.getAllByText('Submit')

        await waitFor(() => UserEvent.click(submitButton[0]))

        waitFor(() => expect(onInvalid).toHaveBeenCalledTimes(1))
        waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(0))
    })
})
