import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";
import Atom from "../atom/atom";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselSelf/>
                <Atom/>
            </div>
        );
    }
}

export default App;