'use strict';

angular.module('adminConsole')

	// =========================================================================
	// MAINMENU COLLAPSE
	// =========================================================================
	.directive('toggleSidebar', function(){
		return {
			restrict: 'A',
			scope: {
				modelLeft: '=',
				modelRight: '='
			},

			link: function(scope, element, attr) {
				element.on('click', function(){
					if (element.data('target') === 'mainmenu') {
						if (scope.modelLeft === false) {
							scope.$apply(function(){
								scope.modelLeft = true;
							});
						} else {
							scope.$apply(function(){
								scope.modelLeft = false;
							});
						}
					}
				});
			}
		};
	})

	// =========================================================================
	// SUBMENU TOGGLE
	// =========================================================================

	.directive('toggleCategory', function(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.click(function(){
					element.parent().parent().find('button.selected').removeClass('selected');
					element.toggleClass('selected');
					element.parent().parent().parent().parent().find('div.iconosformulario').addClass('hidden');
					switch(element.attr('title')) {
						case "Monitoring Components":
							element.parent().parent().parent().parent().find('div#subCat1').removeClass('hidden');
							break;
						case "EBV":
							element.parent().parent().parent().parent().find('div#subCat2').removeClass('hidden');
							break;
						case "By Theme":
							element.parent().parent().parent().parent().find('div#subCat3').removeClass('hidden');
							break;
						case "By Kind":
							element.parent().parent().parent().parent().find('div#subCat4').removeClass('hidden');
							break;
						case "By Taxonomy":
							element.parent().parent().parent().parent().find('div#subCat5').removeClass('hidden');
							break;
					}
				});
			}
		};
	})

	// =========================================================================
	// CATEGORY TOGGLE
	// =========================================================================

	.directive('toggleSubmenu', function(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.click(function(){
					element.parent().toggleClass('toggled');
					element.parent().find('ul').stop(true, false).slideToggle(200);
				});
			}
		};
	})

	// =========================================================================
	// WAVES
	// =========================================================================

	// For .btn classes
	/*.directive('btn', function(){
		return {
			restrict: 'C',
			link: function(scope, element) {
				if(element.hasClass('btn-icon') || element.hasClass('btn-float')) {
					Waves.attach(element, ['waves-circle']);
				} else if(element.hasClass('btn-light')) {
					Waves.attach(element, ['waves-light']);
				} else {
					Waves.attach(element);
				}

				Waves.init();
			}
		}
	})*/;
