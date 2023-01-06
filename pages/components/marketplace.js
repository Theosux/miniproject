import styles from "../../css_components/market.module.css";
import { useState } from 'react';

const loadMarket = () => {
        const [count, setCount] = useState(0);
        const [countt, setCountt] = useState(0);
        const [counttt, setCounttt] = useState(0);
        const [countttt, setCountttt] = useState(0);
        const [counttttt, setCounttttt] = useState(0);
      
        function handleClick() {
          setCount(count + 50);
          setCountt(countt + 1);
        }
        function handleClickk() {
          setCount(count + 100);
          setCounttt(counttt + 1);
        }
        function handleClickkk() {
          setCount(count + 1000);
          setCountttt(countttt + 1);
        }
        function handleMyDick() {
          setCount(count + 1000);
          setCounttttt(counttttt + 1);
        }
        function emptyCart() {
          setCount(0);
          setCountt(0);
          setCounttt(0);
          setCountttt(0);
          setCounttttt(0);
        }

    return (
    <div>
        <div className={styles.casete}>
            <button onClick={handleClick} className={styles.caseta}> Random ID 50$ <br/> {countt}</button>
            <button onClick={handleClickk} className={styles.caseta}>Random Wallet 100$ <br/> {counttt}</button>
            <button onClick={handleClickkk} className={styles.caseta}>Random Crypto Acc 1000$ <br/> {countttt}</button>
            <button onClick={handleMyDick} className={styles.caseta}>Random Laptop 1000$ <br/> {counttttt}</button>
        </div>
        <div className={styles.price}>
        Price is {count} $.
        </div>
        <button onClick={emptyCart}  >Empty Cart</button>
    </div>)
}
export default loadMarket;