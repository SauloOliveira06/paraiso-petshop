import ThemeContext from '../../context/ThemeContext';
import './home.scss';

const Home = () => (
    <ThemeContext.Consumer>
        {(value: { isDarkTheme: any }) => {
            const { isDarkTheme } = value
            return (
                <>
                    {!isDarkTheme ? (
                        <div className="main-home-container">
                            <div className="home-container-light">
                                <h1 className="home-heading-light">Home Light</h1>
                            </div>
                        </div>
                    ) : (
                        <div className="main-home-container">
                            <div className="home-container-dark">
                                <h1 className="home-heading-dark">Home Dark</h1>
                            </div>
                        </div>
                    )}
                </>
            )
        }}
    </ThemeContext.Consumer>
)

export default Home