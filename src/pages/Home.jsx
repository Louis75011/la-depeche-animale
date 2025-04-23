import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { articles } from '../data/articles';
import '../styles/Home.scss';

const Home = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const articlesPerPage = 3;

    const pagesVisited = pageNumber * articlesPerPage;
    const pageCount = Math.ceil(articles.length / articlesPerPage);

    const displayArticles = articles
        .slice(pagesVisited, pagesVisited + articlesPerPage)
        .map((article) => (
            <article className='article-card' key={article.id}>
                <img src={article.image} alt={article.title} />
                <div>
                    <h2>{article.title}</h2>
                    <p>{article.excerpt}</p>
                    <p><em>Par {article.author}</em></p>
                </div>
            </article>
        ));

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <div className='article-list'>
                {displayArticles}
            </div>
            <ReactPaginate
                previousLabel={'Précédent'}
                nextLabel={'Suivant'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'pagination'}
                previousLinkClassName={'pagination__link'}
                nextLinkClassName={'pagination__link'}
                disabledClassName={'pagination__link--disabled'}
                activeClassName={'pagination__link--active'}
            />
        </>
    );
};

export default Home;
