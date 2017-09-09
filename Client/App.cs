﻿using Bridge;
using Bridge.Html5;
using Newtonsoft.Json;
using System;

namespace Client
{
    public class App
    {
        public static void Main()
        {
            // Create a new HTML Button
            var button = Document.CreateElement("button");

            // Set the Button text
            button.InnerHTML = "Click Me";

            // Add a Click event handler
            button.OnClick = (ev) =>
            {
                // Write a message to the Console
                Console.WriteLine("Welcome to Bridge.NET");
            };

            // Add the button to the document body
            Document.Body.AppendChild(button);

            // After building (Ctrl + Shift + B) this project, 
            // browse to the /bin/Debug or /bin/Release folder.

            // A new bridge/ folder is created and contains
            // your projects JavaScript files. 

            // Open the bridge/index.html file in a brower by
            // Right-Click > Open With..., then choose a
            // web browser from the list

            // This application will then run in a browser.
        }
    }
}