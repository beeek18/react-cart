import './style.scss';

import { Count } from '../Count';
import { ButtonDelete } from '../ButtonDelete';

import { priceFormatter } from '../../utils/priceFormatter';

export const Product = ({
  title,
  priceTotal,
  img,
  deleteProduct,
  id,
  count,
  increase,
  decrease,
  changeValue
}) => {

  return (
    <section className="product">

      <div className="product__img">
        <img src={img} alt={title} />
      </div>

      <div className="product__title">
        {title}
      </div>

      <div className="product__count">
        <Count
          count={count}
          increase={increase}
          decrease={decrease}
          id={id}
          changeValue={changeValue}
        />
      </div>

      <div className="product__price">
        ${priceFormatter(priceTotal)}
      </div>

      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={id} />
      </div>

    </section>
  )
}
