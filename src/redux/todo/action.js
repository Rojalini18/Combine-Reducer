export const ADD_TODO="ADD_TODO"
export const GET_TODOS_ERROR="GET_TODOS_ERROR"
export const GET_TODOS_SUCCESS="GET_TODOS_SUCCESS"
export const GET_TODOS_LOADING="GET_TODOS_LOADING"
export const addTodo=(payload)=>({
    type:ADD_TODO,
    payload
})
export const getTodosLoading=()=>({
    type:GET_TODOS_LOADING
})
export const getTodosError=()=>({
    type:GET_TODOS_ERROR
})
export const getTodosSuccess=(payload)=>({
    type:GET_TODOS_SUCCESS,
    payload
})