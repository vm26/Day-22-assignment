import React,{useState} from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";
import CartModal from "./components/CartModal/CartModal";
import CartItem from "./components/CartItem/CartItem";
function App() {
  const [showModal, setShowModal] = useState(false);
   const [showCartModal, setShowCartModal] = useState(false);
  const[cartItems,setCartItems]=useState([]);
  const[isdisabled,setisdis]=useState(false);
  const[isdisabled1,setisdis1]=useState(false);
  const[isdisabled2,setisdis2]=useState(false);
  const[isdisabled3,setisdis3]=useState(false);
  const[isdisabled4,setisdis4]=useState(false);
  const[isdisabled5,setisdis5]=useState(false);

  
  const addToCart=(item)=>{
        let p=item.props;   
    let name=Object.keys(p).filter(f=>p[f]===false);   
setCartItems((oldvalue)=>{
  let updated=false;
  const newList=oldvalue.map((d)=> {      
    if(d.title===item.title && d.price===item.price){        
    updated=true;
    }
    return {...d}
  })
  
  if(!updated){
    let x='set'+name[0];
    console.log(x);
    if(x==='setisdis')
    setisdis(true); 
    else if(x==='setisdis1')  
    setisdis1(true); 
    else if(x==='setisdis2')  
    {setisdis2(true);
    setisdis5(true)}
    else if(x==='setisdis3')  
    setisdis3(true); 
    else if(x==='setisdis4')  
    setisdis4(true); 
    else if(x==='setisdis5')  
    {setisdis2(true);
      setisdis5(true)} 
   newList.push({...item,x})
  }
return newList;
});
  }

const deleteCartItem = (item) => {
  console.log(item);
  setCartItems((oldCartItems) => {
    const result = oldCartItems.filter(d => {
      if(d.title === item.title && d.price===item.price) {
        if(item.x==='setisdis')
    setisdis(false); 
    else if(item.x==='setisdis1')  
    setisdis1(false); 
    else if(item.x==='setisdis2')  
    {setisdis2(false);
      setisdis5(false);} 
    else if(item.x==='setisdis3')  
    setisdis3(false); 
    else if(item.x==='setisdis4')  
    setisdis4(false); 
    else if(item.x==='setisdis5')  
    {setisdis2(false);
      setisdis5(false);} 
        return false;
        
      }
      return true;
    })

    return result;
  })
}
  


  return (
    <div >
    <Header 
    cartListItems={cartItems}  
    onCartClick={() => setShowCartModal(true)} 
    onShopClick={() => setShowModal(true)}
    onOtherClick={()=>setShowModal(false)}/>
    <Modal open={showModal} onClose={()=>{setShowModal(false)}}>  
    
    <div className="mt-1 mb-1 hover:bg-neutral-300 ">
            <button className='p-2  mr-2 ' onClick={()=>{setShowModal(false)}}>All Products</button>
            </div>
            <div>
                <div className="border-b border-black"></div>
            </div>
           
            <div className='mt-1 mb-1 hover:bg-neutral-300'>
           <button  className='p-2  mr-2' onClick={()=>{setShowModal(false)}}>Popular Items</button>
           </div>
           <div className='mt-1 mb-1 hover:bg-neutral-300'>
           <button className='p-2  mr-2'  onClick={()=>{setShowModal(false)}}>New Arrivals</button>
           </div>
      </Modal>
    <CartModal showFooter open={showCartModal} onClose={()=>{setShowCartModal(false)} }> 
    {
          cartItems.length ? (
                <div>
                  <h4>List of Items</h4>
                  <ul>
                    {
                      cartItems.map((d, index) => {
                        return <li key={index}>
                          <CartItem
                            title={d.title}
                            price={d.price}
                            x={d.x} 
                            rating={d.rating}                        
                            deleteItem={deleteCartItem}   
                          />
                          </li>
                      })
                    }
                  </ul>
                </div>
              ) : (
                <div className='text-center p-4'>
                  <h1 className='text-lg'>Continue Shopping!</h1>
                </div>
              )

              }       
            
    </CartModal>
    <Main onOtherClick={()=>setShowModal(false)}/>      
    <div className=' flex flex-wrap mt-20 mb-20  justify-center ml-30 mr-30' onClick={()=>setShowModal(false)}>
    <Card title='Fancy Product' newprice='$40.00-$80.00' bname='View Options'  />
    <Card title='Sale Item' oldprice='$20.00' newprice='$18.00' rating='y' bname='Add to Cart' sale='y' onAdd={addToCart} isdis={isdisabled}  />
    <Card title='Special Item' oldprice='$50.00' newprice='$25.00' bname='Add to Cart' sale='y' onAdd={addToCart} isdis1={isdisabled1}/>
    <Card title='Popular Item' newprice='$40.00' rating='y'bname='Add to Cart' onAdd={addToCart} isdis2={isdisabled2}/>
    <Card title='Sale Item' oldprice='$50.00' newprice='$25.00'bname='Add to Cart' sale='y' onAdd={addToCart} isdis3={isdisabled3}/>
    <Card title='Fancy Product' newprice='$120.00 - $280.00' bname='View Options'/>
    <Card title='Special Item' oldprice='$20.00' newprice='$18.00' rating='y'bname='Add to Cart' sale='y' onAdd={addToCart} isdis4={isdisabled4}/> 
    <Card title='Popular Item'  newprice='$40.00' rating='y'bname='Add to Cart' onAdd={addToCart} isdis5={isdisabled5}/>
    
   </div>
   <Footer/>
    </div>
  );
}


export default App;
