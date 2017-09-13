using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Client.BO;
using Client.DAL;
using Client.Framework;

namespace Client.UI
{
    public class Login
    {
        private BusManager busManager;

        public Login(BusManager busManager)
        {
            this.busManager = busManager;

            CreatePageLayout();

            // look for data
            DataLoader dataLoader = this.busManager.Get<DataLoader>();
            User user = dataLoader.Load<User>("USER");
        }

        private void CreatePageLayout()
        {
            //TemplateLoader.Load(jQuery.Select("#alert-container"), "/Templates/Bootstrap/Alert.html");
            //throw new NotImplementedException();
        }
    }
}