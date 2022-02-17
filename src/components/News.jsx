import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);

    const capitalize = word => word.at(0).toUpperCase() + word.slice(1, word.length);



    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setPage(page + 1);
    }
    const updateNews = async () => {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
        setLoading(true);
        props.setProgress(25);
        let data = await fetch(url);
        props.setProgress(70);
        let parseData = await data.json();
        props.setProgress(100);
        setArticles(parseData.articles);
        setLoading(false);
        setTotalResults(parseData.totalResults);
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        document.title = `${capitalize(props.category)} - The News Center`;
        updateNews();
    }, []);
    return (
        <>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                {/* To spin a spinner when api is fetching */}
                {loading && <Spinner />}
                {/* News Card */}
                <div className="grid grid-cols-3 gap-x-1 ml-5">
                    {!(loading) && articles.map(element => {
                        return (
                            <NewsItem key={element.title} imageUrl={element.urlToImage} title={element.title} desc={element.description} details={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                        );
                    })}
                </div>
            </InfiniteScroll>
        </>
    );


}
