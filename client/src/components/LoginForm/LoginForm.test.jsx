import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import LoginForm from '.';
import { AuthProvider } from '../../context/AuthContext';

describe("LoginForm Component", () => {
    beforeEach(() => {
        render(
            <AuthProvider>
                <BrowserRouter>
                    <LoginForm />
                </BrowserRouter>
            </AuthProvider>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a form", () => {
        const form = screen.getByRole('form')

        expect(form).toBeInTheDocument();
    })

    // it("Logs you in", async () => {
    //     const username = screen.getByRole('username')
    //     await username.setValue('admin');
    //     expect(username.element)

    // })


    // ATTEMPT 0
    // This is the preferred way according to https://v1.test-utils.vuejs.org/api/wrapper/setvalue.html but still does not work
    // await selectFieldWrapper.setValue("item 2");
    // expect(selectFieldWrapper.element.value).toBe("item 2");
    // alternatively
    // selectFieldWrapper.element.value = "item 2";
    // selectFieldWrapper.trigger('change')
    // expect(selectFieldWrapper.element.value).toBe("item 2");

})
