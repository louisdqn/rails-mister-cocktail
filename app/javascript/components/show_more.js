const card = document.querySelector(".details");
const plus = document.querySelector(".plus");
const openCard = document.querySelector(".addose");

const showMore = () => {
       if (card) {
    plus.forEach((plus) => {
      plus.addEventListener('click', (event) => {
        event.currentTarget.nextElementSibling.classList.toggle('d-none');
      });
    });
  }
    };


export { showMore };


