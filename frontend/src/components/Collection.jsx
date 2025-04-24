import React, { useState } from 'react';
import CardContainer from './CardContainer';
import { useAllCollectionQuery } from '../redux/homeApiSlice';
import './Heading.css';
import { Container, Pagination, Spinner, Alert } from 'react-bootstrap';

const Collection = () => {
  const [pageNum, setPageNum] = useState(1);
  const { data, error, isLoading } = useAllCollectionQuery(pageNum);

  const totalPages = data ? Math.ceil(data.count / 10) : 1; // Replace 10 with your actual page size

  return (
    <div>
      <h2 className='font' style={{ margin: '35px' }}>
        ALL COLLECTIONS
      </h2>

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
            onClick={() => setPageNum(1)}
            disabled={pageNum === 1}
          />
          <Pagination.Prev
            onClick={() => setPageNum(prev => Math.max(prev - 1, 1))}
            disabled={pageNum === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === pageNum}
              onClick={() => setPageNum(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => setPageNum(prev => Math.min(prev + 1, totalPages))}
            disabled={pageNum === totalPages}
          />
          <Pagination.Last
            onClick={() => setPageNum(totalPages)}
            disabled={pageNum === totalPages}
          />
        </Pagination>
      </Container>
    </div>
  );
};

export default Collection;
