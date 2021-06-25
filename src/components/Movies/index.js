import React from 'react';
import styles from "../Topbar/Topbar.module.css"
class Movies extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            original:[] ,
            movies: [],
            loader: true,
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){

                fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
                .then(response => response.json())
                .then((res)=> {
                    this.setState({
                        // res is an object
                        original:res.Search,
                        movies: res.Search,
                        loader: false,
                    })
                })
                
            }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() { 
        const {loader, movies}= this.state
        let search_val ="";
        return (  
            <div>

                <div className={styles.topbar}>
                    <h2> Hooked</h2>
                </div>

               <div className={styles.search}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    <button className={styles.search_btn} onClick={
                        ()=>{
    
                            console.log(this.state.movies)
                            this.state.value.length==0?this.setState({movies:this.state.original}):this.setState({movies:this.state.movies.filter(({Title}) => Title===this.state.value)})
                        }
                    }> SEARCH </button>
               </div>
                <div className={styles.movie_container}>
                {loader?<h1>Loading.....</h1>: (movies.length && movies.map(({Title,Poster,Year,imdbID})=> 
                        <div className={styles.ind_movie}>
                            <h3 className={styles.name}>{Title} </h3>
                            <div className={styles.img_wrap}>
                                <img src={Poster} className={styles.image}/>
                                <h4 className={styles.imdb}>imdbID is : {imdbID} </h4>
                            </div>
                            <h4 className={styles.year}>{Year}</h4>
                        </div>

                    ))}

                </div>
            </div>
        );
    }
}

export default Movies;