export const counterReducer = (state = 0, {type}) => {
  switch (type) {
    case 'ADD':
      return state + 1
    default:
      return state
  }
}

export const currentSessionReducer = (state = 'SESSION', {type}) => {
  switch (type) {
    case 'ADD':
      return state + 1
    default:
      return state
  }
}
