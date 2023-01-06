import logo from "./logo.svg";
import "./App.css";
import React from "react";

/* function AppTwo() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                />
                
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
} */

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: null,
            author: null
        };
    }

    componentDidMount() {
        fetch("https://api.quotable.io/random?tags=famous-quotes")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    quote: result.content,
                    author: result.author
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log("Deu ruim...");
                /* this.setState({
                    isLoaded: true,
                    error
                }); */
            }
        )
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        {this.state.quote}
                    </p>
                    
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo"
                    />

                    <p>
                        By {this.state.author}
                    </p>
                    
                    <a
                        className="App-link"
                        href="https://i.pinimg.com/280x280_RS/27/c3/08/27c308c4cede24737bba6381e6023913.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        O Tárek É Super Demais
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
