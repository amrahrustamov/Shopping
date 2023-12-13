import React, { useEffect, useState } from 'react'
import apiURL from '../../utilities/api'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../moreAboutCard/style.css"


const MoreAboutCard = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        const getProductById = async () => {
            await axios.get(`${apiURL.productAPI}/${id}`)
            .then(response => setItem(response.data))
            .catch(error => console.log(error))
        }
        getProductById()
    }, [])


 
  return (
       <div className='container'>
            <div key={id} className='cards'>
                    <img src={item.image} alt="" />
                    <h5>{item.category}</h5>
                    <h2>{item.title}</h2>
                    <h3>{item.description}</h3>
                    <p>{item.price} ₼</p>
            </div>
        </div>
  )
}

export default MoreAboutCard
