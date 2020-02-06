//logic for shreyravi.com

//a function to copy the current link to clipboard
function copyLink() {
    var temp = document.createElement('input');
    document.body.appendChild(temp);
    temp.value = window.location.href;
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    document.getElementById("copylink").innerHTML = "&check; Link Successfully Copied!";
}

//function to convert text to HTML

//a huge array of HTML code that will later be downloaded
const template_writing = [`<!DOCTYPE html>
<html lang="en">
    <head>
        <script src="https://www.shreyravi.com/logic.js"></script>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Template Writing - Shrey Ravi</title>
        <meta name="description" content="Shrey Ravi is a writer, historian, and programmer. This is his personal website." />
        <link href='//fonts.googleapis.com/css?family=Lusitana:400,700|Quattrocento:400,700' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" type="text/css" href="https://www.shreyravi.com/style.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.shreyravi.com/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.shreyravi.com/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.shreyravi.com/favicon-16x16.png">
        <link rel="manifest" href="https://www.shreyravi.com/site.webmanifest">
    </head>
    <body>
        <center>
            <h1>Shrey Ravi</h1>
            <hr />
            <a class="navlink" href="https://www.shreyravi.com/index.html">Home</a> |
            <a class="navlink" href="https://github.com/ShreyRavi">GitHub</a> |
            <a class="navlink" href="https://www.linkedin.com/in/shreyravi/">LinkedIn</a> |
            <a class="navlink" href="https://www.shreyravi.com/writing/">Writing</a> |
            <div class="dropdown">
              <a href="https://www.shreyravi.com/rankings.html" class="dropbtn navlink">Rankings &#8964;</a>
              <div class="dropdown-content">
                <a class="navlink" href="https://www.shreyravi.com/writing/timeless/flag-rankings.html">Flag Rankings</a>
                <a class="navlink" href="https://www.shreyravi.com/writing/timeless/reading-hof.html">Book Rankings</a>
                <a class="navlink" href="#">Leader Rankings</a>
                <a class="navlink" href="#">Movie/TV Rankings</a>
                <a class="navlink" href="#">Music Rankings</a>
              </div>
            </div> | 
            <a class="navlink" href="https://www.shreyravi.com/writing/timeless/principles.html">Principles</a>
            <hr />
        </center>

        <div class="writing">
            <h2>`,"",`</h2>

            <small>`,"",`</small> <br />
            <p>`,"",`&#x25FC;
            </p>
            
            <br />
            <a id="copylink" href="#" onclick="copyLink()"> &#9986; Copy Link To Share</a>
        </div>
        
        <center>
            <hr />
            <div class="footer">Copyright &copy; Shrey Ravi 2020 / All Rights Reserved / <a href="https://www.shreyravi.com/legal.html">Legal</a> / <a href="https://www.shreyravi.com/contact.html">Contact</a></div>

        </center>
    </body>
</html>`];

//a function to convert inputted text to an auto-generated HTML file for download for my own convenience
function convertTextToHTML() {
    var template_writing_copy = template_writing;
    template_writing_copy[1] = document.getElementById("inputTitle").value; //title
    var convertedTitle = document.getElementById("inputTitle").value.toLowerCase();
    convertedTitle = convertedTitle.replace(/-/g, "").trimEnd().replace(/ /g, "-");
    if(convertedTitle.length > 50){
        convertedTitle = convertedTitle.substring(0, 50);
    }
    template_writing_copy[3] = document.getElementById("inputDate").value; //date
    var convertedText = document.getElementById("inputTextarea").value; //raw content
    //conversion logic
    convertedText = convertedText.replace(/(?:\r\n|\r|\n)/g, '<br /><br />');
    template_writing_copy[5] = convertedText; //converted content
    document.getElementById("inputTextarea").value = template_writing_copy.join("");
    document.getElementById("inputTextarea").select();
    document.execCommand('copy');
    document.getElementById("successMsg").innerHTML = "&check; Successfully Generated Code To Download & Copied To Clipboard";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(template_writing_copy.join("")));
    element.setAttribute('download', convertedTitle+".html");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
