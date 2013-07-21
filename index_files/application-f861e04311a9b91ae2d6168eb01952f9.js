(function (t, e) {
	window.mixpanel = e;
	var i, o, n, r;
	i = t.createElement("script"), i.type = "text/javascript", i.async = !0, i.src = ("https:" === t.location.protocol ? "https:" : "http:") + "//cdn.mxpnl.com/libs/mixpanel-2.2.min.js", o = t.getElementsByTagName("script")[0], o.parentNode.insertBefore(i, o), e._i = [], e.init = function (t, i, o) {
		function s(t, e) {
			var i = e.split(".");
			2 == i.length && (t = t[i[0]], e = i[1]), t[e] = function () {
				t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
			}
		}
		var a = e;
		for ("undefined" != typeof o ? a = e[o] = [] : o = "mixpanel", a.people = a.people || [], n = ["disable", "track", "track_pageview", "track_links", "track_forms", "register", "register_once", "unregister", "identify", "alias", "name_tag", "set_config", "people.set", "people.increment", "people.track_charge", "people.append"], r = 0; n.length > r; r++) s(a, n[r]);
		e._i.push([t, i, o])
	}, e.__SV = 1.2
})(document, window.mixpanel || []), mixpanel.init("24f5da2893d951d7a91cc2d728f71a4f"), jQuery.mixpanel = function (t, e) {
	mixpanel[t].apply(mixpanel, e)
}, jQuery.track = function (t, e, i) {
	jQuery.mixpanel("track", [t, e, i])
};
for (var mxpMethods = ["alias", "identify", "register"], i = 0; mxpMethods.length > i; i++)(function (t) {
	jQuery[t] = function (e) {
		jQuery.mixpanel(t, [e])
	}
})(mxpMethods[i]);
window.adroll_adv_id = "YONWALBURNF6JB7WZPRONO", window.adroll_pix_id = "EFXFY5RMAJHKRLFEJXTEK7",
function () {
	var t = window.onload;
	window.onload = function () {
		__adroll_loaded = !0;
		var e = document.createElement("script"),
			i = "https:" == document.location.protocol ? "https://s.adroll.com" : "http://a.adroll.com";
		e.setAttribute("async", "true"), e.type = "text/javascript", e.src = i + "/j/roundtrip.js", ((document.getElementsByTagName("head") || [null])[0] || document.getElementsByTagName("script")[0].parentNode).appendChild(e), t && t()
	}
}(), jQuery.adroll = {
	cart: function () {
		this.track("add_to_bag")
	},
	checkout: function () {
		this.track("checkout_button")
	},
	purchase: function () {
		this.track("place_order")
	},
	signup: function () {
		this.track("join_now_login")
	},
	signin: function () {
		this.track("registered_user_login")
	},
	track: function (t) {
		window.adroll_segments = t, window.__adroll_loaded && window.__adroll && window.__adroll.render_pixel_code(window.adroll_adv_id, window.adroll_pix_id)
	}
};
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-20350581-1"]), _gaq.push(["_trackPageview"]),
function () {
	var t = document.createElement("script");
	t.type = "text/javascript", t.async = !0, t.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
	var e = document.getElementsByTagName("script")[0];
	e.parentNode.insertBefore(t, e)
}(), $(document).on("page:change", function () {
	_gaq.push(["_trackPageview"])
});
var fb_root = null,
	fb_events_bound = !1;
$(function () {
	loadFacebookSDK(), fb_events_bound || bindFacebookEvents()
});
var bindFacebookEvents = function () {
	$(document).on("page:fetch", saveFacebookRoot).on("page:change", restoreFacebookRoot).on("page:load", function () {
		FB && FB.XFBML.parse()
	}), fb_events_bound = !0
}, saveFacebookRoot = function () {
		fb_root = $("#fb-root").detach()
	}, restoreFacebookRoot = function () {
		$("#fb-root").length > 0 ? $("#fb-root").replaceWith(fb_root) : $("body").append(fb_root)
	}, loadFacebookSDK = function () {
		window.fbAsyncInit = initializeFacebookSDK, $.getScript("//connect.facebook.net/en_US/all.js")
	}, initializeFacebookSDK = function () {
		FB.init({
			appId: "126605720735590",
			channelUrl: "//" + window.location.host + "/channel.html",
			status: !0,
			cookie: !0,
			oauth: !0,
			xfbml: !0
		})
	};
