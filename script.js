// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

updateCategoryIndicator('All');

// Newsletter Form
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the email input value
    const email = document.querySelector('#newsletter-form input[type="email"]').value;

    // Validate the email format (simple validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Display a success message
    alert('You have successfully signed up for our newsletter!');
});


// Dropdown function on 'More'
function showDropdown() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
}

function hideDropdown() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
}

function showAllItems() {
    document.querySelectorAll('.items-container .item').forEach(item => {
        item.style.display = 'block';
    });

    // Remove the 'active' class from all category links
    document.querySelectorAll('.category-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add the 'active' class only to the 'All' category link
    document.querySelector('.category-link[href="#all"]').classList.add('active');

    updateCategoryHeader('Our Menu');
    updateCategoryIndicator('All');
}


function showCategory(category) {
    document.querySelectorAll('.category-link').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelectorAll('.items-container .item').forEach(item => {
        item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
    });

    document.querySelector(`.category-link[href="#${category}"]`).classList.add('active');

    let categoryDisplayName = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    if (category === 'sushi-sashimi') {
        categoryDisplayName = 'Sushi/Sashimi';
    } else {
        categoryDisplayName = categoryDisplayName.replace('/', ' ');
    }

    document.getElementById('category-indicator').textContent = categoryDisplayName;
}


function updateCategoryHeader(headerText) {
    document.getElementById('category-header').textContent = headerText;
}

function updateCategoryIndicator(indicatorText) {
    document.getElementById('category-indicator').textContent = indicatorText;
}

// Initially show all items
document.addEventListener('DOMContentLoaded', (event) => {
    showAllItems();
});

