import { NextPage } from 'next'
import { ReactNode } from 'react'

export type RolesType = {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}

export type NextPageAuth<P={}> = NextPage<P> & RolesType

export type ComponentAuthFieldsType = {
	Component: RolesType
	children: ReactNode
}
