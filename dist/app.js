"use strict";$(function(){$('a[href^="#"]').click(function(){var t=-$("header").height(),i=$(this).attr("href"),n=$("#"==i||""==i?"html":i).offset().top+t;return $("body,html").animate({scrollTop:n},400,"swing"),!1}),$(".js-modal-open").on("click",function(){return $(this).siblings().fadeIn(),!1}),$(".js-modal-close").on("click",function(){return $(".js-modal").fadeOut(),!1});var t=$(".js-switch-img-sub"),i=$("#js-switch-img-main");t.on("click",function(t){i.attr("src",$(this).attr("src"))})});