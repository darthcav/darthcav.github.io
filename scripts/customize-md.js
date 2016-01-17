(function ()
{
    "use strict";
    var nlist = document.querySelectorAll("blockquote");
    Array.from(nlist).forEach(function (n)
    {
        n.className = blockquote;
    });
})();
