import React, { useState, useEffect } from 'react';
import '../card/style.css'
import apiURL from '../../utilities/api'
import { Link } from 'react-router-dom'


const Card = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiURL.productAPI}`);
                const json = await response.json();
                if (json && json.length > 0) {
                    setData(json);
                    console.log(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    },[]);

    return (
        <div className='container'>
            {data.map((item, index) => (
                <div key={index} className='cards'>
                    <img src={item.image} alt="" />
                    {
                        item.title.length < 20 ? <h2>{item.title}</h2> : <h2>{item.title.slice(0, 20)}...</h2>
                    }
                    <p>{item.price} ₼</p>
                    <Link to={`/products/details/${item.id}`}>Details</Link>
                </div>
            ))}
        </div>
    );
}

export default Card;
