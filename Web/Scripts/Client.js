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
            var busManager = new Client.Framework.BusManager();

            busManager.Add(Client.DAL.WebConfigProvider, new Client.DAL.WebConfigProvider());
            busManager.Add(Client.DAL.DataLoader, new Client.DAL.DataLoader());

            new Client.UI.Login(busManager);


            //Console.WriteLine("App.cs");
            //TemplateLoader.Load(jQuery.Select("#alert-container"), "/Templates/Bootstrap/Alert.html");

            var db = new SQL.Database();
            // Execute some sql
            var sqlstr = "CREATE TABLE hello (a int, b char);";
            sqlstr = System.String.concat(sqlstr, "INSERT INTO hello VALUES (0, 'hello');");
            sqlstr = System.String.concat(sqlstr, "INSERT INTO hello VALUES (1, 'world');");
            db.run(sqlstr); // Run the query without returning anything
            var res = db.exec("SELECT * FROM hello");
            //int l = res[0].columns.Length;
            //int v = res[0].values.Length;
            //int v1 = res[0].values[0].Length;

            //Console.WriteLine(JSON.Stringify(res));
            //var stmt = db.prepare("SELECT * FROM hello WHERE a=:aval AND b=:bval");
            //var result = stmt.getAsObject(new { ":aval" = 1, ":bval" = "world"});
            //console.log(result); // Will print {a:1, b:'world'}
        }
    });

    Bridge.define("Client.BO.User", {
        fields: {
            name: null,
            authSimpleToken: null
        },
        ctors: {
            ctor: function (name) {
                this.$initialize();
                this.name = name;
            }
        }
    });

    Bridge.define("Client.DAL.DataLoader", {
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            Load: function (T, key) {
                return Bridge.getDefaultValue(T);
            }
        }
    });

    Bridge.define("Client.DAL.WebConfigProvider", {
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            GetValue: function (key) {
                // read the web.config from project Web (xml) and return value if key, else NULL


                return "";
            }
        }
    });

    Bridge.define("Client.Framework.BusManager", {
        fields: {
            Conteneur: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();

                this.Conteneur = new (System.Collections.Generic.Dictionary$2(System.String,System.Object))();
            }
        },
        methods: {
            Add: function (T, o) {

                this.Conteneur.add(Bridge.getTypeName(T), o);
            },
            Get: function (T) {

                var r = this.Conteneur.get(Bridge.getTypeName(T));
                return Bridge.cast(r, T);
            }
        }
    });

    Bridge.define("Client.TemplateSystem.TemplateLoader", {
        statics: {
            methods: {
                /**
                 * Example : TemplateLoader.Load(jQuery.Select("#alert-container"), "/Templates/Bootstrap/Alert.html");
                 Generate the following trigger "TEMPLATE_LOADED".
                 *
                 * @static
                 * @public
                 * @this Client.TemplateSystem.TemplateLoader
                 * @memberof Client.TemplateSystem.TemplateLoader
                 * @param   {$}         target    The jQuery object where to append the content returned from the template
                 * @param   {string}    path      The path to the template
                 * @return  {void}
                 */
                Load: function (target, path) {

                    $.get(path).done(function (data, str, jqxhr) {
                        Client.TemplateSystem.TemplateLoader.Success(Bridge.cast(data, System.String), str, jqxhr, target);
                    }).fail(function (jqxhr, str1, str2) {
                        Client.TemplateSystem.TemplateLoader.Fail(jqxhr, str1, str2, target);
                    });

                    target.trigger("TEMPLATE_LOADED");
                },
                Success: function (data, str, jqxhr, target) {
                    target.append(data);
                },
                Fail: function (jqxhr, str1, str2, target) {
                    target.append("<b style='color:red;'>Failed to load template !</b>");
                }
            }
        }
    });

    Bridge.define("Client.UI.Login", {
        fields: {
            busManager: null
        },
        ctors: {
            ctor: function (busManager) {
                this.$initialize();
                this.busManager = busManager;

                this.CreatePageLayout();

                // look for data
                var dataLoader = this.busManager.Get(Client.DAL.DataLoader);
                var user = dataLoader.Load(Client.BO.User, "USER");
            }
        },
        methods: {
            CreatePageLayout: function () {
                //TemplateLoader.Load(jQuery.Select("#alert-container"), "/Templates/Bootstrap/Alert.html");
                //throw new NotImplementedException();
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDbGllbnQuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIkFwcC5jcyIsIkJPL1VzZXIuY3MiLCJEQUwvRGF0YUxvYWRlci5jcyIsIkRBTC9XZWJDb25maWdQcm92aWRlci5jcyIsIkZyYW1ld29yay9CdXNNYW5hZ2VyLmNzIiwiVGVtcGxhdGVTeXN0ZW0vVGVtcGxhdGVMb2FkZXIuY3MiLCJVSS9Mb2dpbi5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7WUFpQllBLGlCQUFpQkEsSUFBSUE7O1lBRXJCQSw2Q0FBa0NBLElBQUlBO1lBQ3RDQSxzQ0FBMkJBLElBQUlBOztZQUUvQkEsSUFBSUEsZ0JBQU1BOzs7Ozs7WUFNVkEsU0FBU0EsSUFBSUE7O1lBRWJBO1lBQ0FBO1lBQ0FBO1lBQ0FBLE9BQU9BO1lBQ1BBLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJDckJGQTs7Z0JBRVJBLFlBQVlBOzs7Ozs7Ozs7Ozs7NEJDREZBLEdBQUdBO2dCQUViQSxPQUFPQTs7Ozs7Ozs7Ozs7O2dDQ0ZZQTs7OztnQkFLbkJBLE9BQU9BOzs7Ozs7Ozs7Ozs7O2dCQ0pQQSxpQkFBWUEsS0FBSUE7Ozs7MkJBR0pBLEdBQUdBOztnQkFHZkEsbUJBQWNBLG1CQUFPQSxJQUFlQTs7MkJBRzNCQTs7Z0JBR1RBLFFBQVFBLG1CQUFjQSxtQkFBT0E7Z0JBQzdCQSxPQUFPQSxZQUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NDVlVBLFFBQW9CQTs7b0JBR3hDQSxNQUFXQSxXQUNEQSxBQUFzRUEsVUFBQ0EsTUFBY0EsS0FBWUE7d0JBQWtCQSw2Q0FBUUEsWUFBUUEsc0JBQU1BLEtBQUtBLE9BQU9BOzRCQUNySkEsQUFBc0VBLFVBQUNBLE9BQWFBLE1BQWFBO3dCQUFrQkEsMENBQUtBLE9BQU9BLE1BQU1BLE1BQU1BOzs7b0JBRXJKQTs7bUNBR3dCQSxNQUFhQSxLQUFZQSxPQUFhQTtvQkFFOURBLGNBQWNBOztnQ0FHT0EsT0FBYUEsTUFBYUEsTUFBYUE7b0JBRTVEQTs7Ozs7Ozs7Ozs7NEJDcEJTQTs7Z0JBRVRBLGtCQUFrQkE7O2dCQUVsQkE7OztnQkFHQUEsaUJBQXdCQTtnQkFDeEJBLFdBQVlBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBOZXd0b25zb2Z0Lkpzb247XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgQ2xpZW50LlRlbXBsYXRlU3lzdGVtO1xyXG51c2luZyBCcmlkZ2UualF1ZXJ5MjtcclxudXNpbmcgQ2xpZW50LlVJO1xyXG51c2luZyBDbGllbnQuRXh0O1xyXG51c2luZyBDbGllbnQuREFMO1xyXG51c2luZyBDbGllbnQuRnJhbWV3b3JrO1xyXG5cclxubmFtZXNwYWNlIENsaWVudFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQXBwXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGJ1c01hbmFnZXIgPSBuZXcgQnVzTWFuYWdlcigpO1xyXG5cclxuICAgICAgICAgICAgYnVzTWFuYWdlci5BZGQ8V2ViQ29uZmlnUHJvdmlkZXI+KG5ldyBXZWJDb25maWdQcm92aWRlcigpKTtcclxuICAgICAgICAgICAgYnVzTWFuYWdlci5BZGQ8RGF0YUxvYWRlcj4obmV3IERhdGFMb2FkZXIoKSk7XHJcblxyXG4gICAgICAgICAgICBuZXcgTG9naW4oYnVzTWFuYWdlcik7XHJcblxyXG5cclxuICAgICAgICAgICAgLy9Db25zb2xlLldyaXRlTGluZShcIkFwcC5jc1wiKTtcclxuICAgICAgICAgICAgLy9UZW1wbGF0ZUxvYWRlci5Mb2FkKGpRdWVyeS5TZWxlY3QoXCIjYWxlcnQtY29udGFpbmVyXCIpLCBcIi9UZW1wbGF0ZXMvQm9vdHN0cmFwL0FsZXJ0Lmh0bWxcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGIgPSBuZXcgU1FMLkRhdGFiYXNlKCk7XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgc29tZSBzcWxcclxuICAgICAgICAgICAgdmFyIHNxbHN0ciA9IFwiQ1JFQVRFIFRBQkxFIGhlbGxvIChhIGludCwgYiBjaGFyKTtcIjtcclxuICAgICAgICAgICAgc3Fsc3RyICs9IFwiSU5TRVJUIElOVE8gaGVsbG8gVkFMVUVTICgwLCAnaGVsbG8nKTtcIjtcclxuICAgICAgICAgICAgc3Fsc3RyICs9IFwiSU5TRVJUIElOVE8gaGVsbG8gVkFMVUVTICgxLCAnd29ybGQnKTtcIjtcclxuICAgICAgICAgICAgZGIucnVuKHNxbHN0cik7IC8vIFJ1biB0aGUgcXVlcnkgd2l0aG91dCByZXR1cm5pbmcgYW55dGhpbmdcclxuICAgICAgICAgICAgdmFyIHJlcyA9IGRiLmV4ZWMoXCJTRUxFQ1QgKiBGUk9NIGhlbGxvXCIpO1xyXG4gICAgICAgICAgICAvL2ludCBsID0gcmVzWzBdLmNvbHVtbnMuTGVuZ3RoO1xyXG4gICAgICAgICAgICAvL2ludCB2ID0gcmVzWzBdLnZhbHVlcy5MZW5ndGg7XHJcbiAgICAgICAgICAgIC8vaW50IHYxID0gcmVzWzBdLnZhbHVlc1swXS5MZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAvL0NvbnNvbGUuV3JpdGVMaW5lKEpTT04uU3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICAvL3ZhciBzdG10ID0gZGIucHJlcGFyZShcIlNFTEVDVCAqIEZST00gaGVsbG8gV0hFUkUgYT06YXZhbCBBTkQgYj06YnZhbFwiKTtcclxuICAgICAgICAgICAgLy92YXIgcmVzdWx0ID0gc3RtdC5nZXRBc09iamVjdChuZXcgeyBcIjphdmFsXCIgPSAxLCBcIjpidmFsXCIgPSBcIndvcmxkXCJ9KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpOyAvLyBXaWxsIHByaW50IHthOjEsIGI6J3dvcmxkJ31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ2xpZW50LkJPXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBVc2VyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBuYW1lO1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgYXV0aFNpbXBsZVRva2VuO1xyXG5cclxuICAgICAgICBwdWJsaWMgVXNlcihzdHJpbmcgbmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENsaWVudC5EQUxcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhdGFMb2FkZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgRGF0YUxvYWRlcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFQgTG9hZDxUPihzdHJpbmcga2V5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHQoVCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENsaWVudC5EQUxcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFdlYkNvbmZpZ1Byb3ZpZGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFdlYkNvbmZpZ1Byb3ZpZGVyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEdldFZhbHVlKHN0cmluZyBrZXkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyByZWFkIHRoZSB3ZWIuY29uZmlnIGZyb20gcHJvamVjdCBXZWIgKHhtbCkgYW5kIHJldHVybiB2YWx1ZSBpZiBrZXksIGVsc2UgTlVMTFxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuRW1wdHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENsaWVudC5GcmFtZXdvcmtcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEJ1c01hbmFnZXJcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIERpY3Rpb25hcnk8c3RyaW5nLCBkeW5hbWljPiBDb250ZW5ldXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBCdXNNYW5hZ2VyKClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBDb250ZW5ldXIgPSBuZXcgRGljdGlvbmFyeTxzdHJpbmcsIGR5bmFtaWM+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQ8VD4oZHluYW1pYyBvKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIENvbnRlbmV1ci5BZGQodHlwZW9mKFQpLlRvU3RyaW5nKCksIG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFQgR2V0PFQ+KClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB2YXIgciA9IENvbnRlbmV1ci5HZXQodHlwZW9mKFQpLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFQpcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIEJyaWRnZS5qUXVlcnkyO1xyXG5cclxubmFtZXNwYWNlIENsaWVudC5UZW1wbGF0ZVN5c3RlbVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIFRlbXBsYXRlTG9hZGVyXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gRXhhbXBsZSA6IFRlbXBsYXRlTG9hZGVyLkxvYWQoalF1ZXJ5LlNlbGVjdChcIiNhbGVydC1jb250YWluZXJcIiksIFwiL1RlbXBsYXRlcy9Cb290c3RyYXAvQWxlcnQuaHRtbFwiKTtcclxuICAgICAgICAvLy8gR2VuZXJhdGUgdGhlIGZvbGxvd2luZyB0cmlnZ2VyIFwiVEVNUExBVEVfTE9BREVEXCIuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJ0YXJnZXRcIj5UaGUgalF1ZXJ5IG9iamVjdCB3aGVyZSB0byBhcHBlbmQgdGhlIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGUgdGVtcGxhdGU8L3BhcmFtPlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cInBhdGhcIj5UaGUgcGF0aCB0byB0aGUgdGVtcGxhdGU8L3BhcmFtPlxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBMb2FkKHRoaXMgalF1ZXJ5IHRhcmdldCwgc3RyaW5nIHBhdGgpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5LkdldChwYXRoKVxyXG4gICAgICAgICAgICAgICAgLkRvbmUoKGdsb2JhbDo6U3lzdGVtLkFjdGlvbjxvYmplY3QsIHN0cmluZywgZ2xvYmFsOjpCcmlkZ2UualF1ZXJ5Mi5qcVhIUj4pKChkeW5hbWljIGRhdGEsIHN0cmluZyBzdHIsIGpxWEhSIGpxeGhyKSA9PiB7IFN1Y2Nlc3MoKHN0cmluZylkYXRhLCBzdHIsIGpxeGhyLCB0YXJnZXQpOyB9KSlcclxuICAgICAgICAgICAgICAgIC5GYWlsKChnbG9iYWw6OlN5c3RlbS5BY3Rpb248Z2xvYmFsOjpCcmlkZ2UualF1ZXJ5Mi5qcVhIUiwgc3RyaW5nLCBzdHJpbmc+KSgoanFYSFIganF4aHIsIHN0cmluZyBzdHIxLCBzdHJpbmcgc3RyMikgPT4geyBGYWlsKGpxeGhyLCBzdHIxLCBzdHIyLCB0YXJnZXQpOyB9KSk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXQuVHJpZ2dlcihcIlRFTVBMQVRFX0xPQURFRFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZvaWQgU3VjY2VzcyhzdHJpbmcgZGF0YSwgc3RyaW5nIHN0ciwganFYSFIganF4aHIsIGpRdWVyeSB0YXJnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YXJnZXQuQXBwZW5kKGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBGYWlsKGpxWEhSIGpxeGhyLCBzdHJpbmcgc3RyMSwgc3RyaW5nIHN0cjIsIGpRdWVyeSB0YXJnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YXJnZXQuQXBwZW5kKFwiPGIgc3R5bGU9J2NvbG9yOnJlZDsnPkZhaWxlZCB0byBsb2FkIHRlbXBsYXRlICE8L2I+XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgQ2xpZW50LkJPO1xyXG51c2luZyBDbGllbnQuREFMO1xyXG51c2luZyBDbGllbnQuRnJhbWV3b3JrO1xyXG5cclxubmFtZXNwYWNlIENsaWVudC5VSVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgTG9naW5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIEJ1c01hbmFnZXIgYnVzTWFuYWdlcjtcclxuXHJcbiAgICAgICAgcHVibGljIExvZ2luKEJ1c01hbmFnZXIgYnVzTWFuYWdlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVzTWFuYWdlciA9IGJ1c01hbmFnZXI7XHJcblxyXG4gICAgICAgICAgICBDcmVhdGVQYWdlTGF5b3V0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBsb29rIGZvciBkYXRhXHJcbiAgICAgICAgICAgIERhdGFMb2FkZXIgZGF0YUxvYWRlciA9IHRoaXMuYnVzTWFuYWdlci5HZXQ8RGF0YUxvYWRlcj4oKTtcclxuICAgICAgICAgICAgVXNlciB1c2VyID0gZGF0YUxvYWRlci5Mb2FkPFVzZXI+KFwiVVNFUlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBDcmVhdGVQYWdlTGF5b3V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vVGVtcGxhdGVMb2FkZXIuTG9hZChqUXVlcnkuU2VsZWN0KFwiI2FsZXJ0LWNvbnRhaW5lclwiKSwgXCIvVGVtcGxhdGVzL0Jvb3RzdHJhcC9BbGVydC5odG1sXCIpO1xyXG4gICAgICAgICAgICAvL3Rocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdCn0K
