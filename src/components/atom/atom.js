import React, {Component} from 'react';
import "./atom.css";

class Atom extends Component {
    render() {
        return (
            <div>
                <div className='container my-atom d-flex justify-content-around '>
                    <div className='th-atom'>
                        <img
                            className='th-atom-img'
                            src='https://static.tildacdn.com/tild6134-3436-4561-b238-663537343431/Frame_2.svg'/>
                        <p className="th-text">1700</p>
                        <p className="th-text1">И БОЛЕЕ ДОЛЬЩИКОВ</p>

                    </div>
                    <div className='th-atom'>
                        <img
                            className='th-atom-img'
                            src='https://static.tildacdn.com/tild3234-3061-4935-b939-333264343438/Frame_4.svg'/>
                        <p className="th-text">№1</p>
                        <p className="th-text1">ВЫБОР ГОДА 2019</p>
                    </div>
                    <div className='th-atom'>
                        <img
                            className='th-atom-img'
                            src='https://static.tildacdn.com/tild3661-6166-4133-b632-353033343638/Frame_3.svg'/>
                        <p className="th-text">7</p>
                        <p className="th-text1">ЛЕТ НА РЫНКЕ</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Atom;
