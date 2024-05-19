import List from './List';

function App(){
    const fruits = [{id: 1, name: 'apple', calories: 95}, {id: 2, name: 'banana', calories: 105}, {id: 3, name: 'cherry', calories: 15}, {id: 4, name: 'date', calories: 30}, {id: 5, name: 'elderberry', calories: 45}];

    return (<List items={fruits} category="Fruits"/>);
}

export default App;