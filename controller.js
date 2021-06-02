//controller
// this is the parent function that handles password verification
function passwordHandler(val) {
  passCallBack = "Password";
  spaceCallback = "";
  charCallback = "";
  let charCheck = charHandler(val);
  let spaceCheck = spaceHandler(val);

  charCheck === true && spaceCheck === true
    ? ((passCallBack = "Password valid"), colorHandler("green"))
    : ((passCallBack = "Password not valid"), colorHandler("red"));

  updateView();
}

// This function checks the password length and returns callback
function charHandler(val) {
  val.length >= 6
    ? ((val = true), (charCallback += "</b>  length valid"))
    : ((val = false), (charCallback += "</b>  length is not valid"));

  return val;
}

// this function checks if the password contains space and returns callback
function spaceHandler(val) {
  val.indexOf(" ") === -1
    ? ((val = true), (spaceCallback += "characters perfect"))
    : ((val = false), (spaceCallback += "password cannot contain space"));
  return val;
}

// this funtion handles the color of the callback
function colorHandler(val) {
  return (callbackColor = val);
}
