import React, { useState } from 'react'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'
import { useAuth } from '@/hooks/useAuth'
import { useForm } from 'react-hook-form'
import { IAuthFormData } from '@/screens/auth/authFormData.interface'
import styles from './Auth.module.scss'
import { Meta } from '@/utils/meta/Meta'
import Heading from '@/ui/heading/Heading'
import Button from '@/ui/form-elements/Button/Button'
import AuthFields from '@/screens/auth/AuthFields'

const Auth = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const { register: registerInput, handleSubmit, formState, reset } = useForm<IAuthFormData>({
		mode: 'onChange',
	})

	const login = (data: any) => {
		console.log(data)
	}
	const register = (data: any) => {
		console.log(data)

	}
	const onSubmit = handleSubmit(data => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	})


	return (
		<Meta title={'Auth'}>
			<section className={styles.wrapper}>
				<form onSubmit={onSubmit}>
					<Heading title={'Auth'} className={'mb-6'} />

					<AuthFields formState={formState}
					            register={registerInput}
					            isPasswordRequired />

					<div className={styles.buttons}>
						<Button type={'submit'}
						        onClick={() => setType('login')}
						        disabled={isLoading}>Login</Button>
						<Button type={'submit'}
						        onClick={() => setType('register')}
						        disabled={isLoading}>Register</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
