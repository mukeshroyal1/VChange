import { useAuthContext } from './useAuthContext'
export const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = () => {
    // we will remove the user from storage 
    localStorage.removeItem('user')

    // dispatch the logout action 
    dispatch({type: 'LOGOUT'})
  }

  return {logout}
}