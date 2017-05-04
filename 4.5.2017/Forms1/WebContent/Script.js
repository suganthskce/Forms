var fieldcount = 2;
function checkBeforeAction() {
	var i;
	var key = 1;
	var string = "Enter all the Questions and Question Types";
	var formName = document.getElementById("headText").innerText;
	alert(formName);
	var value1;
	var value2;
	for(i=0;i<fieldcount-1;i++) {
		value1 = document.getElementById("questionName"+(i+1)).value;
		value2 = document.getElementById("questionType"+(i+1)).value;
		if(value1 == "" || value2 == "default") {
			key = 0;
			//alert(string);
			document.getElementById("message").innerHTML=string;
		}	
	}
	if( key == 1) {		
		alert("OK");
		document.getElementById("form").action = "FormAction?fieldcount="+(fieldcount-1)+"&formName="+formName;
		document.getElementById("form").submit();
	}	
}
function removeOptionDropdown(ele) {
	document.getElementById("message").innerHTML="";
	id = (ele.id).charAt(6);
	remove = (ele.id).charAt(8);
	var count = 0;
	var string = ""+document.getElementById("fullRow"+id).innerHTML;
	for(var i=0;i<string.length-4;i++) {
		if(string[i]=='i'&&string[i+1]=='n'&&string[i+2]=='p'&&string[i+3]=='u'&&string[i+4]=='t')
			count = count+1;
	}
	var values = [];
	for(var i=0;i<count;i++) {
		values[i] = document.getElementById("option"+id+"-"+(i+1)).value;
	}
	string = "<td id=\"subject"+(id)+"\">";
	var temp = 0;
	for(var i=0;i<count;i++) {
		if(i+1!=remove||count==1)
			{
			string +="<input type=\"text\" name=\"option"+id+"-"+(temp+1)+"\" id=\"option"+id+"-"+(temp+1)+"\" value=\""+values[i]+"\"><br><br>";
			temp = temp+1;
		
			}
		}
	string += "</td><td id=\"close"+id+"\">";
	if(count==1)
		count+=1;
	for (var i=0;i<count-1;i++) {
		string +="<div id=\"remove"+id+"-"+(i+1)+"\" onclick=\"removeOptionDropdown(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div><br>";
	}
	string += "</td><td><p onclick=\"addOptionDropdown("+id+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>";
	document.getElementById("fullRow"+id).innerHTML = string;	
}

function removeOptionCheckbox(ele) {
	document.getElementById("message").innerHTML="";
	id = (ele.id).charAt(6);
	remove = (ele.id).charAt(8);
	var count = 0;
	var string = ""+document.getElementById("fullRow"+id).innerHTML;
	for(var i=0;i<string.length-4;i++) {
		if(string[i]=='i'&&string[i+1]=='n'&&string[i+2]=='p'&&string[i+3]=='u'&&string[i+4]=='t')
			count = count+1;
	}
	count = count/2;
	var values = [];
	for(var i=0;i<count;i++) {
		values[i] = document.getElementById("option"+id+"-"+(i+1)).value;
	}
	string = "<td id=\"subject"+(id)+"\">";
	var temp = 0;
	for(var i=0;i<count;i++) {
		if(i+1!=remove||count==1)
			{
			string +="<input type=\"checkbox\" name=\"option\" value=\"option"+id+"-"+(temp+1)+"\" /><input type=\"text\" name=\"option"+id+"-"+(temp+1)+"\" id=\"option"+id+"-"+(temp+1)+"\" value=\""+values[i]+"\"><br><br>";
			temp = temp+1;
		
			}
		}
	string += "</td><td id=\"close"+id+"\">";
	if(count==1)
		count+=1;
	for (var i=0;i<count-1;i++) {
		string +="<div id=\"remove"+id+"-"+(i+1)+"\" onclick=\"removeOptionCheckbox(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div><br>";
	}
	string += "</td><td><p onclick=\"addOptionCheckbox("+id+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>";
	document.getElementById("fullRow"+id).innerHTML = string;	
}

