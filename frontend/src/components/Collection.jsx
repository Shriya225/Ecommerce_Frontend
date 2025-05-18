import React, { useState } from 'react';
import CardContainer from './CardContainer';
import { useAllCollectionQuery } from '../redux/homeApiSlice';
import {
  Container,
  Pagination,
  Spinner,
  Alert,
  Form,
  InputGroup,
  Button
} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import './Collection.css';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const pageFromParams = parseInt(searchParams.get('page')) || 1;
  const sort = searchParams.get('sort') || '';
  const category = searchParams.get('category') || '';
  const type = searchParams.get('type') || '';
  const search = searchParams.get('search') || '';
  
  const { data, error, isLoading } = useAllCollectionQuery({
    page: pageFromParams,
    sort,
    category,
    type,
    search
  });
  const totalPages = data ? Math.ceil(data.count / 10) : 1;

  const handlePageChange = (newPage) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set('page', newPage);
      return params;
    });
  };

  const handleSearchChange = () => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      if (inputValue.trim()) {
        params.set('search', inputValue.trim());
      } else {
        params.delete('search');
      }
      params.set('page', '1');
      return params;
    });
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      if (value) {
        params.set('sort', value);
      } else {
        params.delete('sort');
      }
      params.set('page', '1');
      return params;
    });
  };

  const handleCategoryChange = (selectedCategory) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      if (category === selectedCategory) {
        params.delete('category');
        params.delete('type');
      } else {
        params.set('category', selectedCategory);
        params.delete('type');
      }
      params.set('page', '1');
      return params;
    });
  };

  const handleTypeChange = (selectedType) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      if (type === selectedType) {
        params.delete('type');
      } else {
        params.set('type', selectedType);
      }
      params.set('page', '1');
      return params;
    });
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="error-alert">
        Something went wrong.
      </Alert>
    );
  }

  return (
    <div className="collection-container">
      {/* Header Section with Search and Sort */}
      <div className="collection-header">
        <h2 className="collection-title">ALL COLLECTIONS</h2>
        <div className="header-controls">
          
          <InputGroup className="search-container">
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}

            />
          
            <Button 
              variant="outline-secondary"
              onClick={handleSearchChange}
            >
              Search
            </Button>
          </InputGroup>
          <div className="sort-container">
            <Form.Select
              className="sort-select"
              value={sort}
              onChange={handleSortChange}
            >
              <option value="">Sort by: Relevant</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </Form.Select>
          </div>
          
        </div>
      </div>

      {/* Category Selection */}
      <div className="category-section">
        <h6 className="section-label">CATEGORIES</h6>
        <div className="category-tabs">
          {['Men', 'Women', 'Kids'].map((item) => (
            <button
              key={item}
              className={`category-tab ${category === item ? 'active' : ''}`}
              onClick={() => handleCategoryChange(item)}
            >
              {item}
              <span className="tab-indicator"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Type Selection */}
      {category && (
        <div className="type-section">
          <h6 className="section-label">TYPES</h6>
          <div className="type-buttons">
            {['BottomWear', 'TopWear', 'WinterWear'].map((item) => (
              <button
                key={item}
                className={`type-button ${type === item ? 'active' : ''}`}
                onClick={() => handleTypeChange(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Product Cards */}
      {!isLoading && !error && data && (
        <CardContainer data={data.results} />
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Container className="pagination-container">
          <Pagination>
            <Pagination.First
              onClick={() => handlePageChange(1)}
              disabled={pageFromParams === 1}
            />
            <Pagination.Prev
              onClick={() => handlePageChange(Math.max(pageFromParams - 1, 1))}
              disabled={pageFromParams === 1}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === pageFromParams}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(Math.min(pageFromParams + 1, totalPages))}
              disabled={pageFromParams === totalPages}
            />
            <Pagination.Last
              onClick={() => handlePageChange(totalPages)}
              disabled={pageFromParams === totalPages}
            />
          </Pagination>
        </Container>
      )}
    </div>
  );
};

export default Collection;