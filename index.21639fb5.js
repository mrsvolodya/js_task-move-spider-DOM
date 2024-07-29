var t=document.querySelector(".wall"),e=document.querySelector(".spider");document.addEventListener("click",function(c){var n=c.offsetX,o=c.offsetY,r=e.offsetWidth/2,a=t.clientWidth;if(c.target.closest(".wall")){var s=n<r?r:n,l=o<r?r:o;e.style.cssText="\n    transform: translate(".concat((s+r>a?a-r:s)-r,"px, ").concat((l+r>a?a-r:l)-r,"px);\n    ")}});
//# sourceMappingURL=index.21639fb5.js.map
