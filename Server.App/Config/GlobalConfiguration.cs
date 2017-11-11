using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;

namespace Server.App.Config
{
    public static class GlobalConfiguration
    {
        public static string Get(string key, string defaultValue)
        {
            string result = ConfigurationManager.AppSettings[key];
            return result ?? defaultValue;
        }

        public static bool IsTrue(string key, string defaultValue)
        {
            string result = ConfigurationManager.AppSettings[key];
            result = result ?? defaultValue;
            return result == "true";
        }
    }
}