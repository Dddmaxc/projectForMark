import React from 'react'
import { ArrayTeamType } from '../App'
import S from './singleElimin.module.css'

type PropsType = {
	mainTable: ArrayTeamType
}

export const SingleElimination: React.FC<PropsType> = React.memo(
	({ mainTable }) => {
		return (
			<div className={S.container}>
				{mainTable.length % 2 === 0 ? (
					<>
						{mainTable.length === 2
							? mainTable.map((t, i) => (
									<div className={S.oneSquare} key={t.id}>
										{t.title}
									</div>
							  ))
							: null}
						{mainTable.length === 4
							? mainTable.map((t, i) => (
									<div className={S.oneSquare} key={t.id}>
										{t.title}
									</div>
							  ))
							: null}
						{mainTable.length === 6
							? mainTable.map((t, i) => (
									<div className={S.oneSquare} key={t.id}>
										{t.title}
									</div>
							  ))
							: null}
						{mainTable.length === 8
							? mainTable.map((t, i) => (
									<div className={S.oneSquare} key={t.id}>
										{t.title}
									</div>
							  ))
							: null}
					</>
				) : (
					<div>Add one team</div>
				)}
			</div>
		)
	}
)
