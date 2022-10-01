var y = Object.defineProperty;
var T = (o, s, e) => s in o ? y(o, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[s] = e;
var n = (o, s, e) => (T(o, typeof s != "symbol" ? s + "" : s, e), e);
import l from "lodash.merge";
const u = {
  showTransitionDuration: "200ms",
  lang: "fa",
  onLoad: () => {
  },
  drivers: ["copy", "telegram", "facebook", "whatsapp", "twitter", "linkedin"],
  ripple: !0,
  mode: "normal"
}, m = "rtl", g = "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u062A\u0644\u06AF\u0631\u0627\u0645", E = "\u06A9\u067E\u06CC \u0644\u06CC\u0646\u06A9", C = "\u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u06A9\u067E\u06CC \u0634\u062F!", f = "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u0648\u0627\u062A\u0633\u0627\u067E", L = "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u062A\u0648\u06CC\u06CC\u062A\u0631", w = "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646", h = {
  Direction: m,
  Telegram: g,
  Copy_Link: E,
  CopiedSuccessfully: C,
  Whatsapp: f,
  Twitter: L,
  Linkedin: w
}, k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Direction: m,
  Telegram: g,
  Copy_Link: E,
  CopiedSuccessfully: C,
  Whatsapp: f,
  Twitter: L,
  Linkedin: w,
  default: h
}, Symbol.toStringTag, { value: "Module" }));
class a {
  constructor(s, e) {
    n(this, "lang");
    n(this, "mainEl", null);
    n(this, "options");
    n(this, "rippleColor", "#ffffff75");
    n(this, "rippleInitialized", !1);
    this.options = e, this.lang = s;
  }
  getButtonText() {
    return this.lang[this.buttonText.replaceAll(" ", "_")] || this.buttonText;
  }
  onClick(s) {
  }
  getName() {
    return this.constructor.name;
  }
}
const D = `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M 20.302734 2.984375 C 20.013769 2.996945 19.748583 3.080055 19.515625 3.171875 C 19.300407 3.256634 18.52754 3.5814726 17.296875 4.0976562 C 16.06621 4.61384 14.435476 5.2982348 12.697266 6.0292969 C 9.2208449 7.4914211 5.314238 9.1361259 3.3125 9.9785156 C 3.243759 10.007156 2.9645852 10.092621 2.65625 10.328125 C 2.3471996 10.564176 2.0039062 11.076462 2.0039062 11.636719 C 2.0039062 12.088671 2.2295201 12.548966 2.5019531 12.8125 C 2.7743861 13.076034 3.0504903 13.199244 3.28125 13.291016 L 3.28125 13.289062 C 4.0612776 13.599827 6.3906939 14.531938 6.9453125 14.753906 C 7.1420423 15.343433 7.9865895 17.867278 8.1875 18.501953 L 8.1855469 18.501953 C 8.3275588 18.951162 8.4659791 19.243913 8.6582031 19.488281 C 8.7543151 19.610465 8.8690398 19.721184 9.0097656 19.808594 C 9.0637596 19.842134 9.1235454 19.868148 9.1835938 19.892578 C 9.191962 19.896131 9.2005867 19.897012 9.2089844 19.900391 L 9.1855469 19.894531 C 9.2029579 19.901531 9.2185841 19.911859 9.2363281 19.917969 C 9.2652427 19.927926 9.2852873 19.927599 9.3242188 19.935547 C 9.4612233 19.977694 9.5979794 20.005859 9.7246094 20.005859 C 10.26822 20.005859 10.601562 19.710937 10.601562 19.710938 L 10.623047 19.695312 L 12.970703 17.708984 L 15.845703 20.369141 C 15.898217 20.443289 16.309604 21 17.261719 21 C 17.829844 21 18.279025 20.718791 18.566406 20.423828 C 18.853787 20.128866 19.032804 19.82706 19.113281 19.417969 L 19.115234 19.416016 C 19.179414 19.085834 21.931641 5.265625 21.931641 5.265625 L 21.925781 5.2890625 C 22.011441 4.9067171 22.036735 4.5369631 21.935547 4.1601562 C 21.834358 3.7833495 21.561271 3.4156252 21.232422 3.2226562 C 20.903572 3.0296874 20.591699 2.9718046 20.302734 2.984375 z M 19.908203 5.1738281 C 19.799442 5.7198576 17.33401 18.105877 17.181641 18.882812 L 13.029297 15.041016 L 10.222656 17.414062 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272368 8.8887854 10.401283 11.664685 8.0058594 13.027344 C 7.8617016 12.96954 5.6973962 12.100458 4.53125 11.634766 C 6.6055146 10.76177 10.161156 9.2658083 13.472656 7.8730469 C 15.210571 7.142109 16.840822 6.4570977 18.070312 5.9414062 C 19.108158 5.5060977 19.649538 5.2807035 19.908203 5.1738281 z M 17.152344 19.025391 C 17.152344 19.025391 17.154297 19.025391 17.154297 19.025391 C 17.154252 19.025621 17.152444 19.03095 17.152344 19.03125 C 17.153615 19.024789 17.15139 19.03045 17.152344 19.025391 z"/></svg>\r
`;
class b extends a {
  constructor(e, t) {
    super(e, t);
    n(this, "buttonText", "Telegram");
    n(this, "icon", D);
    n(this, "backgroundColor", "#0088CC");
    n(this, "backgroundHoverColor", "#0371aa");
    n(this, "textColor", "#fff");
    n(this, "textHoverColor", "#fff");
  }
  getLink() {
    var e, t;
    return `https://telegram.me/share/url?url=${(e = this.options) == null ? void 0 : e.shareLink}&text=${encodeURIComponent((t = this.options) == null ? void 0 : t.shareText)}`;
  }
}
const _ = `<?xml version="1.0" encoding="iso-8859-1"?>\r
<svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
     viewBox="0 0 308 308" style="transform:scale(0.81);enable-background:new 0 0 308 308;" xml:space="preserve">\r
<g id="XMLID_468_">\r
	<path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156\r
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687\r
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887\r
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153\r
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348\r
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802\r
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922\r
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0\r
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458\r
		C233.168,179.508,230.845,178.393,227.904,176.981z"/>\r
    <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716\r
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396\r
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z\r
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188\r
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677\r
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867\r
		C276.546,215.678,222.799,268.994,156.734,268.994z"/>\r
</g>\r
</svg>\r
\r
`;
class H extends a {
  constructor(e, t) {
    super(e, t);
    n(this, "buttonText", "Whatsapp");
    n(this, "icon", _);
    n(this, "backgroundColor", "#25D366");
    n(this, "backgroundHoverColor", "#20bd5a");
    n(this, "textColor", "#fff");
    n(this, "textHoverColor", "#fff");
  }
  getLink() {
    var e, t;
    return `whatsapp://send?text=${(e = this.options) == null ? void 0 : e.shareText} 
 ${(t = this.options) == null ? void 0 : t.shareLink}`;
  }
}
const M = `\r
<svg style="transform:scale(0.83)" fill="currentColor" width="512px" height="512px" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"/></svg>\r
`;
class S extends a {
  constructor(e, t) {
    super(e, t);
    n(this, "buttonText", "Copy Link");
    n(this, "icon", M);
    n(this, "backgroundColor", "#797979");
    n(this, "backgroundHoverColor", "#5e5e5e");
    n(this, "textColor", "#fff");
    n(this, "textHoverColor", "#fff");
    n(this, "timeout", 0);
  }
  onClick(e) {
    super.onClick(e);
    const t = this.lang.CopiedSuccessfully, r = e.currentTarget.querySelector("div:nth-child(2)");
    if (r.innerHTML === t) {
      r.innerHTML = this.getButtonText();
      return;
    }
    let x = window.location.href;
    navigator.clipboard.writeText(x).then(() => {
      r.innerHTML = t, r.style.transition = "300ms all", r.style.transform = "scale(1)", r.style.transform = `scale(1.07) translateX(${this.lang.Direction === "rtl" ? "-" : ""}4px)`, clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        r.innerHTML = this.getButtonText(), r.style.transition = "none", r.style.transform = "scale(1)";
      }, 5e3);
    });
  }
}
const z = `<svg\r
        xmlns="http://www.w3.org/2000/svg"\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="currentColor"\r
        stroke-width="2.4"\r
        stroke-linecap="round"\r
        stroke-linejoin="round"\r
>\r
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z" />\r
</svg>\r
`;
class O extends a {
  constructor(e, t) {
    super(e, t);
    n(this, "buttonText", "Twitter");
    n(this, "icon", z);
    n(this, "backgroundColor", "#1DA1F2");
    n(this, "backgroundHoverColor", "#1a93dd");
    n(this, "textColor", "#fff");
    n(this, "textHoverColor", "#fff");
  }
  getLink() {
    var e, t;
    return `https://twitter.com/share?text=${encodeURIComponent((e = this.options) == null ? void 0 : e.shareText)}&url=${(t = this.options) == null ? void 0 : t.shareLink}`;
  }
}
const R = `<svg fill="currentColor" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"/></svg>\r
`;
class B extends a {
  constructor(e, t) {
    super(e, t);
    n(this, "buttonText", "Linkedin");
    n(this, "icon", R);
    n(this, "backgroundColor", "#0077B5");
    n(this, "backgroundHoverColor", "#026092");
    n(this, "textColor", "#fff");
    n(this, "textHoverColor", "#fff");
  }
  getLink() {
    var e, t;
    return `https://twitter.com/share?text=${encodeURIComponent((e = this.options) == null ? void 0 : e.shareText)}&url=${(t = this.options) == null ? void 0 : t.shareLink}`;
  }
}
const $ = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\r
    <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"/>\r
