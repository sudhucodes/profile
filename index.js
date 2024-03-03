document.addEventListener('DOMContentLoaded', function () {
    var homeBtn = document.getElementById('homeBtn');

    homeBtn.addEventListener('click', function () {
        // Redirect to the user profile page using an absolute path
        window.location.href = '../Home/home.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var homeBtn = document.getElementById('homeBtn');

    homeBtn.addEventListener('click', function () {
        // Redirect to the user profile page using an absolute path
        window.location.href = '../Home/home.html';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the element with class "accountbtndiv"
    var accountBtn = document.querySelector('.homebtndiv');

    // Add click event listener to the element
    accountBtn.addEventListener('click', function(event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();
        
        // Redirect to the specified link
        window.location.href = 'https://sudhucodes.github.io/88-home/';
    });
});
