import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

export const ShowDetail = () => {
    const {shoes} = useContext(GlobalContext)
    const {slug} =  useParams();
    const shoe = shoes.map((shoe)=> (slug==shoe.id));

    return (
        <div>
        <h1>
            {shoe.name}
        </h1>
        <img src={shoe.img}></img>
        </div>
    )
}
