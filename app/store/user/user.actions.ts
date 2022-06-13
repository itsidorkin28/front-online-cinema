import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'
import { AuthService } from '@/services/auth/auth.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '@/utils/toast-error'
import { errorCatch } from '../../api/api.helpers'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/register',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return rejectWithValue(error)
		}
	})

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/login',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return rejectWithValue(error)
		}
	})

export const logout = createAsyncThunk('auth/logout',
	async () => {
		await AuthService.logout()
	})

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const response = await AuthService.getNewToken()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastError(
					'Logout',
					'Your authorization is finished, plz sign in again',
				)
				dispatch(logout())
			}
			return rejectWithValue(error)
		}
	})
