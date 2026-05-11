
const form = document.getElementById('orderForm');
const success = document.getElementById('successMessage');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const order = {
    id: Date.now(),
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    service: document.getElementById('service').value,
    details: document.getElementById('details').value,
    createdAt: new Date().toLocaleString()
  };

  let orders = JSON.parse(localStorage.getItem('click_orders')) || [];
  orders.push(order);

  localStorage.setItem('click_orders', JSON.stringify(orders));

  success.classList.remove('hidden');
  form.reset();

  setTimeout(()=>{
    success.classList.add('hidden');
  },3000);
});
