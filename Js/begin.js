// Scripts Variable
var script = "<script type=\"text/javascript\" src=";
var scriptEnd = "></script>";

// Scripts Root
var headerRoot = "../Js/Header/header.js";
var titleRoot = "../Js/Body/title.js";
var menuRoot = "../Js/Body/menuList.js";

document.write("<html>");

// Header Script
document.write(script+headerRoot+scriptEnd);

document.write("<body>");

// Title Script
document.write(script+titleRoot+scriptEnd);

document.write("<div id=\"grid\">");

// Menu Script
document.write(script+menuRoot+scriptEnd);

document.write("<div id=\"Page\">");