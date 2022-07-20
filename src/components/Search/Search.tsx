import search from '../../assets/icons/search.svg';
import './Search.scss';

const Search = () => {
    return (
        <>
            <form className="search-form">
                <input type="search" placeholder="O que seu pet precisa?" className="search-input" />
                <button type="submit" className="search-button">
                    <img src={search} alt="procurar" className='icon-search' />
                </button>
            </form>
        </>
    )
}

export default Search;