using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HTML5CSS3Show.AjaxWebServices
{
    /// <summary>
    /// Handler that returns plain text
    /// </summary>
    public class Handler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write("blabla");
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