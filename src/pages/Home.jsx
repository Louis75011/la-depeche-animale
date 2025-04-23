import { articles } from '../data/articles';

const Home = () => (
    <div>
        {articles.map((article) => (
            <article key={article.id}>
                <img src={article.image} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <p><em>Par {article.author}</em></p>
            </article>
        ))}
    </div>
);

export default Home;
