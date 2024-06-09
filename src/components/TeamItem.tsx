import { useState } from 'react'
import { TeamType } from '../App'
import S from './mainTable.module.css'
import { EditInput } from './EditInput'
import React from 'react'

type PropsType = {
	team: TeamType
	removeTeamHandler: (id: string) => void
	onEditTitle: (newTitle: string) => void
}

export const TeamItem: React.FC<PropsType> = React.memo(
	({ team, removeTeamHandler, onEditTitle }) => {
		const [isEdit, setIsEdit] = useState(true)
		const [value, setValue] = useState('')
		const activateEdit = () => {
			setIsEdit(!true)
		}

		const activateView = () => {
			setIsEdit(true)
			onEditTitle(value)
		}

		const onKayPressHandler = () => {
			onEditTitle(value)
		}

		return (
			<>
				{isEdit ? (
					<div className={S.containerTeam}>
						{team.title}
						<button onClick={activateEdit} className={S.btnTeamPlus}>
							edit
						</button>
						<button
							className={S.btnTeam}
							onClick={() => removeTeamHandler(team.id)}
						>
							x
						</button>
					</div>
				) : (
					<EditInput
						value={value}
						setValue={setValue}
						activateView={activateView}
						onKayPressHandler={onKayPressHandler}
					/>
				)}
			</>
		)
	}
)
