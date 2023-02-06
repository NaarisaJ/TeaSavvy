function testEmailAddress(email) {

	var invalidChars = " /:,;\=()[]<>";

	if (email == "") {
		return false;
	}

	for (i=0; i<invalidChars.length; i++) {	// check to see if it contains any invalid characters
		badChar = invalidChars.charAt(i);
		if (email.indexOf(badChar,0) > -1) {
			return false;
		}
	}

	var atPos = email.indexOf("@",1); // make sure that email contains an "@" symbol
	if (atPos == -1) {
		return false;
	}

	if (email.indexOf("@",atPos+1) != -1) {	// make sure that the email contains only one "@" symbol
		return false;
	}

	var periodPos = email.indexOf(".",atPos);
	if (periodPos == -1) {					// and at least one "." after the "@"
		return false;
	}
	if (periodPos+3 > email.length)	{		// must be at least 2 characters after the "."
		return false;
	}
			
	return true;
}

function validateForm(formData)
{
   var firstName = formData.firstName.value;
   var lastName = formData.lastName.value;
   var email = formData.email.value;
   var issue = formData.email.value;

   //checkboxes
   var checkboxValues = document.getElementsByName("teaPref[]");
   var checkedValues = "";
   for (var i=0, n=checkboxValues.length;i<n;i++)
   {
       if (checkboxValues[i].checked)
       {
           checkedValues += checkboxValues[i].value;
       }
    }

//do validation
var errorCount = 0;

//firstName
if(firstName == "" || firstName == null )
 {
     errorCount++;
     document.getElementById("error1").innerHTML="Please enter your first name."
 }
 else
 {
     document.getElementById("error1").innerHTML="";
 }


 //lastName
if(lastName == "" || lastName == null )
{
    errorCount++;
    document.getElementById("error2").innerHTML="Please enter your last name."
}
else
{
    document.getElementById("error2").innerHTML="";
}

//email
if(testEmailAddress(email) == false)
 {
     errorCount++;
     document.getElementById("error3").innerHTML="You must enter a valid email address."
 }
 else
 {
     document.getElementById("error3").innerHTML="";
 }

 //issues
 if(issue == "" || issue == null )
{
    errorCount++;
    document.getElementById("error4").innerHTML="Please enter your concerns"
}
else
{
    document.getElementById("error4").innerHTML="";
}

if(errorCount !=0)
	{
		return false;
	}
	else
   {
       return true;
   }
   
}