(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+EIX":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/services/response-handler/authentication-response-handler.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthenticationResponseHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationResponseHandler", function() { return AuthenticationResponseHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_mgmt_store_actions_user_mgmt_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user-mgmt/store/actions/user-mgmt.actions */ "SHFq");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




class AuthenticationResponseHandler {
    constructor(store) {
        this.store = store;
    }
    handleSuccess(authenticatedUser) {
        this.store.dispatch(new _user_mgmt_store_actions_user_mgmt_actions__WEBPACK_IMPORTED_MODULE_1__["LoginSuccess"](authenticatedUser));
    }
    handleFailure(errorResponse) {
        this.store.dispatch(new _user_mgmt_store_actions_user_mgmt_actions__WEBPACK_IMPORTED_MODULE_1__["LoginError"](errorResponse));
    }
}
AuthenticationResponseHandler.ɵfac = function AuthenticationResponseHandler_Factory(t) { return new (t || AuthenticationResponseHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AuthenticationResponseHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationResponseHandler, factory: AuthenticationResponseHandler.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationResponseHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "/QR6":
/*!*****************************************************************************!*\
  !*** ./src/app/meal-planner/recipes/recipe-start/recipe-start.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/recipe.service */ "tseV");



class RecipeStartComponent {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    ngOnInit() { }
}
RecipeStartComponent.ɵfac = function RecipeStartComponent_Factory(t) { return new (t || RecipeStartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"])); };
RecipeStartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeStartComponent, selectors: [["app-recipe-start"]], decls: 2, vars: 0, template: function RecipeStartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select a recipe to view details here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9yZWNpcGVzL3JlY2lwZS1zdGFydC9yZWNpcGUtc3RhcnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeStartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-start',
                templateUrl: './recipe-start.component.html',
                styleUrls: ['./recipe-start.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "/oiL":
/*!************************************************************************!*\
  !*** ./src/app/meal-planner/recipes/store/reducers/recipes.reducer.ts ***!
  \************************************************************************/
/*! exports provided: recipesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipesReducer", function() { return recipesReducer; });
/* harmony import */ var src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/http-request-status.enum */ "zl8S");
/* harmony import */ var _actions_recipes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/recipes.actions */ "nDj3");


const defaultRecipes = {
    recipes: null,
    error: null,
    requestStatus: src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].NO_ACTION
};
function recipesReducer(state = defaultRecipes, action) {
    switch (action.type) {
        case _actions_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_RECIPES_SUCCESS"]:
            return Object.assign(Object.assign({}, state), { recipes: action.payload, error: null, requestStatus: src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].RESPONSE_RECEIVED });
        case _actions_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_RECIPES_FAIL"]:
            return Object.assign(Object.assign({}, state), { recipes: null, error: action.payload, requestStatus: src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].RESPONSE_RECEIVED });
        case _actions_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_REQUEST_STATUS"]:
            return Object.assign(Object.assign({}, state), { requestStatus: action.payload });
        case _actions_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_RECIPES"]:
            return defaultRecipes;
        default: return state;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\narmitha Rajesh\mealoptimizer_angular_ui\mealoptimizerui\src\main.ts */"zUnb");


/***/ }),

/***/ "14A0":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/optimized-meal-plan/optimized-results-table/order-info/order-info.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: OrderInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInfoComponent", function() { return OrderInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function OrderInfoComponent_div_0_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meal_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r2);
} }
function OrderInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You chose");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrderInfoComponent_div_0_li_9_Template, 2, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.orderInfo.dietType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, ctx_r0.orderInfo.deliveryDate, "fullDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.orderInfo.mealSelected);
} }
/*
 * This tab displays the user inputs (diet type / delivery date / meals selected)
 */
class OrderInfoComponent {
    constructor(store) {
        this.store = store;
        this.orderInfo = { dietType: null, deliveryDate: null, mealSelected: null };
    }
    ngOnInit() {
        this.store.select('userPreferences').subscribe((userPrefs) => {
            this.orderInfo.dietType = userPrefs.dietType;
            this.orderInfo.deliveryDate = userPrefs.deliveryDate;
            this.orderInfo.mealSelected = userPrefs.mealSelected;
        });
    }
    ngOnDestroy() { }
}
OrderInfoComponent.ɵfac = function OrderInfoComponent_Factory(t) { return new (t || OrderInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
OrderInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderInfoComponent, selectors: [["app-order-info"]], decls: 1, vars: 1, consts: [["class", "ml-5 mt-2", 4, "ngIf"], [1, "ml-5", "mt-2"], [1, "list-unstyled"], [1, "mt-2", "ml-2"], ["class", "mt-2 ml-2", 4, "ngFor", "ngForOf"]], template: function OrderInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderInfoComponent_div_0_Template, 10, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderInfo !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9tZWFsLW9wdGltaXplci9vcHRpbWl6ZWQtbWVhbC1wbGFuL29wdGltaXplZC1yZXN1bHRzLXRhYmxlL29yZGVyLWluZm8vb3JkZXItaW5mby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-info',
                templateUrl: './order-info.component.html',
                styleUrls: ['./order-info.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "14M6":
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/response-handler/order-response-handler.ts ***!
  \****************************************************************************/
/*! exports provided: OrderResponseHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderResponseHandler", function() { return OrderResponseHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _meal_planner_meal_optimizer_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../meal-planner/meal-optimizer/store/actions/order.actions */ "T1QP");




class OrderResponseHandler {
    constructor() { }
    //action can be create/update    
    handleSuccess(optimizedMealPlans) {
        return new _meal_planner_meal_optimizer_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_2__["SaveOrderSuccess"](optimizedMealPlans);
    }
    handleFailure(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _meal_planner_meal_optimizer_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_2__["SaveOrderFail"](errorResponse));
    }
}
OrderResponseHandler.ɵfac = function OrderResponseHandler_Factory(t) { return new (t || OrderResponseHandler)(); };
OrderResponseHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderResponseHandler, factory: OrderResponseHandler.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderResponseHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1GjV":
/*!************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/online-order/online-order.component.ts ***!
  \************************************************************************************/
/*! exports provided: OnlineOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineOrderComponent", function() { return OnlineOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




/* This component displays delivery information such as address, first name
 * and last name based on the authenticatedUser.
 */
class OnlineOrderComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.select('authenticatedUser').subscribe((authenticatedUser) => {
            this.authenticatedUser = authenticatedUser;
        });
    }
}
OnlineOrderComponent.ɵfac = function OnlineOrderComponent_Factory(t) { return new (t || OnlineOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
OnlineOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnlineOrderComponent, selectors: [["app-online-order"]], decls: 19, vars: 3, consts: [["for", "fname"], ["type", "text", "id", "fname", "name", "fname", 3, "value"], ["for", "lname"], ["type", "text", "id", "lname", "name", "lname", 3, "value"], ["for", "address"], ["type", "text", "id", "address", "name", "address", 3, "value"], ["type", "submit", "value", "Place Order"]], template: function OnlineOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.authenticatedUser.user.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.authenticatedUser.user.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.authenticatedUser.user.address);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9tZWFsLW9wdGltaXplci9vbmxpbmUtb3JkZXIvb25saW5lLW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlineOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-online-order',
                templateUrl: './online-order.component.html',
                styleUrls: ['./online-order.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "2fHZ":
/*!***************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/store/actions/user-preferences.actions.ts ***!
  \***************************************************************************************/
/*! exports provided: EDIT_DIET_TYPE, EDIT_DELIVERY_DATE, UPDATE_MEAL, OPTIMIZATION_TYPE_SELECTED, CLEAR_USER_PREFERENCES, EditDietType, EditDeliveryDate, UpdateMeal, OptimizationTypeSelected, ClearUserPreferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_DIET_TYPE", function() { return EDIT_DIET_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_DELIVERY_DATE", function() { return EDIT_DELIVERY_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MEAL", function() { return UPDATE_MEAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIMIZATION_TYPE_SELECTED", function() { return OPTIMIZATION_TYPE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_USER_PREFERENCES", function() { return CLEAR_USER_PREFERENCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDietType", function() { return EditDietType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDeliveryDate", function() { return EditDeliveryDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMeal", function() { return UpdateMeal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizationTypeSelected", function() { return OptimizationTypeSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearUserPreferences", function() { return ClearUserPreferences; });
const EDIT_DIET_TYPE = '[User preferences] EDIT_DIET_TYPE';
const EDIT_DELIVERY_DATE = '[User preferences] EDIT_DELIVERY_DATE';
const UPDATE_MEAL = '[User preferences] UPDATE_MEAL';
const OPTIMIZATION_TYPE_SELECTED = '[User preferences] OPTIMIZATION_TYPE_SELECTED';
const CLEAR_USER_PREFERENCES = '[User preferences] CLEAR_USER_PREFERENCES';
class EditDietType {
    constructor(payload) {
        this.payload = payload;
        this.type = EDIT_DIET_TYPE;
    }
}
class EditDeliveryDate {
    constructor(payload) {
        this.payload = payload;
        this.type = EDIT_DELIVERY_DATE;
    }
}
class UpdateMeal {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_MEAL;
    } //Payload refers to name of item to be added to meal list
}
class OptimizationTypeSelected {
    constructor(payload) {
        this.payload = payload;
        this.type = OPTIMIZATION_TYPE_SELECTED;
    }
}
class ClearUserPreferences {
    constructor() {
        this.type = CLEAR_USER_PREFERENCES;
    }
}


/***/ }),

/***/ "2nfZ":
/*!**************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/meal-selector/meal-selector.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MealSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealSelectorComponent", function() { return MealSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _meal_options_meal_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meal-options/meal-options.component */ "pUQQ");
/* harmony import */ var _manage_meal_plan_manage_meal_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-meal-plan/manage-meal-plan.component */ "tYWA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








/* This component is a holder for menu received from the backend.
 */
class MealSelectorComponent {
    constructor(store, breakpointObserver, renderer, el) {
        this.store = store;
        this.breakpointObserver = breakpointObserver;
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.store.select('userPreferences').subscribe((userPrefs) => {
            this.dateOfDelivery = userPrefs.deliveryDate;
            this.mealsSelected = userPrefs.mealSelected;
        });
        //Track the size of the window and pivot row -> column accordingly.
        //Note that angular cdk screen sizes(small, medium, large etc.) are different from bootstrap sizes.
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge
        ]).subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]) {
                this.resetSelectorLayout('column');
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small]) {
                this.resetSelectorLayout('column');
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]) {
                this.resetSelectorLayout('row');
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large]) {
                this.resetSelectorLayout('row');
            }
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]) {
                this.resetSelectorLayout('row');
            }
        });
    }
    //Function to pivot row -> column using JQuery selector and css classes.
    resetSelectorLayout(layout) {
        let tableBody = this.el.nativeElement.querySelector("div table tbody");
        let tableRows = this.el.nativeElement.querySelectorAll("div table tbody tr");
        let tableElements = this.el.nativeElement.querySelectorAll("div table tbody td");
        switch (layout) {
            case 'row':
                this.renderer.removeClass(tableBody, 'flex_container_column');
                tableRows.forEach((row) => this.renderer.removeClass(row, 'flex_container_row'));
                tableElements.forEach((element) => this.renderer.removeClass(element, 'w-50'));
                this.renderer.addClass(tableBody, 'flex_container_row');
                tableRows.forEach((row) => this.renderer.addClass(row, 'flex_container_column'));
                tableElements.forEach((element) => this.renderer.addClass(element, 'w-100'));
                break;
            case 'column':
                this.renderer.removeClass(tableBody, 'flex_container_row');
                tableRows.forEach((row) => this.renderer.removeClass(row, 'flex_container_column'));
                tableElements.forEach((element) => this.renderer.removeClass(element, 'w-100'));
                this.renderer.addClass(tableBody, 'flex_container_column');
                tableRows.forEach((row) => this.renderer.addClass(row, 'flex_container_row'));
                tableElements.forEach((element) => this.renderer.addClass(element, 'w-50'));
                break;
        }
    }
}
MealSelectorComponent.ɵfac = function MealSelectorComponent_Factory(t) { return new (t || MealSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MealSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealSelectorComponent, selectors: [["app-meal-selector"]], decls: 36, vars: 7, consts: [[1, "row", "justify-content-start", "py-4"], [1, "table", "table-borderless", "ml-3"], [1, "col-xs-12", "col-1", "date-of-delivery", "m-0", "p-0"], [1, "col-1", "custom-col-width", "m-0", "p-0"], [3, "indexOfMeal"], [1, "ml-3"]], template: function MealSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Step 3: Select meals - Choose wisely");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Meal 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-meal-options", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Meal 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-meal-options", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Meal 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-meal-options", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Meal 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-meal-options", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-manage-meal-plan", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.dateOfDelivery));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indexOfMeal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indexOfMeal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indexOfMeal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indexOfMeal", 3);
    } }, directives: [_meal_options_meal_options_component__WEBPACK_IMPORTED_MODULE_3__["MealOptionsComponent"], _manage_meal_plan_manage_meal_plan_component__WEBPACK_IMPORTED_MODULE_4__["ManageMealPlanComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".flex_container_row[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction : row;\r\n}\r\n\r\n.flex_container_column[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction : column;\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n\t.custom-col-width[_ngcontent-%COMP%] {\r\n\t\twidth: 22%;\r\n\t\tflex: 0 0 22%;\r\n\t\tmax-width: 22%;\r\n\t}\r\n\t.date-of-delivery[_ngcontent-%COMP%] {\r\n\t\twidth: 12%;\r\n\t\tflex: 0 0 12%;\r\n\t\tmax-width: 12%;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 959px) {\r\n\t.custom-col-width[_ngcontent-%COMP%] {\r\n\t\twidth: 90%;\r\n\t\tflex: 0 0 90%;\r\n\t\tmax-width: 90%;\r\n\t}\r\n\t.date-of-delivery[_ngcontent-%COMP%] {\r\n\t\twidth: 90%;\r\n\t\tflex: 0 0 90%;\r\n\t\tmax-width: 90%;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbC1wbGFubmVyL21lYWwtb3B0aW1pemVyL21lYWwtc2VsZWN0b3IvbWVhbC1zZWxlY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7O0FBQ0E7Q0FDQztFQUNDLFVBQVU7RUFDVixhQUFhO0VBQ2IsY0FBYztDQUNmO0NBQ0E7RUFDQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7Q0FDZjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7Q0FDZjtDQUNBO0VBQ0MsVUFBVTtFQUNWLGFBQWE7RUFDYixjQUFjO0NBQ2Y7QUFDRCIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9tZWFsLW9wdGltaXplci9tZWFsLXNlbGVjdG9yL21lYWwtc2VsZWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4X2NvbnRhaW5lcl9yb3cge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb24gOiByb3c7XHJcbn1cclxuXHJcbi5mbGV4X2NvbnRhaW5lcl9jb2x1bW4ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG5cdC5jdXN0b20tY29sLXdpZHRoIHtcclxuXHRcdHdpZHRoOiAyMiU7XHJcblx0XHRmbGV4OiAwIDAgMjIlO1xyXG5cdFx0bWF4LXdpZHRoOiAyMiU7XHJcblx0fVxyXG5cdC5kYXRlLW9mLWRlbGl2ZXJ5IHtcclxuXHRcdHdpZHRoOiAxMiU7XHJcblx0XHRmbGV4OiAwIDAgMTIlO1xyXG5cdFx0bWF4LXdpZHRoOiAxMiU7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcblx0LmN1c3RvbS1jb2wtd2lkdGgge1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHRcdGZsZXg6IDAgMCA5MCU7XHJcblx0XHRtYXgtd2lkdGg6IDkwJTtcclxuXHR9XHJcblx0LmRhdGUtb2YtZGVsaXZlcnkge1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHRcdGZsZXg6IDAgMCA5MCU7XHJcblx0XHRtYXgtd2lkdGg6IDkwJTtcclxuXHR9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meal-selector',
                templateUrl: './meal-selector.component.html',
                styleUrls: ['./meal-selector.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "34V7":
/*!***********************************************************************!*\
  !*** ./src/app/meal-planner/shopping-list/shopping-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/shopping-list.actions */ "cyko");
/* harmony import */ var src_app_shared_shopping_list_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shopping-list-mode.enum */ "vyhQ");
/* harmony import */ var _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user-mgmt/store/actions/user-display-preferences.actions */ "dZCj");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ "6Ael");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ShoppingListComponent_button_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r4);
} }
function ShoppingListComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingListComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onEditItem(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShoppingListComponent_button_9_span_2_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shoppingItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", shoppingItem_r1.name, " (", shoppingItem_r1.amount, ") ", shoppingItem_r1.measure, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", shoppingItem_r1.labels);
} }
class ShoppingListComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.select('shoppingList').subscribe((shoppingItems) => {
            this.shoppingItems = shoppingItems.shoppingItems;
        });
    }
    onEditItem(index) {
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["StartEdit"](index));
        this.store.dispatch(new _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateShoppingListMode"](src_app_shared_shopping_list_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ShoppingListMode"].UPDATE));
    }
    ngOnDestroy() { }
}
ShoppingListComponent.ɵfac = function ShoppingListComponent_Factory(t) { return new (t || ShoppingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
ShoppingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingListComponent, selectors: [["app-shopping-list"]], decls: 10, vars: 1, consts: [[1, "row", "mt-4", "ml-1"], [1, "col-md-11"], [1, "py-4"], [1, "row", "justify-content-start", "ml-5"], [1, "w-100"], [1, "list-group", "col-xl-5", "col-lg-7", "col-md-8", "col-sm-10"], ["class", "list-group-item", "style", "cursor: pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 2, "cursor", "pointer", 3, "click"], ["class", "badge badge-secondary float-right", 4, "ngFor", "ngForOf"], [1, "badge", "badge-secondary", "float-right"]], template: function ShoppingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-shopping-edit", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShoppingListComponent_button_9_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shoppingItems);
    } }, directives: [_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingEditComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-list',
                templateUrl: './shopping-list.component.html',
                styleUrls: ['./shopping-list.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "36AY":
/*!************************************!*\
  !*** ./src/app/shared/app.init.ts ***!
  \************************************/
/*! exports provided: initializeKeycloak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeKeycloak", function() { return initializeKeycloak; });
function initializeKeycloak(keycloak) {
    return () => keycloak.init({
        config: {
            url: 'http://www.myclaypot-iam.xyz:8080/auth',
            realm: 'mealplanner',
            clientId: 'meal-planner-app-client'
        },
        loadUserProfileAtStartUp: true
    });
}


/***/ }),

/***/ "3dq+":
/*!***********************************************!*\
  !*** ./src/app/store/reducers/app.reducer.ts ***!
  \***********************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _meal_planner_meal_optimizer_store_reducers_user_preferences_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../meal-planner/meal-optimizer/store/reducers/user-preferences.reducer */ "LaBC");
/* harmony import */ var _meal_planner_meal_optimizer_store_reducers_menu_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../meal-planner/meal-optimizer/store/reducers/menu.reducer */ "awJM");
/* harmony import */ var _user_mgmt_store_reducers_user_mgmt_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user-mgmt/store/reducers/user-mgmt.reducer */ "jRjh");
/* harmony import */ var _user_mgmt_store_reducers_user_display_preferences_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user-mgmt/store/reducers/user-display-preferences.reducer */ "fVwP");
/* harmony import */ var _meal_planner_meal_optimizer_store_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../meal-planner/meal-optimizer/store/reducers/order.reducer */ "Go0q");
/* harmony import */ var _meal_planner_recipes_store_reducers_recipes_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../meal-planner/recipes/store/reducers/recipes.reducer */ "/oiL");
/* harmony import */ var _meal_planner_shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../meal-planner/shopping-list/store/shopping-list.reducer */ "FUYM");







const appReducer = {
    userPreferences: _meal_planner_meal_optimizer_store_reducers_user_preferences_reducer__WEBPACK_IMPORTED_MODULE_0__["userPreferencesReducer"],
    menu: _meal_planner_meal_optimizer_store_reducers_menu_reducer__WEBPACK_IMPORTED_MODULE_1__["menuReducer"],
    authenticatedUser: _user_mgmt_store_reducers_user_mgmt_reducer__WEBPACK_IMPORTED_MODULE_2__["userMgmtReducer"],
    userDisplayPreferences: _user_mgmt_store_reducers_user_display_preferences_reducer__WEBPACK_IMPORTED_MODULE_3__["userDisplayPreferencesReducer"],
    optimizedPlans: _meal_planner_meal_optimizer_store_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_4__["orderReducer"],
    recipes: _meal_planner_recipes_store_reducers_recipes_reducer__WEBPACK_IMPORTED_MODULE_5__["recipesReducer"],
    shoppingList: _meal_planner_shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_6__["shoppingListReducer"]
};


/***/ }),

/***/ "5ITx":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/services/interceptor/connection-status-interceptor.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ConnectionStatusInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionStatusInterceptor", function() { return ConnectionStatusInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _connection_status_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connection-status-handler.service */ "QAkm");
/* harmony import */ var _indexeddb_indexed_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../indexeddb/indexed-db.service */ "Z0I1");




class ConnectionStatusInterceptor {
    constructor(connectionStatusHandlerService, indexedDBService) {
        this.connectionStatusHandlerService = connectionStatusHandlerService;
        this.indexedDBService = indexedDBService;
    }
    intercept(request, next) {
        //All of the backend end points match the pattern $(backend url)/mealoptimizer/$(tag), we need not use [].
        //We use [] to accomodate future changes.
        let result = request.url.match(/.*mealoptimizer\/([a-z]+\/[a-z]+)/) || [];
        let tag = result[1].replace('/', '-');
        //If network connection is available, proceed with handling the request
        if (this.connectionStatusHandlerService.getConnectionStatus()) {
            return next.handle(request);
        }
        //If network connection is not available, write to indexedDB
        //Showing notification will be handled inside ConnectionStatusHandler
        else {
            //Write to indexed DB
            this.indexedDBService.addFailedRequest(request, tag);
            return next.handle(request);
        }
    }
}
ConnectionStatusInterceptor.ɵfac = function ConnectionStatusInterceptor_Factory(t) { return new (t || ConnectionStatusInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_connection_status_handler_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatusHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_indexeddb_indexed_db_service__WEBPACK_IMPORTED_MODULE_2__["IndexedDBService"])); };
ConnectionStatusInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConnectionStatusInterceptor, factory: ConnectionStatusInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectionStatusInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _connection_status_handler_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatusHandlerService"] }, { type: _indexeddb_indexed_db_service__WEBPACK_IMPORTED_MODULE_2__["IndexedDBService"] }]; }, null); })();


/***/ }),

/***/ "6Ael":
/*!*************************************************************************************!*\
  !*** ./src/app/meal-planner/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_model_shopping_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/model/shopping-item-model */ "iP5Z");
