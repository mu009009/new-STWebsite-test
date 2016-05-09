<%@ Page LANGUAGE="c#" %>
<%@ Register TagPrefix="header" TagName="a" Src="~/inc/header.ascx" %>
<%@ Register TagPrefix="footer" TagName="a" Src="~/inc/footer.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <title>Technekes - Create Demand</title>

<script runat="server">

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        PanelForm.Visible = false;

        NameValueCollection keys = (NameValueCollection)ConfigurationSettings.GetConfig("CallCenterForm");
        if (keys == null)
        {
            LabelError.Text = "Configuration Section <CallCenterForm> not found in web.config.";
            PanelError.Visible = true;
            return;
        }

        string emailBodyPageURL = keys["emailBodyPageURL"]; 
        string smtpHost = ConfigurationManager.AppSettings["smtpServer"];
        string emailTo = keys["emailTo"];
        string emailFrom = keys["emailFrom"];
        string emailFromName = keys["emailFromName"];
        string emailSubject = keys["emailSubject"];
        string body = "";
        
        // compose post data for e-mail body
        string postData = "", s;
        string br = "<br>";
        postData += "FirstName=" + Server.HtmlEncode(FirstName.Text);
        postData += "&LastName=" + Server.HtmlEncode(LastName.Text);
        postData += "&MailingAddress1=" + Server.HtmlEncode(MailingAddress1.Text);
        postData += "&MailingAddress2=" + Server.HtmlEncode(MailingAddress2.Text);
        postData += "&City=" + Server.HtmlEncode(City.Text);
        postData += "&State=" + Server.HtmlEncode(State.Text);
        postData += "&Zip=" + Server.HtmlEncode(Zip.Text);

        postData += "&HomePhone=" + Server.HtmlEncode(HomePhone.Text);
        postData += "&MobilePhone=" + Server.HtmlEncode(MobilePhone.Text);
        postData += "&Email=" + Server.HtmlEncode(Email.Text);
        
        s = "";
        s += CallCenterExperience1.Checked ? CallCenterExperience1.Text + br : "";
        s += CallCenterExperience2.Checked ? CallCenterExperience2.Text + br : "";
        s += CallCenterExperience3.Checked ? CallCenterExperience3.Text + br : "";
        s += CallCenterExperience4.Checked ? CallCenterExperience4.Text + br : "";
        s += CallCenterExperience5.Checked ? CallCenterExperience5.Text + br : "";
        s += CallCenterExperience6.Checked ? CallCenterExperience6.Text + br : "";
        s += CallCenterExperience7.Checked ? CallCenterExperience7.Text + br : "";
        s += CallCenterExperience8.Checked ? CallCenterExperience8.Text + br : "";
        if (s.Length == 0) s = "No option selected" + br;
        postData += "&CallCenterExperience=" + s.Substring(0, s.Length - br.Length);

        s = "";
        s += DataEntryExperience1.Checked ? DataEntryExperience1.Text + br : "";
        s += DataEntryExperience2.Checked ? DataEntryExperience2.Text + br : "";
        s += DataEntryExperience3.Checked ? DataEntryExperience3.Text + br : "";
        s += DataEntryExperience4.Checked ? DataEntryExperience4.Text + br : "";
        s += DataEntryExperience5.Checked ? DataEntryExperience5.Text + br : "";
        if (s.Length == 0) s = "No option selected" + br;
        postData += "&DataEntryExperience=" + s.Substring(0, s.Length - br.Length);

        postData += "&HourlyRate=" + Server.HtmlEncode(HourlyRate.Text);
        postData += "&StartDate=" + Server.HtmlEncode(StartDate.Text);

        s = "";
        s += AvailableTime1.Checked ? AvailableTime1.Text + br : "";
        s += AvailableTime2.Checked ? AvailableTime2.Text + br : "";
        s += AvailableTime3.Checked ? AvailableTime3.Text + br : "";
        s += AvailableTime4.Checked ? AvailableTime4.Text + br : "";
        if (s.Length == 0) s = "No option selected" + br;
        postData += "&AvailableTime=" + s.Substring(0, s.Length - br.Length);

        postData += "&CrimeYes=" + Server.HtmlEncode(CrimeYes.Checked ? "Yes" : CrimeNo.Checked ? "No" : "");
        postData += "&CrimeDetails=" + Server.HtmlEncode(CrimeYes.Checked ? CrimeDetails.Text : "");

        s = "";
        s += Education1.Checked ? Education1.Text + br : "";
        s += Education2.Checked ? Education2.Text + br : "";
        s += Education3.Checked ? Education3.Text + br : "";
        s += Education4.Checked ? Education4.Text + br : "";
        s += Education5.Checked ? Education5.Text + br : "";
        s += Education6.Checked ? Education6.Text + br : "";
        s += Education7.Checked ? Education7.Text + br : "";
        if (s.Length == 0) s = "No option selected" + br;
        postData += "&Education=" + s.Substring(0, s.Length - br.Length);

        postData += "&Job1Company=" + Server.HtmlEncode(Job1Company.Text);
        postData += "&Job1StartDate=" + Server.HtmlEncode(Job1StartDate.Text);
        postData += "&Job1EndDate=" + Server.HtmlEncode(Job1EndDate.Text);
        postData += "&Job1StartPay=" + Server.HtmlEncode(Job1StartPay.Text);
        postData += "&Job1EndPay=" + Server.HtmlEncode(Job1EndPay.Text);
        postData += "&Job1Title=" + Server.HtmlEncode(Job1Title.Text);
        postData += "&Job1ReasonLeave=" + Server.HtmlEncode(Job1ReasonLeave.Text);
        postData += "&Job1Supervisor=" + Server.HtmlEncode(Job1Supervisor.Text);
        postData += "&Job1SupervisorPhone=" + Server.HtmlEncode(Job1SupervisorPhone.Text);
        postData += "&Job1ContactYes=" + Server.HtmlEncode(Job1ContactYes.Checked ? "Yes" : Job1ContactNo.Checked ? "No" : "");
        
        postData += "&Job2Company=" + Server.HtmlEncode(Job2Company.Text);
        postData += "&Job2StartDate=" + Server.HtmlEncode(Job2StartDate.Text);
        postData += "&Job2EndDate=" + Server.HtmlEncode(Job2EndDate.Text);
        postData += "&Job2StartPay=" + Server.HtmlEncode(Job2StartPay.Text);
        postData += "&Job2EndPay=" + Server.HtmlEncode(Job2EndPay.Text);
        postData += "&Job2Title=" + Server.HtmlEncode(Job2Title.Text);
        postData += "&Job2ReasonLeave=" + Server.HtmlEncode(Job2ReasonLeave.Text);
        postData += "&Job2Supervisor=" + Server.HtmlEncode(Job2Supervisor.Text);
        postData += "&Job2SupervisorPhone=" + Server.HtmlEncode(Job2SupervisorPhone.Text);
        postData += "&Job2ContactYes=" + Server.HtmlEncode(Job2ContactYes.Checked ? "Yes" : Job2ContactNo.Checked ? "No" : "");

        postData += "&Job3Company=" + Server.HtmlEncode(Job3Company.Text);
        postData += "&Job3StartDate=" + Server.HtmlEncode(Job3StartDate.Text);
        postData += "&Job3EndDate=" + Server.HtmlEncode(Job3EndDate.Text);
        postData += "&Job3StartPay=" + Server.HtmlEncode(Job3StartPay.Text);
        postData += "&Job3EndPay=" + Server.HtmlEncode(Job3EndPay.Text);
        postData += "&Job3Title=" + Server.HtmlEncode(Job3Title.Text);
        postData += "&Job3ReasonLeave=" + Server.HtmlEncode(Job3ReasonLeave.Text);
        postData += "&Job3Supervisor=" + Server.HtmlEncode(Job3Supervisor.Text);
        postData += "&Job3SupervisorPhone=" + Server.HtmlEncode(Job3SupervisorPhone.Text);
        postData += "&Job3ContactYes=" + Server.HtmlEncode(Job3ContactYes.Checked ? "Yes" : Job3ContactNo.Checked ? "No" : "");

        body = Fetch(emailBodyPageURL, postData);
        // MailBody.InnerHtml = body;
        
        emailSubject += " - " + FirstName.Text + " " + LastName.Text;
        
        System.Net.Mail.MailMessage message = new System.Net.Mail.MailMessage(emailFrom, emailTo, emailSubject, body);
        message.IsBodyHtml = true;

        System.Net.Mail.SmtpClient smtpClient = new System.Net.Mail.SmtpClient(smtpHost);
        
        try { smtpClient.Send(message); }
        catch (Exception ex)
        {
            LabelError.Text = smtpHost + " " + ex.Message.ToString() + "<br/>" + ex.StackTrace.ToString();
            LabelError.Text = ex.Message.ToString() + "<br/>";
            PanelError.Visible = true;
            return;
        }

        LabelName.Text = Server.HtmlEncode(FirstName.Text);
        PanelSubmitted.Visible = true;

    }

    static public string Fetch(string url, string postData)
    {

        System.Net.HttpWebRequest request;
        System.Net.HttpWebResponse response;
        System.IO.StreamReader stream;

        string result;

        request = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(url);
        request.Method = "POST";

        ASCIIEncoding encoding = new ASCIIEncoding();
        byte[] data = encoding.GetBytes(postData);

        request.ContentLength = data.Length;
        request.ContentType = "application/x-www-form-urlencoded";

        try
        {
            System.IO.Stream myWriter = request.GetRequestStream();
            myWriter.Write(data, 0, data.Length);
            myWriter.Close();
        }
        catch (Exception e)
        {
            return e.Message;
        }

        try
        {
            request.Timeout = 3000;
            response = (System.Net.HttpWebResponse)request.GetResponse();
            stream = new System.IO.StreamReader(response.GetResponseStream());
            result = stream.ReadToEnd().Trim();
            stream.Close();
            response.Close();
        }
        catch (Exception e2)
        {
            result = e2.Message;
        }

        return (result);
    }
