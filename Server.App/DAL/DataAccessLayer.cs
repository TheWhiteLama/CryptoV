using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SQLite;
using System.IO;
using System.Text;
using Dapper;

namespace Server.App.DAL
{
    public class DataAccessLayer : IDataAccessLayer
    {
        private static SQLiteConnection _dbConnection;

        public DataAccessLayer(string dbFilePath, string connectionString)
        {
            if (!File.Exists(dbFilePath))
            {
                SQLiteConnection.CreateFile(dbFilePath);
            }

            _dbConnection = new SQLiteConnection(connectionString);
        }

        public bool ExecuteQuery(string query)
        {
            if (_dbConnection == null)
            {
                throw new NullReferenceException("Please provide a connection");
            }

            if (_dbConnection.State != ConnectionState.Open)
            {
                _dbConnection.Open();
            }

            _dbConnection.Execute(query);

            return true;
        }

        public List<T> Get<T>(string query)
        {
            List<T> result = _dbConnection.Query<T>(query).AsList<T>();
            return result;
        }
    }
}