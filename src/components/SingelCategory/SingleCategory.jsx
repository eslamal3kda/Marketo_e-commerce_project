import React from "react";

export default function SingleCategory({label,count,value}) {
    return (
        <>
            <div className="filter-content-categories-items-category-single-category">
                <div class="filter-content-categories-items-category-single-category-category-name">
                    <input type="checkbox" id={value} name={value} />
                    <label htmlFor={value}>{label}</label>
                </div>
                <span>({count})</span>
            </div>
        </>
    );
}
