import './style.scss'

import { priceFormatter } from '../../utils/priceFormatter'

export const CartFooter = ({ count, price }) => {
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} units</div>
      <div className="cart-footer__price">${priceFormatter(price)}</div>
    </footer>
  )
}
