import React,{useEffect, useState} from 'react';
import axios from 'axios';
const Products = () => {
    const [products,setProducts]=useState([])

    let count=0

    // component did Mount method--used to make api calls
    useEffect(()=>{
        axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((err)=> alert(err))

        console.log(`did mount bola pehle hum aae--${++count}`)
    },[])


    //will acts as both component did mount and component did update
    useEffect(()=>{
        console.log(`did mount and did update bola pehle hum aae--${++count}`)
    })

    //componet unmount 
    useEffect(()=>{
        return ()=>{

        }
    },[])

    return ( 
        
        <>
        {console.log(`jsx bola pehle hum aae--${++count}`)}
        {
           
            products.length&&products.map(({name,price})=>
            <>
            <h1>{name}</h1>
            <h3>{price}</h3>
            </>
            )
        }
        </>
     );
}
 
export default Products;