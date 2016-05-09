<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ Register TagPrefix="header" TagName="a" Src="~/inc/header.ascx" %>
<%@ Register TagPrefix="footer" TagName="a" Src="~/inc/footer.ascx" %>
<%@ Register TagPrefix="services" TagName="a" Src="~/work/services.ascx" %>
<%@ Register TagPrefix="practice" TagName="a" Src="~/work/practice.ascx" %>

<html>
<head>
	<title>Services and Practice Groups - Technekes - Create Demand</title>

<meta name="google-site-verification" content="7eMHeVLRxDJ0LS2rm5dsqqDxbgZzG0HGb_2GGBoSDm4" />
<meta name="msvalidate.01" content="A7409671ED1CD2DE3CEEB0A25C4C8916" />
<META name="y_key" content="b6467ff9c8f5af5f">
	
<header:a ID="myHeader" runat="server" />	

	<div style="padding : 25px;">
		<img src="/images/header/work.jpg" width="897" height="306" alt="" style="margin-bottom : 30px; border : 10px solid #fff;" />			
		
		<div style="float : left; width : 320px; color : #BDBDBD;">
			<div id="videoPlayer" style="width:320px; height:180px;">
				<video width="320" height="180" src="https://s3.amazonaws.com/technekes-corp/vids/work.mp4" poster="/flash/extimages/videos/work.jpg" controls>
                <img src="/flash/extimages/videos/work.jpg" width="320" height="180">
				</video>
            </div>
            <br /><br />
			Pushing back from the planning table and getting to work is the best part of our day.
		</div>
		
		<div id="headerOverview" style="width : 575px;">
			
            <h3>We're invested in your sales channel.</h3>

	<p> Multi-variable. We could be talking about our campaigns or the Technekes' team. Multiple disciplines and channels are combined with strategy and execution by a team that's been there before. Many times.</p>
	<p>We've worked with different goals and objectives, industries, products, services, geographies and other variables to deliver what our clients hire us for - creating market demand for their products. 
	From managing countless, disparate data sources to navigating the needs of cyclical businesses, Technekes works in close collaboration with our client's sales and marketing teams to deliver campaigns to reach out to clients, suspects and prospect, set appointments, qualify opportunities, query sales leads, manage territories, fulfill product needs and boost channel support. </p>
	<p>Our work can be as simple as fine-tuning a database or as complex as a multi-channel program involving direct mail, call action and custom tools and applications to monitor results in real-time.</p>     
		</div>
		
		<div class="clear"></div>
	</div>
</div> <!-- #header -->

<div class="content">


<div class="divF7" id="services">
	<div class="subPadding">
    
    	<h3 class="subHeading">services</h3>
    	<br />
		
        <div style="float:left; width:540px;">
                

<h2>Our clients know what's important, and so do we.</h2>
<p>We make them money. We give them peace of mind. We do the work, and we do it well. That means years and years of repeat business, expanded programs, expanded campaign and increased results. </p>
<p>Technekes is absolutely passionate about delivering results, because through your success, we find our own. And why our clients continue to expand their programs and campaigns with us. Here are some examples of how we Create Demand for you.</p>



        </div>
        
        <div style="float:right; width:359px;">
        		
                <div style="width:359px;" class="photoContainer">
                <div class="photoInner">
                	<img src="/images/photos/work_services.jpg" width="327" height="132" /><br />
               		<div class="caption">
                    	<div class="padding">
                    		<a href="#footer" style="color:#fff;">Contact us</a> to find out how we can drive your bottom line results.
                        </div>
                    </div>
                </div>
                </div>
         </div>
         
         <div class="clear"></div>
     
    
    
    	 <div class="slideGroup">
         
         
         	<services:a ID="myServices" runat="server" />
         
         
         
         </div> <!-- End FULL Slide Group -->
    
     
     
     
	</div>
</div> <!-- End Services -->


<div class="divF1" id="industries">
	<div class="subPadding">
    	<h3 class="subHeading">industries</h3>
    	<br />
		
        <div style="float:left; width:540px;">
        

<p>Since we are working to drive opportunity, to boost awareness and promote your offering, Technekes works hard to learn your company and its go-to-market approach. By knowing every little thing about your industry - by being experts on your products, your sales process, your distribution channel and your customers - we are better equipped to drive demand. </p>
<p>We hire and meticulously cultivate talent who've stood in your shoes, walked a mile in them, and kept right on moving. We only work in the B2B space, where territory coverage, field sales and support, distribution channels, customer support and general awareness align. Technekes' strategic approach and campaign execution is focused on agriculture, healthcare (including life sciences, medical device and pharmaceuticals) and manufacturing/industrial.</p>
		</div>

		<div style="float:right; width:358px;">
                <img src="/images/photos/work_practice.jpg" width="358" height="234" />  
        </div>
        
        <div class="clear"></div>
          
            
        <div class="slideGroup">
        	
        	<practice:a ID="myPractice" runat="server" />   
            
            
                  
        </div> <!-- End FULL SlideGroup -->   
    </div>
</div> <!-- End Practice Group -->

</div> <!-- End Content -->

<footer:a ID="myFooter" runat="server" />				


<script src="http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>

<script>
    var flashvars = {
        file: 'https://s3.amazonaws.com/technekes-corp/vids/work.mp4',
        image: '/flash/extimages/videos/work.jpg',
        controlbar: 'over',
        'controlbar.idlehide': 'true'
    };
    var params = {
        allowfullscreen: 'true',
        allowscriptaccess: 'always',
        wmode: 'opaque'
    };
    var attributes = false;

    swfobject.embedSWF("/flash/player.swf", "videoPlayer", "320", "180", "9.0.115.0", "#000000", flashvars, params, attributes);
</script>



<div id="modalVideo" style="display : none; text-align : center;">
	<div id="vid" style="width: 640px; height: 360px; background: #000; text-align : center;">
		<video width="640" height="360" src="" poster="" controls>
	</div>
</div>
<script src="/js/jquery.simplemodal-1.3.5.min.js" type="text/javascript"></script>
<script>
$(document).ready(function(){

	// trigger a practice open is hash passed in
	var hash = location.hash;
	if (hash) {
		$(hash + ' .slideTitle').trigger('click');
	}	

	$('.videoTrigger').click(function (e) {
		e.preventDefault();
		var video = $(this).attr('href');
		$("#vid video").attr('src', 'https://s3.amazonaws.com/technekes-corp/vids/' + video + '.mp4');
		$("#vid video").attr('poster', '/flash/extimages/videos/' + video + '.jpg');
		$("#modalVideo").modal({
			opacity : '80',
			onShow: function() {
				
				
			
				var flashvars = {
					file: 'https://s3.amazonaws.com/technekes-corp/vids/' + video + '.mp4',
					image: '/flash/extimages/videos/' + video + '.jpg',
					controlbar: 'over',
					'controlbar.idlehide': 'true'
				};
				var params = {
					  base: "/flash",
					  allowfullscreen: "true"
				};
				var attributes = false;
				
				swfobject.embedSWF("/flash/player.swf", "vid", "640", "360", "9.0.115.0", "#000000", flashvars, params, attributes);
				}
			});
		
	});
	
});
</script>		




</body>
</html>
