import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let { title, description, imgurl,newsurl,author,date } = this.props;
        return ( 

            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imgurl?"https://gumlet.assettype.com/bloombergquint%2F2023-08%2Fc2d8b348-45df-414d-a25c-1577ad910a15%2Fsolen_feyissa_UWVJaDvXW_c_unsplash.jpg?rect=0%2C373%2C5051%2C2652&w=1200&auto=format%2Ccompress&ogImage=true":imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}....</p>
                        <p className='card-text'><small className='text-muted'> By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div></div>
        )
    }
}

export default NewsItem