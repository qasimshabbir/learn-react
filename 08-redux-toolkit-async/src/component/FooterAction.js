import React from 'react'
import { useDispatch } from 'react-redux'
import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED } from '../store/store';
import { setFilter } from '../store/todoSlicer';

export const FooterAction = () => {
    const dispatch = useDispatch();

    return (
        <div>
            Show: 
            <button onClick = {()=>{dispatch(setFilter(FILTER_ALL))}}>All</button>&nbsp;
            <button onClick = {()=>{dispatch(setFilter(FILTER_ACTIVE))}}>Active</button>&nbsp;
            <button onClick = {()=>{dispatch(setFilter(FILTER_COMPLETED))}}>Completed</button>
        </div>
    )
}
