using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Server.App.Business
{
    public interface IBlockchainBusiness
    {
        Task StartRecordingDataAsync();
    }
}