(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/crop-modal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/crop-modal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cropperjs */ "./node_modules/vue-cropperjs/dist/VueCropper.js");
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1__);
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'crop-modal',
  components: {
    VueCropper: vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      imgSrc: '',
      ratio: 9 / 16,
      duration: 15
    };
  },
  methods: {
    initData: function initData(data) {
      this.imgSrc = data;
      this.$refs.cropper.replace(data);
    },
    initRate: function initRate(ratio) {
      this.ratio = ratio;
    },
    handleOk: function handleOk(e) {
      var cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.$emit('handleCropImage', {
        img: cropImg,
        duration: this.duration
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/progress-modal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/progress-modal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'progress-modal',
  props: {
    progress: {
      type: Number,
      "default": 0
    },
    total: {
      type: Number,
      "default": 0
    },
    mode: {
      type: Number,
      "default": 0
    }
  },
  computed: {
    showText: function showText() {
      if (this.mode === 1 && this.progress === 0) {
        return 'Creating video';
      } else if (this.progress === this.total) {
        return 'Merging video';
      } else {
        return "".concat(this.progress, " of ").concat(this.total, " steps are completed...");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/welcome.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/welcome.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_filepond__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-filepond */ "./node_modules/vue-filepond/dist/vue-filepond.js");
/* harmony import */ var vue_filepond__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_filepond__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! filepond/dist/filepond.min.css */ "./node_modules/filepond/dist/filepond.min.css");
/* harmony import */ var filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! filepond-plugin-file-validate-type */ "./node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js");
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_crop_modal_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/crop-modal.vue */ "./resources/js/views/components/crop-modal.vue");
/* harmony import */ var _components_progress_modal_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/progress-modal.vue */ "./resources/js/views/components/progress-modal.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//



var FilePond = vue_filepond__WEBPACK_IMPORTED_MODULE_1___default()(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_3___default.a);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'welcome',
  components: {
    FilePond: FilePond,
    CropModal: _components_crop_modal_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ProgressModal: _components_progress_modal_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      uploadFiles: [],
      video: '',
      image: '',
      pixelated: '',
      duration: 15,
      baseUrl: process.env.MIX_APP_URL,
      steps: 5,
      progress: 0,
      mode: 0,
      serverOptions: {
        url: "".concat(process.env.MIX_APP_URL, "/api/uploadVideo"),
        revert: null,
        process: {
          withCredentials: false
        }
      },
      ratioType: 'portrait',
      ratioTypes: [{
        text: 'Portrait (9 : 16)',
        value: 'portrait'
      }, {
        text: 'Landscape (16: 9)',
        value: 'landscape'
      }],
      mediaType: 'video',
      mediaTypes: [{
        text: 'Video',
        value: 'video'
      }, {
        text: 'Image',
        value: 'image'
      }]
    };
  },
  sockets: {
    connect: function connect() {},
    progress: function progress(data) {
      this.progress = data.progress;
    }
  },
  methods: {
    handleFilePondInit: function handleFilePondInit() {},
    handleProcessMedia: function handleProcessMedia(err, file) {
      if (err) {
        this.$bvToast.toast('Cannot upload the video', {
          title: 'Warning',
          variant: 'danger',
          solid: true,
          autoHideDelay: 2000
        });
      } else {
        var preview = this.$refs.preview;
        this.video = file.serverId;
        preview.src = "".concat(process.env.MIX_APP_URL, "/storage/").concat(file.serverId);
        preview.load();
      }
    },
    pixelate: function pixelate() {
      var _this = this;

      // check path
      if (this.video === '') {
        // show message
        this.$bvToast.toast('Upload video first', {
          title: 'Warning',
          variant: 'danger',
          solid: true,
          autoHideDelay: 2000
        });
        return;
      }

      this.progress = 0;
      this.mode = 0;
      this.$bvModal.show('progress-modal');
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/api/pixelate', {
        path: this.video,
        steps: this.steps,
        type: this.ratioType
      }).then(function (res) {
        var pixelatedVideo = _this.$refs.pixelatedVideo;
        _this.pixelated = res.data;
        pixelatedVideo.src = "".concat(process.env.MIX_APP_URL, "/storage/").concat(res.data);
        pixelatedVideo.load();
      })["catch"](function (err) {
        console.log(err);
      })["finally"](function () {
        _this.$bvModal.hide('progress-modal');
      });
    },
    resetUploader: function resetUploader() {
      var uploader = this.$refs.uploader;
      uploader.removeFiles();
    },
    onCropImage: function onCropImage(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = new FormData();
                data.append('file', e.img);
                data.append('duration', e.duration);
                _context.next = 5;
                return sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                  title: 'Do you want to create pixelate together?',
                  showDenyButton: true,
                  showCancelButton: true,
                  confirmButtonText: 'Create Both',
                  denyButtonText: 'Create Origin'
                });

              case 5:
                result = _context.sent;
                data.append('scaleType', _this2.ratioType);
                data.append('steps', _this2.steps);

                if (!result.isConfirmed) {
                  _context.next = 13;
                  break;
                }

                data.append('pixelate', 1);
                _this2.mode = 0;
                _context.next = 20;
                break;

              case 13:
                if (!result.isDenied) {
                  _context.next = 18;
                  break;
                }

                data.append('pixelate', 0);
                _this2.mode = 1;
                _context.next = 20;
                break;

              case 18:
                _this2.$bvToast.toast('Creating video is canceled', {
                  title: 'Warning',
                  variant: 'danger',
                  solid: true,
                  autoHideDelay: 2000
                });

                return _context.abrupt("return");

              case 20:
                _this2.progress = 0;

                _this2.$bvModal.show('progress-modal');

                axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/api/uploadImage', data).then(function (res) {
                  var preview = _this2.$refs.preview;
                  _this2.video = res.data.original;
                  preview.src = "".concat(process.env.MIX_APP_URL, "/storage/").concat(_this2.video);
                  preview.load();

                  if (result.isConfirmed) {
                    var pixelatedVideo = _this2.$refs.pixelatedVideo;
                    _this2.pixelated = res.data.pixelated;
                    pixelatedVideo.src = "".concat(process.env.MIX_APP_URL, "/storage/").concat(_this2.pixelated);
                    pixelatedVideo.load();
                  }
                })["catch"](function (err) {
                  console.log(err);
                })["finally"](function () {
                  _this2.$bvModal.hide('progress-modal');
                });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cropImage: function cropImage(e) {
      var _this3 = this;

      if (e.target.files.length === 0) return;
      var file = e.target.files[0];
      var reader = new FileReader();
      this.$bvModal.show('image-crop-modal');

      if (this.ratioType === 'portrait') {
        this.$refs.cropperRef.initRate(9 / 16);
      } else {
        this.$refs.cropperRef.initRate(16 / 9);
      }

      reader.onload = function (event) {
        _this3.$refs.cropperRef.initData(event.target.result);
      };

      reader.readAsDataURL(file);
    },
    onClickImage: function onClickImage() {
      this.$refs.files = new DataTransfer().files;
      this.$refs.uploadImageRef.click();
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/welcome.vue?vue&type=style&index=0&lang=scss&moduled=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/welcome.vue?vue&type=style&index=0&lang=scss&moduled=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#page-welcome {\n  padding: 50px;\n}\n#page-welcome .filepond--credits {\n  display: none !important;\n}\n#page-welcome .video-portrait {\n  width: 100%;\n  padding-top: 170%;\n  position: relative;\n}\n#page-welcome .video-landscape {\n  width: 100%;\n  padding-top: 56.25%;\n  position: relative;\n}\n#page-welcome video {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/welcome.vue?vue&type=style&index=0&lang=scss&moduled=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/welcome.vue?vue&type=style&index=0&lang=scss&moduled=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./welcome.vue?vue&type=style&index=0&lang=scss&moduled=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/welcome.vue?vue&type=style&index=0&lang=scss&moduled=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/crop-modal.vue?vue&type=template&id=0fb1ac4c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/crop-modal.vue?vue&type=template&id=0fb1ac4c& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-modal",
    {
      attrs: {
        id: "image-crop-modal",
        title: "Crop your image",
        "no-close-on-backdrop": "",
        "no-close-on-esc": "",
        size: "lg"
      },
      on: { ok: _vm.handleOk },
      scopedSlots: _vm._u([
        {
          key: "modal-footer",
          fn: function(ref) {
            var ok = ref.ok
            var cancel = ref.cancel
            return [
              _c(
                "div",
                {
                  staticClass:
                    "w-100 pl-5 pr-2 d-flex align-items-center justify-content-between"
                },
                [
                  _c("div", [
                    _c("span", { staticClass: "mr-2" }, [
                      _vm._v("Duration : ")
                    ]),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.duration,
                          expression: "duration"
                        }
                      ],
                      attrs: { type: "number" },
                      domProps: { value: _vm.duration },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.duration = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "danger" },
                          on: {
                            click: function($event) {
                              return cancel()
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "ml-2",
                          attrs: { variant: "success" },
                          on: {
                            click: function($event) {
                              return ok()
                            }
                          }
                        },
                        [_vm._v("Create Video")]
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          }
        }
      ])
    },
    [
      _c("vue-cropper", {
        ref: "cropper",
        attrs: {
          src: _vm.imgSrc,
          alt: "Source Image",
          "aspect-ratio": _vm.ratio
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/progress-modal.vue?vue&type=template&id=6da6b837&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/components/progress-modal.vue?vue&type=template&id=6da6b837& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-modal",
    {
      attrs: {
        id: "progress-modal",
        "hide-header": "",
        "hide-footer": "",
        "no-close-on-backdrop": "",
        "no-close-on-esc": "",
        centered: "",
        "body-bg-variant": "info",
        "body-text-variant": "light"
      }
    },
    [
      _c(
        "div",
        { staticClass: "d-flex align-items-center justify-content-center" },
        [
          _c("b-spinner", {
            staticClass: "mr-2",
            attrs: { label: "loading", variant: "light" }
          }),
          _vm._v(" "),
          _c("h5", { staticClass: "text-center mb-0" }, [
            _vm._v(_vm._s(_vm.showText))
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/welcome.vue?vue&type=template&id=0f28de28&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/welcome.vue?vue&type=template&id=0f28de28& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-welcome" } },
    [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "4" } },
                [
                  _c("h4", [_vm._v("Select your video type")]),
                  _vm._v(" "),
                  _c("b-form-radio-group", {
                    attrs: {
                      id: "ratio-type",
                      options: _vm.ratioTypes,
                      name: "ratio-type"
                    },
                    model: {
                      value: _vm.ratioType,
                      callback: function($$v) {
                        _vm.ratioType = $$v
                      },
                      expression: "ratioType"
                    }
                  }),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("h4", { staticClass: "mt-4" }, [
                    _vm._v("Select your type")
                  ]),
                  _vm._v(" "),
                  _c("b-form-radio-group", {
                    attrs: {
                      id: "media-type",
                      options: _vm.mediaTypes,
                      name: "media-type"
                    },
                    model: {
                      value: _vm.mediaType,
                      callback: function($$v) {
                        _vm.mediaType = $$v
                      },
                      expression: "mediaType"
                    }
                  }),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _vm.mediaType === "video"
                    ? _c(
                        "div",
                        [
                          _c("h4", { staticClass: "mt-5" }, [
                            _vm._v("Import your video file")
                          ]),
                          _vm._v(" "),
                          _c("file-pond", {
                            ref: "uploader",
                            staticClass: "mt-4",
                            attrs: {
                              name: "media-upload",
                              "label-idle":
                                "<h3>Drop files here...</h3><h5 class='text-danger'>*Video should be at least 10 seconds.</h5>",
                              "allow-multiple": false,
                              "allow-revert": false,
                              "accepted-file-types": "video/mp4",
                              server: _vm.serverOptions,
                              files: _vm.uploadFiles
                            },
                            on: {
                              init: _vm.handleFilePondInit,
                              processfile: _vm.handleProcessMedia
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "danger" },
                              on: { click: _vm.resetUploader }
                            },
                            [_vm._v("Reset")]
                          )
                        ],
                        1
                      )
                    : _c(
                        "div",
                        [
                          _c("h4", { staticClass: "mt-5" }, [
                            _vm._v("Import your image file")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "info" },
                              on: { click: _vm.onClickImage }
                            },
                            [_vm._v("Load Image")]
                          )
                        ],
                        1
                      ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("h4", { staticClass: "mt-5" }, [
                    _vm._v("Input your pixelate steps")
                  ]),
                  _vm._v(" "),
                  _c("b-form-input", {
                    attrs: { type: "number" },
                    model: {
                      value: _vm.steps,
                      callback: function($$v) {
                        _vm.steps = $$v
                      },
                      expression: "steps"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "mt-4",
                      attrs: { variant: "success" },
                      on: { click: _vm.pixelate }
                    },
                    [_vm._v("Pixelate")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "8" } },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        {
                          attrs: { md: _vm.ratioType === "portrait" ? 6 : 12 }
                        },
                        [
                          _c("h3", [_vm._v("Original Video")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              class:
                                _vm.ratioType === "portrait"
                                  ? "video-portrait"
                                  : "video-landscape"
                            },
                            [
                              _c(
                                "video",
                                {
                                  ref: "preview",
                                  attrs: { id: "preview-video", controls: "" }
                                },
                                [
                                  _c("source", {
                                    attrs: {
                                      src: _vm.video
                                        ? _vm.baseUrl + "/storage/" + _vm.video
                                        : "",
                                      type: "video/mp4"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        {
                          class: _vm.ratioType === "portrait" ? "mt-0" : "mt-3",
                          attrs: { md: _vm.ratioType === "portrait" ? 6 : 12 }
                        },
                        [
                          _c("h3", [_vm._v("Pixelated Video")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              class:
                                _vm.ratioType === "portrait"
                                  ? "video-portrait"
                                  : "video-landscape"
                            },
                            [
                              _c(
                                "video",
                                {
                                  ref: "pixelatedVideo",
                                  attrs: { id: "pixelated-video", controls: "" }
                                },
                                [
                                  _c("source", {
                                    attrs: {
                                      src: _vm.pixelated
                                        ? _vm.baseUrl +
                                          "/storage/" +
                                          _vm.pixelated
                                        : "",
                                      type: "video/mp4"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("crop-modal", {
        ref: "cropperRef",
        on: { handleCropImage: _vm.onCropImage }
      }),
      _vm._v(" "),
      _c("progress-modal", {
        ref: "progressRef",
        attrs: {
          progress: Number(_vm.progress),
          total: Number(_vm.steps),
          mode: Number(_vm.mode)
        }
      }),
      _vm._v(" "),
      _c("input", {
        ref: "uploadImageRef",
        attrs: {
          type: "file",
          accept: "image/png, image/jpeg",
          id: "image-upload",
          hidden: ""
        },
        on: { change: _vm.cropImage }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/components/crop-modal.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/components/crop-modal.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _crop_modal_vue_vue_type_template_id_0fb1ac4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crop-modal.vue?vue&type=template&id=0fb1ac4c& */ "./resources/js/views/components/crop-modal.vue?vue&type=template&id=0fb1ac4c&");
/* harmony import */ var _crop_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crop-modal.vue?vue&type=script&lang=js& */ "./resources/js/views/components/crop-modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _crop_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _crop_modal_vue_vue_type_template_id_0fb1ac4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _crop_modal_vue_vue_type_template_id_0fb1ac4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/crop-modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/crop-modal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/components/crop-modal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./crop-modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/crop-modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/crop-modal.vue?vue&type=template&id=0fb1ac4c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/components/crop-modal.vue?vue&type=template&id=0fb1ac4c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_modal_vue_vue_type_template_id_0fb1ac4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./crop-modal.vue?vue&type=template&id=0fb1ac4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/crop-modal.vue?vue&type=template&id=0fb1ac4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_modal_vue_vue_type_template_id_0fb1ac4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_modal_vue_vue_type_template_id_0fb1ac4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/components/progress-modal.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/components/progress-modal.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progress_modal_vue_vue_type_template_id_6da6b837___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-modal.vue?vue&type=template&id=6da6b837& */ "./resources/js/views/components/progress-modal.vue?vue&type=template&id=6da6b837&");
/* harmony import */ var _progress_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-modal.vue?vue&type=script&lang=js& */ "./resources/js/views/components/progress-modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _progress_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _progress_modal_vue_vue_type_template_id_6da6b837___WEBPACK_IMPORTED_MODULE_0__["render"],
  _progress_modal_vue_vue_type_template_id_6da6b837___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/components/progress-modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/components/progress-modal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/components/progress-modal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./progress-modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/progress-modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/components/progress-modal.vue?vue&type=template&id=6da6b837&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/components/progress-modal.vue?vue&type=template&id=6da6b837& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_modal_vue_vue_type_template_id_6da6b837___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./progress-modal.vue?vue&type=template&id=6da6b837& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/components/progress-modal.vue?vue&type=template&id=6da6b837&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_modal_vue_vue_type_template_id_6da6b837___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_progress_modal_vue_vue_type_template_id_6da6b837___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/pages/welcome.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/pages/welcome.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _welcome_vue_vue_type_template_id_0f28de28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.vue?vue&type=template&id=0f28de28& */ "./resources/js/views/pages/welcome.vue?vue&type=template&id=0f28de28&");
/* harmony import */ var _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _welcome_vue_vue_type_style_index_0_lang_scss_moduled_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.vue?vue&type=style&index=0&lang=scss&moduled=true& */ "./resources/js/views/pages/welcome.vue?vue&type=style&index=0&lang=scss&moduled=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _welcome_vue_vue_type_template_id_0f28de28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _welcome_vue_vue_type_template_id_0f28de28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/welcome.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/pages/welcome.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/welcome.vue?vue&type=style&index=0&lang=scss&moduled=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/pages/welcome.vue?vue&type=style&index=0&lang=scss&moduled=true& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_style_index_0_lang_scss_moduled_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./welcome.vue?vue&type=style&index=0&lang=scss&moduled=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/welcome.vue?vue&type=style&index=0&lang=scss&moduled=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_style_index_0_lang_scss_moduled_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_style_index_0_lang_scss_moduled_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_style_index_0_lang_scss_moduled_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_style_index_0_lang_scss_moduled_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/pages/welcome.vue?vue&type=template&id=0f28de28&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/welcome.vue?vue&type=template&id=0f28de28& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_template_id_0f28de28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./welcome.vue?vue&type=template&id=0f28de28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/welcome.vue?vue&type=template&id=0f28de28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_template_id_0f28de28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_template_id_0f28de28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);