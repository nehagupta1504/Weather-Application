(this["webpackJsonpwhether-application"]=this["webpackJsonpwhether-application"]||[]).push([[0],{14:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(7),n=s.n(i),r=s(4),j=s.n(r),d=s(8),l=s(2),o=(s(14),s(0)),h=function(e){var t=e.tempInfo,s=a.a.useState(""),i=Object(l.a)(s,2),n=i[0],r=i[1],j=t.temp,d=t.humidity,h=t.pressure,b=t.weatherMood,u=t.cityName,m=t.speed,x=t.country,p=t.sunset,O=new Date(1e3*p),w="".concat(O.getHours(),":").concat(O.getMinutes());return Object(c.useEffect)((function(){if(b)switch(b){case"Clouds":r("wi-day-cloudy");break;case"Haze":r("wi-fog");break;case"Clear":r("wi-day-Sunny");break;case"Mist":r("wi-dust");break;default:r("wi-day-Sunny")}}),[b]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("article",{className:"widget",children:[Object(o.jsx)("div",{className:"weatherIcon",children:Object(o.jsx)("i",{className:"wi ".concat(n)})}),Object(o.jsxs)("div",{className:"weatherInfo",children:[Object(o.jsx)("div",{className:"temperature",children:Object(o.jsxs)("span",{children:[j,"\xb0"]})}),Object(o.jsxs)("div",{className:"description",children:[Object(o.jsx)("div",{className:"weatherCondition",children:b}),Object(o.jsxs)("div",{className:"place",children:[u,", ",x]})]})]}),Object(o.jsx)("div",{className:"date",children:(new Date).toLocaleString()}),Object(o.jsxs)("div",{className:"extra-temp",children:[Object(o.jsxs)("div",{className:"temp-info-minmax",children:[Object(o.jsxs)("div",{className:"two-sided-section",children:[Object(o.jsx)("p",{children:Object(o.jsx)("i",{className:"wi wi-sunset"})}),Object(o.jsxs)("p",{className:"extra-info-leftside",children:[w," PM",Object(o.jsx)("br",{}),"Sunset"]})]}),Object(o.jsxs)("div",{className:"two-sided-section",children:[Object(o.jsx)("p",{children:Object(o.jsx)("i",{className:"wi wi-humidity"})}),Object(o.jsxs)("p",{className:"extra-info-leftside",children:[d," ",Object(o.jsx)("br",{}),"Humidity"]})]})]}),Object(o.jsxs)("div",{className:"weather-extra-info",children:[Object(o.jsxs)("div",{className:"two-sided-section",children:[Object(o.jsx)("p",{children:Object(o.jsx)("i",{className:"wi wi-rain"})}),Object(o.jsxs)("p",{className:"extra-info-leftside",children:[h,Object(o.jsx)("br",{}),"Pressure"]})]}),Object(o.jsxs)("div",{className:"two-sided-section",children:[Object(o.jsx)("p",{children:Object(o.jsx)("i",{className:"wi wi-strong-wind"})}),Object(o.jsxs)("p",{className:"extra-info-leftside",children:[m," ",Object(o.jsx)("br",{}),"Wind"]})]})]})]})]})})};s(5).config();var b=function(){var e=Object(c.useState)("Gwalior"),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)({}),n=Object(l.a)(i,2),r=n[0],b=n[1],u=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c,a,i,n,r,d,l,o,h,u,m,x;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="http://api.openweathermap.org/data/2.5/weather?q=".concat(s,"&units=metric&appid=935847ca520235df50f05ab2271da871"),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,i=a.main,n=i.temp,r=i.humidity,d=i.pressure,l=a.weather[0].main,o=a.name,h=a.wind.speed,u=a.sys,m=u.country,x=u.sunset,b({temp:n,humidity:r,pressure:d,weatherMood:l,cityName:o,speed:h,country:m,sunset:x}),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),alert("No city with ".concat(s," name exists")),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"wrap",children:Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("input",{type:"search",placeholder:"Search City...",autoFocus:!0,id:"search",className:"searchTerm",value:s,onChange:function(e){a(e.target.value)}}),Object(o.jsx)("button",{className:"searchButton",type:"button",onClick:u,children:"Search"})]})}),Object(o.jsx)(h,{tempInfo:r})]})};s(5).config();var u=function(){return Object(o.jsx)(b,{})};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.81bdd579.chunk.js.map