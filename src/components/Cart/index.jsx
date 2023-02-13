import React from "react";
import axios from "axios";

import { CartHeader } from "../CartHeader";
import { CartFooter } from "../CartFooter";
import { Product } from "../Product";

export const Cart = () => {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState({
    price: 0,
    count: 0
  })

  React.useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
      count: cart.reduce((prev, curr) => prev + curr.count, 0)
    })
  }, [cart])

  React.useEffect(() => {

    axios
      .get("https://63d0153a10982404378ccc77.mockapi.io/cart")
      .then(({ data }) => {
        setCart(data);
        setTotal({
          price: cart.reduce((prev, curr) => { return prev + curr.priceTotal }, 0),
          count: cart.reduce((prev, curr) => { return prev + curr.count }, 0)
        })
      })
      .catch((err) => {
        console.log(err);
        alert("ERROR TO GET DATA");
      });
  }, []);

  const deleteProduct = (id) => {
    setCart((cart) => cart.filter((item) => id !== item.id));
  };

  const increase = (id) => {
    setCart((cart) =>
      cart.map((item) => {
        if (item.id === id) {
          const newCount = item.count + 1;

          return {
            ...item,
            count: newCount,
            priceTotal: newCount * item.price,
          };
        }
        return item;
      })
    );
  };

  const decrease = (id) => {
    setCart((cart) =>
      cart.map((item) => {
        if (item.id === id) {
          const newCount = item.count - 1 > 1 ? item.count - 1 : 1;

          return {
            ...item,
            count: newCount,
            priceTotal: newCount * item.price,
          };
        }
        return item;
      })
    );
  };

  const changeValue = (id, value) => {
    setCart((cart) =>
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: value,
            priceTotal: value * item.price,
          };
        }
        return item;
      })
    );
  };


  return (
    <section className="cart">
      <CartHeader />

      {cart.map((item) => (<Product key={item.id}  {...item}
        deleteProduct={deleteProduct}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
      ))}

      <CartFooter {...total} />
    </section>
  );
};
