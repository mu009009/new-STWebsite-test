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
			<iframe width="320" height="180" src="https://www.youtube.com/embed/nhFcPEABcdo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
            <br /><br />
			An anticipated tradition - our annual holiday video.
		</div>

		<div id="headerOverview" style="width : 575px;">

           <h3>A 15-year history of doing good work, while doing good.</h3>

    <p>What started off in Jack's kitchen in 1999 as a data-driven marketing company has blossomed into a flourishing demand generation powerhouse with headquarters in Charlotte and virtual offices throughout North America.</p>

    <p>And as proud as we are of our history and business success, we're even more proud of our reputation for helping each other grow and thrive - both here at work and in the community.</p>

    <p>The way we see it, there's no point in being a pioneer in the world of marketing, unless you're also a pioneer in the world at large. That's just the "Technekes' way."</p>

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
            <h3 class="subHeading">philanthropy/traditions</h3>
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
          <h2>Technekes in the community.</h2>
<p>Doing good has been part of our culture for as long as Technekes has been in business. In addition to actively encouraging and supporting the philanthropic efforts of our teammates, Technekes also provides significant support to two nonprofit organizations.</p><br>


        <div class="charities">
            <h4><img src="/images/layout/all-in_heart.png" style="margin-right: 10px;">All-In To Fight Cancer</h4>
                <p>
                    When a mutual friend was diagnosed with cancer, Steve and Scott banded some friends together to found <a href="http://www.allintofightcancer.org/" target="_blank">All-In To Fight Cancer</a>, which hosts Texas Hold’em fundraisers around the country, with all proceeds going back to the local cancer community of healthcare providers, families and survivors.
                </p>

                <h4><img src="/images/layout/ronald_mcdonald_house.png" style="margin-right: 10px;">The Red Shoe Shootout</h4>
                <p>
                    Our own Jack Ross is a nationally ranked shooter, so helping found and sponsor the Ronald McDonald House of Charlotte <a href="http://www.technekes.com/blog/were-lovin-itred-shoe-shootout-a-success">Red Shoe Shootout</a> has been a natural fit for us. Since the first Shootout in 2011, Technekes has also provided organizers, teams, volunteers, and of course, one heckuva sharpshooter.
                </p>
        </div>
        <br />
        <h2>Technekes at work.</h2>
<p>Let's face it: the average person spends a large percentage of their waking hours at work, and so we figure the more our offices feel like home, the better. That's why we're constantly offering and updating our wellness programs (currently including in-office yoga classes, chair massages, and bicycles-for-borrowing!). And on any given day, you'll find someone's well-behaved dog - or two - roaming the halls. </p>
        </div>

        <div class="clear"></div>

    </div>
</div>



<div class="divF1" id="offices">
	<div class="subPadding">
            <h3 class="subHeading">offices</h3>
            <br />

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
