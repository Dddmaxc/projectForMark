import S from './mainTable.module.css'
import { ArrayTeamType } from '../App'
import { TeamItem } from './TeamItem'
import React from 'react'

type PropsType = {
	mainTable: ArrayTeamType
	removeTeam: (teamId: string) => void
	ChangeEditTitle: (id: string, newTitle: string) => void
}

export const MainTable: React.FC<PropsType> = React.memo(
	({ mainTable, removeTeam, ChangeEditTitle }) => {
		return (
			<>
				<div className={S.container}>
					{mainTable.map((t, i) => {
						const onEditTitle = (newTitle: string) => {
							ChangeEditTitle(t.id, newTitle)
						}

						return (
							<TeamItem
								removeTeamHandler={removeTeam}
								team={t}
								key={t.id}
								onEditTitle={onEditTitle}
							/>
						)
					})}
				</div>
			</>
		)
	}
)
