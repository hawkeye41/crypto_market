import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col} from 'react-bootstrap';
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
        <div className="container">
           <Row className='row'>

            <Col lg={1}>
            <img src={image}/>
            </Col>
            <Col>
            <p className="name">{name} </p>
            </Col>

            <Col lg={2}>
            <p className="symbol">({symbol})</p>
            </Col>
            <Col>
            <p className="price">₹{curr_price.toLocaleString()}</p>          
            </Col>
            <Col lg={2}>
            {
                priceChange <0? (
                    <p className="loss">{priceChange.toFixed(2)}% ↓</p>
                    ):(
                        <p className="gain">{priceChange.toFixed(2)}% ↑</p>
                        )
                    }
            </Col>
                    <Col lg={2}>
                <p className="high">24H High:- <span>₹{high_24h.toLocaleString()}</span></p>
                </Col>
                <Col lg={2}>
                <p className="low">24H Low:- <span>₹{low_24h.toLocaleString()}</span></p>
                    </Col>
             
                    </Row>
        </div>
    </>
     );
}
 
export default Coin;