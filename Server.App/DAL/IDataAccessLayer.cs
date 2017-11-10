using System;
using System.Collections.Generic;
using System.Text;

namespace Server.App.DAL
{
    public interface IDataAccessLayer
    {
        bool ExecuteQuery(string query);
        List<T> Get<T>(string query);
    }
}