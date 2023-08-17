document.getElementById('fetchPosts').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts') // verileri almak için kullanıldı
      .then(response => response.json())
      .then(posts => {
        displayData(posts);
      })
      .catch(error => { // olası bir hatayı yakalamak için eklendi
        console.error('Hata:', error); 
      });
  });

  document.getElementById('fetchComments').addEventListener('click', () => {
    const postId = 1; // Post ID'sine ulaşım
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(comments => {
        displayData(comments);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  });

  document.getElementById('fetchUsers').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users') // kullanıcılara ulaşım
      .then(response => response.json())
      .then(users => {
        displayData(users);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  });
 
  document.getElementById('clear').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Sonuçları temizler
  });

  function displayData(data) { // verilerin sayfada görüntülenmesini sağlar
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = JSON.stringify(data, null, 2);
  }