function removeOption(ele) {
	document.getElementById("message").innerHTML="";
	id = (ele.id).charAt(6);
	remove = (ele.id).charAt(8);
	var count = 0;
	var string = ""+document.getElementById("fullRow"+id).innerHTML;
	for(var i=0;i<string.length-4;i++) {
		if(string[i]=='i'&&string[i+1]=='n'&&string[i+2]=='p'&&string[i+3]=='u'&&string[i+4]=='t')
			count = count+1;
	}
	count = count/2;
	var values = [];
	for(var i=0;i<count;i++) {
		values[i] = document.getElementById("option"+id+"-"+(i+1)).value;
	}
	string = "<td id=\"subject"+(id)+"\">";
	var temp = 0;
	for(var i=0;i<count;i++) {
		if(i+1!=remove||count==1)
			{
			string +="<input type=\"radio\" name=\"option\" value=\"option"+id+"-"+(temp+1)+"\" /><input type=\"text\" name=\"option"+id+"-"+(temp+1)+"\" id=\"option"+id+"-"+(temp+1)+"\" value=\""+values[i]+"\"><br><br>";
			temp = temp+1;
		
			}
		}
	string += "</td><td id=\"close"+id+"\">";
	if(count==1)
		count+=1;
	for (var i=0;i<count-1;i++) {
		string +="<div id=\"remove"+id+"-"+(i+1)+"\" onclick=\"removeOption(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div><br>";
	}
	string += "</td><td><p onclick=\"addOption("+id+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>";
	document.getElementById("fullRow"+id).innerHTML = string;	
}
function multipleAnswer(val,id) {
	document.getElementById("message").innerHTML="";
	var string = ""+document.getElementById("fullRow"+id).innerHTML;
	var count=0;
	for(var i=0;i<string.length-4;i++) {
		if(string[i]=='i'&&string[i+1]=='n'&&string[i+2]=='p'&&string[i+3]=='u'&&string[i+4]=='t')
			count = count+1;
	}
	count = count/2;
	var values = [];
	for(var i=0;i<count;i++) {
		values[i] = document.getElementById("option"+id+"-"+(i+1)).value;
	}
	string = "<td id=\"subject"+(val)+"\">";
	for(var i=0;i<count;i++) {
		string +="<input type=\"radio\" name=\"option\" value=\"option"+val+"-"+(i+1)+"\" /><input type=\"text\" name=\"option"+val+"-"+(i+1)+"\" id=\"option"+val+"-"+(i+1)+"\" value=\""+values[i]+"\"><br><br>";
	}
	string += "</td><td id=\"close"+id+"\">";
	for (var i=0;i<count;i++) {
		string +="<div id=\"remove"+val+"-"+(i+1)+"\" onclick=\"removeOption(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div><br>";
	}
	string += "</td><td><p onclick=\"addOption("+val+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>";
	return string;
}
function checkbox(val,id) {
	document.getElementById("message").innerHTML="";
	var string = ""+document.getElementById("fullRow"+id).innerHTML;
	var count=0;
	for(var i=0;i<string.length-4;i++) {
		if(string[i]=='i'&&string[i+1]=='n'&&string[i+2]=='p'&&string[i+3]=='u'&&string[i+4]=='t')
			count = count+1;
	}
	count = count/2;
	var values = [];
	for(var i=0;i<count;i++) {
		values[i] = document.getElementById("option"+id+"-"+(i+1)).value;
	}
	string = "<td id=\"subject"+(val)+"\">";
	for(var i=0;i<count;i++) {
		string +="<input type=\"checkbox\" name=\"option\" value=\"option"+val+"-"+(i+1)+"\" /><input type=\"text\" name=\"option"+val+"-"+(i+1)+"\" id=\"option"+val+"-"+(i+1)+"\" value=\""+values[i]+"\"><br><br>";
	}
	string += "</td><td id=\"close"+id+"\">";
	for (var i=0;i<count;i++) {
		string +="<div id=\"remove"+val+"-"+(i+1)+"\" onclick=\"removeOptionCheckbox(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div><br>";
	}
	string += "</td><td><p onclick=\"addOptionCheckbox("+val+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>";
	return string;
}
function dropdown(val,id) {
	document.getElementById("message").innerHTML="";
	var string = ""+document.getElementById("fullRow"+id).innerHTML;
	var count=0;
	for(var i=0;i<string.length-4;i++) {
		if(string[i]=='i'&&string[i+1]=='n'&&string[i+2]=='p'&&string[i+3]=='u'&&string[i+4]=='t')
			count = count+1;
	}
	var values = [];
	for(var i=0;i<count;i++) {
		values[i] = document.getElementById("option"+id+"-"+(i+1)).value;
	}
	string = "<td id=\"subject"+(val)+"\">";
	for(var i=0;i<count;i++) {
		string +="<input type=\"text\" name=\"option"+val+"-"+(i+1)+"\" id=\"option"+val+"-"+(i+1)+"\" value=\""+values[i]+"\"><br><br>";
	}
	string += "</td><td id=\"close"+id+"\">";
	for (var i=0;i<count;i++) {
		string +="<div id=\"remove"+val+"-"+(i+1)+"\" onclick=\"removeOptionDropdown(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div><br>";
	}
	string += "</td><td><p onclick=\"addOptionDropdown("+val+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>";
	return string;
}
function addSubject(i,pos,newposition) {
	document.getElementById("message").innerHTML="";
	temp = "";
	var id=i+1;
	if(pos==0)
		temp="<tr id=\"fullRow"+(newposition+1)+"\"><td colspan=\"2\" id=\"subject"+(newposition+1)+"\"></td></tr>";
		else if(pos==1) {
			temp="<tr id=\"fullRow"+(newposition+1)+"\"><td colspan=\"2\" id=\"subject"+(newposition+1)+"\">Text Answer</td></tr>";
		} else if(pos==2) {
			temp="<tr id=\"fullRow"+(newposition+1)+"\"><td colspan=\"2\" id=\"subject"+(newposition+1)+"\">Paragraph Answer</td></tr>";
		}else if(pos==3) 	{
			temp="<tr id=\"fullRow"+(newposition+1)+"\">"+multipleAnswer(newposition+1,i+1)+"</tr>";
		}else if(pos==4) {
			temp="<tr id=\"fullRow"+(newposition+1)+"\">"+checkbox(newposition+1,i+1)+"</tr>";
		}else if(pos==5) {
			temp="<tr id=\"fullRow"+(newposition+1)+"\">"+dropdown(newposition+1,i+1)+"</tr>";
		}
	return temp;
}
function addOptionDropdown(id) {
	document.getElementById("message").innerHTML="";
	var string = ""+document.getElementById("fullRow"+id).innerHTML;
	var count=0;
	for(var i=0;i<string.length-4;i++) {
		if(string[i]=='i'&&string[i+1]=='n'&&string[i+2]=='p'&&string[i+3]=='u'&&string[i+4]=='t')
			count = count+1;
	}
	var values = [];
	for(var i=0;i<count;i++) {
		values[i] = document.getElementById("option"+id+"-"+(i+1)).value;
	}
	string = "<td id=\"subject"+(id)+"\">";
	for(var i=0;i<count;i++) {
		string +="<input type=\"text\" name=\"option"+id+"-"+(i+1)+"\" id=\"option"+id+"-"+(i+1)+"\" value=\""+values[i]+"\"><br><br>";
	}
	string +="<input type=\"text\" name=\"option"+id+"-"+(i+1)+"\" id=\"option"+id+"-"+(i+1)+"\" value=\"Option "+(i+1)+"\"></td>";
	
	string += "<td id=\"close"+id+"\">";
	for (var i=0; i<=count; i++) {
		string += "<div id=\"remove"+id+"-"+(i+1)+"\" onclick=\"removeOptionDropdown(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div><br>";
	}
	string += "</td><td><p onclick=\"addOptionDropdown("+id+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>";
	document.getElementById("fullRow"+id).innerHTML = string;
} 
function addOptionCheckbox(id) {
	document.getElementById("message").innerHTML="";
	var string = ""+document.getElementById("fullRow"+id).innerHTML;
	var count=0;
	for(var i=0;i<string.length-4;i++) {
		if(string[i]=='i'&&string[i+1]=='n'&&string[i+2]=='p'&&string[i+3]=='u'&&string[i+4]=='t')
			count = count+1;
	}
	count = count/2;
	var values = [];
	for(var i=0;i<count;i++) {
		values[i] = document.getElementById("option"+id+"-"+(i+1)).value;
	}
	string = "<td id=\"subject"+(id)+"\">";
	for(var i=0;i<count;i++) {
		string +="<input type=\"checkbox\" name=\"option\" value=\"option"+id+"-"+(i+1)+"\" /><input type=\"text\" name=\"option"+id+"-"+(i+1)+"\" id=\"option"+id+"-"+(i+1)+"\" value=\""+values[i]+"\"><br><br>";
	}
	string +="<input type=\"checkbox\" name=\"option\" value=\"option"+id+"-"+(i+1)+"\" /><input type=\"text\" name=\"option"+id+"-"+(i+1)+"\" id=\"option"+id+"-"+(i+1)+"\" value=\"Option "+(i+1)+"\"></td>";
	
	string += "<td id=\"close"+id+"\">";
	for (var i=0; i<=count; i++) {
		string += "<div id=\"remove"+id+"-"+(i+1)+"\" onclick=\"removeOptionCheckbox(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div><br>";
	}
	string += "</td><td><p onclick=\"addOptionCheckbox("+id+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>";
	document.getElementById("fullRow"+id).innerHTML = string;
} 
function addOption(id) {
	// Function to add Options
	document.getElementById("message").innerHTML="";
	var string = ""+document.getElementById("fullRow"+id).innerHTML;
	var count=0;
	for(var i=0;i<string.length-4;i++) {
		if(string[i]=='i'&&string[i+1]=='n'&&string[i+2]=='p'&&string[i+3]=='u'&&string[i+4]=='t')
			count = count+1;
	}
	count = count/2;
	var values = [];
	for(var i=0;i<count;i++) {
		values[i] = document.getElementById("option"+id+"-"+(i+1)).value;
	}
	string = "<td id=\"subject"+(id)+"\">";
	for(var i=0;i<count;i++) {
		string +="<input type=\"radio\" name=\"option\" value=\"option"+id+"-"+(i+1)+"\" /><input type=\"text\" name=\"option"+id+"-"+(i+1)+"\" id=\"option"+id+"-"+(i+1)+"\" value=\""+values[i]+"\"><br><br>";
	}
	string +="<input type=\"radio\" name=\"option\" value=\"option"+id+"-"+(i+1)+"\" /><input type=\"text\" name=\"option"+id+"-"+(i+1)+"\" id=\"option"+id+"-"+(i+1)+"\" value=\"Option "+(i+1)+"\"></td>";
	
	string += "<td id=\"close"+id+"\">";
	for (var i=0; i<=count; i++) {
		string += "<div id=\"remove"+id+"-"+(i+1)+"\" onclick=\"removeOption(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div><br>";
	}
	string += "</td><td><p onclick=\"addOption("+id+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>";
	document.getElementById("fullRow"+id).innerHTML = string;
} 
function addSubjectAtEvent(ele) {
	//Function to add Subject at EventListener
	document.getElementById("message").innerHTML="";
	temp = "";
	var id = ele.id.charAt(12);
	var value = ele.value;
	var options = ["default","shortAnswer","paragraph","multipleChoice","checkbox","dropdown"];
	var pos=0;
	for(pos=0;pos<options.length;pos++)
		if(value==options[pos])
			break;
	if(pos==0)
		temp="<td colspan=\"2\" id=\"subject"+(id)+"\"></td>";
		else if(pos==1) {
			temp="<td colspan=\"2\" id=\"subject"+(id)+"\">Text Answer</td>";
		} else if(pos==2) {
			temp="<td colspan=\"2\" id=\"subject"+(id)+"\">Paragraph Answer</td>";
		}else if(pos==3) {
			temp="<td id=\"subject"+(id)+"\"><input type=\"radio\" name=\"option\" value=\"option"+id+"-1\" /><input type=\"text\" name=\"option"+id+"-1\" id=\"option"+id+"-1\" value=\"Option 1\"></td><td id=\"close"+id+"\"><div id=\"remove"+id+"-1\" onclick=\"removeOption(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div></td><td><p onclick=\"addOption("+id+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>";
		}else if(pos==4) {
			temp="<td id=\"subject"+(id)+"\"><input type=\"checkbox\" name=\"option\" value=\"option"+id+"-1\" /><input type=\"text\" name=\"option"+id+"-1\" id=\"option"+id+"-1\" value=\"Option 1\"></td><td id=\"close"+id+"\"><div id=\"remove"+id+"-1\" onclick=\"removeOptionCheckbox(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div></td><td><p onclick=\"addOptionCheckbox("+id+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>";
		}else if(pos==5) {
			temp="<td id=\"subject"+(id)+"\"><input type=\"text\" name=\"option"+id+"-1\" id=\"option"+id+"-1\" value=\"Option 1\"></td><td id=\"close"+id+"\"><div id=\"remove"+id+"-1\" onclick=\"removeOptionDropdown(this)\"><img src='image/remove.ico' alt='Remove Option' id='ico' /></div></td><td><p onclick=\"addOptionDropdown("+id+")\"><img src='image/add.ico' alt='Add Option' id='ico' /></p></td>"
		} 
	document.getElementById("fullRow"+id).innerHTML=temp;
}
function addQuestionType(pos, element) {
	// Function to add Question Type
	document.getElementById("message").innerHTML="";
	i=pos;
	var string = "<select id=\"questionType"+(i+1)+"\" name=\"questionType"+(i+1)+"\" onchange=\"addSubjectAtEvent(this)\">"
	if(element==0) {
		string +="<option selected disabled value=\"default\">--SELECT OPTION--</option><option  value=\"shortAnswer\">Short Answer</option><option  value=\"paragraph\">Paragraph</option><option  value=\"multipleChoice\">Multiple Choice</option><option  value=\"checkbox\">Checkboxes</option><option  value=\"dropdown\">Dropdown</option></select></td><td><p id=\"remove"+(i+1)+"\" onclick=\"RemoveField(this)\"><img id='ico' src='image/remove.ico' alt='Remove Field'/></p></td></tr>";
	}
	else if(element==1) {
		string += "<option disabled value=\"default\">--SELECT OPTION--</option><option  selected value=\"shortAnswer\">Short Answer</option><option  value=\"paragraph\">Paragraph</option><option  value=\"multipleChoice\">Multiple Choice</option><option  value=\"checkbox\">Checkboxes</option><option  value=\"dropdown\">Dropdown</option></select></td><td><p id=\"remove"+(i+1)+"\" onclick=\"RemoveField(this)\"><img id='ico' src='image/remove.ico' alt='Remove Field'/></p></td></tr>";
	}
	else if(element==2) {
		string += "<option disabled value=\"default\">--SELECT OPTION--</option><option  value=\"shortAnswer\">Short Answer</option><option  selected value=\"paragraph\">Paragraph</option><option  value=\"multipleChoice\">Multiple Choice</option><option  value=\"checkbox\">Checkboxes</option><option  value=\"dropdown\">Dropdown</option></select></td><td><p id=\"remove"+(i+1)+"\" onclick=\"RemoveField(this)\"><img id='ico' src='image/remove.ico' alt='Remove Field'/></p></td></tr>";
	}
	else if(element==3) {
		string += "<option disabled value=\"default\">--SELECT OPTION--</option><option  value=\"shortAnswer\">Short Answer</option><option  value=\"paragraph\">Paragraph</option><option selected value=\"multipleChoice\">Multiple Choice</option><option  value=\"checkbox\">Checkboxes</option><option  value=\"dropdown\">Dropdown</option></select></td><td><p id=\"remove"+(i+1)+"\" onclick=\"RemoveField(this)\"><img id='ico' src='image/remove.ico' alt='Remove Field'/></p></td></tr>";
	}
	else if(element==4) {
		string += "<option disabled value=\"default\">--SELECT OPTION--</option><option  value=\"shortAnswer\">Short Answer</option><option  value=\"paragraph\">Paragraph</option><option   value=\"multipleChoice\">Multiple Choice</option><option selected value=\"checkbox\">Checkboxes</option><option  value=\"dropdown\">Dropdown</option></select></td><td><p id=\"remove"+(i+1)+"\" onclick=\"RemoveField(this)\"><img id='ico' src='image/remove.ico' alt='Remove Field'/></p></td></tr>";
	}
	else if(element==5) {
		string += "<option disabled value=\"default\">--SELECT OPTION--</option><option  value=\"shortAnswer\">Short Answer</option><option  value=\"paragraph\">Paragraph</option><option  value=\"multipleChoice\">Multiple Choice</option><option value=\"checkbox\">Checkboxes</option><option selected value=\"dropdown\">Dropdown</option></select></td><td><p id=\"remove"+(i+1)+"\" onclick=\"RemoveField(this)\"><img id='ico' src='image/remove.ico' alt='Remove Field'/></p></td></tr>";
	}
	return string;	
}
function generateStringForRemove(count,removeId) {
	document.getElementById("message").innerHTML="";
	// Genetate string during removeField
	var questionNameValue = [];
	var questionTypeValue = [];
	var i = 0;
	var j = 0;
	var newPosition = 0;
	var string = "";
	var options = ["default","shortAnswer","paragraph","multipleChoice","checkbox","dropdown"];
	for(i=0;i<count;i++) {
		if(removeId!=i+1 || count==1) {

			questionNameValue[i] = document.getElementById("questionName"+(i+1)).value;
			questionTypeValue[i] = document.getElementById("questionType"+(i+1)).value;
			string += "<tr id=\"fullField"+(newPosition+1)+"\"><td><input id=\"questionName"+(newPosition+1)+"\" name=\"questionName"+(newPosition+1)+"\" placeholder=\"Question\" value=\""+questionNameValue[i]+"\"></td><td>";
				
			for(j=0;j<options.length;j++)
				if(questionTypeValue[i]==options[j])
					break;
			if(j==options.length)
				j=0;
			var temp = addQuestionType(newPosition,j);
			temp += addSubject(i,j,newPosition);
			string += temp;
			newPosition += 1;
		}
	}
	return (string);
}

