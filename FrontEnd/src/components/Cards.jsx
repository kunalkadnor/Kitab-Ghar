import React from 'react'

 function Cards({item}) {
  return (
   <>

   <div className='mt-10 my-10'>
   <div className="card p-10 w-85 shadow-xl hover:scale-90 duration-200">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]">₹{item.price}</div> 
      <div className="px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
   </div>
   
   </>
  )
}

export default Cards;
