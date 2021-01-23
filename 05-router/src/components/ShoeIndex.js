import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

export const ShoeIndex = () => {
    const {shoes} = useContext(GlobalContext)

    return (
        <div>
        <h1>  New Shoes Index  </h1>
        <ul>
            {shoes.map( (shoe) => (
                <li key="{shoe.id}">
                    <Link to={`Shoe/${shoe.id}`}>
                        <h4>{shoe.name}</h4>
                        <img src={shoe.img}></img>
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    )
}
