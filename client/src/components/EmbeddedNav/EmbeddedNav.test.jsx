import React from 'react';
import { describe, expect, beforeEach, afterEach, it } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
 
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import EmbeddedNav from '.'
import { AuthProvider } from '../../context/AuthContext';

describe('EmbeddedNav Component', () => {
    beforeEach(() => {
        render(
            <AuthProvider value={{ auth: true, setAuth }}>
                <BrowserRouter>
                    <EmbeddedNav />
                </BrowserRouter>
            </AuthProvider>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a nav bar with 2 links", () => {
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument();
        expect(nav.childNodes.length).toBe(2)
    })

    it('Changes location when a navlink is clicked', async () => {
        expect(window.location.href).not.toContain('/login');
        const login = screen.getByText('Login');
        await userEvent.click(login)
        expect(window.location.href).toContain('/login');
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

    // it('Logs you out when logout is clicked', async () => {
    //     expect(window.location.href).not.toContain('/logout');

    //     //login test user
    //     const login = async () => {
    //         const data = { 
    //             username: 'admin', 
    //             password: 'admin' 
    //         };
        
    //         const options = {
    //           method: "POST",
    //           headers: { "Content-Type": "application/json" },
    //           body: JSON.stringify(data),
    //         };
        
    //         const res = await fetch(`http://localhost:8080/users/login`, options);
        
    //         const { token, authenticated } = await res.json();
            
    //         if (res.ok) {
    //           localStorage.setItem("token", token)
    //           setAuth(authenticated)
    //         } else {
    //           console.log("Something failed, very sad! :(");
    //         }
    //     }

    //     await login()

    //     //test signout - but signout not appearing since auth not passing
    //     const logout = screen.getByText('Logout');
    //     await userEvent.click(logout)
    //     expect(window.location.pathname).toEqual('/')
    // })
})