</script>

<meta name="google-site-verification" content="7eMHeVLRxDJ0LS2rm5dsqqDxbgZzG0HGb_2GGBoSDm4" />
<meta name="msvalidate.01" content="A7409671ED1CD2DE3CEEB0A25C4C8916" />
<META name="y_key" content="b6467ff9c8f5af5f">
	
<header:a ID="myHeader" runat="server" />	

    </div> <!-- #header -->
    <div class="subPadding">

    <form id="form1" runat="server">


		<table width="747" border="0" align="center" cellpadding="0" cellspacing="0">
			<tr>
				<td align="left" valign="top" ><div align="center">
						<!-- start top image area -->
						<table width="727" border="0" cellspacing="0" cellpadding="0">
							
							<tr>
								<td colspan="3" align="left">
<table style="WIDTH: 100%">
<tr>
<td width="6"></td>
<td>
        <asp:Panel ID="PanelForm" runat="server" Height="100%" Width="100%"><BR><SPAN><STRONG style="FONT-SIZE: large">STEP 
                  1</STRONG></SPAN><BR><BR><STRONG>Call the following toll-free 
                  phone number to record your voice and let us hear what you 
                  sound like on the phone.</STRONG> <BR><BR>The test script 
                  below illustrates the transfer of an inbound call at Technekes 
                  to our client’s help desk. If you have what it takes, we’ll 
                  give you a call back to discuss the positions and time slots 
                  available. When leaving your recording, please also include 
                  your first and last name, as well as your phone number. 
                  <BR><BR>
                  <P style="FONT-SIZE: large">1-866-927-8066</P><STRONG>Call 
                  Guide:</STRONG><BR><SPAN 
                  style="FONT-WEIGHT: bold; FONT-SIZE: larger">Please state your 
                  [First Name], [Last Name] and [Phone Number].<BR><BR>Hello, my 
                  name is [Your Name] and I’m calling from Technekes, an 
                  approved business vendor for your company. I have one of your 
                  customers on the line who has asked for some special 
                  assistance.<BR><BR>The customer called in with questions on 
                  the promotional materials that we recently shared. 
                  Specifically, they’re interested in understanding how this 
                  product is applied in their agricultural operation.<BR><BR>May 
                  I connect them to you now?<BR>&nbsp; 
                  </SPAN><BR><BR><BR><SPAN><STRONG style="FONT-SIZE: large">STEP 
                  2</STRONG></SPAN><BR><BR><STRONG>Complete the following form 
                  and click the Submit button once you've filled it 
                  out.</STRONG><BR><BR>
                  <TABLE style="WIDTH: 100%">
                    <TR>
                      <TD colSpan=3><STRONG>&nbsp;Contact 
                      Information</STRONG></TD></TR>
                    <TR>
                      <TD><STRONG>First Name:</STRONG> 
