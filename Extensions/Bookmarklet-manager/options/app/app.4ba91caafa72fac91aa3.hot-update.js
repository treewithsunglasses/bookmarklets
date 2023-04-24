webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Editor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Editor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_EditorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/EditorHelper */ "./src/util/EditorHelper.js");
/* harmony import */ var _util_JavascriptUrlParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/JavascriptUrlParser */ "./src/util/JavascriptUrlParser.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options */ "./src/components/Options.vue");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/components/Button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import Storage from '../util/Storage'




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Editor",

  data() {
    return {
      sharedState: this.$root.$data.sharedState
    };
  },

  components: {
    Options: _Options__WEBPACK_IMPORTED_MODULE_2__["default"],
    Button: _Button__WEBPACK_IMPORTED_MODULE_3__["default"]
  },

  mounted() {
    /**
     * Watch changes to the currentBookmark and update editor
     */
    this.$root.$watch("sharedState.currentBookmark", newVal => {
      this.editor.setValue(_util_JavascriptUrlParser__WEBPACK_IMPORTED_MODULE_1__["default"].decode(newVal.url));
    }, {
      deep: true
    });
  },

  methods: {
    init() {
      // Set worker urls here, before creating an editor
      // EditorHelper.initWorkerUrls();
      this.editor = _util_EditorHelper__WEBPACK_IMPORTED_MODULE_0__["default"].create(this.$refs.editor); // add overlay widget might not need it.

      this.addSaveBtn();
    },

    layout() {
      this.editor.layout();
    },

    showSuccess() {
      this.$toasted.show("Bookmark Saved!", {
        position: "bottom-right",
        duration: "2000",
        type: "success",
        class: "toast",
        action: {
          text: "dismiss",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        },
        icon: "✓"
      });
    },

    showError() {
      this.$toasted.show("Please Select a Bookmark", {
        position: "bottom-right",
        duration: "2000",
        type: "error",
        class: "toast",
        action: {
          text: "dismiss",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        },
        icon: "✓"
      });
    },

    addSaveBtn() {
      _util_EditorHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addBtn(this.editor, {
        text: "Save",
        id: "save-btn",
        onClick: () => {
          var script = this.editor.getValue();
          var encoded = _util_JavascriptUrlParser__WEBPACK_IMPORTED_MODULE_1__["default"].encode(script);

          if (!this.sharedState.currentBookmark) {
            this.showError();
          } else {
            chrome.bookmarks.update(this.sharedState.currentBookmark.id, {
              url: encoded
            }, () => {
              this.showSuccess();
            });
          }
        }
      });
    }

  }
});

/***/ })

})
//# sourceMappingURL=app.4ba91caafa72fac91aa3.hot-update.js.map