using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Net.Mail;
using System.Text.RegularExpressions;

namespace CorporateSite.contact
{
    public partial class contact : System.Web.UI.Page
    {
        private int _successFlag = 0;

        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                string name = Request.Form["name"];
                string phone = Request.Form["phone"];
                //phone = Technekes.Ignition.Common.Data.Formatting.DataFormatter.FormatPhone(phone, Technekes.Ignition.Common.Data.Formatting.DataFormatter.PhoneFormat.USStandard);
                string email_real = Request.Form["email_real"];
                string comments = Request.Form["comments"];
                string email = Request.Form["email"];
                
                if (string.IsNullOrEmpty(email))
                {
                    string mailServer = ConfigurationManager.AppSettings["smtpServer"];
                    string emailTo = ConfigurationManager.AppSettings["emailAddressesForContactSubmission"];
                    
                    string body = "Name: " + name + Environment.NewLine +
                                  "Email: " + email_real + Environment.NewLine +
                                  "Phone: " + phone + Environment.NewLine +
                                  "Comments: " + comments;

                    MailMessage mailMessage = new MailMessage("Technekes Contact Submission <do-not-reply@technekes.com>", emailTo, "Technekes Website Contact Information", body);
                    SmtpClient smtpClient = new SmtpClient(mailServer, 25);
                    smtpClient.Send(mailMessage);

                    SuccessFlag = 1;
                }
            }
            catch (Exception ex)
            {
                SuccessFlag = 0;
            }
        }

        protected int SuccessFlag
        {
            get { return _successFlag; }
            private set { _successFlag = value; }
        }
    }
}
