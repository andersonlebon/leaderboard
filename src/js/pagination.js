const paginationUl = document.querySelector('.pagination');
let current = 1;
function pages(pages, paginationUl) {
  paginationUl.innerHTML = '';
  for (let i = 1; i <= pages; i += 1) {
    const paginationLi = document.createElement('li');
    paginationLi.className =
      'p-item rounded-circle text-center d-flex justify-content-center';
    paginationLi.id = i;
    if (current === paginationLi.id) {
      paginationLi.classList.add('bg-dark');
      paginationLi.classList.add('p-active');
    } else {
      paginationLi.classList.remove('active');
    }
    // eslint-disable-next-line no-loop-func
    paginationLi.addEventListener('click', () => {
      current = paginationLi.id;
    });
    paginationLi.innerHTML = `<a class='p-link' href='#'>${i}
    </a>`;
    paginationUl.appendChild(paginationLi);
  }
}

function paginate(currentPage = 1, rows, array) {
  currentPage -= 1;
  const loopStart = rows * currentPage;
  const paginatedItems = array.slice(loopStart, loopStart + rows);
  return paginatedItems;
}
