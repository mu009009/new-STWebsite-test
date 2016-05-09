<%@ Page Language="C#" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<script runat="server">
    protected void Page_Load(object sender, System.EventArgs e)
    {
        FirstName.Text = Request["FirstName"];
        LastName.Text = Request["LastName"];
        MailingAddress1.Text = Request["MailingAddress1"];
        MailingAddress2.Text = Request["MailingAddress2"];
        City.Text = Request["City"];
        State.Text = Request["State"];
        Zip.Text = Request["Zip"];
        HomePhone.Text = Request["HomePhone"];
        MobilePhone.Text = Request["MobilePhone"];
        Email.Text = Request["Email"];

        CallCenterExperience.Text = Request["CallCenterExperience"];
        DataEntryExperience.Text = Request["DataEntryExperience"];

        HourlyRate.Text = Request["HourlyRate"];
        StartDate.Text = Request["StartDate"];

        AvailableTime.Text = Request["AvailableTime"];
        CrimeYes.Text = Request["CrimeYes"];
        CrimeDetails.Text = Request["CrimeDetails"];
        Education.Text = Request["Education"];

        Job1Company.Text = Request["Job1Company"];
        Job1StartDate.Text = Request["Job1StartDate"];
        Job1EndDate.Text = Request["Job1EndDate"];
        Job1StartPay.Text = Request["Job1StartPay"];
        Job1EndPay.Text = Request["Job1EndPay"];
        Job1Title.Text = Request["Job1Title"];
        Job1ReasonLeave.Text = Request["Job1ReasonLeave"];
        Job1Supervisor.Text = Request["Job1Supervisor"];
        Job1SupervisorPhone.Text = Request["Job1SupervisorPhone"];
        Job1ContactYes.Text = Request["Job1ContactYes"];

        Job2Company.Text = Request["Job2Company"];
        Job2StartDate.Text = Request["Job2StartDate"];
        Job2EndDate.Text = Request["Job2EndDate"];
        Job2StartPay.Text = Request["Job2StartPay"];
        Job2EndPay.Text = Request["Job2EndPay"];
        Job2Title.Text = Request["Job2Title"];
        Job2ReasonLeave.Text = Request["Job2ReasonLeave"];
        Job2Supervisor.Text = Request["Job2Supervisor"];
        Job2SupervisorPhone.Text = Request["Job2SupervisorPhone"];
        Job2ContactYes.Text = Request["Job2ContactYes"];

        Job3Company.Text = Request["Job3Company"];
        Job3StartDate.Text = Request["Job3StartDate"];
        Job3EndDate.Text = Request["Job3EndDate"];
        Job3StartPay.Text = Request["Job3StartPay"];
        Job3EndPay.Text = Request["Job3EndPay"];
        Job3Title.Text = Request["Job3Title"];
        Job3ReasonLeave.Text = Request["Job3ReasonLeave"];
        Job3Supervisor.Text = Request["Job3Supervisor"];
        Job3SupervisorPhone.Text = Request["Job3SupervisorPhone"];
        Job3ContactYes.Text = Request["Job3ContactYes"];
      
    }
    