</svg>\r
`;
class I extends a {
  constructor(e, t) {
    super(e, t);
    n(this, "buttonText", "Facebook");
    n(this, "icon", $);
    n(this, "backgroundColor", "#4267B2");
    n(this, "backgroundHoverColor", "#355696");
    n(this, "textColor", "#fff");
    n(this, "textHoverColor", "#fff");
  }
  getLink() {
    var e, t;
    return `https://twitter.com/share?text=${encodeURIComponent((e = this.options) == null ? void 0 : e.shareText)}&url=${(t = this.options) == null ? void 0 : t.shareLink}`;
  }
}
const d = new Object({
  telegram: b,
  whatsapp: H,
  copy: S,
  twitter: O,
  linkedin: B,
  facebook: I
});
class c {
  constructor() {
    n(this, "eventListeners", []);
  }
  resolveDriver(s) {
    if (d.hasOwnProperty(s))
      return d[s];
    throw new Error(`Unknown driver: ${s}`);
  }
  shouldRenderDriver(s) {
    return !0;
  }
}
const P = {
  type: "column",
  animation: "fade-down"
};
class v extends c {
  constructor(e) {
    super();
    n(this, "sharee");
    n(this, "elementHovering", !1);
    n(this, "shareeElHovering", !1);
    n(this, "shareeEl");
    n(this, "driverListeners", {});
    n(this, "hideTimeout", 0);
    n(this, "options");
    this.sharee = e, this.shareeEl = document.createElement("div"), this.options = l({}, P, e.options.modeOptions);
  }
  show() {
    this.shareeEl.classList.add("showing"), setTimeout(() => {
      this.shareeEl.classList.add("show");
      const e = this.sharee.targetElement.getBoundingClientRect(), t = e.x, i = e.y;
      this.sharee.lang.Direction === "ltr" ? (this.shareeEl.style.left = `${t}px`, this.shareeEl.style.right = "unset") : (this.shareeEl.style.right = `${t}px`, this.shareeEl.style.left = "unset"), this.shareeEl.style.top = `${i + e.height}px`;
    });
  }
  hide() {
    var e;
    (e = this.shareeEl) == null || e.classList.remove("show"), clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(() => {
      var t;
      (t = this.shareeEl) == null || t.classList.remove("showing");
    }, Number.parseInt(this.sharee.options.showTransitionDuration));
  }
  elementOnMouseEnter() {
    this.elementHovering = !0, this.show();
  }
  elementOnMouseLeave() {
    setTimeout(() => this.elementHovering = !1), setTimeout(() => {
      this.shareeElHovering || this.hide();
    });
  }
  shareElOnMouseEnter() {
    this.elementHovering && this.show(), this.shareeElHovering = !0;
  }
  shareElOnMouseLeave() {
    setTimeout(() => this.shareeElHovering = !1), setTimeout(() => {
      this.elementHovering || this.hide();
    });
  }
  listenEvents() {
    this.shareeEl.addEventListener("mouseenter", this.shareElOnMouseEnter.bind(this)), this.shareeEl.addEventListener("mouseleave", this.shareElOnMouseLeave.bind(this));
    const e = this.elementOnMouseEnter.bind(this), t = this.elementOnMouseLeave.bind(this);
    this.sharee.targetElement.addEventListener("mouseenter", e), this.sharee.targetElement.addEventListener("mouseleave", t), this.eventListeners.push([this.sharee.targetElement, "mouseenter", e]), this.eventListeners.push([this.sharee.targetElement, "mouseleave", t]);
  }
  destroy() {
    window.shareeEl = this.shareeEl, this.eventListeners.forEach((e) => {
      e[0].removeEventListener(e[1], e[2]);
    }), this.shareeEl.parentElement.removeChild(this.shareeEl);
  }
  reRender() {
    this.destroy(), setTimeout(() => {
      this.render();
    });
  }
  render() {
    this.shareeEl = document.createElement("div"), this.shareeEl.classList.add("sharee__dropdown"), this.shareeEl.classList.add("sharee__" + this.sharee.lang.Direction), this.shareeEl.classList.add(this.options.animation), this.shareeEl.style.transition = "all " + this.sharee.options.showTransitionDuration, this.shareeEl.style.transitionProperty = "transform, opacity";
    for (let e of this.sharee.options.drivers) {
      if (!this.shouldRenderDriver(e))
        continue;
      const t = this.resolveDriver(e), i = new t(this.sharee.lang, {
        lang: this.sharee.lang,
        shareText: this.sharee.getShareText(),
        shareLink: this.sharee.getShareLink(),
        ripple: this.sharee.options.ripple
      }), r = this.renderDriver(i);
      this.shareeEl.appendChild(r);
    }
    document.body.appendChild(this.shareeEl), this.listenEvents(), this.options.type === "grid" ? this.shareeEl.classList.add("sharee__dropdown__grid") : this.options.type === "row" && this.shareeEl.classList.add("sharee__dropdown__row");
  }
  onDriverMouseEnter(e) {
    return () => {
      e.mainEl.style.backgroundColor = e.backgroundHoverColor, e.mainEl.style.color = e.textHoverColor;
    };
  }
  onDriverMouseLeave(e) {
    return () => {
      this.initDriverStyles(e);
    };
  }
  onDriverClick(e) {
    return (t) => {
      e.onClick(t);
    };
  }
  initDriverStyles(e) {
    var t, i;
    e.mainEl.style.backgroundColor = e.backgroundColor, e.mainEl.style.color = e.textColor, e.mainEl.style.transition = (((t = e.options) == null ? void 0 : t.transitionDuration) || "200ms") + " all", (i = e.options) != null && i.ripple && this.initRipple(e);
  }
  initRipple(e) {
    e.rippleInitialized || (e.rippleInitialized = !0, import("ripple-effects").then((t) => {
      t.default(e.mainEl, {
        background: e.rippleColor
      });
    }));
  }
  renderDriver(e) {
    e.mainEl = document.createElement("a"), "getLink" in e && (e.mainEl.href = e.getLink()), this.initDriverStyles(e), this.listenDriverEvents(e);
    const t = document.createElement("div");
    t.innerHTML = e.icon;
    const i = document.createElement("div");
    return i.innerHTML = e.getButtonText(), e.mainEl.appendChild(t), e.mainEl.appendChild(i), e.mainEl;
  }
  listenDriverEvents(e) {
    const t = this.onDriverMouseEnter(e), i = this.onDriverMouseLeave(e), r = this.onDriverClick(e);
    this.driverListeners[e.buttonText] = [t, i, r], e.mainEl.addEventListener("mouseenter", t), e.mainEl.addEventListener("mouseleave", i), e.mainEl.addEventListener("click", r);
  }
}
function p(o, s) {
  var e;
  do {
    if ((e = o == null ? void 0 : o.className) != null && e.includes(s))
      return !0;
    o = o.parentNode;
  } while (o);
  return !1;
}
class V extends v {
  constructor(s) {
    super(s), this.options.type = "row";
  }
  show() {
    this.shareeEl.classList.add("showing"), setTimeout(() => {
      this.shareeEl.classList.add("show");
    });
  }
  getDistanceFromTop() {
    return window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
  }
  getTooltipPosition() {
    let s;
    try {
      s = window.getSelection().getRangeAt(0).getBoundingClientRect();
    } catch {
      return { left: 0, top: 0 };
    }
    const e = 30, t = s.top, i = s.left + (s.width - e * this.sharee.options.drivers.length) / 2;
    return { top: t, left: i };
  }
  setPosition(s) {
    this.shareeEl.style.right = "unset";
    const { left: e, top: t } = this.getTooltipPosition();
    return e === 0 ? (this.hide(), !1) : (s.x + 300 > window.innerWidth ? this.shareeEl.style.left = e + "px" : this.shareeEl.style.left = e + "px", this.shareeEl.style.top = `${t + 26}px`, !0);
  }
  shouldRenderDriver(s) {
    return s !== "copy";
  }
  getSelectedText() {
    var s;
    try {
      window.getSelection().getRangeAt(0);
    } catch {
      return !1;
    }
    return window.getSelection ? (s = window.getSelection()) == null ? void 0 : s.toString() : typeof document.selection < "u" ? document.selection.createRange().text : "";
  }
  destroy() {
    super.destroy(), window.removeEventListener("resize", this.windowOnResize);
  }
  render() {
    super.render(), this.shareeEl.classList.add("sharee__text");
  }
  documentOnClick(s) {
    p(s.target, "sharee__text") || this.hide();
  }
  elementOnMouseUp(s) {
    const e = s.currentTarget;
    setTimeout(() => {
      const t = this.getSelectedText();
      !t || p(e, "sharee__text") || (this.sharee.options.shareText = t, this.reRender(), setTimeout(() => {
        this.show(), setTimeout(() => {
          this.setPosition(s);
        });
      }));
    });
  }
  windowOnResize() {
    this.hide();
  }
  listenEvents() {
    const s = this.elementOnMouseUp.bind(this), e = this.documentOnClick.bind(this);
    this.sharee.targetElement.addEventListener("mouseup", s), document.addEventListener("click", e);
    const t = this.windowOnResize.bind(this);
    window.addEventListener("resize", t), this.eventListeners.push([this.sharee.targetElement, "mouseup", s]), this.eventListeners.push([document, "click", e]), this.eventListeners.push([window, "resize", t]);
  }
  renderDriver(s) {
    s.mainEl = document.createElement("a"), s.mainEl.title = s.getButtonText(), "getLink" in s && (s.mainEl.href = s.getLink()), this.initDriverStyles(s), this.listenDriverEvents(s);
    const e = document.createElement("div");
    return e.innerHTML = s.icon, s.mainEl.appendChild(e), s.mainEl;
  }
}
const j = {
  noTitle: !1
};
class N extends c {
  constructor(e) {
    super();
    n(this, "sharee");
    n(this, "elementHovering", !1);
    n(this, "shareeElHovering", !1);
    n(this, "shareeEl");
    n(this, "driverListeners", {});
    n(this, "hideTimeout", 0);
    n(this, "options");
    this.sharee = e, this.shareeEl = document.createElement("div"), this.options = l({}, j, e.options.modeOptions);
  }
  hide() {
    var e;
    (e = this.shareeEl) == null || e.classList.remove("show"), clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(() => {
      var t;
      (t = this.shareeEl) == null || t.classList.remove("showing");
    }, Number.parseInt(this.sharee.options.showTransitionDuration));
  }
  destroy() {
    this.eventListeners.forEach((e) => {
      e[0].removeEventListener(e[1], e[2]);
    }), this.shareeEl.parentElement.removeChild(this.shareeEl);
  }
  reRender() {
    this.destroy(), setTimeout(() => {
      this.render();
    });
  }
  render() {
    this.shareeEl = document.createElement("div"), this.shareeEl.classList.add("sharee__normal"), this.shareeEl.classList.add("sharee__" + this.sharee.lang.Direction), this.shareeEl.style.transition = "all " + this.sharee.options.showTransitionDuration, this.shareeEl.style.transitionProperty = "transform, opacity";
    for (let e of this.sharee.options.drivers) {
      if (!this.shouldRenderDriver(e))
        continue;
      const t = this.resolveDriver(e), i = new t(this.sharee.lang, {
        lang: this.sharee.lang,
        shareText: this.sharee.getShareText(),
        shareLink: this.sharee.getShareLink(),
        ripple: this.sharee.options.ripple
      }), r = this.renderDriver(i);
      this.shareeEl.appendChild(r);
    }
    this.sharee.targetElement.appendChild(this.shareeEl);
  }
  onDriverClick(e) {
    return (t) => {
      e.onClick(t);
    };
  }
  initDriverStyles(e) {
    var t, i;
    e.mainEl.style.backgroundColor = e.backgroundColor, e.mainEl.style.color = e.textColor, e.mainEl.style.transition = (((t = e.options) == null ? void 0 : t.transitionDuration) || "200ms") + " background, 1s max-width", (i = e.options) != null && i.ripple && this.initRipple(e);
  }
  initRipple(e) {
    e.rippleInitialized || (e.rippleInitialized = !0, import("ripple-effects").then((t) => {
      t.default(e.mainEl, {
        background: e.rippleColor
      });
    }));
  }
  renderDriver(e) {
    e.mainEl = document.createElement("a"), "getLink" in e && (e.mainEl.href = e.getLink()), this.initDriverStyles(e), this.listenDriverEvents(e);
    const t = document.createElement("div");
    t.innerHTML = e.icon;
    const i = document.createElement("div");
    return i.innerHTML = e.getButtonText(), e.mainEl.appendChild(t), this.options.noTitle ? (e.mainEl.title = e.getButtonText(), e.mainEl.classList.add("sharee__no-title")) : e.mainEl.appendChild(i), e.mainEl.classList.add("sharee__driver__" + e.getName()), e.mainEl;
  }
  listenDriverEvents(e) {
    const t = this.onDriverClick(e);
    this.driverListeners[e.buttonText] = [t], e.mainEl.addEventListener("click", t);
  }
}
const U = {
  position: "top-right",
  noTitle: !1
};
class A extends c {
  constructor(e) {
    super();
    n(this, "sharee");
    n(this, "shareeEl");
    n(this, "driverListeners", {});
    n(this, "options");
    this.sharee = e, this.shareeEl = document.createElement("div"), this.options = l({}, U, e.options.modeOptions);
  }
  destroy() {
    window.shareeEl = this.shareeEl, console.log(this.shareeEl), this.eventListeners.forEach((e) => {
      e[0].removeEventListener(e[1], e[2]);
    }), this.shareeEl.parentElement.removeChild(this.shareeEl);
  }
  reRender() {
    this.destroy(), setTimeout(() => {
      this.render();
    });
  }
  getPositionClass() {
  }
  render() {
    this.shareeEl = document.createElement("div"), this.shareeEl.classList.add("sharee__fixed"), this.shareeEl.classList.add("sharee__" + this.sharee.lang.Direction), this.shareeEl.classList.add("sharee__position__" + this.options.position), this.shareeEl.style.transition = "all " + this.sharee.options.showTransitionDuration, this.shareeEl.style.transitionProperty = "transform, opacity";
    for (let e of this.sharee.options.drivers) {
      if (!this.shouldRenderDriver(e))
        continue;
      const t = this.resolveDriver(e), i = new t(this.sharee.lang, {
        lang: this.sharee.lang,
        shareText: this.sharee.getShareText(),
        shareLink: this.sharee.getShareLink(),
        ripple: this.sharee.options.ripple
      }), r = this.renderDriver(i);
      this.shareeEl.appendChild(r);
    }
    document.body.appendChild(this.shareeEl);
  }
  onDriverMouseEnter(e) {
    return () => {
      e.mainEl.style.backgroundColor = e.backgroundHoverColor, e.mainEl.style.color = e.textHoverColor;
    };
  }
  onDriverMouseLeave(e) {
    return () => {
      this.initDriverStyles(e);
    };
  }
  onDriverClick(e) {
    return (t) => {
      e.onClick(t);
    };
  }
  initDriverStyles(e) {
    var t, i;
    e.mainEl.style.backgroundColor = e.backgroundColor, e.mainEl.style.color = e.textColor, e.mainEl.style.transition = (((t = e.options) == null ? void 0 : t.transitionDuration) || "200ms") + " all", (i = e.options) != null && i.ripple && this.initRipple(e);
  }
  initRipple(e) {
    e.rippleInitialized || (e.rippleInitialized = !0, import("ripple-effects").then((t) => {
      t.default(e.mainEl, {
        background: e.rippleColor
      });
    }));
  }
  renderDriver(e) {
    e.mainEl = document.createElement("a"), "getLink" in e && (e.mainEl.href = e.getLink()), this.initDriverStyles(e);
    const t = document.createElement("div");
    t.innerHTML = e.icon;
    const i = document.createElement("div");
    return i.innerHTML = e.getButtonText(), e.mainEl.appendChild(t), this.options.noTitle ? (e.mainEl.title = e.getButtonText(), e.mainEl.classList.add("sharee__no-title")) : e.mainEl.appendChild(i), e.mainEl.classList.add("sharee__driver__" + e.getName()), e.mainEl;
  }
}
const F = {
  dropdown: v,
  text: V,
  normal: N,
  fixed: A
};
class q {
  constructor(s, e = u) {
    n(this, "options");
    n(this, "lang", h);
    n(this, "strategy");
    n(this, "targetElement");
    this.targetElement = s, this.options = l({}, u, e);
    const t = F[this.options.mode];
    if (typeof t > "u")
      throw new Error('Selected mode "' + e.mode + '" not found');
    this.strategy = new t(this), this.init().then(() => {
      this.strategy.render();
    });
  }
  async init() {
    this.targetElement.sharee = this, await this.setLang(this.options.lang, this.options.langs);
  }
  async setLang(s, e = {}) {
    const t = /* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en.7ffedfe0.js"), "../locales/fa.json": () => Promise.resolve().then(() => k) });
    let i = h;
    for (const r in t)
      r.includes(s) && (t[r] instanceof Function ? i = { ...await t[r]() } : i = { ...t[r] }, e[s] && l(i, e[s]));
    this.lang = i;
  }
  getShareText() {
    return this.options.shareText || document.title;
  }
  getShareLink() {
    return this.options.shareLink || window.location.href;
  }
  destroy() {
    this.strategy.destroy();
  }
}
export {
  q as S
};
