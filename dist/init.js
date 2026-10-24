const { Fragment: e, computed: t, createBlock: n, createCommentVNode: r, createElementBlock: i, createElementVNode: a, createTextVNode: o, createVNode: s, defineComponent: c, h: l, normalizeClass: u, onMounted: d, openBlock: f, ref: p, renderList: m, resolveComponent: h, toDisplayString: g, unref: _, withCtx: v } = window.__invoiceshelf_vue;
//#region resources/js/pages/DashboardPage.vue?vue&type=script&setup=true&lang.ts
var y = { class: "grid items-start gap-5 lg:grid-cols-3" }, b = { class: "flex flex-col gap-5 lg:col-span-2" }, x = { class: "flex items-center gap-4" }, S = { class: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50" }, C = { class: "mt-6 flex flex-wrap gap-3" }, w = { class: "rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body" }, T = { class: "flex flex-col gap-6 sm:flex-row sm:items-center" }, E = { class: "flex h-40 w-40 shrink-0 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-black/5" }, D = ["src"], O = {
	key: 0,
	class: "mt-2 break-all text-xs text-subtle"
}, k = { class: "mt-4 space-y-3 text-sm text-muted" }, A = "Hello from an official InvoiceShelf module!", j = /* @__PURE__ */ c({
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
		let j = "2.0.0", M = [
			"The page is registered with registerPage before the app mounts.",
			"The sidebar contribution comes from the module registry.",
			"Settings are rendered and stored by the host per company.",
			"Invoices and customers show a Hello World panel and a Say hello action.",
			"The QR code comes from a package the module bundles.",
			`Version ${j} was delivered as a signed, immutable update.`
		];
		return (t, c) => {
			let d = h("BaseBreadcrumbItem"), p = h("BaseBreadcrumb"), N = h("BasePageHeader"), P = h("BaseIcon"), F = h("BaseCard"), I = h("BaseSpinner"), L = h("BasePage");
			return f(), n(L, null, {
				default: v(() => [s(N, { title: "Hello World" }, {
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
				}), a("div", y, [a("div", b, [s(F, null, {
					default: v(() => [a("div", null, [
						a("div", x, [a("div", S, [s(P, {
							name: "HandRaisedIcon",
							class: "h-7 w-7 text-primary-500"
						})]), a("div", null, [c[0] ||= a("p", { class: "text-sm font-medium text-primary-600" }, "Installed from the marketplace", -1), a("h2", { class: "mt-1 text-2xl font-semibold text-heading" }, g(A))])]),
						c[3] ||= a("p", { class: "mt-5 max-w-2xl text-sm leading-6 text-muted" }, " This page, its sidebar link, and the settings form are supplied by an independently versioned InvoiceShelf module. The host loads only the module's compiled local asset. ", -1),
						c[4] ||= a("div", { class: "mt-5 inline-flex rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700" }, " Marketplace update path verified ", -1),
						a("div", C, [
							a("span", w, " Version " + g(_(j)), 1),
							c[1] ||= a("span", { class: "rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body" }, " Module API 1.4 ", -1),
							c[2] ||= a("span", { class: "rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body" }, " Signed package ", -1)
						])
					])]),
					_: 1
				}), s(F, null, {
					default: v(() => [a("div", T, [a("div", E, [l.value ? (f(), i("img", {
						key: 0,
						src: l.value.data_uri,
						alt: "QR code that opens Hello World",
						class: "h-full w-full"
					}, null, 8, D)) : u.value ? (f(), n(P, {
						key: 2,
						name: "ExclamationTriangleIcon",
						class: "h-6 w-6 text-subtle"
					})) : (f(), n(I, {
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
				})]), s(F, null, {
					default: v(() => [a("div", null, [c[8] ||= a("h3", { class: "text-base font-semibold text-heading" }, "What this verifies", -1), a("ul", k, [(f(), i(e, null, m(M, (e) => a("li", {
						key: e,
						class: "flex items-start gap-2"
					}, [s(P, {
						name: "CheckCircleIcon",
						class: "mt-0.5 h-4 w-4 shrink-0 text-green-500"
					}), a("span", null, g(e), 1)])), 64))])])]),
					_: 1
				})])]),
				_: 1
			});
		};
	}
}), M = { class: "text-sm text-body" }, N = { class: "text-heading" }, P = /* @__PURE__ */ c({
	__name: "RecordGreetingPanel",
	props: { context: {} },
	setup(e) {
		let r = e, i = t(() => r.context.record()), c = t(() => r.context.entity.replace("-", " "));
		return (e, t) => {
			let r = h("BaseIcon"), l = h("BaseCard");
			return f(), n(l, { "container-class": "flex items-center gap-3 px-4 py-3" }, {
				default: v(() => [s(r, {
					name: "HandRaisedIcon",
					class: "h-5 w-5 shrink-0 text-primary-500"
				}), a("p", M, [
					o(" Hello World sees this " + g(c.value) + ": ", 1),
					a("strong", N, g(i.value?.number ?? `#${i.value?.id}`), 1),
					o(g(i.value?.status ? ` (${i.value.status})` : ""), 1)
				])]),
				_: 1
			});
		};
	}
}), F = /* @__PURE__ */ c({
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
}), I = /* @__PURE__ */ c({
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
}), L = "hello-world", R = `/admin/modules/${L}/dashboard`;
window.InvoiceShelf.booting((e, t, n) => {
	n.addMessages({ en: { hello_world: {
		open: "Hello World",
		say_hello: "Say hello"
	} } }), n.registerPage({
		id: "dashboard",
		module: L,
		path: "dashboard",
		component: z(n, j),
		meta: { title: "Hello World" }
	});
	for (let e of ["invoice", "customer"]) n.registerEntityPanel(e, {
		id: `${L}.greeting`,
		component: P
	}), n.registerEntityAction(e, "list", {
		id: `${L}.say-hello`,
		component: I,
		props: { notify: n.notify.bind(n) }
	});
	n.registerEntityAction("invoice", "detail", {
		id: `${L}.say-hello`,
		component: F,
		props: { notify: n.notify.bind(n) }
	}), n.registerCreateAction({
		id: `${L}.open`,
		label: "hello_world.open",
		icon: "HandRaisedIcon",
		to: R
	});
});
function z(e, t) {
	return c({ setup: (n, { attrs: r }) => () => l(t, {
		...r,
		client: e.client
	}) });
}
//#endregion
