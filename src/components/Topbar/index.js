import React from 'react';

import { convertToUpper as Upper} from '../../utils/constant';

import styles from "./Topbar.module.css"



// Here we have created the count and plus minus and
// saw the state management in the class topbar


// class Topbar extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name: "vansh",
//             age: "21",
//             count:0
//         }
//     }
//     updateData= ()=>{
//         this.setState({name:"Tushar"},()=>{// delay hota hai 30ms
//             console.log(" state-name has been changed buddy to the ", this.state.name)
//         })
//     }
//     render(){
//         return (
//         <div>
//             <h1 className={styles.heading}>{this.state.name+ " "+ this.state.age}</h1>
//             <h1 className={styles.heading}>{this.props.name+ " "+ this.props.age}</h1>
//              {// this props is coming from the parent App.js, two differnt thing: state and props
//              }
//             <button onClick={this.updateData}>
//             click
//         </button>

//         <h1 className={styles.heading}>{this.state.count}</h1>

//         <button className={styles.btn} onClick={ ()=>{
//             this.state.count>0? this.setState({count:--this.state.count}):this.setState({count:0})}
//         }> minus</button>

//         <button className={styles.btn} onClick={ ()=> {
//             this.state.count<10? this.setState({count:++this.state.count}):this.setState({count:10})}
//         }> plus</button>
//         </div>
       
//         )
//     }
// }

// const Topbar = ({name,age}) => {
//     return <h1 className={styles.heading}>{name + age}</h1>;
// }

//ccc shortcut

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0,
            loader: true,
            products: []
         }

         console.log("Parent constructor")
       
    }
    componentDidMount(){
        console.log("Parent DidMount")
        fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(response => response.json())
        .then((res)=> {
            this.setState({
                products: res,
                loader: false,
            })
        })
    }
    render() { 
        console.log("Parent render")
        const {loader, products}= this.state
        
        return ( 
            <div className={styles.main_container}>
                {/*calling child with two parameters in the props: count and updateCount*/}

                {/*updateCount= { ()=> this.setState({count: ++this.state.count})*/}

                {loader?<h1>Loading.....</h1>: (products.length && products.map(({name,preview,price})=> 
                    <div className={styles.ind_prod}>

                        <img src={preview} className={styles.image}/>
                        <h3>{name}</h3>
                        <h5>{price}</h5>

                    </div>
                
                ))}

                <Child count={this.state.count}
                 updateCount= { (number)=> this.setState({count: number})
                }

                 />
                
            </div>
         );
    }
}

class Child extends Topbar {
    constructor(props) {
        super(props);
        this.state = {  }

        console.log("child constructor")
    }
    componentDidMount(){
        console.log("child DidMount")
    }
    render() { 
        console.log("child Render")
        return (  
            <div>
                {/* <h1>{this.props.count}</h1> */}
                {/*<button onClick={this.props.updateCount}>click to increment</button>*/}
                {/* <button onClick={() => this.props.updateCount(123)}>click to increment</button> */}
            </div>
        );
    }
}
 
export default Topbar;