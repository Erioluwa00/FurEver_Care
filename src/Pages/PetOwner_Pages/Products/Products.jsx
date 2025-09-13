import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import Navbar from '../../../Components/Navbar/Navbar';
import '../../../Styling/style.css';
import { useEffect, useState } from 'react';
import productsData from './products.json';

function Products() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    category: [],
    pet_type: [],
    breed: [],
    brand: [],
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('default');

  const allCategories = [...new Set(productsData.map(p => p.category))];
  const allPetTypes = [...new Set(productsData.map(p => p.pet_type))];
  const allBreeds = [...new Set(productsData.map(p => p.breed))];
  const allBrands = [...new Set(productsData.map(p => p.brand))];

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }


  useEffect(() => {
    let tempProducts = [...productsData];

    if (searchTerm) {
      tempProducts = tempProducts.filter(p =>
        p.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.category.length > 0) {
      tempProducts = tempProducts.filter(p => filters.category.includes(p.category));
    }
    if (filters.pet_type.length > 0) {
      tempProducts = tempProducts.filter(p => filters.pet_type.includes(p.pet_type));
    }
    if (filters.brand.length > 0) {
      tempProducts = tempProducts.filter(p => filters.brand.includes(p.brand));
    }
    if (filters.breed.length > 0) {
        tempProducts = tempProducts.filter(p => p.breed !== 'All' && filters.breed.includes(p.breed));
    }

    switch (sortOrder) {
      case 'price-asc':
        tempProducts.sort((a, b) => a.amount - b.amount);
        break;
      case 'price-desc':
        tempProducts.sort((a, b) => b.amount - a.amount);
        break;
      default:
        tempProducts.sort((a, b) => a.product_id - b.product_id);
        break;
    }

    setFilteredProducts(tempProducts);
  }, [filters, searchTerm, sortOrder]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => {
      const newFilterValues = [...prevFilters[filterType]];
      if (newFilterValues.includes(value)) {
        return {
          ...prevFilters,
          [filterType]: newFilterValues.filter(v => v !== value),
        };
      } else {
        return {
          ...prevFilters,
          [filterType]: [...newFilterValues, value],
        };
      }
    });
  };

  const handleResetFilters = () => {
    setFilters({
      category: [],
      pet_type: [],
      breed: [],
      brand: [],
    });
    setSearchTerm('');
    setSortOrder('default');
  };

  return (
    <>
      <Navbar />
      <section className="hero-section-inner">
        <div className="container">
          <h1 className="section-title">Our Products</h1>
           <p>
                    <Link to={'/Home'} className='hero-links'>Home</Link>
                    <span>  /  </span>
                     <Link to={'/Products'} className='hero-links'>Products</Link>
                  </p>
        </div>
      </section>

      <section className="products-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="filter-sidebar">
                <div className="filter-header">
                  <h3>Filters</h3>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    id="resetFilters"
                    onClick={handleResetFilters}
                  >
                    Reset
                  </button>
                </div>

                <div className="filter-section">
                  <h5 className="filter-title">Category</h5>
                  <div className="filter-options">
                    {allCategories.map(category => (
                      <div className="form-check" key={category}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={category}
                          id={`filter-${category}`}
                          checked={filters.category.includes(category)}
                          onChange={() => handleFilterChange('category', category)}
                        />
                        <label className="form-check-label" htmlFor={`filter-${category}`}>
                          {capitalize(category.replace(/_/g, ' '))}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h5 className="filter-title">Pet Type</h5>
                  <div className="filter-options">
                    {allPetTypes.map(petType => (
                      <div className="form-check" key={petType}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={petType}
                          id={`filter-${petType}`}
                          checked={filters.pet_type.includes(petType)}
                          onChange={() => handleFilterChange('pet_type', petType)}
                        />
                        <label className="form-check-label" htmlFor={`filter-${petType}`}>
                          {capitalize(petType.replace(/_/g, ' '))}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h5 className="filter-title">Breed</h5>
                  <div className="filter-options">
                    {allBreeds.filter(b => b !== 'All').map(breed => (
                      <div className="form-check" key={breed}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={breed}
                          id={`filter-${breed}`}
                          checked={filters.breed.includes(breed)}
                          onChange={() => handleFilterChange('breed', breed)}
                        />
                        <label className="form-check-label" htmlFor={`filter-${breed}`}>
                          {breed}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h5 className="filter-title">Brand</h5>
                  <div className="filter-options">
                    {allBrands.map(brand => (
                      <div className="form-check" key={brand}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={brand}
                          id={`filter-${brand}`}
                          checked={filters.brand.includes(brand)}
                          onChange={() => handleFilterChange('brand', brand)}
                        />
                        <label className="form-check-label" htmlFor={`filter-${brand}`}>
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row mb-4 align-items-center">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-pill"
                    id="mainSearch"
                    placeholder="Search all products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="col-md-6 text-right">
                  <label htmlFor="sortOrder" className="mr-2">Sort by:</label>
                  <select
                    className="form-control form-control-pill d-inline-block w-auto"
                    id="sortOrder"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
              </div>
              <div className="row product-list">
                {filteredProducts.map((product) => (
                  <div key={product.product_id} className="col-lg-4" data-category={product.category} data-pettype={product.pet_type}>
                    <div className="card">
                      {product.image ? (
                        <div
                          className="placeholder-box"
                          style={{
                            backgroundImage: `url(${product.image})`,
                          }}
                        ></div>
                      ) : (
                        <div className="placeholder-box"></div>
                      )}
                      <div className="card-body">
                        <h5 className="card-title">{product.product_name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="font-weight-bold">₦{product.amount}</p>
                        <Link
                          to={`/product-details/${product.product_id}`}
                          className="btn btn-outline-primary"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Products;