function RemoveField(ele) {
	document.getElementById("message").innerHTML="";
	// Function to remove Feild from the available list
	if(fieldcount!=2) {
		id = (ele.id).charAt(6);
		var innerString = document.getElementById("formTable");
		//var temp= "<tr id=\"formField\"><td colspan=\"3\"><input id=\"formName\" value=\"Form Title\"/></td></tr>" ;
		var temp = "";
		temp += generateStringForRemove(fieldcount-1,id);
		temp += " <tr><td colspan=\"2\"><p onclick=\"AddField()\"><img id='ico' src='image/add.ico' alt='Add Field'/></p></td></tr><tr><td colspan=\"2\"><p id=\"submitBtn\" onclick=\"checkBeforeAction()\" >Submit</p></td></tr>";
		innerString.innerHTML = temp;
		fieldcount = fieldcount-1;
	}
	
}


function generateString(count) {
	// Generates String during the addField
	document.getElementById("message").innerHTML="";
	var questionNameValue = [];
	var questionTypeValue = [];
	var i = 0;
	var j = 0;
	var string = "";
	var options = ["default","shortAnswer","paragraph","multipleChoice","checkbox","dropdown"];
	for(i=0;i<count;i++) {
		questionNameValue[i] = document.getElementById("questionName"+(i+1)).value;
		questionTypeValue[i] = document.getElementById("questionType"+(i+1)).value;
		string += "<tr id=\"fullField"+(i+1)+"\"><td><input id=\"questionName"+(i+1)+"\" name=\"questionName"+(i+1)+"\" placeholder=\"Question\" value=\""+questionNameValue[i]+"\"></td><td>";
			
		for(j=0;j<options.length;j++)
			if(questionTypeValue[i]==options[j])
				break;
		if(j==options.length)
			j=0;
		var temp = addQuestionType(i,j);
		
		//Subject----
		temp += addSubject(i,j,i);
		string += temp;
	}
	return (string);
}
function AddField() {
	// Function to add a Field
	document.getElementById("message").innerHTML="";
	var innerString = document.getElementById("formTable");
	var temp = "";
	//var temp= "<tr id=\"formField\"><td colspan=\"3\"><input id=\"formName\" value=\"Form Title\"/></td></tr>" ;
	temp += generateString(fieldcount-1);
	temp += "<tr id=\"fullField"+fieldcount+"\"><td><input id=\"questionName"+fieldcount+"\" name=\"questionName"+fieldcount+"\" placeholder=\"Question\"></td><td><select id=\"questionType"+fieldcount+"\" name=\"questionType"+fieldcount+"\" onchange=\"addSubjectAtEvent(this)\"><option selected disabled value=\"default\">--SELECT OPTION--</option><option value=\"shortAnswer\">Short Answer</option><option value=\"paragraph\">Paragraph</option><option value=\"multipleChoice\">Multiple Choice</option><option value=\"checkbox\">Checkboxes</option><option value=\"dropdown\">Dropdown</option></select></td><td><p id=\"remove"+fieldcount+"\" onclick=\"RemoveField(this)\"><img id='ico' src='image/remove.ico' alt='Remove Field'/></p></td></tr><tr id=\"fullRow"+fieldcount+"\"><td colspan=\"2\" id=\"subject"+fieldcount+"\"></td></tr>";
	temp += " <tr><td colspan=\"2\"><p onclick=\"AddField()\"><img id='ico' src='image/add.ico' alt='Add Field'/></p></td></tr><tr><td colspan=\"2\"><p id=\"submitBtn\" onclick=\"checkBeforeAction()\" >Submit</p></td></tr>";
	innerString.innerHTML = temp;
	fieldcount = fieldcount+1;
}

