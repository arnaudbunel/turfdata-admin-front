'use strict';

/* Controllers */

var turfdataAdminControllers = angular.module('turfdataAdminControllers', []);

turfdataAdminControllers.controller('mainCtrl', [ '$rootScope', '$scope',
		function($rootScope, $scope) {

			$rootScope.dateOptions = {
				formatYear : 'yy',
				startingDay : 1
			};

			$rootScope.format = 'dd/MM/yyyy';

		} ]);

turfdataAdminControllers.controller('menuCtrl', [ '$rootScope', '$scope',
		function($rootScope, $scope) {
		} ]);

turfdataAdminControllers.controller('tacheListCtrl', [
		'$rootScope',
		'$scope',
		'TacheListService',
		'TacheRemettreAttenteService',
		'TacheDeleteService',
		'$interval',
		function($rootScope, $scope, TacheListService,
				TacheRemettreAttenteService, TacheDeleteService, $interval) {
			$scope.taches = TacheListService.query();

			$scope.autorefresh = false;
			$scope.enregistrer = function(flag) {
				$scope.autorefresh = flag;
			}

			$interval(function() {
				if ($scope.autorefresh) {
					$scope.taches = TacheListService.query();
				}
			}, 60000);

			$scope.remettreAttente = function(tache) {
				tache.etat = "ATTENTE";
				TacheRemettreAttenteService.update(tache);
			};

			$scope.supprimeTache = function(array, index, tache) {
				// if (confirm('êtes vous sûr de vouloir
				// supprimer cette tâche ?')) {
				array.splice(index, 1);
				TacheDeleteService.update(tache);
				// }
			}

		} ]);

turfdataAdminControllers.controller('tacheNouveauCtrl', [ '$rootScope',
		'$scope', 'TacheEnregistrerService', '$location',
		function($rootScope, $scope, TacheEnregistrerService, $location) {

			$scope.open = function($event) {
				$event.preventDefault();
				$event.stopPropagation();
				$scope.opened = true;
			};

			$scope.disabled = function(date, mode) {
				return false;
			};

			$scope.enregistrer = function(tache) {
				TacheEnregistrerService.update(tache);
				$location.path("/taches");
			};
		} ]);

turfdataAdminControllers.controller('auditCtrl', [ '$rootScope', '$scope',
		'AuditService', function($rootScope, $scope, AuditService) {
			$scope.open = function($event) {
				$event.preventDefault();
				$event.stopPropagation();
				$scope.opened = true;
			};

			$scope.disabled = function(date, mode) {
				return false;
			};

			$scope.rechercher = function(dateevt) {
				$scope.resultats = AuditService.query(dateevt);
			}
		} ]);

turfdataAdminControllers.controller('anoCaptureCtrl', [ '$rootScope', '$scope',
		'AnoCaptureService','AnoCaptureDeleteService', function($rootScope, $scope, AnoCaptureService, AnoCaptureDeleteService) {

			$scope.rechercher = function(type) {
				$scope.resultats = AnoCaptureService.query(type);
			};
			
			$scope.supprimeAno = function(array, index,
					anocapture) {
				array.splice(index, 1);
				AnoCaptureDeleteService.update(anocapture);
			};
		} ]);


