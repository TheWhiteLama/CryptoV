using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;

namespace Client.Ext
{
    /// <summary>
    /// https://github.com/kripken/sql.js
    /// </summary>
    [External]
    [Namespace(false)]
    public static class SQL
    {
        //public static Database Database()
        //{
        //    return null;
        //}

        /// <summary>
        /// var db = new SQL.Database();
        /// </summary>
        public class Database
        {
            public Database()
            {
            }

            /// <summary>
            /// Run a query without reading the results
            /// db.run("CREATE TABLE test (col1, col2);");
            /// </summary>
            public void run(string query)
            {
            }

            /// <summary>
            /// var res = db.exec("SELECT * FROM hello");
            /// result: {columns:['a','b'], values:[[0,'hello'],[1,'world']]}
            /// </summary>
            public DbResult[] exec(string query)
            {
                return null;
            }

            ///// <summary>
            ///// Prepare a statement
            ///// var stmt = db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
            ///// stmt.getAsObject({$start:1, $end:1}); // {col1:1, col2:111}
            ///// </summary>
            //public Statement prepare(string query)
            //{
            //    return null;
            //}

            ///// <summary>
            ///// Export the database to an Uint8Array containing the SQLite database file
            ///// </summary>
            //public dynamic export()
            //{
            //    return null;
            //}
        }

        // next : save file sqlite and load file sqlite
    }

    [External]
    public class DbResult
    {
        public string[] columns;
        public dynamic[][] values;
    }

    //[External]
    //public class Statement
    //{
    //    public Statement()
    //    {
    //    }

    //    /// <summary>
    //    /// stmt.getAsObject({$start:1, $end:1}); // {col1:1, col2:111}
    //    /// </summary>
    //    public dynamic getAsObject(dynamic stuff)
    //    {
    //        return null;
    //    }

    //    /// <summary>
    //    /// stmt.bind([0, 'hello']);
    //    /// while (stmt.step()) console.log(stmt.get()); // Will print [0, 'hello']
    //    /// </summary>
    //    public void bind(dynamic stuff)
    //    {
    //    }

    //    /// <summary>
    //    /// stmt.bind([0, 'hello']);
    //    /// while (stmt.step()) console.log(stmt.get()); // Will print [0, 'hello']
    //    /// </summary>
    //    public dynamic step()
    //    {
    //        return null;
    //    }

    //    /// <summary>
    //    /// free the memory used by the statement
    //    /// </summary>
    //    public void free()
    //    {
    //    }
    //}
}