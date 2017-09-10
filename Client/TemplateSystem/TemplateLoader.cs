using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.jQuery2;

namespace Client.TemplateSystem
{
    public static class TemplateLoader
    {

        /// <summary>
        /// Example : TemplateLoader.Load(jQuery.Select("#alert-container"), "/Templates/Bootstrap/Alert.html");
        /// Generate the following trigger "TEMPLATE_LOADED".
        /// </summary>
        /// <param name="target">The jQuery object where to append the content returned from the template</param>
        /// <param name="path">The path to the template</param>
        public static void Load(this jQuery target, string path)
        {

            jQuery.Get(path)
                .Done((dynamic data, string str, jqXHR jqxhr) => { Success((string)data, str, jqxhr, target); })
                .Fail((jqXHR jqxhr, string str1, string str2) => { Fail(jqxhr, str1, str2, target); });

            target.Trigger("TEMPLATE_LOADED");
        }

        private static void Success(string data, string str, jqXHR jqxhr, jQuery target)
        {
            target.Append(data);
        }

        private static void Fail(jqXHR jqxhr, string str1, string str2, jQuery target)
        {
            target.Append("<b style='color:red;'>Failed to load template !</b>");
        }
    }
}