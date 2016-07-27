using Nancy;

namespace MithrilITunes
{
    public class IndexModule : NancyModule
    {
        public IndexModule()
        {
            Get["/"] = p => View["index"];
        }
    }
}