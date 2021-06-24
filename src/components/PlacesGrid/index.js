import React,{Fragment, useState,useEffect} from 'react';
import axios from 'axios';

const PlacesGrid = () => {
    // const [ count,updateCount] =useState(0)
    // return (
    //     <>
    //     <h1> {count} </h1>
    //     <button onClick={()=> updateCount(count<=0?count:count-1)}>decrement</button>
    //     <button onClick={()=> updateCount(count>=10?count:count+1)}>increment</button>

    //     </>
    // )

    const [products,setProducts] = useState([])

    useEffect(()=>{
        axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((err) => alert(err))
    },[])


    return(
        <>
         {products.length && products.map(({name,preview,description,brand,price}) => 
            <>
            <h1>{name}</h1>
            <img src={preview} width="300"/>
            <p>{description}</p>
            <h3>{brand}</h3>
            <h5>{price}</h5>

            </>
        )}
        </>
    )
}
 
export default PlacesGrid;