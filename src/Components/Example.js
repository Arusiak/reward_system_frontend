import React,{Component} from 'react';

class Example extends Component{

    state = {
        name: 'Arus',
        age: 14,
        arr: [
            12,
            'asds',
            true
        ],
        obj: {
            'key' : 'value'
        },
        type : false,
        loginError: null,


    }

    componentDidMount() {
        console.log('component did mount')
        this.setState({
           name : 'qwerty'
        });
    }

    componentDidUpdate() {
        console.log('component did update')
    }

    handleClick = (text) => {
        // console.log('click')
        this.setState({
            name : text
        });
    }

    handleChange = (e) => {
        // console.log(e)
        this.setState({
            name : e.target.value
        });
    }



    render(){
        return(
            <>
                <p>{this.state.name}</p>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <button onClick={() => this.handleClick('text')}>Click</button>

            </>
        );
    }
}

export default Example;