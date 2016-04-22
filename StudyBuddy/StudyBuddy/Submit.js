window.onload = setForm;


function submitform(){
var msg = "The following data would be sent to the server from the form:\n";
total = document.survey.elements.length;

for (i=0;i<total;i++) {
		box = document.survey.elements[i];
		//alert("hello world");
		if (box.value && box.value != "Send Information" && box.value != "Cancel") {
			
			msg = msg + box.name + " = " + box.value + "\n";
			
		}
		
	}

alert(msg);
}

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
      return false;
   }
}