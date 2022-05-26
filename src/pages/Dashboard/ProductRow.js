
const ProductRow = ({product, index,setItem}) => {
    const {name, stock, price,img} = product;

    
    return (
       
             <tr className='font-semibold'>
        <th>{index+1}</th>
        <th><img src={img} className="w-[50px]" alt="" /></th>
        <td>{name}</td>
        <td>{stock}</td>
        <td>{price}</td>
        <td><label htmlFor="confirm-modal" onClick={()=> setItem(product)} className='btn btn-sm bg-red-600 text-white border-0 modal-button'> Remove</label></td>

     
      </tr>

      
    );
};

export default ProductRow;