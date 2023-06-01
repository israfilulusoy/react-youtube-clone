import React, { useContext } from "react";
import { categories } from "../utils/constants";
import { Context } from "../Context/contextApi";

const LeftNav = () => {
  // context yapısından sağlanan state e ve fonksiyonlara abone olma...
  const { selectedCategory, setSelectedCategory } = useContext(Context);
  return (
    <div className='bg-dark text-light d-flex flex-column gap-4'>
      {categories.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className={`p-2 ${
                selectedCategory === item.name && "bg-primary"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedCategory(item.name)}
            >
              <span> {item.icon} </span>
              <span className='mx-2'> {item.name} </span>
            </div>
            {item.divider && <hr className='my-4' />}
          </>
        );
      })}
    </div>
  );
};

export default LeftNav;
