using System;
using System.Threading.Tasks;

namespace Controller
{
    public class NameController
    {
        public async Task<object> GetName(object input)
        {
            return "The Correct App Name";
        }
    }
}
