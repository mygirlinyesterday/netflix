import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";


const Home = () => {

    return (
        <div>
            <Main></Main>
            <Row title='UpComing' fetchURL={requests.requestsUpcoming} />
            {/* <Row title='Poppular' fetchURL={requests.requestsPoppular} />
            <Row title='Trending' fetchURL={requests.requestsTrending} />
            <Row title='Toprate' fetchURL={requests.requestsToprate} /> */}
        </div>
    )
}

export default Home