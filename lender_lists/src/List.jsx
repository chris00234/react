

function List(props){
    const itemList = props.items;
    const listItems = itemList.map((fruit) => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)
    return (<><h3 className="list-category">{props.category}</h3><ol className="list-item">{listItems}</ol></>);
}
// function List(){
//     const fruits = [{id: 1, name: 'apple', calories: 95}, {id: 2, name: 'banana', calories: 105}, {id: 3, name: 'cherry', calories: 15}, {id: 4, name: 'date', calories: 30}, {id: 5, name: 'elderberry', calories: 45}];

//     fruits.sort((a, b) => a.calories > b.calories ? 1 : -1);
    
//     const lowCalFruits = fruits.filter((fruit) => fruit.calories < 50);
//     const listItems = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)
//     return (<ol>{listItems}</ol>);
// }
export default List;