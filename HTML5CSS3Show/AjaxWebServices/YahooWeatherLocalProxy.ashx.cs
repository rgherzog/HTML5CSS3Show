using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace HTML5CSS3Show.AjaxWebServices
{
    /// <summary>
    /// Handler Proxy that request the current wheather information from yahoo wheather service
    /// </summary>
    public class Handler2 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            WebClient wheaterClient = new WebClient();
            string baseURL = "http://weather.yahooapis.com/forecastrss?";
            string woeid = "w=545801"; //Linz, Austria
            string response = wheaterClient.DownloadString(baseURL + woeid);


            context.Response.ContentType = "rss+xml";
            context.Response.Write(response);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}