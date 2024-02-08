import Navbar from "../app/ui/navbar";

async function getSportsNews() {
    try {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`);

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }
        return res.json();
        
    } catch (error) {
        console.error('Error fetching sports news:', error);
        throw error; // rethrow the error to be caught by the caller
    }
}


export default async function NewsSection() {
    const news = await getSportsNews();
    const filteredNews = news.articles.filter(article => article.title !== "[Removed]");

    return (
        <div className="bg-white p-6">
            <h2 className="text-2xl font-bold mb-4">Latest News</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredNews.map((article, index) => (
                    <div className="flex flex-col bg-gray-100 p-4 rounded-lg" key={index}>
                        <div className="flex justify-center">
                            <img
                                alt={article.title}
                                className="w-32 h-32 object-cover mb-4"
                                src={article.urlToImage}
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2" style={{ wordWrap: 'break-word' }}>{article.title}</h3>
                            <p className="text-gray-600 mb-4" style={{ maxWidth: '20rem', margin: '0 auto', maxHeight: '7.5rem', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '5', WebkitBoxOrient: 'vertical' }}>
                                {article.description}
                            </p>
                            <p className="text-gray-500 text-sm">{article.publishedAt}</p>
                            <a className="text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank" href={article.url}>
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