/* harmony import */ var _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/shopping-list.actions */ "cyko");
/* harmony import */ var _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user-mgmt/store/actions/user-display-preferences.actions */ "dZCj");
/* harmony import */ var src_app_shared_shopping_list_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shopping-list-mode.enum */ "vyhQ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["f"];
function ShoppingEditComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingEditComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ShoppingEditComponent {
    constructor(store) {
        this.store = store;
        this.mode = src_app_shared_shopping_list_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ShoppingListMode"].ADD;
        this.editedItem = null;
        this.defaultLabel = 'Added by user';
    }
    ngOnInit() {
        // Get value of mode (create or update)
        this.store.select('userDisplayPreferences').subscribe((userDisplayPreferences) => {
            this.mode = userDisplayPreferences.shoppingListMode;
        });
        this.subscription = this.store
            .select('shoppingList')
            .subscribe(stateData => {
            if (stateData.editedshoppingItemIndex > -1) {
                this.editedItem = stateData.editedshoppingItem;
                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount,
                    measure: this.editedItem.measure
                });
                this.store.dispatch(new _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateShoppingListMode"](src_app_shared_shopping_list_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ShoppingListMode"].UPDATE));
            }
        });
    }
    onSubmit(form) {
        const value = form.value;
        let updatedLabels = null;
        let newIngredient = null;
        if (this.mode === 'update') {
            //Calculate updatedLabels. Add the label 'Added by User' if it is not already available 
            updatedLabels = this.editedItem.labels.slice();
            if (!updatedLabels.includes(this.defaultLabel))
                updatedLabels.push(this.defaultLabel);
            //Create the ingredient to be updated. NOTE: We use the same measure as editedItem since the measure cannot be updated.
            newIngredient = new _shared_model_shopping_item_model__WEBPACK_IMPORTED_MODULE_1__["ShoppingItem"](value.name, value.amount, this.editedItem.measure, updatedLabels);
            this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateIngredient"]({ shoppingItem: newIngredient, itemNameUpdated: form.controls['name'].touched }));
        }
        else {
            //Create the ingredient to be added
            newIngredient = new _shared_model_shopping_item_model__WEBPACK_IMPORTED_MODULE_1__["ShoppingItem"](value.name, value.amount, value.measure, [this.defaultLabel]);
            this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_2__["AddIngredient"](newIngredient));
        }
        this.store.dispatch(new _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateShoppingListMode"](src_app_shared_shopping_list_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ShoppingListMode"].ADD));
        this.mode = src_app_shared_shopping_list_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ShoppingListMode"].ADD;
        form.reset();
    }
    onClear() {
        this.slForm.reset();
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_2__["StopEdit"]());
        this.store.dispatch(new _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateShoppingListMode"](src_app_shared_shopping_list_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ShoppingListMode"].ADD));
    }
    onDelete() {
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteIngredient"]());
        this.onClear();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_2__["StopEdit"]());
    }
}
ShoppingEditComponent.ɵfac = function ShoppingEditComponent_Factory(t) { return new (t || ShoppingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
ShoppingEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingEditComponent, selectors: [["app-shopping-edit"]], viewQuery: function ShoppingEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slForm = _t.first);
    } }, decls: 22, vars: 6, consts: [[3, "ngSubmit"], ["f", "ngForm"], [1, "row", "justify-content-start"], [1, "form-group", "col-md-3", "col-sm-4", "mx-1"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "ngModel", "", "required", "", 1, "form-control"], [1, "form-group", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-3", "mx-1"], ["for", "amount"], ["type", "number", "id", "amount", "name", "amount", "ngModel", "", "required", "", "pattern", "^[1-9]+[0-9]*$", "min", "1", 1, "form-control"], [1, "form-group", "col-xl-1", "col-lg-2", "col-md-2", "col-sm-2", "mx-1"], ["for", "measure"], ["type", "text", "id", "measure", "name", "measure", "ngModel", "", "required", "", "pattern", "^[a-z()]+$", 1, "form-control", 3, "disabled"], ["type", "submit", 1, "btn", "btn-success", "ml-4", "mr-2", "mt-2", "mb-4", 3, "disabled"], ["class", "btn btn-danger ml-2 mr-2 mt-2 mb-4", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "ml-2", "mr-4", "mt-2", "mb-4", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "ml-2", "mr-2", "mt-2", "mb-4", 3, "click"]], template: function ShoppingEditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ShoppingEditComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Measure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ShoppingEditComponent_button_19_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingEditComponent_Template_button_click_20_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.mode === "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 4, ctx.mode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "update");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWVkaXQvc2hvcHBpbmctZWRpdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-edit',
                templateUrl: './shopping-edit.component.html',
                styleUrls: ['./shopping-edit.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, { slForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f', { static: false }]
        }] }); })();


/***/ }),

/***/ "6fFp":
/*!********************************************!*\
  !*** ./src/app/shared/core/core.module.ts ***!
  \********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/error-page/error-page.component */ "EsUL");
/* harmony import */ var _core_custom_overlay_custom_overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/custom-overlay/custom-overlay.component */ "ic8S");
/* harmony import */ var _core_custom_notification_custom_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/custom-notification/custom-notification.component */ "KD3V");









class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_core_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"],
        _core_custom_overlay_custom_overlay_component__WEBPACK_IMPORTED_MODULE_5__["CustomOverlayComponent"],
        _core_custom_notification_custom_notification_component__WEBPACK_IMPORTED_MODULE_6__["CustomNotificationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_core_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"],
        _core_custom_overlay_custom_overlay_component__WEBPACK_IMPORTED_MODULE_5__["CustomOverlayComponent"],
        _core_custom_notification_custom_notification_component__WEBPACK_IMPORTED_MODULE_6__["CustomNotificationComponent"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _core_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"],
                    _core_custom_overlay_custom_overlay_component__WEBPACK_IMPORTED_MODULE_5__["CustomOverlayComponent"],
                    _core_custom_notification_custom_notification_component__WEBPACK_IMPORTED_MODULE_6__["CustomNotificationComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _core_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"],
                    _core_custom_overlay_custom_overlay_component__WEBPACK_IMPORTED_MODULE_5__["CustomOverlayComponent"],
                    _core_custom_notification_custom_notification_component__WEBPACK_IMPORTED_MODULE_6__["CustomNotificationComponent"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "82aV":
/*!***************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/store/actions/menu.actions.ts ***!
  \***************************************************************************/
/*! exports provided: UPDATE_MENU_START, UPDATE_MENU_SUCCESS, UPDATE_MENU_FAIL, CLEAR_MENU, UPDATE_REQUEST_STATUS, UpdateMenuStart, UpdateMenuSuccess, UpdateMenuFail, ClearMenu, UpdateRequestStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MENU_START", function() { return UPDATE_MENU_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MENU_SUCCESS", function() { return UPDATE_MENU_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MENU_FAIL", function() { return UPDATE_MENU_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_MENU", function() { return CLEAR_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_REQUEST_STATUS", function() { return UPDATE_REQUEST_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMenuStart", function() { return UpdateMenuStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMenuSuccess", function() { return UpdateMenuSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMenuFail", function() { return UpdateMenuFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearMenu", function() { return ClearMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRequestStatus", function() { return UpdateRequestStatus; });
const UPDATE_MENU_START = '[Menu] Update menu start';
const UPDATE_MENU_SUCCESS = '[Menu] Update menu success';
const UPDATE_MENU_FAIL = '[Menu] Update menu fail';
const CLEAR_MENU = '[Menu] Clear Menu';
const UPDATE_REQUEST_STATUS = '[Menu] Update request status';
class UpdateMenuStart {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_MENU_START;
    } // Payload refers to dietType
}
class UpdateMenuSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_MENU_SUCCESS;
    } // Payload refers to a list of itemNames in the menu
}
class UpdateMenuFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_MENU_FAIL;
    } //Payload refers to error when meu is retrieved from backend here
}
class ClearMenu {
    constructor() {
        this.type = CLEAR_MENU;
    }
}
class UpdateRequestStatus {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_REQUEST_STATUS;
    }
}


/***/ }),

/***/ "Aax3":
/*!****************************************************!*\
  !*** ./src/app/shared/services/display.service.ts ***!
  \****************************************************/
/*! exports provided: DisplayService, CONTAINER_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayService", function() { return DisplayService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER_DATA", function() { return CONTAINER_DATA; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DisplayService {
    createInjector(content) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
            providers: [
                { provide: CONTAINER_DATA, useValue: content }
            ]
        });
    }
}
const CONTAINER_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CONTAINER_DATA');


/***/ }),

/***/ "AlQx":
/*!*************************************************!*\
  !*** ./src/app/app-info/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HomeComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goToLoginOrRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login/Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.continueAsGuest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continue as Guest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.goToMealPlanner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go to Meal Planner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    ngOnInit() {
        this.store.select('authenticatedUser').subscribe((authenticatedUser) => {
            this.authenticatedUser = authenticatedUser.user;
        });
    }
    //Displayed if user has not logged in
    //If the user wants to login, display an intermediate auth-redirect page (this page in turn will redirect to keycloak authentication)
    goToLoginOrRegister() {
        this.router.navigateByUrl('/meal-planner/user-redirect');
    }
    //Displayed if user has not logged in
    //If the user wants to continue as guest, redirect to meal-planner homepage. No intermediate auth-redirect page is required.
    continueAsGuest() {
        this.router.navigate(['/meal-planner']);
    }
    //Displayed if user has logged in
    goToMealPlanner() {
        this.router.navigate(['/meal-planner']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 3, consts: [["id", "home"], [1, "home_text"], [1, "left"], [1, "d-flex", "justify-content-center"], ["class", "home_btn", 3, "click", 4, "ngIf"], ["src", "../../../assets/images/background.jpg", "alt", "meal optimizer"], [1, "home_btn", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Meal Optimizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Eat what you wish, on a budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_button_8_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_button_9_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_button_10_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authenticatedUser.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authenticatedUser.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticatedUser.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#home[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 85vh;\r\n  align-items: center;\r\n  z-index: 1;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 50%;\r\n  border: 3px solid #73AD21;\r\n  margin: 1em 3em;\r\n  padding: 0.4em 1.6em 1.6em 3em;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n   }\r\n\r\n.home_text[_ngcontent-%COMP%] {\r\n  color: #071410;\r\n  text-align: left;\r\n}\r\n\r\n.home_text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-family: 'Times New Roman', Times, serif;\r\n  font-size: 72px;\r\n  z-index: 1;\r\n  padding-bottom: 0.25em;\r\n  text-transform: capitalize;\r\n  color: #716823;\r\n}\r\n\r\n.home_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n  margin-bottom: 1em;\r\n  line-height: 1.5;\r\n  text-align: center;\r\n}\r\n\r\n.home_text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  position: absolute;\r\n  right: 0.3em;\r\n  bottom: 0;\r\n  z-index: -1;\r\n  max-height: 160vh;\r\n  max-width: 100%;\r\n}\r\n\r\n.home_btn[_ngcontent-%COMP%] {\r\n  background-color: whitesmoke;\r\n  padding: 0.625em;\r\n  border-radius: 4px;\r\n  margin: 1em 2em;\r\n  display: inline;\r\n}\r\n\r\n@media only screen and (max-width: 1026px) {\r\n\t.left[_ngcontent-%COMP%] {\r\n    background-color: #e3ebd9;\r\n\t}\r\n  .home_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n  .home_btn[_ngcontent-%COMP%] {\r\n    margin: 1em;\r\n  }\r\n  .home_text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWluZm8vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7R0FDakI7O0FBRUg7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGVBQWU7RUFDZixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0NBQ0M7SUFDRyx5QkFBeUI7Q0FDNUI7RUFDQztJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAtaW5mby9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDg1dmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XHJcbiAgbWFyZ2luOiAxZW0gM2VtO1xyXG4gIHBhZGRpbmc6IDAuNGVtIDEuNmVtIDEuNmVtIDNlbTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgIH1cclxuXHJcbi5ob21lX3RleHQge1xyXG4gIGNvbG9yOiAjMDcxNDEwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5ob21lX3RleHQgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNzJweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgY29sb3I6ICM3MTY4MjM7XHJcbn1cclxuXHJcbi5ob21lX3RleHQgcCB7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob21lX3RleHQgaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMC4zZW07XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIG1heC1oZWlnaHQ6IDE2MHZoO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvbWVfYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmc6IDAuNjI1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjogMWVtIDJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNnB4KSB7XHJcblx0LmxlZnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZWJkOTtcclxuXHR9XHJcbiAgLmhvbWVfdGV4dCBwIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5ob21lX2J0biB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICB9XHJcbiAgLmhvbWVfdGV4dCBoMSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "Avrn":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _connection_status_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connection-status-handler.service */ "QAkm");








class AuthGuardService extends keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakAuthGuard"] {
    constructor(router, keycloak, connectionStatusHandlerService) {
        super(router, keycloak);
        this.router = router;
        this.keycloak = keycloak;
        this.connectionStatusHandlerService = connectionStatusHandlerService;
    }
    isAccessAllowed(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Force the user to log in if currently unauthenticated.
            if (!this.authenticated) {
                //NOTE: For future reference Request triggered from : window.location.origin + state.url);
                yield this.keycloak.login({
                    redirectUri: `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}:${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPort}/#/meal-planner/user-redirect`
                });
            }
            //Do not allow navigation if the user is offline
            if (!this.connectionStatusHandlerService.getConnectionStatus())
                return false;
            else
                return true;
        });
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_connection_status_handler_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionStatusHandlerService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"] }, { type: _connection_status_handler_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionStatusHandlerService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    hostUrl: window.location.protocol + '//' + window.location.host,
    apiUrl: window.location.protocol + '//' + window.location.host,
    apiPort: 80,
    applicationName: 'mealoptimizer',
    envName: 'test'
};


/***/ }),

/***/ "E5JP":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/optimized-meal-plan/optimized-results-table/optimized-result-quality/optimized-result-quality.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: OptimizedResultQualityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizedResultQualityComponent", function() { return OptimizedResultQualityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function OptimizedResultQualityComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const meal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r1.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("portion: ", meal_r1.portion, ", cost: $", meal_r1.mealCost, "");
} }
class OptimizedResultQualityComponent {
    constructor() { }
    ngOnInit() {
    }
}
OptimizedResultQualityComponent.ɵfac = function OptimizedResultQualityComponent_Factory(t) { return new (t || OptimizedResultQualityComponent)(); };
OptimizedResultQualityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptimizedResultQualityComponent, selectors: [["app-optimized-result-quality"]], inputs: { qualityOptimizedPlan: "qualityOptimizedPlan" }, decls: 14, vars: 2, consts: [[1, "table", "h-100", "text-center"], [4, "ngFor", "ngForOf"]], template: function OptimizedResultQualityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Optimized by quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OptimizedResultQualityComponent_ng_container_8_Template, 6, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total cost:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.qualityOptimizedPlan.mealList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.qualityOptimizedPlan.planCost);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9tZWFsLW9wdGltaXplci9vcHRpbWl6ZWQtbWVhbC1wbGFuL29wdGltaXplZC1yZXN1bHRzLXRhYmxlL29wdGltaXplZC1yZXN1bHQtcXVhbGl0eS9vcHRpbWl6ZWQtcmVzdWx0LXF1YWxpdHkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptimizedResultQualityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-optimized-result-quality',
                templateUrl: './optimized-result-quality.component.html',
                styleUrls: ['./optimized-result-quality.component.css']
            }]
    }], function () { return []; }, { qualityOptimizedPlan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ECCw":
/*!****************************************************!*\
  !*** ./src/app/shared/model/user-builder.model.ts ***!
  \****************************************************/
/*! exports provided: UserBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBuilder", function() { return UserBuilder; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "iamr");

class UserBuilder {
    constructor(username) {
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"](username);
    }
    setFirstName(firstName) {
        this.user.firstName = firstName;
        return this;
    }
    setLastName(lastName) {
        this.user.lastName = lastName;
        return this;
    }
    setEmail(email) {
        this.user.email = email;
        return this;
    }
    setPreferredDietType(preferredDietType) {
        this.user.preferredDietType = preferredDietType;
        return this;
    }
    setAddress(address) {
        this.user.address = address;
        return this;
    }
    setMinLimits(nutrientMinLimits) {
        this.user.nutrientMinLimits = nutrientMinLimits;
        return this;
    }
    setMaxLimits(nutrientMaxLimits) {
        this.user.nutrientMaxLimits = nutrientMaxLimits;
        return this;
    }
    setToken(token) {
        this.user.token = token;
        return this;
    }
    setLoggedIn(loggedIn) {
        this.user.loggedIn = loggedIn;
        return this;
    }
    build() {
        return this.user;
    }
}


/***/ }),

/***/ "EsUL":
/*!****************************************************************!*\
  !*** ./src/app/shared/core/error-page/error-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ErrorPageComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.errorMessage = data['errorMessage'];
        });
    }
    redirectToHome() {
        this.router.navigate(['/app-info', 'home']);
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 4, vars: 1, consts: [[3, "click"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorPageComponent_Template_button_click_2_listener() { return ctx.redirectToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go back home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb3JlL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-page',
                templateUrl: './error-page.component.html',
                styleUrls: ['./error-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "FUYM":
/*!***************************************************************************!*\
  !*** ./src/app/meal-planner/shopping-list/store/shopping-list.reducer.ts ***!
  \***************************************************************************/
/*! exports provided: shoppingListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shoppingListReducer", function() { return shoppingListReducer; });
/* harmony import */ var _app_shared_model_shopping_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app/shared/model/shopping-item-model */ "iP5Z");
/* harmony import */ var _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.actions */ "cyko");


const defaultShoppingList = {
    shoppingItems: [],
    editedshoppingItem: null,
    editedshoppingItemIndex: -1
};
function shoppingListReducer(state = defaultShoppingList, action) {
    let updatedShoppingList = null;
    switch (action.type) {
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENT"]:
            updatedShoppingList = (verifyIfShoppingItemExists(action.payload, state.shoppingItems)) ? mergeWithExistingShoppingItem(action.payload, state.shoppingItems) : addNewShoppingItem(action.payload, state.shoppingItems);
            return Object.assign(Object.assign({}, state), { shoppingItems: updatedShoppingList });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENTS"]:
            updatedShoppingList = state.shoppingItems;
            action.payload.forEach((shoppingItem) => {
                updatedShoppingList = (verifyIfShoppingItemExists(shoppingItem, updatedShoppingList)) ? mergeWithExistingShoppingItem(shoppingItem, updatedShoppingList) : addNewShoppingItem(shoppingItem, updatedShoppingList);
            });
            return Object.assign(Object.assign({}, state), { shoppingItems: updatedShoppingList });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_INGREDIENT"]:
            //If name is not updated, only update the item.
            if (!action.payload.itemNameUpdated) {
                updatedShoppingList = updateCurrentShoppingList(action.payload.shoppingItem, state.shoppingItems);
            }
            //If name is updated, check if we can merge it with an existing item in the list
            else {
                updatedShoppingList = (verifyIfShoppingItemExists(action.payload.shoppingItem, state.shoppingItems)) ? mergeWithExistingShoppingItem(action.payload.shoppingItem, state.shoppingItems) : addNewShoppingItem(action.payload.shoppingItem, state.shoppingItems);
            }
            return Object.assign(Object.assign({}, state), { shoppingItems: updatedShoppingList, editedshoppingItemIndex: -1, editedshoppingItem: null });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_INGREDIENT"]:
            return Object.assign(Object.assign({}, state), { shoppingItems: state.shoppingItems.filter((ig, igIndex) => {
                    return igIndex !== state.editedshoppingItemIndex;
                }), editedshoppingItemIndex: -1, editedshoppingItem: null });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["START_EDIT"]:
            return Object.assign(Object.assign({}, state), { editedshoppingItemIndex: action.payload, editedshoppingItem: Object.assign({}, state.shoppingItems[action.payload]) });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["STOP_EDIT"]:
            return Object.assign(Object.assign({}, state), { editedshoppingItem: null, editedshoppingItemIndex: -1 });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_SHOPPING_LIST"]:
            return defaultShoppingList;
        default:
            return state;
    }
}
function verifyIfShoppingItemExists(newShoppingItem, currentShoppingList) {
    let shoppingItemExists = false;
    currentShoppingList.forEach((existingShoppingItem) => {
        if (!shoppingItemExists && existingShoppingItem.name.toLowerCase() === newShoppingItem.name.toLowerCase())
            shoppingItemExists = true;
    });
    return shoppingItemExists;
}
function mergeWithExistingShoppingItem(newShoppingItem, currentShoppingList) {
    let updatedShoppingList = currentShoppingList.slice();
    let shoppingItemMerged = false;
    let mergedShoppingItem = null;
    currentShoppingList.forEach((existingShoppingItem, index) => {
        if (!shoppingItemMerged && (existingShoppingItem.name.toLowerCase() === newShoppingItem.name.toLowerCase())) {
            mergedShoppingItem = new _app_shared_model_shopping_item_model__WEBPACK_IMPORTED_MODULE_0__["ShoppingItem"](existingShoppingItem.name, newShoppingItem.amount + existingShoppingItem.amount, existingShoppingItem.measure, mergeLabels(existingShoppingItem.labels, newShoppingItem.labels));
            updatedShoppingList[index] = mergedShoppingItem;
            shoppingItemMerged = true;
        }
    });
    return updatedShoppingList;
}
function mergeLabels(existingLabels, newLabels) {
    let mergedLabels = existingLabels.slice();
    newLabels.forEach((newLabel) => {
        if (!existingLabels.includes(newLabel)) {
            mergedLabels.push(newLabel);
        }
    });
    return mergedLabels;
}
function addNewShoppingItem(newShoppingItem, currentShoppingList) {
    let updatedShoppingList = currentShoppingList.slice();
    updatedShoppingList.push(newShoppingItem);
    return updatedShoppingList;
}
function updateCurrentShoppingList(editedShoppingItem, currentShoppingList) {
    let updatedShoppingList = currentShoppingList.slice();
    currentShoppingList.forEach((existingShoppingItem, index) => {
        if (existingShoppingItem.name.toLowerCase() === editedShoppingItem.name.toLowerCase())
            updatedShoppingList[index] = editedShoppingItem;
    });
    return updatedShoppingList;
}


/***/ }),

/***/ "GKvW":
/*!********************************************************************************!*\
  !*** ./src/app/shared/services/error-handler/connection-loss-error-handler.ts ***!
  \********************************************************************************/
/*! exports provided: ConnectionLossErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionLossErrorHandler", function() { return ConnectionLossErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler */ "pQOK");
/* harmony import */ var _notification_display_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification-display.service */ "rXqt");




//Handles connection loss. Called from inside ConnectionStatusHandler.
class ConnectionLossErrorHandler extends _error_handler__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"] {
    constructor(notificationDisplayService) {
        super();
        this.notificationDisplayService = notificationDisplayService;
    }
    handleError() {
        this.notificationDisplayService.showNotification('Connection lost. Some features may not be available.');
        return super.handleError();
    }
}
ConnectionLossErrorHandler.ɵfac = function ConnectionLossErrorHandler_Factory(t) { return new (t || ConnectionLossErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notification_display_service__WEBPACK_IMPORTED_MODULE_2__["NotificationDisplayService"])); };
ConnectionLossErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConnectionLossErrorHandler, factory: ConnectionLossErrorHandler.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectionLossErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _notification_display_service__WEBPACK_IMPORTED_MODULE_2__["NotificationDisplayService"] }]; }, null); })();


/***/ }),

/***/ "Go0q":
/*!*****************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/store/reducers/order.reducer.ts ***!
  \*****************************************************************************/
/*! exports provided: orderReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderReducer", function() { return orderReducer; });
/* harmony import */ var _shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/http-request-status.enum */ "zl8S");
/* harmony import */ var _actions_order_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/order.actions */ "T1QP");


