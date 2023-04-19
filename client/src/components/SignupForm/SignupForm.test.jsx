import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import SignupForm, { signup } from '.';
import { AuthProvider, setAuth } from '../../context/AuthContext';

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

    it("Displays a form and heading", () => {
        const form = screen.getByRole('form')
        expect(form).toBeInTheDocument();
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument();
    })

    // Does our component NOT submit when required fields are empty?

    // it('triggers invalid when required fields are empty', async () => {
    //     const onSubmit = jest.fn()
    //     const onInvalid = jest.fn()
    
    //     render(<OurForm onInvalid={onInvalid} onSubmit={onSubmit} />)
    
    //     const submitButton = screen.getByText('Submit')
    
    //     await waitFor(() => user.click(submitButton))
    
    //     expect(onInvalid).toHaveBeenCalledTimes(1)
    //     expect(onSubmit).toHaveBeenCalledTimes(0)
    //   })

    // it('Triggers invalid when required fields are empty', async () => {
    //     const onSubmit = vi.fn()
    //     const onInvalid = vi.fn()

    //     render(<SignupForm />)
    // })


    // Does our component submit when required fields are populated?
    // Does our component submit, passing our (submit) handler the expected data?

    // it('Signs you up when signup is clicked', async () => {
    //     expect(window.location.href).not.toContain('/login');
    //     const signup = screen.getByRole('submit')

    //     const data = {
    //         username: 'test',
    //         email: 'test@test.com',
    //         password: 'test'
    //     }

    //     await signup(data)

    //     expect(window.location.href).toContain('/login')
    // })


    // select button from dom
    // simulate click on button with userevent (await)
    // check the h2 has changed

    

    // ATTEMPT 0
    // This is the preferred way according to https://v1.test-utils.vuejs.org/api/wrapper/setvalue.html but still does not work
    // await selectFieldWrapper.setValue("item 2");
    // expect(selectFieldWrapper.element.value).toBe("item 2");
    // alternatively
    // selectFieldWrapper.element.value = "item 2";
    // selectFieldWrapper.trigger('change')
    // expect(selectFieldWrapper.element.value).toBe("item 2");

})