<asp:RequiredFieldValidator id=RequiredFieldValidator1 runat="server" ErrorMessage=" [Required]" Display="Dynamic" ControlToValidate="FirstName" SetFocusOnError="true"></asp:RequiredFieldValidator><BR>
<asp:TextBox id=FirstName runat="server"></asp:TextBox></TD>
                      <TD><STRONG>Last Name:</STRONG> 
<asp:RequiredFieldValidator id=RequiredFieldValidator2 runat="server" ErrorMessage=" [Required]" Display="Dynamic" ControlToValidate="LastName" SetFocusOnError="true"></asp:RequiredFieldValidator><BR>
<asp:TextBox id=LastName runat="server"></asp:TextBox></TD>
                      <TD></TD></TR>
                    <TR style="COLOR: #000000">
                      <TD vAlign=top>
                        <P><STRONG>Address Line&nbsp;1:</STRONG> 
<asp:RequiredFieldValidator id=RequiredFieldValidator3 runat="server" ErrorMessage=" [Required]" Display="Dynamic" ControlToValidate="MailingAddress1" SetFocusOnError="true"></asp:RequiredFieldValidator><BR>
<asp:TextBox id=MailingAddress1 runat="server" Width="200px"></asp:TextBox><BR><STRONG>Address 
                        Line 2:</STRONG><BR>
