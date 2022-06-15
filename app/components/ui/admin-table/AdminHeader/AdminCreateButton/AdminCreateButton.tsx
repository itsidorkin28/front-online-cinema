import { FC } from 'react'
import { IAdminCreateButton } from '@/ui/admin-table/AdminHeader/AdminCreateButton/admin-create-button.interface'
import Button from '@/ui/form-elements/Button/Button'

const AdminCreateButton: FC<IAdminCreateButton> = ({children, onClick} ) => {
	return <Button onClick={onClick}>{children}</Button>
}

export default AdminCreateButton
