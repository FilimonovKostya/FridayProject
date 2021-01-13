import {path} from '../../App';
import React, {useEffect} from 'react';
import {RootStateType} from '../../Redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {SendingForm} from '../SuperComponents/SendingForm/SendingForm';
import {actions, sendRecoveryEmail} from '../../Redux/reducers/password-recucer';

export const PasswordRecovery: React.FC = () => {

    const dispatch = useDispatch()

    const recoveryPasswordStatus = useSelector<RootStateType, string>((state) => state.password.recoveryStatusMessage)

    const isFetching = useSelector<RootStateType, boolean>((state) => state.password.isFetching)

    const sendEmail = (email: string) => {
        dispatch(sendRecoveryEmail(email))
    }

    //clear status
    useEffect(() => {

        return () => {
            dispatch(actions.setRecoveryStatus(''))
        }
    }, [])

    return (
        <SendingForm formName={'Recovery Password'}
                     formDescription={`Enter the email address you used to register and we'll send you the instruction`}
                     callback={sendEmail}
                     status={recoveryPasswordStatus}
                     inputType={'email'}
                     buttonName={'Send'}
                     btnDisabled={isFetching}
                     navLinkPath={path.LOGIN}
        />
    )
}