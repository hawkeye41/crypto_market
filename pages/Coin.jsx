
const Coin = 
({ name,
    curr_price,
    symbol,
    image,
    priceChange,
    high_24h,
    low_24h
}
) => {
    return ( <>
        <div className="cointainer">
        <div className="element">
            <img src={image}/>
            <p>{name} <p className="symbol">({symbol})</p></p>
        </div>
        <div className="details">
            
            <div className="div2">

            <p>₹{curr_price}</p>          
            {
                priceChange <0? (
                    <p className="loss">{priceChange.toFixed(2)}%</p>
                ):(
                    <p className="gain">{priceChange.toFixed(2)}%</p>
                )
            }
              </div>
              <div className="div1">
                <p>24H high  {high_24h}</p>
                <p>{low_24h}</p>
            </div>
        </div>
        </div>


    </>
     );
}
 
export default Coin;