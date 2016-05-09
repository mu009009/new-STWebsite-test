<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="header.ascx.cs" Inherits="CorporateSite.inc.header" %>
            <link href='https://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet' type='text/css'>

	<link href="/css/screen.css" rel="stylesheet" type="text/css" />

<!--[if IE 6]>
<style>
#dots {
	background : none;
}

#shadow {
	background : none;
}
</style>
<![endif]-->
	
</head>

<body>
<!-- <% Response.Write(Request.ServerVariables["url"]); %> -->
<div align="center" id="dots" style="min-height : 100%;">
	<div id="shadow">
    	
        <div id="siteWidth">
	    
        <div id="followMe">
			<img src="/images/layout/follow_top.png" width="35" height="5" alt=""><div style="background : url(/images/layout/follow_bg.png) repeat-y top left; width : 35px;"><div style="padding-left : 4px;	overflow : hidden;">
            	<a href="#header"><img src="/images/layout/back_top.gif" width="24" height="120" alt="" class="padded"></a>
				
				<img src="/images/layout/follow_divide.gif" width="24" height="2" alt="" class="padded">
				
				<a href="http://www.twitter.com/technekes" target="_blank"><img src="/images/layout/twitter.png" width="24" height="24" alt="Follow us on Twitter" class="padded"></a>
				<a href="http://www.linkedin.com/companies/technekes-llc" target="_blank"><img src="/images/layout/linkedin.png" width="24" height="24" alt="Connect on LinkedIn" class="padded"></a>
				<a href="http://www.flickr.com/photos/technekes/" target="_blank"><img src="/images/layout/flickr.png" width="24" height="24" alt="Visit our Flickr gallery" class="padded"></a>
				<a href="http://www.youtube.com/user/demandcreators" target="_blank"><img src="/images/layout/youtube.png" width="24" height="24" alt="Visit our YouTube channel" class="padded"></a>				
				<a href="/blog/feed/"><img src="/images/layout/feed.png" width="24" height="24" alt="Blog Feed" class="padded"></a>
				
				
			</div></div><img src="/images/layout/follow_bottom.png" width="35" height="5" alt="">
        </div>
        	                
<div id="header">
	               
		<div style="background : url(/images/layout/logo_bg.png) no-repeat; height : 44px;" id="logoBg">
					<a href="/"><img src="/images/layout/logo.png" width="413" height="41" alt="Technekes - Create Demand" style="margin-left : 35px; float : left;"></a>
  		<div id="nav">
						<a href="/work/"><img src="/images/layout/nav/work<% Response.Write( (Request.ServerVariables["url"].Contains("/work/")) ? "-over" : "");%>.png" width="50" height="23" alt=""></a>
                        <a href="/people/"><img src="/images/layout/nav/people<% Response.Write( (Request.ServerVariables["url"].Contains("/people/")) ? "-over" : "");%>.png" width="58" height="23" alt=""></a>
                        <a href="/blog/"><img src="/images/layout/nav/blog<% Response.Write( (Request.ServerVariables["url"].Contains("/blog/")) ? "-over" : "");%>.png" width="41" height="23" alt=""></a>
						<a href="/culture/"><img src="/images/layout/nav/culture<% Response.Write( (Request.ServerVariables["url"].Contains("/culture/")) ? "-over" : "");%>.png" width="72" height="23" alt=""></a>
						<a href="/careers/"><img src="/images/layout/nav/careers<% Response.Write( (Request.ServerVariables["url"].Contains("/careers/")) ? "-over" : "");%>.png" width="72" height="23" alt=""></a>
  		</div>
				
        </div>
                
                <% if (Request.ServerVariables["url"].Contains("/work/")) { %>
                <div class="subNavContainer" style="right:235px; background-position:30px 0px;">
                    <div class="subNav">
    	            <a href="#services"><p class="navlink">services</p></a>

                        <a href="#industries"><p class="navlink">industries</p></a>	

                        <!-- <a href="#services"><img src="/images/layout/nav/sub_work_services.gif"></a><a href="#practice"><img src="/images/layout/nav/sub_work_practice.gif"></a> -->
        	        </div>             
				</div>
                <% } %>
                <% if (Request.ServerVariables["url"].Contains("/people/")) { %>
                <div class="subNavContainer" style="right:200px; background-position:68px 0px;">
                    <div class="subNav">
                                    <a style="text-decoration: none;" href="/people/#partners"><p class="navlink">partners</p></a>
                                    <a href="/people/#leadership"><p class="navlink">leadership</p></a>

    	            	<!-- <a href="/people/#departments"><img src="/images/layout/nav/sub_people_departments.gif"></a><a href="/people/#exec"><img src="/images/layout/nav/sub_people_exec.gif"></a><a href="/people/#leaders"><img src="/images/layout/nav/sub_people_leaders.gif"></a> -->
        	        </div>             
				</div>
                <% } %>
                <% if (Request.ServerVariables["url"].Contains("/culture/")) { %>
                <div class="subNavContainer culture_subnav" style="background-position:73px 0px;">
                    <div class="subNav">
    	            	<!--<a href="#history"><img src="/images/layout/nav/sub_culture_history.gif"></a>-->
                    <a href="#traditions"><p class="navlink">traditions</p></a>
                    <a href="#offices"><p class="navlink">offices</p></a>

                    <!-- <a href="#traditions"><img src="/images/layout/nav/sub_culture_traditions.gif"></a><a href="#offices"><img src="/images/layout/nav/sub_culture_offices.gif"></a> -->
                    </div>             
				</div>
                <% } %>