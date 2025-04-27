import React from 'react';
import CardContainer from './CardContainer';
import { useAllCollectionQuery } from '../redux/homeApiSlice';
import './collection.css'
import {
  Container,
  Pagination,
  Spinner,
  Alert,
  Form
} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import './Collection.css'; // Create this CSS file for additional styles

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromParams = parseInt(searchParams.get('page')) || 1;
  const sort = searchParams.get('sort') || '';
  const category = searchParams.get('category') || '';
  const type = searchParams.get('type') || '';
  const { data, error, isLoading } = useAllCollectionQuery({
    page: pageFromParams,
    sort,
    category,
    type
  });
  const totalPages = data ? Math.ceil(data.count / 10) : 1;

  const handlePageChange = (newPage) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set('page', newPage);
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

  const handleCategoryChange = (newCategory) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set('category', newCategory);
      params.set('page', '1');
      params.delete('type');
      return params;
    });
  };

  const handleTypeChange = (newType) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set('type', newType);
      params.set('page', '1');
      return params;
    });
  };

  return (
    <div className="collection-container">
      {/* Header Section */}
      <div className="collection-header">
        <h2 className="collection-title">ALL COLLECTIONS</h2>
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

      {/* Content Loading */}
      {isLoading && (
        <div className="loading-container">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && (
        <Alert variant="danger" className="error-alert">
          Something went wrong.
        </Alert>
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