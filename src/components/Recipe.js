import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Ingredient from './Ingredient';


const Recipe = ({recipe}) => {
    const [show, setShow]=useState(false)

    console.log(recipe);
    const {label,url, image, ingredients, calories, source, cuisineType, totalTime}=recipe.recipe;
    return (
        <div className='recipe'>
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target='_blank' rel="noreferrer noopener" >
                Chi tiết cách làm <CaretRightOutlined />
            </a>
            <h3>Lượng calories : {Number(calories).toFixed(2)}</h3>
            <h3>Tham khảo : {source}</h3>
            <h3>Xuất xứ : {cuisineType}</h3>
            <h3>Thời gian chế biến : {totalTime} phút</h3>
            <button onClick={()=>setShow(!show)}>Nguyên liệu <CaretDownOutlined /> </button>
           {show &&  <Ingredient ingredients={ingredients}></Ingredient>}
        </div>
    );
};

export default Recipe;