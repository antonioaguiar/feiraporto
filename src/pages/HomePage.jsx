import { useMemo } from "react";
import { Users } from "lucide-react";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function HomePage({ searchTerm, selectedCategory, setSelectedCategory }) {
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.vendor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Categories 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      
      <main className="main-content">
        <div className="container">
          <h2 className="section-title">
            Produtos Disponíveis
          </h2>
          
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <Users size={48} />
              <h3>Nenhum produto encontrado</h3>
              <p>Tente ajustar sua busca ou categoria</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
} 