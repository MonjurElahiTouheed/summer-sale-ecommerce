let totalPrice = 0;
function priceAmount(target) {
   const priceElement = target.lastElementChild.lastElementChild.innerText;
   const priceText = priceElement.split(' ')[0];
   const productPrice = parseFloat(priceText);
   const totalPriceAmount = parseFloat(totalPrice) + productPrice;
   totalPrice = totalPriceAmount.toFixed(2);
   const totalPriceElement = document.getElementById('price');
   totalPriceElement.innerText = totalPrice + "TK";
   // discount
   const discountElement = document.getElementById('discount');
   const discountAmount = parseFloat(discountElement.innerText.split('TK')[0]);
   const discount = discountAmount.toFixed(2);
   // grandTotal
   const grandTotal = (totalPrice - discount).toFixed(2);
   const grandTotalElement = document.getElementById('grandTotal');
   grandTotalElement.innerText = grandTotal + 'TK';
   const couponBtn = document.getElementById('couponBtn');
   const purchaseBtn = document.getElementById('purchaseBtn');
   if (totalPrice > 0) {
      purchaseBtn.disabled = false;
   }
   if (totalPrice >= 200) {
      couponBtn.disabled = false;
   }

   const productNameElement = target.lastElementChild.childNodes;
   const productName = productNameElement[5].innerText;
   productEntry(productName);

   return totalPrice;
}

function productEntry(productName){
   const productEntryContainer = document.getElementById('productEntryContainer');
   const count = productEntryContainer.childElementCount;
   const p = document.createElement('p');
   p.innerHTML = `${count+1} ${productName}`;
   p.classList.add('mb-2')
   productEntryContainer.appendChild(p);
}

function couponCodeBtn() {
   const couponCode = document.getElementById('couponCode');
   const couponCodeField = document.getElementById('couponCodeField');
   couponCodeField.value = couponCode.innerText;
}

document.getElementById('couponBtn').addEventListener('click', function () {
   const totalPriceElement = document.getElementById('price');
   const totalPriceAmount = parseFloat(totalPriceElement.innerText.split('TK')[0]);
   const totalPrice = totalPriceAmount.toFixed(2);
   const discountElement = document.getElementById('discount');
   const grandTotalElement = document.getElementById('grandTotal');
   const couponCodeField = document.getElementById('couponCodeField');
   if (couponCodeField.value === 'SELL200') {
      discountElement.innerText = ((totalPrice * 20) / 100).toFixed(2) + 'TK';
      const discountAmount = parseFloat(discountElement.innerText.split('TK')[0]);
      const discount = discountAmount.toFixed(2);
      grandTotalElement.innerText = (totalPrice - discount).toFixed(2) + 'TK';
   }
})

document.getElementById('goHomeBtn').addEventListener('click', function(){
   window.location.href = 'https://monjurelahitouheed.github.io/summer-sale-ecommerce/';
})