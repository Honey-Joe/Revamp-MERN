//Emmet

/* Emmet saves times by giving abbrevations to the editor. It speeds up the coding*/

//Differnce between library and framework

/* The major difference between the library and the framework is that framework has many rules and we have to follow
    but the library is independent we can use it without any restrictions
*/

// CDN

/* CDN- Content Delivery Network is used to access some specific tools in our code through link*/

//React 

/**
 * It reacts quickly without reloading
 */

/**
 * Cross origin
 * 
 * Cross orign in script tag is used to access code from the website to another
 */

/**
 * React and ReactDOM
 * 
 * React provides the tools and concepts to define component-based user interfaces,
 *  ReactDOM handles the task of rendering those interfaces in a web environment.
 */


/**
 * Difference between productions and development link in react CDN
 * 
 * Performance will be much faster in prodution than development 
 */

/**
 * Async and defer
 * 
 * Both for used for asynchronous programming but async loads faster than defer
 */
const root = ReactDOM.createRoot(document.getElementById("div"));
const para = React.createElement("div", null, [
  React.createElement("p", null, "hello"),
]);
root.render(para);
