import React from 'react'
import { useNavigate } from 'react-router';

const ProductCard = ({item}) => {

 // 숫자 포맷 함수
  const numberFormat = (price) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(price);
  };

    const navigate = useNavigate();
    const showDetail = ()=>{
        navigate(`/products/${item.id}`);
    };

  return (
    <div className='product-item' onClick={showDetail}>
        <div className='img-box'>
            <img src={item?.img}/>
        </div>
        <div class="text">
            <p className='subtitle'>{item.choice==true?'Conscious choice':''}</p>
            <p className='title'>{item?.title}</p>
            <p className='price'>{numberFormat(item?.price)}</p>
            <p className='new'>{item.new==true?'신제품':''}</p>
        </div>
    </div>
  )
}

export default ProductCard