//Login and Signup functions

var renderDatas = {};
var renderHTML = {
		"error": "<div id='error-message'></div>",
		"login":{
			"actionurl": "login",
			"controls": [
			           {
			        	   "type": "text", "placeholder": "Username or E-mail", "id": "username"
			           },
			           {
			        	   "type": "password", "placeholder": "Password", "id": "password"
			           }
			],
			"buttonText": "Login", 
			"action": function() {
				var user = document.getElementById('username').value;
				var pass = document.getElementById('password').value;
				// Do Javascript Regex Here
				AJAXRequest("Login",checkUser, "username="+user+"&password="+pass);
			}			
		},
		"signup":{
			"actionurl": "Signup",
			"controls": [
		           {
		        	   "type": "text", "placeholder": "Username", "id": "username", "value" : ""
		           },
		           {
		        	   "type": "password", "placeholder": "Password", "id": "password", "value" : ""
		           },
		           {
		        	   "type": "text", "placeholder": "E-mail", "id": "mail", "value" : ""
		           }
		],
			"buttonText": "Signup", 
			"action": function() {
				alert("hi sign");
				var user = document.getElementById('username').value;
				var pass = document.getElementById('password').value;
				var mail = document.getElementById('mail').value;
				// Do Javascript Regex Here
				//alert(user+pass+mail+status);
				AJAXRequest("Signup",checkUser, "username="+user+"&password="+pass+"&mail="+mail);
			}			
		}
};


