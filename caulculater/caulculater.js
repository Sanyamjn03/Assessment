function btnClick(value) {
    document.getElementById("input-value").value += value;
  }
  
  function deleteNum() {
    document.getElementById("input-value").value = "";
    document.getElementById("result").value = "";
  }
  
  function calculate() {
    let inputDisplay = document.getElementById("input-value").value;
    let result;
  
    try {
      result = eval(inputDisplay);
    } catch (erroe) {
      result = "error";
    }
  
    document.getElementById("result").value = result;
  }