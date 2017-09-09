/**
 * @version 1.0.0.0
 * @author Microsoft
 * @copyright Copyright © Microsoft 2017
 * @compiler Bridge.NET 16.2.0
 */
Bridge.assembly("Client", function ($asm, globals) {
    "use strict";

    Bridge.define("Client.App", {
        main: function Main () {
            // Create a new HTML Button
            var button = document.createElement("button");

            // Set the Button text
            button.innerHTML = "Click Me";

            // Add a Click event handler
            button.onclick = $asm.$.Client.App.f1;

            // Add the button to the document body
            document.body.appendChild(button);

            // After building (Ctrl + Shift + B) this project, 
            // browse to the /bin/Debug or /bin/Release folder.

            // A new bridge/ folder is created and contains
            // your projects JavaScript files. 

            // Open the bridge/index.html file in a brower by
            // Right-Click > Open With..., then choose a
            // web browser from the list

            // This application will then run in a browser.
        }
    });

    Bridge.ns("Client.App", $asm.$);

    Bridge.apply($asm.$.Client.App, {
        f1: function (ev) {
            // Write a message to the Console
            System.Console.WriteLine("Welcome to Bridge.NET");
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDbGllbnQuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIkFwcC5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O1lBWVlBLGFBQWFBOzs7WUFHYkE7OztZQUdBQSxpQkFBaUJBOzs7WUFPakJBLDBCQUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBUFJBOztZQUdkQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgTmV3dG9uc29mdC5Kc29uO1xyXG51c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgQ2xpZW50XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBBcHBcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgSFRNTCBCdXR0b25cclxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIEJ1dHRvbiB0ZXh0XHJcbiAgICAgICAgICAgIGJ1dHRvbi5Jbm5lckhUTUwgPSBcIkNsaWNrIE1lXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgYSBDbGljayBldmVudCBoYW5kbGVyXHJcbiAgICAgICAgICAgIGJ1dHRvbi5PbkNsaWNrID0gKGV2KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBXcml0ZSBhIG1lc3NhZ2UgdG8gdGhlIENvbnNvbGVcclxuICAgICAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiV2VsY29tZSB0byBCcmlkZ2UuTkVUXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHRoZSBidXR0b24gdG8gdGhlIGRvY3VtZW50IGJvZHlcclxuICAgICAgICAgICAgRG9jdW1lbnQuQm9keS5BcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWZ0ZXIgYnVpbGRpbmcgKEN0cmwgKyBTaGlmdCArIEIpIHRoaXMgcHJvamVjdCwgXHJcbiAgICAgICAgICAgIC8vIGJyb3dzZSB0byB0aGUgL2Jpbi9EZWJ1ZyBvciAvYmluL1JlbGVhc2UgZm9sZGVyLlxyXG5cclxuICAgICAgICAgICAgLy8gQSBuZXcgYnJpZGdlLyBmb2xkZXIgaXMgY3JlYXRlZCBhbmQgY29udGFpbnNcclxuICAgICAgICAgICAgLy8geW91ciBwcm9qZWN0cyBKYXZhU2NyaXB0IGZpbGVzLiBcclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gdGhlIGJyaWRnZS9pbmRleC5odG1sIGZpbGUgaW4gYSBicm93ZXIgYnlcclxuICAgICAgICAgICAgLy8gUmlnaHQtQ2xpY2sgPiBPcGVuIFdpdGguLi4sIHRoZW4gY2hvb3NlIGFcclxuICAgICAgICAgICAgLy8gd2ViIGJyb3dzZXIgZnJvbSB0aGUgbGlzdFxyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyBhcHBsaWNhdGlvbiB3aWxsIHRoZW4gcnVuIGluIGEgYnJvd3Nlci5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXQp9Cg==
