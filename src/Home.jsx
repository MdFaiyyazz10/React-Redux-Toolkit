import React from 'react'
import {useDispatch , useSelector} from 'react-redux'

const Home = () => {
    // const value = 20

    const dispatch = useDispatch()

    const {c} = useSelector(state=> state.firstReducer)

    const addBtn=()=>{
        dispatch({
            type:"increment"
        })
    }
    const subBtn=()=>{
        dispatch({
            type:"decrement"
        })
    }

    const add25Btn = ()=>{
        dispatch({
            type:"incrementByUser",
            payload: 25
        })
    }
    const sub25Btn = ()=>{
        dispatch({
            type:"decrementByUser",
            payload: 25
        })
    }


  return (
    <div>
        <h2>{c}</h2>
        <button onClick={addBtn}>Increment</button>
        <button onClick={add25Btn}>Increment BY 25</button>
        <button onClick={subBtn}>Decrement</button>
        <button onClick={sub25Btn}>Decrement BY 25</button>
    </div>
  )
}

export default Home
