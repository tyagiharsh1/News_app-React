import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'



export class News extends Component {
    
      
    articles = [

        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }

    ]
    static defaultProps = {
        country:'in',
        pageSize:5,
        category:'general'
        

      }
      static propTypes = {
       country:PropTypes.string,
       pageSize:PropTypes.number,
       category:PropTypes.string

      }
    constructor() {
        super();
        console.log("Hello I am constructor from computer");
        this.state =
        {
            articles: this.articles,
            loading: false,
            page: 1
        }
    } async componentDidMount() {
        // this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae6fb00c1a3e42178348e05ff840cd70&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
        // this.props.setProgress(100)

    }
    handlepreviousclick = async () => {
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae6fb00c1a3e42178348e05ff840cd70&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1
        })
    }
    handlenextclick = async () => {
        console.log("next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae6fb00c1a3e42178348e05ff840cd70&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData);
            this.setState({
                articles: parseData.articles,
                page: this.state.page + 1
            })
        }

    }
    render() {
        return (
            <div className='container  my-3'>
                <h1 className='text-center' style={{margin:'35px 0px',marginTop:'90px'}}>NewsMonkey - Top Headlines</h1>
                
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                     })}


                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlepreviousclick}> &larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-secondary" onClick={this.handlenextclick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News