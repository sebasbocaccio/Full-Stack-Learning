# Fundamentals of Web apps
## HTTP GET:
*  The server and the web browser communicate with each other using the HTTP protocol. 

        Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response. HTTP is a stateless protocol, meaning that the server does not keep any data (state) between two requests.
* GET ; El método GET  solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.        
## Traditional web applications:
* The homepage of the example application works like a traditional web application. When entering the page, the browser fetches the HTML document detailing the structure and the textual content of the page from the server.
* The server has formed this document somehow. The document can be a static text file saved into the server's directory. The server can also form the HTML documents dynamically according to the application code, using, for example, data from a database. The HTML code of the example application has been formed dynamically, because it contains information on the number of created notes.
* In traditional web applications the browser is "dumb". It only fetches HTML data from the server, and all application logic is on the server.
* Despues muestra como se puede ejecutar codigo dentro de una pagina usando javascript.
## Event handlers and Callback functions

        var xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function() {
        // code that takes care of the server response
        }

        xhttp.open('GET', '/data.json', true)
        xhttp.send()

* The request to the server is sent on the last line, but the code to handle the response can be found further up. On this line, an event handler for event onreadystatechange is defined for the xhttp object doing the request. When the state of the object changes, the browser calls the event handler function. The function code checks that the readyState equals 4 (which depicts the situation The operation is complete) and that the HTTP status code of the response is 200.

* The mechanism of invoking event handlers is very common in JavaScript. Event handler functions are called callback functions. The application code does not invoke the functions itself, but the runtime environment - the browser, invokes the function at an appropriate time, when the event has occurred. 


## Document Object Model or DOM
* We can think of HTML-pages as implicit tree structures.

* The functioning of the browser is based on the idea of depicting HTML elements as a tree.

* Document Object Model, or DOM is an Application Programming Interface, (an API), which enables programmatic modification of the element trees corresponding to web-pages.

* The JavaScript code introduced in the previous chapter used the DOM-API to add a list of notes to the page.        

## Manipulating the document-object from console:
* The topmost node of the DOM tree of an HTML document is called the document object. We can perform various operations on a web-page using the DOM-API. You can access the document object by typing document into the Console-tab:

## CSS
* The head element of the HTML code of the Notes page contains a link tag, which determines that the browser must fetch a CSS style sheet from the address main.css.
Cascading Style Sheets, or CSS, is a markup language used to determine the appearance of web pages.

The fetched CSS-file looks as follows:

        .container {
            padding: 10px;
            border: 1px solid; 
            }

        .notes {
        color: blue;
        }


* The file defines two class selectors. These are used to select certain parts of the page and to define styling rules to style them. A class selector definition always starts with a period, and contains the name of the class.
The classes are attributes, which can be added to HTML elements.

* HTML elements can also have other attributes apart from classes. The div element containing the notes has an id attribute. JavaScript code uses the id to find the element.**The Elements tab of the console can be used to change the styles of the elements.**

        The id global attribute defines an identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).

* Changes made on the console will not be permanent. If you want to make lasting changes, they must be saved to the CSS style sheet on the server.

## Forms and HTTP POST:

        Web forms are one of the main points of interaction between a user and a web site or application. Forms allow users to enter data, which is generally sent to a web server for processing and storage (see Sending form data later in the module), or used on the client-side to immediately update the interface in some way

* When the button on the form is clicked, the browser will send the user input to the server. Submitting the form causes altogether five HTTP requests.          

* The first one is the form submit event. It is an HTTP POST request to the server address new_note. The server responds with HTTP status code 302. This is a URL redirect, with which the server asks the browser to do a new HTTP GET request to the address defined in the header's Location - the address notes.

    So, the browser reloads the Notes page. The reload causes three more HTTP requests: fetching the style sheet (main.css), the JavaScript code (main.js), and the raw data of the notes (data.json).

* The Form tag has attributes action and method, which define that submitting the form is done as an HTTP POST request to the address new_note

* The code on the server responsible for the POST request is quite simple (NB: this code is on the server, and not on the JavaScript code fetched by the browser):

        app.post('/new_note', (req, res) => {
            notes.push({
                content: req.body.note,
                date: new Date(),
            })

            return res.redirect('/notes')
            })
        }

## Ajax:

        Ajax is a set of web development techniques using many web technologies on the client-side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behaviour of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows web pages and, by extension, web applications, to change content dynamically without the need to reload the entire page.[3] In practice, modern implementations commonly utilize JSON instead of XML.

        Ajax is not a single technology, but rather a group of technologies. HTML and CSS can be used in combination to mark up and style information. The webpage can then be modified by JavaScript to dynamically display—and allow the user to interact with—the new information

## Single page app:
* In our example app, the home page works like a traditional web-page: All of the logic is on the server, and the browser only renders the HTML as instructed.  

        A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app.

        In a SPA, all necessary HTML, JavaScript, and CSS code is either retrieved by the browser with a single page load,[1] or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does it transfer control to another page,

