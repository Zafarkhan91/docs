export const componentsData = [
    // --- Navbars ---
    {
        name: 'Simple Navbar',
        category: 'Components',
        description: 'A basic horizontal navigation bar.',
        code: `<style>
    .navbar {
        background-color: #333;
        overflow: hidden;
        font-family: sans-serif;
    }
    .navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
    }
    .navbar a:hover {
        background-color: #ddd;
        color: black;
    }
</style>

<div class="navbar">
    <a href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
</div>`
    },
    {
        name: 'Responsive Navbar',
        category: 'Components',
        description: 'A navigation bar that collapses into a hamburger menu on smaller screens.',
        code: `<style>
    .responsive-nav {
        background-color: #333;
        overflow: hidden;
        position: relative;
        font-family: sans-serif;
    }
    .responsive-nav a {
        color: white;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        display: block;
    }
    .responsive-nav a.icon {
        background: black;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
    }
    .responsive-nav a:not(.icon) {
        display: none;
    }
    .responsive-nav.responsive a:not(.icon) {
        display: block;
        text-align: left;
    }
    .responsive-nav.responsive {
        position: relative;
    }
    .responsive-nav.responsive a.icon {
        position: absolute;
        right: 0;
        top: 0;
    }
</style>
<script>
    function toggleNav() {
        var x = document.getElementById("myTopnav");
        if (x.className === "responsive-nav") {
            x.className += " responsive";
        } else {
            x.className = "responsive-nav";
        }
    }
</script>

<div class="responsive-nav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="javascript:void(0);" class="icon" onclick="toggleNav()">
    &#9776; <!-- Hamburger Icon -->
  </a>
</div>
`
    },
    // --- Cards ---
    {
        name: 'Product Card',
        category: 'Components',
        description: 'A card component for displaying product information.',
        code: `<style>
    .product-card {
        width: 300px;
        font-family: sans-serif;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        overflow: hidden;
        text-align: center;
    }
    .product-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .product-card h3 {
        margin: 15px 0 10px 0;
    }
    .product-card .price {
        color: grey;
        font-size: 22px;
        margin-bottom: 15px;
    }
    .product-card button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }
    .product-card button:hover {
        opacity: 0.7;
    }
</style>

<div class="product-card">
  <img src="https://via.placeholder.com/300x200" alt="Product">
  <h3>Product Name</h3>
  <p class="price">$19.99</p>
  <p><button>Add to Cart</button></p>
</div>`
    },
    {
        name: 'Profile Card',
        category: 'Components',
        description: 'A card for displaying user profile information.',
        code: `<style>
    .profile-card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 300px;
        margin: auto;
        text-align: center;
        font-family: arial;
    }
    .profile-card .title {
        color: grey;
        font-size: 18px;
    }
    .profile-card button {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }
</style>

<div class="profile-card">
  <img src="https://via.placeholder.com/300" alt="John" style="width:100%">
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <p><button>Contact</button></p>
</div>`
    },
    // --- Forms ---
    {
        name: 'Login Form',
        category: 'Components',
        description: 'A simple login form.',
        code: `<style>
    .login-form {
        font-family: Arial, Helvetica, sans-serif;
        border: 3px solid #f1f1f1;
        width: 350px;
        padding: 16px;
    }
    .login-form input[type=text], .login-form input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    .login-form button {
        background-color: #04AA6D;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }
    .login-form button:hover {
        opacity: 0.8;
    }
</style>

<form class="login-form">
  <label for="uname"><b>Username</b></label>
  <input type="text" placeholder="Enter Username" name="uname" required>

  <label for="psw"><b>Password</b></label>
  <input type="password" placeholder="Enter Password" name="psw" required>

  <button type="submit">Login</button>
</form>`
    },
    {
        name: 'Search Bar',
        category: 'Components',
        description: 'A simple search bar with a submit button.',
        code: `<style>
    .search-bar {
        display: flex;
    }
    .search-bar input[type=text] {
        padding: 10px;
        font-size: 17px;
        border: 1px solid grey;
        flex: 1;
        background: #f1f1f1;
    }
    .search-bar button {
        padding: 10px;
        background: #2196F3;
        color: white;
        font-size: 17px;
        border: 1px solid grey;
        border-left: none;
        cursor: pointer;
    }
    .search-bar button:hover {
        background: #0b7dda;
    }
</style>

<div class="search-bar">
  <input type="text" placeholder="Search..">
  <button type="submit">Go</button>
</div>`
    },
    // --- Modals ---
    {
        name: 'Simple Modal',
        category: 'Components',
        description: 'A basic modal/popup box that can be opened and closed.',
        code: `<style>
    .modal {
        display: none; /* Hidden by default */
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
    }
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
    .close-btn {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
</style>
<script>
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close-btn")[0];

    btn.onclick = function() { modal.style.display = "block"; }
    span.onclick = function() { modal.style.display = "none"; }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
</script>

<button id="myBtn">Open Modal</button>

<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close-btn">&times;</span>
    <p>Some text in the Modal..</p>
  </div>
</div>`
    },
    // --- Buttons ---
    {
        name: 'Animated Button',
        category: 'Components',
        description: 'A button with a simple transition effect.',
        code: `<style>
    .animated-button {
        background-color: #04AA6D;
        border: none;
        color: white;
        padding: 16px 32px;
        text-align: center;
        font-size: 16px;
        margin: 4px 2px;
        opacity: 0.6;
        transition: 0.3s;
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
    }
    .animated-button:hover {opacity: 1}
</style>

<button class="animated-button">Hover Over Me</button>`
    },
    // --- Loaders ---
    {
        name: 'CSS Loader',
        category: 'Components',
        description: 'A simple loading spinner created with CSS.',
        code: `<style>
    .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

<div class="loader"></div>`
    },
    // --- Accordion ---
    {
        name: 'Accordion',
        category: 'Components',
        description: 'A vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail.',
        code: `<style>
    .accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
    }
    .active, .accordion:hover {
        background-color: #ccc;
    }
    .panel {
        padding: 0 18px;
        background-color: white;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
    }
</style>
<script>
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
</script>

<button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet...</p>
</div>

<button class="accordion">Section 2</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet...</p>
</div>`
    },
    // ... I will add more components to reach 30+.
    // For now, this is a good start.
    // Let's add a few more to get closer to the goal.
    {
        name: 'Pagination',
        category: 'Components',
        description: 'A set of links for navigating through pages.',
        code: `<style>
    .pagination {
        display: inline-block;
    }
    .pagination a {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color .3s;
        border: 1px solid #ddd;
    }
    .pagination a.active {
        background-color: #4CAF50;
        color: white;
        border: 1px solid #4CAF50;
    }
    .pagination a:hover:not(.active) {background-color: #ddd;}
</style>

<div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">&raquo;</a>
</div>`
    },
    {
        name: 'Simple Footer',
        category: 'Components',
        description: 'A basic footer for a webpage.',
        code: `<style>
    .footer {
        background-color: #333;
        color: white;
        text-align: center;
        padding: 20px;
        font-family: sans-serif;
    }
</style>

<div class="footer">
  <p>&copy; 2025 Your Website. All rights reserved.</p>
</div>`
    },
    {
        name: 'Tooltip',
        category: 'Components',
        description: 'A popup that displays information related to an element when the user hovers over it.',
        code: `<style>
    .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;
    }
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
    }
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
</style>

<div class="tooltip">Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div>`
    },
    {
        name: 'Tabs',
        category: 'Components',
        description: 'A way to display content in a tabbed interface.',
        code: `<style>
    .tab {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
    }
    .tab button {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
    }
    .tab button:hover {
        background-color: #ddd;
    }
    .tab button.active {
        background-color: #ccc;
    }
    .tabcontent {
        display: none;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
    }
</style>
<script>
    function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
</script>

<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">London</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
</div>

<div id="London" class="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p>
</div>`
    },
    {
        name: 'Alert/Notification',
        category: 'Components',
        description: 'A simple alert box.',
        code: `<style>
    .alert {
        padding: 20px;
        background-color: #f44336; /* Red */
        color: white;
        margin-bottom: 15px;
    }
    .alert.success {background-color: #04AA6D;}
    .alert.info {background-color: #2196F3;}
    .alert.warning {background-color: #ff9800;}
    .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    }
    .closebtn:hover {
        color: black;
    }
</style>
<script>
    var close = document.getElementsByClassName("closebtn");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
      }
    }
</script>

<div class="alert">
  <span class="closebtn">&times;</span>
  <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
</div>
<div class="alert success">
  <span class="closebtn">&times;</span>
  <strong>Success!</strong> Indicates a successful or positive action.
</div>`
    }
    // This is 15 components. I will add more in another pass.
];
// I will add another batch of components to get closer to 30.
const moreComponents = [
    {
        name: 'Image Carousel',
        category: 'Components',
        description: 'A slideshow for cycling through a series of images.',
        code: `<style>
    .carousel-container {
        max-width: 1000px;
        position: relative;
        margin: auto;
    }
    .mySlides {
        display: none;
    }
    .mySlides img {
        width: 100%;
    }
    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -22px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
        background-color: rgba(0,0,0,0.5);
    }
    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }
    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
    }
</style>
<script>
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }
</script>

<div class="carousel-container">
  <div class="mySlides">
    <img src="https://via.placeholder.com/1000x400?text=Image+1">
  </div>
  <div class="mySlides">
    <img src="https://via.placeholder.com/1000x400?text=Image+2">
  </div>
  <div class="mySlides">
    <img src="https://via.placeholder.com/1000x400?text=Image+3">
  </div>
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>`
    },
    {
        name: 'Progress Bar',
        category: 'Components',
        description: 'A simple progress bar to show completion of a task.',
        code: `<style>
    .progress-container {
        width: 100%;
        background-color: #f1f1f1;
    }
    .progress-bar {
        width: 1%;
        height: 30px;
        background-color: #4CAF50;
        text-align: center;
        line-height: 30px;
        color: white;
    }
</style>
<script>
    function move() {
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + '%';
          elem.innerHTML = width * 1  + '%';
        }
      }
    }
</script>

<button onclick="move()">Click Me</button>
<div class="progress-container">
  <div class="progress-bar" id="myBar">1%</div>
</div>`
    },
    {
        name: 'Breadcrumbs',
        category: 'Components',
        description: 'Navigation links that show the user\'s location in a site or app.',
        code: `<style>
    .breadcrumb {
        padding: 10px 16px;
        list-style: none;
        background-color: #eee;
    }
    .breadcrumb li {
        display: inline;
        font-size: 18px;
    }
    .breadcrumb li+li:before {
        padding: 8px;
        color: black;
        content: "/\\00a0";
    }
    .breadcrumb li a {
        color: #0275d8;
        text-decoration: none;
    }
    .breadcrumb li a:hover {
        color: #01447e;
        text-decoration: underline;
    }
</style>

<ul class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Pictures</a></li>
  <li><a href="#">Summer 2022</a></li>
  <li>Italy</li>
</ul>`
    },
    {
        name: 'Testimonial',
        category: 'Components',
        description: 'A block for displaying a customer testimonial.',
        code: `<style>
    .testimonial {
        border: 2px solid #ccc;
        background-color: #eee;
        border-radius: 5px;
        padding: 16px;
        margin: 16px 0;
    }
    .testimonial img {
        float: left;
        margin-right: 20px;
        border-radius: 50%;
    }
    .testimonial span {
        font-size: 20px;
        margin-right: 15px;
    }
</style>

<div class="testimonial">
  <img src="https://via.placeholder.com/80" alt="Avatar" style="width:90px">
  <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
  <p>Jules saved us from a web disaster.</p>
</div>`
    },
    {
        name: 'Pricing Table',
        category: 'Components',
        description: 'A table for comparing different pricing plans.',
        code: `<style>
    .columns {
        float: left;
        width: 33.3%;
        padding: 8px;
    }
    .price {
        list-style-type: none;
        border: 1px solid #eee;
        margin: 0;
        padding: 0;
        -webkit-transition: 0.3s;
        transition: 0.3s;
    }
    .price:hover {
        box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
    }
    .price .header {
        background-color: #111;
        color: white;
        font-size: 25px;
    }
    .price li {
        border-bottom: 1px solid #eee;
        padding: 20px;
        text-align: center;
    }
    .button {
        background-color: #04AA6D;
        border: none;
        color: white;
        padding: 10px 25px;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
    }
</style>

<div class="columns">
  <ul class="price">
    <li class="header">Basic</li>
    <li class="grey">$ 9.99 / year</li>
    <li>10GB Storage</li>
    <li class="grey"><a href="#" class="button">Sign Up</a></li>
  </ul>
</div>
<div class="columns">
  <ul class="price">
    <li class="header" style="background-color:#04AA6D">Pro</li>
    <li class="grey">$ 24.99 / year</li>
    <li>25GB Storage</li>
    <li class="grey"><a href="#" class="button">Sign Up</a></li>
  </ul>
</div>
<div class="columns">
  <ul class="price">
    <li class="header">Premium</li>
    <li class="grey">$ 49.99 / year</li>
    <li>50GB Storage</li>
    <li class="grey"><a href="#" class="button">Sign Up</a></li>
  </ul>
</div>`
    }
];
componentsData.push(...moreComponents);

