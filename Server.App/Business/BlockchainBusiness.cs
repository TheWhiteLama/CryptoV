using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Server.App.DAL;
using Server.App.Provider.CoinMarketCap;

namespace Server.App.Business
{
    public class BlockchainBusiness : IBlockchainBusiness
    {
        private readonly ILogger _logger;
        private ICoinMarketCapProvider _coinMarketCapProvider;
        private IDataAccessLayer _dataAccessLayer;

        public BlockchainBusiness(ILogger<BlockchainBusiness> logger, ICoinMarketCapProvider coinMarketCapProvider, IDataAccessLayer dataAccessLayer)
        {
            _logger = logger;
            _coinMarketCapProvider = coinMarketCapProvider;
            _dataAccessLayer = dataAccessLayer;
        }

        public void RegisterData(BlockchainDTO[] data)
        {
            throw new NotImplementedException();
        }

        public async Task StartRecordingDataAsync()
        {
            int from = 0;
            int limit = 10;
            _logger.LogDebug("StartRecordingDataAsync (from: [{0}]); (limit: [{1}])", from, limit);

            BlockchainDTO[] data = await _coinMarketCapProvider.GetBlockChainDTOAsync(from, limit);

            RegisterData(data);
        }
    }
}