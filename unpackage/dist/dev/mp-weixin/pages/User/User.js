"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      UserList: ["云上交行", "电子营业执照", "电子渠道签约", "SWIFT", "智慧记账", "利率查询", "银行对账"],
      UserListT: [
        {
          title: "金融助手",
          list: [
            { name: "云上交行", image: "../../static/jiaohang/My-List-1.png" },
            { name: "电子营业执照", image: "../../static/jiaohang/My-List-2.png" },
            { name: "电子渠道签约", image: "../../static/jiaohang/My-List-3.png" },
            { name: "SWIFT", image: "../../static/jiaohang/My-List-4.png" },
            { name: "智慧记账", image: "../../static/jiaohang/My-List-5.png" },
            { name: "利率查询", image: "../../static/jiaohang/My-List-6.png" },
            { name: "银行对账", image: "../../static/jiaohang/My-List-7.png" }
          ]
        },
        {
          title: "增值服务",
          // list:['财务软件','法律质询','出行服务','企业服务','酒店甄选'],
          list: [
            { name: "财务软件", image: "../../static/jiaohang/My-List-one-1.png" },
            { name: "法律质询", image: "../../static/jiaohang/My-List-one-2.png" },
            { name: "出行服务", image: "../../static/jiaohang/My-List-one-3.png" },
            { name: "企业服务", image: "../../static/jiaohang/My-List-one-4.png" },
            { name: "酒店甄选", image: "../../static/jiaohang/My-List-one-5.png" }
          ]
        },
        {
          title: "安全中心",
          // list:['版本更新','蓝牙激活','用户名登录设置','隐私协议'],
          list: [
            { name: "版本更新", image: "../../static/jiaohang/My-List-tow-1.png" },
            { name: "蓝牙激活", image: "../../static/jiaohang/My-List-tow-2.png" },
            { name: "用户名登录设置", image: "../../static/jiaohang/My-List-tow-3.png" },
            { name: "隐私协议", image: "../../static/jiaohang/My-List-tow-4.png" }
          ]
        }
      ]
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      radius: "50",
      ["bg-color"]: "none",
      placeholder: "搜索",
      clearButton: "auto",
      cancelButton: "none"
    }),
    b: common_vendor.f(3, (item, k0, i0) => {
      return {
        a: `../../static/jiaohang/Nav_my_${item}.png`,
        b: item
      };
    }),
    c: common_vendor.f(_ctx.title, (item, index, i0) => {
      return {
        a: `../../static/jiaohang/title_${index + 1}.png`,
        b: common_vendor.t(item),
        c: index
      };
    }),
    d: common_vendor.f($data.UserListT, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.f(item.list, (item2, index, i1) => {
          return {
            a: item2.image,
            b: common_vendor.t(item2.name),
            c: index
          };
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1e1b347f"]]);
wx.createPage(MiniProgramPage);