const defaultMealPlans = {
    mealPlans: null,
    error: null,
    requestStatus: _shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].NO_ACTION
};
function orderReducer(state = defaultMealPlans, action) {
    switch (action.type) {
        case _actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["SAVE_ORDER_SUCCESS"]:
            return Object.assign(Object.assign({}, state), { mealPlans: action.payload, error: null, requestStatus: _shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].RESPONSE_RECEIVED });
        case _actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["SAVE_ORDER_FAIL"]:
            return Object.assign(Object.assign({}, state), { mealPlans: null, error: action.payload, requestStatus: _shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].RESPONSE_RECEIVED });
        case _actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_REQUEST_STATUS"]:
            return Object.assign(Object.assign({}, state), { error: null, requestStatus: action.payload });
        case _actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_ORDER"]:
            return defaultMealPlans;
        default: return state;
    }
}


/***/ }),

/***/ "H6pW":
/*!***********************************************************************!*\
  !*** ./src/app/meal-planner/recipes/store/effects/recipes.effects.ts ***!
  \***********************************************************************/
/*! exports provided: RecipesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesEffects", function() { return RecipesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_recipes_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/recipes.actions */ "nDj3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _shared_services_response_handler_recipe_response_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/response-handler/recipe-response-handler */ "hKO6");











class RecipesEffects {
    constructor(http, actions$, recipeResponseHandler) {
        this.http = http;
        this.actions$ = actions$;
        this.recipeResponseHandler = recipeResponseHandler;
        this.fetchRecipes = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_5__["FETCH_RECIPES_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((fetchRecipesAction) => {
            const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].hostUrl}/${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationName}/recipe/find`;
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('names', fetchRecipesAction.payload.join());
            return this.http.get(url, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((recipes) => {
                return this.recipeResponseHandler.handleSuccess(recipes);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((errorRes) => {
                return this.recipeResponseHandler.handleFailure(errorRes);
            }));
        }));
    }
}
RecipesEffects.ɵfac = function RecipesEffects_Factory(t) { return new (t || RecipesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_response_handler_recipe_response_handler__WEBPACK_IMPORTED_MODULE_7__["RecipeResponseHandler"])); };
RecipesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RecipesEffects, factory: RecipesEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], RecipesEffects.prototype, "fetchRecipes", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RecipesEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _shared_services_response_handler_recipe_response_handler__WEBPACK_IMPORTED_MODULE_7__["RecipeResponseHandler"] }]; }, { fetchRecipes: [] }); })();


/***/ }),

/***/ "HDOF":
/*!**************************************************!*\
  !*** ./src/app/shared/optimization-mode.enum.ts ***!
  \**************************************************/
/*! exports provided: OptimizationMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizationMode", function() { return OptimizationMode; });
var OptimizationMode;
(function (OptimizationMode) {
    OptimizationMode["CREATE"] = "create";
    OptimizationMode["UPDATE"] = "update";
})(OptimizationMode || (OptimizationMode = {}));


/***/ }),

/***/ "HjpC":
/*!*************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/meal-optimizer.component.ts ***!
  \*************************************************************************/
/*! exports provided: MealOptimizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealOptimizerComponent", function() { return MealOptimizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_diet_type_user_diet_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_diet_type/user_diet_type.component */ "w/rZ");
/* harmony import */ var _delivery_date_selector_delivery_date_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery-date-selector/delivery-date-selector.component */ "tKtD");
/* harmony import */ var _meal_selector_meal_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meal-selector/meal-selector.component */ "2nfZ");
/* harmony import */ var _optimized_meal_plan_optimized_meal_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./optimized-meal-plan/optimized-meal-plan.component */ "Vt1l");






//This component handles routing, link to optimizationService via controller
class MealOptimizerComponent {
    constructor() {
    }
    ngOnInit() { }
}
MealOptimizerComponent.ɵfac = function MealOptimizerComponent_Factory(t) { return new (t || MealOptimizerComponent)(); };
MealOptimizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealOptimizerComponent, selectors: [["app-meal-optimizer"]], inputs: { dietTypes: "dietTypes" }, decls: 11, vars: 1, consts: [[1, "row", "custom-display", "mt-4", "ml-1"], [1, "custom-diet-type-width"], [3, "dietTypes"], [1, "custom-delivery-date-width"], [1, "row", "mt-4", "ml-1"], [1, "col-11"], [1, "col-11", "justify-content-start"]], template: function MealOptimizerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-user-diet-type", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-delivery-date-selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-meal-selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-optimized-meal-plan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dietTypes", ctx.dietTypes);
    } }, directives: [_user_diet_type_user_diet_type_component__WEBPACK_IMPORTED_MODULE_1__["UserDietTypeComponent"], _delivery_date_selector_delivery_date_selector_component__WEBPACK_IMPORTED_MODULE_2__["DeliveryDateSelectorComponent"], _meal_selector_meal_selector_component__WEBPACK_IMPORTED_MODULE_3__["MealSelectorComponent"], _optimized_meal_plan_optimized_meal_plan_component__WEBPACK_IMPORTED_MODULE_4__["OptimizedMealPlanComponent"]], styles: ["@media only screen and (min-width: 960px) {\r\n\t.custom-display[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n        width: 100%;\r\n\t}\r\n        .custom-diet-type-width[_ngcontent-%COMP%] {\r\n          width: 40%;      \r\n        }\r\n        .custom-delivery-date-width[_ngcontent-%COMP%] {\r\n          width: 50%;      \r\n        }\r\n}\r\n\r\n@media only screen and (max-width: 959px) {\r\n\t.custom-display[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100%;\r\n\t}\r\n        .custom-diet-type-width[_ngcontent-%COMP%] {\r\n                width: 100%;    \r\n        }\r\n        .custom-delivery-date-width[_ngcontent-%COMP%] {\r\n                width: 90%;    \r\n              }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbC1wbGFubmVyL21lYWwtb3B0aW1pemVyL21lYWwtb3B0aW1pemVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztRQUNPLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsV0FBVztDQUNsQjtRQUNPO1VBQ0UsVUFBVTtRQUNaO1FBQ0E7VUFDRSxVQUFVO1FBQ1o7QUFDUjs7QUFFQTtDQUNDO1FBQ08sYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixXQUFXO0NBQ2xCO1FBQ087Z0JBQ1EsV0FBVztRQUNuQjtRQUNBO2dCQUNRLFVBQVU7Y0FDWjtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWVhbC1wbGFubmVyL21lYWwtb3B0aW1pemVyL21lYWwtb3B0aW1pemVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcblx0LmN1c3RvbS1kaXNwbGF5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblx0fVxyXG4gICAgICAgIC5jdXN0b20tZGlldC10eXBlLXdpZHRoIHtcclxuICAgICAgICAgIHdpZHRoOiA0MCU7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXN0b20tZGVsaXZlcnktZGF0ZS13aWR0aCB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlOyAgICAgIFxyXG4gICAgICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG5cdC5jdXN0b20tZGlzcGxheSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuICAgICAgICAuY3VzdG9tLWRpZXQtdHlwZS13aWR0aCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXN0b20tZGVsaXZlcnktZGF0ZS13aWR0aCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlOyAgICBcclxuICAgICAgICAgICAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealOptimizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meal-optimizer',
                templateUrl: './meal-optimizer.component.html',
                styleUrls: ['./meal-optimizer.component.css']
            }]
    }], function () { return []; }, { dietTypes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Iu6Z":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/user-diet-type-resolver.service.ts ***!
  \********************************************************************/
/*! exports provided: UseDietTypeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseDietTypeResolver", function() { return UseDietTypeResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_user_diet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http/user-diet.service */ "qIs3");



class UseDietTypeResolver {
    constructor(userDietService) {
        this.userDietService = userDietService;
    }
    resolve(route, state) {
        //To be changed to fetch diet types from cache using service worker if a copy is available.
        return this.userDietService.getDietTypes();
    }
}
UseDietTypeResolver.ɵfac = function UseDietTypeResolver_Factory(t) { return new (t || UseDietTypeResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_user_diet_service__WEBPACK_IMPORTED_MODULE_1__["UserDietService"])); };
UseDietTypeResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UseDietTypeResolver, factory: UseDietTypeResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UseDietTypeResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _http_user_diet_service__WEBPACK_IMPORTED_MODULE_1__["UserDietService"] }]; }, null); })();


/***/ }),

/***/ "KD3V":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/core/custom-notification/custom-notification.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNotificationComponent", function() { return CustomNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_display_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/display.service */ "Aax3");



class CustomNotificationComponent {
    constructor(message) {
        this.message = message;
    }
    ngOnInit() {
    }
}
CustomNotificationComponent.ɵfac = function CustomNotificationComponent_Factory(t) { return new (t || CustomNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_display_service__WEBPACK_IMPORTED_MODULE_1__["CONTAINER_DATA"])); };
CustomNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomNotificationComponent, selectors: [["app-custom-notification"]], decls: 2, vars: 1, consts: [[1, "notification"]], template: function CustomNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".notification[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    background-color: silver;\r\n    border: 1px solid black;\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvcmUvY3VzdG9tLW5vdGlmaWNhdGlvbi9jdXN0b20tbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7RUFDViIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb3JlL2N1c3RvbS1ub3RpZmljYXRpb24vY3VzdG9tLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbiB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-notification',
                templateUrl: './custom-notification.component.html',
                styleUrls: ['./custom-notification.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_services_display_service__WEBPACK_IMPORTED_MODULE_1__["CONTAINER_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "LaBC":
/*!****************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/store/reducers/user-preferences.reducer.ts ***!
  \****************************************************************************************/
/*! exports provided: userPreferencesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPreferencesReducer", function() { return userPreferencesReducer; });
/* harmony import */ var _actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user-preferences.actions */ "2fHZ");

const defaultPreferences = {
    dietType: null,
    deliveryDate: new Date(),
    mealSelected: new Array(4),
    optimizationTypeSelected: null
};
function userPreferencesReducer(state = defaultPreferences, action) {
    switch (action.type) {
        case _actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_DIET_TYPE"]:
            return Object.assign(Object.assign({}, state), { dietType: action.payload });
        case _actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_DELIVERY_DATE"]:
            return Object.assign(Object.assign({}, state), { deliveryDate: action.payload });
        case _actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MEAL"]:
            let modifiedMealList = [...state.mealSelected];
            modifiedMealList[action.payload.itemPosition] = action.payload.itemName;
            return Object.assign(Object.assign({}, state), { mealSelected: modifiedMealList });
        case _actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["OPTIMIZATION_TYPE_SELECTED"]:
            return Object.assign(Object.assign({}, state), { optimizationTypeSelected: action.payload });
        case _actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_USER_PREFERENCES"]:
            return defaultPreferences;
        default: return state;
    }
}


/***/ }),

/***/ "NuUg":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




class OrderService {
    constructor(datePipe, store) {
        this.datePipe = datePipe;
        this.store = store;
        this.store.select('userPreferences').subscribe((userPrefs) => {
            this.userPrefs = userPrefs;
        });
    }
    createOrderRequest(deliveryDate, mealList, user, id) {
        this.orderRequest = {
            deliveryDate: this.datePipe.transform(deliveryDate, 'MM/dd/yyyy'),
            mealSelected: mealList,
            optimizationTypes: ['COST', 'REWARD'],
            username: user.username
        };
        //Set optional param id(orderId) if it is available. 'id' is available for update meal plan only, not for create meal plan.
        //id is also unavailable for guest accounts since the meal plans are not saved in the DB for guests.
        if (id)
            this.orderRequest.id = id;
        return this.orderRequest;
    }
    verifyAllInputsAreReceived() {
        return (this.userPrefs.dietType !== null &&
            this.userPrefs.deliveryDate !== null &&
            (this.userPrefs.mealSelected.filter((meal) => meal !== undefined).length) === 4);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "Ogt9":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/optimized-meal-plan/optimized-results-table/optimized-result-cost/optimized-result-cost.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: OptimizedResultCostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizedResultCostComponent", function() { return OptimizedResultCostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function OptimizedResultCostComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const meal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meal_r1.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("portion: ", meal_r1.portion, ", cost: $", meal_r1.mealCost, "");
} }
class OptimizedResultCostComponent {
    constructor() { }
    ngOnInit() {
    }
}
OptimizedResultCostComponent.ɵfac = function OptimizedResultCostComponent_Factory(t) { return new (t || OptimizedResultCostComponent)(); };
OptimizedResultCostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptimizedResultCostComponent, selectors: [["app-optimized-result-cost"]], inputs: { costOptimizedPlan: "costOptimizedPlan" }, decls: 14, vars: 2, consts: [[1, "table", "h-100", "text-center"], [4, "ngFor", "ngForOf"]], template: function OptimizedResultCostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Optimized by cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OptimizedResultCostComponent_ng_container_8_Template, 6, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total cost:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.costOptimizedPlan.mealList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.costOptimizedPlan.planCost);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9tZWFsLW9wdGltaXplci9vcHRpbWl6ZWQtbWVhbC1wbGFuL29wdGltaXplZC1yZXN1bHRzLXRhYmxlL29wdGltaXplZC1yZXN1bHQtY29zdC9vcHRpbWl6ZWQtcmVzdWx0LWNvc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptimizedResultCostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-optimized-result-cost',
                templateUrl: './optimized-result-cost.component.html',
                styleUrls: ['./optimized-result-cost.component.css']
            }]
    }], function () { return []; }, { costOptimizedPlan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Q52l":
/*!*********************************************!*\
  !*** ./src/app/app-info/app-info.module.ts ***!
  \*********************************************/
/*! exports provided: AppInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoModule", function() { return AppInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-info/app-info.component */ "s2nn");
/* harmony import */ var _app_info_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-info/home/home.component */ "AlQx");
/* harmony import */ var _app_info_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-info/contact-us/contact-us.component */ "dK1+");
/* harmony import */ var _app_info_app_info_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-info/app-info-routing.module */ "tw6D");









class AppInfoModule {
}
AppInfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppInfoModule });
AppInfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppInfoModule_Factory(t) { return new (t || AppInfoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_info_app_info_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppInfoRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppInfoModule, { declarations: [_app_info_app_info_component__WEBPACK_IMPORTED_MODULE_4__["AppInfoComponent"],
        _app_info_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _app_info_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_info_app_info_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppInfoRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInfoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_4__["AppInfoComponent"],
                    _app_info_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _app_info_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_info_app_info_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppInfoRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QAkm":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/connection-status-handler.service.ts ***!
  \**********************************************************************/
/*! exports provided: ConnectionStatusHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionStatusHandlerService", function() { return ConnectionStatusHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-connection-service */ "36es");
/* harmony import */ var _error_handler_connection_loss_error_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler/connection-loss-error-handler */ "GKvW");
/* harmony import */ var _notification_display_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification-display.service */ "rXqt");
/* harmony import */ var _indexeddb_indexed_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indexeddb/indexed-db.service */ "Z0I1");
/* harmony import */ var _services_action_dispatcher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/action-dispatcher.service */ "ewRR");








class ConnectionStatusHandlerService {
    constructor(connectionService, connectionLossErrorHandler, notificationDisplayService, indexedDBService, actionDispatcher) {
        this.connectionService = connectionService;
        this.connectionLossErrorHandler = connectionLossErrorHandler;
        this.notificationDisplayService = notificationDisplayService;
        this.indexedDBService = indexedDBService;
        this.actionDispatcher = actionDispatcher;
        this.isConnected = navigator.onLine;
        this.connectionService.monitor().subscribe((connectionStatus) => {
            this.isConnected = connectionStatus;
            if (!connectionStatus) {
                this.handleConnectionLoss();
            }
            if (connectionStatus) {
                this.handleConnectionFix();
            }
        });
    }
    getConnectionStatus() {
        return this.isConnected;
    }
    handleConnectionLoss() {
        this.connectionLossErrorHandler.handleError();
    }
    handleConnectionFix() {
        //Show notification
        this.notificationDisplayService.showNotification('Connection fixed. We will try to process your requests');
        //Read failed requests from indexedDB and call backend.
        this.indexedDBService.getAllEntries()
            .then((failedRequests) => {
            failedRequests.forEach((failedRequest, tag) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.actionDispatcher.dispatchAction(failedRequest, tag);
                this.indexedDBService.deleteRequest(tag);
            }));
        });
    }
}
ConnectionStatusHandlerService.ɵfac = function ConnectionStatusHandlerService_Factory(t) { return new (t || ConnectionStatusHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_error_handler_connection_loss_error_handler__WEBPACK_IMPORTED_MODULE_3__["ConnectionLossErrorHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_notification_display_service__WEBPACK_IMPORTED_MODULE_4__["NotificationDisplayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_indexeddb_indexed_db_service__WEBPACK_IMPORTED_MODULE_5__["IndexedDBService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_action_dispatcher_service__WEBPACK_IMPORTED_MODULE_6__["ActionDispatcher"])); };
ConnectionStatusHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConnectionStatusHandlerService, factory: ConnectionStatusHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConnectionStatusHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ng_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] }, { type: _error_handler_connection_loss_error_handler__WEBPACK_IMPORTED_MODULE_3__["ConnectionLossErrorHandler"] }, { type: _notification_display_service__WEBPACK_IMPORTED_MODULE_4__["NotificationDisplayService"] }, { type: _indexeddb_indexed_db_service__WEBPACK_IMPORTED_MODULE_5__["IndexedDBService"] }, { type: _services_action_dispatcher_service__WEBPACK_IMPORTED_MODULE_6__["ActionDispatcher"] }]; }, null); })();


/***/ }),

/***/ "R4B2":
/*!**************************************************************************!*\
  !*** ./src/app/shared/services/interceptor/error-interceptor.service.ts ***!
  \**************************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _error_handler_app_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-handler/app-error-handler */ "fXxp");






class ErrorInterceptor {
    constructor(appErrorHandler) {
        this.appErrorHandler = appErrorHandler;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            let errMsg = '';
            if (err instanceof ErrorEvent) {
                //Log to common logging service
                errMsg = this.appErrorHandler.handleError();
            }
            else if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                //Log to common logging service
                errMsg = this.appErrorHandler.handleError(err.status);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handler_app_error_handler__WEBPACK_IMPORTED_MODULE_4__["AppErrorHandler"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _error_handler_app_error_handler__WEBPACK_IMPORTED_MODULE_4__["AppErrorHandler"] }]; }, null); })();


/***/ }),

/***/ "RLRI":
/*!*****************************************************!*\
  !*** ./src/app/shared/optimization-mapping.enum.ts ***!
  \*****************************************************/
/*! exports provided: OptimizationTypeMapping, OptimizationSelectionMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizationTypeMapping", function() { return OptimizationTypeMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizationSelectionMapping", function() { return OptimizationSelectionMapping; });
var OptimizationTypeMapping;
(function (OptimizationTypeMapping) {
    OptimizationTypeMapping["REWARD"] = "QUALITY";
    OptimizationTypeMapping["COST"] = "COST";
})(OptimizationTypeMapping || (OptimizationTypeMapping = {}));
var OptimizationSelectionMapping;
(function (OptimizationSelectionMapping) {
    OptimizationSelectionMapping["COST"] = "optimizedByCost";
    OptimizationSelectionMapping["REWARD"] = "optimizedByQuality";
})(OptimizationSelectionMapping || (OptimizationSelectionMapping = {}));


/***/ }),

/***/ "SHFq":
/*!**************************************************************!*\
  !*** ./src/app/user-mgmt/store/actions/user-mgmt.actions.ts ***!
  \**************************************************************/
/*! exports provided: LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, LoginSuccess, LoginError, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginError", function() { return LoginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/*
 * Names of actions are self explanatory.
 */
const LOGIN_SUCCESS = '[User mgmt] LOGIN_SUCCESS';
const LOGIN_ERROR = '[User mgmt] LOGIN_ERROR';
const LOGOUT = '[User mgmt] LOGOUT';
class LoginSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOGIN_SUCCESS;
    }
}
class LoginError {
    constructor(payload) {
        this.payload = payload;
        this.type = LOGIN_ERROR;
    }
}
class Logout {
    constructor() {
        this.type = LOGOUT;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "container-fluid"], [1, "row", "p-5"], [1, "col-12"], [1, "row"], [1, "col-11", "mx-md-5", "mx-xs-1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "T1QP":
/*!****************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/store/actions/order.actions.ts ***!
  \****************************************************************************/
/*! exports provided: SAVE_ORDER_START, SAVE_ORDER_SUCCESS, SAVE_ORDER_FAIL, UPDATE_REQUEST_STATUS, CLEAR_ORDER, SaveOrderStart, SaveOrderSuccess, SaveOrderFail, UpdateRequestStatus, ClearOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ORDER_START", function() { return SAVE_ORDER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ORDER_SUCCESS", function() { return SAVE_ORDER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ORDER_FAIL", function() { return SAVE_ORDER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_REQUEST_STATUS", function() { return UPDATE_REQUEST_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ORDER", function() { return CLEAR_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveOrderStart", function() { return SaveOrderStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveOrderSuccess", function() { return SaveOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveOrderFail", function() { return SaveOrderFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRequestStatus", function() { return UpdateRequestStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearOrder", function() { return ClearOrder; });
const SAVE_ORDER_START = '[Get meal plan] SAVE_ORDER_START';
const SAVE_ORDER_SUCCESS = '[Get meal plan] SAVE_ORDER_SUCCESS';
const SAVE_ORDER_FAIL = '[Get meal plan] SAVE_ORDER_FAIL';
const UPDATE_REQUEST_STATUS = '[Get meal plan] UPDATE_REQUEST_STATUS';
const CLEAR_ORDER = '[Get meal plan] CLEAR_ORDER';
class SaveOrderStart {
    constructor(payload) {
        this.payload = payload;
        this.type = SAVE_ORDER_START;
    }
}
class SaveOrderSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = SAVE_ORDER_SUCCESS;
    }
}
class SaveOrderFail {
    constructor(payload) {
        this.payload = payload;
        this.type = SAVE_ORDER_FAIL;
    }
}
class UpdateRequestStatus {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_REQUEST_STATUS;
    }
}
class ClearOrder {
    constructor() {
        this.type = CLEAR_ORDER;
    }
}


/***/ }),

/***/ "U+ib":
/*!***************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/store/effects/menu.effects.ts ***!
  \***************************************************************************/
/*! exports provided: MenuEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuEffects", function() { return MenuEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_menu_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/menu.actions */ "82aV");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _shared_services_response_handler_menu_response_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/response-handler/menu-response-handler */ "ljvv");











class MenuEffects {
    constructor(http, actions$, menuResponseHandler) {
        this.http = http;
        this.actions$ = actions$;
        this.menuResponseHandler = menuResponseHandler;
        this.fetchMenuFromBackend = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_menu_actions__WEBPACK_IMPORTED_MODULE_5__["UPDATE_MENU_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((updateMenuAction) => {
            return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].hostUrl}/${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].applicationName}/menu/find`, {
                'params': new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category', updateMenuAction.payload.toString())
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((menu) => {
                return this.menuResponseHandler.handleSuccess(menu);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((errorRes) => {
                return this.menuResponseHandler.handleFailure(errorRes);
            }));
        }));
    }
}
MenuEffects.ɵfac = function MenuEffects_Factory(t) { return new (t || MenuEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_response_handler_menu_response_handler__WEBPACK_IMPORTED_MODULE_7__["MenuResponseHandler"])); };
MenuEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MenuEffects, factory: MenuEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], MenuEffects.prototype, "fetchMenuFromBackend", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MenuEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _shared_services_response_handler_menu_response_handler__WEBPACK_IMPORTED_MODULE_7__["MenuResponseHandler"] }]; }, { fetchMenuFromBackend: [] }); })();


