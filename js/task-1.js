const categories = document.querySelector('#categories').children.length;
const arrayTitlesCategories = document.querySelectorAll('h2');
console.log(`Number of categories: ${categories}`);
arrayTitlesCategories.forEach(title => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});
