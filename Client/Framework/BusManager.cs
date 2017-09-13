using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Client.Framework
{
    public class BusManager
    {
        private Dictionary<string, dynamic> Conteneur;

        public BusManager()
        {

            Conteneur = new Dictionary<string, dynamic>();
        }

        public void Add<T>(dynamic o)
        {

            Conteneur.Add(typeof(T).ToString(), o);
        }

        public T Get<T>()
        {

            var r = Conteneur.Get(typeof(T).ToString());
            return (T)r;
        }
    }
}