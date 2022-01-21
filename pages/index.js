import Head from 'next/head'
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Coin from './Coin'
export default function Home() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
   axios.get(
     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false'
   ).then(res=>{
      setCoins(res.data);
      
   }).catch(error=>console.log(error));
  }, [])

  const handleChange=e=>{
      setSearch(e.target.value);
  };

  const filterCoin= coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className='coin-app'>
    <div className='coin-search'>
      
      <form>
        <input
          className='input'
          type='text'
          onChange={handleChange}
          placeholder='Search Your Currency...'
        />
      </form>
    </div>
    <div className='coins'>
  
    {filterCoin.map(coin=>{
      return(
        <Coin
        key={coin.id}
        name={coin.name}
        curr_price={coin.current_price}
        symbol={coin.symbol}
        image={coin.image}
        priceChange={coin.price_change_percentage_24h}
        high_24h={coin.high_24h}
        low_24h={coin.low_24h}
        />

      )
    })}
     </div>
    </div>
  )
}
