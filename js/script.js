jQuery(document).ready(function($) {

    // HOVER
    $("#nav a, .subNav a, #execPicts a, #staffPicts a, .leftarrow, .rightarrow").hover(
    // over
		function() {
		    var theImg = $(this).find('img:first');
		    // store the original image src
		    theImg.data("originalsrc", theImg.attr("src"));

		    // add -over to the image unless it is already -over
		    if (!theImg.attr("src").match(/-over/)) {
		        theImg.attr("src", theImg.attr("src").replace(/\./, "-over."));
		    }

		},

    // out
		function() {
		    var theImg = $(this).find('img:first');
		    // replace the original src
		    if (theImg.data("originalsrc") != null) {
		        theImg.attr("src", theImg.data("originalsrc"));
		    }
		}
	);



    // SCROLL TO
    $('a[href*=#]').smoothScroll({

        speed: 1500,
        afterScroll: function() {
            if (this.hash == '#header') {
                location.hash = '';
            } else {
                location.hash = this.hash;
            }

        }
    });



    $('#followMe').scrollFollow({
        offset: 275
    }
	);




    $("#execPicts a, #staffPicts a").click(
		function() {

		    $this = $(this);

		    var theDiv = $this.attr('href').substring(1);

		    $(".slideContent").slideUp();
		    $(".slideTitle:hidden").slideDown();
		    $('#' + theDiv + ' .slideTitle').slideUp();
		    $('#' + theDiv + ' .slideContent').slideDown();

		    setPeople();

		    $img = $this.find('img');
		    if ($img.data('originalsrc') && !$img.data('originalsrc').match('-over.')) {
		        $img.attr('src', $img.attr('src').replace('\.', '-over.'));
		        $img.data('originalsrc', $img.data('originalsrc').replace('\.', '-over.'));
		    }


		    return false;
		}
	);


    function setPeople() {
        $('#execPicts a img, #staffPicts a img').each(function() {
            $(this).attr('src', $(this).attr('src').replace('-over', ''));
        });
    }



    $('a[href*=#staffPicts], a[href*=#execPicts]').click(
		function() {
		    $(".slideContent").slideUp();
		    $("h2.slideTitle:hidden").slideDown();
		    setPeople();
		});


    // trigger a people open is hash passed in
    var hash = location.hash;
    if (hash) {
        $("a[href=" + hash + "]").trigger('click');
    }


    $("#myController").jFlow({
        slides: "#mySlides",
        width: "100%",
        height: "205px",
        duration: 400
    });



    $("h2.slideTitle").click(
		function() {
		    $(".slideContent").slideUp();
		    $(".slideTitle:hidden").slideDown();
		    $(this).hide();
		    $(this).next().slideDown();

		    setPeople();

		    return false;
		});




    $("#charlotteTitle").click(
		function() {
		    $(this).css("color", "#328bab");
		    $("#raleighTitle").css("color", "#6a6969");
        $("#canadaTitle").css("color", "#6a6969");
        $(this).find('span').text("-");
		    $("#raleighTitle span").text("+");
        $("#canadaTitle span").text("+");
        $("#raleigh").hide();
        $("#canada").hide();
		    $("#charlotte").slideDown("slow");

		});


    $("#raleighTitle").click(
		function() {
		    $(this).css("color", "#328bab");
		    $("#charlotteTitle").css("color", "#6a6969");
        $("#canadaTitle").css("color", "#6a6969");
        $(this).find('span').text("-");
		    $("#charlotteTitle span").text("+");
        $("#canadaTitle span").text("+");
        $("#charlotte").hide();
        $("#canada").hide();
        $("#raleigh").slideDown("slow");

		});


    $("#canadaTitle").click(
    function() {
        $(this).css("color", "#328bab");
        $("#charlotteTitle").css("color", "#6a6969");
        $("#raleighTitle").css("color", "#6a6969");
        $(this).find('span').text("-");
        $("#charlotteTitle span").text("+");
        $("#raleighTitle span").text("+");
        $("#charlotte").hide();
        $("#raleigh").hide();
        $("#canada").slideDown("slow");

    });








    $("#contactForm, #contactFormBig").submit(function(e) {
        var $this = $(this);

        var $nameField = $this.find("input[name=name]");
        if (!$nameField.attr('value')) {
            alert('Please enter your Name.');
            $nameField.focus();
            return false;
        }

        var $emailField = $this.find("input[name=email_real]");
        if (!$emailField.attr('value')) {
            alert('Please enter your Email.');
            $emailField.focus();
            return false;
        }
        var $phoneField = $this.find("input[name=phone]");
        var $commentsField = $this.find("textarea[name=comments]");
        var params = $this.serialize();
        //$.post("/contact/contact.aspx", params);
        //$nameField.val('');
        //$emailField.val('');
        //$phoneField.val('');
        //$commentsField.val('');
        //alert('Thank you for contacting us!');

        $.post("/contact/contact.aspx", params,
           	function(data) {
            $this.find(".button").fadeOut('slow', function(){
                $this.find(".borders").attr('value', '');
                $this.find(".button").after(data);
                $("#response").fadeIn('slow');
            });

        	setTimeout(function(){
        			$("#response").fadeOut('slow',function(){
        				//$("#response").remove();
        				$this.find(".button").fadeIn('slow');
        			});
        		}, 5000);

        });

        return false;

    });


    $("#callCenterForm").submit(function(e) {
        var $this = $(this);


        var params = $this.serialize();
        $.post("/cgi-bin/call_center_application.cgi", params,
		   	function(data) {
		   	    $this.find(".button").fadeOut('slow', function() {
		   	        $this.find(".button").after(data);
		   	        $("#response").fadeIn('slow');
		   	    });

		   	    setTimeout(function() {
		   	        $("#response").fadeOut('slow', function() {
		   	            $("#response").remove();
		   	            $this.find(".button").fadeIn('slow');
		   	        });
		   	    }, 5000);

		   	});

        return false;

    });





});



window.onload = function() {
	// PRELOAD

	$("#nav a, .subNav a, #execPicts a, #staffPicts a").each(
		function() {
			var theImg = $(this).find('img:first');
			if (!theImg.attr("src").match(/-over/) ) {
				$("<img>").attr( "src", theImg.attr("src").replace(/\./, "-over.") );
			}
		}
	);

}
