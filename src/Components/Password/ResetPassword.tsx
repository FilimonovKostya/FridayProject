import {path} from '../../App';
import React, {useEffect} from 'react';
import {RootStateType} from '../../Redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {SendingForm} from '../SuperComponents/SendingForm/SendingForm';
import {actions, resetPassword} from '../../Redux/reducers/password-recucer';

export const ResetPassword: React.FC = () => {

    const dispatch = useDispatch()
    const {token} = useParams<Record<string, string | undefined>>();
    const history = useHistory();

    const resetStatusMessage = useSelector<RootStateType, string>((state) => state.password.resetStatus.message)

    const resetStatusSuccess = useSelector<RootStateType, boolean | null>((state) => state.password.resetStatus.success)

    const isFetching = useSelector<RootStateType, boolean>((state) => state.password.isFetching)

    const tokenName = token ? token : ''

    const resetOldPassword = (password: string) => {
        dispatch(resetPassword(password, tokenName))
    }

    const redirect = () => {
        history.push(path.LOGIN);
    }

    //redirect
    if (resetStatusSuccess) {
        setTimeout(redirect, 3000)
    }

    //clear status
    useEffect(() => {

        return () => {
            dispatch(actions.setResetStatus('', false))
        }
    }, [])

    return (
        <SendingForm formName={'Reset Password'}
                     formDescription={`Create a new, strong password that you don't use for other websites`}
                     callback={resetOldPassword}
                     status={resetStatusMessage}
                     inputType={'password'}
                     buttonName={'Enter'}
                     btnDisabled={isFetching}
                     navLinkPath={path.LOGIN}
        />
    )
}