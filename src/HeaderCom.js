const {Component} = React;

export class HeaderCom extends Component{
    constructor(){
        super();
    }

    render(){
        return <header><h2>{this.props.text}</h2></header>
    }
}