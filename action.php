
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="TinkerBug is a single board computer for hobbyists">
    <meta name="keywords" content="HTML,CSS,XML,JavaScript,PHP,hardware,diy,singleboardcomputer">
    <meta name="author" content="Mili Normandin">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <!-- Importing font awesome javascript library for extra icons -->
    <script src="https://use.fontawesome.com/9b1ade8b37.js"></script>
    <script type="text/javascript" src="script.js"></script>
    
    <!-- 
        Business Goals: To provide an affordable single board computer for hobbyists and makers.

        Target Audience: Hobbyists, makers, and children wanting to learn electronics.
    -->
    <title>TinkerBug | Contact</title>

    <style>

        .row1-heading {
            height: 100px;
            margin-left: 25%;
        }
        .buy-btn-container {
            margin-right: 10px;
        }
        /* Override the css to position the bar */
        .buy-bar {
            margin-top: 250px;
        }

        .div2 {
            margin-left: 30%;
            height: 600px;
        }

        .row2-heading p {
            font-size: 40px;
            color: rgb(201, 25, 40);
            margin-top: 50px;
        }

        .row2-content {
            color: rgb(207, 137, 7);
            margin-top: 80px;
        }

        label {
            color: rgb(207, 137, 7);
            font-weight: bold;
            font-size: 22px;
            padding: 20px;

        }

        input {
            padding: 5px;
        }

        .btn{
            margin-top: 20px;
            font-weight: bold;
           
        }

        .btn:hover {
            cursor: pointer;
        }

        /* Dynamic drive character count progress bar styles*/
        .progress {
            white-space: nowrap;
            color: white;
            font-size: 13px;
            padding: 5px;
            overflow: hidden;
            background-color: navy;
            padding-left: 5px;
    }


    </style>

</head>
<body>
    <nav class="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
            <!-- Using the custom font awesome class for burger nav bar -->
            <i class="fa fa-bars"></i>
        </span>
        <a href="index.htm" class="logo">
            <i class="fa fa-bug"></i> TinkerBug
        </a>
        <ul class="main-nav" id="js-menu">
            <li>
                <a href="index.htm" class="nav-links">Home</a>
            </li>
            <li>
                <a href="buy.htm" class="nav-links">Buy</a>
            </li>
            <div class="dropdown">
                <li>
                    <a href="#" class="nav-links dropbtn">Demos</a>
                </li>
                <div class="dropdown-content">
                  <a href="demo-1.htm">Demo 1</a>
                  <a href="demo-2.htm">Demo 2</a>
                </div>
              </div>
            <li>
                <a href="contact-us.htm" class="nav-links">Contact Us</a>
            </li>
        </ul>
    </nav>
    <div class="parent">
        <!-- Inline background color to make it easier to change on other pages -->
        <div class="div1" style="background: rgb(207, 165, 51);
        background: linear-gradient(0deg, rgb(207, 165, 51) 0%, rgb(204, 152, 9) 40%, rgb(241, 205, 0) 100%);">
            <div class="row row1-heading">
                <h1 class="row1-heading-content">Contact <br>Us</h1>
                <p class="row1-heading-content">
                    Our engineers and thousands of TinkerBug 
                    experts are <br>waiting there to help <strong>beginners and 
                    advanced users alike.</strong>
                </p>
            </div>
                    <!-- Inline background color to make it easier to change on other pages -->
            <div class="buy-bar" style="background-color: rgba(155, 101, 0, 0.561);">
                <div class="buy-btn-container"><a href="buy.htm" class="buy-btn">Buy Now</a></div>
            </div>
        </div>
        <div class="div2" style="background-color: rgb(255, 255, 255);">
            <div class="row2-content">
                <p>
                    Thank you for your message, <strong><?php echo $_GET["fname"];?> </strong><br>
                    We will get back to you shortly, at <strong> <?php echo $_GET["email"];?> </strong><br>
                </p>
            </div>
    </div>

    <footer>
        <small><i>Copyright &copy; 2020 TinkerBug | Last Modified April 11th, 2020 | <a href="mailto:mnormand@hawaii.edu">Email</a></i></small>
      </footer>

    <script>
            // Getting the html elements for navbar
            let mainNav = document.getElementById('js-menu');
            let navBarToggle = document.getElementById('js-navbar-toggle');

            // Adding a click event listener to the toggle button that
            // toggles the .active class on the mainNav element
            navBarToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            });
    </script>

</body>
</html>