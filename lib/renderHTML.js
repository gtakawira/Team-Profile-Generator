const { createReadStream } = require('fs')
const generateObject = require('./classes')

// let cards=append(Card)
const htmlCode = data => {
  let cards=[];
  for (let i = 0; i < data.length; i++) {
    cards.push(cardgen(data[i]));
  
    ;
 
 
     }
    
    let fincards=cards.join('')

  
    return`<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>The Team</title>
      <!-- css Reset CDN -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
      <!-- googleFonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Sans&display=swap" rel="stylesheet">
      <!-- Framework CDN -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
      <!-- FontAwesome -->
      <script src="https://kit.fontawesome.com/6df6b95a29.js" crossorigin="anonymous"></script>
    
      <!-- Style sheet -->
      <link rel="stylesheet" href="./style.css" />
    </head>
    
    <body>
      <nav>
        <div class="nav-wrapper green lighten-5">
          <a href="../index.html" class="brand-logo center teal-text text-darken-4">The Team</a>
         
        </div>
      </nav>
    
      <!--three same size container-->
      <div class="container center-align">
    
        <div class="row" id="container">
         
        ${fincards}
        
            
      <!--jQuery -->
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
      <!-- jQueryUI -->
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
        integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
      <!-- materialize -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
      
    </body>
    
    </html>`
    
}
function cardgen(data) {     
      
  return`<div class="col s12 m12 l4 clickable actCards">
  <div class="card teal darken-1">
  <div class="card-content white-text">
  <span class="card-title">${data.getName()}</span>
  <ul id="list" > 
  <li>Role: ${data.getRole()}</li>
  <li> ${data.getId()}</li>
  <li>${data.getEmail()}</li>
  <li>${data.getRole()==='Manager' ? data.getofficeNumber():
    data.getRole()==='Engineer' ? data.getGithub():
    data.getSchool()}</li>

  </ul> 
  </div> 
  </div> 
  </div>`};




module.exports= htmlCode