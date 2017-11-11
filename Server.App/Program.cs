using System;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Server.App.Business;
using Server.App.Config;
using Server.App.DAL;
using Server.App.Provider.CoinMarketCap;

namespace Server.App
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Console__Starting program...");

            // Create service collection
            IServiceCollection services = new ServiceCollection();
            ConfigureServices(services);
            //var services = new SetupManager().Services;

            // Create service provider
            var serviceProvider = services.BuildServiceProvider();

            var blockchainBusiness = serviceProvider.GetService<IBlockchainBusiness>();
            blockchainBusiness.StartRecordingDataAsync();

            Console.WriteLine("Console__End of the program...");
            Console.ReadLine();
        }

        private static void ConfigureServices(IServiceCollection services)
        {
            Console.WriteLine("Console__Initializing Dependency Injection...");

            // add logging
            services.AddSingleton(new LoggerFactory().AddConsole(LogLevel.Debug));
            services.AddLogging();

            //add provider
            if (GlobalConfiguration.IsTrue("Activate.Mock.ICoinMarketCapProvider", "true"))
            {
                services.AddTransient<ICoinMarketCapProvider, MockCoinMarketCapProvider>();
            }
            else
            {
                services.AddTransient<ICoinMarketCapProvider, MockCoinMarketCapProvider>();
            }

            if (GlobalConfiguration.IsTrue("Activate.Mock.IDataAccessLayer", "true"))
            {
                services.AddTransient<IDataAccessLayer, MockDataAccessLayer>();
            }
            else
            {
                services.AddTransient<IDataAccessLayer, DataAccessLayer>();
            }

            //add business
            services.AddTransient<IBlockchainBusiness, BlockchainBusiness>();
            Console.WriteLine("Console__Ending Dependency Injection...");
        }
    }
}