<asp:TextBox id=MailingAddress2 runat="server" Width="200px"></asp:TextBox></P></TD>
                      <TD vAlign=top><STRONG>City:</STRONG> 
<asp:RequiredFieldValidator id=RequiredFieldValidator4 runat="server" ErrorMessage=" [Required]" Display="Dynamic" ControlToValidate="City" SetFocusOnError="true"></asp:RequiredFieldValidator><BR>
<asp:TextBox id=City runat="server"></asp:TextBox></TD>
                      <TD vAlign=top>
                        <TABLE cellSpacing=0 cellPadding=0>
                          <TR>
                            <TD><STRONG>State:</STRONG> 
<asp:RequiredFieldValidator id=RequiredFieldValidator5 runat="server" ErrorMessage=" [Required]" Display="Dynamic" ControlToValidate="State" SetFocusOnError="true"></asp:RequiredFieldValidator><BR>
<asp:TextBox id=State runat="server" Width="100px"></asp:TextBox>&nbsp;&nbsp; 
                            </TD>
                            <TD><STRONG>Zip:</STRONG> 
<asp:RequiredFieldValidator id=RequiredFieldValidator6 runat="server" ErrorMessage=" [Required]" Display="Dynamic" ControlToValidate="Zip" SetFocusOnError="true"></asp:RequiredFieldValidator><BR>
<asp:TextBox id=Zip runat="server" Width="50px"></asp:TextBox></TD></TR></TABLE>&nbsp;&nbsp; 
                      </TD></TR>
                    <TR>
                      <TD><STRONG>Home Phone:<BR></STRONG>
