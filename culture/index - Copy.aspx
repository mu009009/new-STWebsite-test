<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="CorporateSite.culture.index" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ Register TagPrefix="header" TagName="a" Src="~/inc/header.ascx" %>
<%@ Register TagPrefix="footer" TagName="a" Src="~/inc/footer.ascx" %>
<%@ Register TagPrefix="offices" TagName="a" Src="~/culture/offices.ascx" %>

<html>
<head>
	<title>Culture at Technekes - Create Demand</title>

<meta name="google-site-verification" content="7eMHeVLRxDJ0LS2rm5dsqqDxbgZzG0HGb_2GGBoSDm4" />
<meta name="msvalidate.01" content="A7409671ED1CD2DE3CEEB0A25C4C8916" />
<META name="y_key" content="b6467ff9c8f5af5f">

<header:a ID="myHeader" runat="server" />

	<div style="padding : 25px;">
		<img src="/images/header/culture.jpg" width="897" height="306" alt="" style="margin-bottom : 30px; border : 10px solid #fff;" />
		<div style="float : left; width : 320px; color : #BDBDBD;">
			<div id="videoPlayer" style="width:320px; height:180px;">
				<video width="320" height="180" src="https://s3.amazonaws.com/technekes-corp/vids/culture.mp4" poster="/flash/extimages/videos/culture.jpg" controls>
	          	  <img src="/flash/extimages/videos/culture.jpg" width="320" height="180">
				 </video>
            </div>
            <br /><br />
			Check out this video to see how we roll.
		</div>

		<div id="headerOverview" style="width : 575px;">

           <h3>Innovative thinking, inspired solutions, and passion for results.</h3>

    <p>What started off 15 years ago as a data-driven marketing company based in Jack's kitchen has blossomed into a flourishing demand generation powerhouse with offices in Charlotte, NC, the Research Triangle Park, NC, and Kitchener, Canada.</p>

    <p>We pride ourselves on driving sales in an atmosphere fostering innovative thinking, inspired solutions, and a passion for results. And we’re even more proud of the energy we devote to helping each other grow and thrive &mdash; both here at work and in the community. </p>

    <p>The way we see it, there's no point of being a pioneer in the world of marketing, unless you're also a pioneer in the world at large. And if you have fun along the way, well, that's just the "Technekes way."</p>

		</div>

		<div class="clear"></div>
	</div>
</div> <!-- #header -->

<div class="content">


<!--
<div class="divF7" id="history">
  <div class="subPadding">
      <img src="/images/titles/culture_history.png" /><br />


        <h2>Technekes Timeline : 10 Years in Review</h2>

    <p>Did you know Technekes started in Jack's kitchen? It did, and that's just one of the many tidbits revealed in our Ten Year Timeline. Enjoy.</p>

      <div id="timeline" style="width:917px; height:267px;">
              <a href="http://www.adobe.com/go/getflashplayer" target="_self">Get Flash</a>
      </div>



  </div>
</div>
-->



<div class="divF1" id="traditions">
	<div class="subPadding">
    	<img src="/images/titles/culture_traditions.png" width="196" height="40" />
        <br />

        <div style="float:left; width:440px;">

        	<img src="/images/photos/tk_traditions.jpg" width="435" height="290" />

            <div style="margin: 20px 0 0 25px;">
            <asp:Repeater ID="BlogFeedTraditionsRepeater" runat="server">
            <HeaderTemplate>
            </HeaderTemplate>
            <ItemTemplate>
                <div class="footerBlogPost">
                    <a href="<%# DataBinder.Eval(Container.DataItem, "Link") %>">
                    <%# DataBinder.Eval(Container.DataItem, "Title") %>
                    </a>
                    <br />
                    <div><%# DataBinder.Eval(Container.DataItem, "PublishDate", "{0:D}")%></div>
                </div>
            </ItemTemplate>
            <FooterTemplate>
                <!--</div>-->
            </FooterTemplate>
        </asp:Repeater>
        </div>
		</div>

		<div style="float:right; width:440px;">
          <h2>As much as we pride ourselves on doing good work, we also pride ourselves on doing "good."</h2>
<p>It's been part of our culture for as long as we've been in business. We've opened our wallets to the <a href="http://www.rmhofcharlotte.org/" target="_blank">Charlotte Ronald McDonald House</a> and <a href="http://www.habitatwake.org/" target="_blank">Wake County Habitat for Humanity</a>. We've opened our tool boxes to assemble and donate bikes to area kids. We've opened our hearts to national organizations, including <a href="http://movember.com" target="_blank">Movember</a> and <a href="http://leltfoundation.org/" target="_blank">The Lelt Foundation</a>. And we've founded and sponsored events for <a href="http://allintofightcancer.org/" target="_blank">All-In To Fight Cancer</a> and <a href="http://www.technekes.com/blog/were-lovin-itred-shoe-shootout-a-success" target="_blank">The Red Shoe Shootout</a>.</p>
<p>And here's the bonus &mdash; we have fun doing it. A quick peek at our annual holiday gift cards &mdash; every year featuring the causes we support &mdash; reminds our clients that the more good work we do for them, the more good work we can do for others. They can't wait to see what we'll do next.</p>
<p>And neither can we.</p><br>


        <div class="charities">
            <h4><img src="/images/layout/all-in_heart.png" style="margin-right: 10px;">All-In To Fight Cancer</h4>
                <p>
                    When a mutual friend was diagnosed with cancer, Steve and Scott banded together with a few other friends to found <a href="http://www.allintofightcancer.org/" target="_blank">All-In To Fight Cancer</a>, a charitable organization dedicated to raising funds to fight cancer.  Their first fundraiser &mdash; a Texas Hold 'Em Poker tournament in 2011 &mdash; has since become an eagerly anticipated annual event, making significant contributions to local causes including 24 Hours Of Booty, the Presbyterian Cancer Center Nurse Navigator Program and Go Jen Go.
                </p>

                <h4><img src="/images/layout/ronald_mcdonald_house.png" style="margin-right: 10px;">The Red Shoe Shootout</h4>
                <p>
                    Technekes is a long-time supporter of Ronald McDonald House, and our own Jack Ross is a nationally ranked shooter, so helping found and sponsor the <a href="http://www.technekes.com/blog/were-lovin-itred-shoe-shootout-a-success">Red Shoe Shootout</a> has been a natural for us. Since the first Shootout in 2011, Technekes has provided sponsorship, organizers, volunteers &mdash; and of course, one heckuva sharpshooter &mdash; to the annual event.
                </p>
        </div>

        </div>

        <div class="clear"></div>

    </div>
</div>



<div class="divF1" id="offices">
	<div class="subPadding">
    	<img src="/images/titles/culture_offices.png" width="64" height="40" /><br />

        <h2 class="officeTitle" id="charlotteTitle"><span>-</span> Headquarters : Charlotte</h2>

        <h2 class="officeTitle" id="canadaTitle"><span> + </span> Canada Office</h2>

        <br />

        <offices:a ID="myOffices" runat="server" />


    </div>
</div> <!-- End Offices -->



</div> <!-- End Content -->

<footer:a ID="myFooter" runat="server" />


<script src="http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>
<script>
    var flashvars = {
        file: 'https://s3.amazonaws.com/technekes-corp/vids/culture.mp4',
        image: '/flash/extimages/videos/culture.jpg',
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


<script>
var flashvars = false;
var params = {
	  base: "/flash"
};
var attributes = false;

swfobject.embedSWF("/flash/timeline.swf", "timeline", "917", "267", "9.0.115.0", "#F7F7F7", flashvars, params, attributes);
</script>





</body>
</html>
