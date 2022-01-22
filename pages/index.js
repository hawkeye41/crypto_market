import Head from 'next/head'
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import {FaArrowDown, FaArrowUp} from "react-icons/fa";
import {MdSearch} from "react-icons/md"
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Coin from './Coin'
import Navbar from './Navbar'
import Footer from './Footer'

let apiResult

export default function Home() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
   axios.get(
     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false'
   ).then((res) => {
    setCoins(res.data);
  })
  .catch((error) => console.log(error));
}, []);

  const handleChange=e=>{
      setSearch(e.target.value);
  };
  const filterCoin= coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  const handleClick = () => {
    setCoins((coins) =>
      [...coins].sort((a, b) => {
        return a.current_price > b.current_price
          ? 1
          : b.current_price > a.current_price
          ? -1
          : 0;
      })
    );
  };

  const handleClickDec = () => {
    setCoins((coins) =>
      [...coins].sort((a, b) => {
        return a.current_price > b.current_price
          ? -1
          : b.current_price > a.current_price
          ? 1
          : 0;
      })
    );
  };

  return (
    <div className='coin-app'>
      {/* <Navbar/> */}
      <div className='header'>
         <h1>CryptoMarket</h1>
      </div>
    <div className='search'>
      <form>
       <MdSearch size="1.3em" id='search-btn'/>
        <input
        
          className='input'
          type='text'
          onChange={handleChange}
          placeholder='Search Your Currency...' 
        
        />
        
      </form>
      <div className='sorting'>
        <button onClick={handleClick} id="up"><FaArrowUp/></button>
        <div>sorting</div>
        <button onClick={handleClickDec} id="down"><FaArrowDown/></button>
       </div>
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
     {/* <Footer/> */}
    </div>
  )
}
