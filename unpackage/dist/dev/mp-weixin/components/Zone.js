"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "Zone",
  data() {
    return {};
  },
  props: {
    Image: {
      type: Array
    },
    Ioc: {
      type: [Array, Object]
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.Image, (item, k0, i0) => {
      return {
        a: item,
        b: item
      };
    }),
    b: common_vendor.f($props.Ioc, (item, index, i0) => {
      return {
        a: item.images,
        b: common_vendor.t(item.name),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1aefc53b"]]);
wx.createComponent(Component);
