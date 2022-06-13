import React from 'react'
import { IButton } from '@/ui/form-elements/Button/button.interface'
import styles from '../Form.module.scss'
import cn from 'classnames'

const Button = ({children, className, ...props}: IButton): JSX.Element => {
	return (
		<button className={cn(styles.button, className)} {...props}>
			{children}
		</button>
	)
}

export default Button
