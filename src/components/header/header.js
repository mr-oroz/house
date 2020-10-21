import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <header className=''>
                    <nav>
                        <ul>
                            <li>О нас</li>
                            <li>Обьекты</li>
                            <li>Коммерция</li>
                            <li>Новости</li>
                            <li>Клиентам</li>
                            <li>Оплата</li>
                            <li>Контакты</li>
                        </ul>
                        <ul>
                            <li>0(555) 555-555</li>
                        </ul>
                        <div>
                            <img alt='Logo Elite house'
                                 src="https://static.tildacdn.com/tild3638-3239-4339-a436-636666313131/elite-house-logo-whi.png"/>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default App;