import React, { Component } from 'react';
import API from '../../api/api';
import './home.css';

class Home extends Component{
    state = {
        data: []
    }
    initData = props => {
        console.log(1)
    }
    componentWillMount(){
        console.log(2)
    }
    getRecord = async event => {
        try{
          let result = await API.getRecord({version: 'default'});
          console.log(result);
        }catch(err){
          console.error(err);
        }
    }
    render() {
        return (
            <main className="home">
                <section className="pro-list-con">
                <ul className="list-ul">
                    <li onClick={this.getRecord}>home111111这是最后最后的希望了</li>
                </ul>
                </section>
            </main>
        );
    }
}
export default Home;