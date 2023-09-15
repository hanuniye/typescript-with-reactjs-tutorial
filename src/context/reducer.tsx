export interface StateType {
    theme: string,
    fontSize: number
}

export const initialState: StateType = {
    theme: "dark",
    fontSize: 16
}

type ThemeActionType = {
    type: "THEME_TYPE",
}

type FontSizeActionType = {
    type: "FONTSIZE_TYPE",
    payload: number
}

export type ActionType = ThemeActionType | FontSizeActionType

export const reducer = (state: StateType, action:ActionType ) => {
    switch (action.type) {
        case "THEME_TYPE":
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark"
            }
        case "FONTSIZE_TYPE":
            return {
                ...state,
                fontSize: action.payload
            }
        default:
            return state
    }
}