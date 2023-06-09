// import React from 'react'
// import { useSelector } from 'react-redux'

// const Cart = () => {

//     <>
//     <div>
//         <div>
            
//         </div>
//     </div>
//     </>
//   )
// }

// export default Cart

import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { addCart, delCart } from '../redux/action'
import { NavLink } from 'react-router-dom'



const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }

    const ShowCart = () => {
        return(
            state.map((product)=>{
                return(
                    <div className="row my-5 justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px"/>
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} X ${product.price} = ${(product.qty * product.price).toFixed(2)}
                            </p>
                            <button className='btn btn-outline-dark me-4' onClick={()=>handleDel(product)}> <i className='fa fa-minus'></i></button>
                            <button className='btn btn-outline-dark me-4' onClick={()=>handleAdd(product)}> <i className='fa fa-plus'></i></button>
                        </div>
                        <Button/>
                    </div>

                )
                

            })
            
        );
    }

    const EmptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5" style={{height:'70vh'}}>
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    }

    const Button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length !== 0 ? <ShowCart/> : <EmptyCart/>}
        </>
    )
}

export default Cart