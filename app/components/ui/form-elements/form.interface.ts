import { IField } from '@/ui/form-elements/Field/field.interface'
import { EditorProps } from 'draft-js'

type TypeEditorPropsField = EditorProps & IField

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}
