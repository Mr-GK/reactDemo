
export class Box extends React.Component {
    constructor(){
        super();
    }

    render(){
        
        return (
            <div className="box">
                这是一个box组件
            </div>
        )
    }
}

// 实例化期
// beforCreate
// created
// 加载期
// beforMount
// mounted
// 更新期
// beforUpdate
// updated
// 卸载期
// beforDestroy
// Destroyed


// 加载期
// componentWillMount
// componentDidMount

// 更新期
// componentWillReceiveProps //接收的props发生变化时触发
// shouldComponentUpdate  //该函数必须拥有返回值 值为false时可阻止组件状态/属性发生变化
// componentWillUpdate
// componentDidUpdate

// 卸载期
// componentWillUnmount


export class Message extends React.Component {
    constructor(){
        super ();
        this.clickFun = this.clickFun.bind(this);
        
        //组件的状态
        this.state = {
            name : "zhuiszhu",
            age : 18
        }
    }
    
    clickFun(){
        // console.log(`clickFun函数被触发了`)
        // this.state.age ++;
        // this.forceUpdate();  强制更新视图
        
        //修改组件状态（自带更新视图功能）
        // this.setState({
            //     age : this.state.age + 1
            // })
            
            // console.log(this.state.age);
        }
        
        render(){
            // abc();
            return (
                <div className="message">
                <h3>姓名：{this.state.name}</h3>    
                <p>年龄：{this.state.age}</p>
                <a href="javascript:;" onClick={this.clickFun}>年龄+1</a>
            </div>
        )
    }
}

// export default xxx;
// export {Box}


// mvvm

//  v -- vm -- m


var obj = {
    age : 18,
    name : "zhuiszhu",
}

var obj = new Object({})