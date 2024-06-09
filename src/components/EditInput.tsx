import { ChangeEvent } from 'react'
import S from './editInput.module.css'
import React from 'react'

type PropsType = {
	activateView: () => void
	value: string
	setValue: (newValue: string) => void
	onKayPressHandler: () => void
}

export const EditInput: React.FC<PropsType> = React.memo(
	({ activateView, value, setValue, onKayPressHandler }) => {
		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			setValue(e.currentTarget.value)
		}

		// const onKayPressHandlerDouble = (e: any) => {
		// 	if (e.key == 'Enter') {
		// 		setValue(e.currentTarget.value)
		// 		onKayPressHandler()
		// 	}
		// }

		return (
			<>
				<div className={S.container}>
					<input
						className={S.input}
						value={value}
						onChange={onChangeHandler}
						onBlur={activateView}
						autoFocus
					/>
				</div>
			</>
		)
	}
)
