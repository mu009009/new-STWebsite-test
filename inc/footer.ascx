<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="footer.ascx.cs" Inherits="CorporateSite.inc.footer" %>

					<div id="footer">


						<div style="width : 285px; float : left;">
							<a href="/blog/feed/"><img src="/images/layout/footer_rss.gif" width="18" height="28" alt="rss feed" style="float : right;" /></a>
							<h2><img src="/images/layout/sprokets.gif" width="104" height="28" alt="Sprokets" /></h2>
							Think of our blog as a window where you can see what's new with us, our clients and the demand creation world we operate in.
							<br><br>

						    <asp:Repeater ID="BlogFeedRepeater" runat="server">
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

							<a href="/blog/"><b>More from the blog</b></a>
						</div>

						<div style="width : 285px; float : left; margin : 0px 25px;">
							<h2><img src="/images/layout/office_locations.gif" width="168" height="28" alt="Office Locations"></h2>
							<div style="line-height : 1.5em; font-size : 12px;">

								<b>Headquarters</b><br />
								1431 W. Morehead St.<br>
								Charlotte, NC 28208<br />
								P: 704.342.2900<br />
								F: 704.342.2975<br />
								<a href="https://www.google.com/maps/place/1431+W+Morehead+St,+Charlotte,+NC+28208/@35.2288739,-80.865259,1915m/data=!3m1!1e3!4m2!3m1!1s0x8856a1d07e5401fb:0x72a662115ecacdfe!6m1!1e1?hl=en" target="_new">Directions</a>
								<br><br>

								<b>Technekes Canada</b><br />
								Ontario AgriCentre<br />
								100 Stone Road West Suite #304<br />
								Guelph, ON  N1G 5L3<br />
								P: 519.588.6131<br />
							</div>
						</div>



						<div style="width : 285px; float : left;">
							<h2><img src="/images/layout/contact.gif" width="198" height="28" alt="Contact Technekes" /></h2>


							Ready to "gear up"? Then drop us a line!
							<br /><br />

							<!--<form id="contactForm" method="post" action="/cgi-bin/contact.cgi">-->
							<form id="contactForm" method="post">
							<table border="0" cellpadding="0" cellspacing="0" width="245px">
								<tr>
									<td>Name</td>
									<td align="right"><input type="text" name="name" class="borders" style="width : 160px;"></td>
								</tr>
								<tr>
									<td>Email</td>
									<td align="right"><input type="text" name="email_real" class="borders" style="width : 160px;"></td>
								</tr>
								<tr style="display : none;">
									<td>Leave Blank</td>
									<td align="right"><input type="text" name="email" class="borders" style="width : 160px;"></td>
								</tr>
								<tr>
									<td>Phone</td>
									<td align="right"><input type="text" name="phone" class="borders" style="width : 160px;"></td>
								</tr>
								<tr>
									<td valign="top">Comments</td>
									<td align="right"><textarea name="comments" rows="2" cols="15" class="borders" style="width : 160px;"></textarea></td>
								</tr>
								<tr>
									<td colspan="2" align="right" height="18">
										<input type="image" src="/images/layout/submit.png" style="cursor : pointer; outline : none;" class="button">
									</td>
								</tr>
								<tr>
								    <td colspan="2" style="width : 245px;">
								        <div id="response" style=" padding-left: 45px; text-align : center; display : none; padding-top : 0px;">
		                                    <h3>Thank you.</h3></div>
		                            </td>
		                        </tr>

							</table>
							</form>


							<div style="border-top : 1px solid #fff; padding-top : 10px; margin-top : 5px;">
								<!-- <a href="/contact/CallCenterForm.aspx">Customer Support Center Job Application</a><br><br> -->
                                <a href="/careers/">Careers at Technekes</a><br><br>
                            <img src="/images/layout/twitter_small.png" width="16" height="16" align="absmiddle" style="padding-bottom:7px;"> <a href="http://www.twitter.com/technekes" target="_blank">Follow us on Twitter</a>		&nbsp;&nbsp;&nbsp;&nbsp;<img src="/images/layout/linkedin_small.png" width="16" height="16" align="absmiddle" style="padding-bottom:7px;"> <a href="http://www.linkedin.com/companies/technekes-llc" target="_blank">Connect on LinkedIn</a><br>

<img src="/images/layout/flickr_small.png" width="16" height="16" align="absmiddle"> <a href="http://www.flickr.com/photos/technekes/" target="_blank">Visit our Flickr gallery</a>		&nbsp;&nbsp;<img src="/images/layout/youtube_small.png" width="16" height="16" align="absmiddle"> <a href="http://www.youtube.com/user/demandcreators" target="_blank">Visit our YouTube channel</a>
</div>

						</div>

						<div style="clear : both;"></div>
					</div>
				</div>
			</div>

</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
<script src="/js/jquery.smooth-scroll.js" type="text/javascript"></script>
<script type="text/javascript" src="/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="/js/jquery.scrollfollow.js"></script>
<script type="text/javascript" src="/js/jquery.flow.1.0.min.js"></script>

<script src="/js/script.js"></script>


<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." :
"http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost +
"google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-15217247-1");
pageTracker._trackPageview();
} catch(err) {}</script>

<script src="http://pmetrics.performancing.com/js" type="text/javascript"></script>
<script type="text/javascript">clicky.init(11419);</script>
<noscript><p><img alt="Performancing Metrics" width="1" height="1"
src="http://pmetrics.performancing.com/11419ns.gif" /></p></noscript>


<!--[if IE 6]>
<script src="/js/DD_belatedPNG_0.0.7a-min.js"></script>
<script>
  DD_belatedPNG.fix('#logoBg, img, .footerBlogPost, .subNavContainer, .contentCarrot, .photoContainer');
</script>
<![endif]-->

