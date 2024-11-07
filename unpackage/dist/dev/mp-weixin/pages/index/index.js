"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const Zone = () => "../../components/Zone.js";
const videoVue = () => "../../components/videoVue.js";
const _sfc_main = {
  data() {
    return {
      title: ["账户", "转账", "对账", "回单"],
      list: ["代发工资", "一键测额", "普通查询", "电子发票开立", "还款申请", "持有理财产品", "代发查询", "秒贴申请", "持有票据查询", "全部"],
      ZoneImage: ["../static/jiaohang/bg_5.png", "../static/jiaohang/bg_6.png"],
      ZoneIoc: [
        { name: "财务软件", images: "../static/jiaohang/ioc-1.png" },
        { name: "法律咨询", images: "../static/jiaohang/ioc-2.png" },
        { name: "出行服务", images: "../static/jiaohang/ioc-3.png" },
        { name: "企业服务", images: "../static/jiaohang/ioc-4.png" }
      ],
      financeImage: ["../static/jiaohang/bg_one_1.png", "../static/jiaohang/bg_one_2.png"],
      financeIoc: [
        { name: "补录管理", images: "../static/jiaohang/bg_one_ioc_1.png" },
        { name: "账务核销管理", images: "../static/jiaohang/bg_one_ioc_2.png" },
        { name: "业务核销管理", images: "../static/jiaohang/bg_one_ioc_3.png" },
        { name: "日历模式", images: "../static/jiaohang/bg_one_ioc_4.png" }
      ],
      customer: [
        { name: "资信证明", ioc: "/static/jiaohang/ioc_one_1.png" },
        { name: "钱包升级", ioc: "/static/jiaohang/ioc_one_2.png" },
        { name: "预填办理", ioc: "/static/jiaohang/ioc_one_3.png" },
        { name: "更多服务", ioc: "/static/jiaohang/ioc_one_4.png" }
      ],
      currentTime: "",
      money: [
        { name: "美元", BuyPrice: "715.29", SellPrice: "718.22" },
        { name: "港币", BuyPrice: "91.98", SellPrice: "92.34" },
        { name: "欧元", BuyPrice: "765.92", SellPrice: "771.30" },
        { name: "英镑", BuyPrice: "918.79", SellPrice: "925.23" },
        { name: "日元", BuyPrice: "4638.49", SellPrice: "4671.07" }
      ],
      Hot: [
        {
          title: "【收市点评】三大股指冲高回落，全球经济恢复态势仍然偏弱",
          data: "交硬基金 147看过",
          time: "08:28",
          bgImage: "../../static/jiaohang/hot_1.png"
        },
        {
          title: "【债市必看】11.06债市播报",
          data: "中欧基金 255看过",
          time: "11-06",
          bgImage: "../../static/jiaohang/hot_2.png"
        },
        {
          title: "从债市发展讲起,聊聊利率债的配置价值|多知产周记",
          data: "中欧基金 94看过",
          time: "11-06",
          bgImage: "../../static/jiaohang/hot_3.png"
        }
      ]
    };
  },
  mounted() {
    this.updateCurrentTime();
    setInterval(this.updateCurrentTime, 1e3);
  },
  methods: {
    updateCurrentTime() {
      const now = /* @__PURE__ */ new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      this.currentTime = `${hours}:${minutes}:${seconds}`;
    }
  },
  components: {
    Zone,
    videoVue
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_Zone = common_vendor.resolveComponent("Zone");
  const _component_videoVue = common_vendor.resolveComponent("videoVue");
  (_easycom_uni_search_bar2 + _component_Zone + _component_videoVue)();
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
        a: `../../static/jiaohang/Nav_${item}.png`,
        b: item
      };
    }),
    c: common_vendor.f($data.title, (item, index, i0) => {
      return {
        a: `../../static/jiaohang/title_${index + 1}.png`,
        b: common_vendor.t(item),
        c: index
      };
    }),
    d: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: `../../static/jiaohang/list-${index + 1}.png`,
        b: common_vendor.t(item),
        c: index
      };
    }),
    e: common_assets._imports_0,
    f: common_assets._imports_1,
    g: common_vendor.f(3, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    h: common_assets._imports_2,
    i: common_assets._imports_3,
    j: common_assets._imports_4,
    k: common_assets._imports_5,
    l: common_vendor.p({
      Image: $data.ZoneImage,
      Ioc: $data.ZoneIoc
    }),
    m: common_vendor.p({
      Image: $data.financeImage,
      Ioc: $data.financeIoc
    }),
    n: common_assets._imports_6,
    o: common_assets._imports_7,
    p: common_assets._imports_8,
    q: common_assets._imports_9,
    r: common_vendor.f($data.customer, (item, index, i0) => {
      return {
        a: item.ioc,
        b: common_vendor.t(item.name),
        c: index
      };
    }),
    s: common_vendor.t($data.currentTime),
    t: common_vendor.f($data.money, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.BuyPrice),
        c: common_vendor.t(item.SellPrice),
        d: index
      };
    }),
    v: common_vendor.f($data.Hot, (item, idnex, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.data),
        c: common_vendor.t(item.time),
        d: item.bgImage
      };
    }),
    w: _ctx.index
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