/***/ }),

/***/ "UoxR":
/*!*******************************************************************************!*\
  !*** ./src/app/meal-planner/recipes/recipe-detail/recipe-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_model_shopping_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/model/shopping-item-model */ "iP5Z");
/* harmony import */ var _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shopping-list/store/shopping-list.actions */ "cyko");
/* harmony import */ var _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user-mgmt/store/actions/user-display-preferences.actions */ "dZCj");
/* harmony import */ var src_app_shared_services_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/recipe.service */ "tseV");
/* harmony import */ var src_app_shared_services_optimization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/optimization.service */ "fW7f");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function RecipeDetailComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](": ", ingredient_r1.quantity.amount * ctx_r0.noOfPortions, " (", ingredient_r1.quantity.measure, ")");
} }
class RecipeDetailComponent {
    constructor(recipeService, optimizationService, router, store) {
        this.recipeService = recipeService;
        this.optimizationService = optimizationService;
        this.router = router;
        this.store = store;
    }
    ngOnInit() {
        this.optimizationTypeSelected = 'COST';
        /*
         * We need to know optimizationType selected by the user since the no of portions varies based on the optimization type.
         */
        this.store.select('userPreferences').subscribe((userPreferences) => {
            this.optimizationTypeSelected = userPreferences.optimizationTypeSelected;
        });
        /*
         * Select the recipe based on the ID and name.
         */
        this.store.select('userDisplayPreferences').subscribe((userDisplayPreferences) => {
            if (userDisplayPreferences.recipeSelected != null) {
                this.id = userDisplayPreferences.recipeSelected.id;
                this.recipeSelected = this.recipeService.getRecipeById(this.id);
                this.noOfPortions = this.optimizationService.getPortionCountByOptimizationTypeMealName(this.optimizationTypeSelected, this.recipeSelected.name);
            }
        });
    }
    /*
     * When 'Add to Shopping List' is clicked, show shopping list section, and dispatch a ShoppingList action.
     */
    onAddToShoppingList() {
        this.store.dispatch(new _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_3__["ShowShoppingList"]());
        this.shoppingItems = new Array();
        this.recipeSelected.ingredients.forEach((ingredient) => {
            this.shoppingItems.push(new src_app_shared_model_shopping_item_model__WEBPACK_IMPORTED_MODULE_1__["ShoppingItem"](ingredient.name, ingredient.quantity.amount * this.noOfPortions, ingredient.quantity.measure, (ingredient.labels === undefined) ? [this.recipeSelected.name] : ingredient.labels));
        });
        this.store.dispatch(new _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_2__["AddIngredients"](this.shoppingItems));
    }
    ngOnDestroy() { }
}
RecipeDetailComponent.ɵfac = function RecipeDetailComponent_Factory(t) { return new (t || RecipeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_optimization_service__WEBPACK_IMPORTED_MODULE_5__["OptimizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
RecipeDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeDetailComponent, selectors: [["app-recipe-detail"]], decls: 19, vars: 6, consts: [[1, "mt-md-0", "mt-sm-5"], [1, "img-responsive", 2, "max-height", "300px", 3, "src", "alt"], [3, "href"], ["for", "noOfPortions"], ["type", "number", "id", "noOfPortions", "min", "1", 1, "col-lg-2", "col-md-3", "col-sm-2", "ml-1", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-dark", "my-2", 3, "click"], [2, "text-align", "right"]], template: function RecipeDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Watch the tutorial here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No. of portions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecipeDetailComponent_Template_input_ngModelChange_9_listener($event) { return ctx.noOfPortions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RecipeDetailComponent_tr_14_Template, 5, 3, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_button_click_17_listener() { return ctx.onAddToShoppingList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add ingredients to shopping list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.recipeSelected.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.recipeSelected.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipeSelected.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.recipeSelected.tutorialPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.noOfPortions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipeSelected.ingredients);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9yZWNpcGVzL3JlY2lwZS1kZXRhaWwvcmVjaXBlLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-detail',
                templateUrl: './recipe-detail.component.html',
                styleUrls: ['./recipe-detail.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] }, { type: src_app_shared_services_optimization_service__WEBPACK_IMPORTED_MODULE_5__["OptimizationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, null); })();


/***/ }),

/***/ "Vt1l":
/*!**************************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/optimized-meal-plan/optimized-meal-plan.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: OptimizedMealPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizedMealPlanComponent", function() { return OptimizedMealPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _meal_planner_recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../meal-planner/recipes/store/actions/recipes.actions */ "nDj3");
/* harmony import */ var _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user-mgmt/store/actions/user-display-preferences.actions */ "dZCj");
/* harmony import */ var src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/http-request-status.enum */ "zl8S");
/* harmony import */ var src_app_shared_default_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/default-messages */ "q6cq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_services_optimization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/optimization.service */ "fW7f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _optimized_results_table_optimized_results_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./optimized-results-table/optimized-results-table.component */ "b5W3");











function OptimizedMealPlanComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.optimizationError, "\n");
} }
function OptimizedMealPlanComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sorry, the meals you have selected does not satisfy your daily nutrition requirements. Please choose a different meal plan.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
/*
 * This component has 2 sections:
 * Sec. 1: Display optimization results
 * Sec. 2: Handle optimization results (Get Recipe / Place Order)
 *
 * It handles 3 tasks:
 * (1) Allows the user to place online order/get recipe only if the below conditions are met:
 *     -> The optimized meal plans have state DISTINCT/OPTIMAL/FEASIBLE. All other states are negative i.e. a meal plan that satisfies all nutitional requirements could not be created for the selected meals.
 *     -> Either Optimized by Cost or Optimized by Quality was selected
 * (2) Reroute the user to either recipes section or online order section based on option selected. The correct secion is loaded based on the route.
 * (3) Display help text 'Select a different meal plan' if meal plan cannot be created from meals selected (optimization state !== DISTINCT | OPTIMAL | FEASIBLE)
 */
class OptimizedMealPlanComponent {
    constructor(router, store, route, optimizationService) {
        this.router = router;
        this.store = store;
        this.route = route;
        this.optimizationService = optimizationService;
        //We do not know if optimization is possible, set to true preemptively
        this.isOptimizationFeasible = true;
        this.defaultText = src_app_shared_default_messages__WEBPACK_IMPORTED_MODULE_4__["DefaultMessages"].mealPlan.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_3__["HttpRequestStatus"].NO_ACTION);
        this.responseReceived = false;
    }
    ngOnInit() {
        this.store.select('userPreferences').subscribe((userPrefs) => {
            this.userPreferences = userPrefs;
        });
        // Display optimized meal plan received from the backend.
        this.store.select('optimizedPlans').subscribe((optimizedMealPlans) => {
            switch (optimizedMealPlans.requestStatus) {
                case src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_3__["HttpRequestStatus"].NO_ACTION:
                    this.isOptimizationFeasible = true;
                    this.responseReceived = false;
                    this.defaultText = src_app_shared_default_messages__WEBPACK_IMPORTED_MODULE_4__["DefaultMessages"].mealPlan.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_3__["HttpRequestStatus"].NO_ACTION);
                    break;
                case src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_3__["HttpRequestStatus"].REQUEST_SENT:
                    this.isOptimizationFeasible = true;
                    this.responseReceived = false;
                    this.defaultText = src_app_shared_default_messages__WEBPACK_IMPORTED_MODULE_4__["DefaultMessages"].mealPlan.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_3__["HttpRequestStatus"].REQUEST_SENT);
                    break;
                case src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_3__["HttpRequestStatus"].RESPONSE_RECEIVED: {
                    this.defaultText = src_app_shared_default_messages__WEBPACK_IMPORTED_MODULE_4__["DefaultMessages"].mealPlan.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_3__["HttpRequestStatus"].RESPONSE_RECEIVED);
                    this.responseReceived = true;
                    //If there is an error, display error message.
                    if (optimizedMealPlans.error) {
                        this.optimizationError = optimizedMealPlans.error;
                    }
                    else {
                        //If there is no error, clear existing error first
                        this.optimizationError = null;
                        if (optimizedMealPlans.mealPlans) {
                            let optimizationState = optimizedMealPlans.mealPlans.optimizationState;
                            //Check if optimization was successful - one of the below 3 states
                            if (optimizationState === 'DISTINCT' ||
                                optimizationState === 'OPTIMAL' ||
                                optimizationState === 'FEASIBLE') {
                                this.isOptimizationFeasible = true;
                                this.costOptimizedPlan = this.optimizationService.getMealPlanByOptimizationType('COST', optimizedMealPlans.mealPlans);
                                this.qualityOptimizedPlan = this.optimizationService.getMealPlanByOptimizationType('QUALITY', optimizedMealPlans.mealPlans);
                            }
                            //If optimization was not successful. OptimizationState is not DISTINCT | OPTIMAL | FEASIBLE
                            else {
                                this.isOptimizationFeasible = false;
                            }
                        }
                    }
                }
            }
        });
    }
    /*
     * The user can perform one of the below actions - place online order / get recipe.
     */
    placeOrderSelected() {
        this.router.navigate(['meal-planner',
            { outlets: { mealoptimizer: 'meal-optimizer', onlineorder: ['online-order'] } }], { queryParams: this.route.snapshot.queryParams });
    }
    getRecipeSelected() {
        this.store.dispatch(new _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_2__["ShowRecipes"]());
        this.store.dispatch(new _meal_planner_recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateRequestStatus"](src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_3__["HttpRequestStatus"].REQUEST_SENT));
        this.store.dispatch(new _meal_planner_recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_1__["FetchRecipesStart"](this.userPreferences.mealSelected));
    }
    get allowUserToPlaceOrderOrGetRecipe() {
        if (this.userPreferences.optimizationTypeSelected &&
            this.userPreferences.optimizationTypeSelected !== 'orderInfo' &&
            this.isOptimizationFeasible &&
            this.responseReceived)
            return true;
        else
            return false;
    }
    ngOnDestroy() { }
}
OptimizedMealPlanComponent.ɵfac = function OptimizedMealPlanComponent_Factory(t) { return new (t || OptimizedMealPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_optimization_service__WEBPACK_IMPORTED_MODULE_7__["OptimizationService"])); };
OptimizedMealPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptimizedMealPlanComponent, selectors: [["app-optimized-meal-plan"]], decls: 11, vars: 8, consts: [["class", "row ml-4", 4, "ngIf"], [1, "row", "justify-content-start", "py-4"], [1, "w-80", "ml-4", 3, "costOptimizedPlan", "qualityOptimizedPlan", "isOptimizationFeasible", "defaultText"], [1, "col-12"], ["type", "button", "disabled", "", 1, "btn", "btn-dark", "m-2", 3, "hidden", "click"], ["type", "button", 1, "btn", "btn-dark", "m-2", 3, "hidden", "click"], [1, "row", "ml-4"]], template: function OptimizedMealPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OptimizedMealPlanComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OptimizedMealPlanComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Step 4: Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-optimized-results-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptimizedMealPlanComponent_Template_button_click_6_listener() { return ctx.placeOrderSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Place order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptimizedMealPlanComponent_Template_button_click_8_listener() { return ctx.getRecipeSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optimizationError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOptimizationFeasible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("costOptimizedPlan", ctx.costOptimizedPlan)("qualityOptimizedPlan", ctx.qualityOptimizedPlan)("isOptimizationFeasible", ctx.isOptimizationFeasible)("defaultText", ctx.defaultText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.allowUserToPlaceOrderOrGetRecipe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.allowUserToPlaceOrderOrGetRecipe);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _optimized_results_table_optimized_results_table_component__WEBPACK_IMPORTED_MODULE_9__["OptimizedResultsTableComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9tZWFsLW9wdGltaXplci9vcHRpbWl6ZWQtbWVhbC1wbGFuL29wdGltaXplZC1tZWFsLXBsYW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptimizedMealPlanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-optimized-meal-plan',
                templateUrl: './optimized-meal-plan.component.html',
                styleUrls: ['./optimized-meal-plan.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_shared_services_optimization_service__WEBPACK_IMPORTED_MODULE_7__["OptimizationService"] }]; }, null); })();


/***/ }),

/***/ "Z0I1":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/indexeddb/indexed-db.service.ts ***!
  \*****************************************************************/
/*! exports provided: IndexedDBService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedDBService", function() { return IndexedDBService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb */ "P0+2");




class IndexedDBService {
    constructor() {
        this.dbName = 'request-db';
        this.connectToDB();
    }
    connectToDB() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.db = yield Object(idb__WEBPACK_IMPORTED_MODULE_2__["openDB"])(this.dbName, 1, {
                upgrade(db) {
                    db.createObjectStore('failed-request-store');
                }
            });
        });
    }
    //Called inside ConnectionLossInterceptor
    addFailedRequest(failedRequest, tag) {
        return this.db.put('failed-request-store', failedRequest, tag);
    }
    deleteRequest(tag) {
        return this.db.delete('failed-request-store', tag);
    }
    getAllEntries() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let entries = new Map();
            let error;
            let request = this.db.transaction(['failed-request-store'], 'readonly')
                .objectStore('failed-request-store')
                .openCursor();
            yield request.then((event) => {
                if (event) {
                    let key = event.primaryKey;
                    let value = event.value;
                    entries.set(key, value);
                    event.continue();
                }
            })
                .catch((err) => error = err);
            return new Promise((resolve, reject) => {
                resolve(entries);
                reject(error);
            });
        });
    }
}
IndexedDBService.ɵfac = function IndexedDBService_Factory(t) { return new (t || IndexedDBService)(); };
IndexedDBService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IndexedDBService, factory: IndexedDBService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IndexedDBService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _app_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/store/reducers/app.reducer */ "3dq+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _meal_planner_meal_optimizer_store_effects_user_preferences_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meal-planner/meal-optimizer/store/effects/user-preferences.effects */ "iaPd");
/* harmony import */ var _app_meal_planner_meal_optimizer_store_effects_menu_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/meal-planner/meal-optimizer/store/effects/menu.effects */ "U+ib");
/* harmony import */ var _app_meal_planner_meal_optimizer_store_effects_order_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/meal-planner/meal-optimizer/store/effects/order.effects */ "kHXF");
/* harmony import */ var _app_meal_planner_recipes_store_effects_recipes_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/meal-planner/recipes/store/effects/recipes.effects */ "H6pW");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _app_app_info_app_info_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/app-info/app-info.module */ "Q52l");
/* harmony import */ var _app_meal_planner_meal_planner_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app/meal-planner/meal-planner.module */ "qgKl");
/* harmony import */ var _app_user_mgmt_user_mgmt_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/user-mgmt/user-mgmt.module */ "bgOi");
/* harmony import */ var _app_shared_core_core_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/shared/core/core.module */ "6fFp");
/* harmony import */ var _app_shared_services_interceptor_interceptors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app/shared/services/interceptor/interceptors */ "qUN2");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _app_shared_app_init__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../app/shared/app.init */ "36AY");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_shared_services_interceptor_interceptors__WEBPACK_IMPORTED_MODULE_18__["interceptorProviders"],
        { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JWT_OPTIONS"], useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JWT_OPTIONS"] },
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"],
        { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayContainer"], useClass: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["FullscreenOverlayContainer"] },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: _app_shared_app_init__WEBPACK_IMPORTED_MODULE_20__["initializeKeycloak"], multi: true, deps: [keycloak_angular__WEBPACK_IMPORTED_MODULE_19__["KeycloakService"]] }
    ], imports: [[
            _app_app_info_app_info_module__WEBPACK_IMPORTED_MODULE_14__["AppInfoModule"],
            _app_shared_core_core_module__WEBPACK_IMPORTED_MODULE_17__["CoreModule"],
            _app_meal_planner_meal_planner_module__WEBPACK_IMPORTED_MODULE_15__["MealPlannerModule"],
            _app_user_mgmt_user_mgmt_module__WEBPACK_IMPORTED_MODULE_16__["UserMgmtModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
            keycloak_angular__WEBPACK_IMPORTED_MODULE_19__["KeycloakAngularModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_app_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_5__["appReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_meal_planner_meal_optimizer_store_effects_user_preferences_effects__WEBPACK_IMPORTED_MODULE_9__["UserPreferencesEffects"], _app_meal_planner_meal_optimizer_store_effects_menu_effects__WEBPACK_IMPORTED_MODULE_10__["MenuEffects"], _app_meal_planner_meal_optimizer_store_effects_order_effects__WEBPACK_IMPORTED_MODULE_11__["OrderEffects"], _app_meal_planner_recipes_store_effects_recipes_effects__WEBPACK_IMPORTED_MODULE_12__["RecipesEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]], imports: [_app_app_info_app_info_module__WEBPACK_IMPORTED_MODULE_14__["AppInfoModule"],
        _app_shared_core_core_module__WEBPACK_IMPORTED_MODULE_17__["CoreModule"],
        _app_meal_planner_meal_planner_module__WEBPACK_IMPORTED_MODULE_15__["MealPlannerModule"],
        _app_user_mgmt_user_mgmt_module__WEBPACK_IMPORTED_MODULE_16__["UserMgmtModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
        keycloak_angular__WEBPACK_IMPORTED_MODULE_19__["KeycloakAngularModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]
                ],
                imports: [
                    _app_app_info_app_info_module__WEBPACK_IMPORTED_MODULE_14__["AppInfoModule"],
                    _app_shared_core_core_module__WEBPACK_IMPORTED_MODULE_17__["CoreModule"],
                    _app_meal_planner_meal_planner_module__WEBPACK_IMPORTED_MODULE_15__["MealPlannerModule"],
                    _app_user_mgmt_user_mgmt_module__WEBPACK_IMPORTED_MODULE_16__["UserMgmtModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
                    keycloak_angular__WEBPACK_IMPORTED_MODULE_19__["KeycloakAngularModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_app_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_5__["appReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_meal_planner_meal_optimizer_store_effects_user_preferences_effects__WEBPACK_IMPORTED_MODULE_9__["UserPreferencesEffects"], _app_meal_planner_meal_optimizer_store_effects_menu_effects__WEBPACK_IMPORTED_MODULE_10__["MenuEffects"], _app_meal_planner_meal_optimizer_store_effects_order_effects__WEBPACK_IMPORTED_MODULE_11__["OrderEffects"], _app_meal_planner_recipes_store_effects_recipes_effects__WEBPACK_IMPORTED_MODULE_12__["RecipesEffects"]])
                ],
                providers: [_app_shared_services_interceptor_interceptors__WEBPACK_IMPORTED_MODULE_18__["interceptorProviders"],
                    { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JWT_OPTIONS"], useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JWT_OPTIONS"] },
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"],
                    { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayContainer"], useClass: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["FullscreenOverlayContainer"] },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: _app_shared_app_init__WEBPACK_IMPORTED_MODULE_20__["initializeKeycloak"], multi: true, deps: [keycloak_angular__WEBPACK_IMPORTED_MODULE_19__["KeycloakService"]] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a03L":
/*!*******************************************************!*\
  !*** ./src/app/user-mgmt/user-mgmt-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UserMgmtRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMgmtRoutingModule", function() { return UserMgmtRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth-guard.service */ "Avrn");
/* harmony import */ var _user_mgmt_user_redirect_user_redirect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-mgmt/user-redirect/user-redirect.component */ "sNVY");






const userMgmtRoutes = [
    { path: 'meal-planner/user-redirect', canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]], component: _user_mgmt_user_redirect_user_redirect_component__WEBPACK_IMPORTED_MODULE_3__["UserRedirectComponent"]
    }
];
class UserMgmtRoutingModule {
}
UserMgmtRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserMgmtRoutingModule });
UserMgmtRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserMgmtRoutingModule_Factory(t) { return new (t || UserMgmtRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userMgmtRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserMgmtRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserMgmtRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userMgmtRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "awJM":
/*!****************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/store/reducers/menu.reducer.ts ***!
  \****************************************************************************/
/*! exports provided: menuReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuReducer", function() { return menuReducer; });
/* harmony import */ var src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/http-request-status.enum */ "zl8S");
/* harmony import */ var _actions_menu_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/menu.actions */ "82aV");


const defaultMenu = { itemList: null, error: null, requestStatus: src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].NO_ACTION };
function menuReducer(state = defaultMenu, action) {
    switch (action.type) {
        case _actions_menu_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MENU_SUCCESS"]:
            return Object.assign(Object.assign({}, state), { itemList: action.payload, error: null, requestStatus: src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].RESPONSE_RECEIVED });
        case _actions_menu_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MENU_FAIL"]:
            return Object.assign(Object.assign({}, state), { itemList: null, error: action.payload, requestStatus: src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].RESPONSE_RECEIVED });
        case _actions_menu_actions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_MENU"]:
            return defaultMenu;
        case _actions_menu_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_REQUEST_STATUS"]:
            return Object.assign(Object.assign({}, state), { requestStatus: action.payload });
        default: return state;
    }
}


/***/ }),

/***/ "b5W3":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/optimized-meal-plan/optimized-results-table/optimized-results-table.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: OptimizedResultsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizedResultsTableComponent", function() { return OptimizedResultsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/user-preferences.actions */ "2fHZ");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _order_info_order_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-info/order-info.component */ "14A0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _optimized_result_cost_optimized_result_cost_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./optimized-result-cost/optimized-result-cost.component */ "Ogt9");
/* harmony import */ var _optimized_result_quality_optimized_result_quality_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./optimized-result-quality/optimized-result-quality.component */ "E5JP");










const _c0 = ["optimizationResultsTab"];
function OptimizedResultsTableComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Meal Plan - Optimized by Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.defaultText);
} }
function OptimizedResultsTableComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-optimized-result-cost", 15);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("costOptimizedPlan", ctx_r3.costOptimizedPlan);
} }
function OptimizedResultsTableComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Meal Plan - Optimized by Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.defaultText);
} }
function OptimizedResultsTableComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-optimized-result-quality", 16);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qualityOptimizedPlan", ctx_r6.qualityOptimizedPlan);
} }
/*
 * This component has 3 sections (tabs):
 * OrderInfo : Displays the user inputs
 * Optimized by Cost : Displays Item name, portion and cost for meal plan optimized by Cost
 * Optimized by Quality : Displays Item name, portion and cost for meal plan optimized by Quality
 *
 * Tasks:
 * (1) Setup structure of the tabs
 * (2) Pass item info to the tabs optimized by Cost and optimized by Quality
 *     Technique used: attribute binding
 * (3) Update User Preferences with the name of the tab selected - this value is stored as optimizationTypeSelected.
 * (4) Disable tabs if the isOptimizationFeasible = false
 */
