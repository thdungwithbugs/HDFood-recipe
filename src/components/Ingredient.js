import React from 'react';
import {v4 as uuid} from 'uuid';

const Ingredient = ({ingredients}) => {
    return (
        <>
            {ingredients.map((item,index)=>{
                return (
                    <ul key={uuid()} className="ingredient-list">
                        <li className='ingredient-text'>
                            {item.text}
                        </li>
                        <img src={item.image} alt="ten_nguyen_lieu" style={{
                            width:'50px',
                            height:'50px',
                            borderRadius:'100%',
                            objectFit:'cover',
                        }} />
                        <li className='ingredient-ingredient-weight'>
                            Weight - {Number(item.weight).toFixed(2)}
                        </li>
                      
                    </ul>
                )
            })}
        </>
    );
};

export default Ingredient;