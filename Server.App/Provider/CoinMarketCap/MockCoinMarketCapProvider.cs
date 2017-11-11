using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Server.App.Provider.CoinMarketCap
{
    public class MockCoinMarketCapProvider : ICoinMarketCapProvider
    {
        private readonly ILogger _logger;

        public MockCoinMarketCapProvider(ILogger<MockCoinMarketCapProvider> logger)
        {
            _logger = logger;
        }

        public Task<BlockchainDTO[]> GetBlockChainDTOAsync(int from, int limit)
        {
            _logger.LogDebug("GetBlockChainDTOAsync (from: [{0}]); (limit: [{1}])", from, limit);
            #region data
            string json = @"[
    {
        'id': 'bitcoin', 
        'name': 'Bitcoin', 
        'symbol': 'BTC', 
        'rank': '1', 
        'price_usd': '6618.88', 
        'price_btc': '1.0', 
        '24h_volume_usd': '5011630000.0', 
        'market_cap_usd': '110365852672', 
        'available_supply': '16674400.0', 
        'total_supply': '16674400.0', 
        'max_supply': '21000000.0', 
        'percent_change_1h': '2.02', 
        'percent_change_24h': '-7.57', 
        'percent_change_7d': '-8.36', 
        'last_updated': '1510351451'
    }, 
    {
        'id': 'ethereum', 
        'name': 'Ethereum', 
        'symbol': 'ETH', 
        'rank': '2', 
        'price_usd': '301.134', 
        'price_btc': '0.0456688', 
        '24h_volume_usd': '889619000.0', 
        'market_cap_usd': '28802592343.0', 
        'available_supply': '95647095.0', 
        'total_supply': '95647095.0', 
        'max_supply': null, 
        'percent_change_1h': '1.23', 
        'percent_change_24h': '-6.42', 
        'percent_change_7d': '0.09', 
        'last_updated': '1510351453'
    }, 
    {
        'id': 'bitcoin-cash', 
        'name': 'Bitcoin Cash', 
        'symbol': 'BCH', 
        'rank': '3', 
        'price_usd': '943.104', 
        'price_btc': '0.143028', 
        '24h_volume_usd': '4673890000.0', 
        'market_cap_usd': '15824624947.0', 
        'available_supply': '16779300.0', 
        'total_supply': '16779300.0', 
        'max_supply': '21000000.0', 
        'percent_change_1h': '-3.34', 
        'percent_change_24h': '44.88', 
        'percent_change_7d': '45.55', 
        'last_updated': '1510351462'
    }, 
    {
        'id': 'ripple', 
        'name': 'Ripple', 
        'symbol': 'XRP', 
        'rank': '4', 
        'price_usd': '0.207896', 
        'price_btc': '0.00003141', 
        '24h_volume_usd': '140039000.0', 
        'market_cap_usd': '8010552816.0', 
        'available_supply': '38531538922.0', 
        'total_supply': '99993667738.0', 
        'max_supply': '100000000000', 
        'percent_change_1h': '0.65', 
        'percent_change_24h': '-4.51', 
        'percent_change_7d': '-0.45', 
        'last_updated': '1510351741'
    }, 
    {
        'id': 'litecoin', 
        'name': 'Litecoin', 
        'symbol': 'LTC', 
        'rank': '5', 
        'price_usd': '60.1804', 
        'price_btc': '0.00909162', 
        '24h_volume_usd': '287184000.0', 
        'market_cap_usd': '3235754614.0', 
        'available_supply': '53767582.0', 
        'total_supply': '53767582.0', 
        'max_supply': '84000000.0', 
        'percent_change_1h': '3.59', 
        'percent_change_24h': '-7.92', 
        'percent_change_7d': '8.54', 
        'last_updated': '1510351741'
    }, 
    {
        'id': 'dash', 
        'name': 'Dash', 
        'symbol': 'DASH', 
        'rank': '6', 
        'price_usd': '323.319', 
        'price_btc': '0.0488447', 
        '24h_volume_usd': '110762000.0', 
        'market_cap_usd': '2483338299.0', 
        'available_supply': '7680768.0', 
        'total_supply': '7680768.0', 
        'max_supply': '18900000.0', 
        'percent_change_1h': '3.95', 
        'percent_change_24h': '-1.78', 
        'percent_change_7d': '17.84', 
        'last_updated': '1510351746'
    }, 
    {
        'id': 'neo', 
        'name': 'NEO', 
        'symbol': 'NEO', 
        'rank': '7', 
        'price_usd': '28.4199', 
        'price_btc': '0.00431007', 
        '24h_volume_usd': '58068600.0', 
        'market_cap_usd': '1847293500.0', 
        'available_supply': '65000000.0', 
        'total_supply': '100000000.0', 
        'max_supply': null, 
        'percent_change_1h': '1.76', 
        'percent_change_24h': '-10.36', 
        'percent_change_7d': '7.62', 
        'last_updated': '1510351454'
    }, 
    {
        'id': 'nem', 
        'name': 'NEM', 
        'symbol': 'XEM', 
        'rank': '8', 
        'price_usd': '0.195844', 
        'price_btc': '0.00002959', 
        '24h_volume_usd': '10624100.0', 
        'market_cap_usd': '1762596000.0', 
        'available_supply': '8999999999.0', 
        'total_supply': '8999999999.0', 
        'max_supply': null, 
        'percent_change_1h': '4.48', 
        'percent_change_24h': '-7.97', 
        'percent_change_7d': '16.82', 
        'last_updated': '1510351748'
    }, 
    {
        'id': 'monero', 
        'name': 'Monero', 
        'symbol': 'XMR', 
        'rank': '9', 
        'price_usd': '106.815', 
        'price_btc': '0.0161369', 
        '24h_volume_usd': '86092700.0', 
        'market_cap_usd': '1638097877.0', 
        'available_supply': '15335841.0', 
        'total_supply': '15335841.0', 
        'max_supply': null, 
        'percent_change_1h': '3.53', 
        'percent_change_24h': '-10.42', 
        'percent_change_7d': '22.9', 
        'last_updated': '1510351743'
    }, 
    {
        'id': 'ethereum-classic', 
        'name': 'Ethereum Classic', 
        'symbol': 'ETC', 
        'rank': '10', 
        'price_usd': '14.8352', 
        'price_btc': '0.00224985', 
        '24h_volume_usd': '291819000.0', 
        'market_cap_usd': '1443726935.0', 
        'available_supply': '97317659.0', 
        'total_supply': '97317659.0', 
        'max_supply': null, 
        'percent_change_1h': '3.5', 
        'percent_change_24h': '4.59', 
        'percent_change_7d': '26.81', 
        'last_updated': '1510351452'
    }
]";
            #endregion data
            var response = JsonConvert.DeserializeObject<BlockchainDTO[]>(json);
            return Task.FromResult(response);
        }
    }
}