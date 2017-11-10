using System;
using System.Collections.Generic;
using System.Text;

namespace Server.App.DAL
{
    public class MockDataAccessLayer : IDataAccessLayer
    {
        public string HISTORIC;

        public MockDataAccessLayer()
        {
            HISTORIC = string.Empty;
        }

        private void Write(string query)
        {
            HISTORIC += "\r\n";
            HISTORIC += "-----------------";
            HISTORIC += DateTime.Now;
            HISTORIC += "-----------------";
            HISTORIC += "\r\n";
            HISTORIC += query;
        }

        public bool ExecuteQuery(string query)
        {
            Write(query);
            return true;
        }

        public List<T> Get<T>(string query)
        {
            Write(query);
            return new List<T>();
        }
    }
}
