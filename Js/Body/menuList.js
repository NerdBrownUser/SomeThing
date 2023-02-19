// Menu List 
var menuList =
[
    [ "용병단", "mercenary.html" ],
    [ "기사", "Knight.html" ],
    [ "레인저", "ranger.html" ],
    [ "마도사", "mage.html" ],
    [ "원소술사", "elementalist.html" ],
    [ "성직자", "priest.html" ],
    [ "불한당", "scoundrel.html" ],
    [ "광전사", "berserker.html" ],
    [ "사령술사", "necromancer.html"]
];

var dir = "../Page/";

// Menu Printer
function MenuPrinter(menuName, fileRoot)
{
    document.write("<a href=" + dir + fileRoot + " class=\"menuList\">" + menuName + "</a><br>");
}

document.write("<div id=\"Menu\">");

for (var i = 0; i < menuList.length; i++)
    MenuPrinter(menuList[i][0], menuList[i][1]);

document.write("</div>");