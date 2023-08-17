
let post = [];
let comment = [];
let user = [];

document.querySelector('fetchPosts').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts') // verileri almak için kullanıldı
      .then(response => response.json())
      .then(posts => {
      post = posts;
      displayData(post)
      })
      .catch(error => { // olası bir hatayı yakalamak için eklendi
        console.error('Hata:', error); 
      });
  });

  document.querySelector('fetchComments').addEventListener('click', () => {
    const postId = 1; // Post ID'sine ulaşım
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(comments => {
        comment = comments;
        displayData(comment);
        
      })
    
      .catch(error => {
        console.error('Hata:', error);
      });
  });

  document.querySelector('fetchUsers').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users') // kullanıcılara ulaşım
      .then(response => response.json())
      .then(users => {
        user = users;
        displayData(user);
      
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  });
 
  document.querySelector('clear').addEventListener('click', () => {
    const resultDiv = document.querySelector('result');
    resultDiv.innerHTML = ''; // Sonuçları temizler
  });

  function displayData(data) { // verilerin sayfada görüntülenmesini sağlar
    const resultDiv = document.querySelector('result');
    resultDiv.innerHTML = JSON.stringify(data, null, 2);
    data.array.forEach(e => {
    });
  };




