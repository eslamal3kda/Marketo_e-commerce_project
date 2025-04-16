import React, { useState } from "react";

import { TbAdjustmentsHorizontal } from "react-icons/tb";
import FilterCategory from "../../components/filterCategory/FilterCategory";
import { TfiMenu } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";

export default function ShopPage() {
    const filterCategories = [
        { id: 1, category: "price", active: false },
        { id: 2, category: "category", active: true },
        { id: 3, category: "rate", active: false },
        { id: 4, category: "name", active: false },
    ];
    const [dispalyGrid,setDisplayGrid] = useState(true)
    const [range, setRange] = useState(600);
    const handleRange = (event) => {
        setRange(event.target.value);
    };

    return (
        <main className="shop-page page-test">
            <div className="shop-page-container container">
                <div className="filter-menu-container">
                    <div className="filter-heading">
                        <TbAdjustmentsHorizontal />
                        <h2>filter</h2>
                    </div>
                    <div className="filter-content">
                        {filterCategories.map((item) => (
                            <FilterCategory key={item.id} categ={item.category} active={item.active} range={range} handleRange={handleRange} />
                        ))}
                    </div>
                </div>
                <div className="shop-page-content">
                    <div className="shop-page-content-header">
                        <div className="heading">
                            <h4>shop</h4>
                        </div>
                        <div className="display-btn">
                            <span>view :</span>
                            <div className="icons">
                                <TfiMenu className={`${dispalyGrid?"":"active"}`} onClick={()=>setDisplayGrid(false)}/> <CgMenuGridR className={`${dispalyGrid ?"active":""}`} onClick={()=>setDisplayGrid(true)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
