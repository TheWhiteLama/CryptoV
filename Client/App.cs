using Bridge;
using Bridge.Html5;
using Newtonsoft.Json;
using System;
using Client.TemplateSystem;
using Bridge.jQuery2;
using Client.UI;
using Client.Ext;
using Client.DAL;
using Client.Framework;

namespace Client
{
    public class App
    {
        public static void Main()
        {
            var busManager = new BusManager();

            busManager.Add<WebConfigProvider>(new WebConfigProvider());
            busManager.Add<DataLoader>(new DataLoader());

            new Login(busManager);


            //Console.WriteLine("App.cs");
            //TemplateLoader.Load(jQuery.Select("#alert-container"), "/Templates/Bootstrap/Alert.html");

            var db = new SQL.Database();
            // Execute some sql
            var sqlstr = "CREATE TABLE hello (a int, b char);";
            sqlstr += "INSERT INTO hello VALUES (0, 'hello');";
            sqlstr += "INSERT INTO hello VALUES (1, 'world');";
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
    }
}