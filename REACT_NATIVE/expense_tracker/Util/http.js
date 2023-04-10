import axios from "axios"

export async function postExpense(expense){
    const res= await axios.post('https://expensetracker-dd015-default-rtdb.firebaseio.com/expenses.json', expense);
    const id= res.data.name;
    return id;
}
export async function getExpense(){
    const res= await axios.get('https://expensetracker-dd015-default-rtdb.firebaseio.com/expenses.json');
    console.log(res.data);
    const expenses=[];
    for (const key in res.data){
        const expobj= {
            id: key,
            amount: res.data[key].amount,
            description: res.data[key].description,
            date: new Date(res.data[key].date)
        }
        expenses.push(expobj);
    }
    return expenses;
}

export  function updateExpense(id, expense){
    return axios.put(`https://expensetracker-dd015-default-rtdb.firebaseio.com/expenses/${id}.json`, expense);
}
export function deleteExpense(id){
    return axios.delete(`https://expensetracker-dd015-default-rtdb.firebaseio.com/expenses/${id}.json`);
}