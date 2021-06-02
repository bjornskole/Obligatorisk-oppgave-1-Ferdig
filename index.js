// Return returns a value from a bi-function to the primary function

// model
let passCallBack = "Please type a valid password";
let spaceCallback = "";
let charCallback = "";
let password = "";
let callbackColor = "black";

// View
updateView();
function updateView() {
  document.getElementById("app").innerHTML = `
    <div class="MainPage">
        <h1 >Password checker</h1>
        <h3 style="color: ${callbackColor}">${passCallBack}</h3>
        <p style="color: ${callbackColor}">${spaceCallback} - ${charCallback}<p>
       <input style="font-size : 30px" type="text" name="password" onchange="passwordHandler(this.value)" >
      </div>
        `;
}
