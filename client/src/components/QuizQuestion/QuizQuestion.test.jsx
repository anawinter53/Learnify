import React, { useEffect, useContext } from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import QuizQuestion from '.';
import { CategoryProvider, useCategory, CategoryContext } from '../../context/CategoryContext';


describe("Quiz Question Component", () => {
    beforeEach(() => {
        render(
                <BrowserRouter path='/:category'>
                    <QuizQuestion questions='questions'/>
                </BrowserRouter>
                
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", () => {
        const heading = screen.findByRole('heading')
        waitFor(() => expect(heading).toBeInTheDocument());
    })

    it("Button changes colour based on answer", () => {
        const options = screen.getByRole('options')
        expect(options).toBeInTheDocument();
        const correct = screen.getAllByRole('_correct_224b3e')
        UserEvent.click(correct[0])
        waitFor(() => expect(correct.style.background).toBe('rgb(243, 85, 85)'))
    })
})