* En el curso dan dos paginas una que funciona como SPA y la otra que no cuando agregas notas.         

## JSON

**¿Qué es JSON?**

        JSON es el acrónimo para JavaScript Object Notation, y aunque su nombre lo diga, no es necesariamente parte de JavaScript, de hecho es un estándar basado en texto plano para el intercambio de información, por lo que se usa en muchos sistemas que requieren mostrar o enviar información para ser interpretada por otros sistemas, la ventaja de JSON al ser un formato que es independiente de cualquier lenguaje de programación, es que los servicios que comparten información por éste método, no necesitan hablar el mismo idioma, es decir, el emisor puede ser Java y el receptor PHP, cada lenguaje tiene su propia librería para codificar y decodificar cadenas de JSON.
        JSON puede representar cuatro tipos primitivos(cadenas, números, booleanos, valores nulos) y dos tipos estructurados(objetos y arreglos).

**¿Para que sirve JSON?** 

        JSON puede ser leído por cualquier lenguaje de programación. Por lo tanto, puede ser usado para el intercambio de información entre distintas tecnologías.

# Material extra de la seccion 0:

## HTML basics:

**The main parts of our element are as follows:**

1)The opening tag: This consists of the name of the element (in this case, p), wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect — in this case where the paragraph begins.

2)The closing tag: This is the same as the opening tag, except that it includes a forward slash before the element name. This states where the element ends — in this case where the paragraph ends. Failing to add a closing tag is one of the standard beginner errors and can lead to strange results.

3)The content: This is the content of the element, which in this case, is just text.

4)The element: The opening tag, the closing tag, and the content together comprise the element.


### Atributes
![](html-attribute.png)


Attributes contain extra information about the element that you don't want to appear in the actual content. Here, class is the attribute name and editor-note is the attribute value. The class attribute allows you to give the element a non-unique identifier that can be used to target it (and any other elements with the same class value) with style information and other things.

An attribute should always have the following:

A space between it and the element name (or the previous attribute, if the element already has one or more attributes).
The attribute name followed by an equal sign.
The attribute value wrapped by opening and closing quotation marks.

## Nesting:

You can put elements inside other elements too — this is called nesting. If we wanted to state that our cat is very grumpy, we could wrap the word "very" in a strong element, which means that the word is to be strongly emphasized:

You do however need to make sure that your elements are properly nested. In the example above, we opened the <p> element first, then the strong element; therefore, we have to close the strong element first, then the <p> element. The following is incorrect:

        <p>My cat is <strong>very grumpy.</p></strong>

## Empty elements:        

Some elements have no content and are called empty elements. Take the <img> element that we already have in our HTML page:

        <img src="images/firefox-icon.png" alt="My test image">

This contains two attributes, but there is no closing </img> tag and no inner content. This is because an image element doesn't wrap content to affect it. Its purpose is to embed an image in the HTML page in the place it appears.

## Headings

        <h1>My main title</h1>
        <h2>My top level heading</h2>
        <h3>My subheading</h3>
        <h4>My sub-subheading</h4>

## Lists        

A lot of the web's content is lists and HTML has special elements for these. Marking up lists always consists of at least 2 elements. The most common list types are ordered and unordered lists:

Unordered lists are for lists where the order of the items doesn't matter, such as a shopping list. These are wrapped in a ul element.

Ordered lists are for lists where the order of the items does matter, such as a recipe. These are wrapped in an ol element..

Each item inside the lists is put inside an li element.

## Links

        <a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a>

You might get unexpected results if you omit the https:// or http:// part, called the protocol, at the beginning of the web address. After making a link, click it to make sure it is sending you where you wanted it to.

# CSS Basics
* CSS (Cascading Style Sheets) is the code that styles web content. 
*  CSS is a style sheet language. CSS is what you use to selectively style HTML elements. For example, this CSS selects paragraph text, setting the color to red:

        p {
         color: red;    
        }

![](CSS-basic.png)        

The whole structure is called a ruleset. (The term ruleset is often referred to as just rule.) Note the names of the individual parts:

**Selector**
This is the HTML element name at the start of the ruleset. It defines the element(s) to be styled (in this example, <p> elements). To style a different element, change the selector.

**Declaration**
This is a single rule like color: red;. It specifies which of the element's properties you want to style.

**Properties**
These are ways in which you can style an HTML element. (In this example, color is a property of the <p> elements.) In CSS, you choose which properties you want to affect in the rule.

**Property value**

To the right of the property—after the colon—there is the property value. This chooses one out of many possible appearances for a given property. (For example, there are many color values in addition to red.)

        p {
        color: red;
        width: 500px;
        border: 1px solid black;
        }

# HTLM Forms:
* All forms start with a form element, like this:
       
        <form action="/my-handling-form-page" method="post">

</form>