<asp:TextBox id=HomePhone runat="server"></asp:TextBox></TD>
                      <TD><STRONG>Mobile Phone:</STRONG><BR>
<asp:TextBox id=MobilePhone runat="server"></asp:TextBox></TD>
                      <TD><STRONG>E-mail:</STRONG> 
<asp:RequiredFieldValidator id=RequiredFieldValidator7 runat="server" ErrorMessage=" [Required]" Display="Dynamic" ControlToValidate="Email"></asp:RequiredFieldValidator>
<asp:RegularExpressionValidator id=RegularExpressionValidator1 runat="server" ErrorMessage=" [Not a valid e-mail address]" Display="Dynamic" ControlToValidate="Email" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator><BR>
<asp:TextBox id=Email runat="server" Width="200px"></asp:TextBox></TD></TR></TABLE><BR>
                  <TABLE style="WIDTH: 100%">
                    <TR>
                      <TD colSpan=3><STRONG>&nbsp;Work 
                    Experience</STRONG></TD></TR>
                    <TR>
                      <TD colSpan=3><STRONG>Which of the following best 
                        describes your experience as a call center agent, if 
                        applicable? (check all that apply)</STRONG></TD></TR>
                    <TR>
                      <TD>
<asp:CheckBox id=CallCenterExperience1 runat="server" Text="Less than six months"></asp:CheckBox><BR>
<asp:CheckBox id=CallCenterExperience2 runat="server" Text="Six months to one year"></asp:CheckBox><BR>
<asp:CheckBox id=CallCenterExperience3 runat="server" Text="One to two years"></asp:CheckBox><BR>
<asp:CheckBox id=CallCenterExperience4 runat="server" Text="Two to five years"></asp:CheckBox></TD>
                      <TD>
<asp:CheckBox id=CallCenterExperience5 runat="server" Text="More than five years"></asp:CheckBox><BR>
<asp:CheckBox id=CallCenterExperience6 runat="server" Text="Outbound calling only"></asp:CheckBox><BR>
<asp:CheckBox id=CallCenterExperience7 runat="server" Text="Inbound calling only"></asp:CheckBox><BR>
<asp:CheckBox id=CallCenterExperience8 runat="server" Text="Both inbound and outbound calling"></asp:CheckBox></TD>
                      <TD></TD></TR>
                    <TR>
                      <TD colSpan=3><STRONG><BR>Which of the following best 
                        describes your data entry experience? (check only 
                        one)</STRONG></TD></TR>
                    <TR>
                      <TD>
<asp:RadioButton id=DataEntryExperience1 runat="server" Text="Less than six months" GroupName="dataEntry"></asp:RadioButton><BR>
<asp:RadioButton id=DataEntryExperience2 runat="server" Text="Six months to one year" GroupName="dataEntry"></asp:RadioButton><BR>
<asp:RadioButton id=DataEntryExperience3 runat="server" Text="One to two years" GroupName="dataEntry"></asp:RadioButton></TD>
                      <TD vAlign=top>
<asp:RadioButton id=DataEntryExperience4 runat="server" Text="Two to five years" GroupName="dataEntry"></asp:RadioButton><BR>
<asp:RadioButton id=DataEntryExperience5 runat="server" Text="More than five years" GroupName="dataEntry"></asp:RadioButton></TD>
                      <TD></TD></TR>
                    <TR>
                      <TD colSpan=3><STRONG>Based on your experience, what is 
                        your desired hourly rate of pay? &nbsp;$ 
<asp:TextBox id=HourlyRate runat="server" Width="50px"></asp:TextBox>&nbsp; 
                        per hour</STRONG></TD></TR>
                    <TR>
                      <TD colSpan=3><STRONG>When can you start? </STRONG>
