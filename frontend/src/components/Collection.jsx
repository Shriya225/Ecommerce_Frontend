import React from 'react';
import CardContainer from './CardContainer';
import { useAllCollectionQuery } from '../redux/homeApiSlice';
import './Heading.css';
import { Container, Pagination, Spinner, Alert } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromParams = parseInt(searchParams.get('page')) || 1;
  const sort = searchParams.get('sort') || '';
  const { data, error, isLoading } = useAllCollectionQuery({ page: pageFromParams, sort });
  const totalPages = data ? Math.ceil(data.count / 10) : 1;

  const handlePageChange = (newPage) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set('page', newPage);
      return params;
    });
  };

  return (
    <div>
      <h2 className="font" style={{ margin: '35px' }}>
        ALL COLLECTIONS
      </h2>
      <div>
        <button onClick={() => {
          setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            params.set('sort', 'asc');
            params.set('page', '1');
            return params;
          });
        }}>
          Asc
        </button>
        <button onClick={() => {
          setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            params.set('sort', 'desc');
            params.set('page', '1');
            return params;
          });
        }}>
          Desc
        </button>
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
