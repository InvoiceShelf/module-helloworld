const { Fragment: e, computed: t, createBlock: n, createCommentVNode: r, createElementBlock: i, createElementVNode: a, createTextVNode: o, createVNode: s, defineComponent: c, h: l, normalizeClass: u, onMounted: d, openBlock: f, ref: p, renderList: m, resolveComponent: h, toDisplayString: g, unref: _, withCtx: v } = window.__invoiceshelf_vue;
//#region resources/js/pages/DashboardPage.vue?vue&type=script&setup=true&lang.ts
var y = { class: "mt-6 grid gap-6 lg:grid-cols-3" }, b = { class: "p-6 sm:p-8" }, x = { class: "flex items-center gap-4" }, S = { class: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50" }, C = { class: "mt-6 flex flex-wrap gap-3" }, w = { class: "rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body" }, T = { class: "flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8" }, E = { class: "flex h-40 w-40 shrink-0 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-black/5" }, D = ["src"], O = {
	key: 0,
	class: "mt-2 break-all text-xs text-subtle"
}, k = { class: "p-6 sm:p-8" }, A = { class: "mt-4 space-y-3 text-sm text-muted" }, j = "Hello from an official InvoiceShelf module!", M = /* @__PURE__ */ c({
	__name: "DashboardPage",
	props: { client: { type: [Function, Object] } },
	setup(t) {
		let c = t, l = p(null), u = p(!1);
		d(async () => {
			try {
				let { data: e } = await c.client.get("/api/v1/hello-world/qr");
				l.value = e;
			} catch {
				u.value = !0;
			}
		});
		let M = "2.0.0", N = [
			"The page is registered with registerPage before the app mounts.",
			"The sidebar contribution comes from the module registry.",
			"Settings are rendered and stored by the host per company.",
			"Invoices and customers show a Hello World panel and a Say hello action.",
			"The QR code comes from a package the module bundles.",
			`Version ${M} was delivered as a signed, immutable update.`
		];
		return (t, c) => {
			let d = h("BaseBreadcrumbItem"), p = h("BaseBreadcrumb"), P = h("BasePageHeader"), F = h("BaseIcon"), I = h("BaseCard"), L = h("BaseSpinner"), R = h("BasePage");
			return f(), n(R, null, {
				default: v(() => [s(P, { title: "Hello World" }, {
					default: v(() => [s(p, null, {
						default: v(() => [s(d, {
							title: "Home",
							to: "dashboard"
						}), s(d, {
							title: "Hello World",
							to: "#",
							active: ""
						})]),
						_: 1
					})]),
					_: 1
				}), a("div", y, [
					s(I, { class: "lg:col-span-2" }, {
						default: v(() => [a("div", b, [
							a("div", x, [a("div", S, [s(F, {
								name: "HandRaisedIcon",
								class: "h-7 w-7 text-primary-500"
							})]), a("div", null, [c[0] ||= a("p", { class: "text-sm font-medium text-primary-600" }, "Installed from the marketplace", -1), a("h2", { class: "mt-1 text-2xl font-semibold text-heading" }, g(j))])]),
							c[3] ||= a("p", { class: "mt-5 max-w-2xl text-sm leading-6 text-muted" }, " This page, its sidebar link, and the settings form are supplied by an independently versioned InvoiceShelf module. The host loads only the module's compiled local asset. ", -1),
							c[4] ||= a("div", { class: "mt-5 inline-flex rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700" }, " Marketplace update path verified ", -1),
							a("div", C, [
								a("span", w, " Version " + g(_(M)), 1),
								c[1] ||= a("span", { class: "rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body" }, " Module API 1.4 ", -1),
								c[2] ||= a("span", { class: "rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body" }, " Signed package ", -1)
							])
						])]),
						_: 1
					}),
					s(I, { class: "lg:col-span-2" }, {
						default: v(() => [a("div", T, [a("div", E, [l.value ? (f(), i("img", {
							key: 0,
							src: l.value.data_uri,
							alt: "QR code that opens Hello World",
							class: "h-full w-full"
						}, null, 8, D)) : u.value ? (f(), n(F, {
							key: 2,
							name: "ExclamationTriangleIcon",
							class: "h-6 w-6 text-subtle"
						})) : (f(), n(L, {
							key: 1,
							class: "h-6 w-6 text-subtle"
						}))]), a("div", null, [
							c[5] ||= a("p", { class: "text-sm font-medium text-primary-600" }, "Rendered by a bundled package", -1),
							c[6] ||= a("h3", { class: "mt-1 text-lg font-semibold text-heading" }, "Scan to open Hello World on your phone", -1),
							c[7] ||= a("p", { class: "mt-2 max-w-xl text-sm leading-6 text-muted" }, [
								o(" The server draws this code with "),
								a("code", null, "chillerlan/php-qrcode"),
								o(", a library InvoiceShelf does not ship. The module carries it in its "),
								a("code", null, "bundle/"),
								o(" folder, built at release against the host's own packages and checked by the host when the module is installed. ")
							], -1),
							l.value ? (f(), i("p", O, g(l.value.target), 1)) : r("", !0)
						])])]),
						_: 1
					}),
					s(I, null, {
						default: v(() => [a("div", k, [c[8] ||= a("h3", { class: "text-base font-semibold text-heading" }, "What this verifies", -1), a("ul", A, [(f(), i(e, null, m(N, (e) => a("li", {
							key: e,
							class: "flex items-start gap-2"
						}, [s(F, {
							name: "CheckCircleIcon",
							class: "mt-0.5 h-4 w-4 shrink-0 text-green-500"
						}), a("span", null, g(e), 1)])), 64))])])]),
						_: 1
					})
				])]),
				_: 1
			});
		};
	}
}), N = { class: "flex items-center gap-3 p-4" }, P = { class: "text-sm text-body" }, F = { class: "text-heading" }, I = {
	key: 0,
	class: "text-muted"
}, L = /* @__PURE__ */ c({
	__name: "RecordGreetingPanel",
	props: { context: {} },
	setup(e) {
		let c = e, l = t(() => c.context.record()), u = t(() => c.context.entity.replace("-", " "));
		return (e, t) => {
			let c = h("BaseIcon"), d = h("BaseCard");
			return f(), n(d, null, {
				default: v(() => [a("div", N, [s(c, {
					name: "HandRaisedIcon",
					class: "h-5 w-5 shrink-0 text-primary-500"
				}), a("p", P, [
					o(" Hello World sees this " + g(u.value) + ": ", 1),
					a("strong", F, g(l.value?.number ?? `#${l.value?.id}`), 1),
					l.value?.status ? (f(), i("span", I, "(" + g(l.value.status) + ")", 1)) : r("", !0)
				])])]),
				_: 1
			});
		};
	}
}), R = /* @__PURE__ */ c({
	__name: "SayHelloButton",
	props: {
		context: {},
		notify: { type: Function }
	},
	setup(e) {
		let t = e;
		function r() {
			let e = t.context.record();
			t.notify("success", `Hello, ${e?.number ?? `#${e?.id}`}!`);
		}
		return (e, t) => {
			let i = h("BaseIcon"), a = h("BaseButton");
			return f(), n(a, {
				variant: "primary-outline",
				onClick: r
			}, {
				left: v((e) => [s(i, {
					name: "HandRaisedIcon",
					class: u(e.class)
				}, null, 8, ["class"])]),
				default: v(() => [o(" " + g(e.$t("hello_world.say_hello")), 1)]),
				_: 1
			});
		};
	}
}), z = /* @__PURE__ */ c({
	__name: "SayHelloMenuItem",
	props: {
		context: {},
		notify: { type: Function }
	},
	setup(e) {
		let t = e;
		function r() {
			let e = t.context.record();
			t.notify("success", `Hello, ${e?.number ?? `#${e?.id}`}!`);
		}
		return (e, t) => {
			let i = h("BaseIcon"), a = h("BaseDropdownItem");
			return f(), n(a, { onClick: r }, {
				default: v(() => [s(i, {
					name: "HandRaisedIcon",
					class: "me-3 h-5 w-5 text-subtle"
				}), o(" " + g(e.$t("hello_world.say_hello")), 1)]),
				_: 1
			});
		};
	}
}), B = "hello-world", V = `/admin/modules/${B}/dashboard`;
window.InvoiceShelf.booting((e, t, n) => {
	n.addMessages({ en: { hello_world: {
		open: "Hello World",
		say_hello: "Say hello"
	} } }), n.registerPage({
		id: "dashboard",
		module: B,
		path: "dashboard",
		component: H(n, M),
		meta: { title: "Hello World" }
	});
	for (let e of ["invoice", "customer"]) n.registerEntityPanel(e, {
		id: `${B}.greeting`,
		component: L
	}), n.registerEntityAction(e, "list", {
		id: `${B}.say-hello`,
		component: z,
		props: { notify: n.notify.bind(n) }
	});
	n.registerEntityAction("invoice", "detail", {
		id: `${B}.say-hello`,
		component: R,
		props: { notify: n.notify.bind(n) }
	}), n.registerCreateAction({
		id: `${B}.open`,
		label: "hello_world.open",
		icon: "HandRaisedIcon",
		to: V
	});
});
function H(e, t) {
	return c({ setup: (n, { attrs: r }) => () => l(t, {
		...r,
		client: e.client
	}) });
}
//#endregion
