"use strict";function sortCoord(e,t,o,c,i,r){var s=t[i].cx,a=t[i].cy,l=t[i+1].cx,h=t[i+1].cy,f=s-l>0?s-sizeRect:l-sizeRect,v=a-h>0?a-sizeRect:h-sizeRect,d=e[i].cx,u=e[i].cy,n=s!=l&&a!=h&&Math.abs(s-l)==2*sizeRect&&Math.abs(a-h)==2*sizeRect&&f==d&&v==u;if(n)if(r=!0,e.length>i+1&&e.length>1)sortCoord(e,t,o,c,i+1,!0);else{var M=t.slice(0,i+2),R=e.slice(0,i+1);o.push(M),c.push(R)}else if(!n){if(r){M=t.slice(0,i+1),R=e.slice(0,i);o.push(M),c.push(R)}t.splice(i,1),e.splice(i-1,1),sortCoord(e,t,o,c,i-1,!1)}}function addCoordDelete(e,t,o){var c={cx:e,cy:t};return o.push(c),o}function addCoordMove(e,t,o){var c={cx:e,cy:t};return o.push(c),o}function moveTopLeft(e,t,o,c,i,r){if(e=Math.floor(e-sizeRect),t=Math.floor(t-sizeRect),validCoord(e,t)){var s=c.classList.contains("king");if("free"==checkMove(e,t)&&(s||"white"==o)&&void 0==r)createActiveRect(e,t,o).classList.add("clearUsual"),s&&moveTopLeft(e,t,o,c,i,r);else if("black"==checkMove(e,t)&&"white"==o||"white"==checkMove(e,t)&&"black"==o){var a=Math.floor(e-sizeRect),l=Math.floor(t-sizeRect);"free"==checkMove(a,l)&&moveTopLeft(e,t,o,c,i,r=!0)}else if("free"==checkMove(e,t)&&void 0!=r){createActiveRect(e,t,o).classList.add("clearRectUpper");a=Math.floor(e-sizeRect),l=Math.floor(t-sizeRect);("free"!=checkMove(a,l)||s)&&moveTopLeft(e,t,o,c,i,r),moveTopRigth(e,t,o,c,i),moveLowLeft(e,t,o,c,i)}return i}}function moveTopRigth(e,t,o,c,i,r){if(e=Math.floor(e+sizeRect),t=Math.floor(t-sizeRect),validCoord(e,t)){var s=c.classList.contains("king");if("free"==checkMove(e,t)&&(s||"white"==o)&&void 0==r)createActiveRect(e,t,o).classList.add("clearUsual"),s&&moveTopRigth(e,t,o,c,i,r);else if("black"==checkMove(e,t)&&"white"==o||"white"==checkMove(e,t)&&"black"==o){var a=Math.floor(e+sizeRect),l=Math.floor(t-sizeRect);"free"==checkMove(a,l)&&validCoord(a,l)&&moveTopRigth(e,t,o,c,i,r=!0)}else if("free"==checkMove(e,t)&&void 0!=r){createActiveRect(e,t,o).classList.add("clearRectUpper");a=Math.floor(e+sizeRect),l=Math.floor(t-sizeRect);("free"!=checkMove(a,l)||s)&&moveTopRigth(e,t,o,c,i,r),moveTopLeft(e,t,o,c,i),moveLowRigth(e,t,o,c,i)}return i}}function moveLowLeft(e,t,o,c,i,r){if(e=Math.floor(e-sizeRect),t=Math.floor(t+sizeRect),validCoord(e,t)){var s=c.classList.contains("king");if("free"==checkMove(e,t)&&(s||"black"==o)&&void 0==r)createActiveRect(e,t,o).classList.add("clearUsual"),s&&moveLowLeft(e,t,o,c,i,r);else if("black"==checkMove(e,t)&&"white"==o||"white"==checkMove(e,t)&&"black"==o){var a=Math.floor(e-sizeRect),l=Math.floor(t+sizeRect);"free"==checkMove(a,l)&&moveLowLeft(e,t,o,c,i,r=!0)}else if("free"==checkMove(e,t)&&void 0!=r){createActiveRect(e,t,o).classList.add("clearRectUpper");a=Math.floor(e-sizeRect),l=Math.floor(t+sizeRect);("free"!=checkMove(a,l)||s)&&moveLowLeft(e,t,o,c,i,r=!0),moveTopLeft(e,t,o,c,i),moveLowRigth(e,t,o,c,i)}return i}}function moveLowRigth(e,t,o,c,i,r){if(e=Math.floor(e+sizeRect),t=Math.floor(t+sizeRect),validCoord(e,t)){var s=c.classList.contains("king");if("free"==checkMove(e,t)&&(s||"black"==o)&&void 0==r)createActiveRect(e,t,o).classList.add("clearUsual"),s&&moveLowRigth(e,t,o,c,i,r);else if("black"==checkMove(e,t)&&"white"==o||"white"==checkMove(e,t)&&"black"==o){var a=Math.floor(e+sizeRect),l=Math.floor(t+sizeRect);"free"==checkMove(a,l)&&moveLowRigth(e,t,o,c,i,r=!0)}else if("free"==checkMove(e,t)&&void 0!=r){createActiveRect(e,t,o).classList.add("clearRectUpper");a=Math.floor(e+sizeRect),l=Math.floor(t+sizeRect);("free"!=checkMove(a,l)||s)&&moveLowRigth(e,t,o,c,i,r)}return i}}function addClassDelete(e,t){for(var o=0;o<circle.length;o++)circle[o].getAttribute("cx")==e&&circle[o].getAttribute("cy")==t&&circle[o].classList.add("delete")}!function(){var e=document.querySelector("div"),t=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=document.documentElement.clientHeight;document.documentElement.clientWidth;e.appendChild(t);var c=Math.floor(o/100*80);t.style.height=c,t.style.width=c,e.style.height=c+"px";var i=Math.floor(c/8);i%2&&i++;for(var r=0,s=0,a=0;a<8;a++){s=0;for(var l=0;l<8;l++){var h=document.createElementNS("http://www.w3.org/2000/svg","rect");(a+l)%2==1?(h.setAttribute("height",i),h.setAttribute("width",i),h.setAttribute("y",r),h.setAttribute("x",s),h.setAttribute("fill","#85653E"),t.appendChild(h)):(h.setAttribute("height",i),h.setAttribute("width",i),h.setAttribute("y",r),h.setAttribute("x",s),h.setAttribute("fill","#EDCFA9"),t.appendChild(h)),s=Math.floor(i+s)}r=Math.floor(i+r)}r=0,s=0;for(var f=0;f<8;f++){s=0;for(var v=0;v<8;v++){if((f+v)%2==1)if(f<3){var d=document.createElementNS("http://www.w3.org/2000/svg","circle"),u=Math.floor(s+i/2),n=Math.floor(r+i/2),M=Math.floor(i/3);d.setAttribute("cy",n),d.setAttribute("cx",u),d.setAttribute("r",M),d.setAttribute("stroke-width",2),d.setAttribute("stroke","#3C3B3B"),d.setAttribute("fill","#565455"),d.classList.add("black"),t.appendChild(d);d=document.createElementNS("http://www.w3.org/2000/svg","circle");var R=Math.floor(i/5);d.setAttribute("cy",n),d.setAttribute("cx",u),d.setAttribute("r",R),d.setAttribute("stroke-width",2),d.setAttribute("stroke","#3C3B3B"),d.setAttribute("fill","none"),d.classList.add("black"),t.appendChild(d)}else if(f>4){d=document.createElementNS("http://www.w3.org/2000/svg","circle"),u=Math.floor(s+i/2),n=Math.floor(r+i/2),M=Math.floor(i/3);d.setAttribute("cy",n),d.setAttribute("cx",u),d.setAttribute("r",M),d.setAttribute("stroke-width",2),d.setAttribute("stroke","#F8FFEE"),d.setAttribute("fill","#D4E2CB"),d.classList.add("white"),t.appendChild(d);d=document.createElementNS("http://www.w3.org/2000/svg","circle"),R=Math.floor(i/5);d.setAttribute("cy",n),d.setAttribute("cx",u),d.setAttribute("r",R),d.setAttribute("stroke-width",2),d.setAttribute("stroke","#F8FFEE"),d.setAttribute("fill","none"),d.classList.add("white"),t.appendChild(d)}s=Math.floor(i+s)}r=Math.floor(i+r)}}();var validCoord=function(e,t){return 0<=e&&e<=8*sizeRect&&0<=t&&t<=8*sizeRect};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb3JkaW5hdGVzLmpzIiwibW92ZS5qcyIsIm90aGVyLmpzIiwiY3JlYXRlQ2hlY2tlcnMuanMiXSwibmFtZXMiOlsic29ydENvb3JkIiwiYXJyRGVsZXRlIiwiYXJyTW92ZSIsImFyckNvb3JkTW92ZSIsImFyckNvb3JkRGVsIiwiaW5kZXgiLCJ2YWxpZCIsImN4X2xlZnQiLCJjeCIsImN5X2xlZnQiLCJjeSIsImN4X3JpZ3RoIiwiY3lfcmlndGgiLCJjeF9taWRfcG90ZW50Iiwic2l6ZVJlY3QiLCJjeV9taWRfcG90ZW50IiwiY3hfbWlkX3JlYWwiLCJjeV9taWRfcmVhbCIsInZhbGlkUHVzaCIsIk1hdGgiLCJhYnMiLCJsZW5ndGgiLCJ2YWxpZENvb3JkTW92ZSIsInNsaWNlIiwidmFsaWRDb29yZERlbCIsInB1c2giLCJzcGxpY2UiLCJhZGRDb29yZERlbGV0ZSIsImRlbCIsImFkZENvb3JkTW92ZSIsIm1vdmUiLCJtb3ZlVG9wTGVmdCIsImNvbG9yRWxlbWVudCIsImFjdGl2ZUNpcmNsZSIsImFyciIsImNvbG9yVG9wTGVmdCIsImZsb29yIiwidmFsaWRDb29yZCIsImtpbmciLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNoZWNrTW92ZSIsInVuZGVmaW5lZCIsImNyZWF0ZUFjdGl2ZVJlY3QiLCJhZGQiLCJjeF9hZnRlciIsImN5X2FmdGVyIiwibW92ZVRvcFJpZ3RoIiwibW92ZUxvd0xlZnQiLCJjb2xvclRvcFJpZ3RoIiwibW92ZUxvd1JpZ3RoIiwiY29sb3JMb3dMZWZ0IiwiY29sb3JMb3dSaWdodCIsImFkZENsYXNzRGVsZXRlIiwiaSIsImNpcmNsZSIsImdldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJvYXJkIiwiY3JlYXRlRWxlbWVudE5TIiwid2luZG93SGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJhcHBlbmRDaGlsZCIsInNpemVCb2FyZCIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJ5IiwieCIsInJvdyIsImNvbCIsImJvYXJkUmVjdCIsInNldEF0dHJpYnV0ZSIsInJvdzEiLCJjb2wxIiwiYm9hcmRDaXJjbGUiLCJyIiwicl9zbWFsbCJdLCJtYXBwaW5ncyI6ImFBQ0EsU0FBU0EsVUFBVUMsRUFBV0MsRUFBU0MsRUFBY0MsRUFBYUMsRUFBT0MsR0FDeEUsSUFBSUMsRUFBVUwsRUFBUUcsR0FBT0csR0FDekJDLEVBQVVQLEVBQVFHLEdBQU9LLEdBRXpCQyxFQUFXVCxFQUFRRyxFQUFRLEdBQUdHLEdBQ2pDSSxFQUFXVixFQUFRRyxFQUFRLEdBQUdLLEdBRTNCRyxFQUFpQk4sRUFBVUksRUFBWSxFQUFJSixFQUFVTyxTQUFXSCxFQUFVRyxTQUMxRUMsRUFBaUJOLEVBQVVHLEVBQVksRUFBSUgsRUFBVUssU0FBV0YsRUFDaEVFLFNBRUFFLEVBQWNmLEVBQVVJLEdBQU9HLEdBQy9CUyxFQUFjaEIsRUFBVUksR0FBT0ssR0FFL0JRLEVBQWFYLEdBQVdJLEdBQWNGLEdBQVdHLEdBQ25ETyxLQUFLQyxJQUFJYixFQUFVSSxJQUFzQixFQUFURyxVQUNoQ0ssS0FBS0MsSUFBSVgsRUFBVUcsSUFBc0IsRUFBVEUsVUFDakNELEdBQWlCRyxHQUFlRCxHQUFpQkUsRUFFbEQsR0FBSUMsRUFFSCxHQURBWixHQUFRLEVBQ0pMLEVBQVVvQixPQUFTaEIsRUFBUSxHQUFLSixFQUFVb0IsT0FBUyxFQUN0RHJCLFVBQVVDLEVBQVdDLEVBQVNDLEVBQWNDLEVBQWFDLEVBQVEsR0FBRyxPQUM5RCxDQUNOLElBQUlpQixFQUFpQnBCLEVBQVFxQixNQUFNLEVBQUdsQixFQUFRLEdBQzFDbUIsRUFBZ0J2QixFQUFVc0IsTUFBTSxFQUFHbEIsRUFBUSxHQUUvQ0YsRUFBYXNCLEtBQUtILEdBQ2xCbEIsRUFBWXFCLEtBQUtELFFBRVosSUFBS04sRUFBVSxDQUNyQixHQUFJWixFQUFNLENBQ0xnQixFQUFpQnBCLEVBQVFxQixNQUFNLEVBQUdsQixFQUFRLEdB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LEVBQVlILGFBQWEsS0FBTXBFLEdBQy9CdUUsRUFBWUgsYUFBYSxJQUFLSyxHQUM5QkYsRUFBWUgsYUFBYSxlQUFnQixHQUN6Q0csRUFBWUgsYUFBYSxTQUFVLFdBQ25DRyxFQUFZSCxhQUFhLE9BQVEsUUFDakNHLEVBQVl4QyxVQUFVSyxJQUFJLFNBQzFCZ0IsRUFBTU0sWUFBWWEsR0FHNUJQLEVBQUlyRCxLQUFLaUIsTUFBTXRCLEVBQVcwRCxHQUUzQkQsRUFBSXBELEtBQUtpQixNQUFNdEIsRUFBV3lELElBN0c5QixHRFlELElBQUlsQyxXQUFhLFNBQUM3QixFQUFJRSxHQUN0QixPQUFTLEdBQUtGLEdBQU1BLEdBQWUsRUFBVE0sVUFDdkIsR0FBS0osR0FBTUEsR0FBZSxFQUFUSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHRcdFxyXG5mdW5jdGlvbiBzb3J0Q29vcmQoYXJyRGVsZXRlLCBhcnJNb3ZlLCBhcnJDb29yZE1vdmUsIGFyckNvb3JkRGVsLCBpbmRleCwgdmFsaWQpIHtcclxuXHR2YXIgY3hfbGVmdCA9IGFyck1vdmVbaW5kZXhdLmN4LFxyXG5cdCAgICBjeV9sZWZ0ID0gYXJyTW92ZVtpbmRleF0uY3k7XHJcblx0XHJcblx0dmFyIGN4X3JpZ3RoID0gYXJyTW92ZVtpbmRleCArIDFdLmN4LFxyXG5cdFx0Y3lfcmlndGggPSBhcnJNb3ZlW2luZGV4ICsgMV0uY3k7XHJcblx0XHJcblx0dmFyIGN4X21pZF9wb3RlbnQgPSAoY3hfbGVmdCAtIGN4X3JpZ3RoKSA+IDAgPyBjeF9sZWZ0IC0gc2l6ZVJlY3QgOiBjeF9yaWd0aCAtc2l6ZVJlY3QsXHJcblx0ICAgIGN5X21pZF9wb3RlbnQgPSAoY3lfbGVmdCAtIGN5X3JpZ3RoKSA+IDAgPyBjeV9sZWZ0IC0gc2l6ZVJlY3QgOiBjeV9yaWd0aCAtXHJcblx0ICAgIHNpemVSZWN0O1xyXG5cdFxyXG5cdHZhciBjeF9taWRfcmVhbCA9IGFyckRlbGV0ZVtpbmRleF0uY3gsXHJcblx0ICAgIGN5X21pZF9yZWFsID0gYXJyRGVsZXRlW2luZGV4XS5jeTtcclxuXHRcclxuXHR2YXIgdmFsaWRQdXNoID0gKGN4X2xlZnQgIT0gY3hfcmlndGgpICYmIChjeV9sZWZ0ICE9IGN5X3JpZ3RoKSAmJlxyXG5cdFx0KE1hdGguYWJzKGN4X2xlZnQgLSBjeF9yaWd0aCkgPT0gc2l6ZVJlY3QqMikgJiYgXHJcblx0XHQoTWF0aC5hYnMoY3lfbGVmdCAtIGN5X3JpZ3RoKSA9PSBzaXplUmVjdCoyKSAmJlxyXG5cdFx0Y3hfbWlkX3BvdGVudCA9PSBjeF9taWRfcmVhbCAmJiBjeV9taWRfcG90ZW50ID09IGN5X21pZF9yZWFsIDtcclxuXHRcclxuXHRpZiAodmFsaWRQdXNoKXtcclxuXHRcdHZhbGlkID0gdHJ1ZTtcclxuXHRcdGlmIChhcnJEZWxldGUubGVuZ3RoID4gaW5kZXggKyAxICYmIGFyckRlbGV0ZS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdHNvcnRDb29yZChhcnJEZWxldGUsIGFyck1vdmUsIGFyckNvb3JkTW92ZSwgYXJyQ29vcmREZWwsIGluZGV4ICsgMSwgdHJ1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgdmFsaWRDb29yZE1vdmUgPSBhcnJNb3ZlLnNsaWNlKDAsIGluZGV4ICsgMiksXHJcblx0XHRcdCAgICB2YWxpZENvb3JkRGVsID0gYXJyRGVsZXRlLnNsaWNlKDAsIGluZGV4ICsgMSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhcnJDb29yZE1vdmUucHVzaCh2YWxpZENvb3JkTW92ZSkgO1xyXG5cdFx0XHRhcnJDb29yZERlbC5wdXNoKHZhbGlkQ29vcmREZWwpO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSBpZiAoIXZhbGlkUHVzaCl7XHJcblx0XHRpZiAodmFsaWQpe1xyXG5cdFx0XHR2YXIgdmFsaWRDb29yZE1vdmUgPSBhcnJNb3ZlLnNsaWNlKDAsIGluZGV4ICsgMSksXHJcblx0XHRcdFx0dmFsaWRDb29yZERlbCA9IGFyckRlbGV0ZS5zbGljZSgwLCBpbmRleCk7XHJcblx0XHRcdFxyXG5cdFx0XHRhcnJDb29yZE1vdmUucHVzaCh2YWxpZENvb3JkTW92ZSkgO1xyXG5cdFx0XHRhcnJDb29yZERlbC5wdXNoKHZhbGlkQ29vcmREZWwpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRhcnJNb3ZlLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRhcnJEZWxldGUuc3BsaWNlKGluZGV4IC0gMSwgMSk7XHJcblx0XHRzb3J0Q29vcmQoYXJyRGVsZXRlLCBhcnJNb3ZlLCBhcnJDb29yZE1vdmUsIGFyckNvb3JkRGVsLCBpbmRleCAtIDEsIGZhbHNlKTtcclxuXHR9IFxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb29yZERlbGV0ZShjeCwgY3ksIGFyckRlbGV0ZSkge1xyXG5cdHZhciBkZWwgPSB7XHJcblx0XHRjeCxcclxuXHRcdGN5XHJcblx0fTtcclxuXHRhcnJEZWxldGUucHVzaChkZWwpO1xyXG5cdHJldHVybiBhcnJEZWxldGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvb3JkTW92ZShjeCwgY3ksIGFyck1vdmUpIHtcclxuXHR2YXIgbW92ZSA9IHtcclxuXHRcdGN4LFxyXG5cdFx0Y3lcclxuXHR9O1xyXG5cdGFyck1vdmUucHVzaChtb3ZlKTtcclxuXHRyZXR1cm4gYXJyTW92ZTtcclxufSIsIi8qXHJcbiAqIG1vdmUgXHJcbiAqL1xyXG5mdW5jdGlvbiBtb3ZlVG9wTGVmdChjeCwgY3ksIGNvbG9yRWxlbWVudCwgYWN0aXZlQ2lyY2xlLCBhcnIsIGNvbG9yVG9wTGVmdCl7XHJcblx0Y3ggID0gTWF0aC5mbG9vcihjeCAtIHNpemVSZWN0KSwgXHJcblx0Y3kgID0gTWF0aC5mbG9vcihjeSAtIHNpemVSZWN0KTtcclxuXHRpZiAoIXZhbGlkQ29vcmQoY3gsIGN5KSkgeyByZXR1cm4gfVxyXG5cdFxyXG5cdHZhciBraW5nID0gYWN0aXZlQ2lyY2xlLmNsYXNzTGlzdC5jb250YWlucyhcImtpbmdcIik7XHJcblx0dmFyIGZyZWUgPSAoY2hlY2tNb3ZlKGN4LCBjeSkgPT0gXCJmcmVlXCIgJiYgXHJcblx0XHRcdCAgIChraW5nIHx8IGNvbG9yRWxlbWVudCA9PSBcIndoaXRlXCIpKSAmJiBcclxuXHRcdFx0ICAgKGNvbG9yVG9wTGVmdCA9PSB1bmRlZmluZWQpO1xyXG5cdFxyXG5cdGlmIChmcmVlKSB7XHJcblx0XHR2YXIgcmVjdCA9IGNyZWF0ZUFjdGl2ZVJlY3QoY3gsIGN5LCBjb2xvckVsZW1lbnQpO1xyXG5cdCAgICAgICAgcmVjdC5jbGFzc0xpc3QuYWRkKFwiY2xlYXJVc3VhbFwiKTtcclxuXHRcdFxyXG5cdFx0aWYoa2luZyl7XHJcblx0XHRcdG1vdmVUb3BMZWZ0KGN4LGN5LGNvbG9yRWxlbWVudCxhY3RpdmVDaXJjbGUsYXJyLGNvbG9yVG9wTGVmdCk7XHJcblx0XHR9XHJcblx0fWVsc2UgaWYgKChjaGVja01vdmUoY3gsIGN5KSA9PSBcImJsYWNrXCIgJiYgY29sb3JFbGVtZW50ID09IFwid2hpdGVcIikgfHwgXHJcblx0XHRcdCAoY2hlY2tNb3ZlKGN4LCBjeSkgPT0gXCJ3aGl0ZVwiICYmIGNvbG9yRWxlbWVudCA9PSBcImJsYWNrXCIpKSB7XHJcblx0XHRcdCB2YXIgY3hfYWZ0ZXIgPSBNYXRoLmZsb29yKGN4IC0gc2l6ZVJlY3QpLFxyXG5cdFx0XHRcdCBjeV9hZnRlciA9IE1hdGguZmxvb3IoY3kgLSBzaXplUmVjdCk7XHJcblxyXG5cdFx0XHRpZigoY2hlY2tNb3ZlKGN4X2FmdGVyLCBjeV9hZnRlcikgPT0gXCJmcmVlXCIpKSAge1xyXG5cdFx0XHRcdGNvbG9yVG9wTGVmdCA9IHRydWU7XHJcblx0ICAgICAgIFx0XHRtb3ZlVG9wTGVmdChjeCxjeSxjb2xvckVsZW1lbnQsYWN0aXZlQ2lyY2xlLGFycixjb2xvclRvcExlZnQpO1xyXG5cdFx0XHR9XHRcclxuXHR9ZWxzZSBpZiAoY2hlY2tNb3ZlKGN4LCBjeSkgPT0gXCJmcmVlXCIgJiYgY29sb3JUb3BMZWZ0ICE9IHVuZGVmaW5lZCl7XHJcblx0XHRcdHZhciByZWN0ID0gY3JlYXRlQWN0aXZlUmVjdChjeCwgY3ksIGNvbG9yRWxlbWVudCk7XHJcbiAgICAgICAgXHRcdHJlY3QuY2xhc3NMaXN0LmFkZChcImNsZWFyUmVjdFVwcGVyXCIpO1xyXG4gICAgICAgIFx0XHJcbiAgICAgICAgXHR2YXIgY3hfYWZ0ZXIgPSBNYXRoLmZsb29yKGN4IC0gc2l6ZVJlY3QpLFxyXG5cdFx0XHRcdGN5X2FmdGVyID0gTWF0aC5mbG9vcihjeSAtIHNpemVSZWN0KTtcclxuXHRcdFx0aWYoY2hlY2tNb3ZlKGN4X2FmdGVyLCBjeV9hZnRlcikgIT0gXCJmcmVlXCIgfHwga2luZykge1xyXG5cdFx0XHRcdG1vdmVUb3BMZWZ0KGN4LGN5LGNvbG9yRWxlbWVudCxhY3RpdmVDaXJjbGUsYXJyLGNvbG9yVG9wTGVmdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0bW92ZVRvcFJpZ3RoKGN4LGN5LGNvbG9yRWxlbWVudCxhY3RpdmVDaXJjbGUsYXJyKTtcclxuXHRcdCAgICBtb3ZlTG93TGVmdChjeCxjeSxjb2xvckVsZW1lbnQsYWN0aXZlQ2lyY2xlLGFycik7XHJcblx0fVxyXG4gIFx0cmV0dXJuIGFycjtcclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZVRvcFJpZ3RoKGN4LGN5LGNvbG9yRWxlbWVudCxhY3RpdmVDaXJjbGUsYXJyLGNvbG9yVG9wUmlndGgpe1xyXG5cdGN4ICA9IE1hdGguZmxvb3IoY3ggKyBzaXplUmVjdCksIFxyXG5cdGN5ICAgID0gTWF0aC5mbG9vcihjeSAtIHNpemVSZWN0KTtcclxuXHRpZiAoIXZhbGlkQ29vcmQoY3gsIGN5KSkgeyByZXR1cm4gfVxyXG5cdFxyXG5cdHZhciBraW5nID0gYWN0aXZlQ2lyY2xlLmNsYXNzTGlzdC5jb250YWlucyhcImtpbmdcIik7XHJcblx0dmFyIGZyZWUgPSAoY2hlY2tNb3ZlKGN4LCBjeSkgPT0gXCJmcmVlXCIgJiYgXHJcblx0XHRcdCAgIChraW5nIHx8IGNvbG9yRWxlbWVudCA9PSBcIndoaXRlXCIpKSAmJiBcclxuXHRcdFx0ICAgKGNvbG9yVG9wUmlndGggPT0gdW5kZWZpbmVkKTtcclxuXHRcdFx0ICAgXHJcblx0aWYgKGZyZWUpIHtcclxuXHRcdHZhciByZWN0ID0gY3JlYXRlQWN0aXZlUmVjdChjeCwgY3ksIGNvbG9yRWxlbWVudCk7XHJcbiAgICAgICAgXHRyZWN0LmNsYXNzTGlzdC5hZGQoXCJjbGVhclVzdWFsXCIpO1xyXG4gICAgXHRcclxuXHRcdGlmKGtpbmcpe1xyXG5cdFx0XHRtb3ZlVG9wUmlndGgoY3gsY3ksY29sb3JFbGVtZW50LGFjdGl2ZUNpcmNsZSxhcnIsY29sb3JUb3BSaWd0aCk7XHJcblx0XHR9XHJcblx0fWVsc2UgaWYgKChjaGVja01vdmUoY3gsIGN5KSA9PSBcImJsYWNrXCIgJiYgY29sb3JFbGVtZW50ID09IFwid2hpdGVcIikgfHwgXHJcblx0XHRcdCAoY2hlY2tNb3ZlKGN4LGN5KSA9PSBcIndoaXRlXCIgJiYgY29sb3JFbGVtZW50ID09IFwiYmxhY2tcIikpe1xyXG5cdFx0XHR2YXIgY3hfYWZ0ZXIgPSBNYXRoLmZsb29yKGN4ICsgc2l6ZVJlY3QpLFxyXG5cdFx0XHRcdGN5X2FmdGVyID0gTWF0aC5mbG9vcihjeSAtIHNpemVSZWN0KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgoY2hlY2tNb3ZlKGN4X2FmdGVyLCBjeV9hZnRlcikgPT0gXCJmcmVlXCIpICYmXHJcblx0XHRcdFx0dmFsaWRDb29yZChjeF9hZnRlciwgY3lfYWZ0ZXIpKSB7XHJcblx0XHRcdFx0Y29sb3JUb3BSaWd0aCA9IHRydWU7XHJcblx0XHRcdCAgICBtb3ZlVG9wUmlndGgoY3gsY3ksY29sb3JFbGVtZW50LGFjdGl2ZUNpcmNsZSxhcnIsY29sb3JUb3BSaWd0aCk7XHJcblx0XHRcdH1cdFxyXG5cdH1lbHNlIGlmIChjaGVja01vdmUoY3gsIGN5KSA9PSBcImZyZWVcIiAmJiAoY29sb3JUb3BSaWd0aCAhPSB1bmRlZmluZWQpKSB7XHJcblx0XHRcdHZhciByZWN0ID0gY3JlYXRlQWN0aXZlUmVjdChjeCwgY3ksIGNvbG9yRWxlbWVudCk7XHJcblx0ICAgICAgIFx0XHRyZWN0LmNsYXNzTGlzdC5hZGQoXCJjbGVhclJlY3RVcHBlclwiKTtcclxuXHQgICAgICAgIHZhciBjeF9hZnRlciA9IE1hdGguZmxvb3IoY3ggKyBzaXplUmVjdCksXHJcblx0XHRcdFx0Y3lfYWZ0ZXIgPSBNYXRoLmZsb29yKGN5IC0gc2l6ZVJlY3QpO1xyXG5cdFx0XHRcdGlmIChjaGVja01vdmUoY3hfYWZ0ZXIsIGN5X2FmdGVyKSAhPSBcImZyZWVcIiB8fCBraW5nKSB7XHJcblx0XHRcdFx0XHRtb3ZlVG9wUmlndGgoY3gsY3ksY29sb3JFbGVtZW50LGFjdGl2ZUNpcmNsZSxhcnIsY29sb3JUb3BSaWd0aCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRtb3ZlVG9wTGVmdChjeCxjeSxjb2xvckVsZW1lbnQsYWN0aXZlQ2lyY2xlLGFycik7XHJcblx0XHRcdG1vdmVMb3dSaWd0aChjeCxjeSxjb2xvckVsZW1lbnQsYWN0aXZlQ2lyY2xlLGFycik7XHJcblx0fVxyXG4gICAgcmV0dXJuIGFycjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1vdmVMb3dMZWZ0KGN4LGN5LGNvbG9yRWxlbWVudCxhY3RpdmVDaXJjbGUsYXJyLGNvbG9yTG93TGVmdCl7XHJcblx0Y3ggID0gTWF0aC5mbG9vcihjeCAtIHNpemVSZWN0KSwgXHJcblx0Y3kgID0gTWF0aC5mbG9vcihjeSArIHNpemVSZWN0KTtcclxuXHRpZiAoIXZhbGlkQ29vcmQoY3gsIGN5KSkgeyByZXR1cm4gfVxyXG5cclxuXHR2YXIga2luZyA9IGFjdGl2ZUNpcmNsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJraW5nXCIpO1xyXG5cdHZhciBmcmVlID0gKGNoZWNrTW92ZShjeCwgY3kpID09IFwiZnJlZVwiICYmIFxyXG5cdFx0XHQgICAoa2luZyB8fCBjb2xvckVsZW1lbnQgPT0gXCJibGFja1wiKSkgJiYgXHJcblx0XHRcdCAgIChjb2xvckxvd0xlZnQgPT0gdW5kZWZpbmVkKTtcclxuXHRcdCAgIFxyXG5cdGlmIChmcmVlKSB7XHJcblx0XHR2YXIgcmVjdCA9IGNyZWF0ZUFjdGl2ZVJlY3QoY3gsIGN5LCBjb2xvckVsZW1lbnQpO1xyXG5cdCAgICAgICAgcmVjdC5jbGFzc0xpc3QuYWRkKFwiY2xlYXJVc3VhbFwiKTtcclxuXHRcdGlmKGtpbmcpe1xyXG5cdFx0XHRtb3ZlTG93TGVmdChjeCxjeSxjb2xvckVsZW1lbnQsYWN0aXZlQ2lyY2xlLGFycixjb2xvckxvd0xlZnQpO1xyXG5cdFx0fVxyXG5cdH1lbHNlIGlmICgoY2hlY2tNb3ZlKGN4LCBjeSkgPT0gXCJibGFja1wiICYmIGNvbG9yRWxlbWVudCA9PSBcIndoaXRlXCIpICB8fCBcclxuXHRcdFx0IChjaGVja01vdmUoY3gsY3kpID09IFwid2hpdGVcIiAmJiBjb2xvckVsZW1lbnQgPT0gXCJibGFja1wiKSl7XHJcblx0XHRcdHZhciBjeF9hZnRlciA9IE1hdGguZmxvb3IoY3ggLSBzaXplUmVjdCksXHJcblx0XHRcdFx0Y3lfYWZ0ZXIgPSBNYXRoLmZsb29yKGN5ICsgc2l6ZVJlY3QpO1xyXG5cdFx0XHRcdGlmKGNoZWNrTW92ZShjeF9hZnRlciwgY3lfYWZ0ZXIpID09IFwiZnJlZVwiKSB7XHJcblx0XHRcdFx0XHRjb2xvckxvd0xlZnQgPSB0cnVlO1xyXG5cdFx0ICAgICAgICBcdG1vdmVMb3dMZWZ0KGN4LGN5LGNvbG9yRWxlbWVudCxhY3RpdmVDaXJjbGUsYXJyLGNvbG9yTG93TGVmdCk7XHJcblx0XHRcdFx0fVx0XHJcblx0fWVsc2UgaWYgKGNoZWNrTW92ZShjeCwgY3kpID09IFwiZnJlZVwiICYmIChjb2xvckxvd0xlZnQgIT0gdW5kZWZpbmVkKSl7XHJcblx0XHRcdFx0dmFyIHJlY3QgPSBjcmVhdGVBY3RpdmVSZWN0KGN4LCBjeSwgY29sb3JFbGVtZW50KTtcclxuXHRcdFx0ICAgICAgICByZWN0LmNsYXNzTGlzdC5hZGQoXCJjbGVhclJlY3RVcHBlclwiKTtcclxuXHRcdFx0XHR2YXIgY3hfYWZ0ZXIgPSBNYXRoLmZsb29yKGN4IC0gc2l6ZVJlY3QpLFxyXG5cdFx0XHRcdFx0Y3lfYWZ0ZXIgPSBNYXRoLmZsb29yKGN5ICsgc2l6ZVJlY3QpO1xyXG5cdFx0XHRcdFx0aWYoY2hlY2tNb3ZlKGN4X2FmdGVyLCBjeV9hZnRlcikgIT0gXCJmcmVlXCIgfHwga2luZykge1xyXG5cdFx0XHRcdFx0XHRjb2xvckxvd0xlZnQgPSB0cnVlO1xyXG5cdFx0XHQgICAgICAgIFx0bW92ZUxvd0xlZnQoY3gsY3ksY29sb3JFbGVtZW50LGFjdGl2ZUNpcmNsZSxhcnIsY29sb3JMb3dMZWZ0KTtcclxuXHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdG1vdmVUb3BMZWZ0KGN4LGN5LGNvbG9yRWxlbWVudCxhY3RpdmVDaXJjbGUsYXJyKTtcclxuICAgICAgICBcdFx0bW92ZUxvd1JpZ3RoKGN4LGN5LGNvbG9yRWxlbWVudCxhY3RpdmVDaXJjbGUsYXJyKTtcclxuXHR9XHJcblx0cmV0dXJuIGFycjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1vdmVMb3dSaWd0aChjeCxjeSxjb2xvckVsZW1lbnQsYWN0aXZlQ2lyY2xlLGFycixjb2xvckxvd1JpZ2h0KXtcclxuXHRjeCAgPSBNYXRoLmZsb29yKGN4ICsgc2l6ZVJlY3QpLCBcclxuXHRjeSAgICA9IE1hdGguZmxvb3IoY3kgKyBzaXplUmVjdCk7XHJcblx0aWYgKCF2YWxpZENvb3JkKGN4LCBjeSkpIHsgcmV0dXJuIH1cclxuXHJcblx0dmFyIGtpbmcgPSBhY3RpdmVDaXJjbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwia2luZ1wiKTtcclxuXHR2YXIgZnJlZSA9IChjaGVja01vdmUoY3gsIGN5KSA9PSBcImZyZWVcIiAmJiBcclxuXHRcdFx0ICAgKGtpbmcgfHwgY29sb3JFbGVtZW50ID09IFwiYmxhY2tcIikpICYmIFxyXG5cdFx0XHQgICAoY29sb3JMb3dSaWdodCA9PSB1bmRlZmluZWQpO1xyXG5cdFx0ICAgXHJcblx0aWYgKGZyZWUpIHtcclxuXHRcdHZhciByZWN0ID0gY3JlYXRlQWN0aXZlUmVjdChjeCwgY3ksIGNvbG9yRWxlbWVudCk7XHJcbiAgICAgICAgXHRyZWN0LmNsYXNzTGlzdC5hZGQoXCJjbGVhclVzdWFsXCIpO1xyXG5cdFx0aWYgKGtpbmcpIHtcclxuXHRcdFx0bW92ZUxvd1JpZ3RoKGN4LGN5LGNvbG9yRWxlbWVudCxhY3RpdmVDaXJjbGUsYXJyLGNvbG9yTG93UmlnaHQpO1xyXG5cdFx0fVxyXG5cdH1lbHNlIGlmICgoY2hlY2tNb3ZlKGN4LCBjeSkgPT0gXCJibGFja1wiICYmIGNvbG9yRWxlbWVudCA9PSBcIndoaXRlXCIpIHx8IFxyXG5cdFx0XHQgKGNoZWNrTW92ZShjeCxjeSkgPT0gXCJ3aGl0ZVwiICYmIGNvbG9yRWxlbWVudCA9PSBcImJsYWNrXCIpKSB7XHJcblx0XHRcdHZhciBjeF9hZnRlciA9IE1hdGguZmxvb3IoY3ggKyBzaXplUmVjdCksXHJcblx0XHRcdFx0Y3lfYWZ0ZXIgPSBNYXRoLmZsb29yKGN5ICsgc2l6ZVJlY3QpO1xyXG5cclxuXHRcdFx0XHRpZiAoY2hlY2tNb3ZlKGN4X2FmdGVyLCBjeV9hZnRlcikgPT0gXCJmcmVlXCIpIHtcclxuXHRcdFx0XHRcdGNvbG9yTG93UmlnaHQgPSB0cnVlO1xyXG5cdFx0ICAgICAgICBcdG1vdmVMb3dSaWd0aChjeCxjeSxjb2xvckVsZW1lbnQsYWN0aXZlQ2lyY2xlLGFycixjb2xvckxvd1JpZ2h0KTtcclxuXHRcdFx0XHR9XHJcblx0fWVsc2UgaWYgKGNoZWNrTW92ZShjeCwgY3kpID09IFwiZnJlZVwiICYmIChjb2xvckxvd1JpZ2h0ICE9IHVuZGVmaW5lZCkpe1xyXG5cdFx0XHR2YXIgcmVjdCA9IGNyZWF0ZUFjdGl2ZVJlY3QoY3gsIGN5LCBjb2xvckVsZW1lbnQpO1xyXG5cdFx0ICAgICAgICByZWN0LmNsYXNzTGlzdC5hZGQoXCJjbGVhclJlY3RVcHBlclwiKTtcclxuICAgICAgICBcdHZhciBjeF9hZnRlciA9IE1hdGguZmxvb3IoY3ggKyBzaXplUmVjdCksXHJcblx0XHRcdFx0Y3lfYWZ0ZXIgPSBNYXRoLmZsb29yKGN5ICsgc2l6ZVJlY3QpO1xyXG5cdFx0XHRcdGlmKGNoZWNrTW92ZShjeF9hZnRlciwgY3lfYWZ0ZXIpICE9IFwiZnJlZVwiIHx8IGtpbmcpIHtcclxuXHRcdFx0XHRcdG1vdmVMb3dSaWd0aChjeCxjeSxjb2xvckVsZW1lbnQsYWN0aXZlQ2lyY2xlLGFycixjb2xvckxvd1JpZ2h0KTtcclxuXHRcdFx0XHR9XHJcblx0fVxyXG4gICAgcmV0dXJuIGFycjtcclxufSIsIi8qXHJcbiAqIGFkZCBjbGFzc1xyXG4gKi9cclxuZnVuY3Rpb24gYWRkQ2xhc3NEZWxldGUoY3gsIGN5KXtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNpcmNsZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGNpcmNsZVtpXS5nZXRBdHRyaWJ1dGUoXCJjeFwiKSA9PSBjeCAmJlxyXG5cdFx0XHRjaXJjbGVbaV0uZ2V0QXR0cmlidXRlKFwiY3lcIikgPT0gY3kpe1xyXG5cdFx0XHRjaXJjbGVbaV0uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKlxyXG4gKiBjaGVjayB2YWxpZCBjb29yZGluYXRlc1xyXG4gKi9cclxuIHZhciB2YWxpZENvb3JkID0gKGN4LCBjeSkgPT4ge1xyXG5cdHJldHVybiAoKDAgPD0gY3ggJiYgY3ggPD0gc2l6ZVJlY3QqOCkgJiYgXHJcblx0XHRcdCgwIDw9IGN5ICYmIGN5IDw9IHNpemVSZWN0KjgpKSA/IHRydWUgOiBmYWxzZVxyXG59IiwiLypcclxuICogY3JlYXRlIG9mIHRoZSBjaGVja2Vyc1xyXG4gKi9cclxuKCBmdW5jdGlvbiAoKXtcclxuIFx0dmFyICBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpLCBcclxuIFx0XHRib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpLFxyXG4gXHRcdHdpbmRvd0hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXHJcbiBcdFx0d2luZG93V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiBcdFx0XHJcbiBcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkKTtcclxuIFxyXG4gXHR2YXJcdHNpemVCb2FyZCA9IE1hdGguZmxvb3IoKHdpbmRvd0hlaWdodCAvIDEwMCkgKiA4MCk7XHJcbiBcdFx0Ym9hcmQuc3R5bGUuaGVpZ2h0ID0gc2l6ZUJvYXJkO1xyXG4gXHRcdGJvYXJkLnN0eWxlLndpZHRoID0gc2l6ZUJvYXJkO1xyXG4gXHRcdGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBzaXplQm9hcmQgKyBcInB4XCI7XHJcbiBcclxuIFx0dmFyIHNpemVSZWN0ID0gTWF0aC5mbG9vcihzaXplQm9hcmQgLzgpO1xyXG4gXHRpZiAoc2l6ZVJlY3QgJSAyKXtcclxuIFx0XHRzaXplUmVjdCsrO1xyXG4gXHR9XHJcbiBcclxuIFx0Ly9jcmVhdGUgYm9hcmRcclxuIFx0dmFyXHR5ID0gMCxcclxuIFx0XHR4ID0gMDtcclxuIFx0Zm9yKHZhciByb3cgPSAwOyByb3cgPCA4OyByb3crKyl7XHJcbiBcdFx0eCA9IDA7XHJcbiAgICAgXHRmb3IodmFyIGNvbCA9IDA7IGNvbCA8IDg7Y29sKyspe1xyXG4gICAgIFx0XHR2YXIgYm9hcmRSZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJyZWN0XCIpO1xyXG4gICAgIFx0XHRpZigoIHJvdyArIGNvbCApICUgMiA9PSAxICl7XHJcbiAgICAgXHRcdCAgICAgYm9hcmRSZWN0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBzaXplUmVjdCk7XHJcbiBcdFx0ICAgICAgICAgIGJvYXJkUmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBzaXplUmVjdCk7XHJcbiBcdFx0XHQgICAgIGJvYXJkUmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkpO1xyXG4gXHRcdCAgICAgICAgICBib2FyZFJlY3Quc2V0QXR0cmlidXRlKFwieFwiLCB4KTtcclxuIFx0XHQgICAgICAgICAgYm9hcmRSZWN0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjODU2NTNFXCIpO1xyXG4gXHRcdCAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChib2FyZFJlY3QpO1xyXG4gXHRcdCAgICB9IGVsc2Uge1xyXG4gICAgIFx0XHRcdGJvYXJkUmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgc2l6ZVJlY3QpO1xyXG4gXHRcdCAgICAgICAgICBib2FyZFJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgc2l6ZVJlY3QpO1xyXG4gXHRcdFx0XHRib2FyZFJlY3Quc2V0QXR0cmlidXRlKFwieVwiLCB5KTtcclxuIFx0XHQgICAgICAgICAgYm9hcmRSZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgeCk7XHJcbiBcdFx0ICAgICAgICAgIGJvYXJkUmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiI0VEQ0ZBOVwiKTtcclxuIFx0XHQgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRSZWN0KTtcclxuICAgICBcdFx0fVx0XHJcbiAgICAgXHRcdHggPSBNYXRoLmZsb29yKHNpemVSZWN0ICsgeCk7XHJcbiAgICAgXHR9XHJcbiAgICAgXHR5ID0gIE1hdGguZmxvb3Ioc2l6ZVJlY3QgKyB5KTtcclxuICAgICB9XHJcbiBcdFxyXG4gXHQvL2NyZWF0ZSBjaXJjbGVzXHJcbiBcdHZhclx0eSA9IDAsXHJcbiBcdFx0eCA9IDA7XHJcbiBcdGZvcih2YXIgcm93MSA9IDA7IHJvdzEgPCA4OyByb3cxKyspe1xyXG4gXHRcdHggPSAwO1xyXG4gICAgIFx0Zm9yKHZhciBjb2wxID0gMDsgY29sMSA8IDg7Y29sMSsrKSB7XHJcbiAgICAgXHRcdGlmKCggcm93MSArIGNvbDEgKSAlIDIgPT0gMSApIHtcclxuICAgICBcdFx0XHRpZigoIHJvdzEgPCAzICkpIHsgLy9jcmVhdGUgYmxhY2sgY2lyY2xlXHJcbiBcdFx0ICAgICAgICBcdCAgICAgdmFyIGJvYXJkQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIiksXHJcbiBcdFx0ICAgICAgICBcdFx0ICAgIGN4ID0gIE1hdGguZmxvb3IoeCArIHNpemVSZWN0LzIpLFxyXG4gXHRcdCAgICAgICAgXHRcdCAgICBjeSA9ICBNYXRoLmZsb29yKHkgKyBzaXplUmVjdC8yKSxcclxuIFx0XHQgICAgICAgIFx0XHQgICAgciAgPSBNYXRoLmZsb29yKHNpemVSZWN0LzMpO1xyXG4gXHRcdCAgICAgICAgXHRcdFxyXG4gXHRcdFx0XHRcdGJvYXJkQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsIGN5KTtcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBjeCk7XHJcbiBcdFx0ICAgICAgICBcdCAgICAgYm9hcmRDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCByKVxyXG4gXHRcdCAgICAgICAgXHQgICAgIGJvYXJkQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCAyKTtcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCIjM0MzQjNCXCIpO1xyXG4gXHRcdCAgICAgICAgXHQgICAgIGJvYXJkQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjNTY1NDU1XCIpO1xyXG4gXHRcdFx0XHRcdGJvYXJkQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJibGFja1wiKTtcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZC5hcHBlbmRDaGlsZChib2FyZENpcmNsZSk7XHJcbiBcdFx0ICAgICAgICBcdFxyXG4gXHRcdCAgICAgICAgXHQgICAgIHZhciBib2FyZENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2lyY2xlXCIpLFxyXG4gXHRcdCAgICAgICAgXHRcdCAgICByX3NtYWxsID0gTWF0aC5mbG9vcihzaXplUmVjdC81KTtcclxuIFx0XHQgICAgICAgIFx0XHJcbiBcdFx0ICAgICAgICBcdCAgICAgYm9hcmRDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgY3kpO1xyXG4gXHRcdCAgICAgICAgXHQgICAgIGJvYXJkQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIGN4KTtcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIHJfc21hbGwpO1xyXG4gXHRcdCAgICAgICAgXHQgICAgIGJvYXJkQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCAyKTtcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCIjM0MzQjNCXCIpO1xyXG4gXHRcdCAgICAgICAgXHQgICAgIGJvYXJkQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xyXG4gXHRcdCAgICAgICAgXHQgICAgIGJvYXJkQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJibGFja1wiKTtcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZC5hcHBlbmRDaGlsZChib2FyZENpcmNsZSk7XHJcbiBcclxuIFx0XHRcdFx0fWVsc2UgaWYgKChyb3cxID4gNCkpeyAvL2NyZWF0ZSB3aGl0ZSBjaXJjbGVcclxuIFx0XHQgICAgICAgIFx0ICAgICB2YXIgYm9hcmRDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImNpcmNsZVwiKSxcclxuIFx0ICAgICAgICBcdFx0XHQgICAgY3ggPSAgTWF0aC5mbG9vcih4ICsgc2l6ZVJlY3QvMiksXHJcbiBcdCAgICAgICAgXHRcdFx0ICAgIGN5ID0gIE1hdGguZmxvb3IoeSArIHNpemVSZWN0LzIpLFxyXG4gXHQgICAgICAgIFx0XHRcdCAgICByICA9IE1hdGguZmxvb3Ioc2l6ZVJlY3QvMyk7XHJcbiBcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBjeSk7XHJcbiBcdFx0ICAgICAgICBcdCAgICAgYm9hcmRDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgY3gpO1xyXG4gXHRcdCAgICAgICAgXHQgICAgIGJvYXJkQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgcilcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgMik7XHJcbiBcdFx0ICAgICAgICBcdCAgICAgYm9hcmRDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiI0Y4RkZFRVwiKTtcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiI0Q0RTJDQlwiKTtcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5jbGFzc0xpc3QuYWRkKFwid2hpdGVcIik7XHJcbiBcdFx0ICAgICAgICBcdCAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRDaXJjbGUpO1xyXG4gXHJcbiBcdFx0ICAgICAgICBcdCAgICAgdmFyIGJvYXJkQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIiksXHJcbiBcdFx0ICAgICAgICBcdFx0ICAgIHJfc21hbGwgPSBNYXRoLmZsb29yKHNpemVSZWN0LzUpO1xyXG4gXHRcdCAgICAgICAgXHRcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBjeSk7XHJcbiBcdFx0ICAgICAgICBcdCAgICAgYm9hcmRDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgY3gpO1xyXG4gXHRcdCAgICAgICAgXHQgICAgIGJvYXJkQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgcl9zbWFsbClcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgMik7XHJcbiBcdFx0ICAgICAgICBcdCAgICAgYm9hcmRDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiI0Y4RkZFRVwiKTtcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcclxuIFx0XHQgICAgICAgIFx0ICAgICBib2FyZENpcmNsZS5jbGFzc0xpc3QuYWRkKFwid2hpdGVcIik7XHJcbiBcdFx0ICAgICAgICBcdCAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRDaXJjbGUpO1xyXG4gXHRcdFx0XHR9XHJcbiAgICAgXHRcdH1cclxuICAgICBcdFx0eCA9IE1hdGguZmxvb3Ioc2l6ZVJlY3QgKyB4KTtcclxuICAgICBcdH1cclxuICAgICBcdHkgPSBNYXRoLmZsb29yKHNpemVSZWN0ICsgeSkgO1xyXG4gXHR9XHJcbiBcdC8vc3RhcnRHYW1lKGJvYXJkLCBzaXplUmVjdCwgc2l6ZUJvYXJkKTtcclxuIH0oKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
