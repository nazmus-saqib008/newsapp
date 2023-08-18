import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const NewsBox = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [totalResults, setTotalResults] = useState(0);




    const updatePage = async () => {
        // props.setProgress(0);
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=aa4d8103ba2f4436abb39dc64a15a00b&pageSize=15&page=${page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        // props.setProgress(100);
    }


    useEffect(() => {


        return () => {
            updatePage();
        }
    }, [])

    const handlePrevClick = async () => {
        setLoading(true);
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=aa4d8103ba2f4436abb39dc64a15a00b&pageSize=15&page=${page}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // setState({
        //     articles: parsedData.articles,
        //     page: page - 1,
        //     loading: false
        // });

        updatePage();
        setPage(page - 1)
    }

    const handleNextClick = async () => {

        setLoading(true);
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=aa4d8103ba2f4436abb39dc64a15a00b&pageSize=15&page=${page}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // setState({
        //     page: page + 1,
        //     articles: parsedData.articles,
        //     loading: false
        // });

        updatePage();
        setPage(page + 1);
    }

    const fetchMoreData = async () => {
        // setState({ page: page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=aa4d8103ba2f4436abb39dc64a15a00b&pageSize=15&page=${page+1}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        
        setTotalResults(parsedData.totalresults);
        setLoading(false);

    };


    return (
        <>
            <div className="container my-3">

                <h3>News Daily - Top Headlines</h3>
                {/* {loading && <Loading />} */}

                {/* <div className="row"> */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    // hasMore={articles.totalresults > articles.page*15}
                    loader={!loading && <Loading />}
                >
                    <div className="row">
                        {!loading && articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 35) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} NewsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
                {/* </div> */}
            </div >
        </>
    )
}

NewsBox.defaultProps = {
    country: 'in',
    category: 'general'
}

NewsBox.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}

export default NewsBox;