function func_log(){
	alert("hi");
	var repl = document.getElementById('content_holder');
	var tag = "<div id='form_holder'>\n";
	var ctrls = renderHTML["login"]["controls"];
	for(var i = 0; i < ctrls.length; i++) {
		tag += '<input type="'+ctrls[i]["type"]+'" placeholder="'+ctrls[i]["placeholder"]+'" id="'+ctrls[i]["id"]+'" /><br>';
	}
	tag += '<input type="button" id="btn'+renderHTML["login"]["actionurl"]+'" value="'+renderHTML["login"]["buttonText"]+'" data-click="'+renderHTML["login"]["actionurl"]+'" />\n';
	tag += renderHTML["error"]+'\n';
	tag += '</div>\n';
	repl.innerHTML = tag;
	document.getElementById("btn"+renderHTML["login"]["actionurl"]).addEventListener("click",renderHTML["login"]["action"] );
}

function func_sign(){
	alert("hi");
	var repl = document.getElementById('content_holder');
	var tag = "<div id='form_holder'>\n";
	var ctrls = renderHTML["signup"]["controls"];
	for(var i = 0; i < ctrls.length; i++) {
		tag += '<input type="'+ctrls[i]["type"]+'" placeholder="'+ctrls[i]["placeholder"]+'" id="'+ctrls[i]["id"]+'" value="'+ctrls[i]["value"]+'" /><br>';
	}
	tag += '<input type="button" id="btn'+renderHTML["signup"]["actionurl"]+'" value="'+renderHTML["signup"]["buttonText"]+'" data-click="'+renderHTML["signup"]["actionurl"]+'" />\n';
	tag += renderHTML["error"]+'\n';
	tag += '</div>\n';
	repl.innerHTML = tag;
	document.getElementById("btn"+renderHTML["signup"]["actionurl"]).addEventListener("click", renderHTML["signup"]["action"]);
}

function func_logout(){
	alert("logout");
	setCookie("forms_users", datas.message, 0);
}

function AJAXRequest(url, func, args) {
	if(args === undefined) args= "";
	var xhr = new XMLHttpRequest();
	alert(args);
	xhr.open("POST",url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(args);
	xhr.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			func(JSON.parse(this.responseText));
		}
	};
}

function checkUser(datas){
	if(datas.code === '1') {
		alert("login");
		//AJAXRequest("render",renderUser);
		setCookie("forms_users", datas.message, 1);
		alert("Login Successful");
		window.location.assign("createForm.html");
		console.log(datas.message);
	} else {
		document.getElementById('error_message').innerText = datas.message;
	}
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
} 

function checkCookie() {
    var user = getCookie("forms_users");
    if (user != "") {
        alert("Welcome again " + user);
		window.location.assign("createForm.html");
        
    }
}


window.addEventListener("load", function(){
	var log = document.getElementById("btn_log");
	log.addEventListener("click",func_log);
	var sign = document.getElementById("btn_sign");
	sign.addEventListener("click",func_sign);
	var logout = document.getElementById("logoutIco");
	logout.addEventListener("click",func_logout);
});
window.addEventListener("load", checkCookie);


