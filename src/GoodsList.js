export class GoodsList extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(newProps){
        console.log("com");
    }

    render(){  
        /*
        this.props.list =  [
            {name :"商品1"，price:12},
            {name :"商品1"，price:12},
            {name :"商品1"，price:12},
            {name :"商品1"，price:12}
        ]
        */
        // let newList = []

        let newList = this.props.list.map((goods,i)=><li key={i}>商品名：{goods.name}<br/>价格：{goods.price}</li>);

        // newList = [<li></li>,]
        return (
            <ul>
                {newList}
            </ul>
        )
    }
}

var list  = [1,2,3,4];
var newList = list.map((value)=>{
    return value+1;
});
// newList === [1,1,1,1]
// var abc = () => {}

// var abc = txt => {
//     console.log(txt)
// }

// var abc  =  txt => console.log(txt)