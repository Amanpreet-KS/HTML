<script>
  fetch('Animation - 1689358729706.json')
    .then(response => response.json())
    .then(data => {
      const gifList = document.getElementById('gif-list');

      // Loop through the JSON data and create HTML elements
      data.forEach(item => {
        const li = document.createElement('li');
        const gifImage = document.createElement('img');
        const description = document.createElement('p');

        gifImage.src = item.gifUrl;
        gifImage.alt = item.description;

        description.textContent = item.description;

        li.appendChild(gifImage);
        li.appendChild(description);

        gifList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
</script>