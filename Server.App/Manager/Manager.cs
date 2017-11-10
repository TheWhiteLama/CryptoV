using System;
using System.Collections.Generic;
using System.Text;
using Server.App.Business;
using Server.App.DAL;
using Server.App.Provider.CoinMarketCap;

namespace Server.App.Manager
{
    public class Manager
    {
        private ICoinMarketCapProvider _coinMarketCapProvider;
        private BlockchainBusiness _blockchainBusiness;

        public Manager()
        {
            _coinMarketCapProvider = new MockCoinMarketCapProvider();
            string dbFilePath = "./TestDb.sqlite";
            string connectionString = string.Format("Data Source={0};Version=3;", dbFilePath);
            //var dataAccessLayer = new DataAccessLayer(dbFilePath, connectionString);
            var dataAccessLayer = new MockDataAccessLayer();
            _blockchainBusiness = new BlockchainBusiness(dataAccessLayer);

            StartAsync();
        }

        public async void StartAsync()
        {
            int from = 0;
            int limit = 10;
            BlockchainDTO[] data = await _coinMarketCapProvider.GetBlockChainDTOAsync(from, limit);

            _blockchainBusiness.RegisterData(data);
        }
    }
}