class OptimizedResultsTableComponent {
    constructor(store, breakpointObserver, renderer) {
        this.store = store;
        this.breakpointObserver = breakpointObserver;
        this.renderer = renderer;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        //Track the size of the window and stack tabs for sizes < large
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XLarge
        ]).subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall] ||
                state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small]) {
                this.renderer.addClass(this.optimizationResultsTab.nativeElement, 'flex-column');
            }
            else if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium] ||
                state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large] ||
                state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XLarge]) {
                this.renderer.removeClass(this.optimizationResultsTab.nativeElement, 'flex-column');
            }
        });
    }
    /*
     * Once a tab is selected, update user preferences (stored as optimizationTypeSelected)
     */
    onTabSelected(tabSelected) {
        this.store.dispatch(new _store_actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_1__["OptimizationTypeSelected"](tabSelected));
    }
    ngOnDestroy() { }
}
OptimizedResultsTableComponent.ɵfac = function OptimizedResultsTableComponent_Factory(t) { return new (t || OptimizedResultsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
OptimizedResultsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptimizedResultsTableComponent, selectors: [["app-optimized-results-table"]], viewQuery: function OptimizedResultsTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optimizationResultsTab = _t.first);
    } }, inputs: { costOptimizedPlan: "costOptimizedPlan", qualityOptimizedPlan: "qualityOptimizedPlan", isOptimizationFeasible: "isOptimizationFeasible", defaultText: "defaultText" }, decls: 24, vars: 8, consts: [[1, "w-80", "ml-4", "border"], [1, "nav", "nav-tabs"], ["optimizationResultsTab", ""], [1, "nav-item"], ["data-toggle", "tab", "href", "#orderInfo", 1, "nav-link", "active", 3, "click"], ["data-toggle", "tab", "href", "#optimizedByCost", 1, "nav-link", 3, "click"], ["data-toggle", "tab", "href", "#optimizedByQuality", 1, "nav-link", 3, "click"], [1, "tab-content"], ["id", "orderInfo", 1, "tab-pane", "active"], ["id", "optimizedByCost", 1, "tab-pane"], ["class", "row-fixed-height mx-5 mt-2", 4, "ngIf", "ngIfElse"], ["costOptimizedResult", ""], ["id", "optimizedByQuality", 1, "tab-pane"], ["qualityOptimizedResult", ""], [1, "row-fixed-height", "mx-5", "mt-2"], [3, "costOptimizedPlan"], [3, "qualityOptimizedPlan"]], template: function OptimizedResultsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptimizedResultsTableComponent_Template_a_click_4_listener() { return ctx.onTabSelected("orderInfo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " User's Choice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptimizedResultsTableComponent_Template_a_click_7_listener() { return ctx.onTabSelected("optimizedByCost"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Optimized by Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptimizedResultsTableComponent_Template_a_click_10_listener() { return ctx.onTabSelected("optimizedByQuality"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Optimized by Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ` ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-order-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OptimizedResultsTableComponent_div_17_Template, 5, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OptimizedResultsTableComponent_ng_template_18_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OptimizedResultsTableComponent_div_21_Template, 5, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OptimizedResultsTableComponent_ng_template_22_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.isOptimizationFeasible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.isOptimizationFeasible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.costOptimizedPlan)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.qualityOptimizedPlan)("ngIfElse", _r5);
    } }, directives: [_order_info_order_info_component__WEBPACK_IMPORTED_MODULE_4__["OrderInfoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _optimized_result_cost_optimized_result_cost_component__WEBPACK_IMPORTED_MODULE_6__["OptimizedResultCostComponent"], _optimized_result_quality_optimized_result_quality_component__WEBPACK_IMPORTED_MODULE_7__["OptimizedResultQualityComponent"]], styles: [".row-fixed-height[_ngcontent-%COMP%] {\r\n    height: 50vh;\r\n  }\r\n\r\n  .tab-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n\r\n  .tab-content[_ngcontent-%COMP%]    > .tab-pane[_ngcontent-%COMP%] {\r\n    display: block; \r\n    visibility: hidden;\r\n    margin-right: -100%;\r\n    width: 100%;\r\n  }\r\n\r\n  .tab-content[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbC1wbGFubmVyL21lYWwtb3B0aW1pemVyL29wdGltaXplZC1tZWFsLXBsYW4vb3B0aW1pemVkLXJlc3VsdHMtdGFibGUvb3B0aW1pemVkLXJlc3VsdHMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFRjtJQUNJLGNBQWMsRUFBRSwwQkFBMEI7SUFDMUMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9tZWFsLXBsYW5uZXIvbWVhbC1vcHRpbWl6ZXIvb3B0aW1pemVkLW1lYWwtcGxhbi9vcHRpbWl6ZWQtcmVzdWx0cy10YWJsZS9vcHRpbWl6ZWQtcmVzdWx0cy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1maXhlZC1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gIH1cclxuXHJcbiAgLnRhYi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuLnRhYi1jb250ZW50ID4gLnRhYi1wYW5lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiB1bmRvIFwiZGlzcGxheTogbm9uZTtcIiAqL1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudGFiLWNvbnRlbnQgPiAuYWN0aXZlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfSAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptimizedResultsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-optimized-results-table',
                templateUrl: './optimized-results-table.component.html',
                styleUrls: ['./optimized-results-table.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { costOptimizedPlan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], qualityOptimizedPlan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isOptimizationFeasible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], optimizationResultsTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['optimizationResultsTab']
        }] }); })();


/***/ }),

/***/ "bgOi":
/*!***********************************************!*\
  !*** ./src/app/user-mgmt/user-mgmt.module.ts ***!
  \***********************************************/
/*! exports provided: UserMgmtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMgmtModule", function() { return UserMgmtModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_mgmt_user_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-mgmt/user-mgmt-routing.module */ "a03L");
/* harmony import */ var _shared_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/core/core.module */ "6fFp");
/* harmony import */ var _user_redirect_user_redirect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-redirect/user-redirect.component */ "sNVY");






class UserMgmtModule {
}
UserMgmtModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserMgmtModule });
UserMgmtModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserMgmtModule_Factory(t) { return new (t || UserMgmtModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _user_mgmt_user_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserMgmtRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserMgmtModule, { declarations: [_user_redirect_user_redirect_component__WEBPACK_IMPORTED_MODULE_4__["UserRedirectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
        _user_mgmt_user_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserMgmtRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserMgmtModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_redirect_user_redirect_component__WEBPACK_IMPORTED_MODULE_4__["UserRedirectComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                    _user_mgmt_user_mgmt_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserMgmtRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "cyko":
/*!***************************************************************************!*\
  !*** ./src/app/meal-planner/shopping-list/store/shopping-list.actions.ts ***!
  \***************************************************************************/
/*! exports provided: ADD_INGREDIENT, ADD_INGREDIENTS, UPDATE_INGREDIENT, DELETE_INGREDIENT, START_EDIT, STOP_EDIT, CLEAR_SHOPPING_LIST, AddIngredient, AddIngredients, UpdateIngredient, DeleteIngredient, StartEdit, StopEdit, ClearShoppingList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENT", function() { return ADD_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENTS", function() { return ADD_INGREDIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INGREDIENT", function() { return UPDATE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_INGREDIENT", function() { return DELETE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_EDIT", function() { return START_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_EDIT", function() { return STOP_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_SHOPPING_LIST", function() { return CLEAR_SHOPPING_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredient", function() { return AddIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredients", function() { return AddIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIngredient", function() { return UpdateIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIngredient", function() { return DeleteIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEdit", function() { return StartEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopEdit", function() { return StopEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearShoppingList", function() { return ClearShoppingList; });
const ADD_INGREDIENT = 'ADD_INGREDIENT';
const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
const START_EDIT = 'START_EDIT';
const STOP_EDIT = 'STOP_EDIT';
const CLEAR_SHOPPING_LIST = 'CLEAR_SHOPPING_LIST';
class AddIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENT;
    }
}
class AddIngredients {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENTS;
    }
}
class UpdateIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_INGREDIENT;
    }
}
class DeleteIngredient {
    constructor() {
        this.type = DELETE_INGREDIENT;
    }
}
class StartEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = START_EDIT;
    }
}
class StopEdit {
    constructor() {
        this.type = STOP_EDIT;
    }
}
class ClearShoppingList {
    constructor() {
        this.type = CLEAR_SHOPPING_LIST;
    }
}


/***/ }),

/***/ "dK1+":
/*!*************************************************************!*\
  !*** ./src/app/app-info/contact-us/contact-us.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 16, vars: 0, consts: [[1, "justify-content-start", "my-4", "ml-1"], [1, "mt-1", "ml-1", "border", "col-md-10", "col-xs-12"], [1, "m-3"], [1, "mt-4"], ["for", "name", 1, "font-weight-bold"], ["type", "text", "id", "name", "name", "name", "placeholder", "Enter your name here (optional)", 1, "form-control", "w-100"], ["for", "comments", 1, "font-weight-bold"], ["rows", "4", "type", "text", "id", "comments", "name", "comments", "placeholder", "Enter your comments here", 1, "form-control", "mb-2", "w-100"], ["type", "submit", "value", "Send", 1, "mt-4"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We want it all - We want a booming business, we want raving fans, we want to hear from you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reach out to us, whether its for appreciation, criticism or even a rant!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name (optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1pbmZvL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dZCj":
/*!*****************************************************************************!*\
  !*** ./src/app/user-mgmt/store/actions/user-display-preferences.actions.ts ***!
  \*****************************************************************************/
/*! exports provided: UPDATE_OPTIMIZATION_MODE, SHOW_RECIPES, HIDE_RECIPES, SHOW_RECIPE_DETAIL, SHOW_SHOPPING_LIST, HIDE_SHOPPING_LIST, UPDATE_SHOPPING_LIST_MODE, RESET_USER_DISPLAY_PREFERENCES, UpdateOptimizationMode, ShowRecipes, HideRecipes, ShowRecipeDetail, ShowShoppingList, HideShoppingList, UpdateShoppingListMode, ResetUserDisplayPreferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_OPTIMIZATION_MODE", function() { return UPDATE_OPTIMIZATION_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_RECIPES", function() { return SHOW_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_RECIPES", function() { return HIDE_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_RECIPE_DETAIL", function() { return SHOW_RECIPE_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_SHOPPING_LIST", function() { return SHOW_SHOPPING_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_SHOPPING_LIST", function() { return HIDE_SHOPPING_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SHOPPING_LIST_MODE", function() { return UPDATE_SHOPPING_LIST_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_USER_DISPLAY_PREFERENCES", function() { return RESET_USER_DISPLAY_PREFERENCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOptimizationMode", function() { return UpdateOptimizationMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowRecipes", function() { return ShowRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideRecipes", function() { return HideRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowRecipeDetail", function() { return ShowRecipeDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowShoppingList", function() { return ShowShoppingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideShoppingList", function() { return HideShoppingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateShoppingListMode", function() { return UpdateShoppingListMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetUserDisplayPreferences", function() { return ResetUserDisplayPreferences; });
/*
 * This file deals with which sections of the meal planner must be displayed/hidden.
 * Switching between modes is also covered.
 */
const UPDATE_OPTIMIZATION_MODE = '[User display prefs] UPDATE_OPTIMIZATION_MODE';
const SHOW_RECIPES = '[User display prefs] SHOW_RECIPES';
const HIDE_RECIPES = '[User display prefs] HIDE_RECIPES';
const SHOW_RECIPE_DETAIL = '[User display prefs] SHOW_RECIPE_DETAIL';
const SHOW_SHOPPING_LIST = '[User display prefs] SHOW_SHOPPING_LIST';
const HIDE_SHOPPING_LIST = '[User display prefs] HIDE_SHOPPING_LIST';
const UPDATE_SHOPPING_LIST_MODE = '[User display prefs] UPDATE_SHOPPING_LIST_MODE';
const RESET_USER_DISPLAY_PREFERENCES = '[User display prefs] RESET_USER_DISPLAY_PREFERENCES';
class UpdateOptimizationMode {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_OPTIMIZATION_MODE;
    }
}
class ShowRecipes {
    constructor() {
        this.type = SHOW_RECIPES;
    }
}
class HideRecipes {
    constructor() {
        this.type = HIDE_RECIPES;
    }
}
class ShowRecipeDetail {
    constructor(payload) {
        this.payload = payload;
        this.type = SHOW_RECIPE_DETAIL;
    }
}
class ShowShoppingList {
    constructor() {
        this.type = SHOW_SHOPPING_LIST;
    }
}
class HideShoppingList {
    constructor() {
        this.type = HIDE_SHOPPING_LIST;
    }
}
class UpdateShoppingListMode {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_SHOPPING_LIST_MODE;
    }
}
class ResetUserDisplayPreferences {
    constructor() {
        this.type = RESET_USER_DISPLAY_PREFERENCES;
    }
}


/***/ }),

/***/ "ewRR":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/action-dispatcher.service.ts ***!
  \**************************************************************/
/*! exports provided: ActionDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDispatcher", function() { return ActionDispatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _meal_planner_meal_optimizer_store_actions_menu_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../meal-planner/meal-optimizer/store/actions/menu.actions */ "82aV");
/* harmony import */ var _meal_planner_meal_optimizer_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../meal-planner/meal-optimizer/store/actions/order.actions */ "T1QP");
/* harmony import */ var _meal_planner_recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../meal-planner/recipes/store/actions/recipes.actions */ "nDj3");
/* harmony import */ var _http_request_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-request-status.enum */ "zl8S");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");







