import React,{ createContext, useReducer } from "react";
import { DUMMY_DATA } from "../data/data";

export const ExpenseContext= createContext({
    expenses: [],
    updateExpense: (id, description, amount, date)=>{},
    deleteExpense: (id)=> {},
    addExpense: ({description, amount, date})=>{},
    setExpenses: (expenses)=>{}
});

function reducerFun(state, action){
    switch (action.type){
        case 'ADD':
            return ([...state,action.payload]);
        case 'SET':
            return action.payload;
        case 'DELETE':
            return state.filter((item)=> item.id!= action.payload.id);
        case 'UPDATE':
            const dataIndex= state.findIndex((item)=> item.id===action.payload.id);
            state[dataIndex]= action.payload;
            return state;
        default:
            return state;
    }
}
function ExpenseContextProvider({children}){
    const [AllExpenses, dispatch] = useReducer(reducerFun, DUMMY_DATA);

    function updateExpense({id,description, amount, date}){
        dispatch({type: 'UPDATE', payload:{id,description, amount, date}});
    }
    function deleteExpense(id){
        dispatch({type: 'DELETE', payload: {id}});
    }
    function addExpense({description, amount, date,id}){
        
        dispatch({type: 'ADD', payload:{description, amount, date, id}});
    }
    function setExpenses(expenses){
        dispatch({type: 'SET' ,payload: expenses});
    }

    const value={
        expenses: AllExpenses,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense,
        addExpense: addExpense,
        setExpenses: setExpenses

    }
    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>

}
export default ExpenseContextProvider;