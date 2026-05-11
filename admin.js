
const orders = JSON.parse(localStorage.getItem('click_orders')) || [];
const table = document.getElementById('ordersTable');

if(orders.length === 0){
  table.innerHTML = '<tr><td colspan="6">لا توجد طلبات حالياً</td></tr>';
}else{
  orders.reverse().forEach(order=>{
    table.innerHTML += `
      <tr>
        <td>${order.name}</td>
        <td>${order.phone}</td>
        <td>${order.service}</td>
        <td>${order.address}</td>
        <td>${order.details}</td>
        <td>${order.createdAt}</td>
      </tr>
    `;
  });
}
