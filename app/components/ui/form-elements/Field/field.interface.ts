import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IField extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	placeholder: string
	error?: FieldError | undefined
}
