using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Server.App.Provider.CoinMarketCap
{
    public interface ICoinMarketCapProvider
    {
        Task<BlockchainDTO[]> GetBlockChainDTOAsync(int from, int limit);
    }
}