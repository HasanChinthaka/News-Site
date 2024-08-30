import axios from "axios";
import { useEffect, useState } from "react";
import errorimg from "../assets/error.png";
import loading from "../assets/loading.gif";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, language }) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=a2839d44b4fa44239579d0da69749d1d`)
                console.log(response);
                setArticles(response.data.articles)
            } catch (error) {
                console.error('Error fetching articles:', error);
                setError('An error occurred while fetching articles');
            } finally {
                setIsLoading(false);
            }
        }
        getArticles()
    }, [category])
    return (
        <div>
            <h2 className="text-center py-4" style={{ fontSize: 44, fontWeight: '600' }}>Latest <span className="badge bg-danger">News</span></h2>

            {isLoading ? (
                <div style={{position:'absolute', float:'right', right: '40%', textAlign:'center'}}>
                    <img src={loading} alt='loading...' />
                    <p>Loading articles...</p>
                </div>
            ) : error ? (
                <div style={{position:'absolute', float:'right', right: '40%', textAlign:'center'}}>
                    <img src={errorimg} alt='error' width={250} style={{opacity: 0.1}}/>
                    <p>{error}</p>
                </div>
            ) : (
                <ul>
                    {articles.map((news, index) => {
                        return <NewsItem
                            key={index}
                            title={news.title}
                            description={news.description}
                            src={news.urlToImage}
                            url={news.url}
                            publishedAt={news.publishedAt}
                            author={news.author}
                        />
                    })}
                </ul>
            )
            }
        </div>
    )
}

export default NewsBoard