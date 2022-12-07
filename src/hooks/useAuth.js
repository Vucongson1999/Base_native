import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '@/actions'

export const useAuth = () => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)

    const handleLogin = ({ username, passowrd }) => {
        dispatch(authActions.loginRequest({ username, passowrd }))
    }

    return {
        authState,
        handleLogin
    }
}