turfdataAdminControllers
		.controller(
				'courseListCtrl',
				[
						'$rootScope',
						'$scope',
						'CourseListService',
						'CourseDeleteService',
						'LanceAnalyseService',
						'$uibModal','AcquitteErreurService',
						function($rootScope, $scope, CourseListService,
								CourseDeleteService, LanceAnalyseService,
								$uibModal,AcquitteErreurService) {

							$scope.open = function($event) {
								$event.preventDefault();
								$event.stopPropagation();
								$scope.opened = true;
							};

							$scope.disabled = function(date, mode) {
								return false;
							};

							$scope.rechercher = function(dateevt) {
								$scope.courses = CourseListService
										.query(dateevt);
							}

							$scope.supprimeCourse = function(array, index,
									course) {
								// if (confirm('êtes vous sûr de vouloir
								// supprimer cette tâche ?')) {
								array.splice(index, 1);
								CourseDeleteService.update(course);
								// }
							}

							$scope.lanceAnalyse = function(idcourse) {
								LanceAnalyseService.update(idcourse);
							}

							
							$scope.acqerreur = function(course) {
								AcquitteErreurService.update(course.id);
								course.erreuracq = true;
							}
							
							$scope.completerResultats = function(course) {
								var modalInstance = $uibModal
										.open({
											animation : true,
											templateUrl : '/app/views/modalCourseResultatsComplement.html',
											controller : 'courseResultatsComplementModalInstanceCtrl',
											resolve : {
												course : function() {
													return course;
												}
											}
										});
								modalInstance.result.then(function(courses) {
									$scope.courses = courses;
								});
							};

						} ]);

turfdataAdminControllers.controller(
		'courseResultatsComplementModalInstanceCtrl', [
				'$rootScope',
				'$scope',
				'CourseResultatComplementService',
				'$uibModalInstance',
				'course',
				'CourseListService',
				function($rootScope, $scope, CourseResultatComplementService,
						$uibModalInstance, course, CourseListService) {

					$scope.course = course;

					$scope.ok = function() {
						var resultatbrut = {
							idcourse : $scope.course.id,
							resultatsbrut : $scope.resultatsbrut
						};
						CourseResultatComplementService.update({},
								resultatbrut, function(cpreponse) {
									CourseListService.query({},
											$scope.course.datecourse, function(
													cpreponse) {
												if (cpreponse) {
													$uibModalInstance
															.close(cpreponse);
												}
											});
								});
					};

					$scope.cancel = function() {
						$uibModalInstance.dismiss('cancel');
					};

				} ]);

turfdataAdminControllers.controller('metriqueListCtrl', [ '$rootScope',
		'$scope', 'MetriqueListService',
		function($rootScope, $scope, MetriqueListService) {

			$scope.metriques = MetriqueListService.query();

		} ]);

turfdataAdminControllers.controller('chevalCtrl', [
		'$rootScope',
		'$scope',
		'ChevalService',
		'ChevalEnregistrerService',
		'ChevalCorrigerService',
		'$routeParams',
		function($rootScope, $scope, ChevalService, ChevalEnregistrerService,
				ChevalCorrigerService, $routeParams) {

			if ($routeParams && $routeParams.idcheval) {
				$scope.cheval = ChevalService.query({}, {
					'idcheval' : $routeParams.idcheval
				});
				$scope.recherche = false;
				$scope.resultat = true;
			} else {
				$scope.recherche = true;
				$scope.resultat = false;
			}

			$scope.rechercher = function(idcheval) {
				$scope.cheval = ChevalService.query({}, {
					'idcheval' : idcheval
				});
				$scope.recherche = false;
				$scope.resultat = true;
			}

			$scope.enregistrer = function(cheval) {
				ChevalEnregistrerService.update(cheval);
				$scope.recherche = true;
				$scope.resultat = false;
			};

			$scope.corriger = function(cheval) {
				ChevalCorrigerService.update(cheval);
				$scope.recherche = true;
				$scope.resultat = false;
			}

		} ]);

turfdataAdminControllers.controller('camelroutesCtrl', [
		'$rootScope',
		'$scope',
		'CamelRoutesService',
		'CamelRouteStartService',
		'CamelRouteStopService',
		function($rootScope, $scope, CamelRoutesService,
				CamelRouteStartService, CamelRouteStopService) {

			CamelRoutesService.query({}, function(camelroutes) {
				$scope.camelroutes = camelroutes;
			});

			$scope.startRoute = function(camelroute) {
				CamelRouteStartService.query({
					'idroute' : camelroute.idroute
				});
				camelroute.demarre = true;
			}

			$scope.stopRoute = function(camelroute) {
				CamelRouteStopService.query({
					'idroute' : camelroute.idroute
				});
				camelroute.demarre = false;
			}
		} ]);