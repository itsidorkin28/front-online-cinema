import React from 'react'
import { TypeMaterialIconName } from '@/shared/types/icon.types'
import * as MaterialIcons from 'react-icons/md'

interface IMaterialIcon {
	name: TypeMaterialIconName
}

export const MaterialIcon = ({ name }: IMaterialIcon): JSX.Element => {
	const IconComponent = MaterialIcons[name]
	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}