<asp:TextBox id=StartDate runat="server" Width="80px"></asp:TextBox>[mm/dd/yy]</TD></TR>
                    <TR>
                      <TD colSpan=3><STRONG><BR>Which of the following days 
                        and times are you available? (check all that 
                        apply)</STRONG></TD></TR>
                    <TR>
                      <TD>
<asp:CheckBox id=AvailableTime1 runat="server" Text="Daytime only (8am-6pm)"></asp:CheckBox><BR>
<asp:CheckBox id=AvailableTime2 runat="server" Text="Evenings only (6pm-10pm)"></asp:CheckBox></TD>
                      <TD>
<asp:CheckBox id=AvailableTime3 runat="server" Text="Monday – Friday"></asp:CheckBox><BR>
<asp:CheckBox id=AvailableTime4 runat="server" Text="Saturday"></asp:CheckBox></TD>
                      <TD></TD></TR>
                    <TR>
                      <TD colSpan=3><STRONG><BR>Have you ever been convicted 
                        of a crime?</STRONG></TD></TR>
                    <TR>
                      <TD colSpan=3>
<asp:RadioButton id=CrimeNo runat="server" Text="No" GroupName="crime"></asp:RadioButton><BR>
<asp:RadioButton id=CrimeYes runat="server" Text="Yes (If Yes, for what and when?)" GroupName="crime"></asp:RadioButton><BR>
<asp:TextBox id=CrimeDetails runat="server" Width="100%" TextMode="MultiLine"></asp:TextBox></TD></TR>
                    <TR>
                      <TD colSpan=3><STRONG><BR>What is the highest level of 
                        education you have completed?</STRONG></TD></TR>
                    <TR>
                      <TD>
<asp:CheckBox id=Education1 runat="server" Text="Did Not Graduate High School"></asp:CheckBox><BR>
<asp:CheckBox id=Education2 runat="server" Text="High School Graduate or Equivalent"></asp:CheckBox><BR>
<asp:CheckBox id=Education3 runat="server" Text="Attended College or University"></asp:CheckBox><BR>
<asp:CheckBox id=Education4 runat="server" Text="Technical School"></asp:CheckBox></TD>
                      <TD>Graduated College:<BR>
<asp:CheckBox id=Education5 runat="server" Text="Associate’s Degree"></asp:CheckBox><BR>
<asp:CheckBox id=Education6 runat="server" Text="Bachelor’s Degree"></asp:CheckBox><BR>
<asp:CheckBox id=Education7 runat="server" Text="Post Graduate Degree"></asp:CheckBox></TD>
                      <TD></TD></TR></TABLE><BR><STRONG>Beginning with your 
                  present or most recent employer, please provide employment 
                  information<BR>for up to your last 3 employers 
                  below:<BR></STRONG>
                  <TABLE style="WIDTH: 100%">
                    <TR>
                      <TD colSpan=3><STRONG>&nbsp;Job #1</STRONG></TD></TR>
                    <TR>
                      <TD><STRONG>Company Name:</STRONG><BR>
<asp:TextBox id=Job1Company runat="server" Width="180px"></asp:TextBox></TD>
                      <TD>
                        <TABLE cellSpacing=0 cellPadding=0>
                          <TR>
                            <TD><STRONG>Start Date:</STRONG><BR>
<asp:TextBox id=Job1StartDate runat="server" Width="60px"></asp:TextBox>&nbsp; 
                              &nbsp;</TD>
                            <TD><STRONG>End Date:</STRONG><BR>
<asp:TextBox id=Job1EndDate runat="server" Width="60px"></asp:TextBox></TD></TR></TABLE></TD>
                      <TD>
                        <TABLE cellSpacing=0 cellPadding=0>
                          <TR>
                            <TD width=94><STRONG>Starting Pay:</STRONG><BR>
<asp:TextBox id=Job1StartPay runat="server" Width="60px"></asp:TextBox></TD>
                            <TD><STRONG>Ending Pay:</STRONG><BR>
