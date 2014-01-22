function testpassword(str){
	var accept	=	/^[0-9a-zA-Z\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\s\,\.\/\;\'\[\]\\\{\}\|\:\"\<\>\?]{8,}$/

	var test1	=	/^[0-9]{8,}$/
	var test2	=	/^[a-z]{8,}$/
	var test3	=	/^[A-Z]{8,}$/
	var test4	=	/^[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\s\,\.\/\;\'\[\]\\\{\}\|\:\"\<\>\?]{8,}$/

	var test5	=	/^[a-zA-Z]{8,}$/
	var test6	=	/^[0-9a-z]{8,}$/
	var test7	=	/^[0-9A-Z]{8,}$/
	var test8	=	/^[a-z\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\s\,\.\/\;\'\[\]\\\{\}\|\:\"\<\>\?]{8,}$/
	var test9	=	/^[0-9\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\s\,\.\/\;\'\[\]\\\{\}\|\:\"\<\>\?]{8,}$/
	var test10	=	/^[0-9\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\s\,\.\/\;\'\[\]\\\{\}\|\:\"\<\>\?]{8,}$/

	var test11	=	/^[0-9a-zA-Z]{8,}$/
	var test12	=	/^[0-9a-z\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\s\,\.\/\;\'\[\]\\\{\}\|\:\"\<\>\?]{8,}$/
	var test13	=	/^[0-9A-Z\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\s\,\.\/\;\'\[\]\\\{\}\|\:\"\<\>\?]{8,}$/
	var test14	=	/^[a-zA-Z\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\s\,\.\/\;\'\[\]\\\{\}\|\:\"\<\>\?]{8,}$/

	if (accept.test(str)) {
		if (test1.test(str)) {
			return 3;
		}
		if (test2.test(str)) {
			return 3;
		}
		if (test3.test(str)) {
			return 3;
		}
		if (test4.test(str)) {
			return 3;
		}

		if (test5.test(str)) {
			return 4;
		}
		if (test6.test(str)) {
			return 4;
		}
		if (test7.test(str)) {
			return 4;
		}
		if (test8.test(str)) {
			return 4;
		}
		if (test9.test(str)) {
			return 4;
		}
		if (test10.test(str)) {
			return 4;
		}

		if (test11.test(str)) {
			return 5;
		}
		if (test12.test(str)) {
			return 5;
		}
		if (test13.test(str)) {
			return 5;
		}
		if (test14.test(str)) {
			return 5;
		}

		return 6;
	} else{
		return 2;
	};
}

function testcpassword(str){

	if (jQuery("input[name='cpassword']").val()=="") {
		return 0;
	} else{
		if (jQuery("input[name='password']").val()==jQuery("input[name='cpassword']").val()) {
			return 7;
		} else{
			return 1;
		};
	};

}

function showlabel(number){
	switch(number){
		case 0: return "[Please Type]"; break;
		case 1: return " <span style='color:red;'> [Different]</span>"; break;
		case 2: return " <span style='color:red;'> [Too Short]</span>"; break;
		case 3: return " <span style='color:red;'> [Weak]</span>"; break;
		case 4: return " <span style='color:blue;'> [Fair]</span>"; break;
		case 5: return " <span style='color:blue;'> [Good]</span>"; break;
		case 6: return " <span style='color:green;'> [Perfect]</span>"; break;
		case 7: return " <span style='color:green;'> [Same]</span>"; break;
	}

}

jQuery(document).ready(function(){
	jQuery("input[name='password']").keyup(function(){
		jQuery("#passwordlabel").html(showlabel(testpassword(jQuery("input[name='password']").val())));
		jQuery("#cpasswordlabel").html(showlabel(testcpassword(jQuery("input[name='cpassword']").val())));
	});
	jQuery("input[name='cpassword']").keyup(function(){
		jQuery("#cpasswordlabel").html(showlabel(testcpassword(jQuery("input[name='cpassword']").val())));
	});
});