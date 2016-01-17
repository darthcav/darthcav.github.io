"use strict";

(function ()
{
    var nlist = document.querySelectorAll("blockquote");
    nlist.forEach(function (n)
    {
        n.setAttribute("class", "blockquote");
    });
})();