<asp:TextBox id=Job1EndPay runat="server" Width="60px"></asp:TextBox></TD></TR></TABLE></TD></TR>
                    <TR>
                      <TD><STRONG>Job Title:</STRONG><BR>
<asp:TextBox id=Job1Title runat="server" Width="180px"></asp:TextBox></TD>
                      <TD colSpan=2><STRONG>Reason for leaving:</STRONG><BR>
<asp:TextBox id=Job1ReasonLeave runat="server" Width="400px"></asp:TextBox></TD></TR>
                    <TR>
                      <TD><STRONG>Supervisor's Name:</STRONG><BR>
<asp:TextBox id=Job1Supervisor runat="server" Width="180px"></asp:TextBox></TD>
                      <TD>Supervisor's Phone:<BR>
<asp:TextBox id=Job1SupervisorPhone runat="server" Width="180px"></asp:TextBox></TD>
                      <TD><STRONG>May we contact your Supervisor?</STRONG><BR>
<asp:RadioButton id=Job1ContactYes runat="server" Text="Yes"></asp:RadioButton>&nbsp; 
<asp:RadioButton id=Job1ContactNo runat="server" Text="No"></asp:RadioButton></TD></TR></TABLE><BR>
                  <TABLE style="WIDTH: 100%">
                    <TR>
                      <TD colSpan=3><STRONG>&nbsp;Job #2</STRONG></TD></TR>
                    <TR>
                      <TD><STRONG>Company Name:</STRONG><BR>
<asp:TextBox id=Job2Company runat="server" Width="180px"></asp:TextBox></TD>
                      <TD>
                        <TABLE cellSpacing=0 cellPadding=0>
                          <TR>
                            <TD><STRONG>Start Date:</STRONG><BR>
<asp:TextBox id=Job2StartDate runat="server" Width="60px"></asp:TextBox>&nbsp; 
                              &nbsp;</TD>
                            <TD><STRONG>End Date:</STRONG><BR>
<asp:TextBox id=Job2EndDate runat="server" Width="60px"></asp:TextBox></TD></TR></TABLE></TD>
                      <TD>
                        <TABLE cellSpacing=0 cellPadding=0>
                          <TR>
                            <TD width=94><STRONG>Starting Pay:</STRONG><BR>
<asp:TextBox id=Job2StartPay runat="server" Width="60px"></asp:TextBox></TD>
                            <TD><STRONG>Ending Pay:</STRONG><BR>
<asp:TextBox id=Job2EndPay runat="server" Width="60px"></asp:TextBox></TD></TR></TABLE></TD></TR>
                    <TR>
                      <TD><STRONG>Job Title:</STRONG><BR>
<asp:TextBox id=Job2Title runat="server" Width="180px"></asp:TextBox></TD>
                      <TD colSpan=2><STRONG>Reason for leaving:</STRONG><BR>
<asp:TextBox id=Job2ReasonLeave runat="server" Width="400px"></asp:TextBox></TD></TR>
                    <TR>
                      <TD><STRONG>Supervisor's Name:</STRONG><BR>
<asp:TextBox id=Job2Supervisor runat="server" Width="180px"></asp:TextBox></TD>
                      <TD>Supervisor's Phone:<BR>
<asp:TextBox id=Job2SupervisorPhone runat="server" Width="180px"></asp:TextBox></TD>
                      <TD><STRONG>May we contact your Supervisor?</STRONG><BR>
<asp:RadioButton id=Job2ContactYes runat="server" Text="Yes"></asp:RadioButton>&nbsp; 
<asp:RadioButton id=Job2ContactNo runat="server" Text="No"></asp:RadioButton></TD></TR></TABLE><BR>
                  <TABLE style="WIDTH: 100%">
                    <TR>
                      <TD colSpan=3><STRONG>&nbsp;Job #3</STRONG></TD></TR>
                    <TR>
                      <TD><STRONG>Company Name:</STRONG><BR>
