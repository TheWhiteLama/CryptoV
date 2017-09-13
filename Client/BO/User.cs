using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Client.BO
{
    public class User
    {
        public string name;
        public string authSimpleToken;

        public User(string name)
        {
            this.name = name;
        }
    }
}