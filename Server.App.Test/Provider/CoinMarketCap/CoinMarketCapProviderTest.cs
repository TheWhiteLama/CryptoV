﻿using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Server.App.Provider.CoinMarketCap;

namespace Server.App.Test.Provider.CoinMarketCap
{
    [TestClass]
    public class CoinMarketCapProviderTest
    {
        [TestMethod]
        [Ignore]
        public void Validate_GetBlockChainDTOAsync()
        {
            // Arrange
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://api.coinmarketcap.com");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            ILoggerFactory loggerFactory = new LoggerFactory();
            ILogger<CoinMarketCapProvider> logger = loggerFactory.CreateLogger<CoinMarketCapProvider>();
            var provider = new CoinMarketCapProvider(logger, client);

            // Act
            var result = provider.GetBlockChainDTOAsync(0, 10);

            // Assert
            Assert.AreEqual(10, result.Result.Length);
        }

        [TestMethod]
        public void Validate_Mock_GetBlockChainDTOAsync()
        {
            // Arrange
            ILoggerFactory loggerFactory = new LoggerFactory();
            ILogger<MockCoinMarketCapProvider> logger = loggerFactory.CreateLogger<MockCoinMarketCapProvider>();
            var provider = new MockCoinMarketCapProvider(logger);

            // Act
            var result = provider.GetBlockChainDTOAsync(0, 10);

            // Assert
            Assert.AreEqual(10, result.Result.Length);
        }
    }
}