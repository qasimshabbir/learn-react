import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

export const Shoes = () => {
    const {shoes} = useContext(GlobalContext)

    return (
        <div>
            <Outlet />
        </div>
    )
}
