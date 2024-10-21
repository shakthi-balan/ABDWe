

// app.js

// Function to load a page's content into the #app div
function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById('app').innerHTML = content;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Set up routes using Page.js
page('/t&c', () => loadPage('../T&C.html'));
// page('/about', () => loadPage('about.html'));
// page('/contact', () => loadPage('contact.html'));

// Handle 404 - Page Not Found
page('*', () => {
    document.getElementById('app').innerHTML = '<h1>404</h1><p>Page not found</p>';
});

// Initialize routing
page();
