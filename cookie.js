function setCookie()
{
document.cookie = "name="+document.getElementById("txtName").value;
document.cookie = "email="+document.getElementById("txtEmail").value;
alert("cookies set");

}

function getCookie()
{
var cookiesArray = document.cookie.split("; ");
for(var i=0; i<cookiesArray.length;i++)
{
var nameValueArray = cookiesArray[i].split("=");
if(nameValueArray[0]=="name")
{
document.getElementById("txtName").value=nameValueArray[1];
}
else if(nameValueArray[0]=="email")
{
document.getElementById("txtEmail").value=nameValueArray[1];
alert('dd');
}
}
alert('Display cookies');
}