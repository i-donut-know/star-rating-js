const ratingItemList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.from(ratingItemList);

ratingItemsArray.forEach(item => {
    item.addEventListener('click', () => {
        item.parentNode.dataset.totalValue = item.dataset.itemValue;
    });
});