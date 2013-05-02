function loadXMLDoc(dname)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",dname,false);
xhttp.send();
return xhttp.responseXML;
}

function get_firstChild(n)
{
y=n.firstChild;
while (y.nodeType!=1)
  {
  y=y.nextSibling;
  }
return y;
} 