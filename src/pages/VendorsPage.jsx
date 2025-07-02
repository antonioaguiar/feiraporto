import { useMemo } from "react";
import { Users } from "lucide-react";
import VendorCard from "../components/VendorCard";
import { vendors } from "../data/vendors";

export default function VendorsPage({ searchTerm }) {
  const filteredVendors = useMemo(() => {
    return vendors.filter(vendor => {
      return vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             vendor.business.toLowerCase().includes(searchTerm.toLowerCase()) ||
             vendor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
             vendor.products.some(product => 
               product.toLowerCase().includes(searchTerm.toLowerCase())
             );
    });
  }, [searchTerm]);

  return (
    <main className="main-content">
      <div className="container">
        <h2 className="section-title">
          Nossos Feirantes
        </h2>
        
        {filteredVendors.length > 0 ? (
          <div className="vendors-grid">
            {filteredVendors.map(vendor => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <Users size={48} />
            <h3>Nenhum feirante encontrado</h3>
            <p>Tente ajustar sua busca</p>
          </div>
        )}
      </div>
    </main>
  );
} 