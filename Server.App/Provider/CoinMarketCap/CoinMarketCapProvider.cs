using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Server.App.Provider.CoinMarketCap
{
    public class CoinMarketCapProvider : ICoinMarketCapProvider
    {
        private readonly ILogger _logger;
        private HttpClient _client;

        public CoinMarketCapProvider(ILogger<CoinMarketCapProvider> logger, HttpClient client)
        {
            _logger = logger;
            _client = client;
        }

        public async Task<BlockchainDTO[]> GetBlockChainDTOAsync(int from, int limit)
        {
            BlockchainDTO[] result = null;
            string url = _client.BaseAddress.AbsoluteUri;
            url += string.Format("v1/ticker/?start={0}&limit={1}", from, limit);
            _logger.LogDebug("GetBlockChainDTOAsync (from: [{0}]); (limit: [{1}]); (url: [{2}])", from, limit, url);

            HttpResponseMessage response = await _client.GetAsync(url);
            _logger.LogDebug("GetBlockChainDTOAsync (response: [{0}])", response.StatusCode);
            if (response.IsSuccessStatusCode)
            {

                string json = await response.Content.ReadAsStringAsync();
                _logger.LogDebug("GetBlockChainDTOAsync (json: [{0}])", json);
                result = JsonConvert.DeserializeObject<BlockchainDTO[]>(json);
            }
            return result;
        }
    }
}