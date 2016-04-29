$(document).ready(function(){
	clic=3
	pretpourmembre=0
	var chiffre=''
	var chiffre2=''
	var membre1=''

	$(".buttons").click(function()
	{
		valeur1=$(this).text()
		if (valeur1==1 || valeur1==2 || valeur1==3 || valeur1==4 || valeur1==5 || valeur1==6 || valeur1==7 || valeur1==8 || valeur1==9 || valeur1==0)
		{
			if (pretpourmembre==1) 
			{
				clic=0
				valeur1=$(this).text()
				console.log(valeur1)
				chiffre2 += valeur1
				membre1 += valeur1
				chiffre2 = parseInt(chiffre2)
				console.log(chiffre2)
			}
			else
			{
				clic=0
				chiffre += valeur1
				membre1 += valeur1
				chiffre = parseInt(chiffre)
				console.log(chiffre)
			}
			
		}
		else if (valeur1=='+' || valeur1=='-' || valeur1=='*' || valeur1=='/') 
		{
			clic=1
			pretpourmembre=1
			membre1 += valeur1
			signe=valeur1
			console.log(membre1)
			console.log(signe)
		}
		else if(valeur1=='=')
		{
			clic=2
			console.log(chiffre)
			console.log(chiffre2)
			if (signe=='-') 
			{
				resultat=chiffre-chiffre2
				console.log(chiffre-chiffre2)
			}
			else if (signe=='*') 
			{
				resultat=chiffre*chiffre2
				console.log(chiffre*chiffre2)
			}
			else if (signe=='/') 
			{
				resultat=chiffre/chiffre2
				console.log(chiffre/chiffre2)
			}
			else if (signe=='+') 
			{
				resultat=chiffre+chiffre2
				console.log(chiffre+chiffre2)
			}
		}
		
	if (clic==0) 
	{
		$("#number").val(membre1)
	}
	if (clic==1) 
	{
		$("#number").val(membre1)
	}
	if (clic==2) 
	{
		$("#number").val(resultat)
	}

});

function restart(){
	clic=3
	pretpourmembre=0
	var chiffre=''
	var chiffre2=''
	var membre1=''
	$("#number").val(pretpourmembre)
}

$('#restart').click( function(){
		restart()
	});

});