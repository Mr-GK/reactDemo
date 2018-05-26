export class formDemo extends React.Component{
    constructor(){
        super();
        this.changeName = this.changeName.bind(this);
        this.changePwd = this.changePwd.bind(this);

        this.state = {
            username : "damn",
            password : "123"
        }
    }

    changeName(event){

    }

    changePwd(event){

    }

    render(){
        return (<div>
            <form action="">
                <input type="text" value=""/>
                <input type="password" value=""/>
                <input type="submit" onClick={}/>
            </form>
        </div>)
    }
}