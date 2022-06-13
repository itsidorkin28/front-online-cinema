import React, { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import Field from '@/ui/form-elements/Field/Field'
import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = (
	{ register, formState: { errors }, isPasswordRequired = false },
): JSX.Element => {
	return (
		<>
			<Field placeholder={'Email'}
			       error={errors.email || undefined}
			       {...register('email', {
				       required: 'Email is required',
				       pattern: {
					       value: validEmail,
					       message: 'Please enter a valid email address',
				       },
			       })} />
			<Field placeholder={'Password'}
			       type={'password'}
			       error={errors.password || undefined}
			       {...register('password',
				       isPasswordRequired
					       ? {
						       required: 'Password is required',
						       minLength: {
							       value: 6,
							       message: 'Min length should more 6 symbols',
						       },
					       }
					       : {})} />
		</>
	)
}

export default AuthFields
