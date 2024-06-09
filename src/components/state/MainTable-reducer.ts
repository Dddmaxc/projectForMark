import { v1 } from 'uuid'

export type removeTeamActionType = {
	type: 'REMOVE-TEAM'
	id: string
}

export type addTeamActionType = {
	type: 'ADD-TEAM'
	title: string
	id: string
}

export type ChangeEditTitleActionType = {
	type: 'CHANGE-EDIT-TITLE'
	id: string
	title: string
}

export type TeamType = {
	id: string
	title: string
}
export type ArrayTeamType = TeamType[]

const initialState: TeamType[] = []

type ActionType =
	| removeTeamActionType
	| addTeamActionType
	| ChangeEditTitleActionType

export const mainTableReducer = (
	state: TeamType[] = initialState,
	action: ActionType
) => {
	switch (action.type) {
		case 'REMOVE-TEAM': {
			return state.filter(t => t.id != action.id)
		}
		case 'ADD-TEAM': {
			return [
				{
					id: action.id,
					title: action.title,
				},
				...state,
			]
		}
		case 'CHANGE-EDIT-TITLE': {
			let editTitle = state.find(t => t.id === action.id)
			if (editTitle) {
				editTitle.title = action.title
			}
			return [...state]
		}
		default:
			return state
	}
}

export const removeTeamAC = (id: string): removeTeamActionType => {
	return { type: 'REMOVE-TEAM', id: id }
}

export const addTeamAC = (title: string): addTeamActionType => {
	return { type: 'ADD-TEAM', title, id: v1() }
}

export const ChangeEditTitleAC = (
	id: string,
	title: string
): ChangeEditTitleActionType => {
	return { type: 'CHANGE-EDIT-TITLE', id: id, title: title }
}
