function handleQuantityChange1st(action){
    const quantityElement=document.getElementById("quantity-text1st");
    let quantity =parseInt( quantityElement.innerText);
   if(quantity == 1 && action == 'dec'){
    alert("Quantity can not be less then 1");
   return;
    }
   else if(quantity == 6 && action == 'inc'){
    alert("Quantity can not be greater then 6");
   return;
    }
    quantityElement.innerText = action == 'inc'? ++quantity : --quantity;
 }

 function handleQuantityChange2nd(action){
    const quantityElement=document.getElementById("quantity-text2nd");
    let quantity =parseInt( quantityElement.innerText);
   if(quantity == 1 && action == 'dec'){
    alert("Quantity can not be less then 1");
   return;
    }
   else if(quantity == 6 && action == 'inc'){
    alert("Quantity can not be greater then 6");
   return;
    }
    quantityElement.innerText = action == 'inc'? ++quantity : --quantity;
    }