class ActionDispatcher {
    constructor(store) {
        this.store = store;
    }
    dispatchAction(request, tag) {
        //Logic to dispatch action based on tag
        switch (tag) {
            /*
             * NOTE: Logic for tag 'categories-fetch' is not included since this request is never stored in failed request db.
             * The meal-planner/meal-optimizer page is loaded only if the connection is available.
            */
            case 'menu-find': {
                let dietType = request.params.map.get('category').toString();
                this.store.dispatch(new _meal_planner_meal_optimizer_store_actions_menu_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateMenuStart"](dietType));
                break;
            }
            case 'orders-user':
            case 'orders-guest':
                {
                    this.store.dispatch(new _meal_planner_meal_optimizer_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateRequestStatus"](_http_request_status_enum__WEBPACK_IMPORTED_MODULE_4__["HttpRequestStatus"].REQUEST_SENT));
                    let orderRequest = request.body;
                    this.store.dispatch(new _meal_planner_meal_optimizer_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_2__["SaveOrderStart"](orderRequest));
                    break;
                }
            case 'recipe-find': {
                let itemNames = request.params.map.get('names');
                this.store.dispatch(new _meal_planner_recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_3__["FetchRecipesStart"](itemNames));
                break;
            }
        }
        return;
    }
}
ActionDispatcher.ɵfac = function ActionDispatcher_Factory(t) { return new (t || ActionDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
ActionDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActionDispatcher, factory: ActionDispatcher.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_mgmt_store_actions_user_mgmt_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user-mgmt/store/actions/user-mgmt.actions */ "SHFq");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function HeaderComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(store, router, keyCloakService) {
        this.store = store;
        this.router = router;
        this.keyCloakService = keyCloakService;
    }
    ngOnInit() {
        this.store.select('authenticatedUser').subscribe((authenticatedUser) => {
            if (!authenticatedUser.error)
                this.authenticatedUser = authenticatedUser.user;
        });
    }
    viewMealPlanner() {
        this.router.navigate(['/meal-optimizer'], { queryParams: { mode: 'create' } });
    }
    logout() {
        //Clear User state
        this.store.dispatch(new src_app_user_mgmt_store_actions_user_mgmt_actions__WEBPACK_IMPORTED_MODULE_1__["Logout"]());
        //Logout of Keycloak
        this.keyCloakService.logout(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}:${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiPort}/`);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_5__["KeycloakService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 23, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "al-navbar", "fixed-top"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#primaryNav", "aria-controls", "primaryNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "primaryNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/app-info/home", 1, "nav-link"], ["routerLink", "/app-info/contact-us", 1, "nav-link"], [1, "nav-item", "active"], ["routerLink", "/meal-planner/user-redirect", 1, "nav-link", 3, "hidden"], ["routerLink", "/meal-planner", 1, "nav-link"], ["class", "nav-link", 3, "click", 4, "ngIf", "ngIfElse"], ["loggedOut", ""], [1, "nav-link", 3, "click"], ["routerLink", "/meal-planner/user-redirect", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MEAL OPTIMIZER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Register/Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Meal Planner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_a_20_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_ng_template_21_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.authenticatedUser.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticatedUser.loggedIn)("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".al-navbar[_ngcontent-%COMP%] {\r\n    border-bottom:1px solid #f0f0f0;\r\n    background:#fff;\r\n    box-shadow:0 0 3px #f0f0f0;\r\n}\r\n.al-navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    font-weight:600;\r\n}\r\n.al-navbar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n.al-navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    border-radius:0;\r\n    border-color:#f0f0f0;\r\n    box-shadow:0 0 2px #f0f0f0;\r\n}\r\n.al-navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color:#999;\r\n}\r\n.al-navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color:#fff;\r\n    background:#D95D39;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbC1uYXZiYXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2YwZjBmMDtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGJveC1zaGFkb3c6MCAwIDNweCAjZjBmMGYwO1xyXG59XHJcbi5hbC1uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbn1cclxuLmFsLW5hdmJhciAuYWN0aXZlIGEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFsLW5hdmJhciAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBib3JkZXItcmFkaXVzOjA7XHJcbiAgICBib3JkZXItY29sb3I6I2YwZjBmMDtcclxuICAgIGJveC1zaGFkb3c6MCAwIDJweCAjZjBmMGYwO1xyXG59XHJcbi5hbC1uYXZiYXIgLmRyb3Bkb3duLW1lbnUgYSB7XHJcbiAgICBjb2xvcjojOTk5O1xyXG59XHJcbi5hbC1uYXZiYXIgLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZDojRDk1RDM5O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_5__["KeycloakService"] }]; }, null); })();


/***/ }),

/***/ "fVwP":
/*!******************************************************************************!*\
  !*** ./src/app/user-mgmt/store/reducers/user-display-preferences.reducer.ts ***!
  \******************************************************************************/
/*! exports provided: userDisplayPreferencesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDisplayPreferencesReducer", function() { return userDisplayPreferencesReducer; });
/* harmony import */ var _actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user-display-preferences.actions */ "dZCj");
/* harmony import */ var _shared_optimization_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/optimization-mode.enum */ "HDOF");
/* harmony import */ var _shared_shopping_list_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shopping-list-mode.enum */ "vyhQ");



const defaultPrefs = {
    optimizationMode: _shared_optimization_mode_enum__WEBPACK_IMPORTED_MODULE_1__["OptimizationMode"].CREATE,
    showRecipes: false,
    recipeSelected: null,
    showShoppingList: false,
    shoppingListMode: _shared_shopping_list_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ShoppingListMode"].ADD
};
function userDisplayPreferencesReducer(state = defaultPrefs, action) {
    switch (action.type) {
        case _actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_OPTIMIZATION_MODE"]:
            return Object.assign(Object.assign({}, state), { optimizationMode: action.payload, recipeSelected: null });
        case _actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_RECIPES"]:
            return Object.assign(Object.assign({}, state), { showRecipes: true, recipeSelected: null });
        case _actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["HIDE_RECIPES"]:
            return Object.assign(Object.assign({}, state), { showRecipes: false, recipeSelected: null });
        case _actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_RECIPE_DETAIL"]:
            return Object.assign(Object.assign({}, state), { showRecipes: true, recipeSelected: action.payload });
        case _actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_SHOPPING_LIST"]:
            return Object.assign(Object.assign({}, state), { showShoppingList: true });
        case _actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["HIDE_SHOPPING_LIST"]:
            return Object.assign(Object.assign({}, state), { showShoppingList: false });
        case _actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SHOPPING_LIST_MODE"]:
            return Object.assign(Object.assign({}, state), { shoppingListMode: action.payload });
        case _actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_0__["RESET_USER_DISPLAY_PREFERENCES"]:
            return defaultPrefs;
        default:
            return state;
    }
}


/***/ }),

/***/ "fW7f":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/optimization.service.ts ***!
  \*********************************************************/
/*! exports provided: OptimizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizationService", function() { return OptimizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _optimization_mapping_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../optimization-mapping.enum */ "RLRI");



class OptimizationService {
    constructor() { }
    getMealPlanByOptimizationType(optimizationType, optimizedMealPlans) {
        this.optimizedMealPlans = optimizedMealPlans;
        let mealPlanOptimizedByType;
        optimizedMealPlans.mealPlan.forEach((mealPlan) => {
            if (optimizationType === _optimization_mapping_enum__WEBPACK_IMPORTED_MODULE_1__["OptimizationTypeMapping"][mealPlan.optimizationType.toString()]) {
                mealPlanOptimizedByType = { mealList: mealPlan.meals, planCost: mealPlan.mealPlanCost, optimizationType: optimizationType };
            }
        });
        return mealPlanOptimizedByType;
    }
    getPortionCountByOptimizationTypeMealName(optimizationType, mealName) {
        var portionCount = 0;
        this.optimizedMealPlans.mealPlan.forEach((mealPlan) => {
            if (optimizationType === _optimization_mapping_enum__WEBPACK_IMPORTED_MODULE_1__["OptimizationSelectionMapping"][mealPlan.optimizationType.toString()]) {
                mealPlan.meals.forEach((meal) => {
                    if (mealName.toLowerCase() === meal.itemName.toLowerCase())
                        portionCount = meal.portion;
                });
            }
        });
        return portionCount;
    }
}
OptimizationService.ɵfac = function OptimizationService_Factory(t) { return new (t || OptimizationService)(); };
OptimizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OptimizationService, factory: OptimizationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptimizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fXxp":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/error-handler/app-error-handler.ts ***!
  \********************************************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler */ "pQOK");
/* harmony import */ var _overlay_display_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../overlay-display.service */ "xIKZ");
/* harmony import */ var _connection_status_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connection-status-handler.service */ "QAkm");





//Handles server(HTTP call) and client errors. Called from inside ErrorInterceptor.
class AppErrorHandler extends _error_handler__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"] {
    constructor(overlayDisplayService, connectionStatusHandlerService) {
        super();
        this.overlayDisplayService = overlayDisplayService;
        this.connectionStatusHandlerService = connectionStatusHandlerService;
    }
    handleError(status) {
        //Display the below error only is the connection is available.
        if (this.connectionStatusHandlerService.getConnectionStatus()) {
            if ((status === undefined) || //Incase of ErrorEvent - client errors
                (status !== undefined && (status === 0 || status === 404))) { //Incase of HttpErrorResponse - Server errors from backend
                this.overlayDisplayService.showOverlay('There was an error. This was not supposed to happen. We\'re sorry.. Our engineers are hard at work fixing your problem. We will notify you as soon as we have a fix.');
            }
        }
        return super.handleError();
    }
}
AppErrorHandler.ɵfac = function AppErrorHandler_Factory(t) { return new (t || AppErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_overlay_display_service__WEBPACK_IMPORTED_MODULE_2__["OverlayDisplayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_connection_status_handler_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionStatusHandlerService"])); };
AppErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppErrorHandler, factory: AppErrorHandler.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _overlay_display_service__WEBPACK_IMPORTED_MODULE_2__["OverlayDisplayService"] }, { type: _connection_status_handler_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionStatusHandlerService"] }]; }, null); })();


/***/ }),

/***/ "hKO6":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/services/response-handler/recipe-response-handler.ts ***!
  \*****************************************************************************/
/*! exports provided: RecipeResponseHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeResponseHandler", function() { return RecipeResponseHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _meal_planner_recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../meal-planner/recipes/store/actions/recipes.actions */ "nDj3");




class RecipeResponseHandler {
    constructor() { }
    handleSuccess(recipes) {
        return new _meal_planner_recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_2__["FetchRecipesSuccess"](recipes);
    }
    handleFailure(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _meal_planner_recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_2__["FetchRecipesFail"](errorResponse));
    }
}
RecipeResponseHandler.ɵfac = function RecipeResponseHandler_Factory(t) { return new (t || RecipeResponseHandler)(); };
RecipeResponseHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecipeResponseHandler, factory: RecipeResponseHandler.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeResponseHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iP5Z":
/*!*****************************************************!*\
  !*** ./src/app/shared/model/shopping-item-model.ts ***!
  \*****************************************************/
/*! exports provided: ShoppingItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingItem", function() { return ShoppingItem; });
class ShoppingItem {
    constructor(name, amount, measure, labels) {
        this.name = name;
        this.amount = amount;
        this.measure = measure;
        this.labels = labels;
    }
}


/***/ }),

/***/ "iaPd":
/*!***************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/store/effects/user-preferences.effects.ts ***!
  \***************************************************************************************/
/*! exports provided: UserPreferencesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPreferencesEffects", function() { return UserPreferencesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user-preferences.actions */ "2fHZ");
/* harmony import */ var _actions_menu_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/menu.actions */ "82aV");









class UserPreferencesEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.dietTypeChanged = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_4__["EDIT_DIET_TYPE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((editDietTypeAction) => {
            let dietType = editDietTypeAction.payload;
            return new _actions_menu_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateMenuStart"](dietType);
        }));
    }
}
UserPreferencesEffects.ɵfac = function UserPreferencesEffects_Factory(t) { return new (t || UserPreferencesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"])); };
UserPreferencesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserPreferencesEffects, factory: UserPreferencesEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserPreferencesEffects.prototype, "dietTypeChanged", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserPreferencesEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }]; }, { dietTypeChanged: [] }); })();


/***/ }),

/***/ "iamr":
/*!********************************************!*\
  !*** ./src/app/shared/model/user.model.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(username, firstName, lastName, email, token, loggedIn, preferredDietType, address, nutrientMinLimits, nutrientMaxLimits) {
        this.loggedIn = false;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.preferredDietType = preferredDietType;
        this.address = address;
        this.nutrientMaxLimits = nutrientMaxLimits;
        this.nutrientMinLimits = nutrientMinLimits;
        this.token = token;
        this.loggedIn = loggedIn;
    }
}


/***/ }),

/***/ "ic8S":
/*!************************************************************************!*\
  !*** ./src/app/shared/core/custom-overlay/custom-overlay.component.ts ***!
  \************************************************************************/
/*! exports provided: CustomOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOverlayComponent", function() { return CustomOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_display_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/display.service */ "Aax3");
/* harmony import */ var _services_overlay_display_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/overlay-display.service */ "xIKZ");




class CustomOverlayComponent {
    constructor(overlayDisplayService, message) {
        this.overlayDisplayService = overlayDisplayService;
        this.message = message;
    }
    ngOnInit() {
    }
    hideOverlayDisplay() {
        this.overlayDisplayService.hideOverlay();
    }
}
CustomOverlayComponent.ɵfac = function CustomOverlayComponent_Factory(t) { return new (t || CustomOverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_overlay_display_service__WEBPACK_IMPORTED_MODULE_2__["OverlayDisplayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_display_service__WEBPACK_IMPORTED_MODULE_1__["CONTAINER_DATA"])); };
CustomOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomOverlayComponent, selectors: [["app-custom-overlay"]], decls: 6, vars: 1, consts: [[1, "overlay"], [1, "grey"], [1, "white"], [3, "click"]], template: function CustomOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomOverlayComponent_Template_button_click_4_listener() { return ctx.hideOverlayDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".overlay[_ngcontent-%COMP%] {\r\n    background-color: #e9e9e9;\r\n    opacity: 0.5;\r\n}\r\n.grey[_ngcontent-%COMP%] {\r\n    background-color: #000000;\r\n    top: 20%;\r\n    right: 20%;\r\n    bottom: 20%;\r\n    left: 20%;\r\n    opacity: 1; \r\n    position: absolute; \r\n}\r\n.white[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-style: bold;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvcmUvY3VzdG9tLW92ZXJsYXkvY3VzdG9tLW92ZXJsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29yZS9jdXN0b20tb3ZlcmxheS9jdXN0b20tb3ZlcmxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uZ3JleSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICByaWdodDogMjAlO1xyXG4gICAgYm90dG9tOiAyMCU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICBvcGFjaXR5OiAxOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbn1cclxuLndoaXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomOverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-overlay',
                templateUrl: './custom-overlay.component.html',
                styleUrls: ['./custom-overlay.component.css']
            }]
    }], function () { return [{ type: _services_overlay_display_service__WEBPACK_IMPORTED_MODULE_2__["OverlayDisplayService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_services_display_service__WEBPACK_IMPORTED_MODULE_1__["CONTAINER_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "jRjh":
/*!***************************************************************!*\
  !*** ./src/app/user-mgmt/store/reducers/user-mgmt.reducer.ts ***!
  \***************************************************************/
/*! exports provided: userMgmtReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userMgmtReducer", function() { return userMgmtReducer; });
/* harmony import */ var _shared_model_user_builder_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/model/user-builder.model */ "ECCw");
/* harmony import */ var _actions_user_mgmt_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user-mgmt.actions */ "SHFq");


const defaultUser = {
    user: new _shared_model_user_builder_model__WEBPACK_IMPORTED_MODULE_0__["UserBuilder"]('guest').setLoggedIn(false).build(),
    error: null
};
function userMgmtReducer(state = defaultUser, action) {
    switch (action.type) {
        case _actions_user_mgmt_actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"]:
            return Object.assign(Object.assign({}, state), { user: action.payload, error: null });
        case _actions_user_mgmt_actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_ERROR"]:
            return Object.assign(Object.assign({}, state), { user: null, error: action.payload });
        case _actions_user_mgmt_actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]:
            return Object.assign(Object.assign({}, state), { user: new _shared_model_user_builder_model__WEBPACK_IMPORTED_MODULE_0__["UserBuilder"]('guest').setLoggedIn(false).build(), error: null });
        default:
            return state;
    }
}


/***/ }),

/***/ "jdH+":
/*!*************************************************************!*\
  !*** ./src/app/meal-planner/meal-planner.routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MealPlannerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealPlannerRoutingModule", function() { return MealPlannerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_can_exit_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/can-exit-page.service */ "vQm+");
/* harmony import */ var _shared_services_user_diet_type_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-diet-type-resolver.service */ "Iu6Z");
/* harmony import */ var _meal_planner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meal-planner.component */ "nLIy");







const mealPlannerRoutes = [
    { path: 'meal-planner', component: _meal_planner_component__WEBPACK_IMPORTED_MODULE_4__["MealPlannerComponent"], canDeactivate: [_shared_services_can_exit_page_service__WEBPACK_IMPORTED_MODULE_2__["CanExitPageService"]], resolve: { userDietTypes: _shared_services_user_diet_type_resolver_service__WEBPACK_IMPORTED_MODULE_3__["UseDietTypeResolver"] } }
];
class MealPlannerRoutingModule {
}
MealPlannerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MealPlannerRoutingModule });
MealPlannerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MealPlannerRoutingModule_Factory(t) { return new (t || MealPlannerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(mealPlannerRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MealPlannerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealPlannerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(mealPlannerRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kHXF":
/*!****************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/store/effects/order.effects.ts ***!
  \****************************************************************************/
/*! exports provided: OrderEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEffects", function() { return OrderEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_order_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/order.actions */ "T1QP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_services_response_handler_order_response_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/response-handler/order-response-handler */ "14M6");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");











class OrderEffects {
    constructor(http, actions$, orderResponseHandler, store) {
        this.http = http;
        this.actions$ = actions$;
        this.orderResponseHandler = orderResponseHandler;
        this.store = store;
        this.placeOrder = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_4__["SAVE_ORDER_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((createOrderAction) => {
            /*
             * If the user is logged in, the url to get meal plan is `${environment.hostUrl}/${environment.applicationName}/orders/user/save`
             * If the user is not logged in (user is guest), the url to get meal plan is `${environment.hostUrl}/${environment.applicationName}/orders/guest/compute`
             */
            if (this.authenticatedUser.loggedIn) {
                this.url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].hostUrl}/${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationName}/orders/user/save`;
            }
            else {
                this.url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].hostUrl}/${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].applicationName}/orders/guest/compute`;
            }
            return this.http.post(this.url, createOrderAction.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((optimizedMealPlans) => {
                return this.orderResponseHandler.handleSuccess(optimizedMealPlans);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorRes) => {
                return this.orderResponseHandler.handleFailure(errorRes);
            }));
        }));
        this.store.select('authenticatedUser').subscribe((authenticatedUser) => {
            this.authenticatedUser = authenticatedUser.user;
        });
    }
}
OrderEffects.ɵfac = function OrderEffects_Factory(t) { return new (t || OrderEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_response_handler_order_response_handler__WEBPACK_IMPORTED_MODULE_7__["OrderResponseHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"])); };
OrderEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderEffects, factory: OrderEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], OrderEffects.prototype, "placeOrder", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _shared_services_response_handler_order_response_handler__WEBPACK_IMPORTED_MODULE_7__["OrderResponseHandler"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }]; }, { placeOrder: [] }); })();


/***/ }),

/***/ "kmKP":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _model_nutrient_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/nutrient.model */ "mvfM");
/* harmony import */ var _model_user_builder_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/user-builder.model */ "ECCw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! keycloak-angular */ "aTx8");









class UserService {
    constructor(http, keycloakService) {
        this.http = http;
        this.keycloakService = keycloakService;
    }
    fetchAllUsernames() {
        const url = '/mealoptimizer/user/fetchAllUsernames';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorRes) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes.error.error + errorRes.error.message);
        }));
    }
    getDefaultNutrientLimits() {
        const defaultNutrients = new Array();
        defaultNutrients.push(new _model_nutrient_model__WEBPACK_IMPORTED_MODULE_4__["Nutrient"]('calories', 2000, 2400, 'cal'), new _model_nutrient_model__WEBPACK_IMPORTED_MODULE_4__["Nutrient"]('carbs', 105, 500, 'g'), new _model_nutrient_model__WEBPACK_IMPORTED_MODULE_4__["Nutrient"]('protein', 20, 200, 'g'), new _model_nutrient_model__WEBPACK_IMPORTED_MODULE_4__["Nutrient"]('fat', 5, 80, 'g'), new _model_nutrient_model__WEBPACK_IMPORTED_MODULE_4__["Nutrient"]('sodium', 30, 5000, 'mg'), new _model_nutrient_model__WEBPACK_IMPORTED_MODULE_4__["Nutrient"]('calcium', 100, 5000, 'mg'));
        return defaultNutrients;
    }
    // The nutrient min-max elements for each user is stored as { nutrientName, min, max }
    // We split it into 2 separate objects - { nutrientName, min } and { nutrientName, max} to mae it easier to handle. 
    parseNutrientLimits(limitInfo) {
        let nutrientMinLimitMap = new Map();
        let nutrientMaxLimitMap = new Map();
        limitInfo.forEach((nutrient) => {
            nutrientMinLimitMap.set(nutrient.name, nutrient.min);
            nutrientMaxLimitMap.set(nutrient.name, nutrient.max);
        });
        //return { nutrientMinLimits : this.convertMapToObj(nutrientMinLimitMap), nutrientMaxLimits: this.convertMapToObj(nutrientMaxLimitMap)};
        return { nutrientMinLimits: Object.fromEntries(nutrientMinLimitMap), nutrientMaxLimits: Object.fromEntries(nutrientMaxLimitMap) };
    }
    parseAuthenticatedUserDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let authenticatedUserBuilder = new _model_user_builder_model__WEBPACK_IMPORTED_MODULE_5__["UserBuilder"](this.keycloakService.getUsername());
            let isLoggedIn = yield this.keycloakService.isLoggedIn();
            let token = yield this.keycloakService.getToken();
            authenticatedUserBuilder.setLoggedIn(isLoggedIn);
            authenticatedUserBuilder.setToken(token);
            return authenticatedUserBuilder.build();
        });
    }
    parseUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let userProfile = yield this.keycloakService.loadUserProfile();
            return new _model_user_builder_model__WEBPACK_IMPORTED_MODULE_5__["UserBuilder"](userProfile.username)
                .setFirstName(userProfile.firstName)
                .setLastName(userProfile.lastName)
                .setEmail(userProfile.email)
                .build();
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_7__["KeycloakService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_7__["KeycloakService"] }]; }, null); })();


/***/ }),

/***/ "l3Z1":
/*!***********************************************************!*\
  !*** ./src/app/meal-planner/recipes/recipes.component.ts ***!
  \***********************************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_default_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/default-messages */ "q6cq");
/* harmony import */ var src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/http-request-status.enum */ "zl8S");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "yV0c");
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ "/QR6");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "UoxR");









function RecipesComponent_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recipe-start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipesComponent_div_4_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recipe-detail");
} }
function RecipesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-recipe-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RecipesComponent_div_4_div_7_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RecipesComponent_div_4_ng_template_8_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipes", ctx_r0.recipes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.recipeSelected)("ngIfElse", _r2);
} }
/*
 * This component has 2 sections :
 * RecipeList : List of recipes for the meals chosen. It is composed of 4 RecipeItems
 * RecipeStart : Displays a help text. This section is replaced with RecipeDetail as soon as a recipe is selected.
 *
 * Transition from RecipeStart -> RecipeDetail: When a RecipeItem is clicked, the route /meal-planner/recipes/recipeID is loaded.
 * RecipeStart is replaced with RecipeDetail for recipeID.
 */
class RecipesComponent {
    constructor(store) {
        this.store = store;
        this.defaultText = src_app_shared_default_messages__WEBPACK_IMPORTED_MODULE_1__["DefaultMessages"].recipe.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_2__["HttpRequestStatus"].NO_ACTION);
        this.recipeSelected = false;
    }
    ngOnInit() {
        this.store.select('recipes').subscribe((recipes) => {
            switch (recipes.requestStatus) {
                case src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_2__["HttpRequestStatus"].NO_ACTION:
                    this.defaultText = src_app_shared_default_messages__WEBPACK_IMPORTED_MODULE_1__["DefaultMessages"].recipe.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_2__["HttpRequestStatus"].NO_ACTION);
                    break;
                case src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_2__["HttpRequestStatus"].REQUEST_SENT:
                    this.defaultText = src_app_shared_default_messages__WEBPACK_IMPORTED_MODULE_1__["DefaultMessages"].recipe.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_2__["HttpRequestStatus"].REQUEST_SENT);
                    break;
                case src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_2__["HttpRequestStatus"].RESPONSE_RECEIVED:
                    this.defaultText = src_app_shared_default_messages__WEBPACK_IMPORTED_MODULE_1__["DefaultMessages"].recipe.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_2__["HttpRequestStatus"].RESPONSE_RECEIVED);
                    if (!recipes.error)
                        this.recipes = recipes.recipes;
                    break;
            }
        });
        this.store.select('userDisplayPreferences').subscribe((userDisplayPreferences) => {
            this.recipeSelected = (userDisplayPreferences.recipeSelected !== null) ? true : false;
        });
    }
}
RecipesComponent.ɵfac = function RecipesComponent_Factory(t) { return new (t || RecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
RecipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipesComponent, selectors: [["app-recipes"]], decls: 5, vars: 2, consts: [[1, "row", "mt-4", "ml-1"], [1, "col-md-11"], [2, "text-align", "center"], [4, "ngIf"], [1, "row", "justify-content-start", "py-4"], [1, "row", "custom-layout", "justify-content-between", "ml-4"], [1, "col-xs-11", "col-md-4", "recipe-list-layout"], [3, "recipes"], [1, "col-xs-11", "col-md-7"], [4, "ngIf", "ngIfElse"], ["recipe_detail", ""]], template: function RecipesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecipesComponent_div_4_Template, 10, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.defaultText, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recipes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"], _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__["RecipeStartComponent"], _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__["RecipeDetailComponent"]], styles: ["@media only screen and (min-width: 768px) {\r\n\t.custom-layout[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n\t.custom-layout[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n\t}\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n\t.recipe-list-layout[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n\t.recipe-list-layout[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbC1wbGFubmVyL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0M7UUFDTyxhQUFhO1FBQ2IsbUJBQW1CO0NBQzFCO0FBQ0Q7O0FBRUE7Q0FDQztRQUNPLGFBQWE7UUFDYixzQkFBc0I7Q0FDN0I7QUFDRDs7QUFFQTtDQUNDO1FBQ08sYUFBYTtRQUNiLG1CQUFtQjtDQUMxQjtBQUNEOztBQUVBO0NBQ0M7UUFDTyxhQUFhO1FBQ2Isc0JBQXNCO0NBQzdCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9tZWFsLXBsYW5uZXIvcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblx0LmN1c3RvbS1sYXlvdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHQuY3VzdG9tLWxheW91dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cdC5yZWNpcGUtbGlzdC1sYXlvdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHQucmVjaXBlLWxpc3QtbGF5b3V0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipes',
                templateUrl: './recipes.component.html',
                styleUrls: ['./recipes.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "ljvv":
/*!***************************************************************************!*\
  !*** ./src/app/shared/services/response-handler/menu-response-handler.ts ***!
  \***************************************************************************/
/*! exports provided: MenuResponseHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuResponseHandler", function() { return MenuResponseHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _meal_planner_meal_optimizer_store_actions_menu_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../meal-planner/meal-optimizer/store/actions/menu.actions */ "82aV");




class MenuResponseHandler {
    constructor() { }
    handleSuccess(menu) {
        return new _meal_planner_meal_optimizer_store_actions_menu_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateMenuSuccess"](menu);
    }
    handleFailure(errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _meal_planner_meal_optimizer_store_actions_menu_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateMenuFail"](errorResponse));
    }
}
MenuResponseHandler.ɵfac = function MenuResponseHandler_Factory(t) { return new (t || MenuResponseHandler)(); };
MenuResponseHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuResponseHandler, factory: MenuResponseHandler.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuResponseHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mvfM":
/*!************************************************!*\
  !*** ./src/app/shared/model/nutrient.model.ts ***!
  \************************************************/
/*! exports provided: Nutrient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nutrient", function() { return Nutrient; });
class Nutrient {
    constructor(name, min, max, unitOfMeasure) {
        this.name = name;
        this.min = min;
        this.max = max;
        this.unitOfMeasure = unitOfMeasure;
    }
}


/***/ }),

/***/ "nDj3":
/*!***********************************************************************!*\
  !*** ./src/app/meal-planner/recipes/store/actions/recipes.actions.ts ***!
  \***********************************************************************/
/*! exports provided: FETCH_RECIPES_START, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAIL, UPDATE_REQUEST_STATUS, CLEAR_RECIPES, FetchRecipesStart, FetchRecipesSuccess, FetchRecipesFail, UpdateRequestStatus, ClearRecipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECIPES_START", function() { return FETCH_RECIPES_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECIPES_SUCCESS", function() { return FETCH_RECIPES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECIPES_FAIL", function() { return FETCH_RECIPES_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_REQUEST_STATUS", function() { return UPDATE_REQUEST_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_RECIPES", function() { return CLEAR_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRecipesStart", function() { return FetchRecipesStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRecipesSuccess", function() { return FetchRecipesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRecipesFail", function() { return FetchRecipesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRequestStatus", function() { return UpdateRequestStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearRecipes", function() { return ClearRecipes; });
const FETCH_RECIPES_START = '[Recipes] FETCH_RECIPES_START';
const FETCH_RECIPES_SUCCESS = '[Recipes] FETCH_RECIPES_SUCCESS';
const FETCH_RECIPES_FAIL = '[Recipes] FETCH_RECIPES_FAIL';
const UPDATE_REQUEST_STATUS = '[Recipes] UPDATE_REQUEST_STATUS';
const CLEAR_RECIPES = '[Recipes] CLEAR_RECIPES';
class FetchRecipesStart {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_RECIPES_START;
    }
}
class FetchRecipesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_RECIPES_SUCCESS;
    }
}
class FetchRecipesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_RECIPES_FAIL;
    }
}
class UpdateRequestStatus {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_REQUEST_STATUS;
    }
}
class ClearRecipes {
    constructor() {
        this.type = CLEAR_RECIPES;
    }
}


/***/ }),

/***/ "nLIy":
/*!********************************************************!*\
  !*** ./src/app/meal-planner/meal-planner.component.ts ***!
  \********************************************************/
/*! exports provided: MealPlannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealPlannerComponent", function() { return MealPlannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _meal_optimizer_store_actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal-optimizer/store/actions/user-preferences.actions */ "2fHZ");
/* harmony import */ var _meal_optimizer_store_actions_menu_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meal-optimizer/store/actions/menu.actions */ "82aV");
/* harmony import */ var _meal_optimizer_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meal-optimizer/store/actions/order.actions */ "T1QP");
/* harmony import */ var _recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes/store/actions/recipes.actions */ "nDj3");
/* harmony import */ var _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-list/store/shopping-list.actions */ "cyko");
/* harmony import */ var _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-mgmt/store/actions/user-display-preferences.actions */ "dZCj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _meal_optimizer_meal_optimizer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meal-optimizer/meal-optimizer.component */ "HjpC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipes/recipes.component */ "l3Z1");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "34V7");














function MealPlannerComponent_app_recipes_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recipes");
} }
function MealPlannerComponent_app_shopping_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shopping-list");
} }
class MealPlannerComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.dietTypes = data['userDietTypes'];
        });
        this.store.select('userDisplayPreferences').subscribe((userDisplayPreferences) => {
            this.showRecipes = userDisplayPreferences.showRecipes;
            this.showShoppingList = userDisplayPreferences.showShoppingList;
        });
    }
    canDeactivate() {
        if (confirm('You are navigating away from the page. Your inputs will be reset.')) {
            [new _meal_optimizer_store_actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_1__["ClearUserPreferences"](),
                new _meal_optimizer_store_actions_menu_actions__WEBPACK_IMPORTED_MODULE_2__["ClearMenu"](),
                new _meal_optimizer_store_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["ClearOrder"](),
                new _recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_4__["ClearRecipes"](),
                new _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_5__["ClearShoppingList"](),
                new _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_6__["ResetUserDisplayPreferences"]()
            ].forEach((action) => {
                this.store.dispatch(action);
            });
            return true;
        }
        else
            return false;
    }
}
MealPlannerComponent.ɵfac = function MealPlannerComponent_Factory(t) { return new (t || MealPlannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"])); };
MealPlannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealPlannerComponent, selectors: [["app-meal-planner"]], decls: 3, vars: 3, consts: [[3, "dietTypes"], [4, "ngIf"]], template: function MealPlannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-meal-optimizer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MealPlannerComponent_app_recipes_1_Template, 1, 0, "app-recipes", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MealPlannerComponent_app_shopping_list_2_Template, 1, 0, "app-shopping-list", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dietTypes", ctx.dietTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRecipes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showShoppingList);
    } }, directives: [_meal_optimizer_meal_optimizer_component__WEBPACK_IMPORTED_MODULE_9__["MealOptimizerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_11__["RecipesComponent"], _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9tZWFsLXBsYW5uZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealPlannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meal-planner',
                templateUrl: './meal-planner.component.html',
                styleUrls: ['./meal-planner.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }]; }, null); })();


/***/ }),

/***/ "pIc8":
/*!*************************************************************************!*\
  !*** ./src/app/shared/services/interceptor/auth-interceptor.service.ts ***!
  \*************************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




class AuthInterceptor {
    constructor(store) {
        this.store = store;
    }
    intercept(request, next) {
        return this.store.select('authenticatedUser').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])((authenticatedUser) => {
            if (!authenticatedUser.user.loggedIn) {
                return next.handle(request);
            }
            else {
                const modifiedReq = request.clone({
                    setHeaders: { 'Authorization': 'Bearer ' + authenticatedUser.user.token }
                });
                return next.handle(modifiedReq);
            }
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "pQOK":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/error-handler/error-handler.ts ***!
  \****************************************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
//Parent class for all custom error handlers.
/*
 * Handle errors: There are 3 types of errors in the application,
 *
 * (1) Server errors/ Client errors -> handled in error-interceptor(log for analysis, show full page error)
 * (2) Connection loss -> handled in connection-status-interceptor(display notification on bottom right, store/read from indexed db)
 * (3) User errors -> handled in individual component(display correct error to the user inside the individual component)
*/
class ErrorHandler {
    constructor() {
        this.customErrorMessage = 'There was an error';
    }
    handleError() {
        return this.customErrorMessage;
    }
    ;
}


/***/ }),

/***/ "pUQQ":
/*!**************************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/meal-selector/meal-options/meal-options.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MealOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealOptionsComponent", function() { return MealOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/http-request-status.enum */ "zl8S");
/* harmony import */ var _store_actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/user-preferences.actions */ "2fHZ");
/* harmony import */ var _shared_default_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/default-messages */ "q6cq");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MealOptionsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MealOptionsComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onMealSelected(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1, " ");
} }
/* This component performs 2 actions,
 * Display menu got from the backend
 * When the user selects a meal from the menu, dispatch an action
 */
class MealOptionsComponent {
    constructor(store) {
        this.store = store;
        this.defaultText = _shared_default_messages__WEBPACK_IMPORTED_MODULE_3__["DefaultMessages"].menu.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_1__["HttpRequestStatus"].NO_ACTION);
    }
    ngOnInit() {
        // Subscribe to store.menu to be notifed of changes in menu. Note that the menu is fetched from the backend.
        this.store.select('menu').subscribe((menu) => {
            switch (menu.requestStatus) {
                case src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_1__["HttpRequestStatus"].NO_ACTION: {
                    this.resetItemList();
                    this.defaultText = _shared_default_messages__WEBPACK_IMPORTED_MODULE_3__["DefaultMessages"].menu.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_1__["HttpRequestStatus"].NO_ACTION);
                    break;
                }
                case src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_1__["HttpRequestStatus"].REQUEST_SENT: {
                    this.resetItemList();
                    this.defaultText = _shared_default_messages__WEBPACK_IMPORTED_MODULE_3__["DefaultMessages"].menu.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_1__["HttpRequestStatus"].REQUEST_SENT);
                    break;
                }
                case src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_1__["HttpRequestStatus"].RESPONSE_RECEIVED: {
                    this.defaultText = _shared_default_messages__WEBPACK_IMPORTED_MODULE_3__["DefaultMessages"].menu.get(src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_1__["HttpRequestStatus"].RESPONSE_RECEIVED);
                    this.resetItemList();
                    // Only one of the 2 values can be truthy - menu.itemList | menu.error
                    // If menu.itemList if truthy, display item list to the user
                    if (menu.itemList) {
                        this.itemList = menu.itemList.slice();
                    }
                    //If menu.error is true, display the error
                    if (menu.error) {
                        this.itemList = [menu.error];
                    }
                    break;
                }
            }
        });
    }
    /* If a meal is selected by the user from the dropdown, save it to store.userPreferences by dispatching an action.
     *
     */
    onMealSelected(item) {
        this.itemSelected = item;
        this.store.dispatch(new _store_actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateMeal"]({
            itemPosition: this.indexOfMeal,
            itemName: this.itemSelected
        }));
    }
    resetItemList() {
        this.itemList = new Array();
    }
}
MealOptionsComponent.ɵfac = function MealOptionsComponent_Factory(t) { return new (t || MealOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
MealOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealOptionsComponent, selectors: [["app-meal-options"]], inputs: { indexOfMeal: "indexOfMeal" }, decls: 6, vars: 2, consts: [[1, "dropdown"], ["type", "button", "id", "dropdownMeal", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "text-wrap", "w-100", "px-0", "mx-0", "btn-block"], [1, "p-0", "m-0"], ["aria-labelledby", "dropdownMeal", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", "text-wrap", "w-100", "btn-block", 3, "value", "click"]], template: function MealOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MealOptionsComponent_div_5_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemSelected === undefined ? ctx.defaultText : ctx.itemSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9tZWFsLW9wdGltaXplci9tZWFsLXNlbGVjdG9yL21lYWwtb3B0aW9ucy9tZWFsLW9wdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meal-options',
                templateUrl: './meal-options.component.html',
                styleUrls: ['./meal-options.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { indexOfMeal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "po6f":
/*!***************************************************************************************!*\
  !*** ./src/app/meal-planner/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../user-mgmt/store/actions/user-display-preferences.actions */ "dZCj");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




class RecipeItemComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    onItemSelect() {
        this.store.dispatch(new _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_1__["ShowRecipeDetail"]({ id: this.indexOfRecipe, name: this.recipe.name }));
    }
    ngOnDestroy() { }
}
RecipeItemComponent.ɵfac = function RecipeItemComponent_Factory(t) { return new (t || RecipeItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
RecipeItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeItemComponent, selectors: [["app-recipe-item"]], inputs: { recipe: "recipe", indexOfRecipe: "indexOfRecipe" }, decls: 10, vars: 5, consts: [[1, "list-group-item", "clearfix", "w-100", "h-100", 3, "click"], [1, "list-group-item-heading", "custom-font"], [1, "list-group-item-text", "custom-item-display"], [1, "custom-item-display"], [1, "img-responsive", 2, "max-height", "50px", 3, "src", "alt"], [3, "href"]], template: function RecipeItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeItemComponent_Template_button_click_0_listener() { return ctx.onItemSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Watch the tutorial here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.recipe.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.recipe.tutorialPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["@media only screen and (max-width: 767px) {\r\n\t.custom-item-display[_ngcontent-%COMP%] {\r\n        display: none;\r\n\t}\r\n}\r\n\r\n@media only screen and (min-width: 630px) {\r\n.custom-font[_ngcontent-%COMP%] {\r\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n\tfont-size: x-large;\r\n\tfont-weight: bolder;\r\n}\r\n}\r\n\r\n@media only screen and (max-width: 629px) {\r\n\t.custom-font[_ngcontent-%COMP%] {\r\n\t\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n\t\tfont-size: medium;\r\n\t\tfont-weight: bolder;\r\n\t}\r\n\t}\r\n\r\n@media only screen and (max-width: 576px) {\r\n\t\t.custom-font[_ngcontent-%COMP%] {\r\n\t\t\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n\t\t\tfont-size: small;\r\n\t\t\tfont-weight: bolder;\r\n\t\t}\r\n\t\t}\r\n\r\n@media only screen and (max-width: 502px) {\r\n\t\t\t.custom-font[_ngcontent-%COMP%] {\r\n\t\t\t\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n\t\t\t\tfont-size: x-small;\r\n\t\t\t\tfont-weight: bolder;\r\n\t\t\t}\r\n\t\t\t}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbC1wbGFubmVyL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDO1FBQ08sYUFBYTtDQUNwQjtBQUNEOztBQUVBO0FBQ0E7Q0FDQywyREFBMkQ7Q0FDM0Qsa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjtBQUNBOztBQUVBO0NBQ0M7RUFDQywyREFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtDQUNBOztBQUVBO0VBQ0M7R0FDQywyREFBMkQ7R0FDM0QsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtFQUNwQjtFQUNBOztBQUVBO0dBQ0M7SUFDQywyREFBMkQ7SUFDM0Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtHQUNwQjtHQUNBIiwiZmlsZSI6InNyYy9hcHAvbWVhbC1wbGFubmVyL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHQuY3VzdG9tLWl0ZW0tZGlzcGxheSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjMwcHgpIHtcclxuLmN1c3RvbS1mb250IHtcclxuXHRmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuXHRmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjI5cHgpIHtcclxuXHQuY3VzdG9tLWZvbnQge1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHRcdGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHR9XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcblx0XHQuY3VzdG9tLWZvbnQge1xyXG5cdFx0XHRmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRmb250LXNpemU6IHNtYWxsO1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0fVxyXG5cdFx0fVx0XHJcblxyXG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDJweCkge1xyXG5cdFx0XHQuY3VzdG9tLWZvbnQge1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0Zm9udC1zaXplOiB4LXNtYWxsO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0fVx0XHRcdCJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-item',
                templateUrl: './recipe-item.component.html',
                styleUrls: ['./recipe-item.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { recipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indexOfRecipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "q6cq":
/*!********************************************!*\
  !*** ./src/app/shared/default-messages.ts ***!
  \********************************************/
/*! exports provided: DefaultMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMessages", function() { return DefaultMessages; });
/* harmony import */ var _http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-request-status.enum */ "zl8S");

//Setup default messages for Fetch-Menu
const defaultMessagesMenu = new Map();
defaultMessagesMenu.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].NO_ACTION, 'Please select diet');
defaultMessagesMenu.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].REQUEST_SENT, 'Fetching menu');
defaultMessagesMenu.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].RESPONSE_RECEIVED, 'Please select a meal');
//Setup default messages for Get-OptimizedMealPlans
const defaultMessagesMealPlan = new Map();
defaultMessagesMealPlan.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].NO_ACTION, 'Please select meals. Meal plan will be displayed here.');
defaultMessagesMealPlan.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].REQUEST_SENT, 'Fetching meal plan');
defaultMessagesMealPlan.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].RESPONSE_RECEIVED, ''); //No message will be displayed, instead the actual optimized meal plan will be displayed
//Setup default messages for Fetch-Recipe
const defaultMessagesRecipe = new Map();
defaultMessagesRecipe.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].NO_ACTION, 'Select a meal plan to view recipes');
defaultMessagesRecipe.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].REQUEST_SENT, 'Fetching recipe');
defaultMessagesRecipe.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].RESPONSE_RECEIVED, ''); //No message will be displayed, instead the actual recipe will be displayed
//Setup default messages for User-login
const defaultMessagesLogin = new Map();
defaultMessagesLogin.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].NO_ACTION, ''); //Login page is self explanatory, we need not display help-text 
defaultMessagesLogin.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].REQUEST_SENT, 'Login in progress');
defaultMessagesLogin.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].RESPONSE_RECEIVED, ''); //No message will be displayed, instead the user will be redirected to meal-optimizer/meal-planner page
//Setup default messages for User-registation
const defaultMessagesRegister = new Map();
defaultMessagesRegister.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].NO_ACTION, ''); //Registration page is self explanatory, we need not display help-text
defaultMessagesRegister.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].REQUEST_SENT, 'Registration in progress');
defaultMessagesRegister.set(_http_request_status_enum__WEBPACK_IMPORTED_MODULE_0__["HttpRequestStatus"].RESPONSE_RECEIVED, ''); //No message will be displayed, instead the user will be redirected to meal-optimizer/meal-planner page
const DefaultMessages = {
    menu: defaultMessagesMenu,
    mealPlan: defaultMessagesMealPlan,
    recipe: defaultMessagesRecipe,
    login: defaultMessagesLogin,
    register: defaultMessagesRegister
};


/***/ }),

/***/ "qIs3":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/http/user-diet.service.ts ***!
  \***********************************************************/
/*! exports provided: UserDietService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDietService", function() { return UserDietService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class UserDietService {
    constructor(http) {
        this.http = http;
    }
    getDietTypes() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].hostUrl}/${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationName}/categories/fetchAll`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(responseData => {
            const userDietTypes = new Array();
            responseData.forEach(category => {
                userDietTypes.push({ dietType: category.categoryName, displayValue: category.displayValue });
            });
            return userDietTypes;
        }));
    }
}
UserDietService.ɵfac = function UserDietService_Factory(t) { return new (t || UserDietService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserDietService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserDietService, factory: UserDietService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDietService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "qUN2":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/interceptor/interceptors.ts ***!
  \*************************************************************/
/*! exports provided: interceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptorProviders", function() { return interceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _connection_status_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection-status-interceptor.service */ "5ITx");
/* harmony import */ var _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-interceptor.service */ "pIc8");
/* harmony import */ var _error_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-interceptor.service */ "R4B2");




const interceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _connection_status_interceptor_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatusInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _error_interceptor_service__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptor"], multi: true }
];


/***/ }),

/***/ "qgKl":
/*!*****************************************************!*\
  !*** ./src/app/meal-planner/meal-planner.module.ts ***!
  \*****************************************************/
/*! exports provided: MealPlannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealPlannerModule", function() { return MealPlannerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "L/mj");
/* harmony import */ var _meal_planner_meal_planner_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../meal-planner/meal-planner.routing.module */ "jdH+");
/* harmony import */ var _meal_optimizer_meal_optimizer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meal-optimizer/meal-optimizer.component */ "HjpC");
/* harmony import */ var _meal_optimizer_delivery_date_selector_delivery_date_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meal-optimizer/delivery-date-selector/delivery-date-selector.component */ "tKtD");
/* harmony import */ var _meal_optimizer_meal_selector_meal_selector_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./meal-optimizer/meal-selector/meal-selector.component */ "2nfZ");
/* harmony import */ var _meal_optimizer_meal_selector_manage_meal_plan_manage_meal_plan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./meal-optimizer/meal-selector/manage-meal-plan/manage-meal-plan.component */ "tYWA");
/* harmony import */ var _meal_optimizer_meal_selector_meal_options_meal_options_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./meal-optimizer/meal-selector/meal-options/meal-options.component */ "pUQQ");
/* harmony import */ var _meal_optimizer_optimized_meal_plan_optimized_meal_plan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./meal-optimizer/optimized-meal-plan/optimized-meal-plan.component */ "Vt1l");
/* harmony import */ var _meal_optimizer_optimized_meal_plan_optimized_results_table_optimized_results_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./meal-optimizer/optimized-meal-plan/optimized-results-table/optimized-results-table.component */ "b5W3");
/* harmony import */ var _meal_optimizer_optimized_meal_plan_optimized_results_table_optimized_result_cost_optimized_result_cost_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./meal-optimizer/optimized-meal-plan/optimized-results-table/optimized-result-cost/optimized-result-cost.component */ "Ogt9");
/* harmony import */ var _meal_optimizer_optimized_meal_plan_optimized_results_table_optimized_result_quality_optimized_result_quality_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./meal-optimizer/optimized-meal-plan/optimized-results-table/optimized-result-quality/optimized-result-quality.component */ "E5JP");
/* harmony import */ var _meal_optimizer_optimized_meal_plan_optimized_results_table_order_info_order_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./meal-optimizer/optimized-meal-plan/optimized-results-table/order-info/order-info.component */ "14A0");
/* harmony import */ var _meal_optimizer_user_diet_type_user_diet_type_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./meal-optimizer/user_diet_type/user_diet_type.component */ "w/rZ");
/* harmony import */ var _meal_planner_recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../meal-planner/recipes/recipe-detail/recipe-detail.component */ "UoxR");
/* harmony import */ var _meal_planner_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../meal-planner/recipes/recipes.component */ "l3Z1");
/* harmony import */ var _meal_planner_recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../meal-planner/recipes/recipe-list/recipe-list.component */ "yV0c");
/* harmony import */ var _meal_planner_recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../meal-planner/recipes/recipe-list/recipe-item/recipe-item.component */ "po6f");
/* harmony import */ var _meal_planner_recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../meal-planner/recipes/recipe-start/recipe-start.component */ "/QR6");
/* harmony import */ var _meal_planner_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../meal-planner/shopping-list/shopping-list.component */ "34V7");
/* harmony import */ var _meal_planner_shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../meal-planner/shopping-list/shopping-edit/shopping-edit.component */ "6Ael");
/* harmony import */ var _meal_optimizer_online_order_online_order_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./meal-optimizer/online-order/online-order.component */ "1GjV");
/* harmony import */ var _meal_planner_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./meal-planner.component */ "nLIy");
/* harmony import */ var _shared_core_core_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../shared/core/core.module */ "6fFp");































class MealPlannerModule {
}
MealPlannerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MealPlannerModule });
MealPlannerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MealPlannerModule_Factory(t) { return new (t || MealPlannerModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
            _shared_core_core_module__WEBPACK_IMPORTED_MODULE_28__["CoreModule"],
            _meal_planner_meal_planner_routing_module__WEBPACK_IMPORTED_MODULE_7__["MealPlannerRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"],
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MealPlannerModule, { declarations: [_meal_planner_component__WEBPACK_IMPORTED_MODULE_27__["MealPlannerComponent"],
        _meal_optimizer_delivery_date_selector_delivery_date_selector_component__WEBPACK_IMPORTED_MODULE_9__["DeliveryDateSelectorComponent"],
        _meal_optimizer_meal_selector_meal_selector_component__WEBPACK_IMPORTED_MODULE_10__["MealSelectorComponent"],
        _meal_optimizer_meal_selector_manage_meal_plan_manage_meal_plan_component__WEBPACK_IMPORTED_MODULE_11__["ManageMealPlanComponent"],
        _meal_optimizer_meal_selector_meal_options_meal_options_component__WEBPACK_IMPORTED_MODULE_12__["MealOptionsComponent"],
        _meal_optimizer_optimized_meal_plan_optimized_meal_plan_component__WEBPACK_IMPORTED_MODULE_13__["OptimizedMealPlanComponent"],
        _meal_optimizer_optimized_meal_plan_optimized_results_table_optimized_results_table_component__WEBPACK_IMPORTED_MODULE_14__["OptimizedResultsTableComponent"],
        _meal_optimizer_optimized_meal_plan_optimized_results_table_optimized_result_cost_optimized_result_cost_component__WEBPACK_IMPORTED_MODULE_15__["OptimizedResultCostComponent"],
        _meal_optimizer_optimized_meal_plan_optimized_results_table_optimized_result_quality_optimized_result_quality_component__WEBPACK_IMPORTED_MODULE_16__["OptimizedResultQualityComponent"],
        _meal_optimizer_optimized_meal_plan_optimized_results_table_order_info_order_info_component__WEBPACK_IMPORTED_MODULE_17__["OrderInfoComponent"],
        _meal_optimizer_user_diet_type_user_diet_type_component__WEBPACK_IMPORTED_MODULE_18__["UserDietTypeComponent"],
        _meal_optimizer_meal_optimizer_component__WEBPACK_IMPORTED_MODULE_8__["MealOptimizerComponent"],
        _meal_planner_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_20__["RecipesComponent"],
        _meal_planner_recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_19__["RecipeDetailComponent"],
        _meal_planner_recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_21__["RecipeListComponent"],
        _meal_planner_recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_22__["RecipeItemComponent"],
        _meal_planner_recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_23__["RecipeStartComponent"],
        _meal_planner_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_24__["ShoppingListComponent"],
        _meal_planner_shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_25__["ShoppingEditComponent"],
        _meal_optimizer_online_order_online_order_component__WEBPACK_IMPORTED_MODULE_26__["OnlineOrderComponent"]], imports: [_shared_core_core_module__WEBPACK_IMPORTED_MODULE_28__["CoreModule"],
        _meal_planner_meal_planner_routing_module__WEBPACK_IMPORTED_MODULE_7__["MealPlannerRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealPlannerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _meal_planner_component__WEBPACK_IMPORTED_MODULE_27__["MealPlannerComponent"],
                    _meal_optimizer_delivery_date_selector_delivery_date_selector_component__WEBPACK_IMPORTED_MODULE_9__["DeliveryDateSelectorComponent"],
                    _meal_optimizer_meal_selector_meal_selector_component__WEBPACK_IMPORTED_MODULE_10__["MealSelectorComponent"],
                    _meal_optimizer_meal_selector_manage_meal_plan_manage_meal_plan_component__WEBPACK_IMPORTED_MODULE_11__["ManageMealPlanComponent"],
                    _meal_optimizer_meal_selector_meal_options_meal_options_component__WEBPACK_IMPORTED_MODULE_12__["MealOptionsComponent"],
                    _meal_optimizer_optimized_meal_plan_optimized_meal_plan_component__WEBPACK_IMPORTED_MODULE_13__["OptimizedMealPlanComponent"],
                    _meal_optimizer_optimized_meal_plan_optimized_results_table_optimized_results_table_component__WEBPACK_IMPORTED_MODULE_14__["OptimizedResultsTableComponent"],
                    _meal_optimizer_optimized_meal_plan_optimized_results_table_optimized_result_cost_optimized_result_cost_component__WEBPACK_IMPORTED_MODULE_15__["OptimizedResultCostComponent"],
                    _meal_optimizer_optimized_meal_plan_optimized_results_table_optimized_result_quality_optimized_result_quality_component__WEBPACK_IMPORTED_MODULE_16__["OptimizedResultQualityComponent"],
                    _meal_optimizer_optimized_meal_plan_optimized_results_table_order_info_order_info_component__WEBPACK_IMPORTED_MODULE_17__["OrderInfoComponent"],
                    _meal_optimizer_user_diet_type_user_diet_type_component__WEBPACK_IMPORTED_MODULE_18__["UserDietTypeComponent"],
                    _meal_optimizer_meal_optimizer_component__WEBPACK_IMPORTED_MODULE_8__["MealOptimizerComponent"],
                    _meal_planner_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_20__["RecipesComponent"],
                    _meal_planner_recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_19__["RecipeDetailComponent"],
                    _meal_planner_recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_21__["RecipeListComponent"],
                    _meal_planner_recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_22__["RecipeItemComponent"],
                    _meal_planner_recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_23__["RecipeStartComponent"],
                    _meal_planner_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_24__["ShoppingListComponent"],
                    _meal_planner_shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_25__["ShoppingEditComponent"],
                    _meal_optimizer_online_order_online_order_component__WEBPACK_IMPORTED_MODULE_26__["OnlineOrderComponent"]
                ],
                imports: [
                    _shared_core_core_module__WEBPACK_IMPORTED_MODULE_28__["CoreModule"],
                    _meal_planner_meal_planner_routing_module__WEBPACK_IMPORTED_MODULE_7__["MealPlannerRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                    angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"].forRoot({
                        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
                        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"],
                    })
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rXqt":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/notification-display.service.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationDisplayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDisplayService", function() { return NotificationDisplayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _display_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.service */ "Aax3");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _core_custom_notification_custom_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/custom-notification/custom-notification.component */ "KD3V");







class NotificationDisplayService extends _display_service__WEBPACK_IMPORTED_MODULE_2__["DisplayService"] {
    constructor(overlay) {
        super();
        this.overlay = overlay;
        //OverlayRef is the container created dynamically. Store a list of all containers created dynamically for tracking.
        this.notificationReferences = new Array();
    }
    showNotification(content) {
        //Create container dynamically.
        let notificationRef = this.overlay.create(this.getNotificationConfig());
        //Add to list of containers.
        this.notificationReferences.push(notificationRef);
        //Create component dynamically.
        const componentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_core_custom_notification_custom_notification_component__WEBPACK_IMPORTED_MODULE_4__["CustomNotificationComponent"], null, this.createInjector(content));
        //Attach component to container
        notificationRef.attach(componentPortal);
        //Auto hide notification after 20 secs.
        setTimeout(this.hideNotification.bind(this), 20000);
    }
    hideNotification() {
        //If atleast 1 container is created.
        if (this.notificationReferences.length > 0) {
            //Get a reference to the earliest/first container created (and remove it from the list).
            let notificationRef = this.notificationReferences.shift();
            if (!!notificationRef) {
                //Clear the container.
                notificationRef.detach();
            }
        }
    }
    getNotificationConfig() {
        //Set position of notification.
        const positionStrategy = this.overlay.position()
            .global()
            .bottom()
            .right();
        //Return object holding all the config properties.
        const notificationConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
            scrollStrategy: this.overlay.scrollStrategies.noop(),
            positionStrategy
        });
        return notificationConfig;
    }
}
NotificationDisplayService.ɵfac = function NotificationDisplayService_Factory(t) { return new (t || NotificationDisplayService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"])); };
NotificationDisplayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationDisplayService, factory: NotificationDisplayService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationDisplayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"] }]; }, null); })();


/***/ }),

/***/ "s2nn":
/*!************************************************!*\
  !*** ./src/app/app-info/app-info.component.ts ***!
  \************************************************/
/*! exports provided: AppInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoComponent", function() { return AppInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppInfoComponent.ɵfac = function AppInfoComponent_Factory(t) { return new (t || AppInfoComponent)(); };
AppInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppInfoComponent, selectors: [["app-app-info"]], decls: 0, vars: 0, template: function AppInfoComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1pbmZvL2FwcC1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-info',
                templateUrl: './app-info.component.html',
                styleUrls: ['./app-info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sNVY":
/*!********************************************************************!*\
  !*** ./src/app/user-mgmt/user-redirect/user-redirect.component.ts ***!
  \********************************************************************/
/*! exports provided: UserRedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRedirectComponent", function() { return UserRedirectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_response_handler_authentication_response_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/response-handler/authentication-response-handler */ "+EIX");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user.service */ "kmKP");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class UserRedirectComponent {
    constructor(authenticationResponseHandler, userService, store, router) {
        this.authenticationResponseHandler = authenticationResponseHandler;
        this.userService = userService;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        //This page is loaded only when user authentication on Keycloak is successful. Hence log the username + token
        this.userService.parseAuthenticatedUserDetails()
            .then((authenticatedUser) => this.authenticationResponseHandler.handleSuccess(authenticatedUser))
            .catch((error) => this.authenticationResponseHandler.handleFailure(error));
        this.store.select('authenticatedUser').subscribe((authenticatedUser) => {
            this.authenticatedUser = authenticatedUser.user;
        });
        setTimeout(() => {
            this.router.navigateByUrl('/meal-planner');
        }, 1000);
    }
}
UserRedirectComponent.ɵfac = function UserRedirectComponent_Factory(t) { return new (t || UserRedirectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_response_handler_authentication_response_handler__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResponseHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserRedirectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRedirectComponent, selectors: [["app-user-redirect"]], decls: 18, vars: 2, consts: [[1, "justify-content-start", "my-4", "ml-1"], [1, "mt-1", "ml-1", "border", "col-md-10", "col-xs-12"], [1, "m-3"], [1, "table", "table-borderless", "table-hover", "table-responsive", "mt-4"], [1, "font-weight-bold"]], template: function UserRedirectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Redirecting to meal planner ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You have logged in as");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authenticatedUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authenticatedUser.loggedIn ? "logged in" : "not logged in");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWdtdC91c2VyLXJlZGlyZWN0L3VzZXItcmVkaXJlY3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRedirectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-redirect',
                templateUrl: './user-redirect.component.html',
                styleUrls: ['./user-redirect.component.css']
            }]
    }], function () { return [{ type: _shared_services_response_handler_authentication_response_handler__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResponseHandler"] }, { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "tKtD":
/*!********************************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/delivery-date-selector/delivery-date-selector.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DeliveryDateSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryDateSelectorComponent", function() { return DeliveryDateSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/daygrid */ "iOEq");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/interaction */ "Gbwi");
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/core */ "SZB9");
/* harmony import */ var _store_actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/user-preferences.actions */ "2fHZ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");







