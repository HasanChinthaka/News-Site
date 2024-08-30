import image from '../assets/news.png'
const NewsItem = ({ title, description, src, url, publishedAt, author }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={src ? src : image} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title mb-3">{title.slice(0, 50)}</h5>
                <p className="card-text mb-4">{description ? description.slice(0, 90) : " "}</p>
                <p className="card-subtitle mb-1 text-light">- {author ? author.slice(0, 90) : "Annonymous"} -</p>
                <p className="card-subtitle mb-4 text-light">{publishedAt ? publishedAt.slice(0, 90) : " "}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem