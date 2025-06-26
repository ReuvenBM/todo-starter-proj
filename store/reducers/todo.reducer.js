

const initialTodo = []


export function todoReducer(state = initialTodo, cmd) {
    switch (cmd.type) {
    case 'SET_TODOS':
      return action.todos
    case 'ADD_TODO':
      return [...state, cmd.todo]
    default:
      return state
  }
}
