var val=0;
function operation(a)
{

switch(a)
{
	case 1:
	{  
		val=val+1;

document.getElementById("number").innerHTML=val;
break;
	}
	case -1:
	{
		val=val+a;
	document.getElementById("number").innerHTML=val;	
	break;
	}
	case 0:
	{
			val=0;
			document.getElementById("number").innerHTML=val;	
			break;

		
	}
}
}