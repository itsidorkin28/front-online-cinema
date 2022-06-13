import React, { forwardRef } from 'react'
import { IField } from '@/ui/form-elements/Field/field.interface'
import cn from 'classnames'
import styles from '../Form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(({ placeholder, error, type = 'text', style, ...props }: IField, ref): JSX.Element => {
	return (
		<div className={cn(styles.common, styles.field)} style={style}>
			<label>
				<span>{placeholder}</span>
				<input type={type} ref={ref} {...props}/>
			</label>
			{error && <div className={styles.error}>{error.message}</div>}
		</div>
	)
})

Field.displayName = 'Field'

export default Field
