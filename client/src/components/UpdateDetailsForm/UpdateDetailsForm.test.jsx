import React, { useState } from 'react';
import { BrowserRouter, useNavigate } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import UserEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import UpdateDetailsForm from '.';
import { AuthProvider, setAuth } from '../../context/AuthContext';

describe("UpdateDetailsForm Component", () => {
    // const [username, setUsername] = useState(user.username)

    beforeEach(() => {
        render(
                <BrowserRouter >
                    <UpdateDetailsForm user='user'/>
                </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a form and heading", async () => {
        const form = screen.getAllByRole('form')
        waitFor(() => expect(form).toBeInTheDocument());
        const heading = screen.getByRole('heading')
        waitFor(() => expect(heading).toBeInTheDocument());
        waitFor(() => expect(heading.textContent).toBe('Update details'))
    })
})
