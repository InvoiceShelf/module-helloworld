const { Fragment: e, createBlock: t, createElementBlock: n, createElementVNode: r, createVNode: i, defineComponent: a, openBlock: o, renderList: s, resolveComponent: c, toDisplayString: l, unref: u, withCtx: d } = window.__invoiceshelf_vue;
//#region resources/js/pages/DashboardPage.vue?vue&type=script&setup=true&lang.ts
var f = { class: "mt-6 grid gap-6 lg:grid-cols-3" }, p = { class: "p-6 sm:p-8" }, m = { class: "flex items-center gap-4" }, h = { class: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50" }, g = { class: "mt-6 flex flex-wrap gap-3" }, _ = { class: "rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body" }, v = { class: "p-6 sm:p-8" }, y = { class: "mt-4 space-y-3 text-sm text-muted" }, b = "Hello from an official InvoiceShelf module!", x = /* @__PURE__ */ a({
	__name: "DashboardPage",
	setup(a) {
		let x = [
			"The module route is registered before the app mounts.",
			"The sidebar contribution comes from the module registry.",
			"Settings are rendered and stored by the host per company.",
			"Version 1.0.1 was delivered as a signed, immutable update."
		];
		return (a, S) => {
			let C = c("BaseBreadcrumbItem"), w = c("BaseBreadcrumb"), T = c("BasePageHeader"), E = c("BaseIcon"), D = c("BaseCard"), O = c("BasePage");
			return o(), t(O, null, {
				default: d(() => [i(T, { title: "Hello World" }, {
					default: d(() => [i(w, null, {
						default: d(() => [i(C, {
							title: "Home",
							to: "dashboard"
						}), i(C, {
							title: "Hello World",
							to: "#",
							active: ""
						})]),
						_: 1
					})]),
					_: 1
				}), r("div", f, [i(D, { class: "lg:col-span-2" }, {
					default: d(() => [r("div", p, [
						r("div", m, [r("div", h, [i(E, {
							name: "HandRaisedIcon",
							class: "h-7 w-7 text-primary-500"
						})]), r("div", null, [S[0] ||= r("p", { class: "text-sm font-medium text-primary-600" }, "Installed from the marketplace", -1), r("h2", { class: "mt-1 text-2xl font-semibold text-heading" }, l(b))])]),
						S[3] ||= r("p", { class: "mt-5 max-w-2xl text-sm leading-6 text-muted" }, " This page, its sidebar link, and the settings form are supplied by an independently versioned InvoiceShelf module. The host loads only the module's compiled local asset. ", -1),
						S[4] ||= r("div", { class: "mt-5 inline-flex rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700" }, " Marketplace update path verified ", -1),
						r("div", g, [
							r("span", _, " Version " + l(u("1.1.0")), 1),
							S[1] ||= r("span", { class: "rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body" }, " Module API 1 ", -1),
							S[2] ||= r("span", { class: "rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body" }, " Signed package ", -1)
						])
					])]),
					_: 1
				}), i(D, null, {
					default: d(() => [r("div", v, [S[5] ||= r("h3", { class: "text-base font-semibold text-heading" }, "What this verifies", -1), r("ul", y, [(o(), n(e, null, s(x, (e) => r("li", {
						key: e,
						class: "flex items-start gap-2"
					}, [i(E, {
						name: "CheckCircleIcon",
						class: "mt-0.5 h-4 w-4 shrink-0 text-green-500"
					}), r("span", null, l(e), 1)])), 64))])])]),
					_: 1
				})])]),
				_: 1
			});
		};
	}
});
//#endregion
//#region resources/js/init.ts
window.InvoiceShelf.booting((e, t) => {
	t.addRoute("admin", {
		path: "modules/hello-world/dashboard",
		name: "modules.hello-world.dashboard",
		component: x,
		meta: { requiresAuth: !0 }
	});
});
//#endregion
