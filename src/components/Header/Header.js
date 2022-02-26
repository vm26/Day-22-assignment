function Header(props){
    
    return(
    <div className="p-3 flex justify-between bg-slate-100" >
    <div className='pl-40 flex justify-between'>
        <button className='mr-10 text-lg' onClick={props.onOtherClick}>Start Bootstrap</button>
        <button className='mr-5' onClick={props.onOtherClick}>Home</button>
        <button className='mr-5 text-neutral-500' onClick={props.onOtherClick}>About</button>
        <button className='mr-5 text-neutral-500' onClick={props.onShopClick}>Shop<span className="text-xs"> &#9660;</span></button>
    </div>
    <div className='pr-40' onClick={props.onOtherClick}>
        <button className='bg-stone-50 rounded-md border-1 border-gray-700 pr-10 pl-10 pt-2 pb-2' onClick={props.onCartClick}>        
        Cart 
        <span className="m-2 p-1 rounded-full bg-black text-white"> {
            props.cartListItems.length ? `${props.cartListItems.length}` : 0
          } </span>
        </button>
    </div>
    </div>
    );
}
export default Header;