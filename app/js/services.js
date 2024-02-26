'use strict';

/* Services */

var turfdataAdminServices = angular.module('turfdataAdminServices',
		[ 'ngResource' ]);

turfdataAdminServices.factory('TacheListService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/taches', {}, {
				query : {
					method : 'GET',
					isArray : true
				}
			})
		} ]);

turfdataAdminServices.factory('TacheEnregistrerService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/tacheenregistrer', {}, {
				update : {
					method : 'POST'
				}
			});
		} ]);

turfdataAdminServices.factory('LanceAnalyseService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/lanceanalyse', {}, {
				update : {
					method : 'POST'
				}
			});
		} ]);

turfdataAdminServices.factory('AcquitteErreurService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/acquitteerreur', {}, {
				update : {
					method : 'POST'
				}
			});
		} ]);

turfdataAdminServices.factory('TacheRemettreAttenteService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/tacheattente', {}, {
				update : {
					method : 'POST'
				}
			});
		} ]);

turfdataAdminServices.factory('TacheDeleteService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/tachedelete', {}, {
				update : {
					method : 'POST'
				}
			});
		} ]);

turfdataAdminServices.factory('CourseListService', [ '$resource',
		function($resource) {
			// return $resource('/turfdata/api/courses/:dateevt', {dateevt :
			// '@dateevt'}, {
			return $resource('/turfdata-admin/api/courses', {}, {
				query : {
					method : 'POST',
					isArray : true
				}
			})
		} ]);

turfdataAdminServices.factory('AuditService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/audit', {}, {
				query : {
					method : 'POST',
					isArray : true
				}
			})
		} ]);

turfdataAdminServices.factory('AnoCaptureService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/anocapture', {}, {
				query : {
					method : 'POST',
					isArray : true
				}
			})
		} ]);

turfdataAdminServices.factory('AnoCaptureDeleteService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/anocapturedelete', {}, {
				update : {
					method : 'POST'
				}
			})
		} ]);

turfdataAdminServices.factory('CourseDeleteService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/coursedelete', {}, {
				update : {
					method : 'POST'
				}
			});
		} ]);

turfdataAdminServices.factory('MetriqueListService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/metriques', {}, {
				query : {
					method : 'GET',
					isArray : true
				}
			})
		} ]);

turfdataAdminServices.factory('ChevalService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/cheval/:idcheval', {
				idcheval : '@idcheval'
			}, {
				query : {
					method : 'GET',
					isArray : false
				}
			})
		} ]);

turfdataAdminServices.factory('ChevalEnregistrerService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/chevalenregistrer', {}, {
				update : {
					method : 'POST'
				}
			});
		} ]);

turfdataAdminServices.factory('ChevalCorrigerService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/chevalcorriger', {}, {
				update : {
					method : 'POST'
				}
			});
		} ]);

turfdataAdminServices.factory('CourseResultatComplementService', [
		'$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/courseresultatcomplement',
					{}, {
						update : {
							method : 'POST'
						}
					});
		} ]);

turfdataAdminServices.factory('CamelRoutesService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/camelroutes', {}, {
				query : {
					method : 'GET',
					isArray : true
				}
			})
		} ]);

turfdataAdminServices.factory('CamelRouteStartService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/camelroutestart/:idroute', {
				idroute : '@idroute',
			}, {
				query : {
					method : 'GET',
					isArray : false
				}
			})
		} ]);

turfdataAdminServices.factory('CamelRouteStopService', [ '$resource',
		function($resource) {
			return $resource('/turfdata-admin/api/camelroutestop/:idroute', {
				idroute : '@idroute',
			}, {
				query : {
					method : 'GET',
					isArray : false
				}
			})
		} ]);
