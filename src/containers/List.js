import React, { Component } from 'react'
import Card from '../components/Card/Card'

export default class List extends Component {

    async componentDidMount() {
        const res = await fetch('../../assets/data.json');
        const resJSON = await res.json();
        console.log(resJSON);
    }

    render() {
        return (
            <div>
                <Card/>
            </div>
        )
    }
}
