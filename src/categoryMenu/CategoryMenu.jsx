// src/components/CategoryMenu.js
import React from 'react';

const CategoryMenu = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-menu">
      <h2>Kategorien</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => onSelectCategory(category.id)}>
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
