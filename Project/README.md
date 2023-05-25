# Implementation of the project

In this project I had to go throw multiple tasks to pass.There are 27 tasks to finish till *25/05/2023 12:00 GMT +3*   

<details>
  <summary>1. Fișiere separate pentru HTML și CSS</summary>
  
![image with html and css](image_readme/html_css.png)
  
</details>

<details>
  <summary>2. Folosiți elemente semantice</summary>
  
  Am folosit Header si Footer in proiect. 
  Se pot de asemenea regasi in [Header](/Project/Views/header.ejs) sau [Footer](/Project/Views/footer.ejs)

  ### Some Code
  ```html
        <header class="navbar">
        <ul>
            <span><%=title%></span>
            <li class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">Not satisfied?</a>
              <div class="dropdown-content">
                <a href="https://cloud.google.com/events?hl=en&ser">Search on Google</a>
                <a href="https://github.com/MihaiB-dev/Laborator-Tehnici-Web/tree/master/Project">Contribute on github</a>
                <a href="https://github.com/MihaiB-dev/Laborator-Tehnici-Web/blob/master/Project/README.md">About Implementation</a>
              </div>
            </li>
            <li><a href="/create_event">Create Events</a></li>
            <li><a href="/">Home</a></li>
          </ul>
      </header>
  
  ```
  ```html
    <footer>

        <p style="text-align:center; opacity:50%;">@Bivol Mihai 2023</p>
    </footer>
  
  ```
  
</details>

<details>
  <summary>3. Folosiți majoritatea selectorilor CSS (cei de bază, pseudo-clase și peseudo-elemente, combinatori)</summary>
  
  Am folosit :    
  - selectori pe baza numelui, a clasei, a id-ului
  - pseduo selectori precum hover, focus

  ```css
    body {
  background-color: #F6F1F1;
  min-height: 100vh;
  margin:0px;
  padding:0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
    }
    .All_elements{
  margin-left:2rem;
  margin-top:2rem;
    }
    .navbar ul {
  list-style-type: none;
  margin: 0;
  margin-top:5px;
  padding: 0;
  overflow: hidden;
  background-color: transparent;
    }
    #create_event_form input:focus, textarea:focus{
    border: 1px solid #19A7CE;
    outline: none;
    }
    #create_event_form button:hover {
    background: #146C94;
    color:white;
    }
    .event_container > img {
    display:block;
    margin-left:auto;
    margin-right: auto;
    height:auto;
    width:200px;
    border-radius: 1rem;
    }

  ```
</details>

<details>
  <summary>4. Folosiți majoritatea proprietăților CSS prezentate în laboratorul 2</summary>
  
    Acest aspect se poate regasii in file-ul style.css (360+) linii de cod, cred ca am folosit majoritatea notiunilor din lab2
  
</details>

<details>
  <summary>5. Folosiți flex si grid layouts</summary>
  Un exemplu ar fi la formular unde am folosit flex pentru a avea inputurile la aceeasi linie cu spam-ul.

  Un exemplu unde am folist grid este in pagian principala pentru evenimente


  ```css
    #create_event_form span {
    color: #146C94;
    display: inline-flex;
    min-width: 120px;
    width: 16%;
    height: 40px;
    margin-top:10px;

    font-size: 1.3rem;
    }

    .wrapper {
  display:grid;
  align-items:center;
  grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1010px) {
        .wrapper{
            grid-template-columns: repeat(2, 1fr);
        }
        }
        @media (max-width: 700px) {
        .wrapper{
            grid-template-columns: repeat(1, 1fr);
        }
    }
  ```
</details>


<details>
  <summary>6. Existența unui meniu drop-down folosind CSS</summary>
  

  ```html
    <header class="navbar">
        <ul>
            <span><%=title%></span>
            <li class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">Not satisfied?</a>
              <div class="dropdown-content">
                <a href="https://cloud.google.com/events?hl=en&ser">Search on Google</a>
                <a href="https://github.com/MihaiB-dev/Laborator-Tehnici-Web/tree/master/Project">Contribute on github</a>
                <a href="https://github.com/MihaiB-dev/Laborator-Tehnici-Web/blob/master/Project/README.md">About Implementation</a>
              </div>
            </li>
            <li><a href="/create_event">Create Events</a></li>
            <li><a href="/">Home</a></li>
          </ul>
      </header>
  ```

  ```css
    .navbar ul {
  list-style-type: none;
  margin: 0;
  margin-top:5px;
  padding: 0;
  overflow: hidden;
  background-color: transparent;
}

.navbar span {
  text-align: center;
  margin:auto 1rem;
  margin-left:45%;
  font-size:2rem;

}

.navbar li {
  float: right;
}

.navbar li a, .dropbtn {
  display: inline-block;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  transition: 500ms;
}

.navbar li a:hover, .dropdown:hover .dropbtn {
  background-color: rgba(175, 211, 226,0.5);

}

.navbar li.dropdown {
  display: inline-block;
}

.navbar .dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.navbar .dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.navbar li:first-of-type{
  margin-right: 4rem;
}

.navbar .dropdown-content a:hover {background-color: #f1f1f1;}

.navbar .dropdown:hover .dropdown-content {
  display: block;
}

@media(max-width:1024px){
  .navbar span {
    display:block;
    margin:auto auto;
  
  }
  .navbar li {
    display:inline-flex;
    margin:0px auto;
    float:none;
  }
  .navbar li:first-of-type{
    margin-left: 25%;
    margin-right: 0px;
  }

}
@media(max-width:500px){
  .navbar span {
    display:block;
    margin:auto auto;
  
  }
  .navbar li {
    display:inline-flex;
    margin:0px auto;
    float:none;
  }
  .navbar li:first-of-type{
    margin-left: 3%;
  }

}
  ```
</details>

<details>
  <summary>7. Tranziții CSS pentru diferite proprietăți</summary>
  
  ```css
    .event_container {
    margin: 10px auto 2rem auto;
    padding: 0 3rem;
    align-items: center;
    background-color: #AFD3E2;
    border-radius: 1rem;

    transition: all 500ms ease-in-out;
    }

    .event_container:hover{
    -webkit-filter: brightness(70%);
    transition: all 500ms ease;
    cursor:pointer;
    }
  ```
</details>

<details>
  <summary>8. Animații CSS care să modifice mai multe proprietăți</summary>
  

  ```css
    .stop_button:hover{
        color:black;
        background-image: linear-gradient(
        to right, 
        #E7484F,
        #E7484F 16.65%,
        #F68B1D 16.65%,
        #F68B1D 33.3%,
        #FCED00 33.3%,
        #FCED00 49.95%,
        #009E4F 49.95%,
        #009E4F 66.6%,
        #00AAC3 66.6%,
        #00AAC3 83.25%,
        #732982 83.25%,
        #732982 100%,
        #E7484F 100%
        );
    animation:slidebg 9.3s linear infinite;
    }
    @keyframes slidebg {
        to {
        background-position:95vw;
        }
    }
  ```
</details>