import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface IAdminCreateButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode
}
