import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Quiz from './componants/quizApp/quiz';
import axios from 'axios'


function App() {

  // const [name, setName] = useState('khi')
  // const [count, setCount] = useState(0)

  // useEffect(()=>{
  //   console.log("running");
  // },[])

  // useEffect(()=>{
  //   console.log("depend on count");
  // },[count])

// // ************* DATA Fetching

const [productData,setProductData] = useState([])

const getData = ()=>{
  axios.get('https://fakestoreapi.com/products').then(res=>setProductData(res.data)).catch(err=>console.log(err))
}
useEffect(()=>{
getData()
},[])

console.log(productData);

  return (

//     <div className="App">
//       <h1 onClick={()=>setName('khi pak')}>
//         Hello {name}
//       </h1>
//       <button onClick={()=>setCount(prev=>prev+1)}>
//         Count {count}
//       </button>
    
// {/* <Quiz /> */}
//     </div>
// **************** DATA FETCHING
<div>
{
  productData.map((e,i)=>{
    return <div key={i}>
      <img src={e.image} width={100} />
      <hr />
      <h1>
        {
          e.title
        }
      </h1>
      <p>
        {
          e.description
        }
      </p>
      <button>Buy | {e.price}</button>
    </div>
  })
}
</div>
  );
  
}

export default App;

// useEffect ===> jab componant unmount hota hy tb yh chalta hy , ya jb state me change ho tb b run hota hy
// redux ==> to make global state
// fragment ==> is k 2 method hain 1) <></> 2) <React.fragment></React.fragment>
// yeh humain error sy bachata hy 2 method key ka props accept krta hy
// nullish, turnery, && , if else

// axios ==> fetching k lye react me axios use hota hy 
// yarn add axios
// ********************************* API Methods **********************************
// get, put, delete, post

// **************************** ASYNC AWAIT and TRY CATCH **************************************
// const getData = async ()=>{
//   try{
//     const response = axios.get("")
//     console.log(response.data);
//   }catch(err){
// console.log(err);
//   }
// }