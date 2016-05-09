<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ Register TagPrefix="header" TagName="a" Src="~/inc/header.ascx" %>
<%@ Register TagPrefix="footer" TagName="a" Src="~/inc/footer.ascx" %>

<html>
<head>
	<title>Technekes - Create Demand</title>

<meta name="google-site-verification" content="7eMHeVLRxDJ0LS2rm5dsqqDxbgZzG0HGb_2GGBoSDm4" />
<meta name="msvalidate.01" content="A7409671ED1CD2DE3CEEB0A25C4C8916" />
<META name="y_key" content="b6467ff9c8f5af5f">
	
	
<header:a ID="myHeader" runat="server" />

	<div style="padding : 25px;">
		<img src="/images/header/home.jpg" width="897" height="306" alt="" style="margin-bottom : 30px; border : 10px solid #fff;" />			
		
		<div style="float : left; width : 320px; color : #BDBDBD;">
			<div id="videoPlayer" style="width:320px; height:180px;">
	            <video width="320" height="180" src="https://s3.amazonaws.com/technekes-corp/vids/work.mp4" poster="/flash/extimages/videos/work.jpg" controls>
                <img src="/flash/extimages/videos/work.jpg" width="320" height="180">
				</video>
            </div>
            <br /><br />
			We can't wait to push back from the planning table and get to work. Click play above for more.
		</div>
		
		<div id="headerOverview" style="width : 575px;">
			<h3>Bridging the gap between sales and marketing to bring buyers and<br>sellers together.</h3>
			<p>Technekes provides a single point of integration for data and marketing services to drive B2B sales for agriculture, healthcare and pharmaceutical companies throughout North America.</p>
      <p>Because we operate at the precise intersection of four disciplines &mdash; telemarketing, digital marketing, technology services and data services &mdash; our marketing campaigns are accurate and relevant. Our calls are timely and informed. Our leads are actionable and profitable. And we're able to treat your customers as if they were our own.</p>
      <p>For the sake of simplicity, we like to say that we create sales, create insights, create payments, and create relationships. But long story short, we "Create Demand."</p>
      <p>We do it exceptionally well. And we'd like to do the same for you.</p>
            <p>Sound good? <a href="#footer">Let's talk.</a></p>
		</div>
		<div class="clear"></div>
	</div>


	
</div> <!-- #header -->



<div class="subPadding">
	<div class="homeTeaser">
		<div class="homeTeaserPadding">
			<a href="/work/"><img src="/images/teasers/home_teaser_work.jpg" width="269" height="140" alt="" style="margin-bottom : 15px;" /></a><br />
			<a href="/work/"><img src="/images/teasers/home_teaser_work.gif" width="53" height="23" alt="WORK" class="homeTeaserTitle" /></a>
			Multi-platform, integrated campaigns, lead generating calling programs, precision targeted direct mail campaigns, custom dashboards. The work we generate is based on solid strategy, defined goals, proven processes and the goal of creating demand for your product or service. 
			<a href="/work/" class="homeTeaserMore"><img src="/images/teasers/home_teaser_more_work.gif" width="269" height="30" alt="" /></a>
			
		</div>
	</div>
	
	
	<div class="homeTeaser" style="margin : 0px 25px;">
		<div class="homeTeaserPadding">
			<a href="/work/#services"><img src="/images/teasers/home_teaser_services.jpg" width="269" height="140" alt="" style="margin-bottom : 15px;" /></a><br />
			<a href="/work/#services"><img src="/images/teasers/home_teaser_services.gif" width="82" height="24" alt="SERVICES" class="homeTeaserTitle" /></a>
			Our services are designed to generate results. Targeting customers, qualifying leads, supporting sales and several other proven services are delivered with top-shelf customer service. We want you to work with us because we deliver results.  Not only that, we're good people.
            <a href="/work/#services" class="homeTeaserMore"><img src="/images/teasers/home_teaser_more_services.gif" width="269" height="30" alt="" /></a>		</div>
	</div>
	
	<div class="homeTeaser">
		<div class="homeTeaserPadding">
			<a href="/culture/"><img src="/images/teasers/home_teaser_culture.jpg" width="269" height="140" alt="" style="margin-bottom : 15px;" /></a><br />
			<a href="/culture/"><img src="/images/teasers/home_teaser_culture.gif" width="76" height="24" alt="CULTURE" class="homeTeaserTitle" /></a>
			Our offices include a collection of farmers, tech geeks, designers, dog lovers, strategists, and guitar players who share a passion for helping other businesses better their sales. Some think of us as a team, others as a big family that knows when to rally and make great things happen.  
			<a href="/culture/" class="homeTeaserMore"><img src="/images/teasers/home_teaser_more_culture.gif" width="269" height="30" alt="" /></a>
		</div>
	</div>

	<div class="clear"></div>
	
</div>


				

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
        allowfullscreen:'true',
        allowscriptaccess:'always',
        wmode:'opaque'
    };
    var attributes = false;

    swfobject.embedSWF("/flash/player.swf", "videoPlayer", "320", "180", "9.0.115.0", "#000000", flashvars, params, attributes);
</script>

</body>
</html>