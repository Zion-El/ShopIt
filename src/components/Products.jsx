import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
      let componentMounted = true;
    
      const getProducts = async () => {
        setLoading(true);
        try {
          const response = await fetch("https://fakestoreapi.com/products");
    
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
    
          const jsonData = await response.json();
          setData(jsonData);
          setFilter(jsonData);
          setError(null);
        } catch (error) {
          setError(error.message);
        } finally {
          if (componentMounted) {
            setLoading(false);
          }
        }
      };
    
      getProducts();
    
      return () => {
        componentMounted = false;
      };
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
        
    }

    const filterProduct = (cat) =>{
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList)
    }

    const ShowProducts = () =>{
        return(
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product)=>{
                    return (

                            <div className="col-md-3 mb-4" key={product.id}>
                                <div className="card h-100 text-center p-4"  style={{width: 18 +'rem'}}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height='250px'/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)} ...</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
                                            Buy Now
                                        </Link>
                                    </div>
                                </div>
                            </div>

                    )
                })}
            </>

        )
        
    }
  return (
    <div className='products'>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr />
                </div>
            </div>
            {error ? <div className='row justify-content-center'>
                
                <h2 className='text-center'><i class="fa fa-2x fa-exclamation-triangle" aria-hidden="true"></i> Opps! An Error Occured</h2>
                <p className='text-center'>Couldn't Load Page Content, Check Your Internet Connection</p>
                <button className="btn btn-outline-dark" onClick={()=>window.location.reload()}>Refresh</button>
            </div>:
            <div className="row justify-content-center">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>}
        </div>
    </div>
  )
}

export default Products