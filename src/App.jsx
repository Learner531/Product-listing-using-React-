import React from 'react';
import ProductList from './components/ProductList';
import './App.css'
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import { useState } from 'react';
import Sort from './components/Sort';
import Navbar from './components/Navbar';

  function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOption, setSortOption] = useState('');
    return (
      <div className="App">
        <Navbar onSearchChange={setSearchTerm} onCategoryChange={setSelectedCategory} onSortChange={setSortOption} />
        
        <header className="bg-light py-4 mb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="display-4">Product Store</h1>
        
              </div>
            </div>
          </div>
        </header>
        
        <ProductList searchTerm={searchTerm} selectedCategory={selectedCategory} sortOption={sortOption} />
      </div>
    )
  }

export default App;
