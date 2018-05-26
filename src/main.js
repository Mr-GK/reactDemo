import {render} from "react-dom";
import {Message,Box} from "./Box";
import {HeaderCom} from "./HeaderCom";
import {GoodsList} from "./GoodsList";
import {formDemo} from "./formDemo";

var name = "react";

class Goods extends React.Component{
    constructor(props){
        super(props)
        this.addGoods = this.addGoods.bind(this);
        this.addCount = this.addCount.bind(this);

        this.state = {
            list : [
                {name : "商品1",price:19},
                {name : "商品2",price:19},
                {name : "商品3",price:19},
                {name : "商品4",price:19}
            ],
            count : 0
        }
    }

    addGoods(){
        let newList = this.state.list;
        newList.push({name:"新的商品",price:998})

        this.setState({
            list:newList
        })
    }

    componentWillMount(){
        console.log("组件加载前")
    }

    componentDidMount(){
        console.log("组件加载后")
    }

    

    shouldComponentUpdate(newProps,newState){

        console.log("shouldComponentUpdate")
        return true
    }

    componentWillUpdate(newProps,newState){
        // console.log(`更新前的count值为${this.state.count}`);
        // console.log(`更新前的形参state的count值为${state.count}`);
    }
    
    componentDidUpdate(oldProps,oldState){
        // console.log(`更新后的count值为${this.state.count}`);
        // console.log(`更新后的形参newState的count值为${newState.count}`);
    }

    addCount(){
        this.setState({
            count : this.state.count +1
        })
    }

    render(){
        return (
            <div>
                <a href="javascript:;" onClick={this.addGoods}>添加商品</a><br/>
                <a href="javascript:;" onClick={this.addCount}>+1</a>
                <GoodsList list={this.state.list} />
            </div>
        )
    }

}


render(<Goods/>,document.getElementById("app"),function(){
    console.log("渲染完毕")
})


// babel-preset-react   babel-preset-env