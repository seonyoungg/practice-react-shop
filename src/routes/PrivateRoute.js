import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import ProductDetail from '../page/ProductDetail';

const PrivateRoute = ({ authenticate }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticate === false) {
      navigate("/login");
    }
  }, [authenticate, navigate]); // authenticate나 navigate가 바뀔 때마다 실행

  if (authenticate === false) {
    return null; // 인증되지 않은 경우 아무것도 렌더링하지 않음
  }

  return <ProductDetail />;
};

export default PrivateRoute;