jQuery.fb = {
	purchase: function () {
		(function () {
			var t = document.createElement("script");
			t.async = !0, t.src = "//connect.facebook.net/en_US/fp.js";
			var e = document.getElementsByTagName("script")[0];
			e.parentNode.insertBefore(t, e)
		})()
	}
}, window.twttr = function (t, e, i) {
	var o, n, r = t.getElementsByTagName(e)[0];
	if (!t.getElementById(i)) return n = t.createElement(e), n.id = i, n.async = !0, n.src = "//platform.twitter.com/widgets.js", r.parentNode.insertBefore(n, r), window.twttr || (o = {
		_e: [],
		ready: function (t) {
			o._e.push(t)
		}
	})
}(document, "script", "twitter-wjs"),
function () {
	window.E = window.E || {
		lib: {},
		models: {},
		views: {},
		collections: {},
		viewInstances: [],
		data: {
			Addresses: [],
			CreditCards: []
		},
		page: {},
		pages: {
			product: {},
			collection: {},
			map: {}
		},
		subs: {},
		Event: {
			Cart: {
				INIT: "cart init",
				BLINK: "cart blink",
				UPDATE: "cart update",
				COMEBACK: "cart:comeback"
			},
			TopBar: {
				STICK: "topbar stick",
				UNSTICK: "topbar unstick"
			}
		},
		sub: function (t) {
			for (var e = 1; arguments.length > e; e++) this.subs[t] = this.subs[t] || [], this.subs[t].push(arguments[e])
		},
		pub: function (t) {
			if (this.subs[t]) {
				var e = Array.prototype.slice.call(arguments, 1);
				e.unshift(t);
				for (var i = 0; this.subs[t].length > i; i++) this.subs[t][i].apply(this, e)
			}
		},
		object: {
			keys: function (t) {
				if (Object.hasOwnProperty("keys")) return Object.keys(t);
				var e = [];
				for (var i in t) t.hasOwnProperty(i) && e.push(i);
				return e
			}
		},
		inherit: function (t, e) {
			function i() {}
			i.prototype = e.prototype, t.superClass_ = e.prototype, t.prototype = new i, t.prototype.constructor = t
		},
		base: function (t, e) {
			var i = arguments.callee.caller;
			if (i.superClass_) return i.superClass_.constructor.apply(t, Array.prototype.slice.call(arguments, 1));
			for (var o = Array.prototype.slice.call(arguments, 2), n = !1, r = t.constructor; r; r = r.superClass_ && r.superClass_.constructor)
				if (r.prototype[e] === i) n = !0;
				else if (n) return r.prototype[e].apply(t, o);
			if (t[e] === i) return t.constructor.prototype[e].apply(t, o);
			throw Error("E.base called from a method of one name to a method of a different name")
		},
		inRange: function (t, e, i) {
			return !isNaN(t) && t >= e && i >= t
		},
		range: function (t, e, i) {
			var o = [];
			if ("number" == typeof t)
				for (o[0] = t, i = i || 1; e >= t + i;) o[o.length] = t += i;
			else {
				var n = "abcdefghijklmnopqrstuvwxyz";
				t === t.toUpperCase() && (e = e.toUpperCase(), n = n.toUpperCase()), n = n.substring(n.indexOf(t), n.indexOf(e) + 1), o = n.split("")
			}
			return o
		}
	}
}(),
function () {
	for (var t = ["section", "article", "nav", "header", "footer", "hgroup", "aside"], e = 0, i = t.length; i > e; e++) document.createElement(t[e])
}(), window.console = window.console || {
	info: jQuery.noop,
	debug: jQuery.noop,
	log: jQuery.noop,
	trace: jQuery.noop,
	error: jQuery.noop
}, jQuery.any = function (t, e) {
	return $.map(t, function (t) {
		var i = e(t);
		return i ? i : void 0
	}).length > 0
}, jQuery.fn.fadeAndReplace = function (t, e) {
	return this.fadeOut("slow"), this.queue(function () {
		$(this).text(t), $(this).dequeue()
	}), this.fadeIn("fast", function () {
		e && e()
	}), this
}, jQuery.prototype.slideAndFadeIn = function (t, e) {
	var i = this;
	this.css("opacity", 0).slideDown(t, function () {
		i.animate({
			opacity: 1
		}, t, e)
	})
}, jQuery.prototype.slideAndFadeOut = function (t, e) {
	var i = this;
	this.animate({
		opacity: 0
	}, t, function () {
		i.slideUp(t, e)
	})
}, makeDropDowns = function () {
	var t = $("#header"),
		e = $("#fixed-navigation"),
		i = $(".shop-drop-down[data-name=men]"),
		o = $(".shop-drop-down[data-name=women]");
	new E.lib.AccountDropDown($("#account-trigger"), $(".account-dropdown")), new E.lib.ShopDropDown(t.find(".shop-li[data-name=men]"), i), new E.lib.ShopDropDown(t.find(".shop-li[data-name=women]"), o), new E.lib.StickyShopDropDown(e.find(".shop-li[data-name=women]"), o), new E.lib.StickyShopDropDown(e.find(".shop-li[data-name=men]"), i)
}, $(document).on("ready page:change", function () {
	$("input, textarea").placeholder(), E.lib.Helpers.isMobile() || $(".tooltip").tipTip(), makeDropDowns(), E.page.LandingSlider = new LandingSlider($("#landing-screens").find(".slides"), 444, 444), new E.lib.HoverCart($("#cart-trigger"), $("#cart_dropdown")), new E.lib.StickyHoverCart($("#second-trigger"), $("#cart_dropdown"))
}), $(document).on("ready", function () {
	$(document).on("click", "#share", function () {
		this.select()
	}), $(document).on("click", ".facebook-connect", function (t) {
		var e = E.collections.LineItems.packageAll(!0),
			i = {
				initial_cart_state: JSON.stringify(e)
			};
		FB.getLoginStatus(function (t) {
			"connected" == t.status ? $.post("/users", $.extend(t.authResponse, i)) : FB.login(function (t) {
				t.authResponse ? $.post("/users", $.extend(t.authResponse, i)) : (E.page.LandingSlider.toggleBottomBar(!0), E.page.LandingSlider.slide(2, "marginTop"))
			}, {
				scope: "email,user_birthday,user_location"
			})
		}), t.preventDefault()
	}), ! function () {
		$(document).on("click", ".share-pinterest", function (t) {
			var e = $(this),
				i = screen.width / 2 - 332.5,
				o = screen.height / 2 - 165,
				n = e.data("pinPath"),
				r = "http://pinterest.com/pin/create/button/?url=" + escape(n) + "&amp;media=" + escape($(".product-photo img").attr("src")) + "&amp;description=" + e.data("pinText");
			window.open(r, "pin", "height=330,width=700,resizable=1,left=" + i + ",top=" + o), t.preventDefault()
		})
	}(), $(document).on("click", ".toggle-modal-login", function () {
		$("#signup_prompt").reveal()
	}), $("form").on("submit", function () {
		var t = E.collections.LineItems.packageAll(!0);
		$("input[name=initial_cart_state]").val(JSON.stringify(t))
	}), E.showLoginPrompt = function (t) {
		var e = {
			dismissable: !0,
			slide: 2
		};
		t = $.extend(e, t || {});
		var i = !$.cookie("_everlane_user");
		E.page.LandingSlider.jump(i ? 2 : 0), $.track("prompted for sign up"), $("html, body").animate({
			scrollTop: 0
		}, 300, "easeOutQuart", function () {
			$("#modal-container").reveal({
				closeOnBackgroundClick: t.dismissable
			})
		})
	}, $(document).on("click", ".login-prompt", function (t) {
		t.preventDefault(), E.showLoginPrompt()
	}), E.restoreLineItems = function () {
		var t = new Persist.Store("Everlane"),
			e = E.isLoggedIn ? E.page.lineItemsJSON : JSON.parse(t.get("cart"));
		E.collections.LineItems.reset(e)
	}, $(document).on("click", ".scroll-to", function (t) {
		t.preventDefault();
		var e = $(t.currentTarget);
		$("html, body").animate({
			scrollTop: $(e.attr("href")).offset().top
		}, 400, "easeInOutQuad")
	}), $("#header").waypoint(function (t, e) {
		var i = "down" === e ? 0 : -50;
		"up" === e && ($("#cart_dropdown").fadeOut(200), $(".shop-drop-down.sticky").fadeOut(200), $(".minimal-cart-trigger").removeClass("drop-down-trigger-active")), $("#fixed-navigation").animate({
			top: i
		}, 300, "easeOutQuad", function () {
			E.pub("down" === e ? E.Event.TopBar.STICK : E.Event.TopBar.UNSTICK)
		})
	}, {
		offset: -180
	}), setTimeout(function () {
		E.lib.AlertCenter.init($(".alerts"))
	}, 500)
}), $(document).on("page:fetch", function () {
	E.lib.Helpers.isMobile() || $("#page-transition-preloader").show().data("component-object").begin()
}), $(document).on("page:receive", function () {
	for (var t = E.viewInstances.length; t--;) {
		var e = E.viewInstances.pop();
		console.log("removing:", e.toString()), e.remove()
	}
}), E.models.Address = Backbone.Model.extend({
	defaults: {
		id: null,
		primary: "",
		first_name: "",
		last_name: "",
		extended_address: "",
		street_address: "",
		city: "",
		state_id: "",
		postal_code: "",
		country: "",
		company: "",
		disabled: !1,
		address_type: "shipping"
	},
	urlRoot: "/api/addresses",
	activate: function () {
		this.set({
			disabled: !1
		})
	},
	deactivate: function () {
		this.set({
			disabled: !0
		})
	},
	toString: function () {
		return "E.models.Address"
	}
}), E.models.CreditCard = Backbone.Model.extend({
	defaults: {
		id: null,
		primary: "",
		type: "",
		number: "",
		first_name: "",
		last_name: ""
	},
	urlRoot: "/api/credit_cards",
	activate: function () {
		this.set({
			disabled: !1
		})
	},
	deactivate: function () {
		this.set({
			disabled: !0
		})
	},
	toString: function () {
		return "E.models.CreditCard"
	}
}), E.models.LineItem = Backbone.Model.extend({
	defaults: {
		sku: null,
		size: null,
		price: 0,
		title: null,
		active: !0,
		imageURL: null,
		quantity: 0,
		variantId: null,
		productId: null,
		collectionId: null,
		orderableState: null,
		restockDate: null,
		canUpdateQuantity: !1,
		homeTryOn: !1
	},
	initialize: function () {},
	activate: function () {
		this.set({
			active: !0,
			quantity: this.previous("quantity") || 1
		})
	},
	deactivate: function () {
		this.set({
			active: !1,
			quantity: 0
		})
	},
	to_wire: function () {
		return {
			quantity: this.get("quantity"),
			variant_id: this.get("variantId"),
			product_id: this.get("productId"),
			collection_id: this.get("collectionId"),
			home_try_on: this.get("homeTryOn")
		}
	},
	toString: function () {
		return "E.models.LineItem"
	}
}),
function () {
	var t = Backbone.Collection.extend({
		model: E.models.Address,
		bootstrap: function () {
			this.reset(E.data.Addresses)
		},
		primary: function () {
			return this.findWhere({
				primary: !0
			})
		},
		toString: function () {
			return "E.collections.Addresses"
		}
	});
	E.collections.Addresses = new t
}(),
function () {
	var t = Backbone.Collection.extend({
		model: E.models.CreditCard,
		bootstrap: function () {
			this.reset(E.data.CreditCards)
		},
		primary: function () {
			return this.findWhere({
				primary: !0
			})
		},
		toString: function () {
			return "E.collections.CreditCards"
		}
	});
	E.collections.CreditCards = new t
}(),
function () {
	var t = Backbone.Collection.extend({
		model: E.models.LineItem,
		store: new Persist.Store("Everlane"),
		initialize: function () {
			this.bind("add change", function (t) {
				this.send([t.to_wire()])
			}, this), this.bind("add change destroy reset", this.save, this)
		},
		packageAll: function (t) {
			return _.map(this.realLineItems(t), function (t) {
				return t.to_wire()
			}, this)
		},
		count: function () {
			return this.realLineItems().length
		},
		deepCount: function () {
			var t = 0;
			return _.each(this.realLineItems(), function (e) {
				t += e.get("quantity")
			}), t
		},
		realLineItems: function (t) {
			return this.filter(function (e) {
				return t || e.get("active")
			}, this)
		},
		save: function () {
			this.store.set("cart", JSON.stringify(this.where({
				active: !0
			}))), this.store.save()
		},
		isHomeTryOn: function () {
			return this.some(function (t) {
				return t.get("homeTryOn")
			})
		},
		send: function (t, e) {
			_.isArray(t) || (t = [t]), $.track("checkout: added item to cart"), $.adroll.cart(), E.isLoggedIn && $.ajax({
				type: "POST",
				url: "/orders/populate/",
				data: {
					line_items: t
				},
				complete: function (t, i) {
					"function" == typeof e && e(t, i)
				}
			})
		}
	});
	E.collections.LineItems = new t
}(), E.views.LineItemView = Backbone.View.extend({
	tagName: "li",
	templateSelector: "#line-item-template",
	className: "hovercart-item clearfix",
	template: null,
	events: {
		"click .remove": "remove",
		"click .restore": "restore"
	},
	initialize: function () {
		this.listenTo(this.model, "change:quantity", this.render)
	},
	render: function () {
		return this.model.get("quantity") ? this.$el.html(_.template($(this.templateSelector).html(), this.model.toJSON())) : this.remove(), this
	},
	update: function () {
		this.$el.html(_.template($(this.templateSelector).html(), this.model.toJSON()))
	},
	restore: function () {
		this.model.activate(), this.$el.find(".removed-line-item").hide(), this.$el.find(".active-line-item").css("opacity", 1).show()
	},
	remove: function () {
		this.model.deactivate(), this.$el.find(".active-line-item").css("opacity", 0).slideUp(500, "easeOutBack"), this.$el.find(".removed-line-item").fadeIn()
	}
}), E.views.UserInfoSnippetView = Backbone.View.extend({
	tagName: "li",
	templateSelector: null,
	events: {
		"click .remove": "remove",
		"click .restore": "restore",
		"click .make-primary": "makePrimary"
	},
	initialize: function () {
		this.listenTo(this.model, "change:primary", this.render)
	},
	render: function () {
		if (!this.templateSelector) throw new Error(this.toString() + " must implement `templateSelector`");
		return this.$el.html(_.template($(this.templateSelector).html(), this.model.toJSON())), this.primaryText = this.$(".primary-text"), this.restoreButton = this.$(".restore"), this.removeButton = this.$(".remove"), this.makePrimaryButton = this.$(".make-primary"), this.restoreButton.hide(), this.model.get("primary") ? (this.makePrimaryButton.hide(), this.removeButton.hide()) : this.primaryText.hide(), this.options.hideControls && (this.removeButton.hide(), this.makePrimaryButton.hide(), this.primaryText.hide()), this
	},
	restore: function () {
		this.$el.fadeTo(500, 1), this.restoreButton.hide(), this.removeButton.show(), this.model.get("primary") || this.makePrimaryButton.show(), this.model.set("disabled", !1), this.model.save()
	},
	remove: function () {
		this.$el.fadeTo(300, .3), this.restoreButton.show(), this.removeButton.hide(), this.makePrimaryButton.hide(), this.model.set("disabled", !0), this.model.save()
	},
	makePrimary: function () {
		this.primaryText.show(), this.removeButton.hide(), this.makePrimaryButton.hide(), this.model.set("primary", !0), this.model.save()
	},
	toString: function () {
		throw new Error("`UserInfoSnippetView` subclasses must implement `toString`")
	}
}), E.views.AddressListView = Backbone.View.extend({
	el: "ul.addresses",
	initialize: function () {
		E.viewInstances.push(this), this.listenTo(this.collection, "add", this.addAddress), this.listenTo(this.collection, "change:primary", this.updatePrimary), this.listenTo(this.collection, "reset", this.addAddresses), this.collection.bootstrap()
	},
	addAddress: function (t) {
		this.$el.prepend(new E.views.AddressView({
			model: t
		}).render().$el)
	},
	addAddresses: function () {
		this.collection.each(this.addAddress, this)
	},
	updatePrimary: function (t, e) {
		e && _.each(this.collection.without(t), function (t) {
			t.set("primary", !1)
		})
	},
	toString: function () {
		return "E.views.AddressListView"
	}
}), E.views.AddressView = E.views.UserInfoSnippetView.extend({
	templateSelector: "#address-template",
	toString: function () {
		return "E.views.AddressView"
	}
}), E.views.CartView = Backbone.View.extend({
	el: ".hovercart",
	events: {
		"click .show-all": "showAll"
	},
	initialize: function () {
		new E.views.CartHomeTryOnView({
			collection: this.collection
		}), $(".hovercart").on("click", ".show-all", $.proxy(this.showAll, this)), this.listenTo(this.collection, "add", this.addLineItem), this.listenTo(this.collection, "reset", this.addLineItems), this.listenTo(this.collection, "add reset", this.toggleFooter), this.listenTo(this.collection, "all", this.updateCount)
	},
	addLineItem: function (t) {
		var e = new E.views.LineItemView({
			model: t
		});
		this.$(".hovercart-list").prepend(e.render().$el)
	},
	addLineItems: function () {
		this.$(".hovercart-list").empty(), this.collection.each(this.addLineItem, this)
	},
	toggleFooter: function () {
		this.$(".hovercart-footer").toggle(!this.collection.isHomeTryOn())
	},
	showAll: function () {
		this.$(".show-all").remove(), this.$(".hovercart-list").addClass("all-showing")
	},
	updateCount: function () {
		var t = this.collection.count();
		this.$(".show-all").toggle(t > 4), this.$(".empty-bag-message").toggle(0 === t), this.$(".checkout-button").toggle(0 !== t), E.pub(E.Event.Cart.UPDATE, {
			authoritative: this.collection.deepCount()
		})
	},
	toString: function () {
		return "E.views.CartView"
	}
}), E.views.CheckoutView = Backbone.View.extend({
	el: "#page.checkout",
	initialize: function () {
		E.viewInstances.push(this), new E.views.AddressListView({
			collection: E.collections.Addresses
		}), new E.views.CreditCardListView({
			collection: E.collections.CreditCards
		}), this.renderPrimaryCreditCard(), this.renderPrimaryAddress(), this.listenTo(E.collections.LineItems, "reset", this.renderLineItems), this.listenTo(E.collections.LineItems, "change:quantity change:active", this.showSummaryLoadingAnimation), this.listenTo(E.collections.Addresses, "change:primary", this.onAddressChange), this.listenTo(E.collections.CreditCards, "change:primary", this.onCreditCardChange)
	},
	renderLineItems: function () {
		this.$(".reviewcart-list").empty(), E.collections.LineItems.each(function (t) {
			var e = new E.views.LineItemCheckoutView({
				model: t
			});
			this.$(".reviewcart-list").prepend(e.render().$el)
		})
	},
	showSummaryLoadingAnimation: function () {
		var t = this.$("#order-details").find(".js-preloader");
		this.$("#order_summary_container").fadeTo(200, .2, "easeOutQuad", function () {
			new E.lib.LoadingAnimation(t.removeClass("hidden")).begin()
		})
	},
	renderPrimaryAddress: function () {
		var t = E.collections.Addresses.primary();
		t && (this.addressView = new E.views.AddressView({
			model: t,
			hideControls: !0
		}), this.$(".shipping-address").html(this.addressView.render().$el))
	},
	renderPrimaryCreditCard: function () {
		var t = E.collections.CreditCards.primary();
		t && (this.creditCardView = new E.views.CreditCardView({
			model: E.collections.CreditCards.primary(),
			hideControls: !0
		}), this.$(".credit-card").html(this.creditCardView.render().$el))
	},
	onAddressChange: function () {
		this.renderPrimaryAddress(), $(".reveal-modal").trigger("reveal:close")
	},
	onCreditCardChange: function () {
		this.renderPrimaryCreditCard(), $(".reveal-modal").trigger("reveal:close")
	}
}), E.views.CreditCardListView = Backbone.View.extend({
	el: "ul.credit-cards",
	initialize: function () {
		E.viewInstances.push(this), this.listenTo(this.collection, "add", this.addCreditCard), this.listenTo(this.collection, "change:primary", this.updatePrimary), this.listenTo(this.collection, "reset", this.addCreditCards), this.collection.bootstrap()
	},
	addCreditCard: function (t) {
		this.$el.prepend(new E.views.CreditCardView({
			model: t
		}).render().$el)
	},
	addCreditCards: function () {
		this.collection.each(this.addCreditCard, this)
	},
	updatePrimary: function (t, e) {
		e && _.each(this.collection.without(t), function (t) {
			t.set("primary", !1)
		})
	},
	toString: function () {
		return "E.views.CreditCardListView"
	}
}), E.views.CreditCardView = E.views.UserInfoSnippetView.extend({
	templateSelector: "#credit-card-template",
	toString: function () {
		return "E.views.CreditCardView"
	}
}), E.views.LineItemCheckoutView = E.views.LineItemView.extend({
	events: {
		"click .remove": "remove",
		"click .restore": "restore",
		"click .update-quantity-button": "updateQuantity",
		"keypress .update-quantity-field": "showUpdateQuantityButton"
	},
	showUpdateQuantityButton: function (t) {
		var e = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]; - 1 !== $.inArray(t.which, e) && this.$el.find(".update-quantity-button").addClass("visible")
	},
	updateQuantity: function () {
		var t = parseInt(this.$el.find(".update-quantity-field").val());
		t ? this.model.set("quantity", t) : this.deactivate()
	}
}), E.views.OrdersView = Backbone.View.extend({
	el: "#page.orders",
	initialize: function () {
		E.viewInstances.push(this), new E.views.AddressListView({
			collection: E.collections.Addresses
		}), this.listenTo(E.collections.Addresses, "change:primary", this.onAddressChange)
	},
	renderPrimaryAddress: function () {
		this.addressView = new E.views.AddressView({
			model: E.collections.Addresses.primary(),
			hideControls: !0
		}), this.$(".shipping-address:first").html(this.addressView.render().$el)
	},
	onAddressChange: function () {
		this.renderPrimaryAddress(), $(".reveal-modal").trigger("reveal:close")
	},
	toString: function () {
		return "E.views.OrdersView"
	}
}),
function (t) {
	t.fn.EverlaneCollectionImage = function (e) {
		if (!E.lib.Helpers.isMobile()) {
			e = e || {};
			var i = e.speed || 300;
			return this.each(function () {
				var e = t(this).find(".main-product-link");
				e.attr("href");
				var o = t(this).find(".size-tray"),
					n = t(this).find("img"),
					r = n.clone().attr("src", n.data("hover-src")).css({
						display: "none",
						position: "absolute",
						bottom: 0,
						left: 0
					}).appendTo(e);
				t(this).on("mouseenter", function () {
					r.stop(!1, !0).fadeIn(i), o.stop(!1, !0).animate({
						opacity: .7
					}, i)
				}), t(this).on("mouseleave", function () {
					r.stop(!1, !0).fadeOut(i), o.stop(!1, !0).animate({
						opacity: 0
					}, i)
				})
			})
		}
	}
}(jQuery), E.lib.Slides = function (t) {
	t = t || {}, this.creepDuration = 4e3, this.creepDistance = 10, this.moveDuration = t.moveDuration || 1500, this.pauseDuration = 0, this.initDuration = 1500, this.afterInit = t.afterInit || $.noop, this.beforeInit = t.beforeInit || $.noop, this.container = $(t.container), this.nextButton = $(t.nextButton), this.prevButton = $(t.prevButton), this.proxy = $({});
	var e = this.container,
		i = this,
		o = this.viewport = e.find(".viewport");
	return o.find(".slide").css({
		position: "absolute",
		width: "100%",
		height: "100%",
		display: "none",
		top: 0,
		left: 0,
		zIndex: 10
	}), $(window).resize(function () {
		i.resize()
	}), this.resize(), this.beforeInit(), this.slides = this.viewport.find(".slide"), this.currentSlide().css({
		opacity: 0
	}).show(), this.vCenter(this.currentSlide()), this.currentSlide().animate({
		opacity: 1
	}, this.initDuration, function () {
		i.afterInit(i, i.currentSlide()), i.play()
	}), this.nextButton.on("click", function () {
		i.next()
	}), this.prevButton.on("click", function () {
		i.prev()
	}), this
}, $.extend(E.lib.Slides.prototype, {
	resize: function () {
		var t = this.container.width(),
			e = this.container.height();
		this.viewport.css({
			width: t,
			height: e
		}), this.proxy.trigger("resize", [t, e])
	},
	rollIn: function (t, e, i) {
		t.find(".slide-content").children().each(function (t) {
			$(this).delay(t * e).animate({
				opacity: 1
			}, i)
		})
	},
	rollOut: function (t, e, i) {
		t.find(".slide-content").children().each(function (t) {
			$(this).delay(t * e).animate({
				opacity: 0
			}, i)
		})
	},
	vCenter: function (t) {
		var e = t.find(".slide-content");
		e.hasClass("v-center") && e.css({
			marginTop: -e.height() / 2
		})
	},
	next: function (t, e) {
		if (this.lock) return !1;
		this.lock = !0;
		var i = this;
		e = e || $.noop, i.proxy.trigger("next", [i.nextSlide().index()]), this.transition(this.currentSlide(), this.nextSlide(), "right", t, function () {
			e(i, i.currentSlide())
		})
	},
	prev: function (t, e) {
		if (this.lock) return !1;
		this.lock = !0;
		var i = this;
		e = e || $.noop, i.proxy.trigger("prev", [i.prevSlide().index()]), this.transition(this.currentSlide(), this.prevSlide(), "left", t, function () {
			e(i, i.currentSlide())
		})
	},
	transition: function (t, e, i, o, n) {
		n = n || $.noop, o = "number" == typeof o ? o : this.moveDuration;
		var r = this,
			s = "right" == i ? 1 : -1;
		return e.css({
			left: s * this.container.width(),
			display: "block"
		}), this.vCenter(e), e.animate({
			left: 0
		}, o, "easeInOutQuad"), t.animate({
			left: -s * this.container.width()
		}, o, "easeInOutQuad", function () {
			$(this).hide(), r._cS = e, r.lock = !1, n(), r.proxy.trigger("transition", [r.currentSlide().index()])
		}), !0
	},
	play: function () {},
	slideAt: function (t) {
		return $(this.slides[t])
	},
	currentSlide: function () {
		return this._cS = this._cS || this.slides.first(), this._cS
	},
	nextSlide: function () {
		var t = this.currentSlide().next();
		return t.length > 0 ? t : this.slides.first()
	},
	prevSlide: function () {
		var t = this.currentSlide().prev();
		return t.length > 0 ? t : this.slides.last()
	}
}), ! function (t) {
	t.fn.EverlaneSlides = function (e) {
		return new E.lib.Slides(t.extend({
			container: this
		}, e))
	}
}(jQuery), E.lib.Helpers = {
	isMobile: function () {
		return -1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod") || -1 != navigator.platform.indexOf("iPad") || -1 != navigator.platform.indexOf("android")
	},
	isEmail: function (t) {
		var e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return e.test(t)
	}
}, LandingSlider = function (t, e, i) {
	this.container = t, this.width = e, this.height = i, this.slideMaximum = this.width * this.container.find(".slides").length, $(document).on("click", "*[data-slide-to]", $.proxy(this.onTrigger, this)), this.container.find(".interest-button").on("click", $.proxy(this.onInterested, this))
}, LandingSlider.prototype.onInterested = function () {
	this.slide(2, "marginLeft", !1)
}, LandingSlider.prototype.onTrigger = function (t) {
	var e = $(t.currentTarget);
	e.hasClass("login-transition") ? (this.slide(e.attr("data-slide-to"), "marginTop", !1), this.toggleBottomBar(!1)) : (this.slide(e.attr("data-slide-to"), "marginLeft", !e.attr("data-prevent-switch")), t.preventDefault())
}, LandingSlider.prototype.onSubmit = function (t) {
	var e = $(t.currentTarget);
	this.transitionSlide(e.attr("data-slide-to"))
}, LandingSlider.prototype.slide = function (t, e, i) {
	i = "boolean" == typeof i ? i : !0;
	var o = this.container,
		n = -this.width * t;
	"marginTop" === e ? (o = $(".transition"), 0 == t ? ($("#login-transition").show(), $("#signup-transition").hide()) : 1 == t ? ($("#signup-transition").show(), $("#login-transition").hide(), t = 0) : 2 == t && (t = 1), n = -this.height * t) : e = "marginLeft";
	var r = {};
	r[e] = n, E.lib.Helpers.isMobile() ? o.css(r) : o.animate(r, 450), i && this.switchLink(t)
}, LandingSlider.prototype.transitionSlide = function (t) {
	var e = -this.height * t;
	E.lib.Helpers.isMobile() ? this.container.css("marginTop", e) : this.container.animate({
		marginTop: e
	}, 400)
}, LandingSlider.prototype.jump = function (t, e) {
	var e = "boolean" == typeof e ? e : !0,
		i = -this.width * t;
	this.container.css("marginLeft", i), e && this.switchLink(t)
}, LandingSlider.prototype.toggleBottomBar = function (t) {
	$(".landerNext.bottom").animate({
		opacity: +t
	}, 250)
}, LandingSlider.prototype.switchLink = function (t) {
	0 == t ? ($(".apply").hide(), $(".login").show()) : 2 == t && ($(".apply").show(), $(".login").hide())
}, E.lib.Component = function (t) {
	this.container = t, this.subs = {}
}, E.lib.Component.prototype.pub = function (t) {
	if (this.subs[t]) {
		var e = Array.prototype.slice.call(arguments, 1);
		e.unshift(t);
		for (var i = 0; this.subs[t].length > i; i++) this.subs[t][i].apply(this, e)
	}
}, E.lib.Component.prototype.sub = function (t) {
	for (var e = 1; arguments.length > e; e++) this.subs[t] = this.subs[t] || [], this.subs[t].push(arguments[e])
}, E.lib.Component.prototype.get = function (t) {
	return this.ATTRS[t]
}, E.lib.Component.prototype.set = function (t, e) {
	var i = t + "_change";
	this.ATTRS[t] = e, this.pub(this.Event[i.toUpperCase()])
}, E.lib.Component.prototype.show = function () {
	{
		!this.isVisible()
	}
	this.container.show()
}, E.lib.Component.prototype.hide = function () {
	{
		this.isVisible()
	}
	this.container.hide()
}, E.lib.Component.prototype.setChildComponent = function (t, e) {
	this[t] = e
}, E.lib.Component.prototype.isVisible = function () {
	return this.container.is(":visible")
}, E.lib.Component.prototype.cssName = function () {
	return this.toString().replace(/\./g, "-").toLowerCase()
}, E.lib.Component.attach = function (t) {
	return $.map($('[data-component="' + t.prototype.cssName() + '"]'), function () {
		return new t($(container))
	})
}, E.lib.DropDown = function (t, e) {
	E.lib.Component.call(this, e), this.trigger = t, this.container = e;
	var i = this;
	this.container.hover($.proxy(this.show, this), $.proxy(this.hide, this)), this.container.on("mouseover", function () {
		i.isOverDropDown = !0
	}), this.container.on("mouseout", function () {
		i.isOverDropDown = !1
	}), this.trigger.hover($.proxy(this.show, this), $.proxy(this.hide, this)), this.trigger.addClass(this.TRIGGER_CLASS)
}, E.inherit(E.lib.DropDown, E.lib.Component), E.lib.DropDown.prototype.TRIGGER_CLASS = "drop-down-trigger", E.lib.DropDown.prototype.TRIGGER_ACTIVE_CLASS = "drop-down-trigger-active", E.lib.DropDown.prototype.show = function () {
	clearTimeout(this.closeTimer), $(".dropdown-menu").not(this.container).hide(), $("." + this.TRIGGER_ACTIVE_CLASS).not(this.trigger).removeClass(this.TRIGGER_ACTIVE_CLASS);
	var t = this.getDropdownOffset(this.trigger);
	this.trigger.addClass(this.TRIGGER_ACTIVE_CLASS), this.container.css(t).stop().css("opacity", 1).show()
}, E.lib.DropDown.prototype.hide = function () {
	var t = this;
	this.closeTimer = setTimeout(function () {
		t.isOverDropDown || (t.container.fadeOut(100), t.trigger.removeClass(t.TRIGGER_ACTIVE_CLASS), t.isOverDropDown = !1)
	}, 100)
}, E.lib.DropDown.prototype.getDropdownOffset = function () {
	throw new Error("getDropdownOffset(): You need to override this method")
}, E.lib.DropDown.prototype.toString = function () {
	return "E.lib.DropDown"
}, E.lib.AccountDropDown = function (t, e) {
	E.lib.DropDown.call(this, t, e), this.container.css("width", this.trigger.innerWidth())
}, E.inherit(E.lib.AccountDropDown, E.lib.DropDown), E.lib.AccountDropDown.prototype.getDropdownOffset = function (t) {
	var e = t.offset();
	return {
		left: e.left,
		top: e.top + 38
	}
}, E.lib.Alert = function (t) {
	E.lib.Component.call(this, t);
	var e = this.container.find(".close-link");
	this.disableURL = e.attr("href"), this.container.on("click", $.proxy(this.onCloseClick, this))
}, E.inherit(E.lib.Alert, E.lib.Component), E.lib.Alert.prototype.Event = {
	HIDE: "hide"
}, E.lib.Alert.prototype.onCloseClick = function (t) {
	t.preventDefault(), this.hide()
}, E.lib.Alert.prototype.show = function () {
	this.container.removeClass("unseen")
}, E.lib.Alert.prototype.hide = function () {
	this.container.addClass("seen"), $.post(this.disableURL)
}, E.lib.Alert.prototype.toString = function () {
	return "E.lib.Alert"
}, E.lib.AlertCenter = {
	init: function (t) {
		for (var e = t.find(".alert"), i = 0; e.length > i; i++)(function (t) {
			setTimeout(function () {
				new E.lib.Alert($(e.eq(t))).show()
			}, 300 * t)
		})(i)
	}
}, E.lib.ButtonSet = function (t) {
	E.lib.Component.call(this, t), this.currentButton = null, this.currentIndex_ = null, this.container.delegate("li", "click", $.proxy(this.onClick, this)), this.syncUI_()
}, E.inherit(E.lib.ButtonSet, E.lib.Component), E.lib.ButtonSet.prototype.ACTIVE_CLASS = "active", E.lib.ButtonSet.prototype.Event = {
	UPDATE: "update"
}, E.lib.ButtonSet.prototype.ATTRS = {
	index: null
}, E.lib.ButtonSet.prototype.syncUI_ = function () {
	this.setCurrentElement_(this.container.find("." + this.ACTIVE_CLASS))
}, E.lib.ButtonSet.prototype.onClick = function (t) {
	t.preventDefault(), this.setCurrentElement_($(t.currentTarget))
}, E.lib.ButtonSet.prototype.setCurrentElement_ = function (t) {
	var e = this;
	this.ATTRS.index = this.currentIndex_ = this.container.find("li").index(t), t.is(this.currentButton) || (this.currentButton = t, this.container.find("li").each(function (i, o) {
		$(o).is(t) ? $(o).addClass(e.ACTIVE_CLASS) : $(o).removeClass(e.ACTIVE_CLASS)
	}), this.pub(this.Event.UPDATE, this.ATTRS.index))
}, E.lib.ButtonSet.prototype.clear = function () {
	this.currentButton && (this.container.find("li").removeClass(this.ACTIVE_CLASS), this.currentButton = null)
}, E.lib.ButtonSet.prototype.getIndex = function () {
	return 0 == this.container.children().length ? 0 : this.currentIndex_
}, E.lib.ButtonSet.prototype.toString = function () {
	return "E.lib.ButtonSet"
}, E.lib.FB = {
	defaultShareOptions: {
		method: "feed",
		name: "Become an Everlane member",
		picture: "http://static.everlane.com/static/feed-icon.jpg",
		display: "iframe"
	},
	share: function (t, e) {
		var i = e || $.noop();
		FB.ui($.extend({}, this.defaultShareOptions, t), i)
	}
}, E.lib.FlashMessage = function (t) {
	var e = this.getContainer().html(t),
		i = this.getTopOffset(e),
		o = this.getLeftOffset(e);
	e.css({
		top: i,
		left: o
	}).fadeIn(600).animate({
		top: i - 200,
		opacity: 0
	}, 600, "easeOutExpo", function () {
		e.css({
			opacity: 1,
			display: "none"
		})
	})
}, E.flash = function (t) {
	new E.lib.FlashMessage(t)
}, E.lib.FlashMessage.prototype.getLeftOffset = function (t) {
	return ($(window).width() - t.outerWidth()) / 2 + $(window).scrollLeft()
}, E.lib.FlashMessage.prototype.getTopOffset = function (t) {
	return ($(window).height() - t.outerHeight()) / 2 + $(window).scrollTop()
}, E.lib.FlashMessage.prototype.makeContainer = function () {
	var t = '<div id="flash-message"></div>';
	return $(document.body).append(t), $("#flash-message")
}, E.lib.FlashMessage.prototype.getContainer = function () {
	var t = $("#flash-message");
	return 0 == t.length ? this.makeContainer() : t
}, E.lib.FlipBook = function (t, e) {
	E.lib.Component.call(this, t), this.options = e, this.canStart = !1, this.askedToStart = !1, this.intervalIDs = [], this.numberOfImages = this.options.end - this.options.start + 1, this.images = new Array(this.numberOfImages), this.currentIndex = 0, this.direction = 1, this.sub(this.Event.PRELOAD_COMPLETE, $.proxy(this.onPreloadComplete, this)), this.preloadImages()
}, E.inherit(E.lib.FlipBook, E.lib.Component), E.lib.FlipBook.prototype.Event = {
	TICK: "tick",
	LOOP: "loop",
	ANIMATION_START: "animation-start",
	ANIMATION_END: "animation-end",
	RESET_COMPLETE: "reset-complete",
	PRELOAD_COMPLETE: "preload-complete"
}, E.lib.FlipBook.prototype.start = function () {
	this.askedToStart = !0, this.canStart && (this.intervalIDs.push(setInterval($.proxy(this.replaceImage, this), this.fpsToMilliseconds(this.options.fps))), this.isAnimating = !0, this.pub(this.Event.ANIMATION_START))
}, E.lib.FlipBook.prototype.pause = function () {
	for (var t = 0; this.intervalIDs.length > t; t++) clearInterval(this.intervalIDs[t])
}, E.lib.FlipBook.prototype.replaceImage = function () {
	var t = this.images[this.currentIndex];
	this.options.loop || this.currentIndex != this.numberOfImages ? (this.container.find("img").remove(), this.container.append($(t).show()), this.pub(this.Event.TICK, 100 * (this.currentIndex / (this.numberOfImages - 1))), this.currentIndex += this.direction, this.options.loop && (this.currentIndex >= this.numberOfImages - 1 || 0 >= this.currentIndex) && (this.direction *= -1, this.pub(this.Event.LOOP))) : ($.each(this.intervalIDs, function (t, e) {
		clearInterval(e)
	}), this.intervalIDs = [], this.pub(this.Event.ANIMATION_END), this.currentIndex = 0)
}, E.lib.FlipBook.prototype.jumpTo = function (t) {
	t = t > 100 ? 100 : t, t = 0 > t ? 0 : t, this.currentIndex = Math.floor((this.numberOfImages - 1) * t / 100), this.direction = 1, this.replaceImage()
}, E.lib.FlipBook.prototype.getImageURL = function (t) {
	return this.options.filename.replace("###", t)
}, E.lib.FlipBook.prototype.preloadImages = function () {
	for (var t = this, e = 0, i = 0, o = this.options.start; this.options.end >= o; o++) {
		var n = new Image;
		n.onload = function () {
			e++, e == t.numberOfImages && t.pub(t.Event.PRELOAD_COMPLETE)
		}, n.src = this.getImageURL(o), this.images[i] = n, i++
	}
}, E.lib.FlipBook.prototype.fpsToMilliseconds = function (t) {
	return 1e3 / t
}, E.lib.FlipBook.prototype.onPreloadComplete = function () {
	this.canStart = !0, this.askedToStart && this.start()
}, E.lib.FlipBook.prototype.reset = function () {
	var t = this;
	this.container.find("img").fadeOut("slow", function () {
		t.currentIndex = 0, t.pub(t.Event.RESET_COMPLETE)
	})
}, E.lib.FlipBook.prototype.getAnimationDuration = function () {
	return this.numberOfImages * this.fpsToMilliseconds(this.options.fps)
}, E.lib.FlipBook.prototype.toString = function () {
	return "E.lib.FlipBook"
}, E.lib.FlipbookPlayer = function (t, e) {
	E.lib.Component.call(this, t);
	var i = this;
	this.options = $.extend({
		autoplay: !1,
		fps: 10
	}, e), this.loadingAnimation = this.container.find(".js-preloader"), this.loadingAnimation.data("component-object") || new E.lib.LoadingAnimation(this.loadingAnimation), this.flipBook = new E.lib.FlipBook(this.container.find(".flipbook"), e), this.timeline = new E.lib.Timeline(this.container.find(".draggable-track"), this.flipBook.numberOfImages), this.currentAngle = 0, this.numberOfLoops = 0, this.left = !0, this.loadingAnimation.data("component-object").begin(), this.controls = this.container.find(".controls"), this.playbackSpinner = this.controls.find(".spinner-indicator"), this.controls.find(".spinner-play").click($.proxy(this.onPlay, this)), this.controls.find(".spinner-pause").click($.proxy(this.onPause, this)), this.flipBook.sub(this.flipBook.Event.TICK, $.proxy(this.timeline.move, this.timeline)), this.flipBook.sub(this.flipBook.Event.PRELOAD_COMPLETE, $.proxy(this.onFlipBookPreloaded, this)), this.flipBook.sub(this.flipBook.Event.RESET_COMPLETE, $.proxy(this.timeline.setHandlePosition, this.timeline)), this.timeline.sub(this.timeline.Event.DRAG, $.proxy(this.onPause, this), $.proxy(this.onDrag, this)), this.container.find(".play").bind("click", $.proxy(this.play, this)), this.options.loop ? this.flipBook.sub(this.flipBook.Event.LOOP, function () {
		i.numberOfLoops += 1, i.left = !i.left
	}) : (this.flipBook.sub(this.flipBook.Event.ANIMATION_END, $.proxy(this.onAnimationEnd, this)), this.flipBook.sub(this.flipBook.Event.RESET_COMPLETE, this.flipBook.start), this.container.find(".replay").bind("click", $.proxy(this.reset, this)))
}, E.inherit(E.lib.FlipbookPlayer, E.lib.Component), E.lib.FlipbookPlayer.prototype.play = function () {
	this.container.find(".play").fadeOut(), this.container.find(".title").fadeOut(), this.timeline.show(), this.controls.show(), this.startRotation(), this.flipBook.start()
}, E.lib.FlipbookPlayer.prototype.reset = function () {
	this.container.find(".replay").fadeOut(), this.flipBook.reset()
}, E.lib.FlipbookPlayer.prototype.onDrag = function (t, e) {
	var i = this.container.find(".play");
	i.is(":visible") && (i.fadeOut(), this.container.find(".title").fadeOut()), this.flipBook.jumpTo(e)
}, E.lib.FlipbookPlayer.prototype.onAnimationEnd = function () {
	this.container.find(".replay").css("display", "block").fadeIn()
}, E.lib.FlipbookPlayer.prototype.onFlipBookPreloaded = function () {
	var t = this;
	this.loadingAnimation.fadeOut(function () {
		t.loadingAnimation.data("component-object").destroy()
	}), this.options.autoplay && !$.cookie(this.getCookieName()) ? (this.play(), $.cookie(this.getCookieName(), 1, {
		expires: 365
	})) : this.container.find(".play").show()
}, E.lib.FlipbookPlayer.prototype.getCookieName = function () {
	return this.cssName().split("-")[3] + "-ap"
}, E.lib.FlipbookPlayer.prototype.onPause = function () {
	this.flipBook.pause(), this.playbackSpinner.stopRotate(), clearInterval(this.rotationInterval), this.controls.find(".spinner-play").hasClass("hidden") && this.controls.find(".spinner-pause, .spinner-play").toggleClass("hidden")
}, E.lib.FlipbookPlayer.prototype.onPlay = function () {
	this.controls.find(".spinner-pause, .spinner-play").toggleClass("hidden"), this.play()
}, E.lib.FlipbookPlayer.prototype.startRotation = function () {
	var t = this;
	this.rotationInterval = setInterval(function () {
		0 == t.numberOfLoops % 2 ? t.currentAngle += 3 : t.currentAngle -= 3, t.playbackSpinner.rotate(t.currentAngle)
	}, 66)
}, E.lib.FlipbookPlayer.prototype.shouldAnimateLeft = function () {
	return 0 == this.numberOfLoops % 2 ? "left" : "right"
}, E.lib.FlipbookPlayer.prototype.toString = function () {
	return "E.lib.FlipbookPlayer"
}, $(document).on("ready page:load", function () {
	$('[data-component="FlipbookPlayer"]').each(function (t, e) {
		e = $(e);
		for (var i = ["start", "end", "filename", "fps", "autoplay"], o = {}, n = 0; i.length > n; n++) {
			var r = i[n];
			e.data(r) && (o[r] = e.data(r))
		}
		new E.lib.FlipbookPlayer(e, o)
	})
}), E.lib.HoverCart = function (t, e) {
	E.lib.DropDown.call(this, t, e), this.count = 0, this.bagBadge = this.trigger.find("#bag-badge"), this.bagRibbon = this.trigger.find("#bag-ribbon"), this.bindUI_(), this.trigger.on("click", $.proxy(this.verifyCheckout, this)), this.trigger.on("click", this.logAdRollCheckout), this.container.on("click", ".checkout-button", this.logAdRollCheckout)
}, E.inherit(E.lib.HoverCart, E.lib.DropDown), E.lib.HoverCart.prototype.verifyCheckout = function () {
	return E.collections.LineItems.isHomeTryOn() && 4 !== E.collections.LineItems.deepCount() ? ($(".home-try-on").find(".footer").find("span").effect("shake", {
		distance: 5,
		times: 3
	}, 200).addClass("error"), !1) : void 0
}, E.lib.HoverCart.prototype.logAdRollCheckout = function () {
	E.page.fixedNavigation || $.adroll.checkout()
}, E.lib.HoverCart.prototype.bindUI_ = function () {
	var t = this;
	E.sub(E.Event.Cart.UPDATE, $.proxy(this.update, this)), E.sub(E.Event.Cart.BLINK, $.proxy(this.fadeInFadeOut, this)), E.sub(E.Event.Cart.INIT, $.proxy(this.init, this)), $("body").bind("click", function (e) {
		var i = $.map($(e.target).parents(), function (t) {
			return $(t).attr("id")
		});
		e.target.id && i.push(e.target.id), -1 === $.inArray("cart_dropdown", i) && -1 === $.inArray("add-to-cart", i) && t.hide()
	})
}, E.lib.HoverCart.prototype.init = function (t, e) {
	this.count = e.quantity, this.count > 0 && (this.bagRibbon.css("top", "-90px"), this.bagBadge.css({
		top: "27px",
		"background-position": "0 " + -16 * (this.count - 1) + "px"
	}))
}, E.lib.HoverCart.prototype.show = function () {
	this.container.data("hide") || E.base(this, "show")
}, E.lib.HoverCart.prototype.getDropdownOffset = function (t) {
	var e = t.offset();
	return this.container.css("position", "absolute"), {
		top: e.top + 40,
		left: e.left - (this.container.width() - 120)
	}
}, E.lib.HoverCart.prototype.fadeInFadeOut = function () {
	var t = this;
	this.show(), this.closeTimer = setTimeout(function () {
		t.isOverDropDown || (t.container.fadeOut(1e3, function () {
			t.showLink && t.showLink()
		}), t.trigger.removeClass(t.TRIGGER_ACTIVE_CLASS))
	}, 3e3)
}, E.lib.HoverCart.prototype.setCount = function (t) {
	var e = this.count,
		i = this;
	this.count = t, this.count !== e && (0 == this.count ? this.dropOutEverything() : this.count > 0 && 0 == e ? (this.displayCount(), this.dropInEverything()) : this.count > 0 && e > 0 && this.dropOutBadge(function () {
		i.displayCount(), i.dropInBadge()
	}))
}, E.lib.HoverCart.prototype.displayCount = function () {
	this.bagBadge.css("background-position", "0px " + (-16 * (this.count - 1) + "px"))
}, E.lib.HoverCart.prototype.dropInEverything = function () {
	this.bagRibbon.animate({
		top: "-90px"
	}, 500, "easeOutBack", $.proxy(this.dropInBadge, this))
}, E.lib.HoverCart.prototype.dropOutEverything = function () {
	this.dropOutBadge(), this.bagRibbon.animate({
		top: "-160px"
	}, 500, "easeInBack")
}, E.lib.HoverCart.prototype.dropOutBadge = function (t) {
	var e = this;
	this.bagBadge.fadeOut(300, function () {
		e.bagBadge.css("top", "-16px"), t && t()
	})
}, E.lib.HoverCart.prototype.dropInBadge = function () {
	var t = this;
	this.droplock ? (this.bagRibbon.css("top", "-90px"), this.bagBadge.show()) : (this.droplock = !0, this.bagBadge.show().animate({
		top: "27px"
	}, 650, "easeOutBounce", function () {
		t.droplock = !1
	}))
}, E.lib.HoverCart.prototype.update = function (t, e) {
	var i;
	i = e.hasOwnProperty("authoritative") ? e.authoritative : this.count + e.increment, this.setCount(i)
}, E.lib.HoverCart.prototype.toString = function () {
	return "E.lib.HoverCart"
}, E.lib.ImageLoader = {
	MAX_REQUESTS: 3,
	seenImages: {},
	queuedImages: [],
	requestsInFlight: 0,
	loadImages: function (t) {
		for (var e = 0, i = t.length; i > e; e++) {
			var o = t[e];
			o && !this.seenImages[o] && (this.seenImages[o] = !0, this.queuedImages.push(o))
		}
		this.processImages()
	},
	processImages: function () {
		for (var t = this; t.requestsInFlight < t.MAX_REQUESTS;) {
			if (0 == t.queuedImages.length) return;
			var e = new Image;
			e.onload = e.onerror = e.onabort = function () {
				this.onerror = this.onabort = this.onload = null, t.requestsInFlight--, t.processImages()
			}, t.requestsInFlight++, e.src = t.queuedImages.shift()
		}
	}
},
function () {
	var t;
	t = jQuery, t.fn.extend({
		hoverZoom: function (e) {
			var i, o, n, r, s, a, l;
			return l = {
				boxParent: this.parent(),
				zoomParent: "body",
				boxCSS: {
					opacity: .4,
					backgroundColor: "white",
					border: "1px solid #ccc",
					cursor: "move"
				},
				sensitivity: 30,
				delay: 75,
				idealScale: 2.66,
				scaleThreshold: {
					width: 3,
					height: 3
				},
				minSize: {
					width: 800,
					height: 800
				},
				"in": function () {},
				out: function () {}
			}, l = t.extend(l, e), o = this, r = [0, 0], n = [0, 0], a = [1, 1], s = !1, i = function (t, e) {
				var i;
				return i = PageConfig.gallery_hash.products[t].images[e], i.original_size || ""
			}, this.each(function () {
				return o.on("mousemove", function (t) {
					return r = [t.pageX, t.pageY]
				}), o.on("mouseover", function () {
					return t("<img/>").attr("src", i(o.data("product-index"), o.data("index"))).load(function () {
						return n = [this.width, this.height]
					})
				}), o.hoverIntent({
					sensitivity: l.sensitivity,
					interval: l.delay,
					over: function (e) {
						var c, d, h, p, u, f;
						return a = [n[0] / o.width(), n[1] / o.height()], s = a[0] > l.scaleThreshold.width || a[1] > l.scaleThreshold.height ? !0 : !1, c = [0, 0], n[0] < l.minSize.width || n[1] < l.minSize.height ? void 0 : (p = t("#mousebox").length > 0 ? t("#mousebox") : t('<div id="mousebox"></div>'), d = t("#hover-image").length > 0 ? t("#hover-image") : t('<div id="hover-image"></div>'), p.css({
							border: l.boxCSS.border,
							cursor: l.boxCSS.cursor,
							backgroundColor: l.boxCSS.backgroundColor,
							opacity: l.boxCSS.opacity
						}), s ? p.css({
							width: Math.round(o.width() / l.idealScale),
							height: Math.round(o.height() / l.idealScale)
						}) : p.css({
							width: o.width() / a[0],
							height: o.height() / a[1]
						}), u = r[0] - o.offset().left - p.width() / 2, f = r[1] - o.offset().top - p.height() / 2, 0 >= u && (u = 0), u >= o.width() - p.width() && (u = o.width() - p.width()), 0 >= f && (f = 0), f >= o.height() - p.height() && (f = o.height() - p.height()), s ? (c[0] = u * l.idealScale, c[1] = f * l.idealScale, h = Math.floor(100 * l.idealScale), d.css("background-size", "" + h + "% " + h + "%")) : (c[0] = u * a[0], c[1] = f * a[1]), p.css({
							top: Math.round(f),
							left: Math.round(u)
						}), d.css({
							"background-image": "url(" + i(o.data("product-index"), o.data("index")) + ")",
							"background-position": "-" + c[0] + "px -" + c[1] + "px",
							width: o.width(),
							height: o.height()
						}), p.hide().appendTo(l.boxParent).fadeIn(300), d.hide().prependTo(l.zoomParent).fadeIn(300), l["in"](e))
					},
					out: function () {}
				}), l.boxParent.on("mouseleave", o, function (e) {
					return t("#mousebox").fadeOut(300, function () {
						return t(this).remove()
					}), t("#hover-image").fadeOut(300, function () {
						return t(this).remove()
					}), l.out(e)
				}), l.boxParent.on("mousemove", o, function (e) {
					var i, r, c, d, h, p;
					return c = t("#hover-image").length > 0 ? t("#hover-image") : t('<div id="hover-image"></div>'), d = t("#mousebox").length > 0 ? t("#mousebox") : t('<div id="mousebox"></div>'), h = [d.offset().left - o.offset().left, d.offset().top - o.offset().top], r = [e.pageX - d.offset().left - d.width() / 2, e.pageY - d.offset().top - d.height() / 2], p = [h[0] + r[0], h[1] + r[1]], i = [0, 0], 0 >= p[0] && (p[0] = 0), p[0] >= o.width() - d.width() && (p[0] = o.width() - d.width() - 2), 0 >= p[1] && (p[1] = 0), p[1] >= o.height() - d.height() && (p[1] = o.height() - d.height() - 2), s ? (i[0] = (e.pageX - o.offset().left - d.width() / 2) * l.idealScale, i[1] = (e.pageY - o.offset().top - d.height() / 2) * l.idealScale, i[0] > o.width() * l.idealScale - o.width() && (i[0] = o.width() * l.idealScale - o.width()), i[1] > o.height() * l.idealScale - o.height() && (i[1] = o.height() * l.idealScale - o.height())) : (i[0] = (e.pageX - o.offset().left - d.width() / 2) * a[0], i[1] = (e.pageY - o.offset().top - d.height() / 2) * a[1]), 0 > i[0] && (i[0] = 0), i[0] > n[0] - o.width() && (i[0] = n[0] - o.width()), 0 > i[1] && (i[1] = 0), i[1] > n[1] - o.height() && (i[1] = n[1] - o.height()), d.css({
						top: Math.round(p[1]),
						left: Math.round(p[0])
					}), c.css("background-position", "-" + i[0] + "px -" + i[1] + "px")
				})
			})
		}
	})
}.call(this), E.lib.LoadingAnimation = function (t) {
	this.container = t, this.container.data("component-object", this), this.elements = this.container.find("li"), this.i = 0
}, E.lib.LoadingAnimation.prototype.begin = function () {
	this.running || (this.running = !0, this.startAnimation())
}, E.lib.LoadingAnimation.prototype.end = function () {
	this.running = !1
}, E.lib.LoadingAnimation.prototype.startAnimation = function () {
	var t = this,
		e = this.elements.length,
		i = this.elements.eq(this.i),
		o = 250,
		n = .5;
	this.i = (this.i + 1) % e, i.fadeTo(o, 1, function () {
		i.fadeTo(o, n, function () {
			setTimeout(function () {
				t.running && t.startAnimation()
			}, 100)
		})
	})
}, E.lib.LoadingAnimation.prototype.destroy = function () {
	this.end(), this.container.remove()
}, $(document).on("ready page:change", function () {
	$("[data-component=LoadingAnimation]").each(function (t, e) {
		new E.lib.LoadingAnimation($(e))
	})
}), E.lib.ShopDropDown = function (t, e) {
	E.lib.DropDown.call(this, t, e), this.bindUI_(), this.syncUI_()
}, E.inherit(E.lib.ShopDropDown, E.lib.DropDown), E.lib.ShopDropDown.prototype.bindUI_ = function () {
	E.lib.Helpers.isMobile() || this.container.delegate(".product-links a", "mouseover", $.proxy(this.onLinkOver, this))
}, E.lib.ShopDropDown.prototype.syncUI_ = function () {
	var t = window.location.href.toLowerCase();
	"/" != t.charAt(t.length - 1) && (t += "/"), this.container.find("a").each(function (e, i) {
		var o = i.href.toLowerCase();
		"/" != o.charAt(o.length - 1) && (o += "/"), o == t && $(i).addClass("active")
	})
}, E.lib.ShopDropDown.prototype.onLinkOver = function (t) {
	var e = $(t.currentTarget).attr("data-link-for");
	this.container.find(".product-spotlights").find("li").each(function (t, i) {
		$(i).attr("data-spotlight-for") !== e ? $(i).addClass("hidden") : $(i).removeClass("hidden")
	})
}, E.lib.ShopDropDown.prototype.getDropdownOffset = function (t) {
	var e = t.offset();
	return this.container.css("position", "absolute"), {
		top: e.top + 45,
		left: e.left - 177
	}
}, E.lib.ShopDropDown.prototype.toString = function () {
	return "E.lib.ShopDropDown"
}, E.lib.SignUpTest = {
	WAIT_AMOUNT: 1200,
	COOKIE_NAME: "signup-dismiss",
	init: function () {
		this.container = $('.signup-pitch[data-position!=""]'), this.position = this.container.data("position") || "control", this.container.find(".signup-module").hide(), this.trackInGA(), $.cookie(this.COOKIE_NAME) || "control" === this.position || (setTimeout($.proxy(this.show, this), this.WAIT_AMOUNT), this.container.on("click", ".close", $.proxy(this.onClose, this)), this.container.on("click", ".show-login-form", $.proxy(this.showLoginForm, this)), this.container.on("click", ".show-signup-form", $.proxy(this.showSignupForm, this)))
	},
	onClose: function () {
		this.hide(), this.setCookie()
	},
	show: function () {
		this.container.addClass("visible"), "modal" === this.position && $("#signup-pitch-modal").reveal({
			revealBgColor: "#fff",
			closeOnBackgroundClick: !1
		})
	},
	hide: function () {
		this.container.removeClass("visible"), "modal" === this.position ? $("#signup-pitch-modal").trigger("reveal:close").fadeOut() : "top" === this.position && this.container.height(0)
	},
	showLoginForm: function () {
		"bottom" === this.position ? this.container.css("bottom", 0) : "modal" === this.position ? this.container.find(".pitch-container").animate({
			"margin-top": 52
		}) : "top" === this.position && this.container.css("height", 380), this.container.find(".initial-module").hide(), this.container.find(".signup-module").hide(), this.container.find(".login-module").show()
	},
	showSignupForm: function () {
		"bottom" === this.position ? this.container.css("bottom", -120) : "top" === this.position && this.container.css("height", 250), this.container.find(".initial-module").hide(), this.container.find(".signup-module").show(), this.container.find(".login-module").hide()
	},
	trackInGA: function () {
		_gaq.push(["_setCustomVar", 4, "Email Collection Position For Real", this.position, 1]), _gaq.push(["_trackPageview"])
	},
	setCookie: function () {
		$.cookie(this.COOKIE_NAME, 1, {
			expires: 1
		})
	},
	toString: function () {
		return "E.lib.SignUpTest"
	}
}, $(document).on("ready page:change", function () {
	E.isLoggedIn || E.hideSignupPitch || E.lib.SignUpTest.init()
}), E.lib.Slider = function (t, e) {
	if (this.container = t, !this.container.data("Swipe") && 0 != this.container.length) {
		var i = {
			elastic: !0,
			auto: 0,
			keyboardNav: !0,
			advanceOnClick: !1,
			renderArrows: !0,
			renderDots: !0,
			callback: $.proxy(this.navigate, this)
		};
		this.settings = $.extend({}, i, e || {}), this.swiper = this.container.Swipe(this.settings).data("Swipe"), this.container.data("Swipe", this.swiper), this.settings.elastic && this.container.find("li").find("img").addClass("elastic-container"), this.settings.advanceOnClick && this.container.on("click", "li", this.swiper.next), this.settings.keyboardNav && $(document.body).bind("keyup", $.proxy(this.onKeyup, this)), this.settings.renderArrows && this.renderArrows(), this.settings.renderDots && this.renderDots()
	}
}, E.lib.Slider.prototype.renderArrows = function () {
	var t = $('<a href="javascript:;" class="slides-arrow prev"><span></span></a>'),
		e = $('<a href="javascript:;" class="slides-arrow next"><span></span></a>');
	this.container.prepend(t, e), t.on("click", this.swiper.prev), e.on("click", this.swiper.next)
}, E.lib.Slider.prototype.renderDots = function () {
	for (var t = $("<ul/>").addClass("pagination"), e = [], i = this.swiper.getNumSlides(), o = 0; i > o; o++) e.push('<li><a href="#' + o + '"></a></li>');
	t.append(e.join("")), t.on("click", "li", $.proxy(this.onPaginationClick, this)), t.find("li").first().addClass("active"), this.container.append(t), this.pagination = t
}, E.lib.Slider.prototype.onPaginationClick = function (t) {
	this.navigate($(t.currentTarget).index())
}, E.lib.Slider.prototype.navigate = function (t) {
	this.settings.renderDots && this.pagination.find("li").removeClass("active").eq(t).addClass("active"), this.swiper.slide(t)
}, E.lib.Slider.prototype.onKeyup = function (t) {
	37 === t.which ? this.swiper.prev() : 39 === t.which && this.swiper.next()
}, E.lib.StickyHoverCart = function (t, e) {
	E.lib.HoverCart.call(this, t, e), this.fixedNavigation = !1, this.countDisplay = this.trigger, this.stickyBar = $("#fixed-navigation");
	var i = this;
	E.sub(E.Event.TopBar.STICK, function () {
		i.fixedNavigation = !0
	}), E.sub(E.Event.TopBar.UNSTICK, function () {
		i.fixedNavigation = !1
	}), this.container.css("position", "fixed")
}, E.inherit(E.lib.StickyHoverCart, E.lib.HoverCart), E.lib.StickyHoverCart.prototype.show = function () {
	this.fixedNavigation && (this.stickyBar.addClass("active"), E.base(this, "show"), this.container.css("position", "fixed"))
}, E.lib.StickyHoverCart.prototype.hide = function () {
	this.fixedNavigation && (this.stickyBar.removeClass("active"), E.base(this, "hide"))
}, E.lib.StickyHoverCart.prototype.logAdRollCheckout = function () {
	this.fixedNavigation && $.adroll.checkout()
}, E.lib.StickyHoverCart.prototype.init = function (t, e) {
	this.count = e.quantity, this.countDisplay.html("Shopping Bag (" + this.count + ")")
}, E.lib.StickyHoverCart.prototype.setCount = function (t) {
	this.count = t, this.countDisplay.html("Shopping Bag (" + t + ")")
}, E.lib.StickyHoverCart.prototype.getDropdownOffset = function (t) {
	var e = t.offset();
	return {
		top: 43,
		left: e.left - (this.container.width() - 95)
	}
}, E.lib.StickyHoverCart.prototype.toString = function () {
	return "E.lib.StickyHoverCart"
}, E.lib.StickyShopDropDown = function (t, e) {
	E.lib.ShopDropDown.call(this, t, e, "#fixed-navigation"), this.fixedNavigation = !1, this.countDisplay = this.trigger, this.stickyBar = $("#fixed-navigation");
	var i = this;
	E.sub(E.Event.TopBar.STICK, function () {
		i.fixedNavigation = !0
	}), E.sub(E.Event.TopBar.UNSTICK, function () {
		i.fixedNavigation = !1
	}), this.container.css("position", "fixed")
}, E.inherit(E.lib.StickyShopDropDown, E.lib.ShopDropDown), E.lib.StickyShopDropDown.prototype.show = function () {
	this.fixedNavigation && (this.stickyBar.addClass("active"), E.base(this, "show"), this.container.css("position", "fixed"))
}, E.lib.StickyShopDropDown.prototype.hide = function () {
	this.fixedNavigation && (this.stickyBar.removeClass("active"), E.base(this, "hide"))
}, E.lib.StickyShopDropDown.prototype.getDropdownOffset = function (t) {
	var e = t.offset();
	return {
		top: 40,
		left: e.left - 177
	}
}, E.lib.StickyShopDropDown.prototype.toString = function () {
	return "E.lib.StickyShopDropDown"
}, E.lib.Timeline = function (t, e) {
	E.lib.Component.call(this, t), this.numFrames = e, this.dragging = !1;
	var i = this;
	$(document).mousemove(function (t) {
		1 == t.which && i.dragging && i.moveToMouseEvent(t)
	}), this.container.mousedown(function (t) {
		$(document).disableSelection(), i.dragging = !0, i.moveToMouseEvent(t)
	}), $(document).mouseup(function () {
		$(document).enableSelection(), i.dragging = !1
	})
}, E.inherit(E.lib.Timeline, E.lib.Component), E.lib.Timeline.prototype.Event = {
	DRAG: "drag"
}, E.lib.Timeline.prototype.moveToMouseEvent = function (t) {
	var e = this.container.width(),
		i = this.container.offset(),
		o = t.pageX - i.left,
		n = Math.floor(100 * (o / e)),
		n = this.capPercentage(n);
	this.pub(this.Event.DRAG, n), this.setHandlePosition(n)
}, E.lib.Timeline.prototype.move = function (t, e) {
	e = this.capPercentage(e), this.setHandlePosition(e)
}, E.lib.Timeline.prototype.setHandlePosition = function (t) {
	this.container.find("span").css("left", t + "%")
}, E.lib.Timeline.prototype.capPercentage = function (t) {
	return 0 > t ? 0 : t > 100 ? 100 : t
}, E.lib.Timeline.prototype.toString = function () {
	return "E.lib.Timeline"
}, E.lib.VimeoVideo = function (t, e) {
	t.data("component-object", this), E.lib.Component.call(this, t), this.options = e || {}, this.overlay = t.find(".video-overlay"), this.closeLink = t.find(".close-link"), this.videoReady = !1, this.wantsToPlay = !1, this.track("initialized");
	var i = t.find(".content");
	i.css({
		top: t.outerHeight() / 2 - i.outerHeight() / 2,
		left: t.outerWidth() / 2 - i.outerWidth() / 2
	}), E.lib.VimeoVideo.apiLoaded ? this.onAPILoaded() : $.getScript("https://secure-a.vimeocdn.com/js/froogaloop2.min.js", $.proxy(this.onAPILoaded, this)), this.overlay.click($.proxy(this.play, this)), this.closeLink.click($.proxy(this.close, this))
}, E.inherit(E.lib.VimeoVideo, E.lib.Component), E.lib.VimeoVideo.apiLoaded = !1, $.extend(E.lib.VimeoVideo.prototype, {
	Event: {
		FINISH: "finish"
	},
	bufferVideo: function () {
		if (!E.lib.Helpers.isMobile()) {
			var t = this;
			this.player.api("volume", 0), this.player.api("play"), this.player.addEvent("playProgress", function (e) {
				!t.videoBuffered && e.seconds > 0 && (t.player.api("pause"), t.player.api("volume", 1), t.videoBuffered = !0)
			})
		}
	},
	play: function () {
		var t = this;
		this.videoReady ? (this.container.find(".video-poster").fadeOut(function () {
			t.container.animate({
				"max-height": 1500
			}, 500, "easeOutQuad")
		}), t.overlay.fadeOut(300, "easeOutQuad", function () {
			E.lib.Helpers.isMobile() ? (t.makePlayer(), t.player.api("play")) : (t.player.api("play"), t.videoBuffered = !0), t.closeLink.show()
		}), t.track("play")) : this.wantsToPlay = !0
	},
	pause: function () {
		this.player.api("pause"), this.track("pause")
	},
	close: function () {
		var t = this;
		this.closeLink.hide(), this.pause(), this.container.animate({
			"max-height": this.container.data("default-height")
		}, 500, "easeOutQuad", function () {
			t.container.find(".video-poster").fadeIn()
		}), this.overlay.fadeIn(300, "easeInQuad")
	},
	onAPILoaded: function () {
		E.lib.VimeoVideo.apiLoaded = !0, this.makePlayer(), this.player.addEvent("ready", $.proxy(this.onVideoReady, this))
	},
	makePlayer: function () {
		var t = this.container.find("iframe")[0];
		this.player = $f(t)
	},
	onVideoReady: function () {
		this.videoReady = !0, this.wantsToPlay ? (this.play(), this.wantsToPlay = !1) : this.bufferVideo(), this.player.addEvent("finish", $.proxy(this.onFinish, this))
	},
	onFinish: function () {
		this.pub(this.Event.FINISH), this.track("finished"), this.close()
	},
	track: function (t) {
		this.options.title && $.track(this.options.title + ": " + t)
	},
	toString: function () {
		return "E.lib.VimeoVideo"
	}
}), $(document).on("ready page:change", function () {
	$('[data-component="VimeoVideo"]').each(function (t, e) {
		new E.lib.VimeoVideo($(e))
	})
}), E.pages.collection.Controller = {
	init: function (t) {
		for (param in t) t[param] && t.hasOwnProperty(param) && ("function" == typeof this[param] ? this[param]() : this[param] = t[param]);
		$(".product-image-container").EverlaneCollectionImage()
	},
	initSlider: function () {
		new E.lib.Slider($(".swipe"))
	},
	initTeeVideoClickThrough: function () {
		$(".subhero-full-width").on("click", function () {
			window.location = "/tee-factory"
		})
	},
	initHomeTryOn: function () {
		$(".welcome-type").attr("src", this.HTOWelcomeImage), E.showLoginPrompt()
	}
},
function () {
	$(document).on("ready page:change", function () {
		var t, e, i, o;
		if (0 !== $("#credit_card_form").length) return $(".ignorefield").removeProp("name"), $(".cc_number").on("change keyup", function () {
			var t;
			return (t = $.payment.cardType($(this).val())) ? $("#cc_icons").css("opacity", 1).removeClass().addClass(t) : $("#cc_icons").css("opacity", 0)
		}), $(".country").on("change", function () {
			return $(".zip-code-container").toggle("USA" === $(this).val()), $(".zip_code").prop("readonly", "USA" !== $(this).val())
		}).change(), $("#credit_card_form").submit(function () {
			var t, e, i, o, n, r, s, a, l, c, d, h;
			if (s = {}, $(".error_explanation").hide().empty(), $(this).find(".field.error").removeClass("error"), t = function (t, e) {
				var i;
				return i = $("label[for='" + t.attr("id") + "']"), s[t.attr("id")] = {
					field: t.parent(),
					message: i.contents()[0].textContent.trim() + " " + e
				}
			}, o = $(".cc_number"), e = $(".cc_cvv"), i = $(".cc_expiry"), h = $(".zip_code"), l = $(".full_name"), a = i.payment("cardExpiryVal"), d = NameParse.parse(l.val()), d.firstName || (d.firstName = d.initials), d.firstName || t(l, "is incomplete"), $.payment.validateCardNumber(o.val()) || t(o, "is invalid"), $.payment.validateCardCVC(e.val(), $.payment.cardType(o.val())) || t(e, "is invalid"), $.payment.validateCardExpiry(a) || t(i, "is invalid"), $(this).find(".required").each(function () {
				return 0 === $(this).val().length ? t($(this), "is required") : void 0
			}), "USA" === $(this).find(".country").val() && 5 !== h.val().length && t(h, "is required for US credit cards"), !$.isEmptyObject(s)) {
				r = $("<ul/>");
				for (c in s) n = s[c], r.append($("<li>" + n.message + "</li>")), n.field.addClass("error");
				return $(".error_explanation").append(r).show(), !1
			}
			return $(".first_name").val(d.firstName), $(".last_name").val(d.lastName), $(".cc_number_hidden").val(o.val().replace(/\s/g, "")), $(".cc_expiry_hidden").val("" + a.month + "/" + a.year), !0
		}), $(".cc_number").payment("formatCardNumber").change(), $(".cc_cvv").payment("formatCardCVC").change(), $(".cc_expiry").payment("formatCardExpiry").change(), $(".zip_code").payment("restrictNumeric"), t = "", e = [], o = "~CARD~", i = !1, $(window.parent || document).keypress(function (e) {
			var n;
			return n = String.fromCharCode(e.which), i ? t += n : (t += n, t = t.substr(-o.length), t === o ? (i = !0, t = "") : void 0)
		}), $(window.parent || document).keydown(function (o) {
			return !i || 9 !== o.which && 13 !== o.which ? void 0 : (e.push(t), t = "", 13 === o.which && (i = !1, $(".cc_number").val(e[0]).change(), $(".cc_expiry").val(e[2] + "/" + e[3]).change(), e = []), o.preventDefault(), !1)
		})
	})
}.call(this), E.pages.map.Controller = {
	viewedFactories: [],
	currentFactory: null,
	historyChanged: !1,
	validPaths: ["el-paso-usa", "dongguan-china", "elgin-scottland", "los-angeles-usa", "san-francisco-usa", "hangzhou-china"],
	init: function () {
		var t = this,
			e = $.grep(window.location.pathname.split("/"), function (t) {
				return !!t
			}),
			i = e.pop();
		if (-1 !== this.validPaths.indexOf(i)) {
			var o = $('section[data-factory="' + i + '"]');
			this.currentFactory = o, this.showFactory()
		}
		$(".tooltip").tipTip({
			delay: 0
		}), $(".map-marker").each(function (t, e) {
			setTimeout(function () {
				$(e).addClass("marker-animation")
			}, Math.ceil(1e3 * Math.random()))
		}), $(window).keydown(function (e) {
			27 == e.keyCode && t.closeFactorySection()
		}), $("section").on("click", ".close", $.proxy(this.closeFactorySection, this)), $(window).on("popstate", function () {
			return t.historyChanged && t.closeFactorySection(), !1
		}), $(".map-display").on("click", ".map-marker", $.proxy(this.onMakerClick, this))
	},
	onMakerClick: function (t) {
		t.preventDefault();
		var e = $(t.currentTarget),
			i = e.data("factory");
		$("#map-mock").hide(), this.currentFactory = $('section[data-factory="' + i + '"]'), e.tipTip("hide"), $("#footer").css("margin-top", $("#footer").outerHeight()), this.showFactory(), this.changeHistory(e.attr("href"))
	},
	changeHistory: function (t) {
		t ? (history.pushState(null, "", t), this.historyChanged = !0) : history.pushState(null, "Map", "/map")
	},
	showFactory: function () {
		this.currentFactory.css("display", "block").addClass("visible"), -1 === $.inArray(this.currentFactory.data("factory"), this.viewedFactories) ? this.buildFactory() : this.currentFactory.css("opacity", 1)
	},
	buildFactory: function () {
		var t = this,
			e = this.currentFactory,
			i = e.find(".content-container"),
			o = e.find(".factory-header").find(".title"),
			n = o.html().replace(/^\s+|\s+$/g, "").split("");
		n = jQuery.map(n, function (t) {
			return t ? '<em style="font-style: normal; opacity: 0;">' + t + "</em>" : void 0
		}), e.find(".factory-header").find(".title").css("opacity", 1).html(n.join("")).find("em").each(function (t, e) {
			$(e).delay(50 * t).animate({
				opacity: 1
			}, 900, "easeOutQuart")
		}), e.find(".hero").delay(50 * n.length).animate({
			opacity: 1
		}, 1200, "easeOutQuart", function () {
			var o = i.find("p").first().offset().top + 30,
				n = $(window).height();
			o > n && i.delay(300).animate({
				top: -(o - n)
			}, 1200, "easeOutQuart"), i.find(".holder").delay(300).animate({
				opacity: 1
			}, 1200, "easeOutQuart", function () {
				t.viewedFactories.push(e.data("factory"))
			})
		})
	},
	closeFactorySection: function () {
		this.currentFactory.animate({
			opacity: 0
		}, 600, "easeOutQuad").css("display", "none"), $("#map-mock").show(), this.changeHistory(), this.currentFactory = null
	}
}, E.pages.product.BuckleShim = function () {
	this.elements = {
		buckleOptions: $(".buckle-option"),
		cart: $("#cart_form")
	}, $(".product-options").delegate(".buckle-option", "click", $.proxy(this.onBuckleClick, this)), this.photoOrder = ["none", "silver", "antique brass", "black"], this.elements.cart.append($("<input />", {
		type: "hidden",
		id: "buckle-data",
		name: "buckle_data",
		value: null
	}))
}, E.pages.product.BuckleShim.prototype.onBuckleClick = function (t) {
	var e = $("#prices-container"),
		i = e.find(".prices-window"),
		o = $(t.currentTarget),
		n = e.hasClass("has-equation") ? -115 : -44,
		r = o.data("variant-id");
	if (o.hasClass("sold-out")) return !1;
	i.animate({
		top: "0" == r ? n : -8
	}, 300, function () {
		null == r && i.effect("highlight", {}, 1e3)
	}), o.addClass("active"), this.elements.buckleOptions.not(o).removeClass("active"), this.appendBucklePostData(o.data());
	var s = $(".product-thumbs").find("img");
	s.eq(null == r ? 0 : this.elements.buckleOptions.index(o) + 1).trigger("click")
}, E.pages.product.BuckleShim.prototype.appendBucklePostData = function (t) {
	$("#buckle-data").attr("value", t.variantId).data(t)
}, E.pages.product.Controller = {
	init: function (t) {
		this.productSelector = new E.pages.product.ProductSelector($(".color-selector")), this.sizeSelector = new E.pages.product.SizeSelector($(".size-selector")), this.imageSelector = new E.pages.product.ImageSelector($(".product-thumbs")), this.form = new E.pages.product.Form($("#cart_form")), this.image = new E.pages.product.Image($(".product-photo")), this.image.setChildComponent("productSelector", this.productSelector), this.form.setChildComponent("sizeSelector", this.sizeSelector), this.form.setChildComponent("productSelector", this.productSelector), this.productSelector.sub(this.productSelector.Event.UPDATE, $.proxy(this.imageSelector.updateProduct, this.imageSelector), $.proxy(this.sizeSelector.update, this.sizeSelector), $.proxy(this.form.updateSubmitButton, this.form)), this.sizeSelector.sub(this.sizeSelector.Event.UPDATE, $.proxy(this.form.updateSubmitButton, this.form)), this.imageSelector.sub(this.imageSelector.Event.UPDATE, $.proxy(this.image.update, this.image)), $.each(PageConfig.gallery_hash.products, function (t, e) {
			$.each(e.variants, function (t, e) {
				-1 == $.inArray(e.id, PageConfig.waitlisted_variants) || "waitlistable" != e.orderable_state && "sold_out" != e.orderable_state || (e.orderable_state = "waitlisted")
			})
		});
		for (param in t) t[param] && t.hasOwnProperty(param) && ("function" == typeof this[param] ? this[param]() : this[param] = t[param]);
		this.form.updateSubmitButton(), setTimeout($.proxy(this.preloadImages, this), 150);
		var e = $.getURLParameter("size");
		e && $('.tooltip[data-size-name="' + e + '"]').click()
	},
	initBuckleSelector: function () {
		new E.pages.product.BuckleShim
	},
	initVideo: function () {
		if (document.createElement("video").canPlayType) {
			var t = PageConfig.gallery_hash.products[0].images,
				e = t.length;
			$.each(PageConfig.gallery_hash.products, function (t) {
				PageConfig.gallery_hash.products[t].images[e] = {
					isVideo: !0
				}
			})
		}
	},
	initHTO: function () {
		$(".button-container").after($(['<li class="hto-button-container" style="opacity: 0;">', '<p class="section-divider">or</p>', '<input type="button" value="Home Try-On" class="standard-button large add-to-home-try-on">', '<p class="hto-description">Try this item on at home for free.</p>', "</li>", '<li class="hto-not-available hidden"><p>Home Try-On is not available for this product</p></li>'].join("")))
	},
	preloadImages: function () {
		var t = this;
		t.preloadProductImages(PageConfig.gallery_hash.products[PageConfig.product_index]), $.each(PageConfig.gallery_hash.products, function (e, i) {
			t.preloadProductImages(i)
		})
	},
	preloadProductImages: function (t) {
		$.each(t.images, function (t, e) {
			E.lib.ImageLoader.loadImages([e.url, e.thumb, e.original_size])
		})
	}
}, E.pages.product.Form = function (t) {
	E.lib.Component.call(this, t), this.homeTryOnProduct = !1, this.button = this.container.find(".add-to-cart"), this.quantityField = this.container.find("#quantity"), this.errorField = this.container.find("#cart_error"), this.preorderInfo = this.container.find("#preorder-info"), this.container.on("submit", function (t) {
		t.preventDefault()
	});
	var e = this;
	this.container.on("click", ".add-to-cart", function (t) {
		e.homeTryOnProduct = !1, e.onSubmit(t)
	});
	var e = this;
	this.container.on("click", ".add-to-home-try-on", function (t) {
		e.homeTryOnProduct = !0, e.onSubmit(t)
	})
}, E.inherit(E.pages.product.Form, E.lib.ButtonSet), E.pages.product.Form.prototype.Types = {
	sold_out: {
		value: "Sold Out",
		disabled: !0
	},
	waitlistable: {
		value: "Notify Me",
		disabled: !1
	},
	shippable: {
		value: "Add to Bag",
		disabled: !1
	},
	preorderable: {
		value: "Pre-order",
		disabled: !1
	},
	waitlisted: {
		value: "Waitlisted",
		disabled: !0
	}
}, E.pages.product.Form.prototype.onSubmit = function (t) {
	return t.preventDefault(), this.rollbackErrors(), this.validate() && this.populate(), !1
}, E.pages.product.Form.prototype.populate = function () {
	var t = PageConfig.gallery_hash.products[this.productSelector.getIndex()],
		e = t.variants[this.sizeSelector.getIndex()],
		i = "sold_out" == e.orderable_state;
	this.container.find("#product-id").val(t.id), this.container.find("#variant-id").val(e.id), this.container.find("#sold_out").val(i), this.lineItemAdd(t, e)
}, E.pages.product.Form.prototype.validate = function () {
	var t = $("#buckle-data"),
		e = PageConfig.gallery_hash.products[this.productSelector.getIndex()],
		i = e.variants[this.sizeSelector.getIndex()],
		o = parseInt(this.quantityField.val());
	if (0 > this.sizeSelector.getIndex()) this.showError("Please select a size", this.sizeSelector.container);
	else if (0 >= this.quantityField.val()) this.showError("Please select a quantity.", $(".quantity-selector"));
	else if (t.length > 0 && "" == t.val()) this.showError("Please select a buckle option.", $("#buckle-selector"));
	else if (this.homeTryOnProduct && E.collections.LineItems.isHomeTryOn() && E.collections.LineItems.deepCount(!1) + o > 4) this.showError("You can only have 4 Home Try-On products.", $(".quantity-selector"));
	else {
		if (!(this.homeTryOnProduct && E.collections.LineItems.findWhere({
			sku: i.sku,
			active: !0
		}) && E.collections.LineItems.isHomeTryOn())) return this.homeTryOnProduct && o > 1 ? (this.showError("We added 1 product to your cart.", $(".quantity-selector")), this.quantityField.val(1), !0) : !0;
		this.showError("You already added this size to Home Try-On", $(".size-selector"))
	}
	return !1
}, E.pages.product.Form.prototype.showError = function (t, e) {
	this.errorField.text(t), e && e.effect("shake", {
		distance: 5,
		times: 3
	}, 200).find("label").addClass("error")
}, E.pages.product.Form.prototype.rollbackErrors = function () {
	this.errorField.text(""), this.container.find("label").removeClass("error")
}, E.pages.product.Form.prototype.showPreorderDate = function (t, e) {
	$("#cart_error").hide(), this.preorderInfo.removeClass().addClass(e), this.preorderInfo.text(t).show().animate({
		marginTop: 10,
		opacity: 1
	}, 300, "easeOutQuad")
}, E.pages.product.Form.prototype.hidePreorderDate = function () {
	this.preorderInfo.animate({
		marginTop: -25,
		opacity: 0
	}, 300, "easeOutQuad")
}, E.pages.product.Form.prototype.updateSubmitButton = function () {
	var t, e = PageConfig.gallery_hash.products[this.productSelector.getIndex()],
		i = e.variants[this.sizeSelector.getIndex()];
	t = 0 > this.sizeSelector.getIndex() ? e.orderable_state : "waitlistable" === i.orderable_state ? E.isLoggedIn ? "waitlistable" : "sold_out" : i.orderable_state, this.sizeSelector.getIndex() >= 0 && "preorderable" === t ? this.showPreorderDate("Ships on " + i.restock_date) : this.sizeSelector.getIndex() >= 0 && "waitlistable" === t ? this.showPreorderDate("Restock expected on " + i.restock_date, "restock") : this.hidePreorderDate(), this.toggleHomeTryOnButton(e, t), this.button.val(this.Types[t].value).attr(this.Types[t]).removeClass(E.object.keys(this.Types).join(" ")).addClass(t)
}, E.pages.product.Form.prototype.toggleHomeTryOnButton = function (t, e) {
	var i = $(".hto-button-container"),
		o = $(".hto-not-available"),
		n = i.find(".add-to-home-try-on");
	if (i.length) {
		var r = "shippable" === e && t.home_try_on,
			s = "easeOutQuad";
		if (r) o.css("opacity", 0).addClass("hidden");
		else if (o.is(":visible")) return;
		i.removeClass("hidden"), i.animate({
			marginTop: r ? 0 : -100,
			opacity: r ? 1 : 0
		}, 400, s, function () {
			r || (i.addClass("hidden"), o.css("opacity", 0).removeClass("hidden").animate({
				opacity: 1
			}, 400))
		}), E.collections.LineItems.isHomeTryOn() && 3 === E.collections.LineItems.deepCount() ? n.addClass("disabled") : n.removeClass("disabled")
	}
}, E.pages.product.Form.prototype.lineItemAdd = function (t, e) {
	var i = [],
		o = t.display_name,
		n = t.real_base_price ? t.real_base_price : this.homeTryOnProduct ? 0 : t.base_price,
		r = parseInt(this.quantityField.val()),
		s = $(".product-thumbs").find("img").first(),
		a = e.orderable_state;
	this.homeTryOnProduct !== E.collections.LineItems.isHomeTryOn() && E.collections.LineItems.reset().save();
	var l = E.collections.LineItems.findWhere({
		sku: e.sku
	});
	if (l) l.set({
		quantity: l.get("quantity") + r,
		active: !0
	});
	else {
		var c = new E.models.LineItem({
			id: e.sku,
			sku: e.sku,
			size: e.size,
			title: o,
			price: n,
			quantity: r,
			imageURL: s.attr("src"),
			restockDate: e.restock_date,
			orderableState: a,
			variantId: e.id,
			productId: parseInt(this.container.find("#product-id").val()),
			collectionId: parseInt(this.container.find("#collection-id").val()),
			homeTryOn: this.homeTryOnProduct
		});
		if ("sold_out" == a || "waitlistable" == a) return E.collections.LineItems.send(c.to_wire()), void 0;
		i.push(c)
	}
	var d = this.container.find("#buckle-data");
	if (d.length > 0 && 0 !== parseInt(d.val())) {
		var h = E.collections.LineItems.findWhere({
			sku: d.data().sku
		});
		h ? h.set("quantity", h.get("quantity") + r) : i.push(new E.models.LineItem(d.data()))
	}
	E.collections.LineItems.add(i), setTimeout(function () {
		E.pub(E.Event.Cart.BLINK)
	}, 500)
}, E.pages.product.Image = function (t) {
	t.find("img").data("index", 0).data("product-index", PageConfig.product_index), E.lib.Component.call(this, t)
}, E.inherit(E.pages.product.Image, E.lib.Component), E.pages.product.Image.prototype.update = function (t, e) {
	var i = this.productSelector.getIndex(),
		o = PageConfig.gallery_hash.products[i].images[e],
		n = null;
	if (0 !== $("#main-video").length && (n = $("#main-video")[0]), o.isVideo) $("#main-video").show(), n.play();
	else {
		n && (n.pause(), $("#main-video").hide(), n.currentTime && (n.currentTime = 0));
		var r = PageConfig.gallery_hash.products[i].images[e].url;
		this.container.find("img").data("index", e).data("product-index", i).attr("src", r)
	}
}, E.pages.product.ImageSelector = function (t) {
	E.lib.ButtonSet.call(this, t)
}, E.inherit(E.pages.product.ImageSelector, E.lib.ButtonSet), E.pages.product.ImageSelector.prototype.updateProduct = function (t, e) {
	var i = PageConfig.gallery_hash.products[e].images;
	$("#primary-image").attr("src", i[0].url).data("product-index", e).data("index", 0), this.container.find("li img").each(function (t, e) {
		$(e).attr("src", i[t].thumb)
	}), this.clear()
}, E.pages.product.ProductSelector = function (t) {
	E.lib.ButtonSet.call(this, t), this.sub(this.Event.UPDATE, $.proxy(this.update, this))
}, E.inherit(E.pages.product.ProductSelector, E.lib.ButtonSet), E.pages.product.ProductSelector.prototype.update = function (t, e) {
	var i = PageConfig.gallery_hash.products[e];
	if (this.container.find("label").find("span").text(i.color), $.isFunction(window.history.replaceState)) {
		var o = window.location.pathname;
		o = o.replace(/\/[^\/]*$/, "/" + i.permalink);
		var n = i.display_name + " - Everlane";
		document.title = n, window.history.replaceState({}, n, o)
	}
}, E.pages.product.SizeSelector = function (t) {
	E.lib.ButtonSet.call(this, t)
}, E.inherit(E.pages.product.SizeSelector, E.lib.ButtonSet), E.pages.product.SizeSelector.prototype.update = function (t, e) {
	var i = this,
		o = PageConfig.gallery_hash.products[e],
		n = 0;
	$.each(o.variants, function (t, e) {
		var o = "sold_out" === e.orderable_state || "waitlisted" === e.orderable_state;
		i.container.find("li").eq(n).toggleClass("sold-out", o), n++
	})
}, $(document).on("ready page:change", function () {
	function t() {
		var t = 0 == e.val().length || 0 == i.val().length;
		t ? n.attr("disabled", "disabled") : n.removeAttr("disabled"), n.toggleClass("disabled", t)
	}
	if (0 != $(".return_authorizations.new").length) {
		var e = $("#return_authorization_reason_category"),
			i = $("#return_authorization_reason"),
			o = $('form.return_authorization input[type="checkbox"]'),
			n = $("#submit");
		o.change(function () {
			var t = $(this),
				e = t.is(":checked") ? 1 : 0,
				i = t.parent(".return_row").find("select"),
				o = t.parent(".return_row").find(".chzn-container");
			i.val(e), i.trigger("liszt:updated"), e ? o.show() : o.hide()
		}), e.change(t), i.change(t), i.keyup(t), t()
	}
}),
function (t, e, i) {
	function o(t) {
		var e = {}, o = /^jQuery\d+$/;
		return i.each(t.attributes, function (t, i) {
			i.specified && !o.test(i.name) && (e[i.name] = i.value)
		}), e
	}

	function n() {
		var t = i(this);
		t.val() === t.attr("placeholder") && t.hasClass("placeholder") && (t.data("placeholder-password") ? t.hide().next().show().focus().attr("id", t.removeAttr("id").data("placeholder-id")) : t.val("").removeClass("placeholder"))
	}

	function r() {
		var t, e = i(this),
			r = this.id;
		if ("" === e.val()) {
			if (e.is(":password")) {
				if (!e.data("placeholder-textinput")) {
					try {
						t = e.clone().attr({
							type: "text"
						})
					} catch (s) {
						t = i("<input>").attr(i.extend(o(this), {
							type: "text"
						}))
					}
					t.removeAttr("name").data("placeholder-password", !0).data("placeholder-id", r).bind("focus.placeholder", n), e.data("placeholder-textinput", t).data("placeholder-id", r).before(t)
				}
				e = e.removeAttr("id").hide().prev().attr("id", r).show()
			}
			e.addClass("placeholder").val(e.attr("placeholder"))
		} else e.removeClass("placeholder")
	}
	var s = "placeholder" in e.createElement("input"),
		a = "placeholder" in e.createElement("textarea");
	s && a ? (i.fn.placeholder = function () {
		return this
	}, i.fn.placeholder.input = i.fn.placeholder.textarea = !0) : (i.fn.placeholder = function () {
		return this.filter((s ? "textarea" : ":input") + "[placeholder]").bind("focus.placeholder", n).bind("blur.placeholder", r).trigger("blur.placeholder").end()
	}, i.fn.placeholder.input = s, i.fn.placeholder.textarea = a, i(function () {
		i("form").bind("submit.placeholder", function () {
			var t = i(".placeholder", this).each(n);
			setTimeout(function () {
				t.each(r)
			}, 10)
		})
	}), i(t).bind("unload.placeholder", function () {
		i(".placeholder").val("")
	}))
}(this, document, jQuery),
function () {
	$(document).on("click", ".minus", function () {
		var t, e, i;
		return e = $("#" + $(this).attr("data-reference")), i = parseInt(e.val()) - 1, t = $(this).attr("data-min"), null == t && (t = 1), t = parseInt(t), e.val(Math.max(t, i)), t >= i ? $(this).addClass("disabled") : $(".plus").removeClass("disabled")
	}), $(document).on("click", ".plus", function () {
		var t, e, i;
		return e = $("#" + $(this).attr("data-reference")), i = parseInt(e.val()) + 1 || 1, t = $(this).attr("data-max"), null == t && (t = 5), t = parseInt(t), e.val(Math.min(t, i)), i >= t ? $(this).addClass("disabled") : $(".minus").removeClass("disabled")
	}), $(document).on("ready page:change", function () {
		return $("#primary-image").hoverZoom({
			zoomParent: $("#product-sidebar"),
			"in": function () {
				return $(".button-container, .hto-button-container, .hto-not-available").animate({
					opacity: 0
				}, 200)
			},
			out: function () {
				return $(".button-container, .hto-button-container, .hto-not-available").animate({
					opacity: 1
				}, 200)
			}
		})
	})
}.call(this), E.page.ShippingAddressDialogManager = function (t, e) {
	this.chooseAddressDialog = t, this.newAddressDialog = e, this.newAddressDialog.delegate(".cancel", "click", $.proxy(this.onHideNewAddress, this)), this.chooseAddressDialog.delegate(".use-address", "click", $.proxy(this.onChangeAddress, this)), this.chooseAddressDialog.delegate(".add-new-address", "click", $.proxy(this.onClickAddAddress, this)), this.newAddressDialog.bind("reveal:close", $.proxy(this.ensureClose, this)), this.chooseAddressDialog.bind("reveal:close", $.proxy(this.ensureClose, this))
}, E.page.ShippingAddressDialogManager.prototype.onHideNewAddress = function (t) {
	t.preventDefault(), this.newAddressDialog.css("visibility", "hidden"), this.chooseAddressDialog.css("visibility", "visible")
}, E.page.ShippingAddressDialogManager.prototype.onChangeAddress = function (t) {
	var e = $(t.currentTarget);
	e.parents("label").find("input[type=radio]").attr("checked", !0), this.chooseAddressDialog.find("form").submit()
}, E.page.ShippingAddressDialogManager.prototype.onClickAddAddress = function (t) {
	t.preventDefault(), this.newAddressDialog.css("visibility", "visible"), this.chooseAddressDialog.css("visibility", "hidden")
}, E.page.ShippingAddressDialogManager.prototype.ensureClose = function (t) {
	t.preventDefault(), $(".reveal-modal-bg").hide(), this.newAddressDialog.css("visibility", "hidden"), this.chooseAddressDialog.css("visibility", "hidden")
}, E.views.CartHomeTryOnView = Backbone.View.extend({
	el: ".home-try-on",
	LINE_ITEM_QUOTA: 4,
	checkoutURL: "/checkout/route",
	events: {
		"click .home-try-on-button": "onSubmit"
	},
	initialize: function () {
		this.listenTo(this.collection, "add reset", this.showEmptyLineItems), this.listenTo(this.collection, "add reset change:quantity", this.updateCheckoutButton)
	},
	showEmptyLineItems: function () {
		if (this.collection.isHomeTryOn()) {
			var t = this.collection.deepCount(),
				e = this.$(".home-try-on-hovercart-list");
			this.$el.show(), e.removeClass("hidden"), e.find("li").hide().slice(t).show()
		}
	},
	onSubmit: function () {
		this.collection.deepCount() !== this.LINE_ITEM_QUOTA && this.$(".footer").find("span").effect("shake", {
			distance: 5,
			times: 3
		}, 200).addClass("error")
	},
	updateCheckoutButton: function () {
		if (!this.collection.isHomeTryOn()) return this.$el.hide(), void 0;
		var t = this.collection.deepCount(),
			e = this.$(".home-try-on-button");
		t === this.LINE_ITEM_QUOTA ? (e.attr("href", this.checkoutURL).removeClass("disabled"), this.$(".footer").hide()) : (this.$(".footer").show(), e.attr("href", "javascript:;").addClass("disabled"))
	}
});
