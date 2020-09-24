import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import Api from '../../../services/api';
import './Search.css';


const Search = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState({ data: null, loading: false, error: false });

  useEffect(() => {
    if (!term) {
      return;
    }

    setResult({
      data: null,
      loading: true,
      error: false,
    });

    Api.getShipments({ id: term })
      .then(res => setResult({
        data: res.data[0] || null,
        loading: false,
        error: false,
      }))
      .catch(err => setResult({
        data: null,
        loading: false,
        error: err,
      }));
  }, [term]);

  return (
    <div className="Search">
      <Input.Search
        placeholder="Search shipment by ID"
        size="large"
        allowClear
        loading={result.loading}
        onSearch={value => setTerm(value)}
        style={{ width: 300 }}
      />
      <div className="Search-result">
        {result.data && (
          <Link to={`/details/${result.data.id}`}>#{result.data.id} - {result.data.name}</Link>
        )}
        {(term && !result.loading && !result.data) && 'Nothing found'}
      </div>
    </div>
  );
};

export default Search;
