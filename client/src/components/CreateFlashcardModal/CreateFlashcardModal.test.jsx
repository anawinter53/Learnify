import React, { useContext }from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';


import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import CreateFlashcardModal from '.';

describe("Create Flashcard Modal Component", () => {
    beforeEach(() => {
         render(
            <BrowserRouter>
                <CreateFlashcardModal />
            </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a form", async () => {
        const form = await waitFor(() => screen.findByRole('form'))
        await waitFor(() => expect(form).toBeInTheDocument())
    })

    // Does our component NOT submit when required fields are empty?

    it('Triggers invalid when required fields are empty', async () => {
        const onSubmit = vi.fn()
        const onInvalid = vi.fn()

        render(
            <BrowserRouter>
                <CreateFlashcardModal onInvalid={onInvalid} onSubmit={onSubmit} />
            </BrowserRouter>
        )

        const submitButton = screen.getAllByText('Submit')

        await waitFor(() => UserEvent.click(submitButton[0]))

        await waitFor(() => expect(onInvalid).toHaveBeenCalledTimes(1))
        await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(0))
    })
    
      it('Triggers submit with full results', async () => {
        const user = UserEvent.setup()

        const subject = 'Geography'
        const question = 'test'
        const answer = 'test'
    
        const onSubmit = vi.fn()
    
        render(<CreateFlashcardModal onSubmit={onSubmit} />)
    
        const subjectField = await waitFor(() => screen.getAllByDisplayValue('Select a subject'))
        const questionField = await waitFor(() => screen.getAllByPlaceholderText('Question'))
        const answerField = await waitFor(() => screen.getAllByPlaceholderText('Answer'))
        const form = await (waitFor(() => screen.findByRole('form')), {timeout:3000})
        const submitButton = await waitFor(() => screen.findAllByText('Submit'))
    
        await waitFor(() => user.type(subjectField[0], subject))
        await waitFor(() => user.type(questionField[0], question))
        await waitFor(() => user.click(form))
        await waitFor(() => user.type(answerField[0], answer))
        await waitFor(() => user.click(submitButton[0]))
    
        expect(onSubmit).toHaveBeenCalledWith({ subject, question, answer })
      })

    


    // Does our component submit when required fields are populated?
    // Does our component submit, passing our (submit) handler the expected data?
})
