import { useTypedSelector } from '@/hooks/useTypedSelector'
import { IInitialState } from '@/store/user/user.interface'

export const useAuth = () => useTypedSelector<IInitialState>(state => state.user)
