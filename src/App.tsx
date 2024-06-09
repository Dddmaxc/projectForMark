import { useCallback, useState } from 'react'
import './App.css'
import { MainTable } from './components/MainTable'
import { InputWriteTeam } from './components/InputWriteTeam'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppRootState } from './components/state/store'
import {
	ChangeEditTitleAC,
	addTeamAC,
	removeTeamAC,
} from './components/state/MainTable-reducer'
import { SingleElimination } from './components/SingleElimin'

export type TeamType = {
	id: string
	title: string
}
export type ArrayTeamType = TeamType[]

function App() {
	const dispatch = useDispatch()
	const mainTable = useSelector<AppRootState, Array<TeamType>>(
		state => state.mainTable
	)

	const ChangeEditTitle = useCallback(
		(id: string, newTitle: string) => {
			dispatch(ChangeEditTitleAC(id, newTitle))
		},
		[dispatch]
	)

	const addTeam = useCallback(
		(title: string) => {
			dispatch(addTeamAC(title))
		},
		[dispatch]
	)

	const removeTeam = useCallback(
		(teamId: string) => {
			dispatch(removeTeamAC(teamId))
		},
		[dispatch]
	)

	return (
		<div className='App'>
			<h2>Write yr team</h2>
			<InputWriteTeam addTeam={addTeam} />
			<MainTable
				mainTable={mainTable}
				removeTeam={removeTeam}
				ChangeEditTitle={ChangeEditTitle}
			/>
			<SingleElimination mainTable={mainTable} />
		</div>
	)
}

export default App
