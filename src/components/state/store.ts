import { combineReducers, createStore } from 'redux'
import { mainTableReducer } from './MainTable-reducer'

const rootReducer = combineReducers({
	mainTable: mainTableReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
//@ts-ignore
window.store = store
