import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import SignupForm, { signup } from '.';

describe("SignupForm Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SignupForm />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a form", () => {
        const form = screen.getByRole('form')

        expect(form).toBeInTheDocument();
    })


    it('Signs you up when signup is clicked', async () => {
        expect(window.location.href).not.toContain('/login');

        const data = {
            username: 'test',
            email: 'test@test.com',
            password: 'test'
        }

        await signup(data)

        expect(window.location.href).toContain('/login')
    })


    // it('Logs you out when logout is clicked', async() => {
    //     expect(window.location.href).not.toContain('/login');


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
