import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselSelf/>
            </div>
        );
    }
}

export default App;