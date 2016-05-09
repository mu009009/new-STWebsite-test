using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;
using System.Net;
using System.IO;
using System.Configuration;

namespace CorporateSite.inc
{
    public partial class footer : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                string blogFeed = ConfigurationManager.AppSettings["blogRSSFeed"];

                var feed = GetChannelQuery(XDocument.Load(new StreamReader(HttpWebRequest.Create(blogFeed).GetResponse().GetResponseStream())));
                BlogFeedRepeater.DataSource = feed.FirstOrDefault().Items;
                BlogFeedRepeater.DataBind();

            }
            catch
            {

            }
        }

        private List<Channel> GetChannelQuery(XDocument doc)
        {
            return (from channels in doc.Descendants("channel")
                    select new Channel
                    {
                        Title = channels.Element("title") != null ? channels.Element("title").Value : "",
                        Link = channels.Element("link") != null ? channels.Element("link").Value : "",
                        Description = channels.Element("description") != null ? channels.Element("description").Value : "",
                        Items = (from items in channels.Descendants("item")
                                 //where items.Elements("category").Where(x => x.Value == "Traditions").Count() > 0
                                 select new Item
                                 {
                                     Title = items.Element("title") != null ? items.Element("title").Value : "",
                                     Link = items.Element("link") != null ? items.Element("link").Value : "",
                                     //Description = items.Element("description") != null ? items.Element("description").Value : "",
                                     PublishDate = items.Element("pubDate") != null ? DateTime.Parse(items.Element("pubDate").Value) : DateTime.MinValue,
                                     //Guid = (items.Element("guid") != null ? items.Element("guid").Value : "")
                                 }).OrderByDescending(i => i.PublishDate).Take(4).ToList()
                    }).ToList();

        }
    }
}