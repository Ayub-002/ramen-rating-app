function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = '';
  
    ramens.forEach(ramen => {
      const img = document.createElement('img');
      img.src = "https://moringa.instructure.com/courses/967/files/517801/preview";
      img.src = "https://moringa.instructure.com/courses/967/files/517800/preview";
      img.src = "https://moringa.instructure.com/courses/967/files/517798/preview";
      img.src = "https://moringa.instructure.com/courses/967/files/517797/preview";
      img.classList.add('ramen-img');
      img.dataset.id = ramen.id;
      img.addEventListener('click', handleClick);
      ramenMenu.appendChild(img);
    });
  }
  function handleClick(event) {
    const ramenId = event.target.dataset.id;
    const ramen = ramens.find(r => r.id == ramenId);
  
    const ramenName = document.getElementById('ramen-name');
    const ramenRestaurant = document.getElementById('ramen-restaurant');
    const ramenRating = document.getElementById('ramen-rating');
    const ramenComment = document.getElementById('ramen-comment');
  
    ramenName.textContent = `Name: ${ramen.name}`;
    ramenRestaurant.textContent = `Restaurant: ${ramen.restaurant}`;
    ramenRating.textContent = `Rating: ${ramen.rating}`;
    ramenComment.textContent = `Comment: ${ramen.comment}`;
  }
  function addSubmitListener() {
    const form = document.getElementById('add-ramen-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const ramenName = document.getElementById('ramen-name-input').value;
      const ramenRestaurant = document.getElementById('ramen-restaurant-input').value;
      const ramenRating = parseInt(document.getElementById('ramen-rating-input').value);
      const ramenComment = document.getElementById('ramen-comment-input').value;
  
      const newRamen = {
        id: ramens.length + 1,
        name: ramenName,
        restaurant: ramenRestaurant,
        rating: ramenRating,
        comment: ramenComment,
        image: img.src = "https://moringa.instructure.com/courses/967/files/517797/preview"
      };
  
      ramens.push(newRamen); 
      displayRamens();
    });
  }
  function main() {
    displayRamens();
    addSubmitListener();
  }
  document.addEventListener('DOMContentLoaded', main);
  function main() {
    displayRamens();
    addSubmitListener();
  
    if (ramens.length > 0) {
      const firstRamenImage = document.querySelector('.ramen-img');
      if (firstRamenImage) firstRamenImage.click();
  }
  function handleDelete() {
    const ramenId = document.getElementById('ramen-name').dataset.id;
    const ramenIndex = ramens.findIndex(r => r.id == ramenId);
    if (ramenIndex !== -1) {
      ramens.splice(ramenIndex, 1);
      displayRamens();
      document.getElementById('ramen-detail').innerHTML = '';
    }
  }
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete Ramen';
  deleteButton.addEventListener('click', handleDelete);
  document.getElementById('ramen-detail').appendChild(deleteButton);
}