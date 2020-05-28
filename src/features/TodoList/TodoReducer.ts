type Todo = {
  id: number;
  label: string;
  checked: boolean;
}

type Actions =
  | { type: 'ADD_TODO', payload: string }
  | { type: 'REMOVE_TODO', payload: number }
  | { type: 'CHECK_TODO', payload: number };

type initialStateType = {
  todos: Todo[];
}

export const initialState = {
  todos: [
    {
      id: 0,
      label: 'Learn TypeScript',
      checked: false,
    },
    {
      id: 1,
      label: 'Make a todo app',
      checked: false,
    }
  ]
};

export function reducer(state: initialStateType, action: Actions): initialStateType {

  switch (action.type) {
    case 'ADD_TODO': {
      const todo: Todo = {
        id: Date.now(),
        label: action.payload,
        checked: false
      }
      return { todos: [...state.todos, todo] };
    }
    case 'REMOVE_TODO': {
      const todoIdx = state.todos.findIndex((t: Todo) => t.id === action.payload);
      const todos = [...state.todos];
      todos.splice(todoIdx, 1);
      return { todos: todos };
    }
    case 'CHECK_TODO': {
      const todoIdx = state.todos.findIndex((t: Todo) => t.id === action.payload);
      const checkedTodo = { ...state.todos[todoIdx] };
      checkedTodo.checked = !checkedTodo.checked;
      const newTodos = [...state.todos];
      newTodos.splice(todoIdx, 1, checkedTodo);
      return { todos: newTodos };
    }
    default:
      return state;
  }
}