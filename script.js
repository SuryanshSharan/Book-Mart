document.querySelector('form').addEventListener('submit', function(event) {
    
    event.preventDefault();
  
   
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;
  
    
    if (username === '' || password === '') {
      alert('Both fields are required!');
    } else {
      window.location.href = 'addtocart.html';
    }
  });
  