import React from 'react';
import CardContainer from './CardContainer';
import { useAllCollectionQuery } from '../redux/homeApiSlice';
import './Heading.css';
import { Container, Pagination, Spinner, Alert, Form } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromParams = parseInt(searchParams.get('page')) || 1;
  const sort = searchParams.get('sort') || '';
  const cateogry=searchParams.get('cateogry')||'';
  const type=searchParams.get('type')||'';
  const { data, error, isLoading } = useAllCollectionQuery({ page: pageFromParams, sort ,cateogry,type});
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

  const handleCateogryChange=(newCateogry)=>{
    setSearchParams((prev)=>{
      const params = new URLSearchParams(prev);
      params.set('cateogry', newCateogry);
      params.set('page',1);
      params.delete('type');
      return params;
    })
  }
  const handleTypeChange=(newType)=>{
    setSearchParams((prev)=>{
      const params = new URLSearchParams(prev);
      params.set('type',newType);
      params.set('page',1);
      return params;
    })
  }

  

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '35px' }}>
        <h2 className="font">
          ALL COLLECTIONS
        </h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>

          <Form.Select 
            style={{ width: '200px' }}
            value={sort}
            onChange={handleSortChange}
          >
            <option value="">Sort by: Relevant</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </Form.Select>
        </div>
      </div>
      <div>
        <button onClick={()=>{handleCateogryChange("Men")}}>Men</button>
        <button onClick={()=>{handleCateogryChange("Women")}}>women</button>
        <button onClick={()=>{handleCateogryChange("Kids")}}>kids</button>
      </div>
      <div>
        <button onClick={()=>{handleTypeChange("BottomWear")}}>BottomWear</button>
        <button onClick={()=>{handleTypeChange("TopWear")}}>TopWear</button>
        <button onClick={()=>{handleTypeChange("WinterWear")}}>WinterWear</button>
     
      </div>
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && <Alert variant="danger">Something went wrong.</Alert>}

      {!isLoading && !error && data && <CardContainer data={data.results} />}

      {/* Pagination Section */}
      <Container className="d-flex justify-content-center mt-4">
        <Pagination size="md">
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
    </div>
  );
};

export default Collection;