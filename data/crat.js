
export let cart=[
   {
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2
   },
   {
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:3
   }
]

export function updateCartqunatity(){
   let cartquantity= 0;
          cart.forEach((item)=>{
            cartquantity+=item.quantity;
          })
          document.querySelector('.js-cart-quantity').innerHTML=cartquantity
          console.log(cartquantity)
 }

export function AddtoCart(productId, button){
   let matchingitem ;
      const productContainer= button.closest('.product-container');
      const select = productContainer.querySelector('select');
      let quant = Number(select.value);
  
  
      cart.forEach((item)=>{
         if(item.productId==productId){
            matchingitem= item;
          }
              
       })
     if(matchingitem){
      matchingitem.quantity+=quant;
       }
      else{
       cart.push({
       productId:productId,
       quantity:quant
            })
            
          }
         
          updateCartqunatity()

 }
 

 export function removeFromCart(productId){
   const newCart=[];

   cart.forEach((product)=>{
      if(product.productId!==productId){
         newCart.push(product);
      }
   })
   cart=newCart

 }