<asp:TextBox id=Job3Company runat="server" Width="180px"></asp:TextBox></TD>
                      <TD>
                        <TABLE cellSpacing=0 cellPadding=0>
                          <TR>
                            <TD><STRONG>Start Date:</STRONG><BR>
<asp:TextBox id=Job3StartDate runat="server" Width="60px"></asp:TextBox>&nbsp; 
                              &nbsp;</TD>
                            <TD><STRONG>End Date:</STRONG><BR>
<asp:TextBox id=Job3EndDate runat="server" Width="60px"></asp:TextBox></TD></TR></TABLE></TD>
                      <TD>
                        <TABLE cellSpacing=0 cellPadding=0>
                          <TR>
                            <TD width=94><STRONG>Starting Pay:</STRONG><BR>
<asp:TextBox id=Job3StartPay runat="server" Width="60px"></asp:TextBox></TD>
                            <TD><STRONG>Ending Pay:</STRONG><BR>
<asp:TextBox id=Job3EndPay runat="server" Width="60px"></asp:TextBox></TD></TR></TABLE></TD></TR>
                    <TR>
                      <TD><STRONG>Job Title:</STRONG><BR>
<asp:TextBox id=Job3Title runat="server" Width="180px"></asp:TextBox></TD>
                      <TD colSpan=2><STRONG>Reason for leaving:</STRONG><BR>
<asp:TextBox id=Job3ReasonLeave runat="server" Width="400px"></asp:TextBox></TD></TR>
                    <TR>
                      <TD><STRONG>Supervisor's Name:</STRONG><BR>
<asp:TextBox id=Job3Supervisor runat="server" Width="180px"></asp:TextBox></TD>
                      <TD>Supervisor's Phone:<BR>
<asp:TextBox id=Job3SupervisorPhone runat="server" Width="180px"></asp:TextBox></TD>
                      <TD><STRONG>May we contact your Supervisor?</STRONG><BR>
<asp:RadioButton id=Job3ContactYes runat="server" Text="Yes"></asp:RadioButton>&nbsp; 
<asp:RadioButton id=Job3ContactNo runat="server" Text="No"></asp:RadioButton></TD></TR></TABLE><BR>
<asp:Button id=btnSubmit onclick=btnSubmit_Click runat="server" Text=" Submit "></asp:Button><BR>
        </asp:Panel>
        &nbsp;<br >
        <asp:Panel ID="PanelSubmitted" runat="server" Height="100%" Width="100%" Visible="False"><BR>Thank you 
<asp:Label id=LabelName runat="server" Font-Bold="True"></asp:Label>&nbsp;for 
                  submitting the form. We will get back to you after your 
                  details&nbsp;are processed by our team.<BR><BR><SPAN 
                  id=MailBody 
                  runat="server"></SPAN><BR><BR><BR><BR>
        </asp:Panel>
        &nbsp;<br >
        <asp:Panel ID="PanelError" runat="server" Height="100%" Width="100%" Visible="False">
                  <P><STRONG>Error occurred sending form data. We request you to 
                  contact info@technekes.com with the following 
                  details.<BR><BR></STRONG></P>
<asp:Label id=LabelError runat="server" Font-Bold="true" ForeColor="red"></asp:Label><BR>
        </asp:Panel>
</td>								
<td width="6"></td>
</tr>
</table>
								
								</td>
							</tr>
						</table>
					</div>
				</td>
			</tr>
		</table>
		


		<br>


    </div>
    </form>
    <footer:a ID="myFooter" runat="server" />
    
    <script src="http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>
    <script>
        var flashvars = {
            video: "work"
        };
        var params = {
            base: "/flash",
            allowfullscreen: "true"
        };
        var attributes = false;

        swfobject.embedSWF("/flash/vid_player.swf", "videoPlayer", "320", "180", "9.0.115.0", "#000000", flashvars, params, attributes);
    </script>
    
</body>
</HTML>
