import React, { useEffect, useState } from 'react';
import {Products} from './components/products';
import {Cart} from './components/cart';
import './App.css';
import 'rbx/index.css'
import {Button, Container, Title,Message} from 'rbx';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//firebase
const firebaseConfig = {
  apiKey: "AIzaSyDyFFvrphsMciZPJjncnkCLFUrKSl9JkI0",
  authDomain: "shopping-cart-f5746.firebaseapp.com",
  databaseURL: "https://shopping-cart-f5746.firebaseio.com",
  projectId: "shopping-cart-f5746",
  storageBucket: "",
  messagingSenderId: "7818256059",
  appId: "1:7818256059:web:5a094e834d9287de01939e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const SignIn = () => (
  <StyledFirebaseAuth
    uiConfig={uiConfig}
    firebaseAuth={firebase.auth()}
  />
);

 const useSelection = () => {
  	const [selected, setSelected] = useState([]);
  	const addToCart = (x) => {
    	setSelected([x].concat(selected));
  };
  return [ selected, addToCart ];
};

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const [cartItems, setCartItems] = useState([]);
  const [sort,setSort] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      const handleData = add_new =>{
      	if(add_new.val()){
      		let result = {}
      		Object.keys(json).map(x=>{result[x] = Object.assign(json[x],add_new.val()[x])});
      		setData(json);
      	}
      };
      db.on('value',handleData,error=>alert(error));
      return () => {db.off('value',handleData)};
    };
    fetchProducts();
  }, []);

    useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

   const handleAddToCart = function (e,product,productSize){
   	if(!productSize){
   		alert('Please Select A Size');
   		return('Please Select A Size')
   		}
   	let InCart=false;
   	let cart=[];
   	cartItems.map(item=>{
   		if((item.product.sku===product.sku)&&(item.size===productSize)){
   			InCart = true;
   			item.count++;
	   	}
	   	cart.push(item)
   	});
   	if(!InCart){
   		cart.push({product,count:1,size:productSize});
   	}
   	setCartItems(cart);
   };

   const handleRemoveFromCart = function(e,product,productSize){
   	let cart=[];
   	cartItems.map(item=>{
   		if((item.product.sku===product.sku)&&(item.size===productSize)){
   			item.count--;
   		}
   		if(item.count>0){
			cart.push(item);
   		}
   	})
   	setCartItems(cart);
   }


  return (
    <Container>
      <Title> Shopping Cart Application</Title>
      <hr />
      <React.Fragment>
      {user ? <Message color="info">
      <Message.Header>
      Welcome, {user.displayName}
      <Button primary onClick={() => firebase.auth().signOut()}>
      	Log Out
      </Button>
      </Message.Header>
      </Message> : <SignIn/>}

      </React.Fragment>
      <div className = "row">
      <div className = "col-md-8">
      <hr />
      <Products products = {products} handleAddToCart={handleAddToCart}/>
      </div>
      <div className="col-md-4">
      <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart}/>
      </div>
      </div>
    </Container>
  );
};

export default App;
 