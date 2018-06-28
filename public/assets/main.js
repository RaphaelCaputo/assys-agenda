$(document).ready(function() {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});

const table = document.querySelector('#contact-table tbody');

const searchBar = document.forms['search-name'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const contacts = table.getElementsByTagName('tr');
    Array.from(contacts).forEach(function(contact) {
        const name = contact.textContent;
        if(name.toLowerCase().indexOf(term) != -1) {
            contact.style.display = '';
        } else {
            contact.style.display = 'none';
        }

    })
})

// eye pencil