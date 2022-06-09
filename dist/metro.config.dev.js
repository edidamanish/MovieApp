"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
var _require = require('metro-config'),
    getDefaultConfig = _require.getDefaultConfig;

module.exports = function _callee() {
  var _ref, _ref$resolver, sourceExts, assetExts;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getDefaultConfig());

        case 2:
          _ref = _context2.sent;
          _ref$resolver = _ref.resolver;
          sourceExts = _ref$resolver.sourceExts;
          assetExts = _ref$resolver.assetExts;
          return _context2.abrupt("return", {
            transformer: {
              getTransformOptions: function getTransformOptions() {
                return regeneratorRuntime.async(function getTransformOptions$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", {
                          transform: {
                            experimentalImportSupport: false,
                            inlineRequires: true
                          }
                        });

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              },
              babelTransformerPath: require.resolve('react-native-svg-transformer')
            },
            resolver: {
              assetExts: assetExts.filter(function (ext) {
                return ext !== 'svg';
              }),
              sourceExts: [].concat(_toConsumableArray(sourceExts), ['svg'])
            }
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}();