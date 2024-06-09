import { ChangeEvent, useState } from 'react'
import S from './inputWriteTeam.module.css'
import React from 'react'

type PropsType = {
	addTeam: (title: string) => void
}

export const InputWriteTeam: React.FC<PropsType> = React.memo(({ addTeam }) => {
	const [title, setTitle] = useState('')
	const [error, setError] = useState<string | null>(null)

	const addTeamHandler = () => {
		if (title.trim() !== '') {
			addTeam(title.trim())
			setTitle('')
			setError(null)
		} else {
			setError('Field is required')
		}
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}

	const onKeyPressHandler = (e: any) => {
		if (e.key === 'Enter') {
			if (title.trim() !== '') {
				addTeam(title.trim())
				setTitle('')
				setError(null)
			} else {
				setError('Field is required')
			}
		}
	}

	const classNames = {
		error: error ? S.error : S.input,
	}

	return (
		<>
			<div className={S.container}>
				<input
					onKeyPress={onKeyPressHandler}
					value={title}
					onChange={onChangeHandler}
					className={classNames.error}
				/>
				<button onClick={addTeamHandler}>+</button>
			</div>
			{error && <div className={S.containerError}>{error}</div>}
		</>
	)
})