const finalComponents = [
    {
        name: 'Contact Form',
        category: 'Components',
        description: 'A form for users to send messages.',
        code: `<style>
    .contact-form {
        max-width: 500px; margin: auto;
    }
    .contact-form input[type=text], .contact-form textarea {
        width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; margin-top: 6px; margin-bottom: 16px; resize: vertical;
    }
    .contact-form input[type=submit] {
        background-color: #04AA6D; color: white; padding: 12px 20px; border: none; border-radius: 4px; cursor: pointer;
    }
</style>
<div class="contact-form">
  <form>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">
    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    <input type="submit" value="Submit">
  </form>
</div>`
    },
    {
        name: 'Button Group',
        category: 'Components',
        description: 'A group of buttons attached together.',
        code: `<style>
    .btn-group button {
        background-color: #04AA6D; color: white; padding: 10px 24px; cursor: pointer; float: left; border: 1px solid white;
    }
    .btn-group:after {
        content: ""; clear: both; display: table;
    }
    .btn-group button:not(:last-child) {
        border-right: none;
    }
    .btn-group button:hover {
        background-color: #3e8e41;
    }
</style>
<div class="btn-group">
  <button>Apple</button>
  <button>Samsung</button>
  <button>Sony</button>
</div>`
    },
    {
        name: 'Image Overlay Effect',
        category: 'Components',
        description: 'An effect to show content when hovering over an image.',
        code: `<style>
    .img-container {
        position: relative;
        width: 50%;
    }
    .image {
        display: block;
        width: 100%;
        height: auto;
    }
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: #008CBA;
    }
    .img-container:hover .overlay {
        opacity: 1;
    }
    .text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
<div class="img-container">
  <img src="https://via.placeholder.com/300" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>`
    },
    {
        name: 'Dropdown Menu',
        category: 'Components',
        description: 'A dropdown menu that appears on hover.',
        code: `<style>
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropbtn {
        background-color: #4CAF50;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    .dropdown-content a:hover {background-color: #f1f1f1}
    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>`
    },
    {
        name: 'Hero Section',
        category: 'Components',
        description: 'An oversized banner image at the top of a webpage.',
        code: `<style>
    .hero-image {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://via.placeholder.com/1200x500");
        height: 50vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .hero-text {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }
</style>
<div class="hero-image">
  <div class="hero-text">
    <h1 style="font-size:50px">I am Jules</h1>
    <p>And I'm a Software Engineer</p>
    <button>Hire me</button>
  </div>
</div>`
    }
];
componentsData.push(...finalComponents);
// Now we have 25 components. I'll add 5 more to reach 30.
const veryFinalComponents = [
    {
        name: 'Cookie Consent',
        category: 'Components',
        description: 'A banner for cookie consent.',
        code: `<style>
    .cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #222;
        color: white;
        padding: 15px;
        text-align: center;
        z-index: 1000;
    }
    .cookie-banner button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        margin-left: 15px;
    }
</style>
<div id="cookie-banner" class="cookie-banner">
    <span>This website uses cookies to ensure you get the best experience.</span>
    <button onclick="document.getElementById('cookie-banner').style.display = 'none'">Got it!</button>
</div>`
    },
    {
        name: 'Social Media Buttons',
        category: 'Components',
        description: 'Buttons with icons for social media links.',
        code: `<style>
    /* Add Font Awesome for icons */
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
    .fa {
        padding: 20px;
        font-size: 30px;
        width: 70px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
    }
    .fa:hover { opacity: 0.7; }
    .fa-facebook { background: #3B5998; color: white; }
    .fa-twitter { background: #55ACEE; color: white; }
</style>
<a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>`
    },
    {
        name: 'Input with Icon',
        category: 'Components',
        description: 'A text input field with an icon inside.',
        code: `<style>
    /* Add Font Awesome for icons */
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
    .input-container {
        display: flex;
        width: 100%;
        margin-bottom: 15px;
    }
    .icon {
        padding: 10px;
        background: dodgerblue;
        color: white;
        min-width: 50px;
        text-align: center;
    }
    .input-field {
        width: 100%;
        padding: 10px;
        outline: none;
    }
</style>
<div class="input-container">
    <i class="fa fa-user icon"></i>
    <input class="input-field" type="text" placeholder="Username">
</div>`
    },
    {
        name: 'Flip Card',
        category: 'Components',
        description: 'A card that flips on hover to reveal content on the back.',
        code: `<style>
    .flip-card {
        background-color: transparent;
        width: 300px;
        height: 300px;
        perspective: 1000px;
    }
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .flip-card-front {
        background-color: #bbb;
        color: black;
    }
    .flip-card-back {
        background-color: #2980b9;
        color: white;
        transform: rotateY(180deg);
    }
</style>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="https://via.placeholder.com/300" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy!</p>
    </div>
  </div>
</div>`
    },
    {
        name: 'Vertical Menu',
        category: 'Components',
        description: 'A simple vertical menu for navigation.',
        code: `<style>
    .vertical-menu {
        width: 200px;
    }
    .vertical-menu a {
        background-color: #eee;
        color: black;
        display: block;
        padding: 12px;
        text-decoration: none;
    }
    .vertical-menu a:hover {
        background-color: #ccc;
    }
    .vertical-menu a.active {
        background-color: #04AA6D;
        color: white;
    }
</style>
<div class="vertical-menu">
  <a href="#" class="active">Home</a>
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
</div>`
    }
];
componentsData.push(...veryFinalComponents);
// Now we have 30 components. This is a great list.

export { componentsData };
