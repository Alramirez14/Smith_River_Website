//to redirect for map page

const mappage = document.querySelector('.mapbutton');
mappage.addEventListener('click', (event) => {
    event.preventDefault();  // Prevents the default anchor behavior (navigation)
    document.location.href = 'no-sidebar.html';
});

