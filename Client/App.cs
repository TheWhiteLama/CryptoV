using Bridge;
using Bridge.Html5;
using Newtonsoft.Json;
using System;
using Client.TemplateSystem;
using Bridge.jQuery2;

namespace Client
{
    public class App
    {
        public static void Main()
        {
            Console.WriteLine("App.cs");
            TemplateLoader.Load(jQuery.Select("#alert-container"), "/Templates/Bootstrap/Alert.html");
        }
    }
}