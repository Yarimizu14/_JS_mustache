document.addEventListener("DOMContentLoaded", function() {

	var t = document.getElementById("target");

	/*
	*	単純なテンプレート
	*/
	var template = "<div><p>{{name}}</p><img src='./{{img}}'/></div>";

	var html = Mustache.to_html( template, {
	    name:"mach3",
	    img : "hoge.png"
	});
	t.innerHTML += html;

/*
	var template_obj = "<div>
		<p>{{}}<p>		
	</div>"

	var html_obj = Mustache.to_html( template, {
	    person : {
		    name: "mach3",

	    },
	    img : "hoge.png"
	});
*/
	/*
	*	for文でテンプレートを繰り返す。
	*/
	var template_for = "<div>{{#friends}}<p>{{friendname}}<p>{{/friends}}</div>"
	var html_for = Mustache.to_html( template_for, {
	    person : {
		    name: "Mustache",
			img : "hoge.png"		    
	    },
	    friends : [
	    	{ firstname: "firend1", lastname: "hoge" },
	    	{ firstname: "firend2", lastname: "fuga" },
	    	{ firstname: "firend3", lastname: "foo"  }
	    ],
	    friendname : function() {
	    	return this.firstname + " " + this.lastname;
	    }
	});
	t.innerHTML += html_for;

}, false);
