import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../action/categoryAction";


const CategoryFilter = ({  handleSubFilter , handleClearAll}) => {
    const dispatch = useDispatch()
    const categories= useSelector(state=>state.categories?.categories?.category)
    useEffect(()=>{
        if(!categories || categories.length < 0){
            dispatch(getCategory())
        }
    },[dispatch])
  return(
    <>
        <div className="category-filter">
        {categories && categories.map(category => (
            <div key={category._id} className="category-card" >
            <div className="d-flex justify-content-start align-items-center gap-3 mt-1">
                <input type="radio" name={'category'} onClick={() => handleSubFilter('category',String(category.name)) }/>
                <label className="fs-5" htmlFor={category.name}>{category.name}</label>
            </div>
            </div>
        ))}
        </div>
      
    </>
  );
};

export default CategoryFilter;
