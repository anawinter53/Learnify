import React, { useEffect, useContext } from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import QuizQuestion from '.';
import { CategoryProvider, useCategory, CategoryContext } from '../../context/CategoryContext';


describe("Quiz Question Component", () => {
    beforeEach(() => {
        // const { category, setCategory } = useCategory()

        // useEffect(() => {
        //     setCategory([
        //       {
        //         geography: {
        //           name: 'Geography',
        //           image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        //         },
        //         history: {
        //           name: 'History',
        //           image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
        //         },
        //         chemistry: {
        //           name: 'Chemistry',
        //           image: 'https://images.unsplash.com/photo-1608037222022-62649819f8aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        //         },
        //         biology: {
        //           name: 'Biology',
        //           image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        //         },
        //         physics: {
        //           name: 'Physics',
        //           image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        //         },
        //         mathematics: {
        //           name: 'Mathematics',
        //           image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
        //         },
        //         english: {
        //           name: 'English',
        //           image: 'https://images.unsplash.com/photo-1583361704493-d4d4d1b1d70a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        //         },
        //         sports: {
        //           name: 'Sports',
        //           image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        //         },
        //         religiouseducation: {
        //           name: 'Religious Education',
        //           image: 'https://images.unsplash.com/photo-1624862761959-18b9c810825d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        //         }
        //       }
        //     ])
        //   }, [])

        render(
            <CategoryContext.CategoryProvider category="category">
                <BrowserRouter>
                    <QuizQuestion questions={questions}/>
                </BrowserRouter>
            </CategoryContext.CategoryProvider>
                
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", () => {
        const heading = waitFor(() => screen.findByRole('heading'))
        expect(heading).toBeInTheDocument();
    })

    // it("Button changes colour based on answer", () => {
    //     const heading = screen.getByRole('heading')
    //     expect(heading).toBeInTheDocument();
    // })

    // select button from dom
    // simulate click on button with userevent (await)
    // check the h2 has changed

})
