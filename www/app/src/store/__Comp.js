import React from 'react';
import { Context } from '../context';

class Comp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.context.subscribePosts((posts) => {
            this.setState({posts});
        });  
    }

    add() {
        this.context.addPost('post novo');
    }

    remove() {
        this.context.removePost();
    }

    render() {
        return <div><h1>{this.state.posts}</h1><button onClick={this.add.bind(this)}>Add</button><button onClick={this.remove.bind(this)}>Remove</button></div>;
    }
}

Comp.contextType = Context;

export default Comp;