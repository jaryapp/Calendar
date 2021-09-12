import React, { createContext, useReducer } from 'react'

const today = new Date()
today.setDate(1)
const initialState = today
const SelectedDateStore = createContext(initialState)
const { Provider } = SelectedDateStore

// type
const PREV_MONTH = 'SELECTED_DATE/PREV_MONTH'
const NEXT_MONTH = 'SELECTED_DATE/NEXT_MONTH'

// action creator
export const prevMonth = () => {
  return {
    type: PREV_MONTH,
  }
}

export const nextMonth = () => {
  return {
    type: NEXT_MONTH,
  }
}

const SelectedDateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case PREV_MONTH: {
        const prev = new Date(state)
        prev.setMonth(state.getMonth() - 1)
        return prev
      }
      case NEXT_MONTH: {
        const next = new Date(state)
        next.setMonth(state.getMonth() + 1)
        return next
      }
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { SelectedDateStore, SelectedDateProvider }
