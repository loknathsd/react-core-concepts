import React, {useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const products = [
  {name : 'Photoshop',price:'$90.55'},
  {name:'Illustrator', price:'$60.99'},
  {name:'PDF Reader' , price :'$6.88'}
]

 const friends = ['kamal','jamal','tamal','bamal','rimon','timon','jimon']

 const personInfo = [
  {name:'amin',job:'Businessman'},
  {name:'Tamim',job:'Cricketer'}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
            <Counter></Counter>
          <Users></Users>
           <ul>
             {
               friends.map(name=> <li>{name}</li>)
             }
             {
               products.map(pd => <li>{pd.name}</li> )
             }
             
           </ul>

           {
             products.map(product =><Product product = {product}></Product>)
           }
        
      
      </header>
    </div>
  );
}
/* <Product product = {products[0]}></Product>


        <Product product ={products[1]}></Product>

        <Person name ="Rakib" job ='actor'></Person>
        <Person name ={products[0].name}></Person> */

        /* <Person info = {personInfo[0]}></Person> */
        /* <Person></Person> */

          //useState nd count button increase decrase
function Counter(){
  const [count , setCount] = useState(10);
  const increaseButton =()=>setCount(count+1)
  // const decreaseButton =() =>setCount(count-1)
  // {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count - 1)}>Decrease</button>
      <button onClick={increaseButton}>Increase</button>
    </div>
  )
}
  function Users(){
    const [users , setUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res =>res.json())
      .then(data => setUsers(data))
    },[])
    return(
      <div>
        <h1>dynamic name </h1>
       <ul>
       {
          users.map(user => <li>{user.title}</li>)
          // console.log(users.title)
        }
       </ul>
        
      </div>
    )
  }



// useEffect method
// function Users (){
//   const [users , setUsers] = useState([])

//  useEffect (()=> {
//    console.log('calling effect')
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(res =>res.json())
//     .then(data => setUsers(data))
    
//   },[])
//   return(
//     <div>
//       <h1>users length : {users.length}</h1>
//       <h2>Users Name</h2>
//       <ul>
//         {
//           users.map(user=> <li>{user.name}</li> )
//         }
//       </ul>
//     </div>
//   )
// }

function Product(props){
  const productStyle ={
    border : '1px solid gay',
    borderRadius :'10px',
    backgroundColor : 'red',
    width : '250px',
    height : '200px',
    marginBottom :'20px'
  }
  const {name,price} = props.product
  return(
    <div style = {productStyle}>
      <h3>Name : {name}</h3>
      <h4>{price}</h4>
      <button>Buy now</button>
    </div>
  )
} 



// function Person(props){
//   const style = {
//     border : '1px solid red',
//     margin :'10px'
//   }
//   // const {name,price} = props.info.info
//   console.log(props.info.name)
//   return(
//     <div style={style}>
//       <h2>Name : {props.name} </h2>
//       <h4>Job : {props.job}</h4>
      
//     </div>
//   )
// }

export default App;
