function slackSubmit() {
  event.preventDefault();
  console.log("it worked");
}

function SubmittoChannel(){
        var values = [];
        $('input').each(function() {
            values.push($(this).val());
        });

        if((values[2]=='')||(values[1]=='')||(values[0]==''))//values[2]is the email, values[1] is the lastname, values[0] is the firstname, values[3] is the phone number, values[4] is the company name, you can also find the order in the function postUserFeedback, and you could change this based on how you pase the data.
            {
                bootbox.alert('Your full name and valid company email address is required to submit this form.');
            }
        else{
            if(emailCheck(values[2]))
                {
                    bootbox.alert('Your form has been successfully uploaded, our staff members will be in contact with you soon.')
                    postUserFeedback(values[2],values[1],values[0], values[3], values[4]);
                }
            else
                {
                    bootbox.alert('Your full name and valid company email address is required to submit this form.');
                }

        }
    }

    var kFeedbackWebHook = 'https://hooks.slack.com/services/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';
    function postToFeedbackChannel(json) {
      var string = JSON.stringify(json);
      var jxh = $.post( kFeedbackWebHook, string );
      return jxh;
    }

    String.prototype.format = function() {
        var i = 0, newStr = this;
        while (/%s/.test(newStr))
            newStr = newStr.replace("%s", arguments[i++]);
        return newStr;
    }

    function postUserFeedback( email, lastname, firstname, phone, company ) {
      var url = window.location.href;
      var fallback = "New feedback from <mailto:%s?subject=Stratifyd, Inc. Client Support|%s>".format(email,email);
      var page = '<'+url+'>';
      var json = {
         attachments : [
            {
               fallback: fallback,
               pretext: fallback,
               color: "warning",
               fields:[
                   {
                      title: 'LastName',
                      value: lastname,
                      short: false
                   },
                  {
                     title: 'FirstName',
                     value: firstname,
                     short: false
                  },
                  {
                    title: 'Phone Number',
                    value: phone,
                    short: false
                  },
                  {
                    title: 'Company Name',
                    value: company,
                    short: false
                  },
                  {
                    title: 'Browsing Page',
                    value: page,
                    short: false
                  }
               ]
            }
         ]
      }
//      networkIndicator( true );
      return postToFeedbackChannel(json).fail(function() {
        showAlertDialog('error', _L('Opps, something wrong.  Please try later.'));
      }).always(function() {
//        networkIndicator(false);
      });
    }

    function emailCheck(emailAddr)
    {
        if((emailAddr == null) || (emailAddr.length < 2)) return false ;
        var aPos = emailAddr.indexOf("@" ,1) ;
        var lowerAddr = emailAddr.toLowerCase();
        if(aPos < 0)
        {
            return false ;
        }
        if(emailAddr.indexOf("." ,aPos+2) < 0)
        {
            return false ;
        }
        var judgeifGmail = lowerAddr.indexOf("@gmail");
        console.log(judgeifGmail);
        if(judgeifGmail>0)
        {
            return false;
        }
        var judgeifQQ = lowerAddr.indexOf("@qq")
        if(judgeifQQ>0)
        {
            return false;
        }
        return true ;
    }