const _c0 = ["calendar"];
// This component performs only 1 action - save delivery date chosen to store.
class DeliveryDateSelectorComponent {
    constructor(store) {
        this.store = store;
        this.propertyName = 'deliveryDate';
    }
    ngOnInit() { }
    handleDateClick(arg) {
        this.store.dispatch(new _store_actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_4__["EditDeliveryDate"](arg.date));
    }
    ngAfterViewInit() {
        this.calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_3__["Calendar"](this.cal.nativeElement, {
            plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_2__["default"]],
            validRange: {
                start: new Date(),
                end: new Date().setMonth(new Date().getMonth() + 6)
            },
            aspectRatio: 2.4,
            fixedWeekCount: false,
            dateClick: this.handleDateClick.bind(this)
        });
        this.calendar.render();
    }
}
DeliveryDateSelectorComponent.ɵfac = function DeliveryDateSelectorComponent_Factory(t) { return new (t || DeliveryDateSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
DeliveryDateSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeliveryDateSelectorComponent, selectors: [["app-delivery-date-selector"]], viewQuery: function DeliveryDateSelectorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cal = _t.first);
    } }, decls: 5, vars: 0, consts: [[1, "justify-content-start", "py-4"], [1, "custom-cal-width", "ml-4"], ["id", "calendar"], ["calendar", ""]], template: function DeliveryDateSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Step 2: Select date of delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (max-width: 959px) {\r\n  .custom-cal-width[_ngcontent-%COMP%] {\r\n      width: 100% !important;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 440px) {\r\n  #calendar[_ngcontent-%COMP%] {\r\n    font-size: 0.7em;\r\n  } \r\n}\r\n\r\n@media only screen and (max-width: 300px) {\r\n  #calendar[_ngcontent-%COMP%] {\r\n    font-size: 0.4em;\r\n  } \r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  .custom-cal-width[_ngcontent-%COMP%] {\r\n      width: 100% !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbC1wbGFubmVyL21lYWwtb3B0aW1pemVyL2RlbGl2ZXJ5LWRhdGUtc2VsZWN0b3IvZGVsaXZlcnktZGF0ZS1zZWxlY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7TUFDSSxzQkFBc0I7SUFDeEI7QUFDSjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7TUFDSSxzQkFBc0I7SUFDeEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9tZWFsLW9wdGltaXplci9kZWxpdmVyeS1kYXRlLXNlbGVjdG9yL2RlbGl2ZXJ5LWRhdGUtc2VsZWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAuY3VzdG9tLWNhbC13aWR0aCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcclxuICAjY2FsZW5kYXIge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICB9IFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgI2NhbGVuZGFyIHtcclxuICAgIGZvbnQtc2l6ZTogMC40ZW07XHJcbiAgfSBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gIC5jdXN0b20tY2FsLXdpZHRoIHtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeliveryDateSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delivery-date-selector',
                styleUrls: ['delivery-date-selector.component.css'],
                templateUrl: './delivery-date-selector.component.html'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, { cal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['calendar']
        }] }); })();


/***/ }),

/***/ "tYWA":
/*!**********************************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/meal-selector/manage-meal-plan/manage-meal-plan.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ManageMealPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageMealPlanComponent", function() { return ManageMealPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/http-request-status.enum */ "zl8S");
/* harmony import */ var src_app_shared_optimization_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/optimization-mode.enum */ "HDOF");
/* harmony import */ var _store_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/order.actions */ "T1QP");
/* harmony import */ var _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../user-mgmt/store/actions/user-display-preferences.actions */ "dZCj");
/* harmony import */ var _recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../recipes/store/actions/recipes.actions */ "nDj3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ManageMealPlanComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageMealPlanComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onGetMealPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Get Meal Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disableGetMealPlan);
} }
function ManageMealPlanComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageMealPlanComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onUpdateMealPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update Meal Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
/* This component performs 3 actions
 * Get mode from the url : This decide whether the backend call must be a CREATE (POST) or an UPDATE (PUT)
 * Get values of user prefs and authenticated user from the store and create the meal plan request
 * Call backend by dispatching the action CREATE_ORDER_START
 */
class ManageMealPlanComponent {
    constructor(store, orderService) {
        this.store = store;
        this.orderService = orderService;
        /* Enable or disable the 'Get Meal Plan' button based 2 conditions. Enable button if:
         * User inputs are valid and
         * The meals selected do not satisfy daily nutrition requirements - allow the user to edit meals selected
         * Initially disableGetMealPlan is set to true (because user inputs are invalid at this point)
         */
        this.disableGetOrUpdateMealPlan = true;
    }
    ngOnInit() {
        // Get value of mode (create or edit)
        this.store.select('userDisplayPreferences').subscribe((userDisplayPreferences) => {
            this.mode = userDisplayPreferences.optimizationMode;
        });
        this.store.select('userPreferences').subscribe((userPrefs) => {
            this.userPrefs = userPrefs;
            //Enable get meal plan when 4 meals are selected.
            this.disableGetOrUpdateMealPlan = (userPrefs.mealSelected.filter((meal) => meal !== undefined).length) !== 4;
        });
        this.store.select('authenticatedUser').subscribe((authenticatedUser) => {
            this.authenticatedUser = authenticatedUser.user;
        });
        this.store.select('optimizedPlans').subscribe((optimizedMealPlans) => {
            //Response received from backend. The user can choose to edit meals selected, so enable get meal plan.
            if (optimizedMealPlans.requestStatus === src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_1__["HttpRequestStatus"].RESPONSE_RECEIVED) {
                this.disableGetOrUpdateMealPlan = false;
                //Switch to 'update' mode if there is no error and optimization result state is DISTINCT OR OPTIMAL OR FEASIBLE
                if (!optimizedMealPlans.error &&
                    (optimizedMealPlans.mealPlans &&
                        (optimizedMealPlans.mealPlans.optimizationState === "DISTINCT" || optimizedMealPlans.mealPlans.optimizationState === "OPTIMAL" || optimizedMealPlans.mealPlans.optimizationState === "FEASIBLE"))) {
                    this.savedMealPlans = optimizedMealPlans.mealPlans;
                    this.store.dispatch(new _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateOptimizationMode"](src_app_shared_optimization_mode_enum__WEBPACK_IMPORTED_MODULE_2__["OptimizationMode"].UPDATE));
                }
                else {
                    this.savedMealPlans = null;
                }
            }
        });
    }
    onGetMealPlan() {
        //Clear existing meal plans
        this.store.dispatch(new _store_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["ClearOrder"]());
        if (this.orderService.verifyAllInputsAreReceived()) {
            //If all inputs are received, create the order
            let orderRequest = this.orderService.createOrderRequest(this.userPrefs.deliveryDate, this.userPrefs.mealSelected, this.authenticatedUser);
            this.fetchMealPlan(orderRequest);
        }
        else
            alert('One of the required inputs is missing');
    }
    onUpdateMealPlan() {
        /* We do not check if this.savedMealPlans !=null since this point is reached
         * only if the order has been saved atleast once,
         * if the order has never been saved, the optimizer is in create mode.
         */
        //Hide recipes section
        this.store.dispatch(new _user_mgmt_store_actions_user_display_preferences_actions__WEBPACK_IMPORTED_MODULE_4__["HideRecipes"]());
        this.store.dispatch(new _recipes_store_actions_recipes_actions__WEBPACK_IMPORTED_MODULE_5__["ClearRecipes"]());
        //Clear existing meal plans
        this.store.dispatch(new _store_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["ClearOrder"]());
        if (this.orderService.verifyAllInputsAreReceived()) {
            //If all inputs are received, create the order
            let orderRequest = this.orderService.createOrderRequest(this.userPrefs.deliveryDate, this.userPrefs.mealSelected, this.authenticatedUser, this.savedMealPlans.orderId);
            this.fetchMealPlan(orderRequest);
        }
        else
            alert('One of the required inputs is missing');
    }
    fetchMealPlan(orderRequest) {
        //Call backend to get a meal plan
        this.store.dispatch(new _store_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRequestStatus"](src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_1__["HttpRequestStatus"].REQUEST_SENT));
        this.store.dispatch(new _store_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["SaveOrderStart"](orderRequest));
        this.disableGetOrUpdateMealPlan = true;
    }
    ngOnDestroy() { }
}
ManageMealPlanComponent.ɵfac = function ManageMealPlanComponent_Factory(t) { return new (t || ManageMealPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"])); };
ManageMealPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageMealPlanComponent, selectors: [["app-manage-meal-plan"]], decls: 2, vars: 2, consts: [["type", "button", "class", "btn btn-dark", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-dark", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-dark", 3, "click"]], template: function ManageMealPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManageMealPlanComponent_button_0_Template, 2, 1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageMealPlanComponent_button_1_Template, 2, 0, "button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "update");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9tZWFsLW9wdGltaXplci9tZWFsLXNlbGVjdG9yL21hbmFnZS1tZWFsLXBsYW4vbWFuYWdlLW1lYWwtcGxhbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageMealPlanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-meal-plan',
                templateUrl: './manage-meal-plan.component.html',
                styleUrls: ['./manage-meal-plan.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] }]; }, null); })();


/***/ }),

/***/ "tseV":
/*!***************************************************!*\
  !*** ./src/app/shared/services/recipe.service.ts ***!
  \***************************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");



class RecipeService {
    constructor(store) {
        this.store = store;
        this.recipes = [];
        this.store.select('recipes').subscribe((recipes) => {
            this.recipes = recipes.recipes;
        });
    }
    ngOnInit() { }
    getRecipeById(id) {
        var recipeList = this.recipes.slice();
        return recipeList[id];
    }
    ngOnDestroy() { }
}
RecipeService.ɵfac = function RecipeService_Factory(t) { return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
RecipeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecipeService, factory: RecipeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "tw6D":
/*!*****************************************************!*\
  !*** ./src/app/app-info/app-info-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AppInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoRoutingModule", function() { return AppInfoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "dK1+");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "AlQx");






const appInfoRoutes = [
    { path: 'app-info', children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__["ContactUsComponent"] }
        ] }
];
class AppInfoRoutingModule {
}
AppInfoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppInfoRoutingModule });
AppInfoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppInfoRoutingModule_Factory(t) { return new (t || AppInfoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(appInfoRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppInfoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInfoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(appInfoRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vQm+":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/can-exit-page.service.ts ***!
  \**********************************************************/
/*! exports provided: CanExitPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanExitPageService", function() { return CanExitPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _connection_status_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection-status-handler.service */ "QAkm");



class CanExitPageService {
    constructor(connectionStatusHandlerService) {
        this.connectionStatusHandlerService = connectionStatusHandlerService;
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return (this.connectionStatusHandlerService.getConnectionStatus()) ? component.canDeactivate() : true;
    }
}
CanExitPageService.ɵfac = function CanExitPageService_Factory(t) { return new (t || CanExitPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_connection_status_handler_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatusHandlerService"])); };
CanExitPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanExitPageService, factory: CanExitPageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanExitPageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _connection_status_handler_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatusHandlerService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_core_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/shared/core/error-page/error-page.component */ "EsUL");





const appRoutes = [
    { path: '', redirectTo: '/app-info/home', pathMatch: 'full' },
    { path: 'error', component: _app_shared_core_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__["ErrorPageComponent"], data: { errorMessage: 'oops, something went wrong! Let us try again ...' } },
    { path: '**', redirectTo: '/error' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vyhQ":
/*!***************************************************!*\
  !*** ./src/app/shared/shopping-list-mode.enum.ts ***!
  \***************************************************/
/*! exports provided: ShoppingListMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListMode", function() { return ShoppingListMode; });
var ShoppingListMode;
(function (ShoppingListMode) {
    ShoppingListMode["ADD"] = "add";
    ShoppingListMode["UPDATE"] = "update";
})(ShoppingListMode || (ShoppingListMode = {}));


/***/ }),

/***/ "w/rZ":
/*!****************************************************************************************!*\
  !*** ./src/app/meal-planner/meal-optimizer/user_diet_type/user_diet_type.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserDietTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDietTypeComponent", function() { return UserDietTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions/user-preferences.actions */ "2fHZ");
/* harmony import */ var _store_actions_menu_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/menu.actions */ "82aV");
/* harmony import */ var src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/http-request-status.enum */ "zl8S");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function UserDietTypeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDietTypeComponent_div_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.userDietType = $event; })("click", function UserDietTypeComponent_div_3_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const dietType_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onDietTypeSelect(dietType_r1.dietType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dietType_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", dietType_r1.dietType)("ngModel", ctx_r0.userDietType)("value", dietType_r1.dietType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dietType_r1.displayValue, " ");
} }
// This class displays the list of diet types and allows the user to choose a diet type.
class UserDietTypeComponent {
    constructor(store) {
        this.store = store;
        this.propertyName = 'dietType';
    }
    // When the user selects a diet type, dispatch an action to fetch menu (also update menu.requestStatus).
    onDietTypeSelect(dietType) {
        this.store.dispatch(new _store_actions_menu_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateRequestStatus"](src_app_shared_http_request_status_enum__WEBPACK_IMPORTED_MODULE_3__["HttpRequestStatus"].REQUEST_SENT));
        this.store.dispatch(new _store_actions_user_preferences_actions__WEBPACK_IMPORTED_MODULE_1__["EditDietType"](dietType));
    }
    ngOnInit() { }
}
UserDietTypeComponent.ɵfac = function UserDietTypeComponent_Factory(t) { return new (t || UserDietTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
UserDietTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDietTypeComponent, selectors: [["app-user-diet-type"]], inputs: { dietTypes: "dietTypes" }, decls: 4, vars: 1, consts: [[1, "justify-content-start", "py-4"], [1, "custom-top-margin"], ["class", "form-check ml-4 my-2", 4, "ngFor", "ngForOf"], [1, "form-check", "ml-4", "my-2"], ["type", "radio", "name", "user_diet_type", 1, "form-check-input", 3, "id", "ngModel", "value", "ngModelChange", "click"], ["for", "dietType.dietType", 1, "form-check-label"]], template: function UserDietTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Step 1: Select diet type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDietTypeComponent_div_3_Template, 4, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dietTypes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["@media only screen and (min-width: 960px) {\r\n    .custom-top-margin[_ngcontent-%COMP%] {\r\n        margin-top: 14%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbC1wbGFubmVyL21lYWwtb3B0aW1pemVyL3VzZXJfZGlldF90eXBlL3VzZXJfZGlldF90eXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21lYWwtcGxhbm5lci9tZWFsLW9wdGltaXplci91c2VyX2RpZXRfdHlwZS91c2VyX2RpZXRfdHlwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgLmN1c3RvbS10b3AtbWFyZ2luIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDietTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-diet-type',
                styleUrls: ['user_diet_type.component.css'],
                templateUrl: './user_diet_type.component.html'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, { dietTypes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "xIKZ":
/*!************************************************************!*\
  !*** ./src/app/shared/services/overlay-display.service.ts ***!
  \************************************************************/
/*! exports provided: OverlayDisplayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayDisplayService", function() { return OverlayDisplayService; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_custom_overlay_custom_overlay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/custom-overlay/custom-overlay.component */ "ic8S");
/* harmony import */ var _display_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display.service */ "Aax3");







class OverlayDisplayService extends _display_service__WEBPACK_IMPORTED_MODULE_4__["DisplayService"] {
    constructor(overlay) {
        super();
        this.overlay = overlay;
    }
    showOverlay(message) {
        //Create container
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        //Create component
        const componentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](_core_custom_overlay_custom_overlay_component__WEBPACK_IMPORTED_MODULE_3__["CustomOverlayComponent"], null, super.createInjector(message));
        //Attach component to container.
        this.overlayRef.attach(componentPortal);
    }
    //Function to hide overlay.
    hideOverlay() {
        if (!!this.overlayRef) {
            this.overlayRef.detach();
        }
    }
    getOverlayConfig() {
        //Center the overlay.
        const positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        //Return object with all the config properties.
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });
        return overlayConfig;
    }
}
OverlayDisplayService.ɵfac = function OverlayDisplayService_Factory(t) { return new (t || OverlayDisplayService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"])); };
OverlayDisplayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OverlayDisplayService, factory: OverlayDisplayService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OverlayDisplayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }]; }, null); })();


/***/ }),

/***/ "yV0c":
/*!***************************************************************************!*\
  !*** ./src/app/meal-planner/recipes/recipe-list/recipe-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-item/recipe-item.component */ "po6f");





function RecipeListComponent_app_recipe_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recipe-item", 3);
} if (rf & 2) {
    const recipeEl_r1 = ctx.$implicit;
    const indexOfRecipe_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipe", recipeEl_r1)("indexOfRecipe", indexOfRecipe_r2);
} }
/*
 * This component is loaded for the route meal-planner/recipes.
 * It is composed of 4 RecipeItems.
 *
 * Tasks : Takes recipes from 'Recipes' store and passes them to RecipeItem.
 * Technique used : Attribute Binding
 */
class RecipeListComponent {
    constructor() { }
    ngOnInit() { }
}
RecipeListComponent.ɵfac = function RecipeListComponent_Factory(t) { return new (t || RecipeListComponent)(); };
RecipeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeListComponent, selectors: [["app-recipe-list"]], inputs: { recipes: "recipes" }, decls: 3, vars: 1, consts: [[1, "row"], [1, "col-12", "custom-item-layout"], ["class", "flex-fill", 3, "recipe", "indexOfRecipe", 4, "ngFor", "ngForOf"], [1, "flex-fill", 3, "recipe", "indexOfRecipe"]], template: function RecipeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecipeListComponent_app_recipe_item_2_Template, 1, 2, "app-recipe-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_2__["RecipeItemComponent"]], styles: ["@media only screen and (min-width: 768px) {\r\n\t.custom-item-layout[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n\t.custom-item-layout[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhbC1wbGFubmVyL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDO1FBQ08sYUFBYTtRQUNiLHNCQUFzQjtDQUM3QjtBQUNEOztBQUVBO0NBQ0M7UUFDTyxhQUFhO1FBQ2IsbUJBQW1CO0NBQzFCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9tZWFsLXBsYW5uZXIvcmVjaXBlcy9yZWNpcGUtbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cdC5jdXN0b20taXRlbS1sYXlvdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHQuY3VzdG9tLWl0ZW0tbGF5b3V0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-list',
                templateUrl: './recipe-list.component.html',
                styleUrls: ['./recipe-list.component.css']
            }]
    }], function () { return []; }, { recipes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zl8S":
/*!****************************************************!*\
  !*** ./src/app/shared/http-request-status.enum.ts ***!
  \****************************************************/
/*! exports provided: HttpRequestStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestStatus", function() { return HttpRequestStatus; });
var HttpRequestStatus;
(function (HttpRequestStatus) {
    HttpRequestStatus["NO_ACTION"] = "NO ACTION";
    HttpRequestStatus["REQUEST_SENT"] = "REQUEST SENT";
    HttpRequestStatus["RESPONSE_RECEIVED"] = "RESPONSE RECEIVED";
})(HttpRequestStatus || (HttpRequestStatus = {}));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map