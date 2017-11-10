using System;
using System.Collections.Generic;
using System.Text;
using Server.App.DAL;
using Server.App.Provider.CoinMarketCap;

namespace Server.App.Business
{
    public class BlockchainBusiness
    {
        private IDataAccessLayer _dataAccessLayer;

        public BlockchainBusiness(IDataAccessLayer dataAccessLayer)
        {
            _dataAccessLayer = dataAccessLayer;
        }

        public void RegisterData(BlockchainDTO[] data)
        {
            throw new NotImplementedException();
        }
    }
}