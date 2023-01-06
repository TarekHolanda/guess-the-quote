import logo from "./logo.svg";
import "./App.css";
import React from "react";

/*
$(document).ready(function () {
    console.log("jQuery is ready!");

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.quotable.io/random?tags=famous-quotes",
        // "url": "https://api.quotable.io/tags",
        "method": "GET",
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});

function AppTwo() {
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
}
*/

class Ad extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
            ad_filled: false,
        };
    } */

    /* shouldComponentUpdate(nextProps) {
        console.log(nextProps)
        return this.props.currentPath !== nextProps.currentPath;
    } */

    /* componentDidUpdate () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    } */

    componentDidMount() {
        console.log("Render...");
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.onload = () => {
            window.adsbygoogle = window.adsbygoogle || [];
            window.adsbygoogle.push({
                google_ad_client: "ca-pub-5032006407674168",
                google_ad_slot: 5032006407
            });
        };
        document.body.appendChild(script);
    }

    render () {
        return (
            <ins
                className="adsbygoogle"
                style={{ display: "block", width: "728px", height: "90px" }}
                data-ad-client="ca-pub-5032006407674168"
                data-ad-slot="5032006407"
                data-ad-format="auto"
                data-full-width-responsive="true"
            >
            </ins>
        );
        /* return (
            <div className="ad">
                <ins
                    className="adsbygoogle"
                    style={{ display: "inline-block", width: "640px", height: "128px" }}
                    data-ad-client="ca-pub-5032006407674168"
                    data-ad-slot="5032006407"
                    data-ad-format="auto"
                />
            </div>
        ); */
    }
}

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
                // console.log(result);
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

                    <Ad />
                </header>
            </div>
        );
    }
}

export default App;
