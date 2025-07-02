import { Fish, Apple, Leaf, ShoppingBasket } from "lucide-react";
import { categories } from "../data/products";

const iconMap = {
  Fish,
  Apple,
  Leaf,
  ShoppingBasket
};

export default function Categories({ selectedCategory, setSelectedCategory }) {
  return (
    <section className="categories">
      <div className="container">
        <h2>Categorias</h2>
        <div className="category-grid">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <div
                key={category.id}
                className={`category-item ${selectedCategory === category.id ? "selected" : ""}`}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? "" : category.id)}
              >
                <IconComponent size={32} />
                <span>{category.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 