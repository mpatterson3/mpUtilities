using System;
using Newtonsoft.Json;
namespace dotnet1
{
    class Account{
        public string Name{get;set;}
        public DateTime DOB{get;set;}
        public string email{get; set;}
        
    }
    class Program   
    {
        static void Main(string[] args)
        {
            var account = new Account();
            account.Name = "John Doe";
            account.email = "deeznuts@goteem.com";
            account.DOB = new DateTime(1980, 2, 20, 0, 0, 0, DateTimeKind.Utc);
            string json = JsonConvert.SerializeObject(account, Formatting.Indented);
            Console.WriteLine(json);
        }
    }
}
