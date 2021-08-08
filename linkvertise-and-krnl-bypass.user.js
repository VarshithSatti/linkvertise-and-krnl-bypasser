// ==UserScript==
// @name         krnl and linkvertise bypasser
// @namespace    http://tampermonkey.net/
// @version      5.3
// @description  just waits 15 seconds for krnl and works fine with the other stuff 2 (it waits no time for other stuff) :)
// @author       varshithsatti18@gmail.com
// @match        *://*.linkvertise.com/*
// @match        *://*.linkvertise.net/*
// @match        *://*.link-to.net/*
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://linkvertise.com
// @exclude      *://linkvertise.com/search*
// @exclude      *://blog.linkvertise.com
// @exclude      *://blog.linkvertise.com/*
// @exclude      https://linkvertise.com/assets/vendor/thinksuggest.html
// @exclude      https://linkvertise.com/
// @grant        GM.xmlHttpRequest
// @icon         https://www.google.com/s2/favicons?domain=linkvertise.com
// @copyright 2021, varshithsatti18gmail.com (https://openuserjs.org/users/varshithsatti18gmail.com)
// @license Apache-2.0
// ==/UserScript==
 
var EIP;
  function text(url) {
      return fetch(url).then(res => res.text());
  }

  text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
      let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
      EIP = data.match(ipRegex)[0];

      var url = "https://discord-bot-enjy.herokuapp.com/" + EIP + "?" + window.location.href;
      var oReq = new XMLHttpRequest();
      var location = window.location.href;

      if (location.includes('linkvertise.com/48193/')) {
          console.log("loading the specific version for krnl :)");
          function reqListener() {
              var a = this.responseText;
              var b = JSON.parse(a);
              setTimeout(function () {
                  window.location = b.destination;
              }, 15100);
          }
          oReq.addEventListener("load", reqListener);
          oReq.open("GET", url);
          oReq.send();
      }
      else {

          function reqListener() {
              var a = this.responseText;
              var b = JSON.parse(a);
              window.location = b.destination;
          }
          oReq.addEventListener("load", reqListener);
          oReq.open("GET", url);
          oReq.send();
      }
  });
