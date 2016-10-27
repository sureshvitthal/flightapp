'use strict';

/**
 * @ngdoc directive
 * @name iThoughtItwillWorksApp.directive:mainDom
 * @description
 * # mainDom
 */
angular.module('iThoughtItwillWorksApp')
  .directive('mainDom', function ($window) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          //element.text('this is the mainDom directive');

          /* ===========================
          Dropdown subnav
          ============================== */
          $(".js-dropdown").hover(function() {
              var subnav = $(this).find(".js-sub-nav");
              subnav.slideDown("fast");

          }, function() {
              var subnav = $(this).find(".js-sub-nav");
              subnav.slideUp("fast");
          }, 200);




          /* ===========================
          Datepicker & Timepicker
          https://github.com/amsul/pickadate.js
          ============================== */

          if( $('.js-datepicker').length > 0 ) {

              $( '.js-datepicker' ).pickadate({
                  monthPrev: '&larr;',
                  monthNext: '&rarr;',
                  weekdaysShort: [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
                  showMonthsFull: false,
                  close: false
              });

          }


          if( $('.js-timepicker').length > 0 ) {

              $( '.js-timepicker' ).pickatime({
                formatLabel: function(time) {
                  var hours = ( time.pick - this.get('now').pick ) / 60,
                    label = hours < 0 ? ' !hours to now' : hours > 0 ? ' !hours from now' : 'now'
                  return  'h:i a <sm!all>' + ( hours ? Math.abs(hours) : '' ) + label +'</sm!all>'
                }
              });

          }






          /* ===========================
          Select styling
          http://codepen.io/wallaceerick/pen/ctsCz
          ============================== */

          var IE7 = (navigator.userAgent.indexOf("MSIE 7")>=0) ? true : false;
          if(!IE7) {
              $('#js-form select').each(function(){
                  var $this = $(this), numberOfOptions = $(this).children('option').length;

                  $this.addClass('f-select-hidden');

                  $this.wrap('<div class="f-select"></div>');


                  $this.after('<div class="f-select-styled"></div>');

                  var $styledSelect = $this.next('div.f-select-styled');
                  $styledSelect.text($this.children('option').eq(0).text());

                  var $list = $('<ul />', {
                      'class': 'f-select-options'
                  }).insertAfter($styledSelect);

                  for (var i = 0; i < numberOfOptions; i++) {
                      $('<li />', {
                          text: $this.children('option').eq(i).text(),
                          rel: $this.children('option').eq(i).val()
                      }).appendTo($list);
                  }

                  var $listItems = $list.children('li');

                  $styledSelect.click(function(e) {
                      e.stopPropagation();
                      $('div.f-select-styled.active').each(function(){
                          $(this).removeClass('active').next('ul.f-select-options').hide();
                      });
                      $(this).toggleClass('active').next('ul.f-select-options').toggle();
                  });

                  $listItems.click(function(e) {
                      e.stopPropagation();
                      $styledSelect.text($(this).text()).removeClass('active');
                      $this.val($(this).attr('rel'));
                      $list.hide();
                  });

                  $(document).click(function() {
                      $styledSelect.removeClass('active');
                      $list.hide();
                  });

              });
          }



          // Checkbox and radio buttons styling

          $('input[type="checkbox"]').wrap('<div class="check-box"><i></i></div>');
          $.fn.toggleCheckbox = function () {
              this.attr('checked', !this.attr('checked'));
          }

          $('.check-box').on('click', function () {
              $(this).find(':checkbox').toggleCheckbox();
              $(this).toggleClass('checkedBox');
          });


          // If checkbox is checked
          $('.check-box').each(function() {

              if( $(this).find("input[type=checkbox]").is(":checked") ) {
                  $(this).addClass("checkedBox");
              }

          });





          /* ===========================
          Range slider
          http://jqueryui.com/slider/#range
          ============================== */

          // Price range slider
          if( $("#js-price-range").length > 0 ) {

              $( "#js-price-range" ).slider({
                range: true,
                min: 0,
                max: 10000,
                values: [ 800, 2000 ],
                slide: function( event, ui ) {
                  $( "#js-price-amount" ).val( "Rs." + ui.values[ 0 ] + " - Rs." + ui.values[ 1 ] );
                }
              });

              $( "#js-price-amount" ).val( "Rs." + $( "#js-price-range" ).slider( "values", 0 ) + " - Rs." + $( "#js-price-range" ).slider( "values", 1 ) );

          }



          /* ===========================
          Tabs
          ============================== */

          $(".js-tabs-item").on("click", function(e) {
              e.preventDefault();

              $(".js-tabs-content").css("display", "none");

              var tabId = $(this).attr("data-tab-id"),
                  tabContent = $("#" + tabId);

              $(".js-tabs-item").removeClass("active");
              $(this).addClass("active");

              tabContent.fadeIn();
              return false;
          });

          $(".js-tabs-item:first").trigger("click");






          /* ===========================
          Popups
          ============================== */

          // Show popup
          $(".js-show-popup").on("click", function(e) {

              e.preventDefault();

              var popupId = $(this).attr("data-popup-id"),
                  popup = $("#" + popupId);

              popup.fadeIn();
              $("#js-overlay").fadeIn();

              return false;
          });

          // Close popup
          $(".js-popup-close, #js-overlay").on("click", function(e) {

              e.preventDefault();
              $(".js-popup, #js-overlay").fadeOut();
              return false;
          });


        }
      }
  });
