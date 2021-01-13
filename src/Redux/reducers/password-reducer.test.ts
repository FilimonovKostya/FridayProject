import {actions, InitializeStateType, passwordReducer } from "./password-recucer"

let startState: InitializeStateType

beforeEach(() => {
    startState = {
        recoveryStatusMessage: '',
        resetStatus: {
            message: '',
            success: false as null | boolean
        },
        isFetching: false
    }
})

test('recovery status should be changed', () => {
    const newStatus = 'this is new status'
    const endState = passwordReducer(startState, actions.setRecoveryStatus(newStatus))

    expect(endState.recoveryStatusMessage).toBe('this is new status')
})

test('reset message status should be changed', () => {
    const newStatus = 'this is new reset status'
    const endState = passwordReducer(startState, actions.setResetStatus(newStatus))

    expect(endState.resetStatus.message).toBe('this is new reset status')
})

test('reset success state should be true', () => {

    const newStatus = '404 not found'

    const endState = passwordReducer(startState, actions.setResetStatus(newStatus, true))

    expect(endState.resetStatus.message).toBe('404 not found')
    expect(endState.resetStatus.success).toBeTruthy()
})

test('isFetching should be true', () => {

    const endState = passwordReducer(startState, actions.isFetching(true))

    expect(endState.isFetching).toBeTruthy()
})