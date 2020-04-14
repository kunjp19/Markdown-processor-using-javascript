import commonmark from "commonmark";
import hljs from 'highlight.js';
import 'highlight.js/styles/idea.css';

window.onload= function(){
	document.getElementById("mdtoHtml").addEventListener("click", Md);
}
function Md(){
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

var parsed = reader.parse(document.getElementById("mdtxt").value);
var result = writer.render(parsed);
document.getElementById("htmltxt").innerHTML=result;
hljs.highlightBlock(document.querySelector('div'));
}
