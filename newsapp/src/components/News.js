import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:"in",
    pageSize:8,
    category:"general"
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }


  constructor(){
    super(); 
    console.log("hello i am a constructor from news component!");
    this.state={
      articles:[],
      loading:true,
      page:1
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517adc93777d4e57939c59fa3b481d30&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData= await data.json();
    console.log(data);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
  });
  }
  async updateNews(){
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517adc93777d4e57939c59fa3b481d30&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData= await data.json();
      console.log(data);

      this.setState({
        page: this.state.page +1,
        articles : parsedData.articles,
        loading:false
      })
  }

  handleNextClick=async()=>{
    console.log("Next");

      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517adc93777d4e57939c59fa3b481d30&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data = await fetch(url);
      // let parsedData= await data.json();
      // console.log(data);

      // this.setState({
      //   page: this.state.page +1,
      //   articles : parsedData.articles,
      //   loading:false
      // })
      this.setState({page:this.state.page+1});
      this.updateNews();
    
  }

  handlePrevClick=async()=>{
    console.log("Previous");
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517adc93777d4e57939c59fa3b481d30&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData= await data.json();
    // console.log(data);

    // this.setState({
    //   page: this.state.page -1,
    //   articles : parsedData.articles,
    //   loading:false
    // })
    this.setState({page:this.state.page-1});
    this.updateNews();
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' >NewsMonkey - top news</h1>
        {this.state.loading && <Spinner className="text-center"/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4 my-3' key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45)+"...":""} description={element.description?element.description.slice(0,88)+"...":""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
          
          
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
