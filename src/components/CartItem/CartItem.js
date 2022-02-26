
const CartItem = ({ title, price,x,rating,deleteItem}) => {
 
  return (
    <div className="border-b border-slate-600/25 p-4 flex justify-between items-start">
      <div className="flex flex-1">
        
        <div>
          <p className="text-lg">{title}</p>
          <p className="text-sm text-gray-500">{price}</p>
        </div>

      </div>
      <div className="flex items-top">
       
        <div className="ml-4">
          <button className="bg-red-300 text-red-800" onClick={() =>{ deleteItem({ title,price,x});}}>
            Remove
          </button>          
        </div>
      </div>
    </div>
  )
}

export default CartItem;