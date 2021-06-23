import React,{Component,Fragment, PureComponent} from 'react';
import axios from "axios"
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {value:'',childValue:'',todos:[] }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) =>{
            debugger;
            this.setState({todos: res.data})
        })
    }
    render() { 
        return (<Fragment>
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
            <button onClick={
                ()=>{
                    this.setState({childValue:this.state.value})
                }
            }> Submit </button>
            <Child val={this.state.childValue}/>
        </Fragment>  );
    }
}
 
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {output: props.val }
    }
    render() { 
        console.log("render is called")
        return (  
            <Fragment>
                <h1>{this.props.val}</h1>
            </Fragment>
        );
    }
}

 
export default Footer;