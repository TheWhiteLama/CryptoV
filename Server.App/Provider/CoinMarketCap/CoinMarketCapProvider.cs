using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Server.App.Provider.CoinMarketCap
{
    public class CoinMarketCapProvider : ICoinMarketCapProvider
    {
        private HttpClient _client;

        public CoinMarketCapProvider(HttpClient client)
        {
            _client = client;
        }

        public async Task<BlockchainDTO[]> GetBlockChainDTOAsync(int from, int limit)
        {
            BlockchainDTO[] result = null;
            string url = _client.BaseAddress.AbsoluteUri;
            url += string.Format("v1/ticker/?start={0}&limit={1}", from, limit);
            HttpResponseMessage response = await _client.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {

                string json = await response.Content.ReadAsStringAsync();
                result = JsonConvert.DeserializeObject<BlockchainDTO[]>(json);
            }
            return result;
        }
    }
}