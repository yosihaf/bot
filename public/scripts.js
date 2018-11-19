function onSubmit(event){
	event.preventDefault();
	let isValid;
	$("input").each(function() {
		let element = $(this);
		if (element.val() == "") {
			isValid = false;
		}
	});
	if (isValid) {
		alert('some fields are empty!');
		return false;
	}
	let url ="/login";
	let data = {userName: $("#btnNmae").val() , password: $("#btnPassword").val()}
	fetch(url, {method : "POST",
		headers: {
			'Accept': 'application/json', 
			'Content-Type': 'application/json'
			},
		body: JSON.stringify(data)
		}).then((response) =>{
			return response.json();
		}).then(function(myJson) {
			if(!myJson.userExist)
				alert("user not exists");
			else
			{	
				$("#id01").modal("hide");
				$("#loginNav").toggleClass("hide");
				$("#logoutNav").toggleClass("hide");
				$("#linksUl").empty();
				myJson.links.forEach(function(link){
					$("#linksUl").append("<li><a id=" + link.id + " href='#' >" + link.name + "</a></li>");
					$("#" + link.id).click( function(e) {e.preventDefault(); navigation(link.id, myJson.isManager ); return false; });
				});
				
			}
		}).catch(function(error) {
        console.log(error);
		});
}