</script>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head runat="server">
		<title>Untitled Page</title>
		<style type="text/css">
    .bodycopy
    {
        FONT-WEIGHT: normal;
        FONT-SIZE: 11px;
        COLOR: #333333;
        LINE-HEIGHT: 13pt;
        FONT-FAMILY: Tahoma, Arial, Helvetica, sans-serif;
        TEXT-DECORATION: none
    }
    </style>
	</head>
	<body class="bodycopy">
		<form id="form1" runat="server">
			<div>
				<table style="width: 100%">
					<tr>
						<td width="6"></td>
						<td>
							<asp:Panel ID="PanelForm" runat="server" Height="100%" Width="100%">
								<br />
								<table style="width: 100%">
									<tr>
										<td colspan="3" style="background-color: #666666; font-size: larger; color: white;">
											<strong>&nbsp;Contact Information</strong></td>
									</tr>
									<tr>
										<td style="width: 33%">
											<strong>First Name:</strong><br />
											<asp:Label ID="FirstName" runat="server"></asp:Label></td>
										<td style="width: 33%;">
											<strong>Last Name:</strong><br />
											<asp:Label ID="LastName" runat="server"></asp:Label></td>
										<td>
										</td>
									</tr>
									<tr style="color: #000000">
										<td valign="top">
											<strong>Address Line 1:</strong><br />
											<asp:Label ID="MailingAddress1" runat="server"></asp:Label><br />
											<strong>Address Line 2:</strong><br />
											<asp:Label ID="MailingAddress2" runat="server"></asp:Label>
										</td>
										<td valign="top">
											<strong>City:</strong><br />
											<asp:Label ID="City" runat="server"></asp:Label></td>
										<td valign="top">
											<table cellpadding="0" cellspacing="0">
												<tr>
													<td>
														<strong>State:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="State" runat="server"></asp:Label>
														&nbsp;&nbsp;
													</td>
													<td>
														<strong>Zip:</strong><br />
														<asp:Label ID="Zip" runat="server" Width="50px"></asp:Label></td>
												</tr>
											</table>
											&nbsp;&nbsp;
										</td>
									</tr>
									<tr>
										<td>
											<strong>Home Phone:<br />
											</strong>
											<asp:Label ID="HomePhone" runat="server"></asp:Label></td>
										<td>
											<strong>Mobile Phone:</strong><br />
											<asp:Label ID="MobilePhone" runat="server"></asp:Label></td>
										<td>
											<strong>E-mail:</strong>
											<br />
											<asp:Label ID="Email" runat="server"></asp:Label></td>
									</tr>
								</table>
								<br />
								<table style="width: 100%">
									<tr>
										<td colspan="3" style="background-color: #666666; font-size: larger; color: white;">
											<strong>&nbsp;Work Experience</strong></td>
									</tr>
									<tr>
										<td colspan="3">
											<strong>Which of the following best describes your experience as a call center 
												agent, if applicable? (check all that apply)</strong></td>
									</tr>
									<tr>
										<td style="width: 33%">
											<asp:Label ID="CallCenterExperience" runat="server"></asp:Label></td>
										<td style="width: 33%"></td>
										<td>
										</td>
									</tr>
									<tr>
										<td colspan="3">
											<strong>
												<br />
												Which of the following best describes your data entry experience? (check only 
												one)</strong></td>
									</tr>
									<tr>
										<td style="width: 33%">
											<asp:Label ID="DataEntryExperience" runat="server"></asp:Label></td>
										<td style="width: 33%" valign="top">
										</td>
										<td>
										</td>
									</tr>
									<tr>
										<td colspan="3">
											<strong>
												<br />
												Based on your experience, what is your desired hourly rate of pay?</strong><br />
											$<asp:Label ID="HourlyRate" runat="server"></asp:Label>&nbsp; per hour</td>
									</tr>
									<tr>
										<td colspan="3">
											<strong>
												<br />
												When can you start? </strong>
											<asp:Label ID="StartDate" runat="server" Width="80px"></asp:Label>
											[mm/dd/yy]</td>
									</tr>
									<tr>
										<td colspan="3">
											<strong>
												<br />
												Which of the following days and times are you available? (check all that apply)</strong></td>
									</tr>
									<tr>
										<td style="width: 33%">
											<asp:Label ID="AvailableTime" runat="server"></asp:Label></td>
										<td style="width: 33%">
										</td>
										<td>
										</td>
									</tr>
									<tr>
										<td colspan="3">
											<strong>
												<br />
												Have you ever been convicted of a crime?</strong></td>
									</tr>
									<tr>
										<td colspan="3">
											<asp:Label ID="CrimeYes" runat="server"></asp:Label><br />
											<asp:Label ID="CrimeDetails" runat="server" Width="100%"></asp:Label></td>
									</tr>
									<tr>
										<td colspan="3">
											<strong>
												<br />
												What is the highest level of education you have completed?</strong></td>
									</tr>
									<tr>
										<td>
											<asp:Label ID="Education" runat="server"></asp:Label></td>
										<td>
										</td>
										<td>
										</td>
									</tr>
								</table>
								<br />
								<strong>Beginning with your present or most recent employer, please provide 
									employment information<br />
									for up to your last 3 employers below:<br />
								</strong>
								<table style="width: 100%">
									<tr>
										<td colspan="3" style="background-color: #666666; font-size: larger; color: white;">
											<strong>&nbsp;Job #1</strong></td>
									</tr>
									<tr>
										<td style="width: 33%">
											<strong>Company Name:</strong><br />
											<asp:Label ID="Job1Company" runat="server"></asp:Label></td>
										<td style="width: 33%;">
											<table cellpadding="0" cellspacing="0">
												<tr>
													<td>
														<strong>Start Date:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job1StartDate" runat="server"></asp:Label></td>
													<td>
														<strong>End Date:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job1EndDate" runat="server"></asp:Label></td>
												</tr>
											</table>
										</td>
										<td><table cellpadding="0" cellspacing="0">
												<tr>
													<td>
														<strong>Starting Pay:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job1StartPay" runat="server"></asp:Label></td>
													<td>
														<strong>Ending Pay:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job1EndPay" runat="server"></asp:Label></td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td>
											<strong>Job Title:</strong><br />
											<asp:Label ID="Job1Title" runat="server"></asp:Label></td>
										<td colspan="2">
											<strong>Reason for leaving:</strong><br />
											<asp:Label ID="Job1ReasonLeave" runat="server" Width="400px"></asp:Label></td>
									</tr>
									<tr>
										<td style="width: 33%">
											<strong>Supervisor's Name:</strong><br />
											<asp:Label ID="Job1Supervisor" runat="server"></asp:Label></td>
										<td style="width: 33%">
											<strong>Supervisor's Phone:</strong><br />
											<asp:Label ID="Job1SupervisorPhone" runat="server"></asp:Label></td>
										<td style="color: #000000">
											<strong>May we contact your Supervisor?</strong><br />
											<asp:Label ID="Job1ContactYes" runat="server"></asp:Label></td>
									</tr>
								</table>
								<br />
								<table style="width: 100%">
									<tr>
										<td colspan="3" style="background-color: #666666; font-size: larger; color: white;">
											<strong>&nbsp;Job #2</strong></td>
									</tr>
									<tr>
										<td style="width: 33%">
											<strong>Company Name:</strong><br />
											<asp:Label ID="Job2Company" runat="server"></asp:Label></td>
										<td style="width: 33%;">
											<table cellpadding="0" cellspacing="0">
												<tr>
													<td>
														<strong>Start Date:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job2StartDate" runat="server"></asp:Label></td>
													<td>
														<strong>End Date:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job2EndDate" runat="server"></asp:Label></td>
												</tr>
											</table>
										</td>
										<td><table cellpadding="0" cellspacing="0">
												<tr>
													<td>
														<strong>Starting Pay:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job2StartPay" runat="server"></asp:Label></td>
													<td>
														<strong>Ending Pay:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job2EndPay" runat="server"></asp:Label></td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td>
											<strong>Job Title:</strong><br />
											<asp:Label ID="Job2Title" runat="server"></asp:Label></td>
										<td colspan="2">
											<strong>Reason for leaving:</strong><br />
											<asp:Label ID="Job2ReasonLeave" runat="server" Width="400px"></asp:Label></td>
									</tr>
									<tr>
										<td style="width: 33%">
											<strong>Supervisor's Name:</strong><br />
											<asp:Label ID="Job2Supervisor" runat="server"></asp:Label></td>
										<td style="width: 33%">
											<strong>Supervisor's Phone:</strong><br />
											<asp:Label ID="Job2SupervisorPhone" runat="server"></asp:Label></td>
										<td style="color: #000000">
											<strong>May we contact your Supervisor?</strong><br />
											<asp:Label ID="Job2ContactYes" runat="server"></asp:Label></td>
									</tr>
								</table>
								<br />
								<table style="width: 100%">
									<tr>
										<td colspan="3" style="background-color: #666666; font-size: larger; color: white;">
											<strong>&nbsp;Job #3</strong></td>
									</tr>
									<tr>
										<td style="width: 33%">
											<strong>Company Name:</strong><br />
											<asp:Label ID="Job3Company" runat="server"></asp:Label></td>
										<td style="width: 33%;">
											<table cellpadding="0" cellspacing="0">
												<tr>
													<td>
														<strong>Start Date:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job3StartDate" runat="server"></asp:Label></td>
													<td>
														<strong>End Date:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job3EndDate" runat="server"></asp:Label></td>
												</tr>
											</table>
										</td>
										<td><table cellpadding="0" cellspacing="0">
												<tr>
													<td>
														<strong>Starting Pay:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job3StartPay" runat="server"></asp:Label></td>
													<td>
														<strong>Ending Pay:&nbsp;&nbsp;</strong><br />
														<asp:Label ID="Job3EndPay" runat="server"></asp:Label></td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td>
											<strong>Job Title:</strong><br />
											<asp:Label ID="Job3Title" runat="server"></asp:Label></td>
										<td colspan="2">
											<strong>Reason for leaving:</strong><br />
											<asp:Label ID="Job3ReasonLeave" runat="server" Width="400px"></asp:Label></td>
									</tr>
									<tr>
										<td style="width: 33%">
											<strong>Supervisor's Name:</strong><br />
											<asp:Label ID="Job3Supervisor" runat="server"></asp:Label></td>
										<td style="width: 33%">
											<strong>Supervisor's Phone:</strong><br />
											<asp:Label ID="Job3SupervisorPhone" runat="server"></asp:Label></td>
										<td style="color: #000000">
											<strong>May we contact your Supervisor?</strong><br />
											<asp:Label ID="Job3ContactYes" runat="server"></asp:Label></td>
									</tr>
								</table>
								<br />
							</asp:Panel>
							&nbsp;<br />
						</td>
						<td width="6"></td>
					</tr>
				</table>
			</div>
		</form>
	</body>
</html>
