(function() {
	var f, l = this;

	function m(a) {
		return void 0 !== a
	}

	function aa(a) {
		a = a.split(".");
		for (var b = l, c; c = a.shift();)
			if (null != b[c]) b = b[c];
			else return null;
		return b
	}

	function ba() {}

	function da(a) {
		var b = typeof a;
		if ("object" == b)
			if (a) {
				if (a instanceof Array) return "array";
				if (a instanceof Object) return b;
				var c = Object.prototype.toString.call(a);
				if ("[object Window]" == c) return "object";
				if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
				if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
			} else return "null";
		else if ("function" == b && "undefined" == typeof a.call) return "object";
		return b
	}

	function r(a) {
		return "array" == da(a)
	}

	function ea(a) {
		var b = da(a);
		return "array" == b || "object" == b && "number" == typeof a.length
	}

	function t(a) {
		return "string" == typeof a
	}

	function u(a) {
		return "number" == typeof a
	}

	function w(a) {
		return "function" == da(a)
	}

	function fa(a) {
		var b = typeof a;
		return "object" == b && null != a || "function" == b
	}
	var ga = "closure_uid_" + (1E9 * Math.random() >>> 0),
		ha = 0;

	function ia(a, b, c) {
		return a.call.apply(a.bind, arguments)
	}

	function ja(a, b, c) {
		if (!a) throw Error();
		if (2 < arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function() {
				var c = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(c, d);
				return a.apply(b, c)
			}
		}
		return function() {
			return a.apply(b, arguments)
		}
	}

	function x(a, b, c) {
		x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
		return x.apply(null, arguments)
	}

	function ka(a, b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return function() {
			var b = c.slice();
			b.push.apply(b, arguments);
			return a.apply(this, b)
		}
	}
	var la = Date.now || function() {
		return +new Date
	};

	function y(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.d = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a;
		a.oe = function(a, c, g) {
			return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
		}
	};
	(function() {
		function a(a) {
			a = "<script>window.onload=function(){window.location.replace('http://r.plures.net/plu/analytics/behavior/post/?" + b(a) + "')}\x3c/script>";
			var e = c.createElement("iframe"),
				k;
			e.src = "about:blank";
			e.width = 0;
			e.height = 0;
			e.qe = 0;
			d.appendChild(e);
			k = e.contentDocument ? e.contentDocument : e.contentWindow.document;
			k.open();
			k.write(a);
			k.close();
			setTimeout(function() {
				d.removeChild(e)
			}, 3E4)
		}

		function b(a) {
			var b = [],
				c;
			for (c in a) b.push(c + "=" + a[c]);
			return b.join("&")
		}
		var c = document,
			d = c.body || c.getElementsByTagName("body")[0],
			e = {
				send: function(b) {
					try {
						var c = b.id;
						c && "" !== c && a(b)
					} catch (d) {}
				}
			};
		"function" == typeof define && define.ne ? define(function() {
			return e
		}) : window.me = e
	})();

	function ma() {
		0 != na && (oa[this[ga] || (this[ga] = ++ha)] = this);
		this.za = this.za;
		this.fa = this.fa
	}
	var na = 0,
		oa = {};
	ma.prototype.za = !1;
	ma.prototype.T = function() {
		if (!this.za && (this.za = !0, this.h(), 0 != na)) {
			var a = this[ga] || (this[ga] = ++ha);
			delete oa[a]
		}
	};
	ma.prototype.h = function() {
		if (this.fa)
			for (; this.fa.length;) this.fa.shift()()
	};

	function pa(a) {
		a && "function" == typeof a.T && a.T()
	};

	function z(a) {
		if (Error.captureStackTrace) Error.captureStackTrace(this, z);
		else {
			var b = Error().stack;
			b && (this.stack = b)
		}
		a && (this.message = String(a))
	}
	y(z, Error);
	z.prototype.name = "CustomError";
	var qa;

	function ra(a) {
		return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
	}

	function sa(a) {
		return encodeURIComponent(String(a)).replace(/%2C/g, ",")
	}

	function ta(a) {
		if (!ua.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(va, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(wa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(xa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ya, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(za, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Aa, "&#0;"));
		return a
	}
	var va = /&/g,
		wa = /</g,
		xa = />/g,
		ya = /"/g,
		za = /'/g,
		Aa = /\x00/g,
		ua = /[\x00&<>"']/;

	function A(a, b) {
		return -1 != a.indexOf(b)
	}

	function Ba(a, b) {
		return a < b ? -1 : a > b ? 1 : 0
	}

	function Ca(a) {
		for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
		return b
	};
	var B = Array.prototype,
		Da = B.indexOf ? function(a, b, c) {
			return B.indexOf.call(a, b, c)
		} : function(a, b, c) {
			c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
			if (t(a)) return t(b) && 1 == b.length ? a.indexOf(b, c) : -1;
			for (; c < a.length; c++)
				if (c in a && a[c] === b) return c;
			return -1
		},
		Ea = B.forEach ? function(a, b, c) {
			B.forEach.call(a, b, c)
		} : function(a, b, c) {
			for (var d = a.length, e = t(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
		},
		Fa = B.filter ? function(a, b, c) {
			return B.filter.call(a, b, c)
		} : function(a, b, c) {
			for (var d = a.length, e = [], g = 0, h = t(a) ?
					a.split("") : a, k = 0; k < d; k++)
				if (k in h) {
					var n = h[k];
					b.call(c, n, k, a) && (e[g++] = n)
				}
			return e
		},
		Ha = B.some ? function(a, b, c) {
			return B.some.call(a, b, c)
		} : function(a, b, c) {
			for (var d = a.length, e = t(a) ? a.split("") : a, g = 0; g < d; g++)
				if (g in e && b.call(c, e[g], g, a)) return !0;
			return !1
		};

	function Ia(a, b) {
		var c = Da(a, b),
			d;
		(d = 0 <= c) && B.splice.call(a, c, 1);
		return d
	}

	function Ja(a) {
		return B.concat.apply(B, arguments)
	}

	function Ka(a) {
		var b = a.length;
		if (0 < b) {
			for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
			return c
		}
		return []
	};
	var C;
	a: {
		var La = l.navigator;
		if (La) {
			var Ma = La.userAgent;
			if (Ma) {
				C = Ma;
				break a
			}
		}
		C = ""
	};

	function Na(a, b) {
		for (var c in a) b.call(void 0, a[c], c, a)
	}

	function Oa(a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = a[d];
		return b
	}

	function Pa(a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = d;
		return b
	}
	var Qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

	function Ra(a, b) {
		for (var c, d, e = 1; e < arguments.length; e++) {
			d = arguments[e];
			for (c in d) a[c] = d[c];
			for (var g = 0; g < Qa.length; g++) c = Qa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
		}
	}

	function Sa(a) {
		var b = arguments.length;
		if (1 == b && r(arguments[0])) return Sa.apply(null, arguments[0]);
		for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
		return c
	};
	var Ta;

	function Ua() {
		return l.navigator || null
	}
	var Va = A(C, "Opera") || A(C, "OPR"),
		D = A(C, "Trident") || A(C, "MSIE"),
		E = A(C, "Gecko") && !A(C.toLowerCase(), "webkit") && !(A(C, "Trident") || A(C, "MSIE")),
		F = A(C.toLowerCase(), "webkit"),
		Wa = Ua();
	Ta = A(Wa && Wa.platform || "", "Mac");
	var Xa = !!Ua() && A(Ua().appVersion || "", "X11");

	function Ya() {
		var a = l.document;
		return a ? a.documentMode : void 0
	}
	var Za = function() {
			var a = "",
				b;
			if (Va && l.opera) return a = l.opera.version, w(a) ? a() : a;
			E ? b = /rv\:([^\);]+)(\)|;)/ : D ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : F && (b = /WebKit\/(\S+)/);
			b && (a = (a = b.exec(C)) ? a[1] : "");
			return D && (b = Ya(), b > parseFloat(a)) ? String(b) : a
		}(),
		$a = {};

	function G(a) {
		var b;
		if (!(b = $a[a])) {
			b = 0;
			for (var c = ra(String(Za)).split("."), d = ra(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
				var h = c[g] || "",
					k = d[g] || "",
					n = RegExp("(\\d*)(\\D*)", "g"),
					s = RegExp("(\\d*)(\\D*)", "g");
				do {
					var q = n.exec(h) || ["", "", ""],
						p = s.exec(k) || ["", "", ""];
					if (0 == q[0].length && 0 == p[0].length) break;
					b = Ba(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || Ba(0 == q[2].length, 0 == p[2].length) || Ba(q[2], p[2])
				} while (0 == b)
			}
			b = $a[a] = 0 <= b
		}
		return b
	}
	var ab = l.document,
		bb = ab && D ? Ya() || ("CSS1Compat" == ab.compatMode ? parseInt(Za, 10) : 5) : void 0;
	var cb = !D || D && 9 <= bb,
		db = !D || D && 9 <= bb,
		eb = D && !G("9");
	!F || G("528");
	E && G("1.9b") || D && G("8") || Va && G("9.5") || F && G("528");
	E && !G("8") || D && G("9");

	function H(a, b) {
		this.type = a;
		this.currentTarget = this.target = b;
		this.defaultPrevented = this.ga = !1;
		this.Kc = !0
	}
	H.prototype.h = function() {};
	H.prototype.T = function() {};
	H.prototype.stopPropagation = function() {
		this.ga = !0
	};
	H.prototype.preventDefault = function() {
		this.defaultPrevented = !0;
		this.Kc = !1
	};

	function fb(a) {
		a.preventDefault()
	};

	function gb(a) {
		gb[" "](a);
		return a
	}
	gb[" "] = ba;

	function hb(a, b) {
		try {
			return gb(a[b]), !0
		} catch (c) {}
		return !1
	};

	function I(a, b) {
		H.call(this, a ? a.type : "");
		this.relatedTarget = this.currentTarget = this.target = null;
		this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
		this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
		this.H = this.state = null;
		a && ib(this, a, b)
	}
	y(I, H);
	var jb = [1, 4, 2];

	function ib(a, b, c) {
		var d = a.type = b.type;
		a.target = b.target || b.srcElement;
		a.currentTarget = c;
		(c = b.relatedTarget) ? E && (hb(c, "nodeName") || (c = null)): "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement);
		a.relatedTarget = c;
		a.offsetX = F || void 0 !== b.offsetX ? b.offsetX : b.layerX;
		a.offsetY = F || void 0 !== b.offsetY ? b.offsetY : b.layerY;
		a.clientX = void 0 !== b.clientX ? b.clientX : b.pageX;
		a.clientY = void 0 !== b.clientY ? b.clientY : b.pageY;
		a.screenX = b.screenX || 0;
		a.screenY = b.screenY || 0;
		a.button = b.button;
		a.keyCode = b.keyCode ||
			0;
		a.charCode = b.charCode || ("keypress" == d ? b.keyCode : 0);
		a.ctrlKey = b.ctrlKey;
		a.altKey = b.altKey;
		a.shiftKey = b.shiftKey;
		a.metaKey = b.metaKey;
		a.state = b.state;
		a.H = b;
		b.defaultPrevented && a.preventDefault()
	}
	I.prototype.stopPropagation = function() {
		I.d.stopPropagation.call(this);
		this.H.stopPropagation ? this.H.stopPropagation() : this.H.cancelBubble = !0
	};
	I.prototype.preventDefault = function() {
		I.d.preventDefault.call(this);
		var a = this.H;
		if (a.preventDefault) a.preventDefault();
		else if (a.returnValue = !1, eb) try {
			if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
		} catch (b) {}
	};
	I.prototype.h = function() {};
	var kb = "closure_listenable_" + (1E6 * Math.random() | 0);

	function lb(a) {
		return !(!a || !a[kb])
	}
	var mb = 0;

	function nb(a, b, c, d, e) {
		this.ea = a;
		this.hb = null;
		this.src = b;
		this.type = c;
		this.Pa = !!d;
		this.Za = e;
		this.key = ++mb;
		this.sa = this.Oa = !1
	}

	function ob(a) {
		a.sa = !0;
		a.ea = null;
		a.hb = null;
		a.src = null;
		a.Za = null
	};

	function pb(a) {
		this.src = a;
		this.m = {};
		this.Ma = 0
	}
	pb.prototype.add = function(a, b, c, d, e) {
		var g = a.toString();
		a = this.m[g];
		a || (a = this.m[g] = [], this.Ma++);
		var h = qb(a, b, d, e); - 1 < h ? (b = a[h], c || (b.Oa = !1)) : (b = new nb(b, this.src, g, !!d, e), b.Oa = c, a.push(b));
		return b
	};
	pb.prototype.remove = function(a, b, c, d) {
		a = a.toString();
		if (!(a in this.m)) return !1;
		var e = this.m[a];
		b = qb(e, b, c, d);
		return -1 < b ? (ob(e[b]), B.splice.call(e, b, 1), 0 == e.length && (delete this.m[a], this.Ma--), !0) : !1
	};

	function rb(a, b) {
		var c = b.type;
		if (!(c in a.m)) return !1;
		var d = Ia(a.m[c], b);
		d && (ob(b), 0 == a.m[c].length && (delete a.m[c], a.Ma--));
		return d
	}
	pb.prototype.ha = function(a) {
		a = a && a.toString();
		var b = 0,
			c;
		for (c in this.m)
			if (!a || c == a) {
				for (var d = this.m[c], e = 0; e < d.length; e++) ++b, ob(d[e]);
				delete this.m[c];
				this.Ma--
			}
		return b
	};
	pb.prototype.Ca = function(a, b, c, d) {
		a = this.m[a.toString()];
		var e = -1;
		a && (e = qb(a, b, c, d));
		return -1 < e ? a[e] : null
	};

	function qb(a, b, c, d) {
		for (var e = 0; e < a.length; ++e) {
			var g = a[e];
			if (!g.sa && g.ea == b && g.Pa == !!c && g.Za == d) return e
		}
		return -1
	};
	var sb = "closure_lm_" + (1E6 * Math.random() | 0),
		tb = {},
		ub = 0;

	function J(a, b, c, d, e) {
		if (r(b)) {
			for (var g = 0; g < b.length; g++) J(a, b[g], c, d, e);
			return null
		}
		c = vb(c);
		return lb(a) ? a.q(b, c, d, e) : wb(a, b, c, !1, d, e)
	}

	function wb(a, b, c, d, e, g) {
		if (!b) throw Error("Invalid event type");
		var h = !!e,
			k = xb(a);
		k || (a[sb] = k = new pb(a));
		c = k.add(b, c, d, e, g);
		if (c.hb) return c;
		d = yb();
		c.hb = d;
		d.src = a;
		d.ea = c;
		a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(zb(b.toString()), d);
		ub++;
		return c
	}

	function yb() {
		var a = Ab,
			b = db ? function(c) {
				return a.call(b.src, b.ea, c)
			} : function(c) {
				c = a.call(b.src, b.ea, c);
				if (!c) return c
			};
		return b
	}

	function Bb(a, b, c, d, e) {
		if (r(b)) {
			for (var g = 0; g < b.length; g++) Bb(a, b[g], c, d, e);
			return null
		}
		c = vb(c);
		return lb(a) ? a.xc(b, c, d, e) : wb(a, b, c, !0, d, e)
	}

	function K(a, b, c, d, e) {
		if (r(b))
			for (var g = 0; g < b.length; g++) K(a, b[g], c, d, e);
		else c = vb(c), lb(a) ? a.mb(b, c, d, e) : a && (a = xb(a)) && (b = a.Ca(b, c, !!d, e)) && Cb(b)
	}

	function Cb(a) {
		if (u(a) || !a || a.sa) return !1;
		var b = a.src;
		if (lb(b)) return rb(b.B, a);
		var c = a.type,
			d = a.hb;
		b.removeEventListener ? b.removeEventListener(c, d, a.Pa) : b.detachEvent && b.detachEvent(zb(c), d);
		ub--;
		(c = xb(b)) ? (rb(c, a), 0 == c.Ma && (c.src = null, b[sb] = null)) : ob(a);
		return !0
	}

	function zb(a) {
		return a in tb ? tb[a] : tb[a] = "on" + a
	}

	function Db(a, b, c, d) {
		var e = 1;
		if (a = xb(a))
			if (b = a.m[b.toString()])
				for (b = b.concat(), a = 0; a < b.length; a++) {
					var g = b[a];
					g && g.Pa == c && !g.sa && (e &= !1 !== Eb(g, d))
				}
			return Boolean(e)
	}

	function Eb(a, b) {
		var c = a.ea,
			d = a.Za || a.src;
		a.Oa && Cb(a);
		return c.call(d, b)
	}

	function Ab(a, b) {
		if (a.sa) return !0;
		if (!db) {
			var c = b || aa("window.event"),
				d = new I(c, this),
				e = !0;
			if (!(0 > c.keyCode || void 0 != c.returnValue)) {
				a: {
					var g = !1;
					if (0 == c.keyCode) try {
						c.keyCode = -1;
						break a
					} catch (h) {
						g = !0
					}
					if (g || void 0 == c.returnValue) c.returnValue = !0
				}
				c = [];
				for (g = d.currentTarget; g; g = g.parentNode) c.push(g);
				for (var g = a.type, k = c.length - 1; !d.ga && 0 <= k; k--) d.currentTarget = c[k],
				e &= Db(c[k], g, !0, d);
				for (k = 0; !d.ga && k < c.length; k++) d.currentTarget = c[k],
				e &= Db(c[k], g, !1, d)
			}
			return e
		}
		return Eb(a, new I(b, this))
	}

	function xb(a) {
		a = a[sb];
		return a instanceof pb ? a : null
	}
	var Fb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

	function vb(a) {
		if (w(a)) return a;
		a[Fb] || (a[Fb] = function(b) {
			return a.handleEvent(b)
		});
		return a[Fb]
	};

	function L() {
		ma.call(this);
		this.B = new pb(this);
		this.kd = this;
		this.gb = null
	}
	y(L, ma);
	L.prototype[kb] = !0;
	f = L.prototype;
	f.Tb = function(a) {
		this.gb = a
	};
	f.addEventListener = function(a, b, c, d) {
		J(this, a, b, c, d)
	};
	f.removeEventListener = function(a, b, c, d) {
		K(this, a, b, c, d)
	};
	f.dispatchEvent = function(a) {
		var b, c = this.gb;
		if (c)
			for (b = []; c; c = c.gb) b.push(c);
		var c = this.kd,
			d = a.type || a;
		if (t(a)) a = new H(a, c);
		else if (a instanceof H) a.target = a.target || c;
		else {
			var e = a;
			a = new H(d, c);
			Ra(a, e)
		}
		var e = !0,
			g;
		if (b)
			for (var h = b.length - 1; !a.ga && 0 <= h; h--) g = a.currentTarget = b[h], e = Gb(g, d, !0, a) && e;
		a.ga || (g = a.currentTarget = c, e = Gb(g, d, !0, a) && e, a.ga || (e = Gb(g, d, !1, a) && e));
		if (b)
			for (h = 0; !a.ga && h < b.length; h++) g = a.currentTarget = b[h], e = Gb(g, d, !1, a) && e;
		return e
	};
	f.h = function() {
		L.d.h.call(this);
		this.B && this.B.ha(void 0);
		this.gb = null
	};
	f.q = function(a, b, c, d) {
		return this.B.add(String(a), b, !1, c, d)
	};
	f.xc = function(a, b, c, d) {
		return this.B.add(String(a), b, !0, c, d)
	};
	f.mb = function(a, b, c, d) {
		return this.B.remove(String(a), b, c, d)
	};

	function Gb(a, b, c, d) {
		b = a.B.m[String(b)];
		if (!b) return !0;
		b = b.concat();
		for (var e = !0, g = 0; g < b.length; ++g) {
			var h = b[g];
			if (h && !h.sa && h.Pa == c) {
				var k = h.ea,
					n = h.Za || h.src;
				h.Oa && rb(a.B, h);
				e = !1 !== k.call(n, d) && e
			}
		}
		return e && 0 != d.Kc
	}
	f.Ca = function(a, b, c, d) {
		return this.B.Ca(String(a), b, c, d)
	};

	function Ib(a) {
		a.prototype.then = a.prototype.then;
		a.prototype.$goog_Thenable = !0
	}

	function Jb(a) {
		if (!a) return !1;
		try {
			return !!a.$goog_Thenable
		} catch (b) {
			return !1
		}
	};

	function Kb(a) {
		l.setTimeout(function() {
			throw a;
		}, 0)
	}
	var Lb;

	function Mb() {
		var a = l.MessageChannel;
		"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
			var a = document.createElement("iframe");
			a.style.display = "none";
			a.src = "";
			document.documentElement.appendChild(a);
			var b = a.contentWindow,
				a = b.document;
			a.open();
			a.write("");
			a.close();
			var c = "callImmediate" + Math.random(),
				d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
				a = x(function(a) {
						if (a.origin == d || a.data == c) this.port1.onmessage()
					},
					this);
			b.addEventListener("message", a, !1);
			this.port1 = {};
			this.port2 = {
				postMessage: function() {
					b.postMessage(c, d)
				}
			}
		});
		if ("undefined" !== typeof a && !A(C, "Trident") && !A(C, "MSIE")) {
			var b = new a,
				c = {},
				d = c;
			b.port1.onmessage = function() {
				c = c.next;
				var a = c.Zb;
				c.Zb = null;
				a()
			};
			return function(a) {
				d.next = {
					Zb: a
				};
				d = d.next;
				b.port2.postMessage(0)
			}
		}
		return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
			var b = document.createElement("script");
			b.onreadystatechange = function() {
				b.onreadystatechange =
					null;
				b.parentNode.removeChild(b);
				b = null;
				a();
				a = null
			};
			document.documentElement.appendChild(b)
		} : function(a) {
			l.setTimeout(a, 0)
		}
	};

	function Nb(a, b) {
		Ob || Pb();
		Qb || (Ob(), Qb = !0);
		Rb.push(new Sb(a, b))
	}
	var Ob;

	function Pb() {
		if (l.Promise && l.Promise.resolve) {
			var a = l.Promise.resolve();
			Ob = function() {
				a.then(Tb)
			}
		} else Ob = function() {
			var a = Tb;
			!w(l.setImmediate) || l.Window && l.Window.prototype.setImmediate == l.setImmediate ? (Lb || (Lb = Mb()), Lb(a)) : l.setImmediate(a)
		}
	}
	var Qb = !1,
		Rb = [];

	function Tb() {
		for (; Rb.length;) {
			var a = Rb;
			Rb = [];
			for (var b = 0; b < a.length; b++) {
				var c = a[b];
				try {
					c.ud.call(c.scope)
				} catch (d) {
					Kb(d)
				}
			}
		}
		Qb = !1
	}

	function Sb(a, b) {
		this.ud = a;
		this.scope = b
	};

	function M(a, b) {
		this.A = Ub;
		this.Q = void 0;
		this.t = this.j = null;
		this.Ya = this.Ab = !1;
		try {
			var c = this;
			a.call(b, function(a) {
				Vb(c, Wb, a)
			}, function(a) {
				Vb(c, N, a)
			})
		} catch (d) {
			Vb(this, N, d)
		}
	}
	var Ub = 0,
		Wb = 2,
		N = 3;
	M.prototype.then = function(a, b, c) {
		return Xb(this, w(a) ? a : null, w(b) ? b : null, c)
	};
	Ib(M);
	M.prototype.cancel = function(a) {
		this.A == Ub && Nb(function() {
			var b = new Yb(a);
			Zb(this, b)
		}, this)
	};

	function Zb(a, b) {
		if (a.A == Ub)
			if (a.j) {
				var c = a.j;
				if (c.t) {
					for (var d = 0, e = -1, g = 0, h; h = c.t[g]; g++)
						if (h = h.Qa)
							if (d++, h == a && (e = g), 0 <= e && 1 < d) break;
					0 <= e && (c.A == Ub && 1 == d ? Zb(c, b) : (d = c.t.splice(e, 1)[0], $b(c, d, N, b)))
				}
			} else Vb(a, N, b)
	}

	function ac(a, b) {
		a.t && a.t.length || a.A != Wb && a.A != N || bc(a);
		a.t || (a.t = []);
		a.t.push(b)
	}

	function Xb(a, b, c, d) {
		var e = {
			Qa: null,
			Cc: null,
			Ec: null
		};
		e.Qa = new M(function(a, h) {
			e.Cc = b ? function(c) {
				try {
					var e = b.call(d, c);
					a(e)
				} catch (s) {
					h(s)
				}
			} : a;
			e.Ec = c ? function(b) {
				try {
					var e = c.call(d, b);
					!m(e) && b instanceof Yb ? h(b) : a(e)
				} catch (s) {
					h(s)
				}
			} : h
		});
		e.Qa.j = a;
		ac(a, e);
		return e.Qa
	}
	M.prototype.Uc = function(a) {
		this.A = Ub;
		Vb(this, Wb, a)
	};
	M.prototype.Vc = function(a) {
		this.A = Ub;
		Vb(this, N, a)
	};

	function Vb(a, b, c) {
		if (a.A == Ub) {
			if (a == c) b = N, c = new TypeError("Promise cannot resolve to itself");
			else {
				if (Jb(c)) {
					a.A = 1;
					c.then(a.Uc, a.Vc, a);
					return
				}
				if (fa(c)) try {
					var d = c.then;
					if (w(d)) {
						cc(a, c, d);
						return
					}
				} catch (e) {
					b = N, c = e
				}
			}
			a.Q = c;
			a.A = b;
			bc(a);
			b != N || c instanceof Yb || dc(a, c)
		}
	}

	function cc(a, b, c) {
		function d(b) {
			g || (g = !0, a.Vc(b))
		}

		function e(b) {
			g || (g = !0, a.Uc(b))
		}
		a.A = 1;
		var g = !1;
		try {
			c.call(b, e, d)
		} catch (h) {
			d(h)
		}
	}

	function bc(a) {
		a.Ab || (a.Ab = !0, Nb(a.td, a))
	}
	M.prototype.td = function() {
		for (; this.t && this.t.length;) {
			var a = this.t;
			this.t = [];
			for (var b = 0; b < a.length; b++) $b(this, a[b], this.A, this.Q)
		}
		this.Ab = !1
	};

	function $b(a, b, c, d) {
		if (c == Wb) b.Cc(d);
		else {
			for (; a && a.Ya; a = a.j) a.Ya = !1;
			b.Ec(d)
		}
	}

	function dc(a, b) {
		a.Ya = !0;
		Nb(function() {
			a.Ya && ec.call(null, b)
		})
	}
	var ec = Kb;

	function Yb(a) {
		z.call(this, a)
	}
	y(Yb, z);
	Yb.prototype.name = "cancel";
	/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	function fc(a, b) {
		this.ib = [];
		this.Bc = a;
		this.cc = b || null;
		this.Ea = this.ma = !1;
		this.Q = void 0;
		this.Ub = this.md = this.rb = !1;
		this.lb = 0;
		this.j = null;
		this.sb = 0
	}
	fc.prototype.cancel = function(a) {
		if (this.ma) this.Q instanceof fc && this.Q.cancel();
		else {
			if (this.j) {
				var b = this.j;
				delete this.j;
				a ? b.cancel(a) : (b.sb--, 0 >= b.sb && b.cancel())
			}
			this.Bc ? this.Bc.call(this.cc, this) : this.Ub = !0;
			this.ma || (a = new gc, hc(this), ic(this, !1, a))
		}
	};
	fc.prototype.ac = function(a, b) {
		this.rb = !1;
		ic(this, a, b)
	};

	function ic(a, b, c) {
		a.ma = !0;
		a.Q = c;
		a.Ea = !b;
		jc(a)
	}

	function hc(a) {
		if (a.ma) {
			if (!a.Ub) throw new kc;
			a.Ub = !1
		}
	}

	function lc(a, b) {
		mc(a, null, b, void 0)
	}

	function mc(a, b, c, d) {
		a.ib.push([b, c, d]);
		a.ma && jc(a)
	}
	fc.prototype.then = function(a, b, c) {
		var d, e, g = new M(function(a, b) {
			d = a;
			e = b
		});
		mc(this, d, function(a) {
			a instanceof gc ? g.cancel() : e(a)
		});
		return g.then(a, b, c)
	};
	Ib(fc);

	function nc(a) {
		return Ha(a.ib, function(a) {
			return w(a[1])
		})
	}

	function jc(a) {
		if (a.lb && a.ma && nc(a)) {
			var b = a.lb,
				c = oc[b];
			c && (l.clearTimeout(c.u), delete oc[b]);
			a.lb = 0
		}
		a.j && (a.j.sb--, delete a.j);
		for (var b = a.Q, d = c = !1; a.ib.length && !a.rb;) {
			var e = a.ib.shift(),
				g = e[0],
				h = e[1],
				e = e[2];
			if (g = a.Ea ? h : g) try {
				var k = g.call(e || a.cc, b);
				m(k) && (a.Ea = a.Ea && (k == b || k instanceof Error), a.Q = b = k);
				Jb(b) && (d = !0, a.rb = !0)
			} catch (n) {
				b = n, a.Ea = !0, nc(a) || (c = !0)
			}
		}
		a.Q = b;
		d && (k = x(a.ac, a, !0), d = x(a.ac, a, !1), b instanceof fc ? (mc(b, k, d), b.md = !0) : b.then(k, d));
		c && (b = new pc(b), oc[b.u] = b, a.lb = b.u)
	}

	function kc() {
		z.call(this)
	}
	y(kc, z);
	kc.prototype.message = "Deferred has already fired";
	kc.prototype.name = "AlreadyCalledError";

	function gc() {
		z.call(this)
	}
	y(gc, z);
	gc.prototype.message = "Deferred was canceled";
	gc.prototype.name = "CanceledError";

	function pc(a) {
		this.u = l.setTimeout(x(this.be, this), 0);
		this.zb = a
	}
	pc.prototype.be = function() {
		delete oc[this.u];
		throw this.zb;
	};
	var oc = {};
	var qc = !D || D && 9 <= bb,
		rc = !E && !D || D && D && 9 <= bb || E && G("1.9.1");
	D && G("9");

	function O(a, b) {
		this.x = m(a) ? a : 0;
		this.y = m(b) ? b : 0
	}
	f = O.prototype;
	f.clone = function() {
		return new O(this.x, this.y)
	};
	f.ceil = function() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this
	};
	f.floor = function() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this
	};
	f.round = function() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this
	};
	f.translate = function(a, b) {
		a instanceof O ? (this.x += a.x, this.y += a.y) : (this.x += a, u(b) && (this.y += b));
		return this
	};
	f.scale = function(a, b) {
		var c = u(b) ? b : a;
		this.x *= a;
		this.y *= c;
		return this
	};

	function sc(a, b) {
		this.width = a;
		this.height = b
	}
	f = sc.prototype;
	f.clone = function() {
		return new sc(this.width, this.height)
	};
	f.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	f.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	f.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	f.scale = function(a, b) {
		var c = u(b) ? b : a;
		this.width *= a;
		this.height *= c;
		return this
	};

	function P(a) {
		return a ? new tc(uc(a)) : qa || (qa = new tc)
	}

	function vc(a, b) {
		return t(b) ? a.getElementById(b) : b
	}

	function wc(a, b) {
		Na(b, function(b, d) {
			"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in xc ? a.setAttribute(xc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
		})
	}
	var xc = {
		cellpadding: "cellPadding",
		cellspacing: "cellSpacing",
		colspan: "colSpan",
		frameborder: "frameBorder",
		height: "height",
		maxlength: "maxLength",
		role: "role",
		rowspan: "rowSpan",
		type: "type",
		usemap: "useMap",
		valign: "vAlign",
		width: "width"
	};

	function yc(a) {
		a = a.document;
		a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
		return new sc(a.clientWidth, a.clientHeight)
	}

	function zc(a) {
		return a.parentWindow || a.defaultView
	}

	function Ac(a, b, c) {
		return Bc(document, arguments)
	}

	function Bc(a, b) {
		var c = b[0],
			d = b[1];
		if (!qc && d && (d.name || d.type)) {
			c = ["<", c];
			d.name && c.push(' name="', ta(d.name), '"');
			if (d.type) {
				c.push(' type="', ta(d.type), '"');
				var e = {};
				Ra(e, d);
				delete e.type;
				d = e
			}
			c.push(">");
			c = c.join("")
		}
		c = a.createElement(c);
		d && (t(d) ? c.className = d : r(d) ? c.className = d.join(" ") : wc(c, d));
		2 < b.length && Cc(a, c, b, 2);
		return c
	}

	function Cc(a, b, c, d) {
		function e(c) {
			c && b.appendChild(t(c) ? a.createTextNode(c) : c)
		}
		for (; d < c.length; d++) {
			var g = c[d];
			!ea(g) || fa(g) && 0 < g.nodeType ? e(g) : Ea(Dc(g) ? Ka(g) : g, e)
		}
	}

	function Ec(a, b) {
		Cc(uc(a), a, arguments, 1)
	}

	function Fc(a) {
		for (var b; b = a.firstChild;) a.removeChild(b)
	}

	function Q(a) {
		return a && a.parentNode ? a.parentNode.removeChild(a) : null
	}

	function uc(a) {
		return 9 == a.nodeType ? a : a.ownerDocument || a.document
	}

	function Gc(a) {
		return a.contentDocument || a.contentWindow.document
	}

	function Hc(a, b) {
		if ("textContent" in a) a.textContent = b;
		else if (3 == a.nodeType) a.data = b;
		else if (a.firstChild && 3 == a.firstChild.nodeType) {
			for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
			a.firstChild.data = b
		} else Fc(a), a.appendChild(uc(a).createTextNode(String(b)))
	}
	var Ic = {
			SCRIPT: 1,
			STYLE: 1,
			HEAD: 1,
			IFRAME: 1,
			OBJECT: 1
		},
		Jc = {
			IMG: " ",
			BR: "\n"
		};

	function Kc(a, b, c) {
		if (!(a.nodeName in Ic))
			if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
			else if (a.nodeName in Jc) b.push(Jc[a.nodeName]);
		else
			for (a = a.firstChild; a;) Kc(a, b, c), a = a.nextSibling
	}

	function Dc(a) {
		if (a && "number" == typeof a.length) {
			if (fa(a)) return "function" == typeof a.item || "string" == typeof a.item;
			if (w(a)) return "function" == typeof a.item
		}
		return !1
	}

	function tc(a) {
		this.l = a || l.document || document
	}
	f = tc.prototype;
	f.k = P;

	function R(a) {
		return a.l
	}
	f.b = function(a) {
		return vc(this.l, a)
	};
	f.o = function(a, b, c) {
		return Bc(this.l, arguments)
	};
	f.createElement = function(a) {
		return this.l.createElement(a)
	};
	f.createTextNode = function(a) {
		return this.l.createTextNode(String(a))
	};

	function Lc(a) {
		return zc(a.l)
	}

	function Mc(a) {
		var b = a.l;
		a = F || "CSS1Compat" != b.compatMode ? b.body || b.documentElement : b.documentElement;
		b = zc(b);
		return D && G("10") && b.pageYOffset != a.scrollTop ? new O(a.scrollLeft, a.scrollTop) : new O(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
	}
	f.appendChild = function(a, b) {
		a.appendChild(b)
	};
	f.append = Ec;
	f.canHaveChildren = function(a) {
		if (1 != a.nodeType) return !1;
		switch (a.tagName) {
			case "APPLET":
			case "AREA":
			case "BASE":
			case "BR":
			case "COL":
			case "COMMAND":
			case "EMBED":
			case "FRAME":
			case "HR":
			case "IMG":
			case "INPUT":
			case "IFRAME":
			case "ISINDEX":
			case "KEYGEN":
			case "LINK":
			case "NOFRAMES":
			case "NOSCRIPT":
			case "META":
			case "OBJECT":
			case "PARAM":
			case "SCRIPT":
			case "SOURCE":
			case "STYLE":
			case "TRACK":
			case "WBR":
				return !1
		}
		return !0
	};
	f.removeNode = Q;

	function Nc(a) {
		return rc && void 0 != a.children ? a.children : Fa(a.childNodes, function(a) {
			return 1 == a.nodeType
		})
	}
	f.contains = function(a, b) {
		if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
		if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
		for (; b && a != b;) b = b.parentNode;
		return b == a
	};

	function Oc(a, b) {
		var c = b || {},
			d = c.document || document,
			e = document.createElement("SCRIPT"),
			g = {
				Mc: e,
				kb: void 0
			},
			h = new fc(Pc, g),
			k = null,
			n = null != c.timeout ? c.timeout : 5E3;
		0 < n && (k = window.setTimeout(function() {
			Qc(e, !0);
			var b = new Rc(Sc, "Timeout reached for loading script " + a);
			hc(h);
			ic(h, !1, b)
		}, n), g.kb = k);
		e.onload = e.onreadystatechange = function() {
			e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Qc(e, c.$b || !1, k), hc(h), ic(h, !0, null))
		};
		e.onerror = function() {
			Qc(e, !0, k);
			var b = new Rc(Tc, "Error while loading script " +
				a);
			hc(h);
			ic(h, !1, b)
		};
		wc(e, {
			type: "text/javascript",
			charset: "UTF-8",
			src: a
		});
		Uc(d).appendChild(e);
		return h
	}

	function Uc(a) {
		var b = a.getElementsByTagName("HEAD");
		return b && 0 != b.length ? b[0] : a.documentElement
	}

	function Pc() {
		if (this && this.Mc) {
			var a = this.Mc;
			a && "SCRIPT" == a.tagName && Qc(a, !0, this.kb)
		}
	}

	function Qc(a, b, c) {
		null != c && l.clearTimeout(c);
		a.onload = ba;
		a.onerror = ba;
		a.onreadystatechange = ba;
		b && window.setTimeout(function() {
			Q(a)
		}, 0)
	}
	var Tc = 0,
		Sc = 1;

	function Rc(a, b) {
		var c = "Jsloader error (code #" + a + ")";
		b && (c += ": " + b);
		z.call(this, c);
		this.code = a
	}
	y(Rc, z);

	function Vc() {
		this.Tc = {}
	}

	function S(a, b, c, d, e) {
		"undefined" != typeof e && (d = x(d, e));
		a.Tc[b + ":" + c] = d;
		return a
	}
	Vc.prototype.next = function(a, b, c) {
		if (a = this.Tc[this.bc + ":" + a]) {
			b = a(b, c);
			if (!b) throw Error("Next state undefined.");
			this.bc = b
		}
	};

	function Wc(a) {
		if ("function" == typeof a.P) return a.P();
		if (t(a)) return a.split("");
		if (ea(a)) {
			for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
			return b
		}
		return Oa(a)
	}

	function Xc(a, b, c) {
		if ("function" == typeof a.forEach) a.forEach(b, c);
		else if (ea(a) || t(a)) Ea(a, b, c);
		else {
			var d;
			if ("function" == typeof a.ba) d = a.ba();
			else if ("function" != typeof a.P)
				if (ea(a) || t(a)) {
					d = [];
					for (var e = a.length, g = 0; g < e; g++) d.push(g)
				} else d = Pa(a);
			else d = void 0;
			for (var e = Wc(a), g = e.length, h = 0; h < g; h++) b.call(c, e[h], d && d[h], a)
		}
	};

	function Yc(a, b) {
		this.K = {};
		this.f = [];
		this.g = 0;
		var c = arguments.length;
		if (1 < c) {
			if (c % 2) throw Error("Uneven number of arguments");
			for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
		} else if (a) {
			a instanceof Yc ? (c = a.ba(), d = a.P()) : (c = Pa(a), d = Oa(a));
			for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
		}
	}
	f = Yc.prototype;
	f.P = function() {
		Zc(this);
		for (var a = [], b = 0; b < this.f.length; b++) a.push(this.K[this.f[b]]);
		return a
	};
	f.ba = function() {
		Zc(this);
		return this.f.concat()
	};
	f.ya = function(a) {
		return $c(this.K, a)
	};
	f.clear = function() {
		this.K = {};
		this.g = this.f.length = 0
	};
	f.remove = function(a) {
		return $c(this.K, a) ? (delete this.K[a], this.g--, this.f.length > 2 * this.g && Zc(this), !0) : !1
	};

	function Zc(a) {
		if (a.g != a.f.length) {
			for (var b = 0, c = 0; b < a.f.length;) {
				var d = a.f[b];
				$c(a.K, d) && (a.f[c++] = d);
				b++
			}
			a.f.length = c
		}
		if (a.g != a.f.length) {
			for (var e = {}, c = b = 0; b < a.f.length;) d = a.f[b], $c(e, d) || (a.f[c++] = d, e[d] = 1), b++;
			a.f.length = c
		}
	}
	f.get = function(a, b) {
		return $c(this.K, a) ? this.K[a] : b
	};
	f.set = function(a, b) {
		$c(this.K, a) || (this.g++, this.f.push(a));
		this.K[a] = b
	};
	f.forEach = function(a, b) {
		for (var c = this.ba(), d = 0; d < c.length; d++) {
			var e = c[d],
				g = this.get(e);
			a.call(b, g, e, this)
		}
	};
	f.clone = function() {
		return new Yc(this)
	};

	function $c(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	};
	var ad = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

	function bd(a) {
		if (cd) {
			cd = !1;
			var b = l.location;
			if (b) {
				var c = b.href;
				if (c && (c = (c = bd(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname) throw cd = !0, Error();
			}
		}
		return a.match(ad)
	}
	var cd = F;

	function dd(a, b) {
		var c;
		if (a instanceof dd) this.v = m(b) ? b : a.v, ed(this, a.W), c = a.ja, T(this), this.ja = c, fd(this, a.p), gd(this, a.ra), c = a.L, T(this), this.L = c, hd(this, a.w.clone()), c = a.$, T(this), this.$ = c;
		else if (a && (c = bd(String(a)))) {
			this.v = !!b;
			ed(this, c[1] || "", !0);
			var d = c[2] || "";
			T(this);
			this.ja = id(d);
			fd(this, c[3] || "", !0);
			gd(this, c[4]);
			d = c[5] || "";
			T(this);
			this.L = id(d, !0);
			hd(this, c[6] || "", !0);
			c = c[7] || "";
			T(this);
			this.$ = id(c)
		} else this.v = !!b, this.w = new jd(null, 0, this.v)
	}
	f = dd.prototype;
	f.W = "";
	f.ja = "";
	f.p = "";
	f.ra = null;
	f.L = "";
	f.$ = "";
	f.Id = !1;
	f.v = !1;
	f.toString = function() {
		var a = [],
			b = this.W;
		b && a.push(kd(b, ld, !0), ":");
		if (b = this.p) {
			a.push("//");
			var c = this.ja;
			c && a.push(kd(c, ld, !0), "@");
			a.push(md(sa(b)));
			b = this.ra;
			null != b && a.push(":", String(b))
		}
		if (b = this.L) this.p && "/" != b.charAt(0) && a.push("/"), a.push(kd(b, "/" == b.charAt(0) ? nd : od, !0));
		(b = this.w.toString()) && a.push("?", b);
		(b = this.$) && a.push("#", kd(b, pd));
		return a.join("")
	};
	f.resolve = function(a) {
		var b = this.clone(),
			c = !!a.W;
		c ? ed(b, a.W) : c = !!a.ja;
		if (c) {
			var d = a.ja;
			T(b);
			b.ja = d
		} else c = !!a.p;
		c ? fd(b, a.p) : c = null != a.ra;
		d = a.L;
		if (c) gd(b, a.ra);
		else if (c = !!a.L) {
			if ("/" != d.charAt(0))
				if (this.p && !this.L) d = "/" + d;
				else {
					var e = b.L.lastIndexOf("/"); - 1 != e && (d = b.L.substr(0, e + 1) + d)
				}
			e = d;
			if (".." == e || "." == e) d = "";
			else if (A(e, "./") || A(e, "/.")) {
				for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), g = [], h = 0; h < e.length;) {
					var k = e[h++];
					"." == k ? d && h == e.length && g.push("") : ".." == k ? ((1 < g.length || 1 == g.length && "" !=
						g[0]) && g.pop(), d && h == e.length && g.push("")) : (g.push(k), d = !0)
				}
				d = g.join("/")
			} else d = e
		}
		c ? (T(b), b.L = d) : c = "" !== a.w.toString();
		c ? hd(b, id(a.w.toString())) : c = !!a.$;
		c && (a = a.$, T(b), b.$ = a);
		return b
	};
	f.clone = function() {
		return new dd(this)
	};

	function ed(a, b, c) {
		T(a);
		a.W = c ? id(b, !0) : b;
		a.W && (a.W = a.W.replace(/:$/, ""))
	}

	function fd(a, b, c) {
		T(a);
		a.p = c ? id(b, !0) : b
	}

	function gd(a, b) {
		T(a);
		if (b) {
			b = Number(b);
			if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
			a.ra = b
		} else a.ra = null
	}

	function hd(a, b, c) {
		T(a);
		b instanceof jd ? (a.w = b, a.w.Sb(a.v)) : (c || (b = kd(b, qd)), a.w = new jd(b, 0, a.v))
	}

	function rd(a, b, c) {
		T(a);
		r(c) || (c = [String(c)]);
		sd(a.w, b, c)
	}

	function T(a) {
		if (a.Id) throw Error("Tried to modify a read-only Uri");
	}
	f.Sb = function(a) {
		this.v = a;
		this.w && this.w.Sb(a);
		return this
	};

	function id(a, b) {
		return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
	}

	function kd(a, b, c) {
		return t(a) ? (a = encodeURI(a).replace(b, td), c && (a = md(a)), a) : null
	}

	function td(a) {
		a = a.charCodeAt(0);
		return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
	}

	function md(a) {
		return a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")
	}
	var ld = /[#\/\?@]/g,
		od = /[\#\?:]/g,
		nd = /[\#\?]/g,
		qd = /[\#\?@]/g,
		pd = /#/g;

	function jd(a, b, c) {
		this.s = a || null;
		this.v = !!c
	}

	function ud(a) {
		if (!a.e && (a.e = new Yc, a.g = 0, a.s))
			for (var b = a.s.split("&"), c = 0; c < b.length; c++) {
				var d = b[c].indexOf("="),
					e = null,
					g = null;
				0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
				e = decodeURIComponent(e.replace(/\+/g, " "));
				e = vd(a, e);
				a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
			}
	}
	f = jd.prototype;
	f.e = null;
	f.g = null;
	f.add = function(a, b) {
		ud(this);
		this.s = null;
		a = vd(this, a);
		var c = this.e.get(a);
		c || this.e.set(a, c = []);
		c.push(b);
		this.g++;
		return this
	};
	f.remove = function(a) {
		ud(this);
		a = vd(this, a);
		return this.e.ya(a) ? (this.s = null, this.g -= this.e.get(a).length, this.e.remove(a)) : !1
	};
	f.clear = function() {
		this.e = this.s = null;
		this.g = 0
	};
	f.ya = function(a) {
		ud(this);
		a = vd(this, a);
		return this.e.ya(a)
	};
	f.ba = function() {
		ud(this);
		for (var a = this.e.P(), b = this.e.ba(), c = [], d = 0; d < b.length; d++)
			for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
		return c
	};
	f.P = function(a) {
		ud(this);
		var b = [];
		if (t(a)) this.ya(a) && (b = Ja(b, this.e.get(vd(this, a))));
		else {
			a = this.e.P();
			for (var c = 0; c < a.length; c++) b = Ja(b, a[c])
		}
		return b
	};
	f.set = function(a, b) {
		ud(this);
		this.s = null;
		a = vd(this, a);
		this.ya(a) && (this.g -= this.e.get(a).length);
		this.e.set(a, [b]);
		this.g++;
		return this
	};
	f.get = function(a, b) {
		var c = a ? this.P(a) : [];
		return 0 < c.length ? String(c[0]) : b
	};

	function sd(a, b, c) {
		a.remove(b);
		0 < c.length && (a.s = null, a.e.set(vd(a, b), Ka(c)), a.g += c.length)
	}
	f.toString = function() {
		if (this.s) return this.s;
		if (!this.e) return "";
		for (var a = [], b = this.e.ba(), c = 0; c < b.length; c++)
			for (var d = b[c], e = sa(d), d = this.P(d), g = 0; g < d.length; g++) {
				var h = e;
				"" !== d[g] && (h += "=" + sa(d[g]));
				a.push(h)
			}
		return this.s = a.join("&")
	};
	f.clone = function() {
		var a = new jd;
		a.s = this.s;
		this.e && (a.e = this.e.clone(), a.g = this.g);
		return a
	};

	function vd(a, b) {
		var c = String(b);
		a.v && (c = c.toLowerCase());
		return c
	}
	f.Sb = function(a) {
		a && !this.v && (ud(this), this.s = null, this.e.forEach(function(a, c) {
			var d = c.toLowerCase();
			c != d && (this.remove(c), sd(this, d, a))
		}, this));
		this.v = a
	};
	f.extend = function(a) {
		for (var b = 0; b < arguments.length; b++) Xc(arguments[b], function(a, b) {
			this.add(b, a)
		}, this)
	};

	function wd(a, b) {
		this.de = new dd(a);
		this.nd = b ? b : "callback";
		this.kb = 5E3
	}
	var xd = 0;
	wd.prototype.send = function(a, b, c, d) {
		a = a || null;
		d = d || "_" + (xd++).toString(36) + la().toString(36);
		l._callbacks_ || (l._callbacks_ = {});
		var e = this.de.clone();
		if (a)
			for (var g in a) a.hasOwnProperty && !a.hasOwnProperty(g) || rd(e, g, a[g]);
		b && (l._callbacks_[d] = yd(d, b), rd(e, this.nd, "_callbacks_." + d));
		b = Oc(e.toString(), {
			timeout: this.kb,
			$b: !0
		});
		lc(b, zd(d, a, c));
		return {
			u: d,
			dc: b
		}
	};
	wd.prototype.cancel = function(a) {
		a && (a.dc && a.dc.cancel(), a.u && Ad(a.u, !1))
	};

	function zd(a, b, c) {
		return function() {
			Ad(a, !1);
			c && c(b)
		}
	}

	function yd(a, b) {
		return function(c) {
			Ad(a, !0);
			b.apply(void 0, arguments)
		}
	}

	function Ad(a, b) {
		l._callbacks_[a] && (b ? delete l._callbacks_[a] : l._callbacks_[a] = ba)
	};

	function Bd(a) {
		wd.call(this, a);
		this.ee = a
	}
	y(Bd, wd);
	Bd.prototype.send = function(a, b, c) {
		this.X || (this.X = "_" + Ca(this.ee).toString(36));
		return Bd.d.send.call(this, a, b, c, this.X)
	};
	var Cd = location.host.match(/test[0-9]?\./);

	function U(a, b) {
		L.call(this);
		this.Lc = a;
		"dev" == b ? Dd = "http://mb.tga.plu.dev/chatroom" : "test" == b ? Dd = "http://" + (Cd[0] || "test") + "mb.tga.plu.cn/chatroom" : "beta" == b && (Dd = "http://beta.mb.tga.plu.cn/chatroom");
		this.Rb = Dd;
		var c = this.I = new Vc,
			d = Ed,
			e = Fd;
		c.bc = e.nb;
		S(S(S(S(S(S(S(S(S(S(S(S(S(S(c, e.nb, d.OPEN, this.nc, this), e.CLOSED, d.OPEN, this.nc, this), e.nb, d.ua, this.Fa, this), e.Wb, d.ua, this.Fa, this), e.ob, d.ua, this.Fa, this), e.Xb, d.ua, this.Fa, this), e.Na, d.ua, this.Fa, this), e.Na, d.cd, this.zd, this), e.Na, d.ad, this.mc, this),
			e.Na, d.bd, this.yd, this), e.Wb, d.dd, this.Ad, this), e.ob, d.fd, this.Dd, this), e.ob, d.ed, this.Cd, this), e.Xb, d.gd, this.Ed, this)
	}
	y(U, L);
	f = U.prototype;
	f.Lb = 0;
	f.nc = function() {
		var a = this.lc = this.Lc;
		Gd(this, 0, 0);
		this.dispatchEvent({
			type: Hd,
			group: a,
			msgs: [],
			gifts: [],
			topgifts: []
		});
		return Id
	};
	f.Fa = function() {
		this.Hb && window.clearTimeout(this.Hb);
		this.Mb && window.clearTimeout(this.Mb);
		Jd(this);
		this.$a && this.sc && this.$a.cancel(this.sc);
		this.dispatchEvent(Kd);
		return Ld
	};
	f.zd = function(a) {
		var b = this.lc = a.group,
			c = a.sharding || "";
		c && (this.Rb = this.Rb.replace(/mb/, c + ".mb"));
		Gd(this, 0, 0);
		this.dispatchEvent({
			type: Hd,
			group: b,
			msgs: a.msgs,
			gifts: a.gifts,
			topgifts: a.topgifts
		});
		return Id
	};
	f.mc = function() {
		var a = this;
		this.Hb = window.setTimeout(function() {
			a.I.next(Md)
		}, 48E4);
		return Nd
	};
	f.yd = function() {
		this.dispatchEvent({
			type: Od
		});
		return this.mc()
	};
	f.Dd = function(a) {
		var b = a.next || 3,
			c = this;
		this.Mb = window.setTimeout(function() {
			c.I.next(Pd, a.from, b)
		}, 1E3 * b);
		c.dispatchEvent({
			type: Qd,
			msgs: a.msgs,
			next: b
		});
		return Rd
	};
	f.Cd = function(a, b) {
		var c = this.Lb += 8;
		90 < c && (c = 90);
		var d = this;
		this.Mb = window.setTimeout(function() {
			d.I.next(Pd, a, b)
		}, 1E3 * c);
		return Rd
	};
	f.Ad = function() {
		this.Hb = null;
		Sd(this);
		return Td
	};
	f.Ed = function(a, b) {
		Gd(this, a, b);
		return Id
	};
	var Dd = location.host.match(/\.dev/) ? "http://mb.tga.plu.dev/chatroom" : Cd && Cd[0] ? "http://" + Cd[0] + "mb.tga.plu.cn/chatroom" : location.host.match(/beta\./) ? window.location.host.match(/\.dev/) ? "http://beta.mb.tga.plu.dev/chatroom" : "http://beta.mb.tga.plu.cn/chatroom" : "http://mb.tga.plu.cn/chatroom",
		Hd = "open",
		Kd = "close",
		Qd = "message",
		Od = "limit",
		Md = "joinTime",
		Pd = "pollTime",
		Ed = {
			OPEN: Hd,
			ua: Kd,
			le: Qd,
			ke: Od,
			cd: "joinSuccess",
			ad: "joinFailure",
			dd: Md,
			bd: "joinLimit",
			fd: "pollSuccess",
			ed: "pollFailure",
			gd: Pd
		};
	U.prototype.tb = 0;
	var Td = "joining",
		Nd = "waitingJoin",
		Id = "polling",
		Rd = "waitingPoll",
		Ld = "closed",
		Fd = {
			nb: "pending",
			Na: Td,
			Wb: Nd,
			ob: Id,
			Xb: Rd,
			CLOSED: Ld
		};
	U.prototype.open = function() {
		this.I.next(Hd)
	};
	U.prototype.close = function() {
		this.I.next(Kd)
	};
	U.prototype.offset = 0;

	function Sd(a) {
		a.$a || (a.$a = new Bd(Dd + "/joinroom"));
		a.sc = a.$a.send({
			roomId: a.Lc
		}, function(b) {
			b.success ? a.I.next("joinSuccess", b) : a.I.next("joinLimit")
		}, function() {
			a.I.next("joinFailure")
		})
	}

	function Jd(a) {
		window[a.X] = function() {}
	}

	function Gd(a, b, c) {
		l._callbacks_ || (l._callbacks_ = {});
		a.X || (a.X = "_c_" + Ca(Dd + "/msgs").toString(36));
		if (!a.Ac) {
			var d = a.Rb;
			a.Ac = [d + "/msgs", a.lc].join("/")
		}
		var e = a.tb;
		a.vd = b;
		window[a.X] = function(b) {
			b && a.tb == e && (a.tb++, a.vd = b.from, a.I.next("pollSuccess", b))
		};
		c || (c = 0);
		d = [a.Ac, b, c, a.X].join("/");
		d = d.replace(/mb\./, "mbcdn.");
		lc(Oc(d, {
			timeout: 8E3,
			$b: !0
		}), function() {
			a.I.next("pollFailure", b, c)
		})
	};
	var Ud, Vd, Wd;
	var Xd;

	function Yd() {
		if (!Xd) {
			var a = document.domain;
			Xd = /longzhu/.exec(a) ? "longzhu" : /tga/.exec(a) ? "tga.plu" : "plu"
		}
		return Xd
	}

	function Zd(a, b) {
		var c = [],
			d;
		"beta" == b ? d = !0 : (m(Wd) || (Wd = !!/beta\./.exec(location.host)), d = Wd);
		d ? c.push("beta") : ("test" == b ? d = !0 : (m(Vd) || (Vd = !!/test\./.exec(location.host)), d = Vd), d && c.push("test"));
		a && c.push(a);
		c.push(Yd());
		"dev" == b ? d = !0 : (m(Ud) || (Ud = !!/\.dev/.exec(location.host)), d = Ud);
		d ? c.push("dev") : c.push(window.location.host.split(".").pop());
		return c = c.join(".")
	};
	window.plu = window.plu || {};
	window.plu.url = window.plu.url || {};
	window.plu.url.getSiteName = Yd;
	window.plu.url.getDomain = Zd;
	window.plu.url.transform = function(a, b, c) {
		a = new dd(a);
		var d = a.p;
		b || (/^u\./.exec(d) ? b = "u" : /star\./.exec(d) && (b = "star"));
		ed(a, "http");
		fd(a, Zd(b, c));
		return a.toString()
	};
	var $d;

	function ae(a, b) {
		b ? a.setAttribute("role", b) : a.removeAttribute("role")
	}

	function be(a, b, c) {
		r(c) && (c = c.join(" "));
		var d = "aria-" + b;
		"" === c || void 0 == c ? ($d || ($d = {
			atomic: !1,
			autocomplete: "none",
			dropeffect: "none",
			haspopup: !1,
			live: "off",
			multiline: !1,
			multiselectable: !1,
			orientation: "vertical",
			readonly: !1,
			relevant: "additions text",
			required: !1,
			sort: "none",
			busy: !1,
			disabled: !1,
			hidden: !1,
			invalid: "false"
		}), c = $d, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
	};

	function ce(a) {
		if (a.classList) return a.classList;
		a = a.className;
		return t(a) && a.match(/\S+/g) || []
	}

	function de(a, b) {
		var c;
		a.classList ? c = a.classList.contains(b) : (c = ce(a), c = 0 <= Da(c, b));
		return c
	}

	function ee(a, b) {
		if (a.classList) Ea(b, function(b) {
			a.classList ? a.classList.add(b) : de(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
		});
		else {
			var c = {};
			Ea(ce(a), function(a) {
				c[a] = !0
			});
			Ea(b, function(a) {
				c[a] = !0
			});
			a.className = "";
			for (var d in c) a.className += 0 < a.className.length ? " " + d : d
		}
	}

	function fe(a, b) {
		a.classList ? a.classList.remove(b) : de(a, b) && (a.className = Fa(ce(a), function(a) {
			return a != b
		}).join(" "))
	}

	function ge(a, b) {
		a.classList ? Ea(b, function(b) {
			fe(a, b)
		}) : a.className = Fa(ce(a), function(a) {
			return !(0 <= Da(b, a))
		}).join(" ")
	};
	Sa("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));

	function he() {
		this.Gc = "";
		this.hd = ie;
		this.pd = null
	}

	function je(a) {
		return a instanceof he && a.constructor === he && a.hd === ie ? a.Gc : "type_error:SafeHtml"
	}
	Sa("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
	Sa("link", "script", "style");
	var ie = {};

	function ke(a, b) {
		var c = new he;
		c.Gc = a;
		c.pd = b;
		return c
	}
	var le = ke("", 0);

	function ne(a) {
		ma.call(this);
		this.Db = a;
		this.f = {}
	}
	y(ne, ma);
	var oe = [];
	f = ne.prototype;
	f.q = function(a, b, c, d) {
		r(b) || (b && (oe[0] = b.toString()), b = oe);
		for (var e = 0; e < b.length; e++) {
			var g = J(a, b[e], c || this.handleEvent, d || !1, this.Db || this);
			if (!g) break;
			this.f[g.key] = g
		}
		return this
	};
	f.xc = function(a, b, c, d) {
		return pe(this, a, b, c, d)
	};

	function pe(a, b, c, d, e, g) {
		if (r(c))
			for (var h = 0; h < c.length; h++) pe(a, b, c[h], d, e, g);
		else {
			b = Bb(b, c, d || a.handleEvent, e, g || a.Db || a);
			if (!b) return a;
			a.f[b.key] = b
		}
		return a
	}
	f.mb = function(a, b, c, d, e) {
		if (r(b))
			for (var g = 0; g < b.length; g++) this.mb(a, b[g], c, d, e);
		else c = c || this.handleEvent, e = e || this.Db || this, c = vb(c), d = !!d, b = lb(a) ? a.Ca(b, c, d, e) : a ? (a = xb(a)) ? a.Ca(b, c, d, e) : null : null, b && (Cb(b), delete this.f[b.key]);
		return this
	};
	f.ha = function() {
		Na(this.f, Cb);
		this.f = {}
	};
	f.h = function() {
		ne.d.h.call(this);
		this.ha()
	};
	f.handleEvent = function() {
		throw Error("EventHandler.handleEvent not implemented");
	};

	function qe(a, b, c, d) {
		this.top = a;
		this.right = b;
		this.bottom = c;
		this.left = d
	}
	f = qe.prototype;
	f.clone = function() {
		return new qe(this.top, this.right, this.bottom, this.left)
	};
	f.contains = function(a) {
		return this && a ? a instanceof qe ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
	};
	f.expand = function(a, b, c, d) {
		fa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
		return this
	};
	f.ceil = function() {
		this.top = Math.ceil(this.top);
		this.right = Math.ceil(this.right);
		this.bottom = Math.ceil(this.bottom);
		this.left = Math.ceil(this.left);
		return this
	};
	f.floor = function() {
		this.top = Math.floor(this.top);
		this.right = Math.floor(this.right);
		this.bottom = Math.floor(this.bottom);
		this.left = Math.floor(this.left);
		return this
	};
	f.round = function() {
		this.top = Math.round(this.top);
		this.right = Math.round(this.right);
		this.bottom = Math.round(this.bottom);
		this.left = Math.round(this.left);
		return this
	};
	f.translate = function(a, b) {
		a instanceof O ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, u(b) && (this.top += b, this.bottom += b));
		return this
	};
	f.scale = function(a, b) {
		var c = u(b) ? b : a;
		this.left *= a;
		this.right *= a;
		this.top *= c;
		this.bottom *= c;
		return this
	};

	function V(a, b, c, d) {
		this.left = a;
		this.top = b;
		this.width = c;
		this.height = d
	}
	f = V.prototype;
	f.clone = function() {
		return new V(this.left, this.top, this.width, this.height)
	};
	f.contains = function(a) {
		return a instanceof V ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
	};
	f.ceil = function() {
		this.left = Math.ceil(this.left);
		this.top = Math.ceil(this.top);
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	f.floor = function() {
		this.left = Math.floor(this.left);
		this.top = Math.floor(this.top);
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	f.round = function() {
		this.left = Math.round(this.left);
		this.top = Math.round(this.top);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	f.translate = function(a, b) {
		a instanceof O ? (this.left += a.x, this.top += a.y) : (this.left += a, u(b) && (this.top += b));
		return this
	};
	f.scale = function(a, b) {
		var c = u(b) ? b : a;
		this.left *= a;
		this.width *= a;
		this.top *= c;
		this.height *= c;
		return this
	};

	function re(a, b) {
		var c = uc(a);
		return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
	}

	function ue(a, b) {
		return re(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
	}

	function ve(a, b, c) {
		var d, e = E && (Ta || Xa) && G("1.9");
		b instanceof O ? (d = b.x, b = b.y) : (d = b, b = c);
		a.style.left = we(d, e);
		a.style.top = we(b, e)
	}

	function xe(a, b, c) {
		if (b instanceof sc) c = b.height, b = b.width;
		else if (void 0 == c) throw Error("missing height argument");
		a.style.width = we(b, !0);
		a.style.height = we(c, !0)
	}

	function we(a, b) {
		"number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
		return a
	}

	function ye(a) {
		var b = ze;
		if ("none" != ue(a, "display")) return b(a);
		var c = a.style,
			d = c.display,
			e = c.visibility,
			g = c.position;
		c.visibility = "hidden";
		c.position = "absolute";
		c.display = "inline";
		a = b(a);
		c.display = d;
		c.position = g;
		c.visibility = e;
		return a
	}

	function ze(a) {
		var b = a.offsetWidth,
			c = a.offsetHeight,
			d = F && !b && !c;
		if ((!m(b) || d) && a.getBoundingClientRect) {
			var e;
			a: {
				try {
					e = a.getBoundingClientRect()
				} catch (g) {
					e = {
						left: 0,
						top: 0,
						right: 0,
						bottom: 0
					};
					break a
				}
				D && a.ownerDocument.body && (a = a.ownerDocument, e.left -= a.documentElement.clientLeft + a.body.clientLeft, e.top -= a.documentElement.clientTop + a.body.clientTop)
			}
			return new sc(e.right - e.left, e.bottom - e.top)
		}
		return new sc(b, c)
	}

	function Ae(a, b) {
		var c = a.style;
		"opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
	}

	function W(a, b) {
		a.style.display = b ? "" : "none"
	}
	var Be = {
		thin: 2,
		medium: 4,
		thick: 6
	};

	function Ce(a, b) {
		if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
		var c = a.currentStyle ? a.currentStyle[b + "Width"] : null,
			d;
		if (c in Be) d = Be[c];
		else if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
		else {
			d = a.style.left;
			var e = a.runtimeStyle.left;
			a.runtimeStyle.left = a.currentStyle.left;
			a.style.left = c;
			c = a.style.pixelLeft;
			a.style.left = d;
			a.runtimeStyle.left = e;
			d = c
		}
		return d
	}

	function De(a) {
		if (D && !(D && 9 <= bb)) {
			var b = Ce(a, "borderLeft"),
				c = Ce(a, "borderRight"),
				d = Ce(a, "borderTop");
			a = Ce(a, "borderBottom");
			return new qe(d, c, a, b)
		}
		b = re(a, "borderLeftWidth");
		c = re(a, "borderRightWidth");
		d = re(a, "borderTopWidth");
		a = re(a, "borderBottomWidth");
		return new qe(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
	};

	function Ee(a, b, c) {
		L.call(this);
		this.target = a;
		this.handle = b || a;
		this.ab = c || new V(NaN, NaN, NaN, NaN);
		this.l = uc(a);
		this.G = new ne(this);
		a = ka(pa, this.G);
		this.fa || (this.fa = []);
		this.fa.push(m(void 0) ? x(a, void 0) : a);
		J(this.handle, ["touchstart", "mousedown"], this.Nc, !1, this)
	}
	y(Ee, L);
	var Fe = D || E && G("1.9.3");
	f = Ee.prototype;
	f.clientX = 0;
	f.clientY = 0;
	f.screenX = 0;
	f.screenY = 0;
	f.Oc = 0;
	f.Pc = 0;
	f.deltaX = 0;
	f.deltaY = 0;
	f.gc = !0;
	f.Y = !1;
	f.qc = 0;
	f.Hd = !1;
	f.Vb = !1;
	f.aa = function() {
		return this.G
	};
	f.h = function() {
		Ee.d.h.call(this);
		K(this.handle, ["touchstart", "mousedown"], this.Nc, !1, this);
		this.G.ha();
		Fe && this.l.releaseCapture();
		this.handle = this.target = null
	};

	function Ge(a) {
		m(a.Qb) || (a.Qb = "rtl" == ue(a.target, "direction"));
		return a.Qb
	}
	f.Nc = function(a) {
		var b = "mousedown" == a.type;
		if (!this.gc || this.Y || b && (!(cb ? 0 == a.H.button : "click" == a.type || a.H.button & jb[0]) || F && Ta && a.ctrlKey)) this.dispatchEvent("earlycancel");
		else {
			He(a);
			if (0 == this.qc)
				if (this.dispatchEvent(new Ie("start", this, a.clientX, a.clientY))) this.Y = !0, a.preventDefault();
				else return;
			else a.preventDefault();
			var b = this.l,
				c = b.documentElement,
				d = !Fe;
			this.G.q(b, ["touchmove", "mousemove"], this.Bd, d);
			this.G.q(b, ["touchend", "mouseup"], this.Ua, d);
			Fe ? (c.setCapture(!1), this.G.q(c, "losecapture",
				this.Ua)) : this.G.q(b ? zc(b) : window, "blur", this.Ua);
			D && this.Hd && this.G.q(b, "dragstart", fb);
			this.Xd && this.G.q(this.Xd, "scroll", this.Td, d);
			this.clientX = this.Oc = a.clientX;
			this.clientY = this.Pc = a.clientY;
			this.screenX = a.screenX;
			this.screenY = a.screenY;
			this.Vb ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != ue(a, "position") || (c = uc(a).documentElement), c ? (E ? (d = De(c), b += d.left) : D && 8 <= bb && !(D && 9 <= bb) && (d = De(c), b -= d.left), a = "rtl" == ue(c, "direction") ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
			this.deltaX = a;
			this.deltaY = this.target.offsetTop;
			this.Kb = Mc(P(this.l));
			la()
		}
	};
	f.Ua = function(a) {
		this.G.ha();
		Fe && this.l.releaseCapture();
		if (this.Y) {
			He(a);
			this.Y = !1;
			var b = Je(this, this.deltaX),
				c = Ke(this, this.deltaY);
			this.dispatchEvent(new Ie("end", this, a.clientX, a.clientY, 0, b, c))
		} else this.dispatchEvent("earlycancel")
	};

	function He(a) {
		var b = a.type;
		"touchstart" == b || "touchmove" == b ? ib(a, a.H.targetTouches[0], a.currentTarget) : "touchend" != b && "touchcancel" != b || ib(a, a.H.changedTouches[0], a.currentTarget)
	}
	f.Bd = function(a) {
		if (this.gc) {
			He(a);
			var b = (this.Vb && Ge(this) ? -1 : 1) * (a.clientX - this.clientX),
				c = a.clientY - this.clientY;
			this.clientX = a.clientX;
			this.clientY = a.clientY;
			this.screenX = a.screenX;
			this.screenY = a.screenY;
			if (!this.Y) {
				var d = this.Oc - this.clientX,
					e = this.Pc - this.clientY;
				if (d * d + e * e > this.qc)
					if (this.dispatchEvent(new Ie("start", this, a.clientX, a.clientY))) this.Y = !0;
					else {
						this.za || this.Ua(a);
						return
					}
			}
			c = Le(this, b, c);
			b = c.x;
			c = c.y;
			this.Y && this.dispatchEvent(new Ie("beforedrag", this, a.clientX, a.clientY, 0, b, c)) &&
				(Me(this, a, b, c), a.preventDefault())
		}
	};

	function Le(a, b, c) {
		var d = Mc(P(a.l));
		b += d.x - a.Kb.x;
		c += d.y - a.Kb.y;
		a.Kb = d;
		a.deltaX += b;
		a.deltaY += c;
		b = Je(a, a.deltaX);
		a = Ke(a, a.deltaY);
		return new O(b, a)
	}
	f.Td = function(a) {
		var b = Le(this, 0, 0);
		a.clientX = this.clientX;
		a.clientY = this.clientY;
		Me(this, a, b.x, b.y)
	};

	function Me(a, b, c, d) {
		a.Vb && Ge(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
		a.target.style.top = d + "px";
		a.dispatchEvent(new Ie("drag", a, b.clientX, b.clientY, 0, c, d))
	}

	function Je(a, b) {
		var c = a.ab,
			d = isNaN(c.left) ? null : c.left,
			c = isNaN(c.width) ? 0 : c.width;
		return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
	}

	function Ke(a, b) {
		var c = a.ab,
			d = isNaN(c.top) ? null : c.top,
			c = isNaN(c.height) ? 0 : c.height;
		return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
	}

	function Ie(a, b, c, d, e, g, h) {
		H.call(this, a);
		this.clientX = c;
		this.clientY = d;
		this.left = m(g) ? g : b.deltaX;
		this.top = m(h) ? h : b.deltaY
	}
	y(Ie, H);

	function Ne(a, b, c) {
		if (w(a)) c && (a = x(a, c));
		else if (a && "function" == typeof a.handleEvent) a = x(a.handleEvent, a);
		else throw Error("Invalid listener argument");
		return 2147483647 < b ? -1 : l.setTimeout(a, b || 0)
	};

	function Oe(a) {
		L.call(this);
		this.a = a;
		a = D ? "focusout" : "blur";
		this.Jd = J(this.a, D ? "focusin" : "focus", this, !D);
		this.Kd = J(this.a, a, this, !D)
	}
	y(Oe, L);
	Oe.prototype.handleEvent = function(a) {
		var b = new I(a.H);
		b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
		this.dispatchEvent(b)
	};
	Oe.prototype.h = function() {
		Oe.d.h.call(this);
		Cb(this.Jd);
		Cb(this.Kd);
		delete this.a
	};

	function Pe() {}
	Pe.wd = function() {
		return Pe.rc ? Pe.rc : Pe.rc = new Pe
	};
	Pe.prototype.Pd = 0;

	function X(a) {
		L.call(this);
		this.Aa = a || P();
		this.Qb = Qe;
		this.u = null;
		this.J = !1;
		this.a = null;
		this.V = void 0;
		this.Ra = this.Sa = this.j = null;
		this.je = !1
	}
	y(X, L);
	X.prototype.Gd = Pe.wd();
	var Qe = null;
	f = X.prototype;
	f.Cb = function() {
		return this.u || (this.u = ":" + (this.Gd.Pd++).toString(36))
	};
	f.b = function() {
		return this.a
	};
	f.aa = function() {
		this.V || (this.V = new ne(this));
		return this.V
	};
	f.getParent = function() {
		return this.j
	};
	f.Tb = function(a) {
		if (this.j && this.j != a) throw Error("Method not supported");
		X.d.Tb.call(this, a)
	};
	f.k = function() {
		return this.Aa
	};
	f.o = function() {
		this.a = this.Aa.createElement("div")
	};
	f.Ka = function(a) {
		if (this.J) throw Error("Component already rendered");
		this.a || this.o();
		a ? a.insertBefore(this.a, null) : this.Aa.l.body.appendChild(this.a);
		this.j && !this.j.J || this.la()
	};
	f.la = function() {
		this.J = !0;
		Re(this, function(a) {
			!a.J && a.b() && a.la()
		})
	};
	f.Z = function() {
		Re(this, function(a) {
			a.J && a.Z()
		});
		this.V && this.V.ha();
		this.J = !1
	};
	f.h = function() {
		this.J && this.Z();
		this.V && (this.V.T(), delete this.V);
		Re(this, function(a) {
			a.T()
		});
		!this.je && this.a && Q(this.a);
		this.j = this.a = this.Ra = this.Sa = null;
		X.d.h.call(this)
	};

	function Re(a, b) {
		a.Sa && Ea(a.Sa, b, void 0)
	}
	f.removeChild = function(a, b) {
		if (a) {
			var c = t(a) ? a : a.Cb(),
				d;
			this.Ra && c ? (d = this.Ra, d = (c in d ? d[c] : void 0) || null) : d = null;
			a = d;
			if (c && a) {
				d = this.Ra;
				c in d && delete d[c];
				Ia(this.Sa, a);
				b && (a.Z(), a.a && Q(a.a));
				c = a;
				if (null == c) throw Error("Unable to set parent component");
				c.j = null;
				X.d.Tb.call(c, null)
			}
		}
		if (!a) throw Error("Child is not in parent component");
		return a
	};

	function Se(a, b) {
		X.call(this, b);
		this.fe = !!a;
		this.oa = null
	}
	y(Se, X);
	f = Se.prototype;
	f.Bb = null;
	f.ka = !1;
	f.r = null;
	f.n = null;
	f.C = null;
	f.qb = !1;
	f.Xa = function() {
		return "goog-modalpopup"
	};
	f.Wa = function() {
		return this.r
	};
	f.o = function() {
		Se.d.o.call(this);
		var a = this.b(),
			b = ra(this.Xa()).split(" ");
		ee(a, b);
		a.tabIndex = 0;
		W(a, !1);
		this.fe && !this.n && (this.n = this.k().o("iframe", {
			frameborder: 0,
			style: "border:0;vertical-align:bottom;",
			src: 'javascript:""'
		}), this.n.className = this.Xa() + "-bg", W(this.n, !1), Ae(this.n, 0));
		this.r || (this.r = this.k().o("div", this.Xa() + "-bg"), W(this.r, !1));
		this.C || (this.C = this.k().createElement("span"), W(this.C, !1), this.C.tabIndex = 0, this.C.style.position = "absolute")
	};
	f.Jc = function() {
		this.qb = !1
	};
	f.la = function() {
		if (this.n) {
			var a = this.b();
			a.parentNode && a.parentNode.insertBefore(this.n, a)
		}
		a = this.b();
		a.parentNode && a.parentNode.insertBefore(this.r, a);
		Se.d.la.call(this);
		a = this.b();
		a.parentNode && a.parentNode.insertBefore(this.C, a.nextSibling);
		this.Bb = new Oe(R(this.k()));
		this.aa().q(this.Bb, "focusin", this.Sd);
		Te(this, !1)
	};
	f.Z = function() {
		this.ka && this.M(!1);
		pa(this.Bb);
		Se.d.Z.call(this);
		Q(this.n);
		Q(this.r);
		Q(this.C)
	};
	f.M = function(a) {
		a != this.ka && (this.qa && this.qa.stop(), this.xa && this.xa.stop(), this.pa && this.pa.stop(), this.wa && this.wa.stop(), this.J && Te(this, a), a ? this.Zd() : this.Fd())
	};

	function Te(a, b) {
		if (b) {
			a.na || (a.na = []);
			for (var c = a.k(), c = Nc(c.l.body), d = 0; d < c.length; d++) {
				var e = c[d],
					g;
				if (g = e != a.a) g = e.getAttribute("aria-hidden"), g = !(null == g || void 0 == g ? 0 : String(g));
				g && (be(e, "hidden", !0), a.na.push(e))
			}
		} else if (a.na) {
			for (d = 0; d < a.na.length; d++) a.na[d].removeAttribute("aria-hidden");
			a.na = null
		}
	}
	f.Zd = function() {
		if (this.dispatchEvent("beforeshow")) {
			try {
				this.oa = R(this.k()).activeElement
			} catch (a) {}
			this.Pb();
			this.Wd();
			this.aa().q(Lc(this.k()), "resize", this.Pb);
			Ue(this, !0);
			this.focus();
			this.ka = !0;
			this.qa && this.xa ? (Bb(this.qa, "end", this.eb, !1, this), this.xa.play(), this.qa.play()) : this.eb()
		}
	};
	f.Fd = function() {
		if (this.dispatchEvent("beforehide")) {
			this.aa().mb(Lc(this.k()), "resize", this.Pb);
			this.ka = !1;
			this.pa && this.wa ? (Bb(this.pa, "end", this.bb, !1, this), this.wa.play(), this.pa.play()) : this.bb();
			a: {
				try {
					var a = this.k(),
						b = a.l.body,
						c = a.l.activeElement || b;
					if (!this.oa || this.oa == b) {
						this.oa = null;
						break a
					}(c == b || a.contains(this.b(), c)) && this.oa.focus()
				} catch (d) {}
				this.oa = null
			}
		}
	};

	function Ue(a, b) {
		a.n && W(a.n, b);
		a.r && W(a.r, b);
		W(a.b(), b);
		W(a.C, b)
	}
	f.eb = function() {
		this.dispatchEvent("show")
	};
	f.bb = function() {
		Ue(this, !1);
		this.dispatchEvent("hide")
	};
	f.focus = function() {
		this.ic()
	};
	f.Pb = function() {
		this.n && W(this.n, !1);
		this.r && W(this.r, !1);
		var a = R(this.k()),
			b = yc((a ? zc(a) : window) || window || window),
			c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)),
			a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
		this.n && (W(this.n, !0), xe(this.n, c, a));
		this.r && (W(this.r, !0), xe(this.r, c, a))
	};
	f.Wd = function() {
		var a = R(this.k()),
			b = (a ? zc(a) : window) || window;
		if ("fixed" == ue(this.b(), "position")) var c = a = 0;
		else c = Mc(this.k()), a = c.x, c = c.y;
		var d = ye(this.b()),
			b = yc(b || window),
			a = Math.max(a + b.width / 2 - d.width / 2, 0),
			c = Math.max(c + b.height / 2 - d.height / 2, 0);
		ve(this.b(), a, c);
		ve(this.C, a, c)
	};
	f.Sd = function(a) {
		this.qb ? this.Jc() : a.target == this.C && Ne(this.ic, 0, this)
	};
	f.ic = function() {
		try {
			D && R(this.k()).body.focus(), this.b().focus()
		} catch (a) {}
	};
	f.h = function() {
		pa(this.qa);
		this.qa = null;
		pa(this.pa);
		this.pa = null;
		pa(this.xa);
		this.xa = null;
		pa(this.wa);
		this.wa = null;
		Se.d.h.call(this)
	};

	function Y(a, b, c) {
		Se.call(this, b, c);
		this.O = a || "modal-dialog";
		this.F = Z(Z(new Ve, We, !0), Xe, !1, !0)
	}
	y(Y, Se);
	f = Y.prototype;
	f.sd = !0;
	f.oc = !0;
	f.zc = !0;
	f.fc = !0;
	f.pb = .5;
	f.Sc = "";
	f.vb = null;
	f.U = null;
	f.qd = !1;
	f.ta = null;
	f.ia = null;
	f.Rc = null;
	f.N = null;
	f.Ta = null;
	f.D = null;
	f.Fc = "dialog";
	f.Xa = function() {
		return this.O
	};

	function Ye() {
		var a = LoginManager.S;
		a.Sc = "\u7f51\u7ad9\u767b\u5f55";
		a.ia && Hc(a.ia, "\u7f51\u7ad9\u767b\u5f55")
	}

	function Ze(a, b) {
		a.vb = b;
		a.Ta && (a.Ta.innerHTML = je(b))
	}
	f.Wa = function() {
		this.b() || this.Ka();
		return Y.d.Wa.call(this)
	};

	function $e() {
		var a = LoginManager.S;
		a.fc = !1;
		af(a, !1)
	}

	function af(a, b) {
		var c = ra(a.O + "-title-draggable").split(" ");
		a.b() && (b ? ee(a.ta, c) : ge(a.ta, c));
		b && !a.U ? (a.U = new Ee(a.b(), a.ta), ee(a.ta, c), J(a.U, "start", a.Yd, !1, a)) : !b && a.U && (a.U.T(), a.U = null)
	}
	f.o = function() {
		Y.d.o.call(this);
		var a = this.b(),
			b = this.k();
		this.ta = b.o("div", this.O + "-title", this.ia = b.o("span", {
			className: this.O + "-title-text",
			id: this.Cb()
		}, this.Sc), this.N = b.o("span", this.O + "-title-close"));
		Ec(a, this.ta, this.Ta = b.o("div", this.O + "-content"), this.D = b.o("div", this.O + "-buttons"));
		ae(this.ia, "heading");
		ae(this.N, "button");
		this.N.tabIndex = 0;
		be(this.N, "label", bf);
		this.Rc = this.ia.id;
		ae(a, this.Fc);
		be(a, "labelledby", this.Rc || "");
		this.vb && (this.Ta.innerHTML = je(this.vb));
		W(this.N, this.oc);
		this.F &&
			(a = this.F, a.a = this.D, a.Ka());
		W(this.D, !!this.F);
		this.pb = this.pb;
		this.b() && (a = this.Wa()) && Ae(a, this.pb)
	};
	f.la = function() {
		Y.d.la.call(this);
		this.aa().q(this.b(), "keydown", this.Dc).q(this.b(), "keypress", this.Dc);
		this.aa().q(this.D, "click", this.Rd);
		af(this, this.fc);
		this.aa().q(this.N, "click", this.Ud);
		var a = this.b();
		ae(a, this.Fc);
		"" !== this.ia.id && be(a, "labelledby", this.ia.id);
		if (!this.zc) {
			this.zc = !1;
			if (this.J) {
				var a = this.k(),
					b = this.Wa();
				a.removeNode(this.n);
				a.removeNode(b)
			}
			this.ka && Te(this, !1)
		}
	};
	f.Z = function() {
		this.ka && this.M(!1);
		af(this, !1);
		Y.d.Z.call(this)
	};
	f.M = function(a) {
		a != this.ka && (this.J || this.Ka(), Y.d.M.call(this, a))
	};
	f.eb = function() {
		Y.d.eb.call(this);
		this.dispatchEvent(cf)
	};
	f.bb = function() {
		Y.d.bb.call(this);
		this.dispatchEvent(df);
		this.qd && this.T()
	};
	f.Yd = function() {
		var a = R(this.k()),
			b = yc((a ? zc(a) : window) || window || window),
			c = Math.max(a.body.scrollWidth, b.width),
			a = Math.max(a.body.scrollHeight, b.height),
			d = ye(this.b());
		"fixed" == ue(this.b(), "position") ? (b = new V(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)), this.U.ab = b || new V(NaN, NaN, NaN, NaN)) : this.U.ab = new V(0, 0, c - d.width, a - d.height) || new V(NaN, NaN, NaN, NaN)
	};
	f.Ud = function() {
		ef(this)
	};

	function ef(a) {
		if (a.oc) {
			var b = a.F,
				c = b && b.ub;
			c ? (b = b.get(c), a.dispatchEvent(new ff(c, b)) && a.M(!1)) : a.M(!1)
		}
	}
	f.h = function() {
		this.D = this.N = null;
		Y.d.h.call(this)
	};

	function gf() {
		var a = LoginManager.S;
		a.F = null;
		if (a.D) {
			if (a.F) {
				var b = a.F;
				b.a = a.D;
				b.Ka()
			} else a.D.innerHTML = je(le);
			W(a.D, !!a.F)
		}
	}
	f.Rd = function(a) {
		a: {
			for (a = a.target; null != a && a != this.D;) {
				if ("BUTTON" == a.tagName) break a;
				a = a.parentNode
			}
			a = null
		}
		if (a && !a.disabled) {
			a = a.name;
			var b = this.F.get(a);
			this.dispatchEvent(new ff(a, b)) && this.M(!1)
		}
	};
	f.Dc = function(a) {
		var b = !1,
			c = !1,
			d = this.F,
			e = a.target;
		if ("keydown" == a.type)
			if (this.sd && 27 == a.keyCode) {
				var g = d && d.ub,
					e = "SELECT" == e.tagName && !e.disabled;
				g && !e ? (c = !0, b = d.get(g), b = this.dispatchEvent(new ff(g, b))) : e || (b = !0)
			} else {
				if (9 == a.keyCode && a.shiftKey && e == this.b()) {
					this.qb = !0;
					try {
						this.C.focus()
					} catch (h) {}
					Ne(this.Jc, 0, this)
				}
			} else if (13 == a.keyCode) {
			if ("BUTTON" == e.tagName && !e.disabled) g = e.name;
			else if (e == this.N) ef(this);
			else if (d) {
				var k = d.xb,
					n;
				if (n = k) a: {
					n = d.a.getElementsByTagName("BUTTON");
					for (var s = 0,
							q; q = n[s]; s++)
						if (q.name == k || q.id == k) {
							n = q;
							break a
						}
					n = null
				}
				e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
				!n || n.disabled || e || (g = k)
			}
			g && d && (c = !0, b = this.dispatchEvent(new ff(g, String(d.get(g)))))
		} else e == this.N && 32 == a.keyCode && ef(this);
		if (b || c) a.stopPropagation(), a.preventDefault();
		b && this.M(!1)
	};

	function ff(a, b) {
		this.type = hf;
		this.key = a;
		this.caption = b
	}
	y(ff, H);
	var hf = "dialogselect",
		df = "afterhide",
		cf = "aftershow";

	function Ve(a) {
		this.Aa = a || P();
		Yc.call(this)
	}
	y(Ve, Yc);
	f = Ve.prototype;
	f.O = "goog-buttonset";
	f.xb = null;
	f.a = null;
	f.ub = null;
	f.set = function(a, b, c, d) {
		Yc.prototype.set.call(this, a, b);
		c && (this.xb = a);
		d && (this.ub = a);
		return this
	};

	function Z(a, b, c, d) {
		return a.set(b.key, b.caption, c, d)
	}
	f.Ka = function() {
		if (this.a) {
			this.a.innerHTML = je(le);
			var a = P(this.a);
			this.forEach(function(b, c) {
				var d = a.o("button", {
					name: c
				}, b);
				c == this.xb && (d.className = this.O + "-default");
				this.a.appendChild(d)
			}, this)
		}
	};
	f.b = function() {
		return this.a
	};
	f.k = function() {
		return this.Aa
	};
	var bf = "Close",
		We = {
			key: "ok",
			caption: "OK"
		},
		Xe = {
			key: "cancel",
			caption: "Cancel"
		},
		jf = {
			key: "yes",
			caption: "Yes"
		},
		kf = {
			key: "no",
			caption: "No"
		},
		lf = {
			key: "save",
			caption: "Save"
		},
		mf = {
			key: "continue",
			caption: "Continue"
		};
	"undefined" != typeof document && (Z(new Ve, We, !0, !0), Z(Z(new Ve, We, !0), Xe, !1, !0), Z(Z(new Ve, jf, !0), kf, !1, !0), Z(Z(Z(new Ve, jf), kf, !0), Xe, !1, !0), Z(Z(Z(new Ve, mf), lf), Xe, !0, !0));
	LoginManager = function() {};
	var $ = window.LoginConfigure || {};
	LoginManager.Va = "cn" == $.env ? "cn" : 1 < document.domain.split(".dev").length ? "dev" : "cn";
	var nf = document.domain.match(/test[0-9]?\./);
	LoginManager.jb = $.test ? nf[0] || "test." : nf && nf[0] ? nf[0] : "";
	$.beta ? LoginManager.jb = "beta." : "undefined" == typeof LoginManager.jb && (LoginManager.jb = 1 < document.domain.split("beta.").length ? "beta." : "");
	try {
		LoginManager.p = document.domain.split("."), LoginManager.ae = LoginManager.p.pop(), LoginManager.$d = LoginManager.p.pop(), LoginManager.p = document.domain = LoginManager.$d + "." + LoginManager.ae
	} catch (of) {
		LoginManager.p = "plu.cn"
	}
	LoginManager.jc = function() {
		return $.reload ? location.href : "http://login." + LoginManager.p + "/static/passport/callback.html"
	};
	LoginManager.Da = function() {
		return "http://login.plu." + LoginManager.Va + "/qq/login?returnurl=" + encodeURIComponent(LoginManager.jc())
	};
	LoginManager.kc = function() {
		return "http://login.plu." + LoginManager.Va + "/user/login?returnurl=" + encodeURIComponent(LoginManager.jc())
	};
	LoginManager.xd = function() {
		return "http://" + LoginManager.jb + "star.api.plu." + LoginManager.Va + "/api/user/getcurrentuserinfo"
	};
	LoginManager.fb = pf();
	LoginManager.Ia = pf();
	LoginManager.Ib = !1;
	LoginManager.Nb = 0;
	LoginManager.va = {
		NONE: 0,
		jd: 1,
		Yc: 2,
		Zc: 8,
		$c: 64,
		Xc: 128
	};
	LoginManager.La = function(a) {
		LoginManager.Nb |= a
	};
	$.withSubscription && LoginManager.La(LoginManager.va.jd);
	$.withCurrency && LoginManager.La(LoginManager.va.Yc);
	$.withGrade && LoginManager.La(LoginManager.va.Zc);
	$.isValid && LoginManager.La(LoginManager.va.$c);
	$.BC && LoginManager.La(LoginManager.va.Xc);
	LoginManager.Fb = !0;
	0 == $.qqOnly && (LoginManager.Fb = !1);
	LoginManager.wb = window.LoginManagerStyle || window.__LoginManagerStyle;
	LoginManager.Ld = function(a) {
		!a && LoginManager.Ib || LoginManager.Nd(a)
	};
	LoginManager.Od = function() {
		window.location.href = "http://login.plu." + LoginManager.Va + "/user/logout?returnurl=" + encodeURIComponent(location.href)
	};
	LoginManager.Nd = function(a) {
		LoginManager.Vd(a)
	};
	LoginManager.re = function() {
		var a = C.match(/Chrome\/([0-9]*)/);
		return a && a[1] ? parseInt(a[1], 10) : 1
	};
	LoginManager.ve = function(a) {
		var b = LoginManager.Fb ? LoginManager.Da() : LoginManager.kc();
		a && (b = LoginManager.Da());
		a = LoginManager;
		var c = {
				width: 550,
				height: 490,
				toolbar: "no",
				menubar: "no",
				top: (screen.availHeight - 30 - 550) / 2,
				left: (screen.availWidth - 10 - 490) / 2
			},
			d = window,
			e = "undefined" != typeof b.href ? b.href : String(b),
			b = c.target || b.target,
			g = [],
			h;
		for (h in c) switch (h) {
			case "width":
			case "height":
			case "top":
			case "left":
				g.push(h + "=" + c[h]);
				break;
			case "target":
			case "noreferrer":
				break;
			default:
				g.push(h + "=" + (c[h] ? 1 : 0))
		}
		h =
			g.join(",");
		if (c.noreferrer) {
			if (c = d.open("", b, h)) D && -1 != e.indexOf(";") && (e = "'" + e.replace(/'/g, "%27") + "'"), c.opener = null, e = ta(e), c.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + e + '">'), c.document.close()
		} else c = d.open(e, b, h);
		a.pe = c
	};
	LoginManager.Vd = function(a) {
		if (!LoginManager.S) {
			if (LoginManager.wb) {
				var b = document.createElement("style");
				document.body.appendChild(b);
				try {
					b.innerHTML = LoginManager.wb
				} catch (c) {
					for (var d = LoginManager.wb.split(/\s*[{}]\s*/), e = 0; e < d.length; e += 2) b.styleSheet.addRule(d[e], d[e + 1])
				}
			}
			LoginManager.S = new Y("plu-login-dialog");
			Ye();
			$e();
			gf();
			J(LoginManager.S, df, function() {
				window.handle && window.handle("close", "LoginDialog")
			})
		}
		b = LoginManager.S;
		d = LoginManager.Fb ? LoginManager.Da() : onhashchange.kc();
		a && (d = LoginManager.Da());
		Ze(b, ke('<iframe frameborder="0" scrolling="no" width="100%" height="100%" src="' + d + '"></iframe>', null));
		b.M(!0);
		b.N.innerHTML = "x"
	};
	LoginManager.Md = function() {
		var a = LoginManager;
		LoginManager.te = !1;
		a.S && a.S.M(!1);
		LoginManager.rd && window.clearInterval(LoginManager.rd);
		a.yc()
	};
	LoginManager.yc = function() {
		var a = LoginManager;
		a.Wc = !1;
		var b = a.xd() + "?with=" + a.Nb;
		a.tc || (a.tc = new wd(b));
		a.tc.send(null, a.ge, a.he);
		a.ie = !0
	};
	LoginManager.ge = function(a) {
		var b = LoginManager,
			c;
		b.ie = !1;
		a.data && (a = a.data);
		if (a && a.uid && 0 < a.uid) {
			c = b.we = new User(a.uid, a.nickname || a.username, a.qq_avatar || a.avatar);
			b.Ib = !0;
			c = {
				uid: c.ce,
				username: c.getName(),
				avatar: c.ld
			};
			c.data = a;
			if (a = a.profiles) {
				var d = a.subscripted;
				d && (c.subscription = {
					rooms: d
				});
				(a = a.userbalance) && (c.currency = {
					amount: a
				})
			}
			b.fb.Ba(c);
			b.Ic = c
		} else b.zb = a, b.Ia.Ba(a);
		b.Wc = !0
	};
	LoginManager.he = function() {
		var a = LoginManager;
		a.Ib = !1;
		a.Ia.Ba()
	};
	LoginManager.od = function(a, b) {
		var c = LoginManager;
		w(a) && c.fb.add(a);
		w(b) && c.Ia.add(b);
		c.Wc && (c.Ic ? c.fb.Ba(c.Ic) : c.Ia.Ba(c.zb))
	};
	window.LoginManager = LoginManager;
	LoginManager.login = LoginManager.Ld;
	LoginManager.logout = LoginManager.Od;
	LoginManager.loginDone = LoginManager.Md;
	LoginManager.loadUserInfo = LoginManager.yc;
	LoginManager.checkLogin = LoginManager.od;
	LoginManager.onSuccess = LoginManager.fb;
	LoginManager.onFailure = LoginManager.Ia;
	LoginManager.getQqLoginUrl_ = LoginManager.Da;
	User = function(a, b, c) {
		this.Ha = b || "";
		this.ce = a || "";
		this.ld = c || ""
	};
	User.prototype.getName = function() {
		return this.Ha
	};

	function pf() {
		function a(c) {
			b(c);
			return a
		}

		function b(b) {
			-1 === d(e, b) && e.push(b);
			return a
		}

		function c(b) {
			var c = d(e, b);
			b = d(g, b); - 1 < c && e.splice(c, 1); - 1 < b && g.splice(b, 1);
			return a
		}

		function d(a, b) {
			if (a.indexOf) return a.indexOf(b);
			var c = a.length,
				d;
			for (d = 0; d < c; d++)
				if (b === a[d]) return d;
			return -1
		}
		var e = [],
			g = [];
		a.add = b;
		a.ue = function(c) {
			b(c); - 1 < d(e, c) && g.push(c);
			return a
		};
		a.remove = c;
		a.Ba = function(a) {
			var b = e.length,
				n, s, q;
			for (n = 0; n < b; n++) s = e[n], q = d(g, s), s(a), -1 < q && (c(s), g.splice(q, 1))
		};
		return a
	};

	function qf() {}
	var rf;
	f = qf.prototype;
	f.Yb = [];
	f.wc = {};
	f.pc = {};
	f.vc = {};
	f.Ja = function(a, b, c, d, e) {
		var g = this.Yb,
			h = this.wc,
			k = this.pc,
			n = this.vc,
			s = d || !1,
			q = g.length;
		if (e) {
			for (var p = 0; p < q; p += 3) d = g[p], e = g[p + 1], d && d != a || e && e != b || function() {
				var a = p + 2;
				try {
					g[a](c)
				} catch (b) {}
			}();
			s && (d = a + "-" + b, h[d] = c, k[d] = !0);
			return this
		}
		d = new M(function(d, e) {
			for (var p = 0; p < q; p += 3) {
				var ca = g[p],
					Ga = g[p + 1];
				if (!(ca && ca != a || Ga && Ga != b)) {
					ca = p + 2;
					try {
						d(g[ca](c))
					} catch (te) {
						e(te)
					}
				}
			}
			s && (p = a + "-" + b, h[p] = c, k[p] = !0, n[p] = {
				resolve: d,
				reject: e
			})
		}, this);
		d.Ja = x(this.Ja, this);
		d.Ob = x(this.Ob, this);
		return d
	};
	f.Ob = function(a, b, c) {
		var d = this.pc,
			e = this.Yb,
			g = this.wc,
			h = this.vc;
		a = a || "";
		b = b || "";
		var k = a + "-" + b;
		d[k] && setTimeout(function() {
			try {
				h[k].resolve(c(g[k]))
			} catch (a) {
				h[k].reject(a)
			}
		}, 1);
		e.push(a);
		e.push(b);
		e.push(c);
		return this
	};

	function sf() {
		rf || (rf = new qf);
		return rf
	}

	function tf(a, b, c, d, e) {
		return sf().Ja(a, b, c, d, e)
	}
	window.__Messages = {};
	window.__Messages.post = tf;
	window.__Messages.receive = function(a, b, c) {
		return sf().Ob(a, b, c)
	};
	window.handle = function(a, b, c) {
		return tf(a, b, c, !1, !0)
	};

	function uf(a) {
		var b;
		b || (b = vf(a || arguments.callee.caller, []));
		return b
	}

	function vf(a, b) {
		var c = [];
		if (0 <= Da(b, a)) c.push("[...circular reference...]");
		else if (a && 50 > b.length) {
			c.push(wf(a) + "(");
			for (var d = a.arguments, e = 0; d && e < d.length; e++) {
				0 < e && c.push(", ");
				var g;
				g = d[e];
				switch (typeof g) {
					case "object":
						g = g ? "object" : "null";
						break;
					case "string":
						break;
					case "number":
						g = String(g);
						break;
					case "boolean":
						g = g ? "true" : "false";
						break;
					case "function":
						g = (g = wf(g)) ? g : "[fn]";
						break;
					default:
						g = typeof g
				}
				40 < g.length && (g = g.substr(0, 40) + "...");
				c.push(g)
			}
			b.push(a);
			c.push(")\n");
			try {
				c.push(vf(a.caller,
					b))
			} catch (h) {
				c.push("[exception trying to get caller]\n")
			}
		} else a ? c.push("[...long stack...]") : c.push("[end]");
		return c.join("")
	}

	function wf(a) {
		if (xf[a]) return xf[a];
		a = String(a);
		if (!xf[a]) {
			var b = /function ([^\(]+)/.exec(a);
			xf[a] = b ? b[1] : "[Anonymous]"
		}
		return xf[a]
	}
	var xf = {};

	function yf() {
		L.call(this);
		this.Ha = "closure_frame" + zf++;
		this.Eb = [];
		Af[this.Ha] = this
	}
	var Bf;
	y(yf, L);
	var Af = {},
		zf = 0;

	function Cf(a, b) {
		var c = P(a);
		Xc(b, function(b, e) {
			var g = c.o("input", {
				type: "hidden",
				name: e,
				value: b
			});
			a.appendChild(g)
		})
	}
	f = yf.prototype;
	f.c = null;
	f.i = null;
	f.da = null;
	f.Qd = 0;
	f.R = !1;
	f.uc = null;
	f.ca = null;
	f.Ga = !1;
	f.send = function(a, b, c, d) {
		if (this.R) throw Error("[goog.net.IframeIo] Unable to send, already active.");
		a = new dd(a);
		b = b ? b.toUpperCase() : "GET";
		c && (T(a), c = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ la()).toString(36), T(a), a.w.set("zx", c));
		Bf || (Bf = Ac("form"), Bf.acceptCharset = "utf-8", c = Bf.style, c.position = "absolute", c.visibility = "hidden", c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = "hidden", document.body.appendChild(Bf));
		this.c = Bf;
		"GET" == b &&
			Cf(this.c, a.w);
		d && Cf(this.c, d);
		this.c.action = a.toString();
		this.c.method = b;
		this.R = !0;
		this.da = this.Ha + "_" + (this.Qd++).toString(36);
		d = {
			name: this.da,
			id: this.da
		};
		D && 7 > Za && (d.src = 'javascript:""');
		this.i = P(this.c).o("iframe", d);
		d = this.i.style;
		d.visibility = "hidden";
		d.width = d.height = "10px";
		d.display = "none";
		F ? d.marginTop = d.marginLeft = "-10px" : (d.position = "absolute", d.top = d.left = "-10px");
		if (D && !G("11")) {
			this.c.target = this.da || "";
			R(P(this.c)).body.appendChild(this.i);
			this.Ga || J(this.i, "readystatechange", this.Jb, !1, this);
			try {
				this.yb = !1, this.c.submit()
			} catch (e) {
				this.Ga || K(this.i, "readystatechange", this.Jb, !1, this), Df(this)
			}
		} else {
			R(P(this.c)).body.appendChild(this.i);
			d = this.da + "_inner";
			a = Gc(this.i);
			c = "<body><iframe id=" + d + " name=" + d + "></iframe>";
			document.baseURI && (c = '<head><base href="' + ta(document.baseURI) + '"></head>' + c);
			Va ? a.documentElement.innerHTML = c : a.write(c);
			this.Ga || J(a.getElementById(d), "load", this.cb, !1, this);
			var g = this.c.getElementsByTagName("textarea");
			c = 0;
			for (b = g.length; c < b; c++) {
				var h = g[c].value,
					k = [];
				Kc(g[c], k, !1);
				k.join("") != h && (Hc(g[c], h), g[c].value = h)
			}
			g = a.importNode(this.c, !0);
			g.target = d;
			g.action = this.c.action;
			a.body.appendChild(g);
			h = this.c.getElementsByTagName("select");
			k = g.getElementsByTagName("select");
			c = 0;
			for (b = h.length; c < b; c++)
				for (var n = h[c].getElementsByTagName("option"), s = k[c].getElementsByTagName("option"), q = 0, p = n.length; q < p; q++) s[q].selected = n[q].selected;
			h = this.c.getElementsByTagName("input");
			k = g.getElementsByTagName("input");
			c = 0;
			for (b = h.length; c < b; c++)
				if ("file" == h[c].type &&
					h[c].value != k[c].value) {
					this.c.target = d;
					g = this.c;
					break
				}
			try {
				this.yb = !1, g.submit(), a.close(), E && Ne(this.Qc, 250, this)
			} catch (v) {
				try {
					var Hb;
					var se = aa("window.location.href");
					if (t(v)) Hb = {
						message: v,
						name: "Unknown error",
						lineNumber: "Not available",
						fileName: se,
						stack: "Not available"
					};
					else {
						var ca, Ga;
						c = !1;
						try {
							ca = v.lineNumber || v.se || "Not available"
						} catch (te) {
							ca = "Not available", c = !0
						}
						try {
							Ga = v.fileName || v.filename || v.sourceURL || l.$googDebugFname || se
						} catch (Wf) {
							Ga = "Not available", c = !0
						}
						Hb = !c && v.lineNumber && v.fileName &&
							v.stack && v.message && v.name ? v : {
								message: v.message || "Not available",
								name: v.name || "UnknownError",
								lineNumber: ca,
								fileName: Ga,
								stack: v.stack || "Not available"
							}
					}
					ta(Hb.message);
					ta(Hb.stack + "-> ");
					ta(uf(void 0) + "-> ")
				} catch (Xf) {}
				this.Ga || K(a.getElementById(d), "load", this.cb, !1, this);
				a.close();
				Df(this)
			}
		}
		Ef(this)
	};
	f.abort = function() {
		if (this.R) {
			var a = Ff(this);
			if (a)
				if (lb(a)) a.B && a.B.ha(void 0);
				else if (a = xb(a)) {
				var b = 0,
					c;
				for (c in a.m)
					for (var d = a.m[c].concat(), e = 0; e < d.length; ++e) Cb(d[e]) && ++b
			}
			this.R = !1;
			this.dispatchEvent("abort");
			Gf(this)
		}
	};
	f.h = function() {
		this.R && this.abort();
		yf.d.h.call(this);
		this.i && Hf(this);
		Ef(this);
		this.c = null;
		delete this.hc;
		this.uc = this.c = null;
		delete Af[this.Ha]
	};
	f.Jb = function() {
		if ("complete" == this.i.readyState) {
			K(this.i, "readystatechange", this.Jb, !1, this);
			var a;
			try {
				if (a = Gc(this.i), D && "about:blank" == a.location && !navigator.onLine) {
					Df(this);
					return
				}
			} catch (b) {
				Df(this);
				return
			}
			If(this, a)
		}
	};
	f.cb = function() {
		if (!Va || "about:blank" != (this.i ? Gc(Ff(this)) : null).location) {
			K(Ff(this), "load", this.cb, !1, this);
			try {
				If(this, this.i ? Gc(Ff(this)) : null)
			} catch (a) {
				Df(this)
			}
		}
	};

	function If(a, b) {
		a.R = !1;
		var c;
		try {
			var d = b.body;
			a.uc = d.textContent || d.innerText
		} catch (e) {
			c = 1
		}
		c || "function" != typeof a.hc || (d = a.hc(b)) && (c = 4);
		c ? Df(a) : (a.dispatchEvent("complete"), a.dispatchEvent("success"), Gf(a))
	}

	function Df(a) {
		a.yb || (a.R = !1, a.dispatchEvent("complete"), a.dispatchEvent("error"), Gf(a), a.yb = !0)
	}

	function Gf(a) {
		Hf(a);
		Ef(a);
		a.c = null;
		a.dispatchEvent("ready")
	}

	function Hf(a) {
		var b = a.i;
		b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.Eb.push(b));
		a.ca && (l.clearTimeout(a.ca), a.ca = null);
		E || Va ? a.ca = Ne(a.ec, 2E3, a) : a.ec();
		a.i = null;
		a.da = null
	}
	f.ec = function() {
		this.ca && (l.clearTimeout(this.ca), this.ca = null);
		for (; 0 != this.Eb.length;) {
			var a = this.Eb.pop();
			Q(a)
		}
	};

	function Ef(a) {
		a.c && a.c == Bf && Fc(a.c)
	}

	function Ff(a) {
		return a.i ? D && !G("11") ? a.i : Gc(a.i).getElementById(a.da + "_inner") : null
	}
	f.Qc = function() {
		if (this.R) {
			var a = this.i ? Gc(Ff(this)) : null;
			a && !hb(a, "documentUri") ? (this.Ga || K(Ff(this), "load", this.cb, !1, this), Df(this)) : Ne(this.Qc, 250, this)
		}
	};

	function Jf() {}
	Jf.prototype.Ja = function(a) {
		if (!this.Hc) {
			var b = location.hostname;
			if (b) var b = b.split("."),
				c = b.length,
				b = b[c - 2] + "." + b[c - 1];
			else b = "plu.cn";
			"longzhu.dev" == b ? b = "longzhu.com" : "plu.dev" == b && (b = "plu.cn");
			this.Hc = "http://" + b + "/static/assets/reportproxy.html"
		}
		b = this.Hc;
		a = a.Gb;
		c = new yf;
		J(c, "ready", c.T, !1, c);
		c.send(b, "GET", !1, a)
	};

	function Kf(a) {
		this.u = a;
		this.Gb = {};
		this.Gb.id = a || ""
	}
	Kf.prototype.Cb = function() {
		return this.u
	};
	var Lf, Mf;

	function Nf() {
		Mf || (Mf = vc(document, "mask-all"));
		return Mf
	}
	new dd;
	var Of = location.hostname,
		Pf = "",
		Qf = /^test[0-9]?\./.exec(Of),
		Rf = /^beta\./.exec(Of);
	Rf && Rf[0] ? Pf = Rf[0] : Qf && Qf[0] ? Pf = Qf[0] : /\.dev$/.exec(Of) && (Pf = "dev");
	Lf = "dev" == Pf ? "http://login.longzhu." + Pf + "/user/voiceverify" : "http://" + Pf + "login.longzhu.com/user/voiceverify";
	window.verificationDialogClose = function() {
		var a = Nf();
		a && (a.style.display = "none");
		(a = vc(document, "verification-dialog")) && Q(a)
	};
	window.verificationPass = function() {
		var a = vc(document, "chatroom-verification");
		a && (a.style.display = "none");
		window.userManager && (window.userManager.isValid = 1, window.handle("pass", "verification"))
	};
	window.verificationDialog = function() {
		if (!vc(document, "verification-dialog")) {
			var a;
			a = document;
			a = a.querySelectorAll && a.querySelector ? a.querySelectorAll("BODY") : a.getElementsByTagName("BODY");
			a = a[0];
			var b = Nf(),
				c;
			var d = '<iframe frameborder="0" src="' + Lf + '" class="verification-dialog" id="verification-dialog" width="406" height="250" allowtransparency="true" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>',
				e = document;
			c = e.createElement("div");
			D ? (c.innerHTML = "<br>" + d, c.removeChild(c.firstChild)) :
				c.innerHTML = d;
			if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
			else {
				for (d = e.createDocumentFragment(); c.firstChild;) d.appendChild(c.firstChild);
				c = d
			}
			b.style.display = "block";
			a.appendChild(c)
		}
	};
	tf("init", "page", null, !0);
	window.PT_internReport = function(a, b, c) {
		var d = new Jf;
		a = new Kf(a);
		a.Gb[b] = c || "";
		d.Ja(a)
	};
	var Sf = new Image;
	Sf.src = "http://userapi.plu.cn/online/ticket?roomid=" + window.roomInfo.RoomId + "&pagetype=live";
	setInterval(function() {
		Sf.src = "http://userapi.plu.cn/online/ticket?roomid=" + window.roomInfo.RoomId + "&pagetype=live"
	}, 48E4);
	var Tf = ["star", "MessageBus"],
		Uf = l;
	Tf[0] in Uf || !Uf.execScript || Uf.execScript("var " + Tf[0]);
	for (var Vf; Tf.length && (Vf = Tf.shift());) !Tf.length && m(U) ? Uf[Vf] = U : Uf = Uf[Vf] ? Uf[Vf] : Uf[Vf] = {};
})();
(function() {
	var COMPILED = !0,
		goog = goog || {};
	goog.global = this;
	goog.isDef = function(a) {
		return void 0 !== a
	};
	goog.exportPath_ = function(a, b, c) {
		a = a.split(".");
		c = c || goog.global;
		a[0] in c || !c.execScript || c.execScript("var " + a[0]);
		for (var e; a.length && (e = a.shift());) !a.length && goog.isDef(b) ? c[e] = b : c = c[e] ? c[e] : c[e] = {}
	};
	goog.define = function(a, b) {
		var c = b;
		COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, a) ? c = goog.global.CLOSURE_UNCOMPILED_DEFINES[a] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a]));
		goog.exportPath_(a, c)
	};
	goog.DEBUG = !1;
	goog.LOCALE = "en";
	goog.TRUSTED_SITE = !0;
	goog.STRICT_MODE_COMPATIBLE = !1;
	goog.provide = function(a) {
		if (!COMPILED) {
			if (goog.isProvided_(a)) throw Error('Namespace "' + a + '" already declared.');
			delete goog.implicitNamespaces_[a];
			for (var b = a;
				(b = b.substring(0, b.lastIndexOf("."))) && !goog.getObjectByName(b);) goog.implicitNamespaces_[b] = !0
		}
		goog.exportPath_(a)
	};
	goog.module = function(a) {
		if (!goog.isString(a) || !a) throw Error("Invalid module identifier");
		if (!goog.isInModuleLoader_()) throw Error("Module " + a + " has been loaded incorrectly.");
		if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
		goog.moduleLoaderState_.moduleName = a;
		if (!COMPILED) {
			if (goog.isProvided_(a)) throw Error('Namespace "' + a + '" already declared.');
			delete goog.implicitNamespaces_[a]
		}
	};
	goog.module.get = function(a) {
		return goog.module.getInternal_(a)
	};
	goog.module.getInternal_ = function(a) {
		if (!COMPILED) return goog.isProvided_(a) ? a in goog.loadedModules_ ? goog.loadedModules_[a] : goog.getObjectByName(a) : null
	};
	goog.moduleLoaderState_ = null;
	goog.isInModuleLoader_ = function() {
		return null != goog.moduleLoaderState_
	};
	goog.module.declareTestMethods = function() {
		if (!goog.isInModuleLoader_()) throw Error("goog.module.declareTestMethods must be called from within a goog.module");
		goog.moduleLoaderState_.declareTestMethods = !0
	};
	goog.setTestOnly = function(a) {
		if (COMPILED && !goog.DEBUG) throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
	};
	goog.forwardDeclare = function(a) {};
	COMPILED || (goog.isProvided_ = function(a) {
		return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a))
	}, goog.implicitNamespaces_ = {
		"goog.module": !0
	});
	goog.getObjectByName = function(a, b) {
		for (var c = a.split("."), e = b || goog.global, f; f = c.shift();)
			if (goog.isDefAndNotNull(e[f])) e = e[f];
			else return null;
		return e
	};
	goog.globalize = function(a, b) {
		var c = b || goog.global,
			e;
		for (e in a) c[e] = a[e]
	};
	goog.addDependency = function(a, b, c, e) {
		if (goog.DEPENDENCIES_ENABLED) {
			var f;
			a = a.replace(/\\/g, "/");
			for (var h = goog.dependencies_, k = 0; f = b[k]; k++) h.nameToPath[f] = a, h.pathIsModule[a] = !!e;
			for (e = 0; b = c[e]; e++) a in h.requires || (h.requires[a] = {}), h.requires[a][b] = !0
		}
	};
	goog.ENABLE_DEBUG_LOADER = !0;
	goog.logToConsole_ = function(a) {
		goog.global.console && goog.global.console.error(a)
	};
	goog.require = function(a) {
		if (!COMPILED) {
			if (goog.isProvided_(a)) return goog.isInModuleLoader_() ? goog.module.getInternal_(a) : null;
			if (goog.ENABLE_DEBUG_LOADER) {
				var b = goog.getPathFromDeps_(a);
				if (b) return goog.included_[b] = !0, goog.writeScripts_(), null
			}
			a = "goog.require could not find: " + a;
			goog.logToConsole_(a);
			throw Error(a);
		}
	};
	goog.basePath = "";
	goog.nullFunction = function() {};
	goog.identityFunction = function(a, b) {
		return a
	};
	goog.abstractMethod = function() {
		throw Error("unimplemented abstract method");
	};
	goog.addSingletonGetter = function(a) {
		a.getInstance = function() {
			if (a.instance_) return a.instance_;
			goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
			return a.instance_ = new a
		}
	};
	goog.instantiatedSingletons_ = [];
	goog.LOAD_MODULE_USING_EVAL = !0;
	goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
	goog.loadedModules_ = {};
	goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
	goog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {
		pathIsModule: {},
		nameToPath: {},
		requires: {},
		visited: {},
		written: {}
	}, goog.inHtmlDocument_ = function() {
		var a = goog.global.document;
		return "undefined" != typeof a && "write" in a
	}, goog.findBasePath_ = function() {
		if (goog.global.CLOSURE_BASE_PATH) goog.basePath = goog.global.CLOSURE_BASE_PATH;
		else if (goog.inHtmlDocument_())
			for (var a = goog.global.document.getElementsByTagName("script"), b = a.length - 1; 0 <= b; --b) {
				var c = a[b].src,
					e = c.lastIndexOf("?"),
					e = -1 == e ? c.length :
					e;
				if ("base.js" == c.substr(e - 7, 7)) {
					goog.basePath = c.substr(0, e - 7);
					break
				}
			}
	}, goog.importScript_ = function(a, b) {
		(goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(a, b) && (goog.dependencies_.written[a] = !0)
	}, goog.IS_OLD_IE_ = goog.global.document && goog.global.document.all && !goog.global.atob, goog.importModule_ = function(a) {
		goog.importScript_("", 'goog.retrieveAndExecModule_("' + a + '");') && (goog.dependencies_.written[a] = !0)
	}, goog.queuedModules_ = [], goog.retrieveAndExecModule_ = function(a) {
		var b = goog.global.CLOSURE_IMPORT_SCRIPT ||
			goog.writeScriptTag_,
			c = null,
			e = new goog.global.XMLHttpRequest;
		e.onload = function() {
			c = this.responseText
		};
		e.open("get", a, !1);
		e.send();
		c = e.responseText;
		if (null != c) e = goog.wrapModule_(a, c), goog.IS_OLD_IE_ ? goog.queuedModules_.push(e) : b(a, e), goog.dependencies_.written[a] = !0;
		else throw Error("load of " + a + "failed");
	}, goog.wrapModule_ = function(a, b) {
		return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(b + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' +
			b + "\n;return exports});\n//# sourceURL=" + a + "\n"
	}, goog.loadQueuedModules_ = function() {
		var a = goog.queuedModules_.length;
		if (0 < a) {
			var b = goog.queuedModules_;
			goog.queuedModules_ = [];
			for (var c = 0; c < a; c++) goog.globalEval(b[c])
		}
	}, goog.loadModule = function(a) {
		try {
			goog.moduleLoaderState_ = {
				moduleName: void 0,
				declareTestMethods: !1
			};
			var b;
			if (goog.isFunction(a)) b = a.call(goog.global, {});
			else if (goog.isString(a)) b = goog.loadModuleFromSource_.call(goog.global, a);
			else throw Error("Invalid module definition");
			goog.SEAL_MODULE_EXPORTS &&
				Object.seal && Object.seal(b);
			var c = goog.moduleLoaderState_.moduleName;
			if (!goog.isString(c) || !c) throw Error('Invalid module name "' + c + '"');
			goog.loadedModules_[c] = b;
			if (goog.moduleLoaderState_.declareTestMethods)
				for (var e in b)
					if (0 === e.indexOf("test", 0) || "tearDown" == e || "setup" == e) goog.global[e] = b[e]
		} finally {
			goog.moduleLoaderState_ = null
		}
	}, goog.loadModuleFromSource_ = function(a) {
		eval(a);
		return {}
	}, goog.writeScriptTag_ = function(a, b) {
		if (goog.inHtmlDocument_()) {
			var c = goog.global.document;
			if ("complete" == c.readyState) {
				if (/\bdeps.js$/.test(a)) return !1;
				throw Error('Cannot write "' + a + '" after document load');
			}
			var e = goog.IS_OLD_IE_;
			void 0 === b ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ", c.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : c.write('<script type="text/javascript" src="' + a + '">\x3c/script>') : c.write('<script type="text/javascript">' + b + "\x3c/script>");
			return !0
		}
		return !1
	}, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function(a, b) {
		"complete" == a.readyState && goog.lastNonModuleScriptIndex_ ==
			b && goog.loadQueuedModules_();
		return !0
	}, goog.writeScripts_ = function() {
		function a(f) {
			if (!(f in e.written)) {
				if (!(f in e.visited) && (e.visited[f] = !0, f in e.requires))
					for (var h in e.requires[f])
						if (!goog.isProvided_(h))
							if (h in e.nameToPath) a(e.nameToPath[h]);
							else throw Error("Undefined nameToPath for " + h);
				f in c || (c[f] = !0, b.push(f))
			}
		}
		var b = [],
			c = {},
			e = goog.dependencies_,
			f;
		for (f in goog.included_) e.written[f] || a(f);
		for (var h = 0; h < b.length; h++) f = b[h], goog.dependencies_.written[f] = !0;
		var k = goog.moduleLoaderState_;
		goog.moduleLoaderState_ = null;
		for (h = 0; h < b.length; h++)
			if (f = b[h]) e.pathIsModule[f] ? goog.importModule_(goog.basePath + f) : goog.importScript_(goog.basePath + f);
			else throw goog.moduleLoaderState_ = k, Error("Undefined script input");
		goog.moduleLoaderState_ = k
	}, goog.getPathFromDeps_ = function(a) {
		return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null
	}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
	goog.typeOf = function(a) {
		var b = typeof a;
		if ("object" == b)
			if (a) {
				if (a instanceof Array) return "array";
				if (a instanceof Object) return b;
				var c = Object.prototype.toString.call(a);
				if ("[object Window]" == c) return "object";
				if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
				if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
			} else return "null";
		else if ("function" == b && "undefined" == typeof a.call) return "object";
		return b
	};
	goog.isNull = function(a) {
		return null === a
	};
	goog.isDefAndNotNull = function(a) {
		return null != a
	};
	goog.isArray = function(a) {
		return "array" == goog.typeOf(a)
	};
	goog.isArrayLike = function(a) {
		var b = goog.typeOf(a);
		return "array" == b || "object" == b && "number" == typeof a.length
	};
	goog.isDateLike = function(a) {
		return goog.isObject(a) && "function" == typeof a.getFullYear
	};
	goog.isString = function(a) {
		return "string" == typeof a
	};
	goog.isBoolean = function(a) {
		return "boolean" == typeof a
	};
	goog.isNumber = function(a) {
		return "number" == typeof a
	};
	goog.isFunction = function(a) {
		return "function" == goog.typeOf(a)
	};
	goog.isObject = function(a) {
		var b = typeof a;
		return "object" == b && null != a || "function" == b
	};
	goog.getUid = function(a) {
		return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_)
	};
	goog.hasUid = function(a) {
		return !!a[goog.UID_PROPERTY_]
	};
	goog.removeUid = function(a) {
		"removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
		try {
			delete a[goog.UID_PROPERTY_]
		} catch (b) {}
	};
	goog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
	goog.uidCounter_ = 0;
	goog.getHashCode = goog.getUid;
	goog.removeHashCode = goog.removeUid;
	goog.cloneObject = function(a) {
		var b = goog.typeOf(a);
		if ("object" == b || "array" == b) {
			if (a.clone) return a.clone();
			var b = "array" == b ? [] : {},
				c;
			for (c in a) b[c] = goog.cloneObject(a[c]);
			return b
		}
		return a
	};
	goog.bindNative_ = function(a, b, c) {
		return a.call.apply(a.bind, arguments)
	};
	goog.bindJs_ = function(a, b, c) {
		if (!a) throw Error();
		if (2 < arguments.length) {
			var e = Array.prototype.slice.call(arguments, 2);
			return function() {
				var c = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(c, e);
				return a.apply(b, c)
			}
		}
		return function() {
			return a.apply(b, arguments)
		}
	};
	goog.bind = function(a, b, c) {
		Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
		return goog.bind.apply(null, arguments)
	};
	goog.partial = function(a, b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return function() {
			var b = c.slice();
			b.push.apply(b, arguments);
			return a.apply(this, b)
		}
	};
	goog.mixin = function(a, b) {
		for (var c in b) a[c] = b[c]
	};
	goog.now = goog.TRUSTED_SITE && Date.now || function() {
		return +new Date
	};
	goog.globalEval = function(a) {
		if (goog.global.execScript) goog.global.execScript(a, "JavaScript");
		else if (goog.global.eval)
			if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) goog.global.eval(a);
			else {
				var b = goog.global.document,
					c = b.createElement("script");
				c.type = "text/javascript";
				c.defer = !1;
				c.appendChild(b.createTextNode(a));
				b.body.appendChild(c);
				b.body.removeChild(c)
			} else throw Error("goog.globalEval not available");
	};
	goog.evalWorksForGlobals_ = null;
	goog.getCssName = function(a, b) {
		var c = function(a) {
				return goog.cssNameMapping_[a] || a
			},
			e = function(a) {
				a = a.split("-");
				for (var b = [], e = 0; e < a.length; e++) b.push(c(a[e]));
				return b.join("-")
			},
			e = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : e : function(a) {
				return a
			};
		return b ? a + "-" + e(b) : e(a)
	};
	goog.setCssNameMapping = function(a, b) {
		goog.cssNameMapping_ = a;
		goog.cssNameMappingStyle_ = b
	};
	!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
	goog.getMsg = function(a, b) {
		b && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
			return e in b ? b[e] : a
		}));
		return a
	};
	goog.getMsgWithFallback = function(a, b) {
		return a
	};
	goog.exportSymbol = function(a, b, c) {
		goog.exportPath_(a, b, c)
	};
	goog.exportProperty = function(a, b, c) {
		a[b] = c
	};
	goog.inherits = function(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.superClass_ = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a;
		a.base = function(a, c, h) {
			var k = Array.prototype.slice.call(arguments, 2);
			return b.prototype[c].apply(a, k)
		}
	};
	goog.base = function(a, b, c) {
		var e = arguments.callee.caller;
		if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !e) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
		if (e.superClass_) return e.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
		for (var f = Array.prototype.slice.call(arguments, 2), h = !1, k = a.constructor; k; k = k.superClass_ && k.superClass_.constructor)
			if (k.prototype[b] === e) h = !0;
			else if (h) return k.prototype[b].apply(a,
			f);
		if (a[b] === e) return a.constructor.prototype[b].apply(a, f);
		throw Error("goog.base called from a method of one name to a method of a different name");
	};
	goog.scope = function(a) {
		a.call(goog.global)
	};
	COMPILED || (goog.global.COMPILED = COMPILED);
	goog.defineClass = function(a, b) {
		var c = b.constructor,
			e = b.statics;
		c && c != Object.prototype.constructor || (c = function() {
			throw Error("cannot instantiate an interface (no constructor defined).");
		});
		c = goog.defineClass.createSealingConstructor_(c, a);
		a && goog.inherits(c, a);
		delete b.constructor;
		delete b.statics;
		goog.defineClass.applyProperties_(c.prototype, b);
		null != e && (e instanceof Function ? e(c) : goog.defineClass.applyProperties_(c, e));
		return c
	};
	goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
	goog.defineClass.createSealingConstructor_ = function(a, b) {
		if (goog.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
			if (b && b.prototype && b.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]) return a;
			var c = function() {
				var b = a.apply(this, arguments) || this;
				b[goog.UID_PROPERTY_] = b[goog.UID_PROPERTY_];
				this.constructor === c && Object.seal(b);
				return b
			};
			return c
		}
		return a
	};
	goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	goog.defineClass.applyProperties_ = function(a, b) {
		for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
		for (var e = 0; e < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; e++) c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[e], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
	};
	goog.tagUnsealableClass = function(a) {
		!COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0)
	};
	goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
	var qun = {
		star: {}
	};
	qun.star.jquery = {};
	(function(a, b) {
		function c(a) {
			var b = a.length,
				c = g.type(a);
			return g.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" === typeof b && 0 < b && b - 1 in a)
		}

		function e(a) {
			var b = Ja[a] = {};
			g.each(a.match(ia) || [], function(a, E) {
				b[E] = !0
			});
			return b
		}

		function f(a, c, e, f) {
			if (g.acceptData(a)) {
				var l = g.expando,
					n = "string" === typeof c,
					h = a.nodeType,
					q = h ? g.cache : a,
					k = h ? a[l] : a[l] && l;
				if (k && q[k] && (f || q[k].data) || !n || e !== b) {
					k || (h ? a[l] = k = W.pop() || g.guid++ : k = l);
					q[k] || (q[k] = {}, h || (q[k].toJSON = g.noop));
					if ("object" ===
						typeof c || "function" === typeof c) f ? q[k] = g.extend(q[k], c) : q[k].data = g.extend(q[k].data, c);
					a = q[k];
					f || (a.data || (a.data = {}), a = a.data);
					e !== b && (a[g.camelCase(c)] = e);
					n ? (e = a[c], null == e && (e = a[g.camelCase(c)])) : e = a;
					return e
				}
			}
		}

		function h(a, b, c) {
			if (g.acceptData(a)) {
				var e, f, l, n = a.nodeType,
					h = n ? g.cache : a,
					k = n ? a[g.expando] : g.expando;
				if (h[k]) {
					if (b && (l = c ? h[k] : h[k].data)) {
						g.isArray(b) ? b = b.concat(g.map(b, g.camelCase)) : b in l ? b = [b] : (b = g.camelCase(b), b = b in l ? [b] : b.split(" "));
						e = 0;
						for (f = b.length; e < f; e++) delete l[b[e]];
						if (!(c ?
								m : g.isEmptyObject)(l)) return
					}
					if (!c && (delete h[k].data, !m(h[k]))) return;
					n ? g.cleanData([a], !0) : g.support.deleteExpando || h != h.window ? delete h[k] : h[k] = null
				}
			}
		}

		function k(a, c, e) {
			if (e === b && 1 === a.nodeType)
				if (e = "data-" + c.replace(Ka, "-$1").toLowerCase(), e = a.getAttribute(e), "string" === typeof e) {
					try {
						e = "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : +e + "" === e ? +e : bb.test(e) ? g.parseJSON(e) : e
					} catch (f) {}
					g.data(a, c, e)
				} else e = b;
			return e
		}

		function m(a) {
			for (var b in a)
				if (("data" !== b || !g.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
			return !0
		}

		function p() {
			return !0
		}

		function r() {
			return !1
		}

		function t(a, b) {
			do a = a[b]; while (a && 1 !== a.nodeType);
			return a
		}

		function A(a, b, c) {
			b = b || 0;
			if (g.isFunction(b)) return g.grep(a, function(a, E) {
				return !!b.call(a, E, a) === c
			});
			if (b.nodeType) return g.grep(a, function(a) {
				return a === b === c
			});
			if ("string" === typeof b) {
				var e = g.grep(a, function(a) {
					return 1 === a.nodeType
				});
				if (Jb.test(b)) return g.filter(b, e, !c);
				b = g.filter(b, e)
			}
			return g.grep(a, function(a) {
				return 0 <= g.inArray(a, b) === c
			})
		}

		function H(a) {
			var b = qb.split("|");
			a = a.createDocumentFragment();
			if (a.createElement)
				for (; b.length;) a.createElement(b.pop());
			return a
		}

		function s(a, b) {
			return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
		}

		function G(a) {
			var b = a.getAttributeNode("type");
			a.type = (b && b.specified) + "/" + a.type;
			return a
		}

		function w(a) {
			var b = Kb.exec(a.type);
			b ? a.type = b[1] : a.removeAttribute("type");
			return a
		}

		function D(a, b) {
			for (var c, e = 0; null != (c = a[e]); e++) g._data(c, "globalEval", !b || g._data(b[e], "globalEval"))
		}

		function v(a, b) {
			if (1 === b.nodeType && g.hasData(a)) {
				var c,
					e, f;
				e = g._data(a);
				var l = g._data(b, e),
					n = e.events;
				if (n)
					for (c in delete l.handle, l.events = {}, n)
						for (e = 0, f = n[c].length; e < f; e++) g.event.add(b, c, n[c][e]);
				l.data && (l.data = g.extend({}, l.data))
			}
		}

		function x(a, c) {
			var e, f, l = 0,
				n = typeof a.getElementsByTagName !== X ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== X ? a.querySelectorAll(c || "*") : b;
			if (!n)
				for (n = [], e = a.childNodes || a; null != (f = e[l]); l++) !c || g.nodeName(f, c) ? n.push(f) : g.merge(n, x(f, c));
			return c === b || c && g.nodeName(a, c) ? g.merge([a], n) : n
		}

		function z(a) {
			cb.test(a.type) &&
				(a.defaultChecked = a.checked)
		}

		function J(a, b) {
			if (b in a) return b;
			for (var c = b.charAt(0).toUpperCase() + b.slice(1), e = b, f = rb.length; f--;)
				if (b = rb[f] + c, b in a) return b;
			return e
		}

		function K(a, b) {
			a = b || a;
			return "none" === g.css(a, "display") || !g.contains(a.ownerDocument, a)
		}

		function l(a, b) {
			for (var c, e, f, l = [], n = 0, h = a.length; n < h; n++) e = a[n], e.style && (l[n] = g._data(e, "olddisplay"), c = e.style.display, b ? (l[n] || "none" !== c || (e.style.display = ""), "" === e.style.display && K(e) && (l[n] = g._data(e, "olddisplay", I(e.nodeName)))) : l[n] ||
				(f = K(e), (c && "none" !== c || !f) && g._data(e, "olddisplay", f ? c : g.css(e, "display"))));
			for (n = 0; n < h; n++) e = a[n], !e.style || b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? l[n] || "" : "none");
			return a
		}

		function q(a, b, c) {
			return (a = Lb.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
		}

		function u(a, b, c, e, f) {
			b = c === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
			for (var l = 0; 4 > b; b += 2) "margin" === c && (l += g.css(a, c + Aa[b], !0, f)), e ? ("content" === c && (l -= g.css(a, "padding" + Aa[b], !0, f)), "margin" !== c && (l -= g.css(a, "border" +
				Aa[b] + "Width", !0, f))) : (l += g.css(a, "padding" + Aa[b], !0, f), "padding" !== c && (l += g.css(a, "border" + Aa[b] + "Width", !0, f)));
			return l
		}

		function F(a, b, c) {
			var e = !0,
				f = "width" === b ? a.offsetWidth : a.offsetHeight,
				l = Ba(a),
				n = g.support.boxSizing && "border-box" === g.css(a, "boxSizing", !1, l);
			if (0 >= f || null == f) {
				f = Ca(a, b, l);
				if (0 > f || null == f) f = a.style[b];
				if (Ra.test(f)) return f;
				e = n && (g.support.boxSizingReliable || f === a.style[b]);
				f = parseFloat(f) || 0
			}
			return f + u(a, b, c || (n ? "border" : "content"), e, l) + "px"
		}

		function I(a) {
			var b = B,
				c = sb[a];
			c ||
				(c = R(a, b), "none" !== c && c || (La = (La || g("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (La[0].contentWindow || La[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = R(a, b), La.detach()), sb[a] = c);
			return c
		}

		function R(a, b) {
			var c = g(b.createElement(a)).appendTo(b.body),
				e = g.css(c[0], "display");
			c.remove();
			return e
		}

		function S(a, b, c, e) {
			var f;
			if (g.isArray(b)) g.each(b, function(b, f) {
				c || Mb.test(a) ? e(a, f) : S(a + "[" +
					("object" === typeof f ? b : "") + "]", f, c, e)
			});
			else if (c || "object" !== g.type(b)) e(a, b);
			else
				for (f in b) S(a + "[" + f + "]", b[f], c, e)
		}

		function ca(a) {
			return function(b, c) {
				"string" !== typeof b && (c = b, b = "*");
				var e, f = 0,
					l = b.toLowerCase().match(ia) || [];
				if (g.isFunction(c))
					for (; e = l[f++];) "+" === e[0] ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(c)) : (a[e] = a[e] || []).push(c)
			}
		}

		function ha(a, b, c, e) {
			function f(h) {
				var k;
				l[h] = !0;
				g.each(a[h] || [], function(a, E) {
					var g = E(b, c, e);
					if ("string" === typeof g && !n && !l[g]) return b.dataTypes.unshift(g),
						f(g), !1;
					if (n) return !(k = g)
				});
				return k
			}
			var l = {},
				n = a === db;
			return f(b.dataTypes[0]) || !l["*"] && f("*")
		}

		function M(a, c) {
			var e, f, l = g.ajaxSettings.flatOptions || {};
			for (f in c) c[f] !== b && ((l[f] ? a : e || (e = {}))[f] = c[f]);
			e && g.extend(!0, a, e);
			return a
		}

		function L() {
			try {
				return new a.XMLHttpRequest
			} catch (b) {}
		}

		function T() {
			setTimeout(function() {
				Fa = b
			});
			return Fa = g.now()
		}

		function N(a, b) {
			g.each(b, function(b, c) {
				for (var e = (Ma[b] || []).concat(Ma["*"]), f = 0, g = e.length; f < g && !e[f].call(a, b, c); f++);
			})
		}

		function ja(a, b, c) {
			var e, f = 0,
				l = Sa.length,
				n = g.Deferred().always(function() {
					delete h.elem
				}),
				h = function() {
					if (e) return !1;
					for (var b = Fa || T(), b = Math.max(0, k.startTime + k.duration - b), c = 1 - (b / k.duration || 0), f = 0, g = k.tweens.length; f < g; f++) k.tweens[f].run(c);
					n.notifyWith(a, [k, c, b]);
					if (1 > c && g) return b;
					n.resolveWith(a, [k]);
					return !1
				},
				k = n.promise({
					elem: a,
					props: g.extend({}, b),
					opts: g.extend(!0, {
						specialEasing: {}
					}, c),
					originalProperties: b,
					originalOptions: c,
					startTime: Fa || T(),
					duration: c.duration,
					tweens: [],
					createTween: function(b, c) {
						var e = g.Tween(a, k.opts,
							b, c, k.opts.specialEasing[b] || k.opts.easing);
						k.tweens.push(e);
						return e
					},
					stop: function(b) {
						var c = 0,
							f = b ? k.tweens.length : 0;
						if (e) return this;
						for (e = !0; c < f; c++) k.tweens[c].run(1);
						b ? n.resolveWith(a, [k, b]) : n.rejectWith(a, [k, b]);
						return this
					}
				});
			c = k.props;
			for (fa(c, k.opts.specialEasing); f < l; f++)
				if (b = Sa[f].call(k, a, c, k.opts)) return b;
			N(k, c);
			g.isFunction(k.opts.start) && k.opts.start.call(a, k);
			g.fx.timer(g.extend(h, {
				elem: a,
				anim: k,
				queue: k.opts.queue
			}));
			return k.progress(k.opts.progress).done(k.opts.done, k.opts.complete).fail(k.opts.fail).always(k.opts.always)
		}

		function fa(a, b) {
			var c, e, f, l, n;
			for (f in a)
				if (e = g.camelCase(f), l = b[e], c = a[f], g.isArray(c) && (l = c[1], c = a[f] = c[0]), f !== e && (a[e] = c, delete a[f]), (n = g.cssHooks[e]) && "expand" in n)
					for (f in c = n.expand(c), delete a[e], c) f in a || (a[f] = c[f], b[f] = l);
				else b[e] = l
		}

		function Q(a, b, c, e, f) {
			return new Q.prototype.init(a, b, c, e, f)
		}

		function da(a, b) {
			var c, e = {
					height: a
				},
				f = 0;
			for (b = b ? 1 : 0; 4 > f; f += 2 - b) c = Aa[f], e["margin" + c] = e["padding" + c] = a;
			b && (e.opacity = e.width = a);
			return e
		}

		function na(a) {
			return g.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView ||
				a.parentWindow : !1
		}
		var O, Y, X = typeof b,
			B = a.document,
			y = a.location,
			ka = a.jQuery,
			la = a.$,
			P = {},
			W = [],
			wa = W.concat,
			ta = W.push,
			ga = W.slice,
			ya = W.indexOf,
			Ga = P.toString,
			V = P.hasOwnProperty,
			qa = "1.9.1".trim,
			g = function(a, b) {
				return new g.fn.init(a, b, Y)
			},
			oa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			ia = /\S+/g,
			ea = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			eb = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			Z = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			pa = /^[\],:{}\s]*$/,
			fb = /(?:^|:|,)(?:\s*\[)+/g,
			Ta = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
			Ua = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
			Va = /^-ms-/,
			gb = /-([\da-z])/gi,
			hb = function(a, b) {
				return b.toUpperCase()
			},
			ua = function(a) {
				if (B.addEventListener || "load" === a.type || "complete" === B.readyState) Wa(), g.ready()
			},
			Wa = function() {
				B.addEventListener ? (B.removeEventListener("DOMContentLoaded", ua, !1), a.removeEventListener("load", ua, !1)) : (B.detachEvent("onreadystatechange", ua), a.detachEvent("onload", ua))
			};
		g.fn = g.prototype = {
			jquery: "1.9.1",
			constructor: g,
			init: function(a, c, e) {
				var f;
				if (!a) return this;
				if ("string" === typeof a) {
					f = "<" === a.charAt(0) && ">" === a.charAt(a.length -
						1) && 3 <= a.length ? [null, a, null] : eb.exec(a);
					if (!f || !f[1] && c) return !c || c.jquery ? (c || e).find(a) : this.constructor(c).find(a);
					if (f[1]) {
						if (c = c instanceof g ? c[0] : c, g.merge(this, g.parseHTML(f[1], c && c.nodeType ? c.ownerDocument || c : B, !0)), Z.test(f[1]) && g.isPlainObject(c))
							for (f in c)
								if (g.isFunction(this[f])) this[f](c[f]);
								else this.attr(f, c[f])
					} else {
						if ((c = B.getElementById(f[2])) && c.parentNode) {
							if (c.id !== f[2]) return e.find(a);
							this.length = 1;
							this[0] = c
						}
						this.context = B;
						this.selector = a
					}
					return this
				}
				if (a.nodeType) return this.context =
					this[0] = a, this.length = 1, this;
				if (g.isFunction(a)) return e.ready(a);
				a.selector !== b && (this.selector = a.selector, this.context = a.context);
				return g.makeArray(a, this)
			},
			selector: "",
			length: 0,
			size: function() {
				return this.length
			},
			toArray: function() {
				return ga.call(this)
			},
			get: function(a) {
				return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
			},
			pushStack: function(a) {
				a = g.merge(this.constructor(), a);
				a.prevObject = this;
				a.context = this.context;
				return a
			},
			each: function(a, b) {
				return g.each(this, a, b)
			},
			ready: function(a) {
				g.ready.promise().done(a);
				return this
			},
			slice: function() {
				return this.pushStack(ga.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(a) {
				var b = this.length;
				a = +a + (0 > a ? b : 0);
				return this.pushStack(0 <= a && a < b ? [this[a]] : [])
			},
			map: function(a) {
				return this.pushStack(g.map(this, function(b, c) {
					return a.call(b, c, b)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: ta,
			sort: [].sort,
			splice: [].splice
		};
		g.fn.init.prototype = g.fn;
		g.extend = g.fn.extend = function() {
			var a, c,
				e, f, l, n = arguments[0] || {},
				h = 1,
				k = arguments.length,
				q = !1;
			"boolean" === typeof n && (q = n, n = arguments[1] || {}, h = 2);
			"object" === typeof n || g.isFunction(n) || (n = {});
			k === h && (n = this, --h);
			for (; h < k; h++)
				if (null != (l = arguments[h]))
					for (f in l) a = n[f], e = l[f], n !== e && (q && e && (g.isPlainObject(e) || (c = g.isArray(e))) ? (c ? (c = !1, a = a && g.isArray(a) ? a : []) : a = a && g.isPlainObject(a) ? a : {}, n[f] = g.extend(q, a, e)) : e !== b && (n[f] = e));
			return n
		};
		g.extend({
			noConflict: function(b) {
				a.$ === g && (a.$ = la);
				b && a.jQuery === g && (a.jQuery = ka);
				return g
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(a) {
				a ? g.readyWait++ : g.ready(!0)
			},
			ready: function(a) {
				if (!0 === a ? !--g.readyWait : !g.isReady) {
					if (!B.body) return setTimeout(g.ready);
					g.isReady = !0;
					!0 !== a && 0 < --g.readyWait || (O.resolveWith(B, [g]), g.fn.trigger && g(B).trigger("ready").off("ready"))
				}
			},
			isFunction: function(a) {
				return "function" === g.type(a)
			},
			isArray: Array.isArray || function(a) {
				return "array" === g.type(a)
			},
			isWindow: function(a) {
				return null != a && a == a.window
			},
			isNumeric: function(a) {
				return !isNaN(parseFloat(a)) && isFinite(a)
			},
			type: function(a) {
				return null ==
					a ? String(a) : "object" === typeof a || "function" === typeof a ? P[Ga.call(a)] || "object" : typeof a
			},
			isPlainObject: function(a) {
				if (!a || "object" !== g.type(a) || a.nodeType || g.isWindow(a)) return !1;
				try {
					if (a.constructor && !V.call(a, "constructor") && !V.call(a.constructor.prototype, "isPrototypeOf")) return !1
				} catch (c) {
					return !1
				}
				for (var e in a);
				return e === b || V.call(a, e)
			},
			isEmptyObject: function(a) {
				for (var b in a) return !1;
				return !0
			},
			error: function(a) {
				throw Error(a);
			},
			parseHTML: function(a, b, c) {
				if (!a || "string" !== typeof a) return null;
				"boolean" === typeof b && (c = b, b = !1);
				b = b || B;
				var e = Z.exec(a);
				c = !c && [];
				if (e) return [b.createElement(e[1])];
				e = g.buildFragment([a], b, c);
				c && g(c).remove();
				return g.merge([], e.childNodes)
			},
			parseJSON: function(b) {
				if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
				if (null === b) return b;
				if ("string" === typeof b && (b = g.trim(b)) && pa.test(b.replace(Ta, "@").replace(Ua, "]").replace(fb, ""))) return (new Function("return " + b))();
				g.error("Invalid JSON: " + b)
			},
			parseXML: function(c) {
				var e, f;
				if (!c || "string" !== typeof c) return null;
				try {
					a.DOMParser ?
						(f = new DOMParser, e = f.parseFromString(c, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(c))
				} catch (l) {
					e = b
				}
				e && e.documentElement && !e.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + c);
				return e
			},
			noop: function() {},
			globalEval: function(b) {
				b && g.trim(b) && (a.execScript || function(b) {
					a.eval.call(a, b)
				})(b)
			},
			camelCase: function(a) {
				return a.replace(Va, "ms-").replace(gb, hb)
			},
			nodeName: function(a, b) {
				return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
			},
			each: function(a,
				b, e) {
				var f, g = 0,
					l = a.length;
				f = c(a);
				if (e)
					if (f)
						for (; g < l && (f = b.apply(a[g], e), !1 !== f); g++);
					else
						for (g in a) {
							if (f = b.apply(a[g], e), !1 === f) break
						} else if (f)
							for (; g < l && (f = b.call(a[g], g, a[g]), !1 !== f); g++);
						else
							for (g in a)
								if (f = b.call(a[g], g, a[g]), !1 === f) break;
				return a
			},
			trim: qa && !qa.call("\ufeff\u00a0") ? function(a) {
				return null == a ? "" : qa.call(a)
			} : function(a) {
				return null == a ? "" : (a + "").replace(ea, "")
			},
			makeArray: function(a, b) {
				var e = b || [];
				null != a && (c(Object(a)) ? g.merge(e, "string" === typeof a ? [a] : a) : ta.call(e, a));
				return e
			},
			inArray: function(a, b, c) {
				var e;
				if (b) {
					if (ya) return ya.call(b, a, c);
					e = b.length;
					for (c = c ? 0 > c ? Math.max(0, e + c) : c : 0; c < e; c++)
						if (c in b && b[c] === a) return c
				}
				return -1
			},
			merge: function(a, c) {
				var e = c.length,
					f = a.length,
					g = 0;
				if ("number" === typeof e)
					for (; g < e; g++) a[f++] = c[g];
				else
					for (; c[g] !== b;) a[f++] = c[g++];
				a.length = f;
				return a
			},
			grep: function(a, b, c) {
				var e, f = [],
					g = 0,
					l = a.length;
				for (c = !!c; g < l; g++) e = !!b(a[g], g), c !== e && f.push(a[g]);
				return f
			},
			map: function(a, b, e) {
				var f, g = 0,
					l = a.length,
					n = [];
				if (c(a))
					for (; g < l; g++) f = b(a[g], g, e), null !=
						f && (n[n.length] = f);
				else
					for (g in a) f = b(a[g], g, e), null != f && (n[n.length] = f);
				return wa.apply([], n)
			},
			guid: 1,
			proxy: function(a, c) {
				var e, f;
				"string" === typeof c && (f = a[c], c = a, a = f);
				if (!g.isFunction(a)) return b;
				e = ga.call(arguments, 2);
				f = function() {
					return a.apply(c || this, e.concat(ga.call(arguments)))
				};
				f.guid = a.guid = a.guid || g.guid++;
				return f
			},
			access: function(a, c, e, f, l, n, h) {
				var k = 0,
					q = a.length,
					u = null == e;
				if ("object" === g.type(e))
					for (k in l = !0, e) g.access(a, c, k, e[k], !0, n, h);
				else if (f !== b && (l = !0, g.isFunction(f) || (h = !0),
						u && (h ? (c.call(a, f), c = null) : (u = c, c = function(a, b, c) {
							return u.call(g(a), c)
						})), c))
					for (; k < q; k++) c(a[k], e, h ? f : f.call(a[k], k, c(a[k], e)));
				return l ? a : u ? c.call(a) : q ? c(a[0], e) : n
			},
			now: function() {
				return (new Date).getTime()
			}
		});
		g.ready.promise = function(b) {
			if (!O)
				if (O = g.Deferred(), "complete" === B.readyState) setTimeout(g.ready);
				else if (B.addEventListener) B.addEventListener("DOMContentLoaded", ua, !1), a.addEventListener("load", ua, !1);
			else {
				B.attachEvent("onreadystatechange", ua);
				a.attachEvent("onload", ua);
				var c = !1;
				try {
					c =
						null == a.frameElement && B.documentElement
				} catch (e) {}
				c && c.doScroll && function Ib() {
					if (!g.isReady) {
						try {
							c.doScroll("left")
						} catch (a) {
							return setTimeout(Ib, 50)
						}
						Wa();
						g.ready()
					}
				}()
			}
			return O.promise(b)
		};
		g.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
			P["[object " + b + "]"] = b.toLowerCase()
		});
		Y = g(B);
		var Ja = {};
		g.Callbacks = function(a) {
			a = "string" === typeof a ? Ja[a] || e(a) : g.extend({}, a);
			var c, f, l, n, h, k, q = [],
				u = !a.once && [],
				C = function(b) {
					f = a.memory && b;
					l = !0;
					h = k || 0;
					k = 0;
					n = q.length;
					for (c = !0; q && h < n; h++)
						if (!1 === q[h].apply(b[0], b[1]) && a.stopOnFalse) {
							f = !1;
							break
						}
					c = !1;
					q && (u ? u.length && C(u.shift()) : f ? q = [] : m.disable())
				},
				m = {
					add: function() {
						if (q) {
							var b = q.length;
							(function Nb(b) {
								g.each(b, function(b, c) {
									var e = g.type(c);
									"function" === e ? a.unique && m.has(c) || q.push(c) : c && c.length && "string" !== e && Nb(c)
								})
							})(arguments);
							c ? n = q.length : f && (k = b, C(f))
						}
						return this
					},
					remove: function() {
						q && g.each(arguments, function(a, b) {
							for (var e; - 1 < (e = g.inArray(b, q, e));) q.splice(e, 1), c && (e <= n && n--, e <= h && h--)
						});
						return this
					},
					has: function(a) {
						return a ?
							-1 < g.inArray(a, q) : !(!q || !q.length)
					},
					empty: function() {
						q = [];
						return this
					},
					disable: function() {
						q = u = f = b;
						return this
					},
					disabled: function() {
						return !q
					},
					lock: function() {
						u = b;
						f || m.disable();
						return this
					},
					locked: function() {
						return !u
					},
					fireWith: function(a, b) {
						b = b || [];
						b = [a, b.slice ? b.slice() : b];
						!q || l && !u || (c ? u.push(b) : C(b));
						return this
					},
					fire: function() {
						m.fireWith(this, arguments);
						return this
					},
					fired: function() {
						return !!l
					}
				};
			return m
		};
		g.extend({
			Deferred: function(a) {
				var b = [
						["resolve", "done", g.Callbacks("once memory"), "resolved"],
						["reject", "fail", g.Callbacks("once memory"), "rejected"],
						["notify", "progress", g.Callbacks("memory")]
					],
					c = "pending",
					e = {
						state: function() {
							return c
						},
						always: function() {
							f.done(arguments).fail(arguments);
							return this
						},
						then: function() {
							var a = arguments;
							return g.Deferred(function(c) {
								g.each(b, function(b, E) {
									var l = E[0],
										n = g.isFunction(a[b]) && a[b];
									f[E[1]](function() {
										var a = n && n.apply(this, arguments);
										if (a && g.isFunction(a.promise)) a.promise().done(c.resolve).fail(c.reject).progress(c.notify);
										else c[l + "With"](this === e ?
											c.promise() : this, n ? [a] : arguments)
									})
								});
								a = null
							}).promise()
						},
						promise: function(a) {
							return null != a ? g.extend(a, e) : e
						}
					},
					f = {};
				e.pipe = e.then;
				g.each(b, function(a, E) {
					var g = E[2],
						l = E[3];
					e[E[1]] = g.add;
					l && g.add(function() {
						c = l
					}, b[a ^ 1][2].disable, b[2][2].lock);
					f[E[0]] = function() {
						f[E[0] + "With"](this === f ? e : this, arguments);
						return this
					};
					f[E[0] + "With"] = g.fireWith
				});
				e.promise(f);
				a && a.call(f, f);
				return f
			},
			when: function(a) {
				var b = 0,
					c = ga.call(arguments),
					e = c.length,
					f = 1 !== e || a && g.isFunction(a.promise) ? e : 0,
					l = 1 === f ? a : g.Deferred(),
					n = function(a, b, c) {
						return function(e) {
							b[a] = this;
							c[a] = 1 < arguments.length ? ga.call(arguments) : e;
							c === h ? l.notifyWith(b, c) : --f || l.resolveWith(b, c)
						}
					},
					h, k, q;
				if (1 < e)
					for (h = Array(e), k = Array(e), q = Array(e); b < e; b++) c[b] && g.isFunction(c[b].promise) ? c[b].promise().done(n(b, q, c)).fail(l.reject).progress(n(b, k, h)) : --f;
				f || l.resolveWith(q, c);
				return l.promise()
			}
		});
		g.support = function() {
			var b, c, e, f, l, n, h, k = B.createElement("div");
			k.setAttribute("className", "t");
			k.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			c = k.getElementsByTagName("*");
			e = k.getElementsByTagName("a")[0];
			if (!c || !e || !c.length) return {};
			f = B.createElement("select");
			l = f.appendChild(B.createElement("option"));
			c = k.getElementsByTagName("input")[0];
			e.style.cssText = "top:1px;float:left;opacity:.5";
			b = {
				getSetAttribute: "t" !== k.className,
				leadingWhitespace: 3 === k.firstChild.nodeType,
				tbody: !k.getElementsByTagName("tbody").length,
				htmlSerialize: !!k.getElementsByTagName("link").length,
				style: /top/.test(e.getAttribute("style")),
				hrefNormalized: "/a" === e.getAttribute("href"),
				opacity: /^0.5/.test(e.style.opacity),
				cssFloat: !!e.style.cssFloat,
				checkOn: !!c.value,
				optSelected: l.selected,
				enctype: !!B.createElement("form").enctype,
				html5Clone: "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML,
				boxModel: "CSS1Compat" === B.compatMode,
				deleteExpando: !0,
				noCloneEvent: !0,
				inlineBlockNeedsLayout: !1,
				shrinkWrapBlocks: !1,
				reliableMarginRight: !0,
				boxSizingReliable: !0,
				pixelPosition: !1
			};
			c.checked = !0;
			b.noCloneChecked = c.cloneNode(!0).checked;
			f.disabled = !0;
			b.optDisabled = !l.disabled;
			try {
				delete k.test
			} catch (q) {
				b.deleteExpando = !1
			}
			c = B.createElement("input");
			c.setAttribute("value", "");
			b.input = "" === c.getAttribute("value");
			c.value = "t";
			c.setAttribute("type", "radio");
			b.radioValue = "t" === c.value;
			c.setAttribute("checked", "t");
			c.setAttribute("name", "t");
			e = B.createDocumentFragment();
			e.appendChild(c);
			b.appendChecked = c.checked;
			b.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked;
			k.attachEvent && (k.attachEvent("onclick", function() {
				b.noCloneEvent = !1
			}), k.cloneNode(!0).click());
			for (h in {
					submit: !0,
					change: !0,
					focusin: !0
				}) k.setAttribute(e =
				"on" + h, "t"), b[h + "Bubbles"] = e in a || !1 === k.attributes[e].expando;
			k.style.backgroundClip = "content-box";
			k.cloneNode(!0).style.backgroundClip = "";
			b.clearCloneStyle = "content-box" === k.style.backgroundClip;
			g(function() {
				var c, e, f = B.getElementsByTagName("body")[0];
				f && (c = B.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(c).appendChild(k), k.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = k.getElementsByTagName("td"),
					e[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = n && 0 === e[0].offsetHeight, k.innerHTML = "", k.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === k.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !==
						(a.getComputedStyle(k, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(k, null) || {
							width: "4px"
						}).width, e = k.appendChild(B.createElement("div")), e.style.cssText = k.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", e.style.marginRight = e.style.width = "0", k.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)), typeof k.style.zoom !== X && (k.innerHTML = "", k.style.cssText =
						"padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === k.offsetWidth, k.style.display = "block", k.innerHTML = "<div></div>", k.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== k.offsetWidth, b.inlineBlockNeedsLayout && (f.style.zoom = 1)), f.removeChild(c), k = null)
			});
			c = f = e = l = e = c = null;
			return b
		}();
		var bb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
			Ka = /([A-Z])/g;
		g.extend({
			cache: {},
			expando: "jQuery" + ("1.9.1" + Math.random()).replace(/\D/g, ""),
			noData: {
				embed: !0,
				object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
				applet: !0
			},
			hasData: function(a) {
				a = a.nodeType ? g.cache[a[g.expando]] : a[g.expando];
				return !!a && !m(a)
			},
			data: function(a, b, c) {
				return f(a, b, c)
			},
			removeData: function(a, b) {
				return h(a, b)
			},
			_data: function(a, b, c) {
				return f(a, b, c, !0)
			},
			_removeData: function(a, b) {
				return h(a, b, !0)
			},
			acceptData: function(a) {
				if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
				var b = a.nodeName && g.noData[a.nodeName.toLowerCase()];
				return !b || !0 !== b && a.getAttribute("classid") === b
			}
		});
		g.fn.extend({
			data: function(a, c) {
				var e, f, l = this[0],
					n = 0,
					h = null;
				if (a === b) {
					if (this.length && (h = g.data(l), 1 === l.nodeType && !g._data(l, "parsedAttrs"))) {
						for (e = l.attributes; n < e.length; n++) f = e[n].name, f.indexOf("data-") || (f = g.camelCase(f.slice(5)), k(l, f, h[f]));
						g._data(l, "parsedAttrs", !0)
					}
					return h
				}
				return "object" === typeof a ? this.each(function() {
					g.data(this, a)
				}) : g.access(this, function(c) {
					if (c === b) return l ? k(l, a, g.data(l, a)) : null;
					this.each(function() {
						g.data(this,
							a, c)
					})
				}, null, c, 1 < arguments.length, null, !0)
			},
			removeData: function(a) {
				return this.each(function() {
					g.removeData(this, a)
				})
			}
		});
		g.extend({
			queue: function(a, b, c) {
				var e;
				if (a) return b = (b || "fx") + "queue", e = g._data(a, b), c && (!e || g.isArray(c) ? e = g._data(a, b, g.makeArray(c)) : e.push(c)), e || []
			},
			dequeue: function(a, b) {
				b = b || "fx";
				var c = g.queue(a, b),
					e = c.length,
					f = c.shift(),
					l = g._queueHooks(a, b),
					n = function() {
						g.dequeue(a, b)
					};
				"inprogress" === f && (f = c.shift(), e--);
				if (l.cur = f) "fx" === b && c.unshift("inprogress"), delete l.stop, f.call(a,
					n, l);
				!e && l && l.empty.fire()
			},
			_queueHooks: function(a, b) {
				var c = b + "queueHooks";
				return g._data(a, c) || g._data(a, c, {
					empty: g.Callbacks("once memory").add(function() {
						g._removeData(a, b + "queue");
						g._removeData(a, c)
					})
				})
			}
		});
		g.fn.extend({
			queue: function(a, c) {
				var e = 2;
				"string" !== typeof a && (c = a, a = "fx", e--);
				return arguments.length < e ? g.queue(this[0], a) : c === b ? this : this.each(function() {
					var b = g.queue(this, a, c);
					g._queueHooks(this, a);
					"fx" === a && "inprogress" !== b[0] && g.dequeue(this, a)
				})
			},
			dequeue: function(a) {
				return this.each(function() {
					g.dequeue(this,
						a)
				})
			},
			delay: function(a, b) {
				a = g.fx ? g.fx.speeds[a] || a : a;
				return this.queue(b || "fx", function(b, c) {
					var e = setTimeout(b, a);
					c.stop = function() {
						clearTimeout(e)
					}
				})
			},
			clearQueue: function(a) {
				return this.queue(a || "fx", [])
			},
			promise: function(a, c) {
				var e, f = 1,
					l = g.Deferred(),
					n = this,
					h = this.length,
					k = function() {
						--f || l.resolveWith(n, [n])
					};
				"string" !== typeof a && (c = a, a = b);
				for (a = a || "fx"; h--;)(e = g._data(n[h], a + "queueHooks")) && e.empty && (f++, e.empty.add(k));
				k();
				return l.promise(c)
			}
		});
		var va, Xa, Na = /[\t\r\n]/g,
			Oa = /\r/g,
			Ya = /^(?:input|select|textarea|button|object)$/i,
			Za = /^(?:a|area)$/i,
			ra = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
			Ha = /^(?:checked|selected)$/i,
			n = g.support.getSetAttribute,
			C = g.support.input;
		g.fn.extend({
			attr: function(a, b) {
				return g.access(this, g.attr, a, b, 1 < arguments.length)
			},
			removeAttr: function(a) {
				return this.each(function() {
					g.removeAttr(this, a)
				})
			},
			prop: function(a, b) {
				return g.access(this, g.prop, a, b, 1 < arguments.length)
			},
			removeProp: function(a) {
				a = g.propFix[a] || a;
				return this.each(function() {
					try {
						this[a] =
							b, delete this[a]
					} catch (c) {}
				})
			},
			addClass: function(a) {
				var b, c, e, f, l, n = 0,
					h = this.length;
				b = "string" === typeof a && a;
				if (g.isFunction(a)) return this.each(function(b) {
					g(this).addClass(a.call(this, b, this.className))
				});
				if (b)
					for (b = (a || "").match(ia) || []; n < h; n++)
						if (c = this[n], e = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Na, " ") : " ")) {
							for (l = 0; f = b[l++];) 0 > e.indexOf(" " + f + " ") && (e += f + " ");
							c.className = g.trim(e)
						}
				return this
			},
			removeClass: function(a) {
				var b, c, e, f, l, n = 0,
					h = this.length;
				b = 0 === arguments.length ||
					"string" === typeof a && a;
				if (g.isFunction(a)) return this.each(function(b) {
					g(this).removeClass(a.call(this, b, this.className))
				});
				if (b)
					for (b = (a || "").match(ia) || []; n < h; n++)
						if (c = this[n], e = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Na, " ") : "")) {
							for (l = 0; f = b[l++];)
								for (; 0 <= e.indexOf(" " + f + " ");) e = e.replace(" " + f + " ", " ");
							c.className = a ? g.trim(e) : ""
						}
				return this
			},
			toggleClass: function(a, b) {
				var c = typeof a,
					e = "boolean" === typeof b;
				return g.isFunction(a) ? this.each(function(c) {
					g(this).toggleClass(a.call(this,
						c, this.className, b), b)
				}) : this.each(function() {
					if ("string" === c)
						for (var f, l = 0, n = g(this), h = b, k = a.match(ia) || []; f = k[l++];) h = e ? h : !n.hasClass(f), n[h ? "addClass" : "removeClass"](f);
					else if (c === X || "boolean" === c) this.className && g._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : g._data(this, "__className__") || ""
				})
			},
			hasClass: function(a) {
				a = " " + a + " ";
				for (var b = 0, c = this.length; b < c; b++)
					if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Na, " ").indexOf(a)) return !0;
				return !1
			},
			val: function(a) {
				var c, e, f, l = this[0];
				if (arguments.length) return f = g.isFunction(a), this.each(function(c) {
					var l = g(this);
					1 === this.nodeType && (c = f ? a.call(this, c, l.val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : g.isArray(c) && (c = g.map(c, function(a) {
						return null == a ? "" : a + ""
					})), e = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], e && "set" in e && e.set(this, c, "value") !== b || (this.value = c))
				});
				if (l) {
					if ((e = g.valHooks[l.type] || g.valHooks[l.nodeName.toLowerCase()]) && "get" in e && (c = e.get(l, "value")) !== b) return c;
					c = l.value;
					return "string" === typeof c ? c.replace(Oa, "") : null == c ? "" : c
				}
			}
		});
		g.extend({
			valHooks: {
				option: {
					get: function(a) {
						var b = a.attributes.value;
						return !b || b.specified ? a.value : a.text
					}
				},
				select: {
					get: function(a) {
						for (var b, c = a.options, e = a.selectedIndex, f = (a = "select-one" === a.type || 0 > e) ? null : [], l = a ? e + 1 : c.length, n = 0 > e ? l : a ? e : 0; n < l; n++)
							if (b = c[n], !(!b.selected && n !== e || (g.support.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && g.nodeName(b.parentNode, "optgroup"))) {
								b = g(b).val();
								if (a) return b;
								f.push(b)
							}
						return f
					},
					set: function(a, b) {
						var c = g.makeArray(b);
						g(a).find("option").each(function() {
							this.selected = 0 <= g.inArray(g(this).val(), c)
						});
						c.length || (a.selectedIndex = -1);
						return c
					}
				}
			},
			attr: function(a, c, e) {
				var f, l, n;
				l = a.nodeType;
				if (a && 3 !== l && 8 !== l && 2 !== l) {
					if (typeof a.getAttribute === X) return g.prop(a, c, e);
					if (l = 1 !== l || !g.isXMLDoc(a)) c = c.toLowerCase(), f = g.attrHooks[c] || (ra.test(c) ? Xa : va);
					if (e !== b)
						if (null === e) g.removeAttr(a, c);
						else {
							if (f && l && "set" in f && (n = f.set(a, e, c)) !== b) return n;
							a.setAttribute(c, e + "");
							return e
						} else {
						if (f && l && "get" in f && null !== (n = f.get(a, c))) return n;
						typeof a.getAttribute !== X && (n = a.getAttribute(c));
						return null == n ? b : n
					}
				}
			},
			removeAttr: function(a, b) {
				var c, e, f = 0,
					l = b && b.match(ia);
				if (l && 1 === a.nodeType)
					for (; c = l[f++];) e = g.propFix[c] || c, ra.test(c) ? !n && Ha.test(c) ? a[g.camelCase("default-" + c)] = a[e] = !1 : a[e] = !1 : g.attr(a, c, ""), a.removeAttribute(n ? c : e)
			},
			attrHooks: {
				type: {
					set: function(a, b) {
						if (!g.support.radioValue && "radio" === b && g.nodeName(a, "input")) {
							var c = a.value;
							a.setAttribute("type", b);
							c && (a.value =
								c);
							return b
						}
					}
				}
			},
			propFix: {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},
			prop: function(a, c, e) {
				var f, l, n;
				n = a.nodeType;
				if (a && 3 !== n && 8 !== n && 2 !== n) {
					if (n = 1 !== n || !g.isXMLDoc(a)) c = g.propFix[c] || c, l = g.propHooks[c];
					return e !== b ? l && "set" in l && (f = l.set(a, e, c)) !== b ? f : a[c] = e : l && "get" in l && null !== (f =
						l.get(a, c)) ? f : a[c]
				}
			},
			propHooks: {
				tabIndex: {
					get: function(a) {
						var c = a.getAttributeNode("tabindex");
						return c && c.specified ? parseInt(c.value, 10) : Ya.test(a.nodeName) || Za.test(a.nodeName) && a.href ? 0 : b
					}
				}
			}
		});
		Xa = {
			get: function(a, c) {
				var e = g.prop(a, c),
					f = "boolean" === typeof e && a.getAttribute(c);
				return (e = "boolean" === typeof e ? C && n ? null != f : Ha.test(c) ? a[g.camelCase("default-" + c)] : !!f : a.getAttributeNode(c)) && !1 !== e.value ? c.toLowerCase() : b
			},
			set: function(a, b, c) {
				!1 === b ? g.removeAttr(a, c) : C && n || !Ha.test(c) ? a.setAttribute(!n &&
					g.propFix[c] || c, c) : a[g.camelCase("default-" + c)] = a[c] = !0;
				return c
			}
		};
		C && n || (g.attrHooks.value = {
			get: function(a, c) {
				var e = a.getAttributeNode(c);
				return g.nodeName(a, "input") ? a.defaultValue : e && e.specified ? e.value : b
			},
			set: function(a, b, c) {
				if (g.nodeName(a, "input")) a.defaultValue = b;
				else return va && va.set(a, b, c)
			}
		});
		n || (va = g.valHooks.button = {
			get: function(a, c) {
				var e = a.getAttributeNode(c);
				return e && ("id" === c || "name" === c || "coords" === c ? "" !== e.value : e.specified) ? e.value : b
			},
			set: function(a, c, e) {
				var f = a.getAttributeNode(e);
				f || a.setAttributeNode(f = a.ownerDocument.createAttribute(e));
				f.value = c += "";
				return "value" === e || c === a.getAttribute(e) ? c : b
			}
		}, g.attrHooks.contenteditable = {
			get: va.get,
			set: function(a, b, c) {
				va.set(a, "" === b ? !1 : b, c)
			}
		}, g.each(["width", "height"], function(a, b) {
			g.attrHooks[b] = g.extend(g.attrHooks[b], {
				set: function(a, c) {
					if ("" === c) return a.setAttribute(b, "auto"), c
				}
			})
		}));
		g.support.hrefNormalized || (g.each(["href", "src", "width", "height"], function(a, c) {
			g.attrHooks[c] = g.extend(g.attrHooks[c], {
				get: function(a) {
					a = a.getAttribute(c,
						2);
					return null == a ? b : a
				}
			})
		}), g.each(["href", "src"], function(a, b) {
			g.propHooks[b] = {
				get: function(a) {
					return a.getAttribute(b, 4)
				}
			}
		}));
		g.support.style || (g.attrHooks.style = {
			get: function(a) {
				return a.style.cssText || b
			},
			set: function(a, b) {
				return a.style.cssText = b + ""
			}
		});
		g.support.optSelected || (g.propHooks.selected = g.extend(g.propHooks.selected, {
			get: function(a) {
				if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
				return null
			}
		}));
		g.support.enctype || (g.propFix.enctype = "encoding");
		g.support.checkOn ||
			g.each(["radio", "checkbox"], function() {
				g.valHooks[this] = {
					get: function(a) {
						return null === a.getAttribute("value") ? "on" : a.value
					}
				}
			});
		g.each(["radio", "checkbox"], function() {
			g.valHooks[this] = g.extend(g.valHooks[this], {
				set: function(a, b) {
					if (g.isArray(b)) return a.checked = 0 <= g.inArray(g(a).val(), b)
				}
			})
		});
		var aa = /^(?:input|select|textarea)$/i,
			ma = /^key/,
			xa = /^(?:mouse|contextmenu)|click/,
			Pa = /^(?:focusinfocus|focusoutblur)$/,
			$a = /^([^.]*)(?:\.(.+)|)$/;
		g.event = {
			global: {},
			add: function(a, c, e, f, l) {
				var n, h, k, q, u, C, m, p,
					aa;
				if (k = g._data(a)) {
					e.handler && (q = e, e = q.handler, l = q.selector);
					e.guid || (e.guid = g.guid++);
					(h = k.events) || (h = k.events = {});
					(u = k.handle) || (u = k.handle = function(a) {
						return typeof g === X || a && g.event.triggered === a.type ? b : g.event.dispatch.apply(u.elem, arguments)
					}, u.elem = a);
					c = (c || "").match(ia) || [""];
					for (k = c.length; k--;) n = $a.exec(c[k]) || [], p = C = n[1], aa = (n[2] || "").split(".").sort(), n = g.event.special[p] || {}, p = (l ? n.delegateType : n.bindType) || p, n = g.event.special[p] || {}, C = g.extend({
						type: p,
						origType: C,
						data: f,
						handler: e,
						guid: e.guid,
						selector: l,
						needsContext: l && g.expr.match.needsContext.test(l),
						namespace: aa.join(".")
					}, q), (m = h[p]) || (m = h[p] = [], m.delegateCount = 0, n.setup && !1 !== n.setup.call(a, f, aa, u) || (a.addEventListener ? a.addEventListener(p, u, !1) : a.attachEvent && a.attachEvent("on" + p, u))), n.add && (n.add.call(a, C), C.handler.guid || (C.handler.guid = e.guid)), l ? m.splice(m.delegateCount++, 0, C) : m.push(C), g.event.global[p] = !0;
					a = null
				}
			},
			remove: function(a, b, c, e, f) {
				var l, n, h, k, q, u, C, m, p, aa, y, F = g.hasData(a) && g._data(a);
				if (F && (u = F.events)) {
					b = (b || "").match(ia) ||
						[""];
					for (q = b.length; q--;)
						if (h = $a.exec(b[q]) || [], p = y = h[1], aa = (h[2] || "").split(".").sort(), p) {
							C = g.event.special[p] || {};
							p = (e ? C.delegateType : C.bindType) || p;
							m = u[p] || [];
							h = h[2] && new RegExp("(^|\\.)" + aa.join("\\.(?:.*\\.|)") + "(\\.|$)");
							for (k = l = m.length; l--;) n = m[l], !f && y !== n.origType || c && c.guid !== n.guid || h && !h.test(n.namespace) || e && e !== n.selector && ("**" !== e || !n.selector) || (m.splice(l, 1), n.selector && m.delegateCount--, C.remove && C.remove.call(a, n));
							k && !m.length && (C.teardown && !1 !== C.teardown.call(a, aa, F.handle) ||
								g.removeEvent(a, p, F.handle), delete u[p])
						} else
							for (p in u) g.event.remove(a, p + b[q], c, e, !0);
					g.isEmptyObject(u) && (delete F.handle, g._removeData(a, "events"))
				}
			},
			trigger: function(c, e, f, l) {
				var n, h, k, q, u, C, m = [f || B],
					p = V.call(c, "type") ? c.type : c;
				u = V.call(c, "namespace") ? c.namespace.split(".") : [];
				k = n = f = f || B;
				if (3 !== f.nodeType && 8 !== f.nodeType && !Pa.test(p + g.event.triggered) && (0 <= p.indexOf(".") && (u = p.split("."), p = u.shift(), u.sort()), h = 0 > p.indexOf(":") && "on" + p, c = c[g.expando] ? c : new g.Event(p, "object" === typeof c && c),
						c.isTrigger = !0, c.namespace = u.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = f), e = null == e ? [c] : g.makeArray(e, [c]), u = g.event.special[p] || {}, l || !u.trigger || !1 !== u.trigger.apply(f, e))) {
					if (!l && !u.noBubble && !g.isWindow(f)) {
						q = u.delegateType || p;
						Pa.test(q + p) || (k = k.parentNode);
						for (; k; k = k.parentNode) m.push(k), n = k;
						n === (f.ownerDocument || B) && m.push(n.defaultView || n.parentWindow || a)
					}
					for (C = 0;
						(k = m[C++]) && !c.isPropagationStopped();) c.type =
						1 < C ? q : u.bindType || p, (n = (g._data(k, "events") || {})[c.type] && g._data(k, "handle")) && n.apply(k, e), (n = h && k[h]) && g.acceptData(k) && n.apply && !1 === n.apply(k, e) && c.preventDefault();
					c.type = p;
					if (!(l || c.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.ownerDocument, e) || "click" === p && g.nodeName(f, "a")) && g.acceptData(f) && h && f[p] && !g.isWindow(f)) {
						(n = f[h]) && (f[h] = null);
						g.event.triggered = p;
						try {
							f[p]()
						} catch (aa) {}
						g.event.triggered = b;
						n && (f[h] = n)
					}
					return c.result
				}
			},
			dispatch: function(a) {
				a = g.event.fix(a);
				var c, e, f,
					l, n = [],
					h = ga.call(arguments);
				c = (g._data(this, "events") || {})[a.type] || [];
				var k = g.event.special[a.type] || {};
				h[0] = a;
				a.delegateTarget = this;
				if (!k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
					n = g.event.handlers.call(this, a, c);
					for (c = 0;
						(f = n[c++]) && !a.isPropagationStopped();)
						for (a.currentTarget = f.elem, l = 0;
							(e = f.handlers[l++]) && !a.isImmediatePropagationStopped();)
							if (!a.namespace_re || a.namespace_re.test(e.namespace)) a.handleObj = e, a.data = e.data, e = ((g.event.special[e.origType] || {}).handle || e.handler).apply(f.elem,
								h), e !== b && !1 === (a.result = e) && (a.preventDefault(), a.stopPropagation());
					k.postDispatch && k.postDispatch.call(this, a);
					return a.result
				}
			},
			handlers: function(a, c) {
				var e, f, l, n, h = [],
					k = c.delegateCount,
					q = a.target;
				if (k && q.nodeType && (!a.button || "click" !== a.type))
					for (; q != this; q = q.parentNode || this)
						if (1 === q.nodeType && (!0 !== q.disabled || "click" !== a.type)) {
							l = [];
							for (n = 0; n < k; n++) f = c[n], e = f.selector + " ", l[e] === b && (l[e] = f.needsContext ? 0 <= g(e, this).index(q) : g.find(e, this, null, [q]).length), l[e] && l.push(f);
							l.length && h.push({
								elem: q,
								handlers: l
							})
						}
				k < c.length && h.push({
					elem: this,
					handlers: c.slice(k)
				});
				return h
			},
			fix: function(a) {
				if (a[g.expando]) return a;
				var b, c, e;
				b = a.type;
				var f = a,
					l = this.fixHooks[b];
				l || (this.fixHooks[b] = l = xa.test(b) ? this.mouseHooks : ma.test(b) ? this.keyHooks : {});
				e = l.props ? this.props.concat(l.props) : this.props;
				a = new g.Event(f);
				for (b = e.length; b--;) c = e[b], a[c] = f[c];
				a.target || (a.target = f.srcElement || B);
				3 === a.target.nodeType && (a.target = a.target.parentNode);
				a.metaKey = !!a.metaKey;
				return l.filter ? l.filter(a, f) : a
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: ["char", "charCode", "key", "keyCode"],
				filter: function(a, b) {
					null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
					return a
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(a, c) {
					var e, f, g = c.button,
						l = c.fromElement;
					null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || B, f = e.documentElement, e = e.body, a.pageX = c.clientX + (f && f.scrollLeft || e && e.scrollLeft || 0) - (f && f.clientLeft ||
						e && e.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || e && e.scrollTop || 0) - (f && f.clientTop || e && e.clientTop || 0));
					!a.relatedTarget && l && (a.relatedTarget = l === a.target ? c.toElement : l);
					a.which || g === b || (a.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0);
					return a
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				click: {
					trigger: function() {
						if (g.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
					}
				},
				focus: {
					trigger: function() {
						if (this !== B.activeElement && this.focus) try {
							return this.focus(), !1
						} catch (a) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						if (this === B.activeElement && this.blur) return this.blur(), !1
					},
					delegateType: "focusout"
				},
				beforeunload: {
					postDispatch: function(a) {
						a.result !== b && (a.originalEvent.returnValue = a.result)
					}
				}
			},
			simulate: function(a, b, c, e) {
				a = g.extend(new g.Event, c, {
					type: a,
					isSimulated: !0,
					originalEvent: {}
				});
				e ? g.event.trigger(a, null, b) : g.event.dispatch.call(b, a);
				a.isDefaultPrevented() && c.preventDefault()
			}
		};
		g.removeEvent = B.removeEventListener ? function(a, b, c) {
				a.removeEventListener && a.removeEventListener(b, c, !1)
			} :
			function(a, b, c) {
				b = "on" + b;
				a.detachEvent && (typeof a[b] === X && (a[b] = null), a.detachEvent(b, c))
			};
		g.Event = function(a, b) {
			if (!(this instanceof g.Event)) return new g.Event(a, b);
			a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? p : r) : this.type = a;
			b && g.extend(this, b);
			this.timeStamp = a && a.timeStamp || g.now();
			this[g.expando] = !0
		};
		g.Event.prototype = {
			isDefaultPrevented: r,
			isPropagationStopped: r,
			isImmediatePropagationStopped: r,
			preventDefault: function() {
				var a = this.originalEvent;
				this.isDefaultPrevented = p;
				a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
			},
			stopPropagation: function() {
				var a = this.originalEvent;
				this.isPropagationStopped = p;
				a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
				this.isImmediatePropagationStopped = p;
				this.stopPropagation()
			}
		};
		g.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function(a, b) {
			g.event.special[a] = {
				delegateType: b,
				bindType: b,
				handle: function(a) {
					var c,
						e = a.relatedTarget,
						f = a.handleObj;
					if (!e || e !== this && !g.contains(this, e)) a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b;
					return c
				}
			}
		});
		g.support.submitBubbles || (g.event.special.submit = {
			setup: function() {
				if (g.nodeName(this, "form")) return !1;
				g.event.add(this, "click._submit keypress._submit", function(a) {
					a = a.target;
					(a = g.nodeName(a, "input") || g.nodeName(a, "button") ? a.form : b) && !g._data(a, "submitBubbles") && (g.event.add(a, "submit._submit", function(a) {
						a._submit_bubble = !0
					}), g._data(a, "submitBubbles", !0))
				})
			},
			postDispatch: function(a) {
				a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && g.event.simulate("submit", this.parentNode, a, !0))
			},
			teardown: function() {
				if (g.nodeName(this, "form")) return !1;
				g.event.remove(this, "._submit")
			}
		});
		g.support.changeBubbles || (g.event.special.change = {
			setup: function() {
				if (aa.test(this.nodeName)) {
					if ("checkbox" === this.type || "radio" === this.type) g.event.add(this, "propertychange._change", function(a) {
							"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
						}),
						g.event.add(this, "click._change", function(a) {
							this._just_changed && !a.isTrigger && (this._just_changed = !1);
							g.event.simulate("change", this, a, !0)
						});
					return !1
				}
				g.event.add(this, "beforeactivate._change", function(a) {
					a = a.target;
					aa.test(a.nodeName) && !g._data(a, "changeBubbles") && (g.event.add(a, "change._change", function(a) {
						!this.parentNode || a.isSimulated || a.isTrigger || g.event.simulate("change", this.parentNode, a, !0)
					}), g._data(a, "changeBubbles", !0))
				})
			},
			handle: function(a) {
				var b = a.target;
				if (this !== b || a.isSimulated ||
					a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
			},
			teardown: function() {
				g.event.remove(this, "._change");
				return !aa.test(this.nodeName)
			}
		});
		g.support.focusinBubbles || g.each({
			focus: "focusin",
			blur: "focusout"
		}, function(a, b) {
			var c = 0,
				e = function(a) {
					g.event.simulate(b, a.target, g.event.fix(a), !0)
				};
			g.event.special[b] = {
				setup: function() {
					0 === c++ && B.addEventListener(a, e, !0)
				},
				teardown: function() {
					0 === --c && B.removeEventListener(a, e, !0)
				}
			}
		});
		g.fn.extend({
			on: function(a,
				c, e, f, l) {
				var n, h;
				if ("object" === typeof a) {
					"string" !== typeof c && (e = e || c, c = b);
					for (n in a) this.on(n, c, e, a[n], l);
					return this
				}
				null == e && null == f ? (f = c, e = c = b) : null == f && ("string" === typeof c ? (f = e, e = b) : (f = e, e = c, c = b));
				if (!1 === f) f = r;
				else if (!f) return this;
				1 === l && (h = f, f = function(a) {
					g().off(a);
					return h.apply(this, arguments)
				}, f.guid = h.guid || (h.guid = g.guid++));
				return this.each(function() {
					g.event.add(this, a, f, e, c)
				})
			},
			one: function(a, b, c, e) {
				return this.on(a, b, c, e, 1)
			},
			off: function(a, c, e) {
				var f;
				if (a && a.preventDefault && a.handleObj) return f =
					a.handleObj, g(a.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
				if ("object" === typeof a) {
					for (f in a) this.off(f, c, a[f]);
					return this
				}
				if (!1 === c || "function" === typeof c) e = c, c = b;
				!1 === e && (e = r);
				return this.each(function() {
					g.event.remove(this, a, e, c)
				})
			},
			bind: function(a, b, c) {
				return this.on(a, null, b, c)
			},
			unbind: function(a, b) {
				return this.off(a, null, b)
			},
			delegate: function(a, b, c, e) {
				return this.on(b, a, c, e)
			},
			undelegate: function(a, b, c) {
				return 1 === arguments.length ? this.off(a,
					"**") : this.off(b, a || "**", c)
			},
			trigger: function(a, b) {
				return this.each(function() {
					g.event.trigger(a, b, this)
				})
			},
			triggerHandler: function(a, b) {
				var c = this[0];
				if (c) return g.event.trigger(a, b, c, !0)
			}
		});
		(function(a, b) {
			function c(a) {
				return wa.test(a + "")
			}

			function e() {
				var a, b = [];
				return a = function(c, e) {
					b.push(c += " ") > t.cacheLength && delete a[b.shift()];
					return a[c] = e
				}
			}

			function f(a) {
				a[z] = !0;
				return a
			}

			function l(a) {
				var b = w.createElement("div");
				try {
					return a(b)
				} catch (c) {
					return !1
				} finally {}
			}

			function n(a, b, c, e) {
				var f, g, l,
					h, E;
				(b ? b.ownerDocument || b : G) !== w && ga(b);
				b = b || w;
				c = c || [];
				if (!a || "string" !== typeof a) return c;
				if (1 !== (h = b.nodeType) && 9 !== h) return [];
				if (!v && !e) {
					if (f = ha.exec(a))
						if (l = f[1])
							if (9 === h)
								if ((g = b.getElementById(l)) && g.parentNode) {
									if (g.id === l) return c.push(g), c
								} else return c;
					else {
						if (b.ownerDocument && (g = b.ownerDocument.getElementById(l)) && H(b, g) && g.id === l) return c.push(g), c
					} else {
						if (f[2]) return qa.apply(c, W.call(b.getElementsByTagName(a), 0)), c;
						if ((l = f[3]) && L.getByClassName && b.getElementsByClassName) return qa.apply(c,
							W.call(b.getElementsByClassName(l), 0)), c
					}
					if (L.qsa && !Y.test(a)) {
						f = !0;
						g = z;
						l = b;
						E = 9 === h && a;
						if (1 === h && "object" !== b.nodeName.toLowerCase()) {
							h = C(a);
							(f = b.getAttribute("id")) ? g = f.replace(ib, "\\$&"): b.setAttribute("id", g);
							g = "[id='" + g + "'] ";
							for (l = h.length; l--;) h[l] = g + m(h[l]);
							l = ca.test(a) && b.parentNode || b;
							E = h.join(",")
						}
						if (E) try {
							return qa.apply(c, W.call(l.querySelectorAll(E), 0)), c
						} catch (k) {} finally {
							f || b.removeAttribute("id")
						}
					}
				}
				var q;
				a: {
					a = a.replace(K, "$1");
					g = C(a);
					if (!e && 1 === g.length) {
						f = g[0] = g[0].slice(0);
						if (2 <
							f.length && "ID" === (q = f[0]).type && 9 === b.nodeType && !v && t.relative[f[1].type]) {
							b = t.find.ID(q.matches[0].replace(ea, oa), b)[0];
							if (!b) {
								q = c;
								break a
							}
							a = a.slice(f.shift().value.length)
						}
						for (h = P.needsContext.test(a) ? 0 : f.length; h--;) {
							q = f[h];
							if (t.relative[l = q.type]) break;
							if (l = t.find[l])
								if (e = l(q.matches[0].replace(ea, oa), ca.test(f[0].type) && b.parentNode || b)) {
									f.splice(h, 1);
									a = e.length && m(f);
									if (!a) {
										qa.apply(c, W.call(e, 0));
										q = c;
										break a
									}
									break
								}
						}
					}
					N(a, g)(e, b, v, c, ca.test(a));
					q = c
				}
				return q
			}

			function h(a, b) {
				var c = b && a,
					e = c && (~b.sourceIndex ||
						-2147483648) - (~a.sourceIndex || -2147483648);
				if (e) return e;
				if (c)
					for (; c = c.nextSibling;)
						if (c === b) return -1;
				return a ? 1 : -1
			}

			function k(a) {
				return function(b) {
					return "input" === b.nodeName.toLowerCase() && b.type === a
				}
			}

			function q(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return ("input" === c || "button" === c) && b.type === a
				}
			}

			function u(a) {
				return f(function(b) {
					b = +b;
					return f(function(c, e) {
						for (var f, g = a([], c.length, b), l = g.length; l--;) c[f = g[l]] && (c[f] = !(e[f] = c[f]))
					})
				})
			}

			function C(a, b) {
				var c, e, f, g, l, h, E;
				if (l = fa[a +
						" "]) return b ? 0 : l.slice(0);
				l = a;
				h = [];
				for (E = t.preFilter; l;) {
					if (!c || (e = Ga.exec(l))) e && (l = l.slice(e[0].length) || l), h.push(f = []);
					c = !1;
					if (e = $a.exec(l)) c = e.shift(), f.push({
						value: c,
						type: e[0].replace(K, " ")
					}), l = l.slice(c.length);
					for (g in t.filter) !(e = P[g].exec(l)) || E[g] && !(e = E[g](e)) || (c = e.shift(), f.push({
						value: c,
						type: g,
						matches: e
					}), l = l.slice(c.length));
					if (!c) break
				}
				return b ? l.length : l ? n.error(a) : fa(a, h).slice(0)
			}

			function m(a) {
				for (var b = 0, c = a.length, e = ""; b < c; b++) e += a[b].value;
				return e
			}

			function p(a, b, c) {
				var e =
					b.dir,
					f = c && "parentNode" === e,
					l = da++;
				return b.first ? function(b, c, l) {
					for (; b = b[e];)
						if (1 === b.nodeType || f) return a(b, c, l)
				} : function(b, c, g) {
					var n, h, E, k = D + " " + l;
					if (g)
						for (; b = b[e];) {
							if ((1 === b.nodeType || f) && a(b, c, g)) return !0
						} else
							for (; b = b[e];)
								if (1 === b.nodeType || f)
									if (E = b[z] || (b[z] = {}), (h = E[e]) && h[0] === k) {
										if (!0 === (n = h[1]) || n === r) return !0 === n
									} else if (h = E[e] = [k], h[1] = a(b, c, g) || r, !0 === h[1]) return !0
				}
			}

			function aa(a) {
				return 1 < a.length ? function(b, c, e) {
					for (var f = a.length; f--;)
						if (!a[f](b, c, e)) return !1;
					return !0
				} : a[0]
			}

			function y(a,
				b, c, e, f) {
				for (var l, g = [], n = 0, h = a.length, E = null != b; n < h; n++)
					if (l = a[n])
						if (!c || c(l, e, f)) g.push(l), E && b.push(n);
				return g
			}

			function F(a, b, c, e, l, g) {
				e && !e[z] && (e = F(e));
				l && !l[z] && (l = F(l, g));
				return f(function(f, g, h, E) {
					var k, q, u = [],
						C = [],
						U = g.length,
						m;
					if (!(m = f)) {
						m = b || "*";
						for (var ba = h.nodeType ? [h] : h, p = [], Ea = 0, aa = ba.length; Ea < aa; Ea++) n(m, ba[Ea], p);
						m = p
					}
					m = !a || !f && b ? m : y(m, u, a, h, E);
					ba = c ? l || (f ? a : U || e) ? [] : g : m;
					c && c(m, ba, h, E);
					if (e)
						for (k = y(ba, C), e(k, [], h, E), h = k.length; h--;)
							if (q = k[h]) ba[C[h]] = !(m[C[h]] = q);
					if (f) {
						if (l || a) {
							if (l) {
								k =
									[];
								for (h = ba.length; h--;)(q = ba[h]) && k.push(m[h] = q);
								l(null, ba = [], k, E)
							}
							for (h = ba.length; h--;)(q = ba[h]) && -1 < (k = l ? S.call(f, q) : u[h]) && (f[k] = !(g[k] = q))
						}
					} else ba = y(ba === g ? ba.splice(U, ba.length) : ba), l ? l(null, g, ba, E) : qa.apply(g, ba)
				})
			}

			function A(a) {
				var b, c, e, f = a.length,
					l = t.relative[a[0].type];
				c = l || t.relative[" "];
				for (var g = l ? 1 : 0, n = p(function(a) {
						return a === b
					}, c, !0), h = p(function(a) {
						return -1 < S.call(b, a)
					}, c, !0), E = [function(a, c, e) {
						return !l && (e || c !== xa) || ((b = c).nodeType ? n(a, c, e) : h(a, c, e))
					}]; g < f; g++)
					if (c = t.relative[a[g].type]) E =
						[p(aa(E), c)];
					else {
						c = t.filter[a[g].type].apply(null, a[g].matches);
						if (c[z]) {
							for (e = ++g; e < f && !t.relative[a[e].type]; e++);
							return F(1 < g && aa(E), 1 < g && m(a.slice(0, g - 1)).replace(K, "$1"), c, g < e && A(a.slice(g, e)), e < f && A(a = a.slice(e)), e < f && m(a))
						}
						E.push(c)
					}
				return aa(E)
			}

			function s(a, b) {
				var c = 0,
					e = 0 < b.length,
					l = 0 < a.length,
					g = function(f, g, h, E, k) {
						var q, u, C = [],
							m = 0,
							U = "0",
							ba = f && [],
							p = null != k,
							Ea = xa,
							aa = f || l && t.find.TAG("*", k && g.parentNode || g),
							F = D += null == Ea ? 1 : Math.random() || .1;
						p && (xa = g !== w && g, r = c);
						for (; null != (k = aa[U]); U++) {
							if (l &&
								k) {
								for (q = 0; u = a[q++];)
									if (u(k, g, h)) {
										E.push(k);
										break
									}
								p && (D = F, r = ++c)
							}
							e && ((k = !u && k) && m--, f && ba.push(k))
						}
						m += U;
						if (e && U !== m) {
							for (q = 0; u = b[q++];) u(ba, C, g, h);
							if (f) {
								if (0 < m)
									for (; U--;) ba[U] || C[U] || (C[U] = J.call(E));
								C = y(C)
							}
							qa.apply(E, C);
							p && !f && 0 < C.length && 1 < m + b.length && n.uniqueSort(E)
						}
						p && (D = F, xa = Ea);
						return ba
					};
				return e ? f(g) : g
			}

			function ma() {}
			var B, r, t, x, M, N, I, xa, ga, w, O, v, Y, Q, X, H, R, z = "sizzle" + -new Date,
				G = a.document,
				L = {},
				D = 0,
				da = 0,
				Pa = e(),
				fa = e(),
				ja = e(),
				ka = typeof b,
				T = [],
				J = T.pop,
				qa = T.push,
				W = T.slice,
				S = T.indexOf || function(a) {
					for (var b =
							0, c = this.length; b < c; b++)
						if (this[b] === a) return b;
					return -1
				},
				T = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
				V = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + T + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
				ya = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + V.replace(3, 8) + ")*)|.*)\\)|)",
				K = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
					"g"),
				Ga = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
				$a = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
				na = new RegExp(ya),
				la = new RegExp("^" + T + "$"),
				P = {
					ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
					CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
					NAME: /^\[name=['"]?((?:\\.|[\w-]|[^\x00-\xa0])+)['"]?\]/,
					TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + V),
					PSEUDO: new RegExp("^" + ya),
					CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
					needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
				},
				ca = /[\x20\t\r\n\f]*[+~]/,
				wa = /^[^{]+\{\s*\[native code/,
				ha = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ta = /^(?:input|select|textarea|button)$/i,
				Z = /^h\d$/i,
				ib = /'|\\/g,
				ia = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
				ea = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
				oa = function(a, b) {
					var c = "0x" + b - 65536;
					return c !== c ? b : 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(c >> 10 | 55296,
						c & 1023 | 56320)
				};
			try {
				W.call(G.documentElement.childNodes, 0)[0].nodeType
			} catch (pa) {
				W = function(a) {
					for (var b, c = []; b = this[a++];) c.push(b);
					return c
				}
			}
			M = n.isXML = function(a) {
				return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
			};
			ga = n.setDocument = function(a) {
				var e = a ? a.ownerDocument || a : G;
				if (e === w || 9 !== e.nodeType || !e.documentElement) return w;
				w = e;
				O = e.documentElement;
				v = M(e);
				L.tagNameNoComments = l(function(a) {
					a.appendChild(e.createComment(""));
					return !a.getElementsByTagName("*").length
				});
				L.attributes =
					l(function(a) {
						a.innerHTML = "<select></select>";
						a = typeof a.lastChild.getAttribute("multiple");
						return "boolean" !== a && "string" !== a
					});
				L.getByClassName = l(function(a) {
					a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
					if (!a.getElementsByClassName || !a.getElementsByClassName("e").length) return !1;
					a.lastChild.className = "e";
					return 2 === a.getElementsByClassName("e").length
				});
				L.getByName = l(function(a) {
					a.id = z + 0;
					a.innerHTML = "<a name='" + z + "'></a><div name='" + z + "'></div>";
					O.insertBefore(a, O.firstChild);
					var b = e.getElementsByName && e.getElementsByName(z).length === 2 + e.getElementsByName(z + 0).length;
					L.getIdNotName = !e.getElementById(z);
					O.removeChild(a);
					return b
				});
				t.attrHandle = l(function(a) {
					a.innerHTML = "<a href='#'></a>";
					return a.firstChild && typeof a.firstChild.getAttribute !== ka && "#" === a.firstChild.getAttribute("href")
				}) ? {} : {
					href: function(a) {
						return a.getAttribute("href", 2)
					},
					type: function(a) {
						return a.getAttribute("type")
					}
				};
				L.getIdNotName ? (t.find.ID = function(a, b) {
					if (typeof b.getElementById !== ka && !v) {
						var c =
							b.getElementById(a);
						return c && c.parentNode ? [c] : []
					}
				}, t.filter.ID = function(a) {
					var b = a.replace(ea, oa);
					return function(a) {
						return a.getAttribute("id") === b
					}
				}) : (t.find.ID = function(a, c) {
					if (typeof c.getElementById !== ka && !v) {
						var e = c.getElementById(a);
						return e ? e.id === a || typeof e.getAttributeNode !== ka && e.getAttributeNode("id").value === a ? [e] : b : []
					}
				}, t.filter.ID = function(a) {
					var b = a.replace(ea, oa);
					return function(a) {
						return (a = typeof a.getAttributeNode !== ka && a.getAttributeNode("id")) && a.value === b
					}
				});
				t.find.TAG = L.tagNameNoComments ?
					function(a, b) {
						if (typeof b.getElementsByTagName !== ka) return b.getElementsByTagName(a)
					} : function(a, b) {
						var c, e = [],
							f = 0,
							g = b.getElementsByTagName(a);
						if ("*" === a) {
							for (; c = g[f++];) 1 === c.nodeType && e.push(c);
							return e
						}
						return g
					};
				t.find.NAME = L.getByName && function(a, b) {
					if (typeof b.getElementsByName !== ka) return b.getElementsByName(name)
				};
				t.find.CLASS = L.getByClassName && function(a, b) {
					if (typeof b.getElementsByClassName !== ka && !v) return b.getElementsByClassName(a)
				};
				Q = [];
				Y = [":focus"];
				if (L.qsa = c(e.querySelectorAll)) l(function(a) {
					a.innerHTML =
						"<select><option selected=''></option></select>";
					a.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
					a.querySelectorAll(":checked").length || Y.push(":checked")
				}), l(function(a) {
					a.innerHTML = "<input type='hidden' i=''/>";
					a.querySelectorAll("[i^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
					a.querySelectorAll(":enabled").length || Y.push(":enabled", ":disabled");
					a.querySelectorAll("*,:x");
					Y.push(",.*:")
				});
				(L.matchesSelector =
					c(X = O.matchesSelector || O.mozMatchesSelector || O.webkitMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && l(function(a) {
					L.disconnectedMatch = X.call(a, "div");
					X.call(a, "[s!='']:x");
					Q.push("!=", ya)
				});
				Y = new RegExp(Y.join("|"));
				Q = new RegExp(Q.join("|"));
				H = c(O.contains) || O.compareDocumentPosition ? function(a, b) {
					var c = 9 === a.nodeType ? a.documentElement : a,
						e = b && b.parentNode;
					return a === e || !!(e && 1 === e.nodeType && (c.contains ? c.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
				} : function(a,
					b) {
					if (b)
						for (; b = b.parentNode;)
							if (b === a) return !0;
					return !1
				};
				R = O.compareDocumentPosition ? function(a, b) {
					var c;
					return a === b ? (I = !0, 0) : (c = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) ? c & 1 || a.parentNode && 11 === a.parentNode.nodeType ? a === e || H(G, a) ? -1 : b === e || H(G, b) ? 1 : 0 : c & 4 ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
				} : function(a, b) {
					var c, f = 0;
					c = a.parentNode;
					var g = b.parentNode,
						l = [a],
						n = [b];
					if (a === b) return I = !0, 0;
					if (!c || !g) return a === e ? -1 : b === e ? 1 : c ? -1 : g ? 1 : 0;
					if (c === g) return h(a, b);
					for (c =
						a; c = c.parentNode;) l.unshift(c);
					for (c = b; c = c.parentNode;) n.unshift(c);
					for (; l[f] === n[f];) f++;
					return f ? h(l[f], n[f]) : l[f] === G ? -1 : n[f] === G ? 1 : 0
				};
				I = !1;
				[0, 0].sort(R);
				L.detectDuplicates = I;
				return w
			};
			n.matches = function(a, b) {
				return n(a, null, null, b)
			};
			n.matchesSelector = function(a, b) {
				(a.ownerDocument || a) !== w && ga(a);
				b = b.replace(ia, "='$1']");
				if (!(!L.matchesSelector || v || Q && Q.test(b) || Y.test(b))) try {
					var c = X.call(a, b);
					if (c || L.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
				} catch (e) {}
				return 0 < n(b, w, null, [a]).length
			};
			n.contains = function(a, b) {
				(a.ownerDocument || a) !== w && ga(a);
				return H(a, b)
			};
			n.attr = function(a, b) {
				var c;
				(a.ownerDocument || a) !== w && ga(a);
				v || (b = b.toLowerCase());
				return (c = t.attrHandle[b]) ? c(a) : v || L.attributes ? a.getAttribute(b) : ((c = a.getAttributeNode(b)) || a.getAttribute(b)) && !0 === a[b] ? b : c && c.specified ? c.value : null
			};
			n.error = function(a) {
				throw Error("Syntax error, unrecognized expression: " + a);
			};
			n.uniqueSort = function(a) {
				var b, c = [],
					e = 1,
					f = 0;
				I = !L.detectDuplicates;
				a.sort(R);
				if (I) {
					for (; b = a[e]; e++) b ===
						a[e - 1] && (f = c.push(e));
					for (; f--;) a.splice(c[f], 1)
				}
				return a
			};
			x = n.getText = function(a) {
				var b, c = "",
					e = 0;
				b = a.nodeType;
				if (!b)
					for (; b = a[e]; e++) c += x(b);
				else if (1 === b || 9 === b || 11 === b) {
					if ("string" === typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
				} else if (3 === b || 4 === b) return a.nodeValue;
				return c
			};
			t = n.selectors = {
				cacheLength: 50,
				createPseudo: f,
				match: P,
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(a) {
						a[1] = a[1].replace(ea, oa);
						a[3] = (a[4] || a[5] || "").replace(ea, oa);
						"~=" === a[2] && (a[3] = " " + a[3] + " ");
						return a.slice(0, 4)
					},
					CHILD: function(a) {
						a[1] = a[1].toLowerCase();
						"nth" === a[1].slice(0, 3) ? (a[3] || n.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && n.error(a[0]);
						return a
					},
					PSEUDO: function(a) {
						var b, c = !a[5] && a[2];
						if (P.CHILD.test(a[0])) return null;
						a[4] ? a[2] = a[4] : c && na.test(c) && (b = C(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) &&
							(a[0] = a[0].slice(0, b), a[2] = c.slice(0, b));
						return a.slice(0, 3)
					}
				},
				filter: {
					TAG: function(a) {
						if ("*" === a) return function() {
							return !0
						};
						a = a.replace(ea, oa).toLowerCase();
						return function(b) {
							return b.nodeName && b.nodeName.toLowerCase() === a
						}
					},
					CLASS: function(a) {
						var b = Pa[a + " "];
						return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && Pa(a, function(a) {
							return b.test(a.className || typeof a.getAttribute !== ka && a.getAttribute("class") || "")
						})
					},
					ATTR: function(a, b, c) {
						return function(e) {
							e = n.attr(e, a);
							if (null == e) return "!=" === b;
							if (!b) return !0;
							e += "";
							return "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && -1 < e.indexOf(c) : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? -1 < (" " + e + " ").indexOf(c) : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1
						}
					},
					CHILD: function(a, b, c, e, f) {
						var g = "nth" !== a.slice(0, 3),
							l = "last" !== a.slice(-4),
							n = "of-type" === b;
						return 1 === e && 0 === f ? function(a) {
							return !!a.parentNode
						} : function(b, c, h) {
							var E, k, q, u, C;
							c = g !== l ? "nextSibling" : "previousSibling";
							var U = b.parentNode,
								m = n && b.nodeName.toLowerCase();
							h = !h && !n;
							if (U) {
								if (g) {
									for (; c;) {
										for (k = b; k = k[c];)
											if (n ? k.nodeName.toLowerCase() === m : 1 === k.nodeType) return !1;
										C = c = "only" === a && !C && "nextSibling"
									}
									return !0
								}
								C = [l ? U.firstChild : U.lastChild];
								if (l && h)
									for (h = U[z] || (U[z] = {}), E = h[a] || [], u = E[0] === D && E[1], q = E[0] === D && E[2], k = u && U.childNodes[u]; k = ++u && k && k[c] || (q = u = 0) || C.pop();) {
										if (1 === k.nodeType && ++q && k === b) {
											h[a] = [D, u, q];
											break
										}
									} else if (h && (E = (b[z] || (b[z] = {}))[a]) && E[0] === D) q = E[1];
									else
										for (;
											(k = ++u && k && k[c] || (q = u = 0) || C.pop()) && ((n ? k.nodeName.toLowerCase() !== m : 1 !== k.nodeType) ||
												!++q || (h && ((k[z] || (k[z] = {}))[a] = [D, q]), k !== b)););
								q -= f;
								return q === e || 0 === q % e && 0 <= q / e
							}
						}
					},
					PSEUDO: function(a, b) {
						var c, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || n.error("unsupported pseudo: " + a);
						return e[z] ? e(b) : 1 < e.length ? (c = [a, a, "", b], t.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function(a, c) {
							for (var f, g = e(a, b), l = g.length; l--;) f = S.call(a, g[l]), a[f] = !(c[f] = g[l])
						}) : function(a) {
							return e(a, 0, c)
						}) : e
					}
				},
				pseudos: {
					not: f(function(a) {
						var b = [],
							c = [],
							e = N(a.replace(K, "$1"));
						return e[z] ? f(function(a, b, c, f) {
							f =
								e(a, null, f, []);
							for (var g = a.length; g--;)
								if (c = f[g]) a[g] = !(b[g] = c)
						}) : function(a, f, g) {
							b[0] = a;
							e(b, null, g, c);
							return !c.pop()
						}
					}),
					has: f(function(a) {
						return function(b) {
							return 0 < n(a, b).length
						}
					}),
					contains: f(function(a) {
						return function(b) {
							return -1 < (b.textContent || b.innerText || x(b)).indexOf(a)
						}
					}),
					lang: f(function(a) {
						la.test(a || "") || n.error("unsupported lang: " + a);
						a = a.replace(ea, oa).toLowerCase();
						return function(b) {
							var c;
							do
								if (c = v ? b.getAttribute("xml:lang") || b.getAttribute("lang") : b.lang) return c = c.toLowerCase(),
									c === a || 0 === c.indexOf(a + "-");
							while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
					}),
					target: function(b) {
						var c = a.location && a.location.hash;
						return c && c.slice(1) === b.id
					},
					root: function(a) {
						return a === O
					},
					focus: function(a) {
						return a === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
					},
					enabled: function(a) {
						return !1 === a.disabled
					},
					disabled: function(a) {
						return !0 === a.disabled
					},
					checked: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && !!a.checked || "option" === b && !!a.selected
					},
					selected: function(a) {
						a.parentNode &&
							a.parentNode.selectedIndex;
						return !0 === a.selected
					},
					empty: function(a) {
						for (a = a.firstChild; a; a = a.nextSibling)
							if ("@" < a.nodeName || 3 === a.nodeType || 4 === a.nodeType) return !1;
						return !0
					},
					parent: function(a) {
						return !t.pseudos.empty(a)
					},
					header: function(a) {
						return Z.test(a.nodeName)
					},
					input: function(a) {
						return ta.test(a.nodeName)
					},
					button: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b
					},
					text: function(a) {
						var b;
						return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null ==
							(b = a.getAttribute("type")) || b.toLowerCase() === a.type)
					},
					first: u(function() {
						return [0]
					}),
					last: u(function(a, b) {
						return [b - 1]
					}),
					eq: u(function(a, b, c) {
						return [0 > c ? c + b : c]
					}),
					even: u(function(a, b) {
						for (var c = 0; c < b; c += 2) a.push(c);
						return a
					}),
					odd: u(function(a, b) {
						for (var c = 1; c < b; c += 2) a.push(c);
						return a
					}),
					lt: u(function(a, b, c) {
						for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
						return a
					}),
					gt: u(function(a, b, c) {
						for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
						return a
					})
				}
			};
			for (B in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) t.pseudos[B] = k(B);
			for (B in {
					submit: !0,
					reset: !0
				}) t.pseudos[B] = q(B);
			N = n.compile = function(a, b) {
				var c, e = [],
					f = [],
					g = ja[a + " "];
				if (!g) {
					b || (b = C(a));
					for (c = b.length; c--;) g = A(b[c]), g[z] ? e.push(g) : f.push(g);
					g = ja(a, s(f, e))
				}
				return g
			};
			t.pseudos.nth = t.pseudos.eq;
			t.filters = ma.prototype = t.pseudos;
			t.setFilters = new ma;
			ga();
			n.attr = g.attr;
			g.find = n;
			g.expr = n.selectors;
			g.expr[":"] = g.expr.pseudos;
			g.unique = n.uniqueSort;
			g.text = n.getText;
			g.isXMLDoc = n.isXML;
			g.contains = n.contains
		})(a);
		var ib = /Until$/,
			Ob = /^(?:parents|prev(?:Until|All))/,
			Jb = /^.[^:#\[\.,]*$/,
			tb = g.expr.match.needsContext,
			Pb = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		g.fn.extend({
			find: function(a) {
				var b, c, e, f = this.length;
				if ("string" !== typeof a) return e = this, this.pushStack(g(a).filter(function() {
					for (b = 0; b < f; b++)
						if (g.contains(e[b], this)) return !0
				}));
				c = [];
				for (b = 0; b < f; b++) g.find(a, this[b], c);
				c = this.pushStack(1 < f ? g.unique(c) : c);
				c.selector = (this.selector ? this.selector + " " : "") + a;
				return c
			},
			has: function(a) {
				var b, c = g(a, this),
					e = c.length;
				return this.filter(function() {
					for (b = 0; b < e; b++)
						if (g.contains(this, c[b])) return !0
				})
			},
			not: function(a) {
				return this.pushStack(A(this,
					a, !1))
			},
			filter: function(a) {
				return this.pushStack(A(this, a, !0))
			},
			is: function(a) {
				return !!a && ("string" === typeof a ? tb.test(a) ? 0 <= g(a, this.context).index(this[0]) : 0 < g.filter(a, this).length : 0 < this.filter(a).length)
			},
			closest: function(a, b) {
				for (var c, e = 0, f = this.length, l = [], n = tb.test(a) || "string" !== typeof a ? g(a, b || this.context) : 0; e < f; e++)
					for (c = this[e]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
						if (n ? -1 < n.index(c) : g.find.matchesSelector(c, a)) {
							l.push(c);
							break
						}
						c = c.parentNode
					}
				return this.pushStack(1 < l.length ?
					g.unique(l) : l)
			},
			index: function(a) {
				return a ? "string" === typeof a ? g.inArray(this[0], g(a)) : g.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(a, b) {
				var c = "string" === typeof a ? g(a, b) : g.makeArray(a && a.nodeType ? [a] : a),
					c = g.merge(this.get(), c);
				return this.pushStack(g.unique(c))
			},
			addBack: function(a) {
				return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
			}
		});
		g.fn.andSelf = g.fn.addBack;
		g.each({
			parent: function(a) {
				return (a = a.parentNode) && 11 !== a.nodeType ?
					a : null
			},
			parents: function(a) {
				return g.dir(a, "parentNode")
			},
			parentsUntil: function(a, b, c) {
				return g.dir(a, "parentNode", c)
			},
			next: function(a) {
				return t(a, "nextSibling")
			},
			prev: function(a) {
				return t(a, "previousSibling")
			},
			nextAll: function(a) {
				return g.dir(a, "nextSibling")
			},
			prevAll: function(a) {
				return g.dir(a, "previousSibling")
			},
			nextUntil: function(a, b, c) {
				return g.dir(a, "nextSibling", c)
			},
			prevUntil: function(a, b, c) {
				return g.dir(a, "previousSibling", c)
			},
			siblings: function(a) {
				return g.sibling((a.parentNode || {}).firstChild,
					a)
			},
			children: function(a) {
				return g.sibling(a.firstChild)
			},
			contents: function(a) {
				return g.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : g.merge([], a.childNodes)
			}
		}, function(a, b) {
			g.fn[a] = function(c, e) {
				var f = g.map(this, b, c);
				ib.test(a) || (e = c);
				e && "string" === typeof e && (f = g.filter(e, f));
				f = 1 < this.length && !Pb[a] ? g.unique(f) : f;
				1 < this.length && Ob.test(a) && (f = f.reverse());
				return this.pushStack(f)
			}
		});
		g.extend({
			filter: function(a, b, c) {
				c && (a = ":not(" + a + ")");
				return 1 === b.length ? g.find.matchesSelector(b[0],
					a) ? [b[0]] : [] : g.find.matches(a, b)
			},
			dir: function(a, c, e) {
				var f = [];
				for (a = a[c]; a && 9 !== a.nodeType && (e === b || 1 !== a.nodeType || !g(a).is(e));) 1 === a.nodeType && f.push(a), a = a[c];
				return f
			},
			sibling: function(a, b) {
				for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
				return c
			}
		});
		var qb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			Qb = / jQuery\d+="(?:null|\d+)"/g,
			ub = new RegExp("<(?:" + qb + ")[\\s/>]",
				"i"),
			jb = /^\s+/,
			vb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			wb = /<([\w:]+)/,
			xb = /<tbody/i,
			Rb = /<|&#?\w+;/,
			Sb = /<(?:script|style|link)/i,
			cb = /^(?:checkbox|radio)$/i,
			Tb = /checked\s*(?:[^=]|=\s*.checked.)/i,
			yb = /^$|\/(?:java|ecma)script/i,
			Kb = /^true\/(.*)/,
			Ub = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			sa = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				area: [1, "<map>", "</map>"],
				param: [1, "<object>", "</object>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: g.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
			},
			kb = H(B).appendChild(B.createElement("div"));
		sa.optgroup = sa.option;
		sa.tbody = sa.tfoot = sa.colgroup = sa.caption = sa.thead;
		sa.th = sa.td;
		g.fn.extend({
			text: function(a) {
				return g.access(this, function(a) {
						return a === b ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(a))
					},
					null, a, arguments.length)
			},
			wrapAll: function(a) {
				if (g.isFunction(a)) return this.each(function(b) {
					g(this).wrapAll(a.call(this, b))
				});
				if (this[0]) {
					var b = g(a, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && b.insertBefore(this[0]);
					b.map(function() {
						for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
						return a
					}).append(this)
				}
				return this
			},
			wrapInner: function(a) {
				return g.isFunction(a) ? this.each(function(b) {
					g(this).wrapInner(a.call(this, b))
				}) : this.each(function() {
					var b = g(this),
						c = b.contents();
					c.length ? c.wrapAll(a) : b.append(a)
				})
			},
			wrap: function(a) {
				var b = g.isFunction(a);
				return this.each(function(c) {
					g(this).wrapAll(b ? a.call(this, c) : a)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
				}).end()
			},
			append: function() {
				return this.domManip(arguments, !0, function(a) {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(a)
				})
			},
			prepend: function() {
				return this.domManip(arguments, !0, function(a) {
					1 !== this.nodeType && 11 !==
						this.nodeType && 9 !== this.nodeType || this.insertBefore(a, this.firstChild)
				})
			},
			before: function() {
				return this.domManip(arguments, !1, function(a) {
					this.parentNode && this.parentNode.insertBefore(a, this)
				})
			},
			after: function() {
				return this.domManip(arguments, !1, function(a) {
					this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
				})
			},
			remove: function(a, b) {
				for (var c, e = 0; null != (c = this[e]); e++)
					if (!a || 0 < g.filter(a, [c]).length) b || 1 !== c.nodeType || g.cleanData(x(c)), c.parentNode && (b && g.contains(c.ownerDocument, c) &&
						D(x(c, "script")), c.parentNode.removeChild(c));
				return this
			},
			empty: function() {
				for (var a, b = 0; null != (a = this[b]); b++) {
					for (1 === a.nodeType && g.cleanData(x(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
					a.options && g.nodeName(a, "select") && (a.options.length = 0)
				}
				return this
			},
			clone: function(a, b) {
				a = null == a ? !1 : a;
				b = null == b ? a : b;
				return this.map(function() {
					return g.clone(this, a, b)
				})
			},
			html: function(a) {
				return g.access(this, function(a) {
					var c = this[0] || {},
						e = 0,
						f = this.length;
					if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Qb,
						"") : b;
					if (!("string" !== typeof a || Sb.test(a) || !g.support.htmlSerialize && ub.test(a) || !g.support.leadingWhitespace && jb.test(a) || sa[(wb.exec(a) || ["", ""])[1].toLowerCase()])) {
						a = a.replace(vb, "<$1></$2>");
						try {
							for (; e < f; e++) c = this[e] || {}, 1 === c.nodeType && (g.cleanData(x(c, !1)), c.innerHTML = a);
							c = 0
						} catch (l) {}
					}
					c && this.empty().append(a)
				}, null, a, arguments.length)
			},
			replaceWith: function(a) {
				g.isFunction(a) || "string" === typeof a || (a = g(a).not(this).detach());
				return this.domManip([a], !0, function(a) {
					var b = this.nextSibling,
						c = this.parentNode;
					c && (g(this).remove(), c.insertBefore(a, b))
				})
			},
			detach: function(a) {
				return this.remove(a, !0)
			},
			domManip: function(a, c, e) {
				a = wa.apply([], a);
				var f, l, n, h, k = 0,
					q = this.length,
					u = this,
					C = q - 1,
					m = a[0],
					p = g.isFunction(m);
				if (p || !(1 >= q || "string" !== typeof m || g.support.checkClone) && Tb.test(m)) return this.each(function(f) {
					var g = u.eq(f);
					p && (a[0] = m.call(this, f, c ? g.html() : b));
					g.domManip(a, c, e)
				});
				if (q && (h = g.buildFragment(a, this[0].ownerDocument, !1, this), f = h.firstChild, 1 === h.childNodes.length && (h = f), f)) {
					c = c &&
						g.nodeName(f, "tr");
					n = g.map(x(h, "script"), G);
					for (l = n.length; k < q; k++) f = h, k !== C && (f = g.clone(f, !0, !0), l && g.merge(n, x(f, "script"))), e.call(c && g.nodeName(this[k], "table") ? s(this[k], "tbody") : this[k], f, k);
					if (l)
						for (h = n[n.length - 1].ownerDocument, g.map(n, w), k = 0; k < l; k++) f = n[k], yb.test(f.type || "") && !g._data(f, "globalEval") && g.contains(h, f) && (f.src ? g.ajax({
							url: f.src,
							type: "GET",
							dataType: "script",
							async: !1,
							global: !1,
							"throws": !0
						}) : g.globalEval((f.text || f.textContent || f.innerHTML || "").replace(Ub, "")));
					h = f = null
				}
				return this
			}
		});
		g.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(a, b) {
			g.fn[a] = function(a) {
				for (var c = 0, e = [], f = g(a), l = f.length - 1; c <= l; c++) a = c === l ? this : this.clone(!0), g(f[c])[b](a), ta.apply(e, a.get());
				return this.pushStack(e)
			}
		});
		g.extend({
			clone: function(a, b, c) {
				var e, f, l, n, h, k = g.contains(a.ownerDocument, a);
				g.support.html5Clone || g.isXMLDoc(a) || !ub.test("<" + a.nodeName + ">") ? l = a.cloneNode(!0) : (kb.innerHTML = a.outerHTML, kb.removeChild(l = kb.firstChild));
				if (!(g.support.noCloneEvent && g.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || g.isXMLDoc(a)))
					for (e = x(l), h = x(a), n = 0; null != (f = h[n]); ++n)
						if (e[n]) {
							var q = e[n],
								u = void 0,
								C = void 0,
								m = void 0;
							if (1 === q.nodeType) {
								u = q.nodeName.toLowerCase();
								if (!g.support.noCloneEvent && q[g.expando]) {
									m = g._data(q);
									for (C in m.events) g.removeEvent(q, C, m.handle);
									q.removeAttribute(g.expando)
								}
								if ("script" === u && q.text !== f.text) G(q).text = f.text, w(q);
								else if ("object" === u) q.parentNode && (q.outerHTML = f.outerHTML), g.support.html5Clone &&
									f.innerHTML && !g.trim(q.innerHTML) && (q.innerHTML = f.innerHTML);
								else if ("input" === u && cb.test(f.type)) q.defaultChecked = q.checked = f.checked, q.value !== f.value && (q.value = f.value);
								else if ("option" === u) q.defaultSelected = q.selected = f.defaultSelected;
								else if ("input" === u || "textarea" === u) q.defaultValue = f.defaultValue
							}
						}
				if (b)
					if (c)
						for (h = h || x(a), e = e || x(l), n = 0; null != (f = h[n]); n++) v(f, e[n]);
					else v(a, l);
				e = x(l, "script");
				0 < e.length && D(e, !k && x(a, "script"));
				return l
			},
			buildFragment: function(a, b, c, e) {
				for (var f, l, n, h, k, q, u =
						a.length, C = H(b), m = [], p = 0; p < u; p++)
					if ((l = a[p]) || 0 === l)
						if ("object" === g.type(l)) g.merge(m, l.nodeType ? [l] : l);
						else if (Rb.test(l)) {
					n = n || C.appendChild(b.createElement("div"));
					h = (wb.exec(l) || ["", ""])[1].toLowerCase();
					q = sa[h] || sa._default;
					n.innerHTML = q[1] + l.replace(vb, "<$1></$2>") + q[2];
					for (f = q[0]; f--;) n = n.lastChild;
					!g.support.leadingWhitespace && jb.test(l) && m.push(b.createTextNode(jb.exec(l)[0]));
					if (!g.support.tbody)
						for (f = (l = "table" !== h || xb.test(l) ? "<table>" !== q[1] || xb.test(l) ? 0 : n : n.firstChild) && l.childNodes.length; f--;) g.nodeName(k =
							l.childNodes[f], "tbody") && !k.childNodes.length && l.removeChild(k);
					g.merge(m, n.childNodes);
					for (n.textContent = ""; n.firstChild;) n.removeChild(n.firstChild);
					n = C.lastChild
				} else m.push(b.createTextNode(l));
				n && C.removeChild(n);
				g.support.appendChecked || g.grep(x(m, "input"), z);
				for (p = 0; l = m[p++];)
					if (!e || -1 === g.inArray(l, e))
						if (a = g.contains(l.ownerDocument, l), n = x(C.appendChild(l), "script"), a && D(n), c)
							for (f = 0; l = n[f++];) yb.test(l.type || "") && c.push(l);
				return C
			},
			cleanData: function(a, b) {
				for (var c, e, f, l, n = 0, h = g.expando,
						k = g.cache, q = g.support.deleteExpando, u = g.event.special; null != (c = a[n]); n++)
					if (b || g.acceptData(c))
						if (l = (f = c[h]) && k[f]) {
							if (l.events)
								for (e in l.events) u[e] ? g.event.remove(c, e) : g.removeEvent(c, e, l.handle);
							k[f] && (delete k[f], q ? delete c[h] : typeof c.removeAttribute !== X ? c.removeAttribute(h) : c[h] = null, W.push(f))
						}
			}
		});
		var La, Ba, Ca, lb = /alpha\([^)]*\)/i,
			Vb = /opacity\s*=\s*([^)]*)/,
			Wb = /^(top|right|bottom|left)$/,
			Xb = /^(none|table(?!-c[ea]).+)/,
			zb = /^margin/,
			Lb = new RegExp("^(" + oa + ")(.*)$", "i"),
			Ra = new RegExp("^(" + oa +
				")(?!px)[a-z%]+$", "i"),
			Yb = new RegExp("^([+-])=(" + oa + ")", "i"),
			sb = {
				BODY: "block"
			},
			Zb = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Ab = {
				letterSpacing: 0,
				fontWeight: 400
			},
			Aa = ["Top", "Right", "Bottom", "Left"],
			rb = ["Webkit", "O", "Moz", "ms"];
		g.fn.extend({
			css: function(a, c) {
				return g.access(this, function(a, c, e) {
					var f, l = {},
						n = 0;
					if (g.isArray(c)) {
						f = Ba(a);
						for (e = c.length; n < e; n++) l[c[n]] = g.css(a, c[n], !1, f);
						return l
					}
					return e !== b ? g.style(a, c, e) : g.css(a, c)
				}, a, c, 1 < arguments.length)
			},
			show: function() {
				return l(this, !0)
			},
			hide: function() {
				return l(this)
			},
			toggle: function(a) {
				var b = "boolean" === typeof a;
				return this.each(function() {
					(b ? a : K(this)) ? g(this).show(): g(this).hide()
				})
			}
		});
		g.extend({
			cssHooks: {
				opacity: {
					get: function(a, b) {
						if (b) {
							var c = Ca(a, "opacity");
							return "" === c ? "1" : c
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": g.support.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(a, c, e, f) {
				if (a && 3 !== a.nodeType && 8 !== a.nodeType &&
					a.style) {
					var l, n, h, k = g.camelCase(c),
						q = a.style;
					c = g.cssProps[k] || (g.cssProps[k] = J(q, k));
					h = g.cssHooks[c] || g.cssHooks[k];
					if (e !== b) {
						if (n = typeof e, "string" === n && (l = Yb.exec(e)) && (e = (l[1] + 1) * l[2] + parseFloat(g.css(a, c)), n = "number"), !(null == e || "number" === n && isNaN(e) || ("number" !== n || g.cssNumber[k] || (e += "px"), g.support.clearCloneStyle || "" !== e || 0 !== c.indexOf("background") || (q[c] = "inherit"), h && "set" in h && (e = h.set(a, e, f)) === b))) try {
							q[c] = e
						} catch (u) {}
					} else return h && "get" in h && (l = h.get(a, !1, f)) !== b ? l : q[c]
				}
			},
			css: function(a,
				c, e, f) {
				var l, n;
				n = g.camelCase(c);
				c = g.cssProps[n] || (g.cssProps[n] = J(a.style, n));
				(n = g.cssHooks[c] || g.cssHooks[n]) && "get" in n && (l = n.get(a, !0, e));
				l === b && (l = Ca(a, c, f));
				"normal" === l && c in Ab && (l = Ab[c]);
				return "" === e || e ? (a = parseFloat(l), !0 === e || g.isNumeric(a) ? a || 0 : l) : l
			},
			swap: function(a, b, c, e) {
				var f, l = {};
				for (f in b) l[f] = a.style[f], a.style[f] = b[f];
				c = c.apply(a, e || []);
				for (f in b) a.style[f] = l[f];
				return c
			}
		});
		a.getComputedStyle ? (Ba = function(b) {
			return a.getComputedStyle(b, null)
		}, Ca = function(a, c, e) {
			var f, l = (e = e || Ba(a)) ?
				e.getPropertyValue(c) || e[c] : b,
				n = a.style;
			e && ("" !== l || g.contains(a.ownerDocument, a) || (l = g.style(a, c)), Ra.test(l) && zb.test(c) && (a = n.width, c = n.minWidth, f = n.maxWidth, n.minWidth = n.maxWidth = n.width = l, l = e.width, n.width = a, n.minWidth = c, n.maxWidth = f));
			return l
		}) : B.documentElement.currentStyle && (Ba = function(a) {
			return a.currentStyle
		}, Ca = function(a, c, e) {
			var f, l, g = (e = e || Ba(a)) ? e[c] : b,
				n = a.style;
			null == g && n && n[c] && (g = n[c]);
			if (Ra.test(g) && !Wb.test(c)) {
				e = n.left;
				if (l = (f = a.runtimeStyle) && f.left) f.left = a.currentStyle.left;
				n.left = "fontSize" === c ? "1em" : g;
				g = n.pixelLeft + "px";
				n.left = e;
				l && (f.left = l)
			}
			return "" === g ? "auto" : g
		});
		g.each(["height", "width"], function(a, b) {
			g.cssHooks[b] = {
				get: function(a, c, e) {
					if (c) return 0 === a.offsetWidth && Xb.test(g.css(a, "display")) ? g.swap(a, Zb, function() {
						return F(a, b, e)
					}) : F(a, b, e)
				},
				set: function(a, c, e) {
					var f = e && Ba(a);
					return q(a, c, e ? u(a, b, e, g.support.boxSizing && "border-box" === g.css(a, "boxSizing", !1, f), f) : 0)
				}
			}
		});
		g.support.opacity || (g.cssHooks.opacity = {
			get: function(a, b) {
				return Vb.test((b && a.currentStyle ?
					a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
			},
			set: function(a, b) {
				var c = a.style,
					e = a.currentStyle,
					f = g.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
					l = e && e.filter || c.filter || "";
				c.zoom = 1;
				if ((1 <= b || "" === b) && "" === g.trim(l.replace(lb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || e && !e.filter)) return;
				c.filter = lb.test(l) ? l.replace(lb, f) : l + " " + f
			}
		});
		g(function() {
			g.support.reliableMarginRight || (g.cssHooks.marginRight = {
				get: function(a, b) {
					if (b) return g.swap(a, {
							display: "inline-block"
						},
						Ca, [a, "marginRight"])
				}
			});
			!g.support.pixelPosition && g.fn.position && g.each(["top", "left"], function(a, b) {
				g.cssHooks[b] = {
					get: function(a, c) {
						if (c) return c = Ca(a, b), Ra.test(c) ? g(a).position()[b] + "px" : c
					}
				}
			})
		});
		g.expr && g.expr.filters && (g.expr.filters.hidden = function(a) {
			return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !g.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || g.css(a, "display"))
		}, g.expr.filters.visible = function(a) {
			return !g.expr.filters.hidden(a)
		});
		g.each({
				margin: "",
				padding: "",
				border: "Width"
			},
			function(a, b) {
				g.cssHooks[a + b] = {
					expand: function(c) {
						var e = 0,
							f = {};
						for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > e; e++) f[a + Aa[e] + b] = c[e] || c[e - 2] || c[0];
						return f
					}
				};
				zb.test(a) || (g.cssHooks[a + b].set = q)
			});
		var $b = /%20/g,
			Mb = /\[\]$/,
			Bb = /\r?\n/g,
			ac = /^(?:submit|button|image|reset|file)$/i,
			bc = /^(?:input|select|textarea|keygen)/i;
		g.fn.extend({
			serialize: function() {
				return g.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var a = g.prop(this, "elements");
					return a ? g.makeArray(a) : this
				}).filter(function() {
					var a =
						this.type;
					return this.name && !g(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !cb.test(a))
				}).map(function(a, b) {
					var c = g(this).val();
					return null == c ? null : g.isArray(c) ? g.map(c, function(a) {
						return {
							name: b.name,
							value: a.replace(Bb, "\r\n")
						}
					}) : {
						name: b.name,
						value: c.replace(Bb, "\r\n")
					}
				}).get()
			}
		});
		g.param = function(a, c) {
			var e, f = [],
				l = function(a, b) {
					b = g.isFunction(b) ? b() : null == b ? "" : b;
					f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
				};
			c === b && (c = g.ajaxSettings && g.ajaxSettings.traditional);
			if (g.isArray(a) || a.jquery && !g.isPlainObject(a)) g.each(a, function() {
				l(this.name, this.value)
			});
			else
				for (e in a) S(e, a[e], c, l);
			return f.join("&").replace($b, "+")
		};
		g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
			g.fn[b] = function(a, c) {
				return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
			}
		});
		g.fn.hover = function(a,
			b) {
			return this.mouseenter(a).mouseleave(b || a)
		};
		var Da, za, mb = g.now(),
			nb = /\?/,
			cc = /#.*$/,
			Cb = /([?&])_=[^&]*/,
			dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
			ec = /^(?:GET|HEAD)$/,
			fc = /^\/\//,
			Db = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
			Eb = g.fn.load,
			Fb = {},
			db = {},
			Gb = "*/".concat("*");
		try {
			za = y.href
		} catch (kc) {
			za = B.createElement("a"), za.href = "", za = za.href
		}
		Da = Db.exec(za.toLowerCase()) || [];
		g.fn.load = function(a, c, e) {
			if ("string" !== typeof a && Eb) return Eb.apply(this, arguments);
			var f, l, n, h = this,
				k = a.indexOf(" ");
			0 <= k && (f = a.slice(k,
				a.length), a = a.slice(0, k));
			g.isFunction(c) ? (e = c, c = b) : c && "object" === typeof c && (n = "POST");
			0 < h.length && g.ajax({
				url: a,
				type: n,
				dataType: "html",
				data: c
			}).done(function(a) {
				l = arguments;
				h.html(f ? g("<div>").append(g.parseHTML(a)).find(f) : a)
			}).complete(e && function(a, b) {
				h.each(e, l || [a.responseText, b, a])
			});
			return this
		};
		g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
			g.fn[b] = function(a) {
				return this.on(b, a)
			}
		});
		g.each(["get", "post"], function(a, c) {
			g[c] = function(a, e, f,
				l) {
				g.isFunction(e) && (l = l || f, f = e, e = b);
				return g.ajax({
					url: a,
					type: c,
					dataType: l,
					data: e,
					success: f
				})
			}
		});
		g.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: za,
				type: "GET",
				isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Da[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Gb,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText"
				},
				converters: {
					"* text": a.String,
					"text html": !0,
					"text json": g.parseJSON,
					"text xml": g.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(a, b) {
				return b ? M(M(a, g.ajaxSettings), b) : M(g.ajaxSettings, a)
			},
			ajaxPrefilter: ca(Fb),
			ajaxTransport: ca(db),
			ajax: function(a, c) {
				function e(a, c, f, l) {
					var C, E, A, s, B = c;
					if (2 !== ma) {
						ma = 2;
						k && clearTimeout(k);
						u = b;
						h = l || "";
						r.readyState = 0 < a ? 4 : 0;
						if (f) {
							s = m;
							l = r;
							var x, U, N, M, w = s.contents,
								I = s.dataTypes,
								xa = s.responseFields;
							for (M in xa) M in f && (l[xa[M]] = f[M]);
							for (;
								"*" === I[0];) I.shift(), U === b && (U = s.mimeType || l.getResponseHeader("Content-Type"));
							if (U)
								for (M in w)
									if (w[M] && w[M].test(U)) {
										I.unshift(M);
										break
									}
							if (I[0] in f) N = I[0];
							else {
								for (M in f) {
									if (!I[0] || s.converters[M + " " + I[0]]) {
										N = M;
										break
									}
									x || (x = M)
								}
								N = N || x
							}
							N ? (N !== I[0] && I.unshift(N), s = f[N]) : s = void 0
						}
						if (200 <= a && 300 > a || 304 === a)
							if (m.ifModified && ((f = r.getResponseHeader("Last-Modified")) && (g.lastModified[n] = f), (f = r.getResponseHeader("etag")) && (g.etag[n] = f)), 204 === a) C = !0, B = "nocontent";
							else if (304 === a) C = !0, B = "notmodified";
						else {
							a: {
								E = m;
								A = s;
								var ga, O, B = {};
								x = 0;
								U = E.dataTypes.slice();
								N = U[0];
								E.dataFilter && (A = E.dataFilter(A, E.dataType));
								if (U[1])
									for (O in E.converters) B[O.toLowerCase()] = E.converters[O];
								for (; f = U[++x];)
									if ("*" !== f) {
										if ("*" !== N && N !== f) {
											O = B[N + " " + f] || B["* " + f];
											if (!O)
												for (ga in B)
													if (C = ga.split(" "), C[1] === f && (O = B[N + " " + C[0]] || B["* " + C[0]])) {
														!0 === O ? O = B[ga] : !0 !== B[ga] && (f = C[0], U.splice(x--, 0, f));
														break
													}
											if (!0 !== O)
												if (O && E["throws"]) A = O(A);
												else try {
													A = O(A)
												} catch (v) {
													C = {
														state: "parsererror",
														error: O ? v : "No conversion from " + N + " to " + f
													};
													break a
												}
										}
										N = f
									}
								C = {
									state: "success",
									data: A
								}
							}
							B = C.state;E = C.data;A = C.error;C = !A
						} else if (A = B, a || !B) B = "error", 0 > a && (a = 0);
						r.status = a;
						r.statusText = (c || B) + "";
						C ? F.resolveWith(p, [E, B, r]) : F.rejectWith(p, [r, B, A]);
						r.statusCode(t);
						t = b;
						q && aa.trigger(C ? "ajaxSuccess" : "ajaxError", [r, m, C ? E : A]);
						y.fireWith(p, [r, B]);
						q && (aa.trigger("ajaxComplete", [r, m]), --g.active || g.event.trigger("ajaxStop"))
					}
				}
				"object" === typeof a && (c = a, a = b);
				c = c || {};
				var f, l, n, h, k, q, u, C, m = g.ajaxSetup({}, c),
					p = m.context ||
					m,
					aa = m.context && (p.nodeType || p.jquery) ? g(p) : g.event,
					F = g.Deferred(),
					y = g.Callbacks("once memory"),
					t = m.statusCode || {},
					A = {},
					s = {},
					ma = 0,
					B = "canceled",
					r = {
						readyState: 0,
						getResponseHeader: function(a) {
							var b;
							if (2 === ma) {
								if (!C)
									for (C = {}; b = dc.exec(h);) C[b[1].toLowerCase()] = b[2];
								b = C[a.toLowerCase()]
							}
							return null == b ? null : b
						},
						getAllResponseHeaders: function() {
							return 2 === ma ? h : null
						},
						setRequestHeader: function(a, b) {
							var c = a.toLowerCase();
							ma || (a = s[c] = s[c] || a, A[a] = b);
							return this
						},
						overrideMimeType: function(a) {
							ma || (m.mimeType = a);
							return this
						},
						statusCode: function(a) {
							var b;
							if (a)
								if (2 > ma)
									for (b in a) t[b] = [t[b], a[b]];
								else r.always(a[r.status]);
							return this
						},
						abort: function(a) {
							a = a || B;
							u && u.abort(a);
							e(0, a);
							return this
						}
					};
				F.promise(r).complete = y.add;
				r.success = r.done;
				r.error = r.fail;
				m.url = ((a || m.url || za) + "").replace(cc, "").replace(fc, Da[1] + "//");
				m.type = c.method || c.type || m.method || m.type;
				m.dataTypes = g.trim(m.dataType || "*").toLowerCase().match(ia) || [""];
				null == m.crossDomain && (f = Db.exec(m.url.toLowerCase()), m.crossDomain = !(!f || f[1] === Da[1] &&
					f[2] === Da[2] && (f[3] || ("http:" === f[1] ? 80 : 443)) == (Da[3] || ("http:" === Da[1] ? 80 : 443))));
				m.data && m.processData && "string" !== typeof m.data && (m.data = g.param(m.data, m.traditional));
				ha(Fb, m, c, r);
				if (2 === ma) return r;
				(q = m.global) && 0 === g.active++ && g.event.trigger("ajaxStart");
				m.type = m.type.toUpperCase();
				m.hasContent = !ec.test(m.type);
				n = m.url;
				m.hasContent || (m.data && (n = m.url += (nb.test(n) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Cb.test(n) ? n.replace(Cb, "$1_=" + mb++) : n + (nb.test(n) ? "&" : "?") + "_=" + mb++));
				m.ifModified &&
					(g.lastModified[n] && r.setRequestHeader("If-Modified-Since", g.lastModified[n]), g.etag[n] && r.setRequestHeader("If-None-Match", g.etag[n]));
				(m.data && m.hasContent && !1 !== m.contentType || c.contentType) && r.setRequestHeader("Content-Type", m.contentType);
				r.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Gb + "; q=0.01" : "") : m.accepts["*"]);
				for (l in m.headers) r.setRequestHeader(l, m.headers[l]);
				if (m.beforeSend && (!1 === m.beforeSend.call(p, r, m) ||
						2 === ma)) return r.abort();
				B = "abort";
				for (l in {
						success: 1,
						error: 1,
						complete: 1
					}) r[l](m[l]);
				if (u = ha(db, m, c, r)) {
					r.readyState = 1;
					q && aa.trigger("ajaxSend", [r, m]);
					m.async && 0 < m.timeout && (k = setTimeout(function() {
						r.abort("timeout")
					}, m.timeout));
					try {
						ma = 1, u.send(A, e)
					} catch (x) {
						if (2 > ma) e(-1, x);
						else throw x;
					}
				} else e(-1, "No Transport");
				return r
			},
			getScript: function(a, c) {
				return g.get(a, b, c, "script")
			},
			getJSON: function(a, b, c) {
				return g.get(a, b, c, "json")
			}
		});
		g.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(a) {
					g.globalEval(a);
					return a
				}
			}
		});
		g.ajaxPrefilter("script", function(a) {
			a.cache === b && (a.cache = !1);
			a.crossDomain && (a.type = "GET", a.global = !1)
		});
		g.ajaxTransport("script", function(a) {
			if (a.crossDomain) {
				var c, e = B.head || g("head")[0] || B.documentElement;
				return {
					send: function(b, f) {
						c = B.createElement("script");
						c.async = !0;
						a.scriptCharset && (c.charset = a.scriptCharset);
						c.src = a.url;
						c.onload = c.onreadystatechange = function(a, b) {
							if (b || !c.readyState ||
								/loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || f(200, "success")
						};
						e.insertBefore(c, e.firstChild)
					},
					abort: function() {
						if (c) c.onload(b, !0)
					}
				}
			}
		});
		var Hb = [],
			ob = /(=)\?(?=&|$)|\?\?/;
		g.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var a = Hb.pop() || g.expando + "_" + mb++;
				this[a] = !0;
				return a
			}
		});
		g.ajaxPrefilter("json jsonp", function(c, e, f) {
			var l, n, h, k = !1 !== c.jsonp && (ob.test(c.url) ? "url" : "string" === typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") &&
				ob.test(c.data) && "data");
			if (k || "jsonp" === c.dataTypes[0]) return l = c.jsonpCallback = g.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, k ? c[k] = c[k].replace(ob, "$1" + l) : !1 !== c.jsonp && (c.url += (nb.test(c.url) ? "&" : "?") + c.jsonp + "=" + l), c.converters["script json"] = function() {
				h || g.error(l + " was not called");
				return h[0]
			}, c.dataTypes[0] = "json", n = a[l], a[l] = function() {
				h = arguments
			}, f.always(function() {
				a[l] = n;
				c[l] && (c.jsonpCallback = e.jsonpCallback, Hb.push(l));
				h && g.isFunction(n) && n(h[0]);
				h = n = b
			}), "script"
		});
		var Ia, Qa, gc = 0,
			pb = a.ActiveXObject && function() {
				for (var a in Ia) Ia[a](b, !0)
			};
		g.ajaxSettings.xhr = a.ActiveXObject ? function() {
			var b;
			if (!(b = !this.isLocal && L())) a: {
				try {
					b = new a.ActiveXObject("Microsoft.XMLHTTP");
					break a
				} catch (c) {}
				b = void 0
			}
			return b
		} : L;
		Qa = g.ajaxSettings.xhr();
		g.support.cors = !!Qa && "withCredentials" in Qa;
		(Qa = g.support.ajax = !!Qa) && g.ajaxTransport(function(c) {
			if (!c.crossDomain || g.support.cors) {
				var e;
				return {
					send: function(f, l) {
						var n, h, k = c.xhr();
						c.username ? k.open(c.type, c.url, c.async, c.username, c.password) :
							k.open(c.type, c.url, c.async);
						if (c.xhrFields)
							for (h in c.xhrFields) k[h] = c.xhrFields[h];
						c.mimeType && k.overrideMimeType && k.overrideMimeType(c.mimeType);
						c.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
						try {
							for (h in f) k.setRequestHeader(h, f[h])
						} catch (q) {}
						k.send(c.hasContent && c.data || null);
						e = function(a, f) {
							var h, q, u, m;
							try {
								if (e && (f || 4 === k.readyState))
									if (e = b, n && (k.onreadystatechange = g.noop, pb && delete Ia[n]), f) 4 !== k.readyState && k.abort();
									else {
										m = {};
										h = k.status;
										q = k.getAllResponseHeaders();
										"string" === typeof k.responseText && (m.text = k.responseText);
										try {
											u = k.statusText
										} catch (C) {
											u = ""
										}
										h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = m.text ? 200 : 404
									}
							} catch (p) {
								f || l(-1, p)
							}
							m && l(h, u, m, q)
						};
						c.async ? 4 === k.readyState ? setTimeout(e) : (n = ++gc, pb && (Ia || (Ia = {}, g(a).unload(pb)), Ia[n] = e), k.onreadystatechange = e) : e()
					},
					abort: function() {
						e && e(b, !0)
					}
				}
			}
		});
		var Fa, ab, hc = /^(?:toggle|show|hide)$/,
			ic = new RegExp("^(?:([+-])=|)(" + oa + ")([a-z%]*)$", "i"),
			jc = /queueHooks$/,
			Sa = [function(a, b, c) {
				var e, f, l, n, h, k, q = this,
					u = a.style,
					m = {},
					C = [],
					p = a.nodeType && K(a);
				c.queue || (h = g._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, k = h.empty.fire, h.empty.fire = function() {
					h.unqueued || k()
				}), h.unqueued++, q.always(function() {
					q.always(function() {
						h.unqueued--;
						g.queue(a, "fx").length || h.empty.fire()
					})
				}));
				1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [u.overflow, u.overflowX, u.overflowY], "inline" === g.css(a, "display") && "none" === g.css(a, "float") && (g.support.inlineBlockNeedsLayout && "inline" !== I(a.nodeName) ? u.zoom = 1 : u.display = "inline-block"));
				c.overflow && (u.overflow = "hidden", g.support.shrinkWrapBlocks || q.always(function() {
					u.overflow = c.overflow[0];
					u.overflowX = c.overflow[1];
					u.overflowY = c.overflow[2]
				}));
				for (f in b) l = b[f], hc.exec(l) && (delete b[f], e = e || "toggle" === l, l !== (p ? "hide" : "show") && C.push(f));
				if (b = C.length)
					for (l = g._data(a, "fxshow") || g._data(a, "fxshow", {}), ("hidden" in l) && (p = l.hidden), e && (l.hidden = !p), p ? g(a).show() : q.done(function() {
							g(a).hide()
						}), q.done(function() {
							var b;
							g._removeData(a, "fxshow");
							for (b in m) g.style(a, b, m[b])
						}), f = 0; f < b; f++) e =
						C[f], n = q.createTween(e, p ? l[e] : 0), m[e] = l[e] || g.style(a, e), e in l || (l[e] = n.start, p && (n.end = n.start, n.start = "width" === e || "height" === e ? 1 : 0))
			}],
			Ma = {
				"*": [function(a, b) {
					var c, e, f = this.createTween(a, b),
						l = ic.exec(b),
						n = f.cur(),
						h = +n || 0,
						k = 1,
						q = 20;
					if (l) {
						c = +l[2];
						e = l[3] || (g.cssNumber[a] ? "" : "px");
						if ("px" !== e && h) {
							h = g.css(f.elem, a, !0) || c || 1;
							do k = k || ".5", h /= k, g.style(f.elem, a, h + e); while (k !== (k = f.cur() / n) && 1 !== k && --q)
						}
						f.unit = e;
						f.start = h;
						f.end = l[1] ? h + (l[1] + 1) * c : c
					}
					return f
				}]
			};
		g.Animation = g.extend(ja, {
			tweener: function(a,
				b) {
				g.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
				for (var c, e = 0, f = a.length; e < f; e++) c = a[e], Ma[c] = Ma[c] || [], Ma[c].unshift(b)
			},
			prefilter: function(a, b) {
				b ? Sa.unshift(a) : Sa.push(a)
			}
		});
		g.Tween = Q;
		Q.prototype = {
			constructor: Q,
			init: function(a, b, c, e, f, l) {
				this.elem = a;
				this.prop = c;
				this.easing = f || "swing";
				this.options = b;
				this.start = this.now = this.cur();
				this.end = e;
				this.unit = l || (g.cssNumber[c] ? "" : "px")
			},
			cur: function() {
				var a = Q.propHooks[this.prop];
				return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
			},
			run: function(a) {
				var b,
					c = Q.propHooks[this.prop];
				this.pos = this.options.duration ? b = g.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
				this.now = (this.end - this.start) * b + this.start;
				this.options.step && this.options.step.call(this.elem, this.now, this);
				c && c.set ? c.set(this) : Q.propHooks._default.set(this);
				return this
			}
		};
		Q.prototype.init.prototype = Q.prototype;
		Q.propHooks = {
			_default: {
				get: function(a) {
					return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = g.css(a.elem, a.prop, "")) && "auto" !== a ?
						a : 0 : a.elem[a.prop]
				},
				set: function(a) {
					if (g.fx.step[a.prop]) g.fx.step[a.prop](a);
					else a.elem.style && (null != a.elem.style[g.cssProps[a.prop]] || g.cssHooks[a.prop]) ? g.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
				}
			}
		};
		Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
			set: function(a) {
				a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
			}
		};
		g.each(["toggle", "show", "hide"], function(a, b) {
			var c = g.fn[b];
			g.fn[b] = function(a, e, f) {
				return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(da(b, !0), a, e, f)
			}
		});
		g.fn.extend({
			fadeTo: function(a, b, c, e) {
				return this.filter(K).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, e)
			},
			animate: function(a, b, c, e) {
				var f = g.isEmptyObject(a),
					l = g.speed(b, c, e),
					n = function() {
						var b = ja(this, g.extend({}, a), l);
						n.finish = function() {
							b.stop(!0)
						};
						(f || g._data(this, "finish")) && b.stop(!0)
					};
				n.finish = n;
				return f || !1 === l.queue ? this.each(n) : this.queue(l.queue, n)
			},
			stop: function(a, c, e) {
				var f = function(a) {
					var b = a.stop;
					delete a.stop;
					b(e)
				};
				"string" !== typeof a && (e = c, c = a, a = b);
				c && !1 !==
					a && this.queue(a || "fx", []);
				return this.each(function() {
					var b = !0,
						c = null != a && a + "queueHooks",
						l = g.timers,
						n = g._data(this);
					if (c) n[c] && n[c].stop && f(n[c]);
					else
						for (c in n) n[c] && n[c].stop && jc.test(c) && f(n[c]);
					for (c = l.length; c--;) l[c].elem !== this || null != a && l[c].queue !== a || (l[c].anim.stop(e), b = !1, l.splice(c, 1));
					!b && e || g.dequeue(this, a)
				})
			},
			finish: function(a) {
				!1 !== a && (a = a || "fx");
				return this.each(function() {
					var b, c = g._data(this),
						e = c[a + "queue"];
					b = c[a + "queueHooks"];
					var f = g.timers,
						l = e ? e.length : 0;
					c.finish = !0;
					g.queue(this,
						a, []);
					b && b.cur && b.cur.finish && b.cur.finish.call(this);
					for (b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					for (b = 0; b < l; b++) e[b] && e[b].finish && e[b].finish.call(this);
					delete c.finish
				})
			}
		});
		g.each({
			slideDown: da("show"),
			slideUp: da("hide"),
			slideToggle: da("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(a, b) {
			g.fn[a] = function(a, c, e) {
				return this.animate(b, a, c, e)
			}
		});
		g.speed = function(a, b, c) {
			var e = a && "object" === typeof a ? g.extend({},
				a) : {
				complete: c || !c && b || g.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !g.isFunction(b) && b
			};
			e.duration = g.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in g.fx.speeds ? g.fx.speeds[e.duration] : g.fx.speeds._default;
			if (null == e.queue || !0 === e.queue) e.queue = "fx";
			e.old = e.complete;
			e.complete = function() {
				g.isFunction(e.old) && e.old.call(this);
				e.queue && g.dequeue(this, e.queue)
			};
			return e
		};
		g.easing = {
			linear: function(a) {
				return a
			},
			swing: function(a) {
				return .5 - Math.cos(a * Math.PI) / 2
			}
		};
		g.timers = [];
		g.fx = Q.prototype.init;
		g.fx.tick = function() {
			var a, c = g.timers,
				e = 0;
			for (Fa = g.now(); e < c.length; e++) a = c[e], a() || c[e] !== a || c.splice(e--, 1);
			c.length || g.fx.stop();
			Fa = b
		};
		g.fx.timer = function(a) {
			a() && g.timers.push(a) && g.fx.start()
		};
		g.fx.interval = 13;
		g.fx.start = function() {
			ab || (ab = setInterval(g.fx.tick, g.fx.interval))
		};
		g.fx.stop = function() {
			clearInterval(ab);
			ab = null
		};
		g.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		};
		g.fx.step = {};
		g.expr && g.expr.filters && (g.expr.filters.animated = function(a) {
			return g.grep(g.timers, function(b) {
				return a === b.elem
			}).length
		});
		g.fn.offset = function(a) {
			if (arguments.length) return a === b ? this : this.each(function(b) {
				g.offset.setOffset(this, a, b)
			});
			var c, e, f = {
					top: 0,
					left: 0
				},
				l = (e = this[0]) && e.ownerDocument;
			if (l) {
				c = l.documentElement;
				if (!g.contains(c, e)) return f;
				typeof e.getBoundingClientRect !== X && (f = e.getBoundingClientRect());
				e = na(l);
				return {
					top: f.top + (e.pageYOffset || c.scrollTop) - (c.clientTop || 0),
					left: f.left + (e.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
				}
			}
		};
		g.offset = {
			setOffset: function(a, b, c) {
				var e = g.css(a, "position");
				"static" === e &&
					(a.style.position = "relative");
				var f = g(a),
					l = f.offset(),
					n = g.css(a, "top"),
					h = g.css(a, "left"),
					k = {},
					q = {};
				("absolute" === e || "fixed" === e) && -1 < g.inArray("auto", [n, h]) ? (q = f.position(), e = q.top, h = q.left) : (e = parseFloat(n) || 0, h = parseFloat(h) || 0);
				g.isFunction(b) && (b = b.call(a, c, l));
				null != b.top && (k.top = b.top - l.top + e);
				null != b.left && (k.left = b.left - l.left + h);
				"using" in b ? b.using.call(a, k) : f.css(k)
			}
		};
		g.fn.extend({
			position: function() {
				if (this[0]) {
					var a, b, c = {
							top: 0,
							left: 0
						},
						e = this[0];
					"fixed" === g.css(e, "position") ? b = e.getBoundingClientRect() :
						(a = this.offsetParent(), b = this.offset(), g.nodeName(a[0], "html") || (c = a.offset()), c.top += g.css(a[0], "borderTopWidth", !0), c.left += g.css(a[0], "borderLeftWidth", !0));
					return {
						top: b.top - c.top - g.css(e, "marginTop", !0),
						left: b.left - c.left - g.css(e, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var a = this.offsetParent || B.documentElement; a && !g.nodeName(a, "html") && "static" === g.css(a, "position");) a = a.offsetParent;
					return a || B.documentElement
				})
			}
		});
		g.each({
				scrollLeft: "pageXOffset",
				scrollTop: "pageYOffset"
			},
			function(a, c) {
				var e = /Y/.test(c);
				g.fn[a] = function(f) {
					return g.access(this, function(a, f, l) {
						var n = na(a);
						if (l === b) return n ? c in n ? n[c] : n.document.documentElement[f] : a[f];
						n ? n.scrollTo(e ? g(n).scrollLeft() : l, e ? l : g(n).scrollTop()) : a[f] = l
					}, a, f, arguments.length, null)
				}
			});
		g.each({
			Height: "height",
			Width: "width"
		}, function(a, c) {
			g.each({
				padding: "inner" + a,
				content: c,
				"": "outer" + a
			}, function(e, f) {
				g.fn[f] = function(f, l) {
					var n = arguments.length && (e || "boolean" !== typeof f),
						h = e || (!0 === f || !0 === l ? "margin" : "border");
					return g.access(this,
						function(c, e, f) {
							return g.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (e = c.documentElement, Math.max(c.body["scroll" + a], e["scroll" + a], c.body["offset" + a], e["offset" + a], e["client" + a])) : f === b ? g.css(c, e, h) : g.style(c, e, f, h)
						}, c, n ? f : b, n, null)
				}
			})
		});
		a.jQuery = a.$ = g;
		"function" === typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
			return g
		})
	})(window);
	(function(a, b, c) {
		function e(c) {
			h[c] || (h[c] = !0, a.migrateWarnings.push(c), b.console && console.warn && !a.migrateMute && (console.warn("JQMIGRATE: " + c), a.migrateTrace && console.trace && console.trace()))
		}

		function f(b, c, f, l) {
			if (Object.defineProperty) try {
				Object.defineProperty(b, c, {
					configurable: !0,
					enumerable: !0,
					get: function() {
						e(l);
						return f
					},
					set: function(a) {
						e(l);
						f = a
					}
				});
				return
			} catch (h) {}
			a._definePropertyBroken = !0;
			b[c] = f
		}
		var h = {};
		a.migrateWarnings = [];
		!a.migrateMute && b.console && console.log && console.log("JQMIGRATE: Logging is active");
		a.migrateTrace === c && (a.migrateTrace = !0);
		a.migrateReset = function() {
			h = {};
			a.migrateWarnings.length = 0
		};
		"BackCompat" === document.compatMode && e("jQuery is not compatible with Quirks Mode");
		var k = a("<input/>", {
				size: 1
			}).attr("size") && a.attrFn,
			m = a.attr,
			p = a.attrHooks.value && a.attrHooks.value.get || function() {
				return null
			},
			r = a.attrHooks.value && a.attrHooks.value.set || function() {
				return c
			},
			t = /^(?:input|button)$/i,
			A = /^[238]$/,
			H = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			s = /^(?:checked|selected)$/i;
		f(a, "attrFn", k || {}, "jQuery.attrFn is deprecated");
		a.attr = function(b, f, l, h) {
			var q = f.toLowerCase(),
				u = b && b.nodeType;
			if (h && (4 > m.length && e("jQuery.fn.attr( props, pass ) is deprecated"), b && !A.test(u) && (k ? f in k : a.isFunction(a.fn[f])))) return a(b)[f](l);
			"type" === f && l !== c && t.test(b.nodeName) && b.parentNode && e("Can't change the 'type' of an input or button in IE 6/7/8");
			!a.attrHooks[q] && H.test(q) && (a.attrHooks[q] = {
				get: function(b, e) {
					var f, l = a.prop(b, e);
					return !0 === l || "boolean" !==
						typeof l && (f = b.getAttributeNode(e)) && !1 !== f.nodeValue ? e.toLowerCase() : c
				},
				set: function(b, c, e) {
					!1 === c ? a.removeAttr(b, e) : (c = a.propFix[e] || e, c in b && (b[c] = !0), b.setAttribute(e, e.toLowerCase()));
					return e
				}
			}, s.test(q) && e("jQuery.fn.attr('" + q + "') may use property instead of attribute"));
			return m.call(a, b, f, l)
		};
		a.attrHooks.value = {
			get: function(a, b) {
				var c = (a.nodeName || "").toLowerCase();
				if ("button" === c) return p.apply(this, arguments);
				"input" !== c && "option" !== c && e("jQuery.fn.attr('value') no longer gets properties");
				return b in a ? a.value : null
			},
			set: function(a, b) {
				var c = (a.nodeName || "").toLowerCase();
				if ("button" === c) return r.apply(this, arguments);
				"input" !== c && "option" !== c && e("jQuery.fn.attr('value', val) no longer sets properties");
				a.value = b
			}
		};
		var G, w, D = a.fn.init,
			v = a.parseJSON,
			x = /^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;
		a.fn.init = function(b, c, f) {
			var l;
			return b && "string" === typeof b && !a.isPlainObject(c) && (l = x.exec(b)) && l[1] && ("<" !== b.charAt(0) && e("$(html) HTML strings must start with '<' character"), c && c.context &&
				(c = c.context), a.parseHTML) ? D.call(this, a.parseHTML(a.trim(b), c, !0), c, f) : D.apply(this, arguments)
		};
		a.fn.init.prototype = a.fn;
		a.parseJSON = function(a) {
			return a || null === a ? v.apply(this, arguments) : (e("jQuery.parseJSON requires a valid JSON string"), null)
		};
		a.uaMatch = function(a) {
			a = a.toLowerCase();
			a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			return {
				browser: a[1] ||
					"",
				version: a[2] || "0"
			}
		};
		a.browser || (G = a.uaMatch(navigator.userAgent), w = {}, G.browser && (w[G.browser] = !0, w.version = G.version), w.chrome ? w.webkit = !0 : w.webkit && (w.safari = !0), a.browser = w);
		f(a, "browser", a.browser, "jQuery.browser is deprecated");
		a.sub = function() {
			function b(a, c) {
				return new b.fn.init(a, c)
			}
			a.extend(!0, b, this);
			b.superclass = this;
			b.fn = b.prototype = this();
			b.fn.constructor = b;
			b.sub = this.sub;
			b.fn.init = function(e, f) {
				f && f instanceof a && !(f instanceof b) && (f = b(f));
				return a.fn.init.call(this, e, f, c)
			};
			b.fn.init.prototype =
				b.fn;
			var c = b(document);
			e("jQuery.sub() is deprecated");
			return b
		};
		a.ajaxSetup({
			converters: {
				"text json": a.parseJSON
			}
		});
		var z = a.fn.data;
		a.fn.data = function(b) {
			var f, l;
			return !(l = this[0]) || "events" !== b || 1 !== arguments.length || (f = a.data(l, b), l = a._data(l, b), f !== c && f !== l || l === c) ? z.apply(this, arguments) : (e("Use of jQuery.fn.data('events') is deprecated"), l)
		};
		var J = /\/(java|ecma)script/i,
			K = a.fn.andSelf || a.fn.addBack;
		a.fn.andSelf = function() {
			e("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
			return K.apply(this,
				arguments)
		};
		a.clean || (a.clean = function(b, c, f, l) {
			c = c || document;
			c = !c.nodeType && c[0] || c;
			c = c.ownerDocument || c;
			e("jQuery.clean() is deprecated");
			var h, k = [];
			a.merge(k, a.buildFragment(b, c).childNodes);
			if (f)
				for (c = function(a) {
						if (!a.type || J.test(a.type)) return l ? l.push(a.parentNode ? a.parentNode.removeChild(a) : a) : f.appendChild(a)
					}, b = 0; null != (h = k[b]); b++) a.nodeName(h, "script") && c(h) || (f.appendChild(h), "undefined" !== typeof h.getElementsByTagName && (h = a.grep(a.merge([], h.getElementsByTagName("script")), c), k.splice.apply(k, [b + 1, 0].concat(h)), b += h.length));
			return k
		});
		var l = a.event.add,
			q = a.event.remove,
			u = a.event.trigger,
			F = a.fn.toggle,
			I = a.fn.live,
			R = a.fn.die,
			S = /\b(?:ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess)\b/,
			ca = /(?:^|\s)hover(\.\S+|)\b/,
			ha = function(b) {
				if ("string" !== typeof b || a.event.special.hover) return b;
				ca.test(b) && e("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
				return b && b.replace(ca, "mouseenter$1 mouseleave$1")
			};
		a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange",
			"attrName", "relatedNode", "srcElement");
		a.event.dispatch && f(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
		a.event.add = function(a, b, c, f, h) {
			a !== document && S.test(b) && e("AJAX events should be attached to document: " + b);
			l.call(this, a, ha(b || ""), c, f, h)
		};
		a.event.remove = function(a, b, c, e, f) {
			q.call(this, a, ha(b) || "", c, e, f)
		};
		a.fn.error = function() {
			var a = Array.prototype.slice.call(arguments, 0);
			e("jQuery.fn.error() is deprecated");
			a.splice(0, 0, "error");
			if (arguments.length) return this.bind.apply(this,
				a);
			this.triggerHandler.apply(this, a);
			return this
		};
		a.fn.toggle = function(b, c) {
			if (!a.isFunction(b) || !a.isFunction(c)) return F.apply(this, arguments);
			e("jQuery.fn.toggle(handler, handler...) is deprecated");
			var f = arguments,
				l = b.guid || a.guid++,
				h = 0,
				k = function(c) {
					var e = (a._data(this, "lastToggle" + b.guid) || 0) % h;
					a._data(this, "lastToggle" + b.guid, e + 1);
					c.preventDefault();
					return f[e].apply(this, arguments) || !1
				};
			for (k.guid = l; h < f.length;) f[h++].guid = l;
			return this.click(k)
		};
		a.fn.live = function(b, c, f) {
			e("jQuery.fn.live() is deprecated");
			if (I) return I.apply(this, arguments);
			a(this.context).on(b, this.selector, c, f);
			return this
		};
		a.fn.die = function(b, c) {
			e("jQuery.fn.die() is deprecated");
			if (R) return R.apply(this, arguments);
			a(this.context).off(b, this.selector || "**", c);
			return this
		};
		a.event.trigger = function(a, b, c, f) {
			c || S.test(a) || e("Global events are undocumented and deprecated");
			return u.call(this, a, b, c || document, f)
		};
		a.each("ajaxStart ajaxStop ajaxSend ajaxComplete ajaxError ajaxSuccess".split(" "), function(b, c) {
			a.event.special[c] = {
				setup: function() {
					var b =
						this;
					b !== document && (a.event.add(document, c + "." + a.guid, function() {
						a.event.trigger(c, null, b, !0)
					}), a._data(this, c, a.guid++));
					return !1
				},
				teardown: function() {
					this !== document && a.event.remove(document, c + "." + a._data(this, c));
					return !1
				}
			}
		})
	})(jQuery, window);
	qun.star.plu = {};
	var plu = window.plu = window.plu || {};
	plu.model = {};
	plu.debug = !1;
	plu.log = function(a) {
		plu.debug && console && console.log && console.log(a)
	};
	plu.throwError = function(a) {
		if (plu.debug) throw Error(a);
	};
	plu.bind = function(a, b) {
		return Function.prototype.bind ? a.bind(b) : function() {
			return a.apply(b, arguments)
		}
	};
	plu.inherits = function(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a._superClass = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a
	};
	plu.throttle = function(a, b) {
		return function() {
			var c = parseInt(a._plu_lock);
			c && clearTimeout(c);
			a._plu_lock = setTimeout(function() {
				a();
				delete a._plu_lock
			}, b || 0)
		}
	};
	plu.typeOf = function(a) {
		var b = typeof a;
		if ("object" == b)
			if (a) {
				if (a instanceof Array) return "array";
				if (a instanceof Object) return b;
				var c = Object.prototype.toString.call(a);
				if ("[object Window]" == c) return "object";
				if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
				if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
			} else return "null";
		else if ("function" == b && "undefined" == typeof a.call) return "object";
		return b
	};
	qun.star.messages = {};
	(function() {
		function a(a, b, h, k) {
			window.__Messages.post(a, b, h, k);
			return c
		}

		function b(b) {
			var c = b.target,
				h = c.getAttribute("kind");
			h && a(b.type, h, c)
		}
		var c = {};
		$("body").click(b).dblclick(b).mouseover(b).mouseout(b).keydown(b);
		window._handle = function(b, c, h) {
			h = $.event.fix(h);
			a(b, c, h)
		};
		c.post = a;
		c.receive = function(a, b, h) {
			window.__Messages.receive(a, b, h);
			return c
		};
		window.plu || (window.plu = {});
		plu.messages = c
	})();
	goog.debug = {};
	goog.debug.Error = function(a) {
		if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error);
		else {
			var b = Error().stack;
			b && (this.stack = b)
		}
		a && (this.message = String(a))
	};
	goog.inherits(goog.debug.Error, Error);
	goog.debug.Error.prototype.name = "CustomError";
	goog.dom = {};
	goog.dom.NodeType = {
		ELEMENT: 1,
		ATTRIBUTE: 2,
		TEXT: 3,
		CDATA_SECTION: 4,
		ENTITY_REFERENCE: 5,
		ENTITY: 6,
		PROCESSING_INSTRUCTION: 7,
		COMMENT: 8,
		DOCUMENT: 9,
		DOCUMENT_TYPE: 10,
		DOCUMENT_FRAGMENT: 11,
		NOTATION: 12
	};
	goog.string = {};
	goog.string.DETECT_DOUBLE_ESCAPING = !1;
	goog.string.Unicode = {
		NBSP: "\u00a0"
	};
	goog.string.startsWith = function(a, b) {
		return 0 == a.lastIndexOf(b, 0)
	};
	goog.string.endsWith = function(a, b) {
		var c = a.length - b.length;
		return 0 <= c && a.indexOf(b, c) == c
	};
	goog.string.caseInsensitiveStartsWith = function(a, b) {
		return 0 == goog.string.caseInsensitiveCompare(b, a.substr(0, b.length))
	};
	goog.string.caseInsensitiveEndsWith = function(a, b) {
		return 0 == goog.string.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length))
	};
	goog.string.caseInsensitiveEquals = function(a, b) {
		return a.toLowerCase() == b.toLowerCase()
	};
	goog.string.subs = function(a, b) {
		for (var c = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < c.length;) e += c.shift() + f.shift();
		return e + c.join("%s")
	};
	goog.string.collapseWhitespace = function(a) {
		return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
	};
	goog.string.isEmpty = function(a) {
		return /^[\s\xa0]*$/.test(a)
	};
	goog.string.isEmptySafe = function(a) {
		return goog.string.isEmpty(goog.string.makeSafe(a))
	};
	goog.string.isBreakingWhitespace = function(a) {
		return !/[^\t\n\r ]/.test(a)
	};
	goog.string.isAlpha = function(a) {
		return !/[^a-zA-Z]/.test(a)
	};
	goog.string.isNumeric = function(a) {
		return !/[^0-9]/.test(a)
	};
	goog.string.isAlphaNumeric = function(a) {
		return !/[^a-zA-Z0-9]/.test(a)
	};
	goog.string.isSpace = function(a) {
		return " " == a
	};
	goog.string.isUnicodeChar = function(a) {
		return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a
	};
	goog.string.stripNewlines = function(a) {
		return a.replace(/(\r\n|\r|\n)+/g, " ")
	};
	goog.string.canonicalizeNewlines = function(a) {
		return a.replace(/(\r\n|\r|\n)/g, "\n")
	};
	goog.string.normalizeWhitespace = function(a) {
		return a.replace(/\xa0|\s/g, " ")
	};
	goog.string.normalizeSpaces = function(a) {
		return a.replace(/\xa0|[ \t]+/g, " ")
	};
	goog.string.collapseBreakingSpaces = function(a) {
		return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
	};
	goog.string.trim = function(a) {
		return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
	};
	goog.string.trimLeft = function(a) {
		return a.replace(/^[\s\xa0]+/, "")
	};
	goog.string.trimRight = function(a) {
		return a.replace(/[\s\xa0]+$/, "")
	};
	goog.string.caseInsensitiveCompare = function(a, b) {
		var c = String(a).toLowerCase(),
			e = String(b).toLowerCase();
		return c < e ? -1 : c == e ? 0 : 1
	};
	goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
	goog.string.numerateCompare = function(a, b) {
		if (a == b) return 0;
		if (!a) return -1;
		if (!b) return 1;
		for (var c = a.toLowerCase().match(goog.string.numerateCompareRegExp_), e = b.toLowerCase().match(goog.string.numerateCompareRegExp_), f = Math.min(c.length, e.length), h = 0; h < f; h++) {
			var k = c[h],
				m = e[h];
			if (k != m) return c = parseInt(k, 10), !isNaN(c) && (e = parseInt(m, 10), !isNaN(e) && c - e) ? c - e : k < m ? -1 : 1
		}
		return c.length != e.length ? c.length - e.length : a < b ? -1 : 1
	};
	goog.string.urlEncode = function(a) {
		return encodeURIComponent(String(a)).replace(/%2C/g, ",")
	};
	goog.string.urlDecode = function(a) {
		return decodeURIComponent(a.replace(/\+/g, " "))
	};
	goog.string.newLineToBr = function(a, b) {
		return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
	};
	goog.string.htmlEscape = function(a, b) {
		if (b) a = a.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;"), goog.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(goog.string.E_RE_, "&#101;"));
		else {
			if (!goog.string.ALL_RE_.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(goog.string.AMP_RE_, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(goog.string.LT_RE_,
				"&lt;")); - 1 != a.indexOf(">") && (a = a.replace(goog.string.GT_RE_, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(goog.string.QUOT_RE_, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(goog.string.NULL_RE_, "&#0;"));
			goog.string.DETECT_DOUBLE_ESCAPING && -1 != a.indexOf("e") && (a = a.replace(goog.string.E_RE_, "&#101;"))
		}
		return a
	};
	goog.string.AMP_RE_ = /&/g;
	goog.string.LT_RE_ = /</g;
	goog.string.GT_RE_ = />/g;
	goog.string.QUOT_RE_ = /"/g;
	goog.string.SINGLE_QUOTE_RE_ = /'/g;
	goog.string.NULL_RE_ = /\x00/g;
	goog.string.E_RE_ = /e/g;
	goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
	goog.string.unescapeEntities = function(a) {
		return goog.string.contains(a, "&") ? "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a
	};
	goog.string.unescapeEntitiesWithDocument = function(a, b) {
		return goog.string.contains(a, "&") ? goog.string.unescapeEntitiesUsingDom_(a, b) : a
	};
	goog.string.unescapeEntitiesUsingDom_ = function(a, b) {
		var c = {
				"&amp;": "&",
				"&lt;": "<",
				"&gt;": ">",
				"&quot;": '"'
			},
			e;
		e = b ? b.createElement("div") : goog.global.document.createElement("div");
		return a.replace(goog.string.HTML_ENTITY_PATTERN_, function(a, b) {
			var k = c[a];
			if (k) return k;
			if ("#" == b.charAt(0)) {
				var m = Number("0" + b.substr(1));
				isNaN(m) || (k = String.fromCharCode(m))
			}
			k || (e.innerHTML = a + " ", k = e.firstChild.nodeValue.slice(0, -1));
			return c[a] = k
		})
	};
	goog.string.unescapePureXmlEntities_ = function(a) {
		return a.replace(/&([^;]+);/g, function(a, c) {
			switch (c) {
				case "amp":
					return "&";
				case "lt":
					return "<";
				case "gt":
					return ">";
				case "quot":
					return '"';
				default:
					if ("#" == c.charAt(0)) {
						var e = Number("0" + c.substr(1));
						if (!isNaN(e)) return String.fromCharCode(e)
					}
					return a
			}
		})
	};
	goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
	goog.string.whitespaceEscape = function(a, b) {
		return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b)
	};
	goog.string.preserveSpaces = function(a) {
		return a.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP)
	};
	goog.string.stripQuotes = function(a, b) {
		for (var c = b.length, e = 0; e < c; e++) {
			var f = 1 == c ? b : b.charAt(e);
			if (a.charAt(0) == f && a.charAt(a.length - 1) == f) return a.substring(1, a.length - 1)
		}
		return a
	};
	goog.string.truncate = function(a, b, c) {
		c && (a = goog.string.unescapeEntities(a));
		a.length > b && (a = a.substring(0, b - 3) + "...");
		c && (a = goog.string.htmlEscape(a));
		return a
	};
	goog.string.truncateMiddle = function(a, b, c, e) {
		c && (a = goog.string.unescapeEntities(a));
		if (e && a.length > b) {
			e > b && (e = b);
			var f = a.length - e;
			a = a.substring(0, b - e) + "..." + a.substring(f)
		} else a.length > b && (e = Math.floor(b / 2), f = a.length - e, a = a.substring(0, e + b % 2) + "..." + a.substring(f));
		c && (a = goog.string.htmlEscape(a));
		return a
	};
	goog.string.specialEscapeChars_ = {
		"\x00": "\\0",
		"\b": "\\b",
		"\f": "\\f",
		"\n": "\\n",
		"\r": "\\r",
		"\t": "\\t",
		"\x0B": "\\x0B",
		'"': '\\"',
		"\\": "\\\\"
	};
	goog.string.jsEscapeCache_ = {
		"'": "\\'"
	};
	goog.string.quote = function(a) {
		a = String(a);
		if (a.quote) return a.quote();
		for (var b = ['"'], c = 0; c < a.length; c++) {
			var e = a.charAt(c),
				f = e.charCodeAt(0);
			b[c + 1] = goog.string.specialEscapeChars_[e] || (31 < f && 127 > f ? e : goog.string.escapeChar(e))
		}
		b.push('"');
		return b.join("")
	};
	goog.string.escapeString = function(a) {
		for (var b = [], c = 0; c < a.length; c++) b[c] = goog.string.escapeChar(a.charAt(c));
		return b.join("")
	};
	goog.string.escapeChar = function(a) {
		if (a in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[a];
		if (a in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a];
		var b = a,
			c = a.charCodeAt(0);
		if (31 < c && 127 > c) b = a;
		else {
			if (256 > c) {
				if (b = "\\x", 16 > c || 256 < c) b += "0"
			} else b = "\\u", 4096 > c && (b += "0");
			b += c.toString(16).toUpperCase()
		}
		return goog.string.jsEscapeCache_[a] = b
	};
	goog.string.contains = function(a, b) {
		return -1 != a.indexOf(b)
	};
	goog.string.caseInsensitiveContains = function(a, b) {
		return goog.string.contains(a.toLowerCase(), b.toLowerCase())
	};
	goog.string.countOf = function(a, b) {
		return a && b ? a.split(b).length - 1 : 0
	};
	goog.string.removeAt = function(a, b, c) {
		var e = a;
		0 <= b && b < a.length && 0 < c && (e = a.substr(0, b) + a.substr(b + c, a.length - b - c));
		return e
	};
	goog.string.remove = function(a, b) {
		var c = new RegExp(goog.string.regExpEscape(b), "");
		return a.replace(c, "")
	};
	goog.string.removeAll = function(a, b) {
		var c = new RegExp(goog.string.regExpEscape(b), "g");
		return a.replace(c, "")
	};
	goog.string.regExpEscape = function(a) {
		return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
	};
	goog.string.repeat = function(a, b) {
		return Array(b + 1).join(a)
	};
	goog.string.padNumber = function(a, b, c) {
		a = goog.isDef(c) ? a.toFixed(c) : String(a);
		c = a.indexOf("."); - 1 == c && (c = a.length);
		return goog.string.repeat("0", Math.max(0, b - c)) + a
	};
	goog.string.makeSafe = function(a) {
		return null == a ? "" : String(a)
	};
	goog.string.buildString = function(a) {
		return Array.prototype.join.call(arguments, "")
	};
	goog.string.getRandomString = function() {
		return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
	};
	goog.string.compareVersions = function(a, b) {
		for (var c = 0, e = goog.string.trim(String(a)).split("."), f = goog.string.trim(String(b)).split("."), h = Math.max(e.length, f.length), k = 0; 0 == c && k < h; k++) {
			var m = e[k] || "",
				p = f[k] || "",
				r = RegExp("(\\d*)(\\D*)", "g"),
				t = RegExp("(\\d*)(\\D*)", "g");
			do {
				var A = r.exec(m) || ["", "", ""],
					H = t.exec(p) || ["", "", ""];
				if (0 == A[0].length && 0 == H[0].length) break;
				var c = 0 == A[1].length ? 0 : parseInt(A[1], 10),
					s = 0 == H[1].length ? 0 : parseInt(H[1], 10),
					c = goog.string.compareElements_(c, s) || goog.string.compareElements_(0 ==
						A[2].length, 0 == H[2].length) || goog.string.compareElements_(A[2], H[2])
			} while (0 == c)
		}
		return c
	};
	goog.string.compareElements_ = function(a, b) {
		return a < b ? -1 : a > b ? 1 : 0
	};
	goog.string.HASHCODE_MAX_ = 4294967296;
	goog.string.hashCode = function(a) {
		for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= goog.string.HASHCODE_MAX_;
		return b
	};
	goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
	goog.string.createUniqueString = function() {
		return "goog_" + goog.string.uniqueStringCounter_++
	};
	goog.string.toNumber = function(a) {
		var b = Number(a);
		return 0 == b && goog.string.isEmpty(a) ? NaN : b
	};
	goog.string.isLowerCamelCase = function(a) {
		return /^[a-z]+([A-Z][a-z]*)*$/.test(a)
	};
	goog.string.isUpperCamelCase = function(a) {
		return /^([A-Z][a-z]*)+$/.test(a)
	};
	goog.string.toCamelCase = function(a) {
		return String(a).replace(/\-([a-z])/g, function(a, c) {
			return c.toUpperCase()
		})
	};
	goog.string.toSelectorCase = function(a) {
		return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
	};
	goog.string.toTitleCase = function(a, b) {
		var c = goog.isString(b) ? goog.string.regExpEscape(b) : "\\s";
		return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
			return b + c.toUpperCase()
		})
	};
	goog.string.parseInt = function(a) {
		isFinite(a) && (a = String(a));
		return goog.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
	};
	goog.string.splitLimit = function(a, b, c) {
		a = a.split(b);
		for (var e = []; 0 < c && a.length;) e.push(a.shift()), c--;
		a.length && e.push(a.join(b));
		return e
	};
	goog.asserts = {};
	goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
	goog.asserts.AssertionError = function(a, b) {
		b.unshift(a);
		goog.debug.Error.call(this, goog.string.subs.apply(null, b));
		b.shift();
		this.messagePattern = a
	};
	goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
	goog.asserts.AssertionError.prototype.name = "AssertionError";
	goog.asserts.DEFAULT_ERROR_HANDLER = function(a) {
		throw a;
	};
	goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
	goog.asserts.doAssertFailure_ = function(a, b, c, e) {
		var f = "Assertion failed";
		if (c) var f = f + (": " + c),
			h = e;
		else a && (f += ": " + a, h = b);
		a = new goog.asserts.AssertionError("" + f, h || []);
		goog.asserts.errorHandler_(a)
	};
	goog.asserts.setErrorHandler = function(a) {
		goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a)
	};
	goog.asserts.assert = function(a, b, c) {
		goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
		return a
	};
	goog.asserts.fail = function(a, b) {
		goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
	};
	goog.asserts.assertNumber = function(a, b, c) {
		goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
		return a
	};
	goog.asserts.assertString = function(a, b, c) {
		goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
		return a
	};
	goog.asserts.assertFunction = function(a, b, c) {
		goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
		return a
	};
	goog.asserts.assertObject = function(a, b, c) {
		goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
		return a
	};
	goog.asserts.assertArray = function(a, b, c) {
		goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
		return a
	};
	goog.asserts.assertBoolean = function(a, b, c) {
		goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
		return a
	};
	goog.asserts.assertElement = function(a, b, c) {
		!goog.asserts.ENABLE_ASSERTS || goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
		return a
	};
	goog.asserts.assertInstanceof = function(a, b, c, e) {
		!goog.asserts.ENABLE_ASSERTS || a instanceof b || goog.asserts.doAssertFailure_("instanceof check failed.", null, c, Array.prototype.slice.call(arguments, 3));
		return a
	};
	goog.asserts.assertObjectPrototypeIsIntact = function() {
		for (var a in Object.prototype) goog.asserts.fail(a + " should not be enumerable in Object.prototype.")
	};
	goog.array = {};
	goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
	goog.array.ASSUME_NATIVE_FUNCTIONS = !1;
	goog.array.peek = function(a) {
		return a[a.length - 1]
	};
	goog.array.last = goog.array.peek;
	goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
	goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.indexOf) ? function(a, b, c) {
		goog.asserts.assert(null != a.length);
		return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a, b, c)
	} : function(a, b, c) {
		c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
		if (goog.isString(a)) return goog.isString(b) && 1 == b.length ? a.indexOf(b, c) : -1;
		for (; c < a.length; c++)
			if (c in a && a[c] === b) return c;
		return -1
	};
	goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.lastIndexOf) ? function(a, b, c) {
		goog.asserts.assert(null != a.length);
		return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
	} : function(a, b, c) {
		c = null == c ? a.length - 1 : c;
		0 > c && (c = Math.max(0, a.length + c));
		if (goog.isString(a)) return goog.isString(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
		for (; 0 <= c; c--)
			if (c in a && a[c] === b) return c;
		return -1
	};
	goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.forEach) ? function(a, b, c) {
		goog.asserts.assert(null != a.length);
		goog.array.ARRAY_PROTOTYPE_.forEach.call(a, b, c)
	} : function(a, b, c) {
		for (var e = a.length, f = goog.isString(a) ? a.split("") : a, h = 0; h < e; h++) h in f && b.call(c, f[h], h, a)
	};
	goog.array.forEachRight = function(a, b, c) {
		for (var e = a.length, f = goog.isString(a) ? a.split("") : a, e = e - 1; 0 <= e; --e) e in f && b.call(c, f[e], e, a)
	};
	goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.filter) ? function(a, b, c) {
		goog.asserts.assert(null != a.length);
		return goog.array.ARRAY_PROTOTYPE_.filter.call(a, b, c)
	} : function(a, b, c) {
		for (var e = a.length, f = [], h = 0, k = goog.isString(a) ? a.split("") : a, m = 0; m < e; m++)
			if (m in k) {
				var p = k[m];
				b.call(c, p, m, a) && (f[h++] = p)
			}
		return f
	};
	goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.map) ? function(a, b, c) {
		goog.asserts.assert(null != a.length);
		return goog.array.ARRAY_PROTOTYPE_.map.call(a, b, c)
	} : function(a, b, c) {
		for (var e = a.length, f = Array(e), h = goog.isString(a) ? a.split("") : a, k = 0; k < e; k++) k in h && (f[k] = b.call(c, h[k], k, a));
		return f
	};
	goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduce) ? function(a, b, c, e) {
		goog.asserts.assert(null != a.length);
		e && (b = goog.bind(b, e));
		return goog.array.ARRAY_PROTOTYPE_.reduce.call(a, b, c)
	} : function(a, b, c, e) {
		var f = c;
		goog.array.forEach(a, function(c, k) {
			f = b.call(e, f, c, k, a)
		});
		return f
	};
	goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduceRight) ? function(a, b, c, e) {
		goog.asserts.assert(null != a.length);
		e && (b = goog.bind(b, e));
		return goog.array.ARRAY_PROTOTYPE_.reduceRight.call(a, b, c)
	} : function(a, b, c, e) {
		var f = c;
		goog.array.forEachRight(a, function(c, k) {
			f = b.call(e, f, c, k, a)
		});
		return f
	};
	goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.some) ? function(a, b, c) {
		goog.asserts.assert(null != a.length);
		return goog.array.ARRAY_PROTOTYPE_.some.call(a, b, c)
	} : function(a, b, c) {
		for (var e = a.length, f = goog.isString(a) ? a.split("") : a, h = 0; h < e; h++)
			if (h in f && b.call(c, f[h], h, a)) return !0;
		return !1
	};
	goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.every) ? function(a, b, c) {
		goog.asserts.assert(null != a.length);
		return goog.array.ARRAY_PROTOTYPE_.every.call(a, b, c)
	} : function(a, b, c) {
		for (var e = a.length, f = goog.isString(a) ? a.split("") : a, h = 0; h < e; h++)
			if (h in f && !b.call(c, f[h], h, a)) return !1;
		return !0
	};
	goog.array.count = function(a, b, c) {
		var e = 0;
		goog.array.forEach(a, function(a, h, k) {
			b.call(c, a, h, k) && ++e
		}, c);
		return e
	};
	goog.array.find = function(a, b, c) {
		b = goog.array.findIndex(a, b, c);
		return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b]
	};
	goog.array.findIndex = function(a, b, c) {
		for (var e = a.length, f = goog.isString(a) ? a.split("") : a, h = 0; h < e; h++)
			if (h in f && b.call(c, f[h], h, a)) return h;
		return -1
	};
	goog.array.findRight = function(a, b, c) {
		b = goog.array.findIndexRight(a, b, c);
		return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b]
	};
	goog.array.findIndexRight = function(a, b, c) {
		for (var e = a.length, f = goog.isString(a) ? a.split("") : a, e = e - 1; 0 <= e; e--)
			if (e in f && b.call(c, f[e], e, a)) return e;
		return -1
	};
	goog.array.contains = function(a, b) {
		return 0 <= goog.array.indexOf(a, b)
	};
	goog.array.isEmpty = function(a) {
		return 0 == a.length
	};
	goog.array.clear = function(a) {
		if (!goog.isArray(a))
			for (var b = a.length - 1; 0 <= b; b--) delete a[b];
		a.length = 0
	};
	goog.array.insert = function(a, b) {
		goog.array.contains(a, b) || a.push(b)
	};
	goog.array.insertAt = function(a, b, c) {
		goog.array.splice(a, c, 0, b)
	};
	goog.array.insertArrayAt = function(a, b, c) {
		goog.partial(goog.array.splice, a, c, 0).apply(null, b)
	};
	goog.array.insertBefore = function(a, b, c) {
		var e;
		2 == arguments.length || 0 > (e = goog.array.indexOf(a, c)) ? a.push(b) : goog.array.insertAt(a, b, e)
	};
	goog.array.remove = function(a, b) {
		var c = goog.array.indexOf(a, b),
			e;
		(e = 0 <= c) && goog.array.removeAt(a, c);
		return e
	};
	goog.array.removeAt = function(a, b) {
		goog.asserts.assert(null != a.length);
		return 1 == goog.array.ARRAY_PROTOTYPE_.splice.call(a, b, 1).length
	};
	goog.array.removeIf = function(a, b, c) {
		b = goog.array.findIndex(a, b, c);
		return 0 <= b ? (goog.array.removeAt(a, b), !0) : !1
	};
	goog.array.removeAllIf = function(a, b, c) {
		var e = 0;
		goog.array.forEachRight(a, function(f, h) {
			b.call(c, f, h, a) && goog.array.removeAt(a, h) && e++
		});
		return e
	};
	goog.array.concat = function(a) {
		return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
	};
	goog.array.join = function(a) {
		return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
	};
	goog.array.toArray = function(a) {
		var b = a.length;
		if (0 < b) {
			for (var c = Array(b), e = 0; e < b; e++) c[e] = a[e];
			return c
		}
		return []
	};
	goog.array.clone = goog.array.toArray;
	goog.array.extend = function(a, b) {
		for (var c = 1; c < arguments.length; c++) {
			var e = arguments[c],
				f;
			if (goog.isArray(e) || (f = goog.isArrayLike(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) a.push.apply(a, e);
			else if (f)
				for (var h = a.length, k = e.length, m = 0; m < k; m++) a[h + m] = e[m];
			else a.push(e)
		}
	};
	goog.array.splice = function(a, b, c, e) {
		goog.asserts.assert(null != a.length);
		return goog.array.ARRAY_PROTOTYPE_.splice.apply(a, goog.array.slice(arguments, 1))
	};
	goog.array.slice = function(a, b, c) {
		goog.asserts.assert(null != a.length);
		return 2 >= arguments.length ? goog.array.ARRAY_PROTOTYPE_.slice.call(a, b) : goog.array.ARRAY_PROTOTYPE_.slice.call(a, b, c)
	};
	goog.array.removeDuplicates = function(a, b, c) {
		b = b || a;
		var e = function(a) {
			return goog.isObject(k) ? "o" + goog.getUid(k) : (typeof k).charAt(0) + k
		};
		c = c || e;
		for (var e = {}, f = 0, h = 0; h < a.length;) {
			var k = a[h++],
				m = c(k);
			Object.prototype.hasOwnProperty.call(e, m) || (e[m] = !0, b[f++] = k)
		}
		b.length = f
	};
	goog.array.binarySearch = function(a, b, c) {
		return goog.array.binarySearch_(a, c || goog.array.defaultCompare, !1, b)
	};
	goog.array.binarySelect = function(a, b, c) {
		return goog.array.binarySearch_(a, b, !0, void 0, c)
	};
	goog.array.binarySearch_ = function(a, b, c, e, f) {
		for (var h = 0, k = a.length, m; h < k;) {
			var p = h + k >> 1,
				r;
			r = c ? b.call(f, a[p], p, a) : b(e, a[p]);
			0 < r ? h = p + 1 : (k = p, m = !r)
		}
		return m ? h : ~h
	};
	goog.array.sort = function(a, b) {
		a.sort(b || goog.array.defaultCompare)
	};
	goog.array.stableSort = function(a, b) {
		for (var c = 0; c < a.length; c++) a[c] = {
			index: c,
			value: a[c]
		};
		var e = b || goog.array.defaultCompare;
		goog.array.sort(a, function(a, b) {
			return e(a.value, b.value) || a.index - b.index
		});
		for (c = 0; c < a.length; c++) a[c] = a[c].value
	};
	goog.array.sortByKey = function(a, b, c) {
		var e = c || goog.array.defaultCompare;
		goog.array.sort(a, function(a, c) {
			return e(b(a), b(c))
		})
	};
	goog.array.sortObjectsByKey = function(a, b, c) {
		goog.array.sortByKey(a, function(a) {
			return a[b]
		}, c)
	};
	goog.array.isSorted = function(a, b, c) {
		b = b || goog.array.defaultCompare;
		for (var e = 1; e < a.length; e++) {
			var f = b(a[e - 1], a[e]);
			if (0 < f || 0 == f && c) return !1
		}
		return !0
	};
	goog.array.equals = function(a, b, c) {
		if (!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length) return !1;
		var e = a.length;
		c = c || goog.array.defaultCompareEquality;
		for (var f = 0; f < e; f++)
			if (!c(a[f], b[f])) return !1;
		return !0
	};
	goog.array.compare3 = function(a, b, c) {
		c = c || goog.array.defaultCompare;
		for (var e = Math.min(a.length, b.length), f = 0; f < e; f++) {
			var h = c(a[f], b[f]);
			if (0 != h) return h
		}
		return goog.array.defaultCompare(a.length, b.length)
	};
	goog.array.defaultCompare = function(a, b) {
		return a > b ? 1 : a < b ? -1 : 0
	};
	goog.array.defaultCompareEquality = function(a, b) {
		return a === b
	};
	goog.array.binaryInsert = function(a, b, c) {
		c = goog.array.binarySearch(a, b, c);
		return 0 > c ? (goog.array.insertAt(a, b, -(c + 1)), !0) : !1
	};
	goog.array.binaryRemove = function(a, b, c) {
		b = goog.array.binarySearch(a, b, c);
		return 0 <= b ? goog.array.removeAt(a, b) : !1
	};
	goog.array.bucket = function(a, b, c) {
		for (var e = {}, f = 0; f < a.length; f++) {
			var h = a[f],
				k = b.call(c, h, f, a);
			goog.isDef(k) && (e[k] || (e[k] = [])).push(h)
		}
		return e
	};
	goog.array.toObject = function(a, b, c) {
		var e = {};
		goog.array.forEach(a, function(f, h) {
			e[b.call(c, f, h, a)] = f
		});
		return e
	};
	goog.array.range = function(a, b, c) {
		var e = [],
			f = 0,
			h = a;
		c = c || 1;
		void 0 !== b && (f = a, h = b);
		if (0 > c * (h - f)) return [];
		if (0 < c)
			for (a = f; a < h; a += c) e.push(a);
		else
			for (a = f; a > h; a += c) e.push(a);
		return e
	};
	goog.array.repeat = function(a, b) {
		for (var c = [], e = 0; e < b; e++) c[e] = a;
		return c
	};
	goog.array.flatten = function(a) {
		for (var b = [], c = 0; c < arguments.length; c++) {
			var e = arguments[c];
			goog.isArray(e) ? b.push.apply(b, goog.array.flatten.apply(null, e)) : b.push(e)
		}
		return b
	};
	goog.array.rotate = function(a, b) {
		goog.asserts.assert(null != a.length);
		a.length && (b %= a.length, 0 < b ? goog.array.ARRAY_PROTOTYPE_.unshift.apply(a, a.splice(-b, b)) : 0 > b && goog.array.ARRAY_PROTOTYPE_.push.apply(a, a.splice(0, -b)));
		return a
	};
	goog.array.moveItem = function(a, b, c) {
		goog.asserts.assert(0 <= b && b < a.length);
		goog.asserts.assert(0 <= c && c < a.length);
		b = goog.array.ARRAY_PROTOTYPE_.splice.call(a, b, 1);
		goog.array.ARRAY_PROTOTYPE_.splice.call(a, c, 0, b[0])
	};
	goog.array.zip = function(a) {
		if (!arguments.length) return [];
		for (var b = [], c = 0;; c++) {
			for (var e = [], f = 0; f < arguments.length; f++) {
				var h = arguments[f];
				if (c >= h.length) return b;
				e.push(h[c])
			}
			b.push(e)
		}
	};
	goog.array.shuffle = function(a, b) {
		for (var c = b || Math.random, e = a.length - 1; 0 < e; e--) {
			var f = Math.floor(c() * (e + 1)),
				h = a[e];
			a[e] = a[f];
			a[f] = h
		}
	};
	goog.labs = {};
	goog.labs.userAgent = {};
	goog.labs.userAgent.util = {};
	goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
		var a = goog.labs.userAgent.util.getNavigator_();
		return a && (a = a.userAgent) ? a : ""
	};
	goog.labs.userAgent.util.getNavigator_ = function() {
		return goog.global.navigator
	};
	goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
	goog.labs.userAgent.util.setUserAgent = function(a) {
		goog.labs.userAgent.util.userAgent_ = a || goog.labs.userAgent.util.getNativeUserAgentString_()
	};
	goog.labs.userAgent.util.getUserAgent = function() {
		return goog.labs.userAgent.util.userAgent_
	};
	goog.labs.userAgent.util.matchUserAgent = function(a) {
		var b = goog.labs.userAgent.util.getUserAgent();
		return goog.string.contains(b, a)
	};
	goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(a) {
		var b = goog.labs.userAgent.util.getUserAgent();
		return goog.string.caseInsensitiveContains(b, a)
	};
	goog.labs.userAgent.util.extractVersionTuples = function(a) {
		for (var b = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], e; e = b.exec(a);) c.push([e[1], e[2], e[3] || void 0]);
		return c
	};
	goog.object = {};
	goog.object.forEach = function(a, b, c) {
		for (var e in a) b.call(c, a[e], e, a)
	};
	goog.object.filter = function(a, b, c) {
		var e = {},
			f;
		for (f in a) b.call(c, a[f], f, a) && (e[f] = a[f]);
		return e
	};
	goog.object.map = function(a, b, c) {
		var e = {},
			f;
		for (f in a) e[f] = b.call(c, a[f], f, a);
		return e
	};
	goog.object.some = function(a, b, c) {
		for (var e in a)
			if (b.call(c, a[e], e, a)) return !0;
		return !1
	};
	goog.object.every = function(a, b, c) {
		for (var e in a)
			if (!b.call(c, a[e], e, a)) return !1;
		return !0
	};
	goog.object.getCount = function(a) {
		var b = 0,
			c;
		for (c in a) b++;
		return b
	};
	goog.object.getAnyKey = function(a) {
		for (var b in a) return b
	};
	goog.object.getAnyValue = function(a) {
		for (var b in a) return a[b]
	};
	goog.object.contains = function(a, b) {
		return goog.object.containsValue(a, b)
	};
	goog.object.getValues = function(a) {
		var b = [],
			c = 0,
			e;
		for (e in a) b[c++] = a[e];
		return b
	};
	goog.object.getKeys = function(a) {
		var b = [],
			c = 0,
			e;
		for (e in a) b[c++] = e;
		return b
	};
	goog.object.getValueByKeys = function(a, b) {
		for (var c = goog.isArrayLike(b), e = c ? b : arguments, c = c ? 0 : 1; c < e.length && (a = a[e[c]], goog.isDef(a)); c++);
		return a
	};
	goog.object.containsKey = function(a, b) {
		return b in a
	};
	goog.object.containsValue = function(a, b) {
		for (var c in a)
			if (a[c] == b) return !0;
		return !1
	};
	goog.object.findKey = function(a, b, c) {
		for (var e in a)
			if (b.call(c, a[e], e, a)) return e
	};
	goog.object.findValue = function(a, b, c) {
		return (b = goog.object.findKey(a, b, c)) && a[b]
	};
	goog.object.isEmpty = function(a) {
		for (var b in a) return !1;
		return !0
	};
	goog.object.clear = function(a) {
		for (var b in a) delete a[b]
	};
	goog.object.remove = function(a, b) {
		var c;
		(c = b in a) && delete a[b];
		return c
	};
	goog.object.add = function(a, b, c) {
		if (b in a) throw Error('The object already contains the key "' + b + '"');
		goog.object.set(a, b, c)
	};
	goog.object.get = function(a, b, c) {
		return b in a ? a[b] : c
	};
	goog.object.set = function(a, b, c) {
		a[b] = c
	};
	goog.object.setIfUndefined = function(a, b, c) {
		return b in a ? a[b] : a[b] = c
	};
	goog.object.equals = function(a, b) {
		if (!goog.array.equals(goog.object.getKeys(a), goog.object.getKeys(b))) return !1;
		for (var c in a)
			if (a[c] !== b[c]) return !1;
		return !0
	};
	goog.object.clone = function(a) {
		var b = {},
			c;
		for (c in a) b[c] = a[c];
		return b
	};
	goog.object.unsafeClone = function(a) {
		var b = goog.typeOf(a);
		if ("object" == b || "array" == b) {
			if (a.clone) return a.clone();
			var b = "array" == b ? [] : {},
				c;
			for (c in a) b[c] = goog.object.unsafeClone(a[c]);
			return b
		}
		return a
	};
	goog.object.transpose = function(a) {
		var b = {},
			c;
		for (c in a) b[a[c]] = c;
		return b
	};
	goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	goog.object.extend = function(a, b) {
		for (var c, e, f = 1; f < arguments.length; f++) {
			e = arguments[f];
			for (c in e) a[c] = e[c];
			for (var h = 0; h < goog.object.PROTOTYPE_FIELDS_.length; h++) c = goog.object.PROTOTYPE_FIELDS_[h], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
		}
	};
	goog.object.create = function(a) {
		var b = arguments.length;
		if (1 == b && goog.isArray(arguments[0])) return goog.object.create.apply(null, arguments[0]);
		if (b % 2) throw Error("Uneven number of arguments");
		for (var c = {}, e = 0; e < b; e += 2) c[arguments[e]] = arguments[e + 1];
		return c
	};
	goog.object.createSet = function(a) {
		var b = arguments.length;
		if (1 == b && goog.isArray(arguments[0])) return goog.object.createSet.apply(null, arguments[0]);
		for (var c = {}, e = 0; e < b; e++) c[arguments[e]] = !0;
		return c
	};
	goog.object.createImmutableView = function(a) {
		var b = a;
		Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b));
		return b
	};
	goog.object.isImmutableView = function(a) {
		return !!Object.isFrozen && Object.isFrozen(a)
	};
	goog.labs.userAgent.browser = {};
	goog.labs.userAgent.browser.matchOpera_ = function() {
		return goog.labs.userAgent.util.matchUserAgent("Opera") || goog.labs.userAgent.util.matchUserAgent("OPR")
	};
	goog.labs.userAgent.browser.matchIE_ = function() {
		return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
	};
	goog.labs.userAgent.browser.matchFirefox_ = function() {
		return goog.labs.userAgent.util.matchUserAgent("Firefox")
	};
	goog.labs.userAgent.browser.matchSafari_ = function() {
		return goog.labs.userAgent.util.matchUserAgent("Safari") && !goog.labs.userAgent.util.matchUserAgent("Chrome") && !goog.labs.userAgent.util.matchUserAgent("CriOS") && !goog.labs.userAgent.util.matchUserAgent("Android")
	};
	goog.labs.userAgent.browser.matchChrome_ = function() {
		return goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")
	};
	goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
		return !goog.labs.userAgent.browser.isChrome() && goog.labs.userAgent.util.matchUserAgent("Android")
	};
	goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
	goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
	goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
	goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
	goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
	goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
	goog.labs.userAgent.browser.isSilk = function() {
		return goog.labs.userAgent.util.matchUserAgent("Silk")
	};
	goog.labs.userAgent.browser.getVersion = function() {
		function a(a) {
			a = goog.array.find(a, e);
			return c[a] || ""
		}
		var b = goog.labs.userAgent.util.getUserAgent();
		if (goog.labs.userAgent.browser.isIE()) return goog.labs.userAgent.browser.getIEVersion_(b);
		var b = goog.labs.userAgent.util.extractVersionTuples(b),
			c = {};
		goog.array.forEach(b, function(a) {
			c[a[0]] = a[1]
		});
		var e = goog.partial(goog.object.containsKey, c);
		return goog.labs.userAgent.browser.isOpera() ? a(["Version", "Opera", "OPR"]) : goog.labs.userAgent.browser.isChrome() ?
			a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
	};
	goog.labs.userAgent.browser.isVersionOrHigher = function(a) {
		return 0 <= goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(), a)
	};
	goog.labs.userAgent.browser.getIEVersion_ = function(a) {
		var b = /rv: *([\d\.]*)/.exec(a);
		if (b && b[1]) return b[1];
		var b = "",
			c = /MSIE +([\d\.]+)/.exec(a);
		if (c && c[1])
			if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
				if (a && a[1]) switch (a[1]) {
					case "4.0":
						b = "8.0";
						break;
					case "5.0":
						b = "9.0";
						break;
					case "6.0":
						b = "10.0";
						break;
					case "7.0":
						b = "11.0"
				} else b = "7.0";
				else b = c[1];
		return b
	};
	goog.labs.userAgent.engine = {};
	goog.labs.userAgent.engine.isPresto = function() {
		return goog.labs.userAgent.util.matchUserAgent("Presto")
	};
	goog.labs.userAgent.engine.isTrident = function() {
		return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
	};
	goog.labs.userAgent.engine.isWebKit = function() {
		return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit")
	};
	goog.labs.userAgent.engine.isGecko = function() {
		return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident()
	};
	goog.labs.userAgent.engine.getVersion = function() {
		var a = goog.labs.userAgent.util.getUserAgent();
		if (a) {
			var a = goog.labs.userAgent.util.extractVersionTuples(a),
				b = a[1];
			if (b) return "Gecko" == b[0] ? goog.labs.userAgent.engine.getVersionForKey_(a, "Firefox") : b[1];
			var a = a[0],
				c;
			if (a && (c = a[2]) && (c = /Trident\/([^\s;]+)/.exec(c))) return c[1]
		}
		return ""
	};
	goog.labs.userAgent.engine.isVersionOrHigher = function(a) {
		return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), a)
	};
	goog.labs.userAgent.engine.getVersionForKey_ = function(a, b) {
		var c = goog.array.find(a, function(a) {
			return b == a[0]
		});
		return c && c[1] || ""
	};
	goog.userAgent = {};
	goog.userAgent.ASSUME_IE = !1;
	goog.userAgent.ASSUME_GECKO = !1;
	goog.userAgent.ASSUME_WEBKIT = !1;
	goog.userAgent.ASSUME_MOBILE_WEBKIT = !1;
	goog.userAgent.ASSUME_OPERA = !1;
	goog.userAgent.ASSUME_ANY_VERSION = !1;
	goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
	goog.userAgent.getUserAgentString = function() {
		return goog.labs.userAgent.util.getUserAgent()
	};
	goog.userAgent.getNavigator = function() {
		return goog.global.navigator || null
	};
	goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
	goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
	goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
	goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
	goog.userAgent.isMobile_ = function() {
		return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile")
	};
	goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
	goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
	goog.userAgent.determinePlatform_ = function() {
		var a = goog.userAgent.getNavigator();
		return a && a.platform || ""
	};
	goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
	goog.userAgent.ASSUME_MAC = !1;
	goog.userAgent.ASSUME_WINDOWS = !1;
	goog.userAgent.ASSUME_LINUX = !1;
	goog.userAgent.ASSUME_X11 = !1;
	goog.userAgent.ASSUME_ANDROID = !1;
	goog.userAgent.ASSUME_IPHONE = !1;
	goog.userAgent.ASSUME_IPAD = !1;
	goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD;
	goog.userAgent.initPlatform_ = function() {
		goog.userAgent.detectedMac_ = goog.string.contains(goog.userAgent.PLATFORM, "Mac");
		goog.userAgent.detectedWindows_ = goog.string.contains(goog.userAgent.PLATFORM, "Win");
		goog.userAgent.detectedLinux_ = goog.string.contains(goog.userAgent.PLATFORM, "Linux");
		goog.userAgent.detectedX11_ = !!goog.userAgent.getNavigator() && goog.string.contains(goog.userAgent.getNavigator().appVersion || "", "X11");
		var a = goog.userAgent.getUserAgentString();
		goog.userAgent.detectedAndroid_ = !!a &&
			goog.string.contains(a, "Android");
		goog.userAgent.detectedIPhone_ = !!a && goog.string.contains(a, "iPhone");
		goog.userAgent.detectedIPad_ = !!a && goog.string.contains(a, "iPad")
	};
	goog.userAgent.PLATFORM_KNOWN_ || goog.userAgent.initPlatform_();
	goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.userAgent.detectedMac_;
	goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.userAgent.detectedWindows_;
	goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.detectedLinux_;
	goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.detectedX11_;
	goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.userAgent.detectedAndroid_;
	goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.userAgent.detectedIPhone_;
	goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.userAgent.detectedIPad_;
	goog.userAgent.determineVersion_ = function() {
		var a = "",
			b;
		if (goog.userAgent.OPERA && goog.global.opera) return a = goog.global.opera.version, goog.isFunction(a) ? a() : a;
		goog.userAgent.GECKO ? b = /rv\:([^\);]+)(\)|;)/ : goog.userAgent.IE ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : goog.userAgent.WEBKIT && (b = /WebKit\/(\S+)/);
		b && (a = (a = b.exec(goog.userAgent.getUserAgentString())) ? a[1] : "");
		return goog.userAgent.IE && (b = goog.userAgent.getDocumentMode_(), b > parseFloat(a)) ? String(b) : a
	};
	goog.userAgent.getDocumentMode_ = function() {
		var a = goog.global.document;
		return a ? a.documentMode : void 0
	};
	goog.userAgent.VERSION = goog.userAgent.determineVersion_();
	goog.userAgent.compare = function(a, b) {
		return goog.string.compareVersions(a, b)
	};
	goog.userAgent.isVersionOrHigherCache_ = {};
	goog.userAgent.isVersionOrHigher = function(a) {
		return goog.userAgent.ASSUME_ANY_VERSION || goog.userAgent.isVersionOrHigherCache_[a] || (goog.userAgent.isVersionOrHigherCache_[a] = 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a))
	};
	goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
	goog.userAgent.isDocumentModeOrHigher = function(a) {
		return goog.userAgent.IE && goog.userAgent.DOCUMENT_MODE >= a
	};
	goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
	goog.userAgent.DOCUMENT_MODE = function() {
		var a = goog.global.document;
		return a && goog.userAgent.IE ? goog.userAgent.getDocumentMode_() || ("CSS1Compat" == a.compatMode ? parseInt(goog.userAgent.VERSION, 10) : 5) : void 0
	}();
	goog.dom.BrowserFeature = {
		CAN_ADD_NAME_OR_TYPE_ATTRIBUTES: !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),
		CAN_USE_CHILDREN_ATTRIBUTE: !goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) || goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher("1.9.1"),
		CAN_USE_INNER_TEXT: goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"),
		CAN_USE_PARENT_ELEMENT_PROPERTY: goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT,
		INNER_HTML_NEEDS_SCOPED_ELEMENT: goog.userAgent.IE,
		LEGACY_IE_RANGES: goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)
	};
	goog.dom.TagName = {
		A: "A",
		ABBR: "ABBR",
		ACRONYM: "ACRONYM",
		ADDRESS: "ADDRESS",
		APPLET: "APPLET",
		AREA: "AREA",
		ARTICLE: "ARTICLE",
		ASIDE: "ASIDE",
		AUDIO: "AUDIO",
		B: "B",
		BASE: "BASE",
		BASEFONT: "BASEFONT",
		BDI: "BDI",
		BDO: "BDO",
		BIG: "BIG",
		BLOCKQUOTE: "BLOCKQUOTE",
		BODY: "BODY",
		BR: "BR",
		BUTTON: "BUTTON",
		CANVAS: "CANVAS",
		CAPTION: "CAPTION",
		CENTER: "CENTER",
		CITE: "CITE",
		CODE: "CODE",
		COL: "COL",
		COLGROUP: "COLGROUP",
		COMMAND: "COMMAND",
		DATA: "DATA",
		DATALIST: "DATALIST",
		DD: "DD",
		DEL: "DEL",
		DETAILS: "DETAILS",
		DFN: "DFN",
		DIALOG: "DIALOG",
		DIR: "DIR",
		DIV: "DIV",
		DL: "DL",
		DT: "DT",
		EM: "EM",
		EMBED: "EMBED",
		FIELDSET: "FIELDSET",
		FIGCAPTION: "FIGCAPTION",
		FIGURE: "FIGURE",
		FONT: "FONT",
		FOOTER: "FOOTER",
		FORM: "FORM",
		FRAME: "FRAME",
		FRAMESET: "FRAMESET",
		H1: "H1",
		H2: "H2",
		H3: "H3",
		H4: "H4",
		H5: "H5",
		H6: "H6",
		HEAD: "HEAD",
		HEADER: "HEADER",
		HGROUP: "HGROUP",
		HR: "HR",
		HTML: "HTML",
		I: "I",
		IFRAME: "IFRAME",
		IMG: "IMG",
		INPUT: "INPUT",
		INS: "INS",
		ISINDEX: "ISINDEX",
		KBD: "KBD",
		KEYGEN: "KEYGEN",
		LABEL: "LABEL",
		LEGEND: "LEGEND",
		LI: "LI",
		LINK: "LINK",
		MAP: "MAP",
		MARK: "MARK",
		MATH: "MATH",
		MENU: "MENU",
		META: "META",
		METER: "METER",
		NAV: "NAV",
		NOFRAMES: "NOFRAMES",
		NOSCRIPT: "NOSCRIPT",
		OBJECT: "OBJECT",
		OL: "OL",
		OPTGROUP: "OPTGROUP",
		OPTION: "OPTION",
		OUTPUT: "OUTPUT",
		P: "P",
		PARAM: "PARAM",
		PRE: "PRE",
		PROGRESS: "PROGRESS",
		Q: "Q",
		RP: "RP",
		RT: "RT",
		RUBY: "RUBY",
		S: "S",
		SAMP: "SAMP",
		SCRIPT: "SCRIPT",
		SECTION: "SECTION",
		SELECT: "SELECT",
		SMALL: "SMALL",
		SOURCE: "SOURCE",
		SPAN: "SPAN",
		STRIKE: "STRIKE",
		STRONG: "STRONG",
		STYLE: "STYLE",
		SUB: "SUB",
		SUMMARY: "SUMMARY",
		SUP: "SUP",
		SVG: "SVG",
		TABLE: "TABLE",
		TBODY: "TBODY",
		TD: "TD",
		TEXTAREA: "TEXTAREA",
		TFOOT: "TFOOT",
		TH: "TH",
		THEAD: "THEAD",
		TIME: "TIME",
		TITLE: "TITLE",
		TR: "TR",
		TRACK: "TRACK",
		TT: "TT",
		U: "U",
		UL: "UL",
		VAR: "VAR",
		VIDEO: "VIDEO",
		WBR: "WBR"
	};
	goog.math = {};
	goog.math.randomInt = function(a) {
		return Math.floor(Math.random() * a)
	};
	goog.math.uniformRandom = function(a, b) {
		return a + Math.random() * (b - a)
	};
	goog.math.clamp = function(a, b, c) {
		return Math.min(Math.max(a, b), c)
	};
	goog.math.modulo = function(a, b) {
		var c = a % b;
		return 0 > c * b ? c + b : c
	};
	goog.math.lerp = function(a, b, c) {
		return a + c * (b - a)
	};
	goog.math.nearlyEquals = function(a, b, c) {
		return Math.abs(a - b) <= (c || 1E-6)
	};
	goog.math.standardAngle = function(a) {
		return goog.math.modulo(a, 360)
	};
	goog.math.standardAngleInRadians = function(a) {
		return goog.math.modulo(a, 2 * Math.PI)
	};
	goog.math.toRadians = function(a) {
		return a * Math.PI / 180
	};
	goog.math.toDegrees = function(a) {
		return 180 * a / Math.PI
	};
	goog.math.angleDx = function(a, b) {
		return b * Math.cos(goog.math.toRadians(a))
	};
	goog.math.angleDy = function(a, b) {
		return b * Math.sin(goog.math.toRadians(a))
	};
	goog.math.angle = function(a, b, c, e) {
		return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(e - b, c - a)))
	};
	goog.math.angleDifference = function(a, b) {
		var c = goog.math.standardAngle(b) - goog.math.standardAngle(a);
		180 < c ? c -= 360 : -180 >= c && (c = 360 + c);
		return c
	};
	goog.math.sign = function(a) {
		return 0 == a ? 0 : 0 > a ? -1 : 1
	};
	goog.math.longestCommonSubsequence = function(a, b, c, e) {
		c = c || function(a, b) {
			return a == b
		};
		e = e || function(b, c) {
			return a[b]
		};
		for (var f = a.length, h = b.length, k = [], m = 0; m < f + 1; m++) k[m] = [], k[m][0] = 0;
		for (var p = 0; p < h + 1; p++) k[0][p] = 0;
		for (m = 1; m <= f; m++)
			for (p = 1; p <= h; p++) c(a[m - 1], b[p - 1]) ? k[m][p] = k[m - 1][p - 1] + 1 : k[m][p] = Math.max(k[m - 1][p], k[m][p - 1]);
		for (var r = [], m = f, p = h; 0 < m && 0 < p;) c(a[m - 1], b[p - 1]) ? (r.unshift(e(m - 1, p - 1)), m--, p--) : k[m - 1][p] > k[m][p - 1] ? m-- : p--;
		return r
	};
	goog.math.sum = function(a) {
		return goog.array.reduce(arguments, function(a, c) {
			return a + c
		}, 0)
	};
	goog.math.average = function(a) {
		return goog.math.sum.apply(null, arguments) / arguments.length
	};
	goog.math.sampleVariance = function(a) {
		var b = arguments.length;
		if (2 > b) return 0;
		var c = goog.math.average.apply(null, arguments);
		return goog.math.sum.apply(null, goog.array.map(arguments, function(a) {
			return Math.pow(a - c, 2)
		})) / (b - 1)
	};
	goog.math.standardDeviation = function(a) {
		return Math.sqrt(goog.math.sampleVariance.apply(null, arguments))
	};
	goog.math.isInt = function(a) {
		return isFinite(a) && 0 == a % 1
	};
	goog.math.isFiniteNumber = function(a) {
		return isFinite(a) && !isNaN(a)
	};
	goog.math.log10Floor = function(a) {
		if (0 < a) {
			var b = Math.round(Math.log(a) * Math.LOG10E);
			return b - (parseFloat("1e" + b) > a)
		}
		return 0 == a ? -Infinity : NaN
	};
	goog.math.safeFloor = function(a, b) {
		goog.asserts.assert(!goog.isDef(b) || 0 < b);
		return Math.floor(a + (b || 2E-15))
	};
	goog.math.safeCeil = function(a, b) {
		goog.asserts.assert(!goog.isDef(b) || 0 < b);
		return Math.ceil(a - (b || 2E-15))
	};
	goog.math.Coordinate = function(a, b) {
		this.x = goog.isDef(a) ? a : 0;
		this.y = goog.isDef(b) ? b : 0
	};
	goog.math.Coordinate.prototype.clone = function() {
		return new goog.math.Coordinate(this.x, this.y)
	};
	goog.DEBUG && (goog.math.Coordinate.prototype.toString = function() {
		return "(" + this.x + ", " + this.y + ")"
	});
	goog.math.Coordinate.equals = function(a, b) {
		return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
	};
	goog.math.Coordinate.distance = function(a, b) {
		var c = a.x - b.x,
			e = a.y - b.y;
		return Math.sqrt(c * c + e * e)
	};
	goog.math.Coordinate.magnitude = function(a) {
		return Math.sqrt(a.x * a.x + a.y * a.y)
	};
	goog.math.Coordinate.azimuth = function(a) {
		return goog.math.angle(0, 0, a.x, a.y)
	};
	goog.math.Coordinate.squaredDistance = function(a, b) {
		var c = a.x - b.x,
			e = a.y - b.y;
		return c * c + e * e
	};
	goog.math.Coordinate.difference = function(a, b) {
		return new goog.math.Coordinate(a.x - b.x, a.y - b.y)
	};
	goog.math.Coordinate.sum = function(a, b) {
		return new goog.math.Coordinate(a.x + b.x, a.y + b.y)
	};
	goog.math.Coordinate.prototype.ceil = function() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this
	};
	goog.math.Coordinate.prototype.floor = function() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this
	};
	goog.math.Coordinate.prototype.round = function() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this
	};
	goog.math.Coordinate.prototype.translate = function(a, b) {
		a instanceof goog.math.Coordinate ? (this.x += a.x, this.y += a.y) : (this.x += a, goog.isNumber(b) && (this.y += b));
		return this
	};
	goog.math.Coordinate.prototype.scale = function(a, b) {
		var c = goog.isNumber(b) ? b : a;
		this.x *= a;
		this.y *= c;
		return this
	};
	goog.math.Coordinate.prototype.rotateRadians = function(a, b) {
		var c = b || new goog.math.Coordinate(0, 0),
			e = this.x,
			f = this.y,
			h = Math.cos(a),
			k = Math.sin(a);
		this.x = (e - c.x) * h - (f - c.y) * k + c.x;
		this.y = (e - c.x) * k + (f - c.y) * h + c.y
	};
	goog.math.Coordinate.prototype.rotateDegrees = function(a, b) {
		this.rotateRadians(goog.math.toRadians(a), b)
	};
	goog.math.Size = function(a, b) {
		this.width = a;
		this.height = b
	};
	goog.math.Size.equals = function(a, b) {
		return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
	};
	goog.math.Size.prototype.clone = function() {
		return new goog.math.Size(this.width, this.height)
	};
	goog.DEBUG && (goog.math.Size.prototype.toString = function() {
		return "(" + this.width + " x " + this.height + ")"
	});
	goog.math.Size.prototype.getLongest = function() {
		return Math.max(this.width, this.height)
	};
	goog.math.Size.prototype.getShortest = function() {
		return Math.min(this.width, this.height)
	};
	goog.math.Size.prototype.area = function() {
		return this.width * this.height
	};
	goog.math.Size.prototype.perimeter = function() {
		return 2 * (this.width + this.height)
	};
	goog.math.Size.prototype.aspectRatio = function() {
		return this.width / this.height
	};
	goog.math.Size.prototype.isEmpty = function() {
		return !this.area()
	};
	goog.math.Size.prototype.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	goog.math.Size.prototype.fitsInside = function(a) {
		return this.width <= a.width && this.height <= a.height
	};
	goog.math.Size.prototype.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	goog.math.Size.prototype.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	goog.math.Size.prototype.scale = function(a, b) {
		var c = goog.isNumber(b) ? b : a;
		this.width *= a;
		this.height *= c;
		return this
	};
	goog.math.Size.prototype.scaleToFit = function(a) {
		a = this.aspectRatio() > a.aspectRatio() ? a.width / this.width : a.height / this.height;
		return this.scale(a)
	};
	goog.dom.ASSUME_QUIRKS_MODE = !1;
	goog.dom.ASSUME_STANDARDS_MODE = !1;
	goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
	goog.dom.getDomHelper = function(a) {
		return a ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(a)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper)
	};
	goog.dom.getDocument = function() {
		return document
	};
	goog.dom.getElement = function(a) {
		return goog.dom.getElementHelper_(document, a)
	};
	goog.dom.getElementHelper_ = function(a, b) {
		return goog.isString(b) ? a.getElementById(b) : b
	};
	goog.dom.getRequiredElement = function(a) {
		return goog.dom.getRequiredElementHelper_(document, a)
	};
	goog.dom.getRequiredElementHelper_ = function(a, b) {
		goog.asserts.assertString(b);
		var c = goog.dom.getElementHelper_(a, b);
		return c = goog.asserts.assertElement(c, "No element found with id: " + b)
	};
	goog.dom.$ = goog.dom.getElement;
	goog.dom.getElementsByTagNameAndClass = function(a, b, c) {
		return goog.dom.getElementsByTagNameAndClass_(document, a, b, c)
	};
	goog.dom.getElementsByClass = function(a, b) {
		var c = b || document;
		return goog.dom.canUseQuerySelector_(c) ? c.querySelectorAll("." + a) : goog.dom.getElementsByTagNameAndClass_(document, "*", a, b)
	};
	goog.dom.getElementByClass = function(a, b) {
		var c = b || document,
			e = null;
		return (e = goog.dom.canUseQuerySelector_(c) ? c.querySelector("." + a) : goog.dom.getElementsByTagNameAndClass_(document, "*", a, b)[0]) || null
	};
	goog.dom.getRequiredElementByClass = function(a, b) {
		var c = goog.dom.getElementByClass(a, b);
		return goog.asserts.assert(c, "No element found with className: " + a)
	};
	goog.dom.canUseQuerySelector_ = function(a) {
		return !(!a.querySelectorAll || !a.querySelector)
	};
	goog.dom.getElementsByTagNameAndClass_ = function(a, b, c, e) {
		a = e || a;
		b = b && "*" != b ? b.toUpperCase() : "";
		if (goog.dom.canUseQuerySelector_(a) && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
		if (c && a.getElementsByClassName) {
			a = a.getElementsByClassName(c);
			if (b) {
				e = {};
				for (var f = 0, h = 0, k; k = a[h]; h++) b == k.nodeName && (e[f++] = k);
				e.length = f;
				return e
			}
			return a
		}
		a = a.getElementsByTagName(b || "*");
		if (c) {
			e = {};
			for (h = f = 0; k = a[h]; h++) b = k.className, "function" == typeof b.split && goog.array.contains(b.split(/\s+/), c) && (e[f++] = k);
			e.length =
				f;
			return e
		}
		return a
	};
	goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
	goog.dom.setProperties = function(a, b) {
		goog.object.forEach(b, function(b, e) {
			"style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : e in goog.dom.DIRECT_ATTRIBUTE_MAP_ ? a.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[e], b) : goog.string.startsWith(e, "aria-") || goog.string.startsWith(e, "data-") ? a.setAttribute(e, b) : a[e] = b
		})
	};
	goog.dom.DIRECT_ATTRIBUTE_MAP_ = {
		cellpadding: "cellPadding",
		cellspacing: "cellSpacing",
		colspan: "colSpan",
		frameborder: "frameBorder",
		height: "height",
		maxlength: "maxLength",
		role: "role",
		rowspan: "rowSpan",
		type: "type",
		usemap: "useMap",
		valign: "vAlign",
		width: "width"
	};
	goog.dom.getViewportSize = function(a) {
		return goog.dom.getViewportSize_(a || window)
	};
	goog.dom.getViewportSize_ = function(a) {
		a = a.document;
		a = goog.dom.isCss1CompatMode_(a) ? a.documentElement : a.body;
		return new goog.math.Size(a.clientWidth, a.clientHeight)
	};
	goog.dom.getDocumentHeight = function() {
		return goog.dom.getDocumentHeight_(window)
	};
	goog.dom.getDocumentHeight_ = function(a) {
		var b = a.document,
			c = 0;
		if (b) {
			var c = b.body,
				e = b.documentElement;
			if (!e || !c) return 0;
			a = goog.dom.getViewportSize_(a).height;
			if (goog.dom.isCss1CompatMode_(b) && e.scrollHeight) c = e.scrollHeight != a ? e.scrollHeight : e.offsetHeight;
			else {
				var b = e.scrollHeight,
					f = e.offsetHeight;
				e.clientHeight != f && (b = c.scrollHeight, f = c.offsetHeight);
				c = b > a ? b > f ? b : f : b < f ? b : f
			}
		}
		return c
	};
	goog.dom.getPageScroll = function(a) {
		return goog.dom.getDomHelper((a || goog.global || window).document).getDocumentScroll()
	};
	goog.dom.getDocumentScroll = function() {
		return goog.dom.getDocumentScroll_(document)
	};
	goog.dom.getDocumentScroll_ = function(a) {
		var b = goog.dom.getDocumentScrollElement_(a);
		a = goog.dom.getWindow_(a);
		return goog.userAgent.IE && goog.userAgent.isVersionOrHigher("10") && a.pageYOffset != b.scrollTop ? new goog.math.Coordinate(b.scrollLeft, b.scrollTop) : new goog.math.Coordinate(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
	};
	goog.dom.getDocumentScrollElement = function() {
		return goog.dom.getDocumentScrollElement_(document)
	};
	goog.dom.getDocumentScrollElement_ = function(a) {
		return !goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(a) ? a.documentElement : a.body || a.documentElement
	};
	goog.dom.getWindow = function(a) {
		return a ? goog.dom.getWindow_(a) : window
	};
	goog.dom.getWindow_ = function(a) {
		return a.parentWindow || a.defaultView
	};
	goog.dom.createDom = function(a, b, c) {
		return goog.dom.createDom_(document, arguments)
	};
	goog.dom.createDom_ = function(a, b) {
		var c = b[0],
			e = b[1];
		if (!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && e && (e.name || e.type)) {
			c = ["<", c];
			e.name && c.push(' name="', goog.string.htmlEscape(e.name), '"');
			if (e.type) {
				c.push(' type="', goog.string.htmlEscape(e.type), '"');
				var f = {};
				goog.object.extend(f, e);
				delete f.type;
				e = f
			}
			c.push(">");
			c = c.join("")
		}
		c = a.createElement(c);
		e && (goog.isString(e) ? c.className = e : goog.isArray(e) ? c.className = e.join(" ") : goog.dom.setProperties(c, e));
		2 < b.length && goog.dom.append_(a,
			c, b, 2);
		return c
	};
	goog.dom.append_ = function(a, b, c, e) {
		function f(c) {
			c && b.appendChild(goog.isString(c) ? a.createTextNode(c) : c)
		}
		for (; e < c.length; e++) {
			var h = c[e];
			goog.isArrayLike(h) && !goog.dom.isNodeLike(h) ? goog.array.forEach(goog.dom.isNodeList(h) ? goog.array.toArray(h) : h, f) : f(h)
		}
	};
	goog.dom.$dom = goog.dom.createDom;
	goog.dom.createElement = function(a) {
		return document.createElement(a)
	};
	goog.dom.createTextNode = function(a) {
		return document.createTextNode(String(a))
	};
	goog.dom.createTable = function(a, b, c) {
		return goog.dom.createTable_(document, a, b, !!c)
	};
	goog.dom.createTable_ = function(a, b, c, e) {
		for (var f = ["<tr>"], h = 0; h < c; h++) f.push(e ? "<td>&nbsp;</td>" : "<td></td>");
		f.push("</tr>");
		f = f.join("");
		c = ["<table>"];
		for (h = 0; h < b; h++) c.push(f);
		c.push("</table>");
		a = a.createElement(goog.dom.TagName.DIV);
		a.innerHTML = c.join("");
		return a.removeChild(a.firstChild)
	};
	goog.dom.htmlToDocumentFragment = function(a) {
		return goog.dom.htmlToDocumentFragment_(document, a)
	};
	goog.dom.htmlToDocumentFragment_ = function(a, b) {
		var c = a.createElement("div");
		goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
		if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
		for (var e = a.createDocumentFragment(); c.firstChild;) e.appendChild(c.firstChild);
		return e
	};
	goog.dom.isCss1CompatMode = function() {
		return goog.dom.isCss1CompatMode_(document)
	};
	goog.dom.isCss1CompatMode_ = function(a) {
		return goog.dom.COMPAT_MODE_KNOWN_ ? goog.dom.ASSUME_STANDARDS_MODE : "CSS1Compat" == a.compatMode
	};
	goog.dom.canHaveChildren = function(a) {
		if (a.nodeType != goog.dom.NodeType.ELEMENT) return !1;
		switch (a.tagName) {
			case goog.dom.TagName.APPLET:
			case goog.dom.TagName.AREA:
			case goog.dom.TagName.BASE:
			case goog.dom.TagName.BR:
			case goog.dom.TagName.COL:
			case goog.dom.TagName.COMMAND:
			case goog.dom.TagName.EMBED:
			case goog.dom.TagName.FRAME:
			case goog.dom.TagName.HR:
			case goog.dom.TagName.IMG:
			case goog.dom.TagName.INPUT:
			case goog.dom.TagName.IFRAME:
			case goog.dom.TagName.ISINDEX:
			case goog.dom.TagName.KEYGEN:
			case goog.dom.TagName.LINK:
			case goog.dom.TagName.NOFRAMES:
			case goog.dom.TagName.NOSCRIPT:
			case goog.dom.TagName.META:
			case goog.dom.TagName.OBJECT:
			case goog.dom.TagName.PARAM:
			case goog.dom.TagName.SCRIPT:
			case goog.dom.TagName.SOURCE:
			case goog.dom.TagName.STYLE:
			case goog.dom.TagName.TRACK:
			case goog.dom.TagName.WBR:
				return !1
		}
		return !0
	};
	goog.dom.appendChild = function(a, b) {
		a.appendChild(b)
	};
	goog.dom.append = function(a, b) {
		goog.dom.append_(goog.dom.getOwnerDocument(a), a, arguments, 1)
	};
	goog.dom.removeChildren = function(a) {
		for (var b; b = a.firstChild;) a.removeChild(b)
	};
	goog.dom.insertSiblingBefore = function(a, b) {
		b.parentNode && b.parentNode.insertBefore(a, b)
	};
	goog.dom.insertSiblingAfter = function(a, b) {
		b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
	};
	goog.dom.insertChildAt = function(a, b, c) {
		a.insertBefore(b, a.childNodes[c] || null)
	};
	goog.dom.removeNode = function(a) {
		return a && a.parentNode ? a.parentNode.removeChild(a) : null
	};
	goog.dom.replaceNode = function(a, b) {
		var c = b.parentNode;
		c && c.replaceChild(a, b)
	};
	goog.dom.flattenElement = function(a) {
		var b, c = a.parentNode;
		if (c && c.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
			if (a.removeNode) return a.removeNode(!1);
			for (; b = a.firstChild;) c.insertBefore(b, a);
			return goog.dom.removeNode(a)
		}
	};
	goog.dom.getChildren = function(a) {
		return goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && void 0 != a.children ? a.children : goog.array.filter(a.childNodes, function(a) {
			return a.nodeType == goog.dom.NodeType.ELEMENT
		})
	};
	goog.dom.getFirstElementChild = function(a) {
		return void 0 != a.firstElementChild ? a.firstElementChild : goog.dom.getNextElementNode_(a.firstChild, !0)
	};
	goog.dom.getLastElementChild = function(a) {
		return void 0 != a.lastElementChild ? a.lastElementChild : goog.dom.getNextElementNode_(a.lastChild, !1)
	};
	goog.dom.getNextElementSibling = function(a) {
		return void 0 != a.nextElementSibling ? a.nextElementSibling : goog.dom.getNextElementNode_(a.nextSibling, !0)
	};
	goog.dom.getPreviousElementSibling = function(a) {
		return void 0 != a.previousElementSibling ? a.previousElementSibling : goog.dom.getNextElementNode_(a.previousSibling, !1)
	};
	goog.dom.getNextElementNode_ = function(a, b) {
		for (; a && a.nodeType != goog.dom.NodeType.ELEMENT;) a = b ? a.nextSibling : a.previousSibling;
		return a
	};
	goog.dom.getNextNode = function(a) {
		if (!a) return null;
		if (a.firstChild) return a.firstChild;
		for (; a && !a.nextSibling;) a = a.parentNode;
		return a ? a.nextSibling : null
	};
	goog.dom.getPreviousNode = function(a) {
		if (!a) return null;
		if (!a.previousSibling) return a.parentNode;
		for (a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
		return a
	};
	goog.dom.isNodeLike = function(a) {
		return goog.isObject(a) && 0 < a.nodeType
	};
	goog.dom.isElement = function(a) {
		return goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT
	};
	goog.dom.isWindow = function(a) {
		return goog.isObject(a) && a.window == a
	};
	goog.dom.getParentElement = function(a) {
		var b;
		if (goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY && !(goog.userAgent.IE && goog.userAgent.isVersionOrHigher("9") && !goog.userAgent.isVersionOrHigher("10") && goog.global.SVGElement && a instanceof goog.global.SVGElement) && (b = a.parentElement)) return b;
		b = a.parentNode;
		return goog.dom.isElement(b) ? b : null
	};
	goog.dom.contains = function(a, b) {
		if (a.contains && b.nodeType == goog.dom.NodeType.ELEMENT) return a == b || a.contains(b);
		if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
		for (; b && a != b;) b = b.parentNode;
		return b == a
	};
	goog.dom.compareNodeOrder = function(a, b) {
		if (a == b) return 0;
		if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
		if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
			if (a.nodeType == goog.dom.NodeType.DOCUMENT) return -1;
			if (b.nodeType == goog.dom.NodeType.DOCUMENT) return 1
		}
		if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
			var c = a.nodeType == goog.dom.NodeType.ELEMENT,
				e = b.nodeType == goog.dom.NodeType.ELEMENT;
			if (c && e) return a.sourceIndex - b.sourceIndex;
			var f = a.parentNode,
				h = b.parentNode;
			return f == h ? goog.dom.compareSiblingOrder_(a, b) : !c && goog.dom.contains(f, b) ? -1 * goog.dom.compareParentsDescendantNodeIe_(a, b) : !e && goog.dom.contains(h, a) ? goog.dom.compareParentsDescendantNodeIe_(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (e ? b.sourceIndex : h.sourceIndex)
		}
		e = goog.dom.getOwnerDocument(a);
		c = e.createRange();
		c.selectNode(a);
		c.collapse(!0);
		e = e.createRange();
		e.selectNode(b);
		e.collapse(!0);
		return c.compareBoundaryPoints(goog.global.Range.START_TO_END, e)
	};
	goog.dom.compareParentsDescendantNodeIe_ = function(a, b) {
		var c = a.parentNode;
		if (c == b) return -1;
		for (var e = b; e.parentNode != c;) e = e.parentNode;
		return goog.dom.compareSiblingOrder_(e, a)
	};
	goog.dom.compareSiblingOrder_ = function(a, b) {
		for (var c = b; c = c.previousSibling;)
			if (c == a) return -1;
		return 1
	};
	goog.dom.findCommonAncestor = function(a) {
		var b, c = arguments.length;
		if (!c) return null;
		if (1 == c) return arguments[0];
		var e = [],
			f = Infinity;
		for (b = 0; b < c; b++) {
			for (var h = [], k = arguments[b]; k;) h.unshift(k), k = k.parentNode;
			e.push(h);
			f = Math.min(f, h.length)
		}
		h = null;
		for (b = 0; b < f; b++) {
			for (var k = e[0][b], m = 1; m < c; m++)
				if (k != e[m][b]) return h;
			h = k
		}
		return h
	};
	goog.dom.getOwnerDocument = function(a) {
		goog.asserts.assert(a, "Node cannot be null or undefined.");
		return a.nodeType == goog.dom.NodeType.DOCUMENT ? a : a.ownerDocument || a.document
	};
	goog.dom.getFrameContentDocument = function(a) {
		return a.contentDocument || a.contentWindow.document
	};
	goog.dom.getFrameContentWindow = function(a) {
		return a.contentWindow || goog.dom.getWindow(goog.dom.getFrameContentDocument(a))
	};
	goog.dom.setTextContent = function(a, b) {
		goog.asserts.assert(null != a, "goog.dom.setTextContent expects a non-null value for node");
		if ("textContent" in a) a.textContent = b;
		else if (a.nodeType == goog.dom.NodeType.TEXT) a.data = b;
		else if (a.firstChild && a.firstChild.nodeType == goog.dom.NodeType.TEXT) {
			for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
			a.firstChild.data = b
		} else {
			goog.dom.removeChildren(a);
			var c = goog.dom.getOwnerDocument(a);
			a.appendChild(c.createTextNode(String(b)))
		}
	};
	goog.dom.getOuterHtml = function(a) {
		if ("outerHTML" in a) return a.outerHTML;
		var b = goog.dom.getOwnerDocument(a).createElement("div");
		b.appendChild(a.cloneNode(!0));
		return b.innerHTML
	};
	goog.dom.findNode = function(a, b) {
		var c = [];
		return goog.dom.findNodes_(a, b, c, !0) ? c[0] : void 0
	};
	goog.dom.findNodes = function(a, b) {
		var c = [];
		goog.dom.findNodes_(a, b, c, !1);
		return c
	};
	goog.dom.findNodes_ = function(a, b, c, e) {
		if (null != a)
			for (a = a.firstChild; a;) {
				if (b(a) && (c.push(a), e) || goog.dom.findNodes_(a, b, c, e)) return !0;
				a = a.nextSibling
			}
		return !1
	};
	goog.dom.TAGS_TO_IGNORE_ = {
		SCRIPT: 1,
		STYLE: 1,
		HEAD: 1,
		IFRAME: 1,
		OBJECT: 1
	};
	goog.dom.PREDEFINED_TAG_VALUES_ = {
		IMG: " ",
		BR: "\n"
	};
	goog.dom.isFocusableTabIndex = function(a) {
		return goog.dom.hasSpecifiedTabIndex_(a) && goog.dom.isTabIndexFocusable_(a)
	};
	goog.dom.setFocusableTabIndex = function(a, b) {
		b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
	};
	goog.dom.isFocusable = function(a) {
		var b;
		return (b = goog.dom.nativelySupportsFocus_(a) ? !a.disabled && (!goog.dom.hasSpecifiedTabIndex_(a) || goog.dom.isTabIndexFocusable_(a)) : goog.dom.isFocusableTabIndex(a)) && goog.userAgent.IE ? goog.dom.hasNonZeroBoundingRect_(a) : b
	};
	goog.dom.hasSpecifiedTabIndex_ = function(a) {
		a = a.getAttributeNode("tabindex");
		return goog.isDefAndNotNull(a) && a.specified
	};
	goog.dom.isTabIndexFocusable_ = function(a) {
		a = a.tabIndex;
		return goog.isNumber(a) && 0 <= a && 32768 > a
	};
	goog.dom.nativelySupportsFocus_ = function(a) {
		return a.tagName == goog.dom.TagName.A || a.tagName == goog.dom.TagName.INPUT || a.tagName == goog.dom.TagName.TEXTAREA || a.tagName == goog.dom.TagName.SELECT || a.tagName == goog.dom.TagName.BUTTON
	};
	goog.dom.hasNonZeroBoundingRect_ = function(a) {
		a = goog.isFunction(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
			height: a.offsetHeight,
			width: a.offsetWidth
		};
		return goog.isDefAndNotNull(a) && 0 < a.height && 0 < a.width
	};
	goog.dom.getTextContent = function(a) {
		if (goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && "innerText" in a) a = goog.string.canonicalizeNewlines(a.innerText);
		else {
			var b = [];
			goog.dom.getTextContent_(a, b, !0);
			a = b.join("")
		}
		a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
		a = a.replace(/\u200B/g, "");
		goog.dom.BrowserFeature.CAN_USE_INNER_TEXT || (a = a.replace(/ +/g, " "));
		" " != a && (a = a.replace(/^\s*/, ""));
		return a
	};
	goog.dom.getRawTextContent = function(a) {
		var b = [];
		goog.dom.getTextContent_(a, b, !1);
		return b.join("")
	};
	goog.dom.getTextContent_ = function(a, b, c) {
		if (!(a.nodeName in goog.dom.TAGS_TO_IGNORE_))
			if (a.nodeType == goog.dom.NodeType.TEXT) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
			else if (a.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) b.push(goog.dom.PREDEFINED_TAG_VALUES_[a.nodeName]);
		else
			for (a = a.firstChild; a;) goog.dom.getTextContent_(a, b, c), a = a.nextSibling
	};
	goog.dom.getNodeTextLength = function(a) {
		return goog.dom.getTextContent(a).length
	};
	goog.dom.getNodeTextOffset = function(a, b) {
		for (var c = b || goog.dom.getOwnerDocument(a).body, e = []; a && a != c;) {
			for (var f = a; f = f.previousSibling;) e.unshift(goog.dom.getTextContent(f));
			a = a.parentNode
		}
		return goog.string.trimLeft(e.join("")).replace(/ +/g, " ").length
	};
	goog.dom.getNodeAtOffset = function(a, b, c) {
		a = [a];
		for (var e = 0, f = null; 0 < a.length && e < b;)
			if (f = a.pop(), !(f.nodeName in goog.dom.TAGS_TO_IGNORE_))
				if (f.nodeType == goog.dom.NodeType.TEXT) var h = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "),
					e = e + h.length;
				else if (f.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) e += goog.dom.PREDEFINED_TAG_VALUES_[f.nodeName].length;
		else
			for (h = f.childNodes.length - 1; 0 <= h; h--) a.push(f.childNodes[h]);
		goog.isObject(c) && (c.remainder = f ? f.nodeValue.length + b - e - 1 : 0, c.node = f);
		return f
	};
	goog.dom.isNodeList = function(a) {
		if (a && "number" == typeof a.length) {
			if (goog.isObject(a)) return "function" == typeof a.item || "string" == typeof a.item;
			if (goog.isFunction(a)) return "function" == typeof a.item
		}
		return !1
	};
	goog.dom.getAncestorByTagNameAndClass = function(a, b, c) {
		if (!b && !c) return null;
		var e = b ? b.toUpperCase() : null;
		return goog.dom.getAncestor(a, function(a) {
			return (!e || a.nodeName == e) && (!c || goog.isString(a.className) && goog.array.contains(a.className.split(/\s+/), c))
		}, !0)
	};
	goog.dom.getAncestorByClass = function(a, b) {
		return goog.dom.getAncestorByTagNameAndClass(a, null, b)
	};
	goog.dom.getAncestor = function(a, b, c, e) {
		c || (a = a.parentNode);
		c = null == e;
		for (var f = 0; a && (c || f <= e);) {
			if (b(a)) return a;
			a = a.parentNode;
			f++
		}
		return null
	};
	goog.dom.getActiveElement = function(a) {
		try {
			return a && a.activeElement
		} catch (b) {}
		return null
	};
	goog.dom.getPixelRatio = function() {
		var a = goog.dom.getWindow(),
			b = goog.userAgent.GECKO && goog.userAgent.MOBILE;
		return goog.isDef(a.devicePixelRatio) && !b ? a.devicePixelRatio : a.matchMedia ? goog.dom.matchesPixelRatio_(.75) || goog.dom.matchesPixelRatio_(1.5) || goog.dom.matchesPixelRatio_(2) || goog.dom.matchesPixelRatio_(3) || 1 : 1
	};
	goog.dom.matchesPixelRatio_ = function(a) {
		return goog.dom.getWindow().matchMedia("(-webkit-min-device-pixel-ratio: " + a + "),(min--moz-device-pixel-ratio: " + a + "),(min-resolution: " + a + "dppx)").matches ? a : 0
	};
	goog.dom.DomHelper = function(a) {
		this.document_ = a || goog.global.document || document
	};
	goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
	goog.dom.DomHelper.prototype.setDocument = function(a) {
		this.document_ = a
	};
	goog.dom.DomHelper.prototype.getDocument = function() {
		return this.document_
	};
	goog.dom.DomHelper.prototype.getElement = function(a) {
		return goog.dom.getElementHelper_(this.document_, a)
	};
	goog.dom.DomHelper.prototype.getRequiredElement = function(a) {
		return goog.dom.getRequiredElementHelper_(this.document_, a)
	};
	goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
	goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(a, b, c) {
		return goog.dom.getElementsByTagNameAndClass_(this.document_, a, b, c)
	};
	goog.dom.DomHelper.prototype.getElementsByClass = function(a, b) {
		return goog.dom.getElementsByClass(a, b || this.document_)
	};
	goog.dom.DomHelper.prototype.getElementByClass = function(a, b) {
		return goog.dom.getElementByClass(a, b || this.document_)
	};
	goog.dom.DomHelper.prototype.getRequiredElementByClass = function(a, b) {
		return goog.dom.getRequiredElementByClass(a, b || this.document_)
	};
	goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
	goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
	goog.dom.DomHelper.prototype.getViewportSize = function(a) {
		return goog.dom.getViewportSize(a || this.getWindow())
	};
	goog.dom.DomHelper.prototype.getDocumentHeight = function() {
		return goog.dom.getDocumentHeight_(this.getWindow())
	};
	goog.dom.DomHelper.prototype.createDom = function(a, b, c) {
		return goog.dom.createDom_(this.document_, arguments)
	};
	goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
	goog.dom.DomHelper.prototype.createElement = function(a) {
		return this.document_.createElement(a)
	};
	goog.dom.DomHelper.prototype.createTextNode = function(a) {
		return this.document_.createTextNode(String(a))
	};
	goog.dom.DomHelper.prototype.createTable = function(a, b, c) {
		return goog.dom.createTable_(this.document_, a, b, !!c)
	};
	goog.dom.DomHelper.prototype.htmlToDocumentFragment = function(a) {
		return goog.dom.htmlToDocumentFragment_(this.document_, a)
	};
	goog.dom.DomHelper.prototype.isCss1CompatMode = function() {
		return goog.dom.isCss1CompatMode_(this.document_)
	};
	goog.dom.DomHelper.prototype.getWindow = function() {
		return goog.dom.getWindow_(this.document_)
	};
	goog.dom.DomHelper.prototype.getDocumentScrollElement = function() {
		return goog.dom.getDocumentScrollElement_(this.document_)
	};
	goog.dom.DomHelper.prototype.getDocumentScroll = function() {
		return goog.dom.getDocumentScroll_(this.document_)
	};
	goog.dom.DomHelper.prototype.getActiveElement = function(a) {
		return goog.dom.getActiveElement(a || this.document_)
	};
	goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
	goog.dom.DomHelper.prototype.append = goog.dom.append;
	goog.dom.DomHelper.prototype.canHaveChildren = goog.dom.canHaveChildren;
	goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
	goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
	goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
	goog.dom.DomHelper.prototype.insertChildAt = goog.dom.insertChildAt;
	goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
	goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
	goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
	goog.dom.DomHelper.prototype.getChildren = goog.dom.getChildren;
	goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
	goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
	goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
	goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
	goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
	goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
	goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
	goog.dom.DomHelper.prototype.isElement = goog.dom.isElement;
	goog.dom.DomHelper.prototype.isWindow = goog.dom.isWindow;
	goog.dom.DomHelper.prototype.getParentElement = goog.dom.getParentElement;
	goog.dom.DomHelper.prototype.contains = goog.dom.contains;
	goog.dom.DomHelper.prototype.compareNodeOrder = goog.dom.compareNodeOrder;
	goog.dom.DomHelper.prototype.findCommonAncestor = goog.dom.findCommonAncestor;
	goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
	goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
	goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
	goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
	goog.dom.DomHelper.prototype.getOuterHtml = goog.dom.getOuterHtml;
	goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
	goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
	goog.dom.DomHelper.prototype.isFocusableTabIndex = goog.dom.isFocusableTabIndex;
	goog.dom.DomHelper.prototype.setFocusableTabIndex = goog.dom.setFocusableTabIndex;
	goog.dom.DomHelper.prototype.isFocusable = goog.dom.isFocusable;
	goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
	goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
	goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
	goog.dom.DomHelper.prototype.getNodeAtOffset = goog.dom.getNodeAtOffset;
	goog.dom.DomHelper.prototype.isNodeList = goog.dom.isNodeList;
	goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
	goog.dom.DomHelper.prototype.getAncestorByClass = goog.dom.getAncestorByClass;
	goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
	goog.structs = {};
	goog.structs.InversionMap = function(a, b, c) {
		this.rangeArray = null;
		if (a.length != b.length) return null;
		this.storeInversion_(a, c);
		this.values = b
	};
	goog.structs.InversionMap.prototype.storeInversion_ = function(a, b) {
		this.rangeArray = a;
		for (var c = 1; c < a.length; c++) null == a[c] ? a[c] = a[c - 1] + 1 : b && (a[c] += a[c - 1])
	};
	goog.structs.InversionMap.prototype.spliceInversion = function(a, b, c) {
		a = new goog.structs.InversionMap(a, b, c);
		c = a.rangeArray[0];
		var e = goog.array.peek(a.rangeArray);
		b = this.getLeast(c);
		e = this.getLeast(e);
		c != this.rangeArray[b] && b++;
		c = e - b + 1;
		goog.partial(goog.array.splice, this.rangeArray, b, c).apply(null, a.rangeArray);
		goog.partial(goog.array.splice, this.values, b, c).apply(null, a.values)
	};
	goog.structs.InversionMap.prototype.at = function(a) {
		a = this.getLeast(a);
		return 0 > a ? null : this.values[a]
	};
	goog.structs.InversionMap.prototype.getLeast = function(a) {
		for (var b = this.rangeArray, c = 0, e = b.length; 8 < e - c;) {
			var f = e + c >> 1;
			b[f] <= a ? c = f : e = f
		}
		for (; c < e && !(a < b[c]); ++c);
		return c - 1
	};
	goog.i18n = {};
	goog.i18n.GraphemeBreak = {};
	goog.i18n.GraphemeBreak.property = {
		ANY: 0,
		CONTROL: 1,
		EXTEND: 2,
		PREPEND: 3,
		SPACING_MARK: 4,
		INDIC_CONSONANT: 5,
		VIRAMA: 6,
		L: 7,
		V: 8,
		T: 9,
		LV: 10,
		LVT: 11,
		CR: 12,
		LF: 13,
		REGIONAL_INDICATOR: 14
	};
	goog.i18n.GraphemeBreak.inversions_ = null;
	goog.i18n.GraphemeBreak.applyLegacyBreakRules_ = function(a, b) {
		var c = goog.i18n.GraphemeBreak.property;
		return a == c.CR && b == c.LF ? !1 : a == c.CONTROL || a == c.CR || a == c.LF || b == c.CONTROL || b == c.CR || b == c.LF ? !0 : a == c.L && (b == c.L || b == c.V || b == c.LV || b == c.LVT) || !(a != c.LV && a != c.V || b != c.V && b != c.T) || (a == c.LVT || a == c.T) && b == c.T || b == c.EXTEND || b == c.VIRAMA || a == c.VIRAMA && b == c.INDIC_CONSONANT ? !1 : !0
	};
	goog.i18n.GraphemeBreak.getBreakProp_ = function(a) {
		if (44032 <= a && 55203 >= a) {
			var b = goog.i18n.GraphemeBreak.property;
			return 16 == a % 28 ? b.LV : b.LVT
		}
		goog.i18n.GraphemeBreak.inversions_ || (goog.i18n.GraphemeBreak.inversions_ = new goog.structs.InversionMap([0, 10, 1, 2, 1, 18, 95, 33, 13, 1, 594, 112, 275, 7, 263, 45, 1, 1, 1, 2, 1, 2, 1, 1, 56, 5, 11, 11, 48, 21, 16, 1, 101, 7, 1, 1, 6, 2, 2, 1, 4, 33, 1, 1, 1, 30, 27, 91, 11, 58, 9, 34, 4, 1, 9, 1, 3, 1, 5, 43, 3, 136, 31, 1, 17, 37, 1, 1, 1, 1, 3, 8, 4, 1, 2, 1, 7, 8, 2, 2, 21, 8, 1, 2, 17, 39, 1, 1, 1, 2, 6, 6, 1, 9, 5, 4, 2, 2, 12, 2, 15, 2, 1, 17, 39, 2, 3, 12,
			4, 8, 6, 17, 2, 3, 14, 1, 17, 39, 1, 1, 3, 8, 4, 1, 20, 2, 29, 1, 2, 17, 39, 1, 1, 2, 1, 6, 6, 9, 6, 4, 2, 2, 13, 1, 16, 1, 18, 41, 1, 1, 1, 12, 1, 9, 1, 41, 3, 17, 37, 4, 3, 5, 7, 8, 3, 2, 8, 2, 30, 2, 17, 39, 1, 1, 1, 1, 2, 1, 3, 1, 5, 1, 8, 9, 1, 3, 2, 30, 2, 17, 38, 3, 1, 2, 5, 7, 1, 9, 1, 10, 2, 30, 2, 22, 48, 5, 1, 2, 6, 7, 19, 2, 13, 46, 2, 1, 1, 1, 6, 1, 12, 8, 50, 46, 2, 1, 1, 1, 9, 11, 6, 14, 2, 58, 2, 27, 1, 1, 1, 1, 1, 4, 2, 49, 14, 1, 4, 1, 1, 2, 5, 48, 9, 1, 57, 33, 12, 4, 1, 6, 1, 2, 2, 2, 1, 16, 2, 4, 2, 2, 4, 3, 1, 3, 2, 7, 3, 4, 13, 1, 1, 1, 2, 6, 1, 1, 14, 1, 98, 96, 72, 88, 349, 3, 931, 15, 2, 1, 14, 15, 2, 1, 14, 15, 2, 15, 15, 14, 35, 17, 2, 1, 7, 8, 1, 2, 9, 1, 1, 9, 1, 45, 3, 155, 1, 87,
			31, 3, 4, 2, 9, 1, 6, 3, 20, 19, 29, 44, 9, 3, 2, 1, 69, 23, 2, 3, 4, 45, 6, 2, 1, 1, 1, 8, 1, 1, 1, 2, 8, 6, 13, 128, 4, 1, 14, 33, 1, 1, 5, 1, 1, 5, 1, 1, 1, 7, 31, 9, 12, 2, 1, 7, 23, 1, 4, 2, 2, 2, 2, 2, 11, 3, 2, 36, 2, 1, 1, 2, 3, 1, 1, 3, 2, 12, 36, 8, 8, 2, 2, 21, 3, 128, 3, 1, 13, 1, 7, 4, 1, 4, 2, 1, 203, 64, 523, 1, 2, 2, 24, 7, 49, 16, 96, 33, 3070, 3, 141, 1, 96, 32, 554, 6, 105, 2, 30164, 4, 1, 10, 33, 1, 80, 2, 272, 1, 3, 1, 4, 1, 23, 2, 2, 1, 24, 30, 4, 4, 3, 8, 1, 1, 13, 2, 16, 34, 16, 1, 27, 18, 24, 24, 4, 8, 2, 23, 11, 1, 1, 12, 32, 3, 1, 5, 3, 3, 36, 1, 2, 4, 2, 1, 3, 1, 69, 35, 6, 2, 2, 2, 2, 12, 1, 8, 1, 1, 18, 16, 1, 3, 6, 1, 5, 48, 1, 1, 3, 2, 2, 5, 2, 1, 1, 32, 9, 1, 2, 2, 5, 1,
			1, 201, 14, 2, 1, 1, 9, 8, 2, 1, 2, 1, 2, 1, 1, 1, 18, 11184, 27, 49, 1028, 1024, 6942, 1, 737, 16, 16, 7, 216, 1, 158, 2, 89, 3, 513, 1, 2051, 15, 40, 7, 1, 1472, 1, 1, 1, 53, 14, 1, 57, 2, 1, 45, 3, 4, 2, 1, 1, 2, 1, 66, 3, 36, 5, 1, 6, 2, 75, 2, 1, 48, 3, 9, 1, 1, 1258, 1, 1, 1, 2, 6, 1, 1, 22681, 62, 4, 25042, 1, 1, 3, 3, 1, 5, 8, 8, 2, 7, 30, 4, 148, 3, 8097, 26, 790017, 255
		], [1, 13, 1, 12, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 1, 0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 4, 0, 5, 2, 4, 2, 0, 4, 2, 4, 6, 4, 0, 2, 5, 0, 2, 0, 5, 2, 4, 0, 5, 2, 0, 2, 4, 2, 4, 6, 0, 2, 5, 0, 2, 0, 5, 0, 2, 4, 0, 5, 2, 4, 2, 6, 2,
			5, 0, 2, 0, 2, 4, 0, 5, 2, 0, 4, 2, 4, 6, 0, 2, 0, 2, 4, 0, 5, 2, 0, 2, 4, 2, 4, 6, 2, 5, 0, 2, 0, 5, 0, 2, 0, 5, 2, 4, 2, 4, 6, 0, 2, 0, 4, 0, 5, 0, 2, 4, 2, 6, 2, 5, 0, 2, 0, 4, 0, 5, 2, 0, 4, 2, 4, 2, 4, 2, 4, 2, 6, 2, 5, 0, 2, 0, 4, 0, 5, 0, 2, 4, 2, 4, 6, 0, 2, 0, 2, 0, 4, 0, 5, 6, 2, 4, 2, 4, 2, 4, 0, 5, 0, 2, 0, 4, 2, 6, 0, 2, 0, 5, 0, 2, 0, 4, 2, 0, 2, 0, 5, 0, 2, 0, 2, 0, 2, 0, 2, 0, 4, 5, 2, 4, 2, 6, 0, 2, 0, 2, 0, 2, 0, 5, 0, 2, 4, 2, 0, 6, 4, 2, 5, 0, 5, 0, 4, 2, 5, 2, 5, 0, 5, 0, 5, 2, 5, 2, 0, 4, 2, 0, 2, 5, 0, 2, 0, 7, 8, 9, 0, 2, 0, 5, 2, 6, 0, 5, 2, 6, 0, 5, 2, 0, 5, 2, 5, 0, 2, 4, 2, 4, 2, 4, 2, 6, 2, 0, 2, 0, 2, 0, 2, 0, 5, 2, 4, 2, 4, 2, 4, 2, 0, 5, 0, 5, 0, 4, 0, 4, 0, 5, 2, 4, 0, 5, 0, 5, 4, 2, 4, 2, 6, 0, 2, 0, 2, 4, 2,
			0, 2, 4, 0, 5, 2, 4, 2, 4, 2, 4, 2, 4, 6, 5, 0, 2, 0, 2, 4, 0, 5, 4, 2, 4, 2, 6, 4, 5, 0, 5, 0, 5, 0, 2, 4, 2, 4, 2, 4, 2, 6, 0, 5, 4, 2, 4, 2, 0, 5, 0, 2, 0, 2, 4, 2, 0, 2, 0, 4, 2, 0, 2, 0, 1, 2, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 6, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 6, 5, 2, 5, 4, 2, 4, 0, 5, 0, 5, 0, 5, 0, 5, 0, 4, 0, 5, 4, 6, 0, 2, 0, 5, 0, 2, 0, 5, 2, 4, 6, 0, 7, 2, 4, 0, 5, 0, 5, 2, 4, 2, 4, 2, 4, 6, 0, 5, 2, 4, 2, 4, 2, 0, 2, 0, 2, 4, 0, 5, 0, 5, 0, 5, 0, 5, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 5, 4, 2, 4, 0, 4, 6, 0, 5, 0, 5, 0, 5, 0, 4, 2, 4, 2, 4, 0, 4, 6, 0, 11, 8, 9, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 6, 0, 4, 2, 4, 0, 2, 6, 0, 2, 4, 0, 4, 2, 4, 6, 2, 0, 1, 0, 2, 0, 2, 4, 2, 6, 0, 2, 4, 0, 4, 2, 4,
			6, 0, 2, 4, 2, 4, 2, 6, 2, 0, 4, 2, 0, 2, 4, 2, 0, 4, 2, 1, 2, 0, 2, 0, 2, 0, 2, 0, 14, 0, 1, 2
		], !0));
		return goog.i18n.GraphemeBreak.inversions_.at(a)
	};
	goog.i18n.GraphemeBreak.hasGraphemeBreak = function(a, b, c) {
		a = goog.i18n.GraphemeBreak.getBreakProp_(a);
		b = goog.i18n.GraphemeBreak.getBreakProp_(b);
		var e = goog.i18n.GraphemeBreak.property;
		return goog.i18n.GraphemeBreak.applyLegacyBreakRules_(a, b) && !(c && (a == e.PREPEND || b == e.SPACING_MARK))
	};
	goog.format = {};
	goog.format.fileSize = function(a, b) {
		return goog.format.numBytesToString(a, b, !1)
	};
	goog.format.isConvertableScaledNumber = function(a) {
		return goog.format.SCALED_NUMERIC_RE_.test(a)
	};
	goog.format.stringToNumericValue = function(a) {
		return goog.string.endsWith(a, "B") ? goog.format.stringToNumericValue_(a, goog.format.NUMERIC_SCALES_BINARY_) : goog.format.stringToNumericValue_(a, goog.format.NUMERIC_SCALES_SI_)
	};
	goog.format.stringToNumBytes = function(a) {
		return goog.format.stringToNumericValue_(a, goog.format.NUMERIC_SCALES_BINARY_)
	};
	goog.format.numericValueToString = function(a, b) {
		return goog.format.numericValueToString_(a, goog.format.NUMERIC_SCALES_SI_, b)
	};
	goog.format.numBytesToString = function(a, b, c, e) {
		var f = "";
		if (!goog.isDef(c) || c) f = "B";
		return goog.format.numericValueToString_(a, goog.format.NUMERIC_SCALES_BINARY_, b, f, e)
	};
	goog.format.stringToNumericValue_ = function(a, b) {
		var c = a.match(goog.format.SCALED_NUMERIC_RE_);
		return c ? c[1] * b[c[2]] : NaN
	};
	goog.format.numericValueToString_ = function(a, b, c, e, f) {
		var h = goog.format.NUMERIC_SCALE_PREFIXES_,
			k = a,
			m = "",
			p = "",
			r = 1;
		0 > a && (a = -a);
		for (var t = 0; t < h.length; t++) {
			var A = h[t],
				r = b[A];
			if (a >= r || 1 >= r && a > .1 * r) {
				m = A;
				break
			}
		}
		m ? (e && (m += e), f && (p = " ")) : r = 1;
		a = Math.pow(10, goog.isDef(c) ? c : 2);
		return Math.round(k / r * a) / a + p + m
	};
	goog.format.SCALED_NUMERIC_RE_ = /^([-]?\d+\.?\d*)([K,M,G,T,P,k,m,u,n]?)[B]?$/;
	goog.format.NUMERIC_SCALE_PREFIXES_ = "P T G M K  m u n".split(" ");
	goog.format.NUMERIC_SCALES_SI_ = {
		"": 1,
		n: 1E-9,
		u: 1E-6,
		m: .001,
		k: 1E3,
		K: 1E3,
		M: 1E6,
		G: 1E9,
		T: 1E12,
		P: 1E15
	};
	goog.format.NUMERIC_SCALES_BINARY_ = {
		"": 1,
		n: Math.pow(1024, -3),
		u: Math.pow(1024, -2),
		m: 1 / 1024,
		k: 1024,
		K: 1024,
		M: Math.pow(1024, 2),
		G: Math.pow(1024, 3),
		T: Math.pow(1024, 4),
		P: Math.pow(1024, 5)
	};
	goog.format.FIRST_GRAPHEME_EXTEND_ = 768;
	goog.format.isTreatedAsBreakingSpace_ = function(a) {
		return a <= goog.format.WbrToken_.SPACE || 4096 <= a && (8192 <= a && 8198 >= a || 8200 <= a && 8203 >= a || 5760 == a || 6158 == a || 8232 == a || 8233 == a || 8287 == a || 12288 == a)
	};
	goog.format.isInvisibleFormattingCharacter_ = function(a) {
		return 8204 <= a && 8207 >= a || 8234 <= a && 8238 >= a
	};
	goog.format.insertWordBreaksGeneric_ = function(a, b, c) {
		c = c || 10;
		if (c > a.length) return a;
		for (var e = [], f = 0, h = 0, k = 0, m = 0, p = 0; p < a.length; p++) {
			var r = m,
				m = a.charCodeAt(p),
				r = m >= goog.format.FIRST_GRAPHEME_EXTEND_ && !b(r, m, !0);
			f >= c && !goog.format.isTreatedAsBreakingSpace_(m) && !r && (e.push(a.substring(k, p), goog.format.WORD_BREAK_HTML), k = p, f = 0);
			h ? m == goog.format.WbrToken_.GT && h == goog.format.WbrToken_.LT ? h = 0 : m == goog.format.WbrToken_.SEMI_COLON && h == goog.format.WbrToken_.AMP && (h = 0, f++) : m == goog.format.WbrToken_.LT || m == goog.format.WbrToken_.AMP ?
				h = m : goog.format.isTreatedAsBreakingSpace_(m) ? f = 0 : goog.format.isInvisibleFormattingCharacter_(m) || f++
		}
		e.push(a.substr(k));
		return e.join("")
	};
	goog.format.insertWordBreaks = function(a, b) {
		return goog.format.insertWordBreaksGeneric_(a, goog.i18n.GraphemeBreak.hasGraphemeBreak, b)
	};
	goog.format.conservativelyHasGraphemeBreak_ = function(a, b, c) {
		return 1024 <= b && 1315 > b
	};
	goog.format.insertWordBreaksBasic = function(a, b) {
		return goog.format.insertWordBreaksGeneric_(a, goog.format.conservativelyHasGraphemeBreak_, b)
	};
	goog.format.IS_IE8_OR_ABOVE_ = goog.userAgent.IE && goog.userAgent.isVersionOrHigher(8);
	goog.format.WORD_BREAK_HTML = goog.userAgent.WEBKIT ? "<wbr></wbr>" : goog.userAgent.OPERA ? "&shy;" : goog.format.IS_IE8_OR_ABOVE_ ? "&#8203;" : "<wbr>";
	goog.format.WbrToken_ = {
		LT: 60,
		GT: 62,
		AMP: 38,
		SEMI_COLON: 59,
		SPACE: 32
	};
	goog.dom.tags = {};
	goog.dom.tags.VOID_TAGS_ = goog.object.createSet("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
	goog.dom.tags.isVoidTag = function(a) {
		return !0 === goog.dom.tags.VOID_TAGS_[a]
	};
	goog.string.TypedString = function() {};
	goog.string.Const = function() {
		this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = "";
		this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_
	};
	goog.string.Const.prototype.implementsGoogStringTypedString = !0;
	goog.string.Const.prototype.getTypedStringValue = function() {
		return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
	};
	goog.string.Const.prototype.toString = function() {
		return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
	};
	goog.string.Const.unwrap = function(a) {
		if (a instanceof goog.string.Const && a.constructor === goog.string.Const && a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_) return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
		goog.asserts.fail("expected object of type Const, got '" + a + "'");
		return "type_error:Const"
	};
	goog.string.Const.from = function(a) {
		return goog.string.Const.create__googStringSecurityPrivate_(a)
	};
	goog.string.Const.TYPE_MARKER_ = {};
	goog.string.Const.create__googStringSecurityPrivate_ = function(a) {
		var b = new goog.string.Const;
		b.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a;
		return b
	};
	goog.html = {};
	goog.html.SafeStyle = function() {
		this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
		this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
	};
	goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0;
	goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
	goog.html.SafeStyle.fromConstant = function(a) {
		a = goog.string.Const.unwrap(a);
		if (0 === a.length) return goog.html.SafeStyle.EMPTY;
		goog.html.SafeStyle.checkStyle_(a);
		goog.asserts.assert(goog.string.endsWith(a, ";"), "Last character of style string is not ';': " + a);
		goog.asserts.assert(goog.string.contains(a, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + a);
		return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a)
	};
	goog.html.SafeStyle.checkStyle_ = function(a) {
		goog.asserts.assert(!/[<>]/.test(a), "Forbidden characters in style string: " + a)
	};
	goog.html.SafeStyle.prototype.getTypedStringValue = function() {
		return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
	};
	goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
		return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
	});
	goog.html.SafeStyle.unwrap = function(a) {
		if (a instanceof goog.html.SafeStyle && a.constructor === goog.html.SafeStyle && a.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseSafeStyleWrappedValue_;
		goog.asserts.fail("expected object of type SafeStyle, got '" + a + "'");
		return "type_error:SafeStyle"
	};
	goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(a) {
		var b = new goog.html.SafeStyle;
		b.privateDoNotAccessOrElseSafeStyleWrappedValue_ = a;
		return b
	};
	goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
	goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
	goog.html.SafeStyle.create = function(a) {
		var b = "",
			c;
		for (c in a) {
			if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
			var e = a[c];
			null != e && (e instanceof goog.string.Const ? (e = goog.string.Const.unwrap(e), goog.asserts.assert(!/[{;}]/.test(e), "Value does not allow [{;}].")) : goog.html.SafeStyle.VALUE_RE_.test(e) || (goog.asserts.fail("String value allows only [-.%_!# a-zA-Z0-9], got: " + e), e = goog.html.SafeStyle.INNOCUOUS_STRING), b += c + ":" + e + ";")
		}
		if (!b) return goog.html.SafeStyle.EMPTY;
		goog.html.SafeStyle.checkStyle_(b);
		return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b)
	};
	goog.html.SafeStyle.VALUE_RE_ = /^[-.%_!# a-zA-Z0-9]+$/;
	goog.html.SafeStyle.concat = function(a) {
		var b = "",
			c = function(a) {
				goog.isArray(a) ? goog.array.forEach(a, c) : b += goog.html.SafeStyle.unwrap(a)
			};
		goog.array.forEach(arguments, c);
		return b ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b) : goog.html.SafeStyle.EMPTY
	};
	goog.i18n.bidi = {};
	goog.i18n.bidi.FORCE_RTL = !1;
	goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length ||
		"-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4));
	goog.i18n.bidi.Format = {
		LRE: "\u202a",
		RLE: "\u202b",
		PDF: "\u202c",
		LRM: "\u200e",
		RLM: "\u200f"
	};
	goog.i18n.bidi.Dir = {
		LTR: 1,
		RTL: -1,
		NEUTRAL: 0,
		UNKNOWN: 0
	};
	goog.i18n.bidi.RIGHT = "right";
	goog.i18n.bidi.LEFT = "left";
	goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
	goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
	goog.i18n.bidi.toDir = function(a, b) {
		return "number" == typeof a ? 0 < a ? goog.i18n.bidi.Dir.LTR : 0 > a ? goog.i18n.bidi.Dir.RTL : b ? null : goog.i18n.bidi.Dir.NEUTRAL : null == a ? null : a ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
	};
	goog.i18n.bidi.ltrChars_ = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
	goog.i18n.bidi.rtlChars_ = "\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc";
	goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
	goog.i18n.bidi.stripHtmlIfNeeded_ = function(a, b) {
		return b ? a.replace(goog.i18n.bidi.htmlSkipReg_, "") : a
	};
	goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
	goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
	goog.i18n.bidi.hasAnyRtl = function(a, b) {
		return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b))
	};
	goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
	goog.i18n.bidi.hasAnyLtr = function(a, b) {
		return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b))
	};
	goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
	goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
	goog.i18n.bidi.isRtlChar = function(a) {
		return goog.i18n.bidi.rtlRe_.test(a)
	};
	goog.i18n.bidi.isLtrChar = function(a) {
		return goog.i18n.bidi.ltrRe_.test(a)
	};
	goog.i18n.bidi.isNeutralChar = function(a) {
		return !goog.i18n.bidi.isLtrChar(a) && !goog.i18n.bidi.isRtlChar(a)
	};
	goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
	goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
	goog.i18n.bidi.startsWithRtl = function(a, b) {
		return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b))
	};
	goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
	goog.i18n.bidi.startsWithLtr = function(a, b) {
		return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b))
	};
	goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
	goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
	goog.i18n.bidi.isNeutralText = function(a, b) {
		a = goog.i18n.bidi.stripHtmlIfNeeded_(a, b);
		return goog.i18n.bidi.isRequiredLtrRe_.test(a) || !goog.i18n.bidi.hasAnyLtr(a) && !goog.i18n.bidi.hasAnyRtl(a)
	};
	goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
	goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
	goog.i18n.bidi.endsWithLtr = function(a, b) {
		return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b))
	};
	goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
	goog.i18n.bidi.endsWithRtl = function(a, b) {
		return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a, b))
	};
	goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
	goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
	goog.i18n.bidi.isRtlLanguage = function(a) {
		return goog.i18n.bidi.rtlLocalesRe_.test(a)
	};
	goog.i18n.bidi.bracketGuardHtmlRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(&lt;.*?(&gt;)+)/g;
	goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
	goog.i18n.bidi.guardBracketInHtml = function(a, b) {
		return (void 0 === b ? goog.i18n.bidi.hasAnyRtl(a) : b) ? a.replace(goog.i18n.bidi.bracketGuardHtmlRe_, "<span dir=rtl>$&</span>") : a.replace(goog.i18n.bidi.bracketGuardHtmlRe_, "<span dir=ltr>$&</span>")
	};
	goog.i18n.bidi.guardBracketInText = function(a, b) {
		var c = (void 0 === b ? goog.i18n.bidi.hasAnyRtl(a) : b) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
		return a.replace(goog.i18n.bidi.bracketGuardTextRe_, c + "$&" + c)
	};
	goog.i18n.bidi.enforceRtlInHtml = function(a) {
		return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a + "</span>"
	};
	goog.i18n.bidi.enforceRtlInText = function(a) {
		return goog.i18n.bidi.Format.RLE + a + goog.i18n.bidi.Format.PDF
	};
	goog.i18n.bidi.enforceLtrInHtml = function(a) {
		return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a + "</span>"
	};
	goog.i18n.bidi.enforceLtrInText = function(a) {
		return goog.i18n.bidi.Format.LRE + a + goog.i18n.bidi.Format.PDF
	};
	goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
	goog.i18n.bidi.leftRe_ = /left/gi;
	goog.i18n.bidi.rightRe_ = /right/gi;
	goog.i18n.bidi.tempRe_ = /%%%%/g;
	goog.i18n.bidi.mirrorCSS = function(a) {
		return a.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT)
	};
	goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
	goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
	goog.i18n.bidi.normalizeHebrewQuote = function(a) {
		return a.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05f4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05f3")
	};
	goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
	goog.i18n.bidi.hasNumeralsRe_ = /\d/;
	goog.i18n.bidi.rtlDetectionThreshold_ = .4;
	goog.i18n.bidi.estimateDirection = function(a, b) {
		for (var c = 0, e = 0, f = !1, h = goog.i18n.bidi.stripHtmlIfNeeded_(a, b).split(goog.i18n.bidi.wordSeparatorRe_), k = 0; k < h.length; k++) {
			var m = h[k];
			goog.i18n.bidi.startsWithRtl(m) ? (c++, e++) : goog.i18n.bidi.isRequiredLtrRe_.test(m) ? f = !0 : goog.i18n.bidi.hasAnyLtr(m) ? e++ : goog.i18n.bidi.hasNumeralsRe_.test(m) && (f = !0)
		}
		return 0 == e ? f ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : c / e > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
	};
	goog.i18n.bidi.detectRtlDirectionality = function(a, b) {
		return goog.i18n.bidi.estimateDirection(a, b) == goog.i18n.bidi.Dir.RTL
	};
	goog.i18n.bidi.setElementDirAndAlign = function(a, b) {
		a && (b = goog.i18n.bidi.toDir(b)) && (a.style.textAlign = b == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, a.dir = b == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr")
	};
	goog.i18n.bidi.DirectionalString = function() {};
	goog.html.SafeUrl = function() {
		this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
		this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
	};
	goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
	goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0;
	goog.html.SafeUrl.prototype.getTypedStringValue = function() {
		return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
	};
	goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
	goog.html.SafeUrl.prototype.getDirection = function() {
		return goog.i18n.bidi.Dir.LTR
	};
	goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
		return "SafeUrl{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
	});
	goog.html.SafeUrl.unwrap = function(a) {
		if (a instanceof goog.html.SafeUrl && a.constructor === goog.html.SafeUrl && a.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
		goog.asserts.fail("expected object of type SafeUrl, got '" + a + "'");
		return "type_error:SafeUrl"
	};
	goog.html.SafeUrl.fromConstant = function(a) {
		return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a))
	};
	goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto):|[^&:/?#]*(?:[/?#]|$))/i;
	goog.html.SafeUrl.sanitize = function(a) {
		if (a instanceof goog.html.SafeUrl) return a;
		a = a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
		a = goog.html.SAFE_URL_PATTERN_.test(a) ? goog.html.SafeUrl.normalize_(a) : goog.html.SafeUrl.INNOCUOUS_STRING;
		return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)
	};
	goog.html.SafeUrl.normalize_ = function(a) {
		try {
			var b = encodeURI(a)
		} catch (c) {
			return goog.html.SafeUrl.INNOCUOUS_STRING
		}
		return b.replace(goog.html.SafeUrl.NORMALIZE_MATCHER_, function(a) {
			return goog.html.SafeUrl.NORMALIZE_REPLACER_MAP_[a]
		})
	};
	goog.html.SafeUrl.NORMALIZE_MATCHER_ = /[()']|%5B|%5D|%25/g;
	goog.html.SafeUrl.NORMALIZE_REPLACER_MAP_ = {
		"'": "%27",
		"(": "%28",
		")": "%29",
		"%5B": "[",
		"%5D": "]",
		"%25": "%"
	};
	goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
	goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(a) {
		var b = new goog.html.SafeUrl;
		b.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = a;
		return b
	};
	goog.html.SafeHtml = function() {
		this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
		this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
		this.dir_ = null
	};
	goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0;
	goog.html.SafeHtml.prototype.getDirection = function() {
		return this.dir_
	};
	goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0;
	goog.html.SafeHtml.prototype.getTypedStringValue = function() {
		return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
	};
	goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
		return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
	});
	goog.html.SafeHtml.unwrap = function(a) {
		if (a instanceof goog.html.SafeHtml && a.constructor === goog.html.SafeHtml && a.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
		goog.asserts.fail("expected object of type SafeHtml, got '" + a + "'");
		return "type_error:SafeHtml"
	};
	goog.html.SafeHtml.htmlEscape = function(a) {
		if (a instanceof goog.html.SafeHtml) return a;
		var b = null;
		a.implementsGoogI18nBidiDirectionalString && (b = a.getDirection());
		a = a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
		return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.htmlEscape(a), b)
	};
	goog.html.SafeHtml.htmlEscapePreservingNewlines = function(a) {
		if (a instanceof goog.html.SafeHtml) return a;
		a = goog.html.SafeHtml.htmlEscape(a);
		return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.newLineToBr(goog.html.SafeHtml.unwrap(a)), a.getDirection())
	};
	goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
	goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
	goog.html.SafeHtml.URL_ATTRIBUTES_ = goog.object.createSet("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
	goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = goog.object.createSet("link", "script", "style");
	goog.html.SafeHtml.create = function(a, b, c) {
		if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a)) throw Error("Invalid tag name <" + a + ">.");
		if (a.toLowerCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_) throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
		var e = null,
			f = "<" + a;
		if (b)
			for (var h in b) {
				if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(h)) throw Error('Invalid attribute name "' + h + '".');
				var k = b[h];
				if (null != k) {
					if (k instanceof goog.string.Const) k = goog.string.Const.unwrap(k);
					else if ("style" == h.toLowerCase()) k =
						goog.html.SafeHtml.getStyleValue_(k);
					else {
						if (/^on/i.test(h)) throw Error('Attribute "' + h + '" requires goog.string.Const value, "' + k + '" given.');
						if (k instanceof goog.html.SafeUrl) k = goog.html.SafeUrl.unwrap(k);
						else if (h.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_) throw Error('Attribute "' + h + '" requires goog.string.Const or goog.html.SafeUrl value, "' + k + '" given.');
					}
					goog.asserts.assert(goog.isString(k) || goog.isNumber(k), "String or number value expected, got " + typeof k + " with value: " + k);
					f += " " +
						h + '="' + goog.string.htmlEscape(String(k)) + '"'
				}
			}
		goog.isDef(c) ? goog.isArray(c) || (c = [c]) : c = [];
		goog.dom.tags.isVoidTag(a.toLowerCase()) ? (goog.asserts.assert(!c.length, "Void tag <" + a + "> does not allow content."), f += ">") : (e = goog.html.SafeHtml.concat(c), f += ">" + goog.html.SafeHtml.unwrap(e) + "</" + a + ">", e = e.getDirection());
		(a = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(a) ? goog.i18n.bidi.Dir.NEUTRAL : null);
		return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(f, e)
	};
	goog.html.SafeHtml.getStyleValue_ = function(a) {
		if (!goog.isObject(a)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a);
		a instanceof goog.html.SafeStyle || (a = goog.html.SafeStyle.create(a));
		return goog.html.SafeStyle.unwrap(a)
	};
	goog.html.SafeHtml.createWithDir = function(a, b, c, e) {
		b = goog.html.SafeHtml.create(b, c, e);
		b.dir_ = a;
		return b
	};
	goog.html.SafeHtml.concat = function(a) {
		var b = goog.i18n.bidi.Dir.NEUTRAL,
			c = "",
			e = function(a) {
				goog.isArray(a) ? goog.array.forEach(a, e) : (a = goog.html.SafeHtml.htmlEscape(a), c += goog.html.SafeHtml.unwrap(a), a = a.getDirection(), b == goog.i18n.bidi.Dir.NEUTRAL ? b = a : a != goog.i18n.bidi.Dir.NEUTRAL && b != a && (b = null))
			};
		goog.array.forEach(arguments, e);
		return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c, b)
	};
	goog.html.SafeHtml.concatWithDir = function(a, b) {
		var c = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
		c.dir_ = a;
		return c
	};
	goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
	goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(a, b) {
		var c = new goog.html.SafeHtml;
		c.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = a;
		c.dir_ = b;
		return c
	};
	goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL);
	goog.html.TrustedResourceUrl = function() {
		this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "";
		this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
	};
	goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0;
	goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
		return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
	};
	goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
	goog.html.TrustedResourceUrl.prototype.getDirection = function() {
		return goog.i18n.bidi.Dir.LTR
	};
	goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
		return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}"
	});
	goog.html.TrustedResourceUrl.unwrap = function(a) {
		if (a instanceof goog.html.TrustedResourceUrl && a.constructor === goog.html.TrustedResourceUrl && a.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
		goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a + "'");
		return "type_error:TrustedResourceUrl"
	};
	goog.html.TrustedResourceUrl.fromConstant = function(a) {
		return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a))
	};
	goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
	goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(a) {
		var b = new goog.html.TrustedResourceUrl;
		b.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = a;
		return b
	};
	goog.html.legacyconversions = {};
	goog.html.legacyconversions.ALLOW_LEGACY_CONVERSIONS = !0;
	goog.html.legacyconversions.safeHtmlFromString = function(a) {
		goog.html.legacyconversions.throwIfConversionDisallowed_();
		return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(a, null)
	};
	goog.html.legacyconversions.trustedResourceUrlFromString = function(a) {
		goog.html.legacyconversions.throwIfConversionDisallowed_();
		return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a)
	};
	goog.html.legacyconversions.safeUrlFromString = function(a) {
		goog.html.legacyconversions.throwIfConversionDisallowed_();
		return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)
	};
	goog.html.legacyconversions.reportCallback_ = goog.nullFunction;
	goog.html.legacyconversions.setReportCallback = function(a) {
		goog.html.legacyconversions.reportCallback_ = a
	};
	goog.html.legacyconversions.throwIfConversionDisallowed_ = function() {
		if (!goog.html.legacyconversions.ALLOW_LEGACY_CONVERSIONS) throw Error("Error: Legacy conversion from string to goog.html types is disabled");
		goog.html.legacyconversions.reportCallback_()
	};
	goog.i18n.BidiFormatter = function(a, b) {
		this.contextDir_ = goog.i18n.bidi.toDir(a, !0);
		this.alwaysSpan_ = !!b
	};
	goog.i18n.BidiFormatter.prototype.getContextDir = function() {
		return this.contextDir_
	};
	goog.i18n.BidiFormatter.prototype.getAlwaysSpan = function() {
		return this.alwaysSpan_
	};
	goog.i18n.BidiFormatter.prototype.setContextDir = function(a) {
		this.contextDir_ = goog.i18n.bidi.toDir(a, !0)
	};
	goog.i18n.BidiFormatter.prototype.setAlwaysSpan = function(a) {
		this.alwaysSpan_ = a
	};
	goog.i18n.BidiFormatter.prototype.estimateDirection = goog.i18n.bidi.estimateDirection;
	goog.i18n.BidiFormatter.prototype.areDirectionalitiesOpposite_ = function(a, b) {
		return 0 > a * b
	};
	goog.i18n.BidiFormatter.prototype.dirResetIfNeeded_ = function(a, b, c, e) {
		return e && (this.areDirectionalitiesOpposite_(b, this.contextDir_) || this.contextDir_ == goog.i18n.bidi.Dir.LTR && goog.i18n.bidi.endsWithRtl(a, c) || this.contextDir_ == goog.i18n.bidi.Dir.RTL && goog.i18n.bidi.endsWithLtr(a, c)) ? this.contextDir_ == goog.i18n.bidi.Dir.LTR ? goog.i18n.bidi.Format.LRM : goog.i18n.bidi.Format.RLM : ""
	};
	goog.i18n.BidiFormatter.prototype.dirAttrValue = function(a, b) {
		return this.knownDirAttrValue(this.estimateDirection(a, b))
	};
	goog.i18n.BidiFormatter.prototype.knownDirAttrValue = function(a) {
		return (a == goog.i18n.bidi.Dir.NEUTRAL ? this.contextDir_ : a) == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr"
	};
	goog.i18n.BidiFormatter.prototype.dirAttr = function(a, b) {
		return this.knownDirAttr(this.estimateDirection(a, b))
	};
	goog.i18n.BidiFormatter.prototype.knownDirAttr = function(a) {
		return a != this.contextDir_ ? a == goog.i18n.bidi.Dir.RTL ? 'dir="rtl"' : a == goog.i18n.bidi.Dir.LTR ? 'dir="ltr"' : "" : ""
	};
	goog.i18n.BidiFormatter.prototype.spanWrapSafeHtml = function(a, b) {
		return this.spanWrapSafeHtmlWithKnownDir(null, a, b)
	};
	goog.i18n.BidiFormatter.prototype.spanWrap = function(a, b, c) {
		return this.spanWrapWithKnownDir(null, a, b, c)
	};
	goog.i18n.BidiFormatter.prototype.spanWrapSafeHtmlWithKnownDir = function(a, b, c) {
		null == a && (a = this.estimateDirection(goog.html.SafeHtml.unwrap(b), !0));
		return this.spanWrapWithKnownDir_(a, b, c)
	};
	goog.i18n.BidiFormatter.prototype.spanWrapWithKnownDir = function(a, b, c, e) {
		b = c ? goog.html.legacyconversions.safeHtmlFromString(b) : goog.html.SafeHtml.htmlEscape(b);
		return goog.html.SafeHtml.unwrap(this.spanWrapSafeHtmlWithKnownDir(a, b, e))
	};
	goog.i18n.BidiFormatter.prototype.spanWrapWithKnownDir_ = function(a, b, c) {
		c = c || void 0 == c;
		var e;
		e = a != goog.i18n.bidi.Dir.NEUTRAL && a != this.contextDir_;
		if (this.alwaysSpan_ || e) {
			var f;
			e && (f = a == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
			e = goog.html.SafeHtml.create("span", {
				dir: f
			}, b)
		} else e = b;
		b = goog.html.SafeHtml.unwrap(b);
		return e = goog.html.SafeHtml.concatWithDir(goog.i18n.bidi.Dir.NEUTRAL, e, this.dirResetIfNeeded_(b, a, !0, c))
	};
	goog.i18n.BidiFormatter.prototype.unicodeWrap = function(a, b, c) {
		return this.unicodeWrapWithKnownDir(null, a, b, c)
	};
	goog.i18n.BidiFormatter.prototype.unicodeWrapWithKnownDir = function(a, b, c, e) {
		null == a && (a = this.estimateDirection(b, c));
		return this.unicodeWrapWithKnownDir_(a, b, c, e)
	};
	goog.i18n.BidiFormatter.prototype.unicodeWrapWithKnownDir_ = function(a, b, c, e) {
		e = e || void 0 == e;
		var f = [];
		a != goog.i18n.bidi.Dir.NEUTRAL && a != this.contextDir_ ? (f.push(a == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.Format.RLE : goog.i18n.bidi.Format.LRE), f.push(b), f.push(goog.i18n.bidi.Format.PDF)) : f.push(b);
		f.push(this.dirResetIfNeeded_(b, a, c, e));
		return f.join("")
	};
	goog.i18n.BidiFormatter.prototype.markAfter = function(a, b) {
		return this.markAfterKnownDir(null, a, b)
	};
	goog.i18n.BidiFormatter.prototype.markAfterKnownDir = function(a, b, c) {
		null == a && (a = this.estimateDirection(b, c));
		return this.dirResetIfNeeded_(b, a, c, !0)
	};
	goog.i18n.BidiFormatter.prototype.mark = function() {
		switch (this.contextDir_) {
			case goog.i18n.bidi.Dir.LTR:
				return goog.i18n.bidi.Format.LRM;
			case goog.i18n.bidi.Dir.RTL:
				return goog.i18n.bidi.Format.RLM;
			default:
				return ""
		}
	};
	goog.i18n.BidiFormatter.prototype.startEdge = function() {
		return this.contextDir_ == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT
	};
	goog.i18n.BidiFormatter.prototype.endEdge = function() {
		return this.contextDir_ == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT
	};
	goog.html.SafeScript = function() {
		this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
		this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
	};
	goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0;
	goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
	goog.html.SafeScript.fromConstant = function(a) {
		a = goog.string.Const.unwrap(a);
		return 0 === a.length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a)
	};
	goog.html.SafeScript.prototype.getTypedStringValue = function() {
		return this.privateDoNotAccessOrElseSafeScriptWrappedValue_
	};
	goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
		return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}"
	});
	goog.html.SafeScript.unwrap = function(a) {
		if (a instanceof goog.html.SafeScript && a.constructor === goog.html.SafeScript && a.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseSafeScriptWrappedValue_;
		goog.asserts.fail("expected object of type SafeScript, got '" + a + "'");
		return "type_error:SafeScript"
	};
	goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(a) {
		var b = new goog.html.SafeScript;
		b.privateDoNotAccessOrElseSafeScriptWrappedValue_ = a;
		return b
	};
	goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
	goog.html.SafeStyleSheet = function() {
		this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
		this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
	};
	goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0;
	goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
	goog.html.SafeStyleSheet.fromConstant = function(a) {
		a = goog.string.Const.unwrap(a);
		if (0 === a.length) return goog.html.SafeStyleSheet.EMPTY;
		goog.asserts.assert(!goog.string.contains(a, "<"), "Forbidden '<' character in style sheet string: " + a);
		return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a)
	};
	goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
		return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
	};
	goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
		return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}"
	});
	goog.html.SafeStyleSheet.unwrap = function(a) {
		if (a instanceof goog.html.SafeStyleSheet && a.constructor === goog.html.SafeStyleSheet && a.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
		goog.asserts.fail("expected object of type SafeStyleSheet, got '" + a + "'");
		return "type_error:SafeStyleSheet"
	};
	goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(a) {
		var b = new goog.html.SafeStyleSheet;
		b.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = a;
		return b
	};
	goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
	goog.html.uncheckedconversions = {};
	goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(a, b, c) {
		goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
		goog.asserts.assert(!goog.string.isEmpty(goog.string.Const.unwrap(a)), "must provide non-empty justification");
		return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b, c || null)
	};
	goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(a, b) {
		goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
		goog.asserts.assert(0 < goog.string.trim(goog.string.Const.unwrap(a)).length, "must provide non-empty justification");
		return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b)
	};
	goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(a, b) {
		goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
		goog.asserts.assert(!goog.string.isEmpty(goog.string.Const.unwrap(a)), "must provide non-empty justification");
		return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b)
	};
	goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(a, b) {
		goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
		goog.asserts.assert(!goog.string.isEmpty(goog.string.Const.unwrap(a)), "must provide non-empty justification");
		return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b)
	};
	goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(a, b) {
		goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
		goog.asserts.assert(!goog.string.isEmpty(goog.string.Const.unwrap(a)), "must provide non-empty justification");
		return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b)
	};
	goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(a, b) {
		goog.asserts.assertString(goog.string.Const.unwrap(a), "must provide justification");
		goog.asserts.assert(!goog.string.isEmpty(goog.string.Const.unwrap(a)), "must provide non-empty justification");
		return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b)
	};
	goog.soy = {};
	goog.soy.data = {};
	goog.soy.data.SanitizedContentKind = {
		HTML: goog.DEBUG ? {
			sanitizedContentKindHtml: !0
		} : {},
		JS: goog.DEBUG ? {
			sanitizedContentJsChars: !0
		} : {},
		URI: goog.DEBUG ? {
			sanitizedContentUri: !0
		} : {},
		ATTRIBUTES: goog.DEBUG ? {
			sanitizedContentHtmlAttribute: !0
		} : {},
		CSS: goog.DEBUG ? {
			sanitizedContentCss: !0
		} : {},
		TEXT: goog.DEBUG ? {
			sanitizedContentKindText: !0
		} : {}
	};
	goog.soy.data.SanitizedContent = function() {
		throw Error("Do not instantiate directly");
	};
	goog.soy.data.SanitizedContent.prototype.contentDir = null;
	goog.soy.data.SanitizedContent.prototype.getContent = function() {
		return this.content
	};
	goog.soy.data.SanitizedContent.prototype.toString = function() {
		return this.content
	};
	goog.soy.data.SanitizedContent.prototype.toSafeHtml = function() {
		if (this.contentKind === goog.soy.data.SanitizedContentKind.TEXT) return goog.html.SafeHtml.htmlEscape(this.toString());
		if (this.contentKind !== goog.soy.data.SanitizedContentKind.HTML) throw Error("Sanitized content was not of kind TEXT or HTML.");
		return goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), this.toString(),
			this.contentDir)
	};
	goog.soy.REQUIRE_STRICT_AUTOESCAPE = !1;
	goog.soy.renderElement = function(a, b, c, e) {
		goog.asserts.assert(b, "Soy template may not be null.");
		a.innerHTML = goog.soy.ensureTemplateOutputHtml_(b(c || goog.soy.defaultTemplateData_, void 0, e))
	};
	goog.soy.renderAsFragment = function(a, b, c, e) {
		goog.asserts.assert(a, "Soy template may not be null.");
		e = e || goog.dom.getDomHelper();
		a = goog.soy.ensureTemplateOutputHtml_(a(b || goog.soy.defaultTemplateData_, void 0, c));
		goog.soy.assertFirstTagValid_(a);
		return e.htmlToDocumentFragment(a)
	};
	goog.soy.renderAsElement = function(a, b, c, e) {
		goog.asserts.assert(a, "Soy template may not be null.");
		e = (e || goog.dom.getDomHelper()).createElement(goog.dom.TagName.DIV);
		a = goog.soy.ensureTemplateOutputHtml_(a(b || goog.soy.defaultTemplateData_, void 0, c));
		goog.soy.assertFirstTagValid_(a);
		e.innerHTML = a;
		return 1 == e.childNodes.length && (a = e.firstChild, a.nodeType == goog.dom.NodeType.ELEMENT) ? a : e
	};
	goog.soy.ensureTemplateOutputHtml_ = function(a) {
		if (!goog.soy.REQUIRE_STRICT_AUTOESCAPE && !goog.isObject(a)) return String(a);
		if (a instanceof goog.soy.data.SanitizedContent) {
			var b = goog.soy.data.SanitizedContentKind;
			if (a.contentKind === b.HTML) return goog.asserts.assertString(a.getContent());
			if (a.contentKind === b.TEXT) return goog.string.htmlEscape(a.getContent())
		}
		goog.asserts.fail("Soy template output is unsafe for use as HTML: " + a);
		return "zSoyz"
	};
	goog.soy.assertFirstTagValid_ = function(a) {
		if (goog.asserts.ENABLE_ASSERTS) {
			var b = a.match(goog.soy.INVALID_TAG_TO_RENDER_);
			goog.asserts.assert(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a)
		}
	};
	goog.soy.INVALID_TAG_TO_RENDER_ = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i;
	goog.soy.defaultTemplateData_ = {};
	goog.string.StringBuffer = function(a, b) {
		null != a && this.append.apply(this, arguments)
	};
	goog.string.StringBuffer.prototype.buffer_ = "";
	goog.string.StringBuffer.prototype.set = function(a) {
		this.buffer_ = "" + a
	};
	goog.string.StringBuffer.prototype.append = function(a, b, c) {
		this.buffer_ += a;
		if (null != b)
			for (var e = 1; e < arguments.length; e++) this.buffer_ += arguments[e];
		return this
	};
	goog.string.StringBuffer.prototype.clear = function() {
		this.buffer_ = ""
	};
	goog.string.StringBuffer.prototype.getLength = function() {
		return this.buffer_.length
	};
	goog.string.StringBuffer.prototype.toString = function() {
		return this.buffer_
	};
	var soy = {
			esc: {}
		},
		soydata = {
			VERY_UNSAFE: {}
		};
	soy.StringBuilder = goog.string.StringBuffer;
	soydata.SanitizedContentKind = goog.soy.data.SanitizedContentKind;
	soydata.SanitizedHtml = function() {
		goog.soy.data.SanitizedContent.call(this)
	};
	goog.inherits(soydata.SanitizedHtml, goog.soy.data.SanitizedContent);
	soydata.SanitizedHtml.prototype.contentKind = soydata.SanitizedContentKind.HTML;
	soydata.SanitizedJs = function() {
		goog.soy.data.SanitizedContent.call(this)
	};
	goog.inherits(soydata.SanitizedJs, goog.soy.data.SanitizedContent);
	soydata.SanitizedJs.prototype.contentKind = soydata.SanitizedContentKind.JS;
	soydata.SanitizedJsStrChars = function() {
		goog.soy.data.SanitizedContent.call(this)
	};
	goog.inherits(soydata.SanitizedJsStrChars, goog.soy.data.SanitizedContent);
	soydata.SanitizedJsStrChars.prototype.contentKind = soydata.SanitizedContentKind.JS;
	soydata.SanitizedUri = function() {
		goog.soy.data.SanitizedContent.call(this)
	};
	goog.inherits(soydata.SanitizedUri, goog.soy.data.SanitizedContent);
	soydata.SanitizedUri.prototype.contentKind = soydata.SanitizedContentKind.URI;
	soydata.SanitizedHtmlAttribute = function() {
		goog.soy.data.SanitizedContent.call(this)
	};
	goog.inherits(soydata.SanitizedHtmlAttribute, goog.soy.data.SanitizedContent);
	soydata.SanitizedHtmlAttribute.prototype.contentKind = soydata.SanitizedContentKind.ATTRIBUTES;
	soydata.SanitizedCss = function() {
		goog.soy.data.SanitizedContent.call(this)
	};
	goog.inherits(soydata.SanitizedCss, goog.soy.data.SanitizedContent);
	soydata.SanitizedCss.prototype.contentKind = soydata.SanitizedContentKind.CSS;
	soydata.UnsanitizedText = function(a) {
		this.content = String(a)
	};
	goog.inherits(soydata.UnsanitizedText, goog.soy.data.SanitizedContent);
	soydata.UnsanitizedText.prototype.contentKind = soydata.SanitizedContentKind.TEXT;
	soydata.$$makeSanitizedContentFactory_ = function(a) {
		function b() {}
		b.prototype = a.prototype;
		return function(a) {
			var e = new b;
			e.content = String(a);
			return e
		}
	};
	soydata.markUnsanitizedText = function(a) {
		return new soydata.UnsanitizedText(a)
	};
	soydata.VERY_UNSAFE.ordainSanitizedHtml = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedHtml);
	soydata.VERY_UNSAFE.ordainSanitizedJs = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedJs);
	soydata.VERY_UNSAFE.ordainSanitizedJsStrChars = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedJsStrChars);
	soydata.VERY_UNSAFE.ordainSanitizedUri = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedUri);
	soydata.VERY_UNSAFE.ordainSanitizedHtmlAttribute = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedHtmlAttribute);
	soydata.VERY_UNSAFE.ordainSanitizedCss = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedCss);
	soy.renderElement = goog.soy.renderElement;
	soy.renderAsFragment = function(a, b, c, e) {
		return goog.soy.renderAsFragment(a, b, e, new goog.dom.DomHelper(c))
	};
	soy.renderAsElement = function(a, b, c, e) {
		return goog.soy.renderAsElement(a, b, e, new goog.dom.DomHelper(c))
	};
	soy.$$augmentMap = function(a, b) {
		function c() {}
		c.prototype = a;
		var e = new c,
			f;
		for (f in b) e[f] = b[f];
		return e
	};
	soy.$$checkMapKey = function(a) {
		if ("string" != typeof a) throw Error("Map literal's key expression must evaluate to string (encountered type \"" + typeof a + '").');
		return a
	};
	soy.$$getMapKeys = function(a) {
		var b = [],
			c;
		for (c in a) b.push(c);
		return b
	};
	soy.$$getDelTemplateId = function(a) {
		return a
	};
	soy.$$DELEGATE_REGISTRY_PRIORITIES_ = {};
	soy.$$DELEGATE_REGISTRY_FUNCTIONS_ = {};
	soy.$$registerDelegateFn = function(a, b, c, e) {
		var f = "key_" + a + ":" + b,
			h = soy.$$DELEGATE_REGISTRY_PRIORITIES_[f];
		if (void 0 === h || c > h) soy.$$DELEGATE_REGISTRY_PRIORITIES_[f] = c, soy.$$DELEGATE_REGISTRY_FUNCTIONS_[f] = e;
		else if (c == h) throw Error('Encountered two active delegates with the same priority ("' + a + ":" + b + '").');
	};
	soy.$$getDelegateFn = function(a, b, c) {
		var e = soy.$$DELEGATE_REGISTRY_FUNCTIONS_["key_" + a + ":" + b];
		e || "" == b || (e = soy.$$DELEGATE_REGISTRY_FUNCTIONS_["key_" + a + ":"]);
		if (e) return e;
		if (c) return soy.$$EMPTY_TEMPLATE_FN_;
		throw Error('Found no active impl for delegate call to "' + a + ":" + b + '" (and not allowemptydefault="true").');
	};
	soy.$$EMPTY_TEMPLATE_FN_ = function(a, b, c) {
		return ""
	};
	soy.$$escapeHtml = function(a) {
		return a && a.contentKind && a.contentKind === goog.soy.data.SanitizedContentKind.HTML ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtml), a.content) : soy.esc.$$escapeHtmlHelper(a)
	};
	soy.$$cleanHtml = function(a) {
		return a && a.contentKind && a.contentKind === goog.soy.data.SanitizedContentKind.HTML ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtml), a.content) : soy.$$stripHtmlTags(a, soy.esc.$$SAFE_TAG_WHITELIST_)
	};
	soy.$$escapeHtmlRcdata = function(a) {
		return a && a.contentKind && a.contentKind === goog.soy.data.SanitizedContentKind.HTML ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtml), soy.esc.$$normalizeHtmlHelper(a.content)) : soy.esc.$$escapeHtmlHelper(a)
	};
	soy.$$HTML5_VOID_ELEMENTS_ = /^<(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\b/;
	soy.$$stripHtmlTags = function(a, b) {
		if (!b) return String(a).replace(soy.esc.$$HTML_TAG_REGEX_, "").replace(soy.esc.$$LT_REGEX_, "&lt;");
		var c = String(a).replace(/\[/g, "&#91;"),
			e = [],
			c = c.replace(soy.esc.$$HTML_TAG_REGEX_, function(a, c) {
				if (c && (c = c.toLowerCase(), b.hasOwnProperty(c) && b[c])) {
					var f = "/" === a.charAt(1) ? "</" : "<",
						p = e.length;
					e[p] = f + c + ">";
					return "[" + p + "]"
				}
				return ""
			}),
			c = soy.esc.$$normalizeHtmlHelper(c),
			f = soy.$$balanceTags_(e),
			c = c.replace(/\[(\d+)\]/g, function(a, b) {
				return e[b]
			});
		return c + f
	};
	soy.$$balanceTags_ = function(a) {
		for (var b = [], c = 0, e = a.length; c < e; ++c) {
			var f = a[c];
			if ("/" === f.charAt(1)) {
				for (var h = b.length - 1; 0 <= h && b[h] != f;) h--;
				0 > h ? a[c] = "" : (a[c] = b.slice(h).reverse().join(""), b.length = h)
			} else soy.$$HTML5_VOID_ELEMENTS_.test(f) || b.push("</" + f.substring(1))
		}
		return b.reverse().join("")
	};
	soy.$$escapeHtmlAttribute = function(a) {
		return a && a.contentKind && a.contentKind === goog.soy.data.SanitizedContentKind.HTML ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtml), soy.esc.$$normalizeHtmlHelper(soy.$$stripHtmlTags(a.content))) : soy.esc.$$escapeHtmlHelper(a)
	};
	soy.$$escapeHtmlAttributeNospace = function(a) {
		return a && a.contentKind && a.contentKind === goog.soy.data.SanitizedContentKind.HTML ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtml), soy.esc.$$normalizeHtmlNospaceHelper(soy.$$stripHtmlTags(a.content))) : soy.esc.$$escapeHtmlNospaceHelper(a)
	};
	soy.$$filterHtmlAttributes = function(a) {
		return a && a.contentKind === goog.soy.data.SanitizedContentKind.ATTRIBUTES ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtmlAttribute), a.content.replace(/([^"'\s])$/, "$1 ")) : soy.esc.$$filterHtmlAttributesHelper(a)
	};
	soy.$$filterHtmlElementName = function(a) {
		return soy.esc.$$filterHtmlElementNameHelper(a)
	};
	soy.$$escapeJs = function(a) {
		return soy.$$escapeJsString(a)
	};
	soy.$$escapeJsString = function(a) {
		return a && a.contentKind === goog.soy.data.SanitizedContentKind.JS ? (goog.asserts.assert(a.constructor === soydata.SanitizedJsStrChars), a.content) : soy.esc.$$escapeJsStringHelper(a)
	};
	soy.$$escapeJsValue = function(a) {
		if (null == a) return " null ";
		if (a.contentKind == goog.soy.data.SanitizedContentKind.JS) return goog.asserts.assert(a.constructor === soydata.SanitizedJs), a.content;
		switch (typeof a) {
			case "boolean":
			case "number":
				return " " + a + " ";
			default:
				return "'" + soy.esc.$$escapeJsStringHelper(String(a)) + "'"
		}
	};
	soy.$$escapeJsRegex = function(a) {
		return soy.esc.$$escapeJsRegexHelper(a)
	};
	soy.$$problematicUriMarks_ = /['()]/g;
	soy.$$pctEncode_ = function(a) {
		return "%" + a.charCodeAt(0).toString(16)
	};
	soy.$$escapeUri = function(a) {
		if (a && a.contentKind === goog.soy.data.SanitizedContentKind.URI) return goog.asserts.assert(a.constructor === soydata.SanitizedUri), soy.$$normalizeUri(a);
		a = soy.esc.$$escapeUriHelper(a);
		soy.$$problematicUriMarks_.lastIndex = 0;
		return soy.$$problematicUriMarks_.test(a) ? a.replace(soy.$$problematicUriMarks_, soy.$$pctEncode_) : a
	};
	soy.$$normalizeUri = function(a) {
		return soy.esc.$$normalizeUriHelper(a)
	};
	soy.$$filterNormalizeUri = function(a) {
		return a && a.contentKind == goog.soy.data.SanitizedContentKind.URI ? (goog.asserts.assert(a.constructor === soydata.SanitizedUri), soy.$$normalizeUri(a)) : soy.esc.$$filterNormalizeUriHelper(a)
	};
	soy.$$escapeCssString = function(a) {
		return soy.esc.$$escapeCssStringHelper(a)
	};
	soy.$$filterCssValue = function(a) {
		return a && a.contentKind === goog.soy.data.SanitizedContentKind.CSS ? (goog.asserts.assert(a.constructor === soydata.SanitizedCss), a.content) : null == a ? "" : soy.esc.$$filterCssValueHelper(a)
	};
	soy.$$filterNoAutoescape = function(a) {
		return a && a.contentKind === goog.soy.data.SanitizedContentKind.TEXT ? (goog.asserts.fail("Tainted SanitizedContentKind.TEXT for |noAutoescape: `%s`", [a.content]), "zSoyz") : String(a)
	};
	soy.$$changeNewlineToBr = function(a) {
		return goog.string.newLineToBr(String(a), !1)
	};
	soy.$$insertWordBreaks = function(a, b) {
		return goog.format.insertWordBreaks(String(a), b)
	};
	soy.$$truncate = function(a, b, c) {
		a = String(a);
		if (a.length <= b) return a;
		c && (3 < b ? b -= 3 : c = !1);
		soy.$$isHighSurrogate_(a.charAt(b - 1)) && soy.$$isLowSurrogate_(a.charAt(b)) && --b;
		a = a.substring(0, b);
		c && (a += "...");
		return a
	};
	soy.$$isHighSurrogate_ = function(a) {
		return 55296 <= a && 56319 >= a
	};
	soy.$$isLowSurrogate_ = function(a) {
		return 56320 <= a && 57343 >= a
	};
	soy.$$bidiFormatterCache_ = {};
	soy.$$getBidiFormatterInstance_ = function(a) {
		return soy.$$bidiFormatterCache_[a] || (soy.$$bidiFormatterCache_[a] = new goog.i18n.BidiFormatter(a))
	};
	soy.$$bidiTextDir = function(a, b) {
		return a ? goog.i18n.bidi.detectRtlDirectionality(a, b) ? -1 : 1 : 0
	};
	soy.$$bidiDirAttr = function(a, b, c) {
		return soydata.VERY_UNSAFE.ordainSanitizedHtmlAttribute(soy.$$getBidiFormatterInstance_(a).dirAttr(b, c))
	};
	soy.$$bidiMarkAfter = function(a, b, c) {
		return soy.$$getBidiFormatterInstance_(a).markAfter(b, c)
	};
	soy.$$bidiSpanWrap = function(a, b) {
		return soy.$$getBidiFormatterInstance_(a).spanWrap(b + "", !0)
	};
	soy.$$bidiUnicodeWrap = function(a, b) {
		return soy.$$getBidiFormatterInstance_(a).unicodeWrap(b + "", !0)
	};
	soy.esc.$$escapeUriHelper = function(a) {
		return goog.string.urlEncode(String(a))
	};
	soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_ = {
		"\x00": "&#0;",
		'"': "&quot;",
		"&": "&amp;",
		"'": "&#39;",
		"<": "&lt;",
		">": "&gt;",
		"\t": "&#9;",
		"\n": "&#10;",
		"\x0B": "&#11;",
		"\f": "&#12;",
		"\r": "&#13;",
		" ": "&#32;",
		"-": "&#45;",
		"/": "&#47;",
		"=": "&#61;",
		"`": "&#96;",
		"\u0085": "&#133;",
		"\u00a0": "&#160;",
		"\u2028": "&#8232;",
		"\u2029": "&#8233;"
	};
	soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_ = function(a) {
		return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_[a]
	};
	soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_ = {
		"\x00": "\\x00",
		"\b": "\\x08",
		"\t": "\\t",
		"\n": "\\n",
		"\x0B": "\\x0b",
		"\f": "\\f",
		"\r": "\\r",
		'"': "\\x22",
		"&": "\\x26",
		"'": "\\x27",
		"/": "\\/",
		"<": "\\x3c",
		"=": "\\x3d",
		">": "\\x3e",
		"\\": "\\\\",
		"\u0085": "\\x85",
		"\u2028": "\\u2028",
		"\u2029": "\\u2029",
		$: "\\x24",
		"(": "\\x28",
		")": "\\x29",
		"*": "\\x2a",
		"+": "\\x2b",
		",": "\\x2c",
		"-": "\\x2d",
		".": "\\x2e",
		":": "\\x3a",
		"?": "\\x3f",
		"[": "\\x5b",
		"]": "\\x5d",
		"^": "\\x5e",
		"{": "\\x7b",
		"|": "\\x7c",
		"}": "\\x7d"
	};
	soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_ = function(a) {
		return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_[a]
	};
	soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_ = {
		"\x00": "\\0 ",
		"\b": "\\8 ",
		"\t": "\\9 ",
		"\n": "\\a ",
		"\x0B": "\\b ",
		"\f": "\\c ",
		"\r": "\\d ",
		'"': "\\22 ",
		"&": "\\26 ",
		"'": "\\27 ",
		"(": "\\28 ",
		")": "\\29 ",
		"*": "\\2a ",
		"/": "\\2f ",
		":": "\\3a ",
		";": "\\3b ",
		"<": "\\3c ",
		"=": "\\3d ",
		">": "\\3e ",
		"@": "\\40 ",
		"\\": "\\5c ",
		"{": "\\7b ",
		"}": "\\7d ",
		"\u0085": "\\85 ",
		"\u00a0": "\\a0 ",
		"\u2028": "\\2028 ",
		"\u2029": "\\2029 "
	};
	soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_ = function(a) {
		return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_[a]
	};
	soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = {
		"\x00": "%00",
		"\u0001": "%01",
		"\u0002": "%02",
		"\u0003": "%03",
		"\u0004": "%04",
		"\u0005": "%05",
		"\u0006": "%06",
		"\u0007": "%07",
		"\b": "%08",
		"\t": "%09",
		"\n": "%0A",
		"\x0B": "%0B",
		"\f": "%0C",
		"\r": "%0D",
		"\u000e": "%0E",
		"\u000f": "%0F",
		"\u0010": "%10",
		"\u0011": "%11",
		"\u0012": "%12",
		"\u0013": "%13",
		"\u0014": "%14",
		"\u0015": "%15",
		"\u0016": "%16",
		"\u0017": "%17",
		"\u0018": "%18",
		"\u0019": "%19",
		"\u001a": "%1A",
		"\u001b": "%1B",
		"\u001c": "%1C",
		"\u001d": "%1D",
		"\u001e": "%1E",
		"\u001f": "%1F",
		" ": "%20",
		'"': "%22",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"<": "%3C",
		">": "%3E",
		"\\": "%5C",
		"{": "%7B",
		"}": "%7D",
		"\u007f": "%7F",
		"\u0085": "%C2%85",
		"\u00a0": "%C2%A0",
		"\u2028": "%E2%80%A8",
		"\u2029": "%E2%80%A9",
		"\uff01": "%EF%BC%81",
		"\uff03": "%EF%BC%83",
		"\uff04": "%EF%BC%84",
		"\uff06": "%EF%BC%86",
		"\uff07": "%EF%BC%87",
		"\uff08": "%EF%BC%88",
		"\uff09": "%EF%BC%89",
		"\uff0a": "%EF%BC%8A",
		"\uff0b": "%EF%BC%8B",
		"\uff0c": "%EF%BC%8C",
		"\uff0f": "%EF%BC%8F",
		"\uff1a": "%EF%BC%9A",
		"\uff1b": "%EF%BC%9B",
		"\uff1d": "%EF%BC%9D",
		"\uff1f": "%EF%BC%9F",
		"\uff20": "%EF%BC%A0",
		"\uff3b": "%EF%BC%BB",
		"\uff3d": "%EF%BC%BD"
	};
	soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = function(a) {
		return soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_[a]
	};
	soy.esc.$$MATCHER_FOR_ESCAPE_HTML_ = /[\x00\x22\x26\x27\x3c\x3e]/g;
	soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_ = /[\x00\x22\x27\x3c\x3e]/g;
	soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_ = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;
	soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_ = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;
	soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_ = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g;
	soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_ = /[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;
	soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_ = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;
	soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
	soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_ = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
	soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_ = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
	soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTES_ = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i;
	soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_ = /^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i;
	soy.esc.$$escapeHtmlHelper = function(a) {
		return String(a).replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
	};
	soy.esc.$$normalizeHtmlHelper = function(a) {
		return String(a).replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
	};
	soy.esc.$$escapeHtmlNospaceHelper = function(a) {
		return String(a).replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
	};
	soy.esc.$$normalizeHtmlNospaceHelper = function(a) {
		return String(a).replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
	};
	soy.esc.$$escapeJsStringHelper = function(a) {
		return String(a).replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_, soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
	};
	soy.esc.$$escapeJsRegexHelper = function(a) {
		return String(a).replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_, soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
	};
	soy.esc.$$escapeCssStringHelper = function(a) {
		return String(a).replace(soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_, soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_)
	};
	soy.esc.$$filterCssValueHelper = function(a) {
		a = String(a);
		return soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_.test(a) ? a : (goog.asserts.fail("Bad value `%s` for |filterCssValue", [a]), "zSoyz")
	};
	soy.esc.$$normalizeUriHelper = function(a) {
		return String(a).replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_, soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)
	};
	soy.esc.$$filterNormalizeUriHelper = function(a) {
		a = String(a);
		return soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_.test(a) ? a.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_, soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_) : (goog.asserts.fail("Bad value `%s` for |filterNormalizeUri", [a]), "#zSoyz")
	};
	soy.esc.$$filterHtmlAttributesHelper = function(a) {
		a = String(a);
		return soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTES_.test(a) ? a : (goog.asserts.fail("Bad value `%s` for |filterHtmlAttributes", [a]), "zSoyz")
	};
	soy.esc.$$filterHtmlElementNameHelper = function(a) {
		a = String(a);
		return soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_.test(a) ? a : (goog.asserts.fail("Bad value `%s` for |filterHtmlElementName", [a]), "zSoyz")
	};
	soy.esc.$$HTML_TAG_REGEX_ = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
	soy.esc.$$LT_REGEX_ = /</g;
	soy.esc.$$SAFE_TAG_WHITELIST_ = {
		b: 1,
		br: 1,
		em: 1,
		i: 1,
		s: 1,
		sub: 1,
		sup: 1,
		u: 1
	};
	qun.star.template = {};
	qun.star.template.chatroom = {};
	qun.star.template.chatroom.normalMessage = function(a) {
		return '<div class="chat-msg' + (a.host ? " chat-msg-host" : "") + (a.manager ? " chat-msg-manager" : "") + (a.system ? " chat-msg-system " : "") + "  " + (a.vip ? " chat-msg-vip1" : "") + '"><div class="chat-msg-hd">' + (a.fromApp ? '<a class="chat-msg-app"></a>' : "") + (a.host ? '<div class="chat-hd-host"></div>' : "") + (a.manager ? '<div class="chat-hd-manager"></div>' : "") + (a.vip ? '<div class="chat-msg-vip"></div>' : "") + (a.grade ? '<div class="chat-msg-grade msg-grade-' + soy.$$escapeHtml(a.grade) +
			' msg-bigger-icon"></div>' : "") + (a.fansMedal ? '<div class="fans-medal fans-medal-' + soy.$$escapeHtml(a.fansMedal.level) + '"><a><i class="fans-medal-icon" medalinfo="' + soy.$$escapeHtml(a.fansMedal.name) + "\u7684" + soy.$$escapeHtml(a.fansMedal.level) + '\u7ea7\u7c89\u4e1d"></i></a>\u3010' + soy.$$escapeHtml(a.fansMedal.name) + "\u3011</div>" : "") + (a.system ? '<span class="chat-msg-type">[\u7cfb\u7edf\u6d88\u606f]</span>' : "") + '<span class="chat-msg-name ' + (a.highgrade ? "chat-highlevel-user" : "") + (a.host ? "chatroom-message-host" :
			"") + '" title="\u7528\u6237ID:' + soy.$$escapeHtml(a.uid) + '">' + soy.$$escapeHtml(a.nickname) + '</span><span class="chat-msg-time">' + soy.$$escapeHtml(a.time) + '</span></div><div class="chat-msg-ct">' + soy.$$escapeHtml(a.content) + "</div></div>"
	};
	qun.star.template.chatroom.flowerMessage = function(a) {
		for (var b = '<div class="chatroom-gift-message chatroom-flower-message" title="uid:' + soy.$$escapeHtml(a.uid) + '"><span class="chatroom-message-name ' + (10 < a.grade ? "chat-highlevel-user" : "") + " " + ("host" == a.userType ? "chatroom-message-host" : "manager" == a.userType ? "chatroom-message-manager" : "") + (a.isVip ? "chat-msg-vip1 " : "") + '">' + ("host" == a.userType ? '<div class="chat-hd-host chatroom-message-host"></div>' : "manager" == a.userType ? '<div class="chat-hd-manager"></div>' :
					"") + (a.isVip ? '<div class="chat-msg-vip"></div>' : "") + (a.grade ? '<div class="chat-msg-grade msg-grade-' + soy.$$escapeHtml(a.grade) + " " + (10 < a.grade ? "msg-bigger-icon" : "") + '"></div>' : "") + (a.fansMedal ? '<div class="fans-medal fans-medal-' + soy.$$escapeHtml(a.fansMedal.level) + '"><a"><i class="fans-medal-icon" medalinfo="' + soy.$$escapeHtml(a.fansMedal.name) + "\u7684" + soy.$$escapeHtml(a.fansMedal.level) + '\u7ea7\u7c89\u4e1d"></i></a>\u3010' + soy.$$escapeHtml(a.fansMedal.name) + "\u3011</div>" : "") + soy.$$escapeHtml(a.nickname) +
				'</span><span class="chatroom-gift-message-text">\u9001\u51fa</span>', c = a.count, e = 0; e < c; e++) b += '<img class="chatroom-gift-icon chatroom-flower-icon" src="http://res2.plures.net/content/images/pixel.gif" style="background:url(http://img.plures.net/live/props/' + soy.$$escapeHtml(a.giftName) + "/gift-" + soy.$$escapeHtml(a.giftName) + '.gif)">';
		return b + "</div>"
	};
	qun.star.template.chatroom.appleMessage = function(a) {
		return '<div class="chatroom-gift-message chatroom-flower-message" title="uid:' + soy.$$escapeHtml(a.uid) + '"><span class="chatroom-message-name ' + (10 < a.grade ? "chat-highlevel-user" : "") + " " + ("host" == a.userType ? "chatroom-message-host" : "manager" == a.userType ? "chatroom-message-manager" : "") + " " + (a.isVip ? "chat-msg-vip1 " : "") + '">' + ("host" == a.userType ? '<div class="chat-hd-host chatroom-message-host"></div>' : "manager" == a.userType ? '<div class="chat-hd-manager"></div>' :
			"") + (a.isVip ? '<div class="chat-msg-vip"></div>' : "") + (a.grade ? '<div class="chat-msg-grade msg-grade-' + soy.$$escapeHtml(a.grade) + " " + (10 < a.grade ? "msg-bigger-icon" : "") + '"></div>' : "") + soy.$$escapeHtml(a.nickname) + '</span><span class="chatroom-gift-message-text">\u9001\u51fa</span><img class="chatroom-gift-icon chatroom-apple-icon" src="http://img.plures.net/live/props/' + soy.$$escapeHtml(a.giftName) + "/gift-n-" + soy.$$escapeHtml(a.giftName) + '.gif"></div>'
	};
	qun.star.template.chatroom.giftMessage = function(a) {
		return '<div class="chatroom-gift-message chatroom-gift-' + soy.$$escapeHtml(a.giftType) + '-message"  title="uid:' + soy.$$escapeHtml(a.uid) + '" title="uid:' + soy.$$escapeHtml(a.uid) + '">' + (a.date ? '<span class="chatroom-gift-message-time">' + soy.$$escapeHtml(a.date) + "</span>" : "") + '<span class="chatroom-message-name ' + (10 < a.grade ? "chat-highlevel-user" : "") + " " + ("host" == a.userType ? "chatroom-message-host" : "manager" == a.userType ? "chatroom-message-manager" : "") + " " +
			(a.isVip ? "chat-msg-vip1 " : "") + '">' + ("host" == a.userType ? '<div class="chat-hd-host chatroom-message-host"></div>' : "manager" == a.userType ? '<div class="chat-hd-manager"></div>' : "") + (a.isVip ? '<div class="chat-msg-vip"></div>' : "") + (a.grade ? '<div class="chat-msg-grade msg-grade-' + soy.$$escapeHtml(a.grade) + " " + (10 < a.grade ? "msg-bigger-icon" : "") + '"></div>' : "") + (a.fansMedal ? '<div class="fans-medal fans-medal-' + soy.$$escapeHtml(a.fansMedal.level) + '"><a><i class="fans-medal-icon" medalinfo="' + soy.$$escapeHtml(a.fansMedal.name) +
				"\u7684" + soy.$$escapeHtml(a.fansMedal.level) + '\u7ea7\u7c89\u4e1d"></i></a>\u3010' + soy.$$escapeHtml(a.fansMedal.name) + "\u3011</div>" : "") + soy.$$escapeHtml(a.nickname) + "</span>" + (a.danmaku ? '<span class="chatroom-gift-message-text">\u53d1\u9001\u70ab\u5f69\u5f39\u5e55</span><img class="chatroom-gift-icon chatroom-' + soy.$$escapeHtml(a.giftType) + '-icon" src="http://r.plures.net/plu/images/barrage-' + soy.$$escapeHtml(a.giftType) + '.png">' : '<span class="chatroom-gift-message-text">\u9001\u51fa</span>' + (a.history ?
				"" : "<br/>") + '<img class="chatroom-gift-icon chatroom-' + soy.$$escapeHtml(a.giftType) + "-icon " + (1 != a.category ? "chatroom-gift-icon-large" : "") + '" src="http://img.plures.net/live/props/' + soy.$$escapeHtml(a.giftType) + "/gift-" + (a.history ? "small-" + soy.$$escapeHtml(a.giftType) + soy.$$escapeHtml(a.smallIcon) + ".png" : "n-" + soy.$$escapeHtml(a.giftType) + soy.$$escapeHtml(a.consumeIcon) + ".gif") + '">') + (1 < a.times ? (a.dot ? '<span class="chatroom-gift-dot">...</span>' : "") + '<img class="chatroom-gift-icon chatroom-' + soy.$$escapeHtml(a.giftType) +
				"-icon " + (1 != a.category ? "chatroom-gift-icon-large" : "") + '" src="http://img.plures.net/live/props/' + soy.$$escapeHtml(a.giftType) + "/gift-" + (a.history ? "small-" + soy.$$escapeHtml(a.giftType) + soy.$$escapeHtml(a.smallIcon) + ".png" : "n-" + soy.$$escapeHtml(a.giftType) + soy.$$escapeHtml(a.consumeIcon) + ".gif") + '">' : "") + '<span class="chatroom-gift-message-num">' + soy.$$escapeHtml(a.num) + "</span></div>"
	};
	qun.star.template.chatroom.globalMessage = function(a) {
		return '<div class="chat-broadcast-msg"><div class="chat-broadcast-text">' + (a.grade ? '<span class="chat-msg-grade msg-grade-' + soy.$$escapeHtml(a.grade) + " " + (10 < a.grade ? "msg-bigger-icon" : "") + '"></span>' : "") + '<span class="chat-broadcast-user">' + soy.$$escapeHtml(a.nickname) + '</span>\u5728\u4e3b\u64ad<a class="chat-broadcast-host" href="' + soy.$$escapeHtml(a.url) + '" target="_blank">' + soy.$$escapeHtml(a.host) + '</a>\u7684\u76f4\u64ad\u623f\u95f4,\u6177\u6168\u89e3\u56ca\u9001\u51fa</div><div class="chat-broadcast-box"><img class="chat-broadcast-gift chatroom-' +
			soy.$$escapeHtml(a.giftType) + '-icon" src="http://img.plures.net/live/props/' + soy.$$escapeHtml(a.giftType) + "/gift-control-n-" + soy.$$escapeHtml(a.giftType) + soy.$$escapeHtml(a.bannerIcon) + '.png" /><span class="chat-broadcast-multiply">&Chi;</span><span class="chat-broadcast-num">' + soy.$$escapeHtml(a.num) + "</span></div></div>"
	};
	qun.star.template.chatroom.luckyBoxMessage = function(a) {
		return '<div class="chat-broadcast-msg"><div class="chat-msg-grade msg-grade-' + soy.$$escapeHtml(a.userGrade) + " " + (10 < a.userGrade ? "msg-bigger-icon" : "") + '"></div><span class="chat-broadcast-user">' + soy.$$escapeHtml(a.userName) + "</span>\u5728\u4e3b\u64ad\u5927\u8f6c\u76d8\u6e38\u620f\u4e2d\u5c0f\u8bd5\u725b\u5200\uff0c\u7ffb\u4e86" + soy.$$escapeHtml(a.odd) + "\u500d\uff0c" + soy.$$escapeHtml(a.bean) + "\uff0c<a href=\"#\" onclick=\"handle('show', 'lucky-box', this);return false;\">\u6765\u8bd5\u8bd5\u624b\u6c14</a></div>"
	};
	qun.star.template.chatroom.giftList = function(a) {
		return '<div id="gift-list-scroll" class="scroll"><div id="gift-list-scroll-container" class="scroll-con"><div id="gift-list-content" class="gift-list-content"></div></div></div><div id="gift-list-scroll-bar" class="scroll-bar"><div id="gift-list-scroll-thumb" class="scroll-thumb"></div></div>'
	};
	qun.star.template.chatroom.giftListButton = function(a) {
		return '<div class="gift-list-button-outer"><a id="chatroom-gift-list-button" href="#" onclick="return false" class="gift-list-button"><span class="gift-list-button-arrow" kind="gift-list-btn"></span><span id="gift-list-button-label" class="gift-list-button-label">\u6700\u8fd1\u8d60\u9001</span></a></div>'
	};
	qun.star.template.chatroom.upgradeMessage = function(a) {
		return '<div class="chat-msg chatroom-message-system"><div class="chat-msg-grade msg-bigger-icon msg-grade-' + soy.$$escapeHtml(a.oldgrade) + '"></div><div class="upgrade-name">' + soy.$$escapeHtml(a.nickname) + "</div>" + (a.roomname ? '\u5728<a class="chat-broadcast-host" href="/' + soy.$$escapeHtml(a.domain) + '" target="_blank">' + soy.$$escapeHtml(a.roomname) + "</a>\u7684\u623f\u95f4" : "") + '\u5347\u7ea7\u5230\u4e86<div class="chat-msg-grade msg-bigger-icon msg-grade-' +
			soy.$$escapeHtml(a.newgrade) + '"></div></div>'
	};
	qun.star.template.chatroom.roleMessage = function(a) {
		return "True" == a.kind ? '<div class="chat-msg chatroom-message-system">' + ("host" == a.operatorRole ? '<div class="chat-hd-host"></div><span class="chatroom-message-host">' + soy.$$escapeHtml(a.operator) + "</span>" : '<div class="chat-hd-manager"></div><span class="chatroom-message-user">' + soy.$$escapeHtml(a.operator) + "</span>") + '\u8ba9<span class="chatroom-message-user">' + soy.$$escapeHtml(a.user) + "</span>\u6210\u4e3a\u4e86\u623f\u95f4" + soy.$$escapeHtml(a.role) +
			"</div>" : '<div class="chat-msg chatroom-message-system">' + ("host" == a.operatorRole ? '<div class="chat-hd-host"></div><span class="chatroom-message-host">' + soy.$$escapeHtml(a.operator) + "</span>" : '<div class="chat-hd-manager"></div><span class="chatroom-message-user">' + soy.$$escapeHtml(a.operator) + "</span>") + '\u53d6\u6d88\u4e86<span class="chatroom-message-user">' + soy.$$escapeHtml(a.user) + "</span>\u7684\u623f\u95f4" + soy.$$escapeHtml(a.role) + "</div>"
	};
	qun.star.template.chatroom.businessMessage = function(a) {
		return '<div class="chat-msg chatroom-message-system"><div class="chatroom-business-icon"></div>' + soy.$$escapeHtml(a.text) + (a.link ? '<a class="chatroom-business-link" href="' + soy.$$escapeHtml(a.link) + '" target="_blank">\u67e5\u770b\u8be6\u60c5>></a>' : "") + "</div>"
	};
	qun.star.template.chatroom.roomUpgradeMessageA = function(a) {
		return '<div class="chat-msg chatroom-message-system">\u606d\u559c\uff01\u5f53\u524d\u4e3b\u64ad<div class="chat-hd-redhost"></div><span class="chatroom-message-roomUpgrade chatroom-roomUpgrade-host">' + soy.$$escapeHtml(a.host) + '</span> \u5df2\u5347\u7ea7\u5230<i class="grade-icon grade-sub-' + soy.$$escapeHtml(a.grade) + '"></i><a class="chatroom-message-roomUpgrade" href="http://bbs.tga.plu.cn/thread-290003-1-1.html" target="_blank">' + soy.$$escapeHtml(a.gradename) +
			"</a></div>"
	};
	qun.star.template.chatroom.roomUpgradeMessageB = function(a) {
		return '<div class="chat-msg chatroom-message-system">\u54c7\uff01\u77e5\u540d\u4e3b\u64ad<div class="chat-hd-redhost"></div><a class="chatroom-message-roomUpgrade chatroom-roomUpgrade-host" href="http://star.tga.plu.cn/' + soy.$$escapeHtml(a.domain) + '" target="_blank">' + soy.$$escapeHtml(a.host) + '</a> \u5df2\u5347\u7ea7\u5230<i class="grade-icon grade-sub-' + soy.$$escapeHtml(a.grade) + '"></i><a class="chatroom-message-roomUpgrade" href="http://bbs.tga.plu.cn/thread-290003-1-1.html" target="_blank">' + soy.$$escapeHtml(a.gradename) +
			"</a>\uff0c\u771f\u662f\u592a\u5389\u5bb3\u5566\uff01</div>"
	};
	qun.star.template.chatroom.roomUpgradeMessageC = function(a) {
		return '<div class="chat-msg chatroom-message-system">\u795e\u4e00\u6837\u7684\u5b58\u5728\uff01' + soy.$$escapeHtml(a.game) + '\u7684\u4e3b\u64ad<div class="chat-hd-redhost"></div><a class="chatroom-message-roomUpgrade chatroom-roomUpgrade-host" href="http://star.tga.plu.cn/' + soy.$$escapeHtml(a.domain) + '" target="_blank">' + soy.$$escapeHtml(a.host) + '</a>\u5c45\u7136\u5df2\u5347\u7ea7\u5230<i class="grade-icon grade-sub-' + soy.$$escapeHtml(a.grade) +
			'"></i><a class="chatroom-message-roomUpgrade" href="http://bbs.tga.plu.cn/thread-290003-1-1.html" target="_blank">' + soy.$$escapeHtml(a.gradename) + "</a>\uff0c\u5feb\u6765\u4e00\u7779\u738b\u8005\u98ce\u91c7\uff01</div>"
	};
	qun.star.template.chatroom.fansMedalupgradeMessage = function(a) {
		return '<div class="chat-msg chatroom-message-system"><div class="upgrade-time">' + soy.$$escapeHtml(a.time) + '</div>\u54c7\uff01<div class="upgrade-name">' + soy.$$escapeHtml(a.nickname) + '</div>\u5df2\u7ecf\u5347\u7ea7\u5230<div class="fans-medal fans-medal-' + soy.$$escapeHtml(a.medalLevel) + '"><i class="fans-medal-icon"></i>\u3010' + soy.$$escapeHtml(a.medalName) + "\u3011</div></div>"
	};
	qun.star.template.chatroom.chatTab = function(a) {
		return '<a class="schedule-tab" href="#" hidefocus="true" id="' + soy.$$escapeHtml(a.id) + '" ' + (a.width ? ' style="width: ' + soy.$$escapeHtml(a.width) + ';"' : "") + " onclick=\"handle('onClick', 'chat-tab-ui', this);return false\">" + soy.$$escapeHtml(a.titleName) + '<i class="schedule-tab-line" ' + (a.width ? ' style="width: ' + soy.$$escapeHtml(a.width) + ';"' : "") + "></i></a>"
	};
	qun.star.template.chatroom.guessMessage = function(a) {
		return '<div class="chat-msg chatroom-message-system"><div class="chatroom-business-icon"></div>\u7ade\u731c\u83b7\u80dc\uff01\u4f60\u5728<a class="chatroom-guess-roomName" href="' + soy.$$escapeHtml(a.roomUrl) + '" target="_blank">' + soy.$$escapeHtml(a.roomName) + '</a>\u623f\u95f4\u7684\u7ade\u731c\uff1a<span class="chatroom-guess-title">' + soy.$$escapeHtml(a.guessTitle) + '</span>\u4e2d\u8d62\u5f97\u4e86<span class="chatroom-guess-count">' + soy.$$escapeHtml(a.longDou) +
			'</span>\u9f99\u8c46<a class="chatroom-guess-link" href="' + soy.$$escapeHtml(a.guessUrl) + '" target="_blank">\u67e5\u770b\u8be6\u60c5>></a></div>'
	};
	qun.star.template.chatroom.fansMedalHoverCard = function(a) {
		return '<div class="fans-medal-hover" id="fans-medal-hover"><span id="fans-medal-hover-name"></span><i class="fans-medal-hover-icon"></i><i class="fans-medal-hover-icon-inner"></i></div>'
	};
	qun.star.ui = {};
	qun.star.ui.ChatTabUi = {};
	(function() {
		function a(a) {
			a = a.id;
			k != a && (h[a].needInit && (c.post("content-init", "chat-tab-ui", h[a].contentId, !0), h[a].needInit = !1), f("#" + h[k].id).removeClass("schedule-tab-selected"), f("#" + h[a].id).addClass("schedule-tab-selected"), f("#" + h[k].contentId).hide(), f("#" + h[a].contentId).show(), k = a, c.post("content-action", "chat-tab-ui", a), "chatroom-tab-ch" == a ? (b().show(), p && c.post("actionOpenMbStream", "io-messagebus", null, !0)) : (b().hide(), p && c.post("actionCloseMbStream", "io-messagebus", null, !0)))
		}

		function b() {
			r ||
				(r = f("#chatroom-editor"));
			return r
		}
		var c = plu.messages,
			e = qun.star.template.chatroom,
			f = jQuery,
			h = {},
			k = "chatroom-tab-ch",
			m = 0,
			p = roomType && 4 != roomType ? !1 : !0,
			r, t;
		h["chatroom-tab-ch"] = {
			id: "chatroom-tab-ch",
			contentId: "chatroom-page"
		};
		h["chatroom-tab-wr"] = {
			id: "chatroom-tab-wr",
			contentId: "week-rank"
		};
		t || (t = f(".schedule-tab"));
		m = t.length;
		c.receive("add", "tab-model", function(b) {
			var c = b.id;
			if (!h[c]) {
				h[c] = b;
				var c = f(e.chatTab(b)),
					k = b.index;
				!k || 0 > k || k > m ? c.insertAfter(t[m - 1]) : c.insertBefore(t[k - 1]);
				t = f(".schedule-tab");
				m++;
				b.isShow && a({
					id: b.id
				})
			}
		}).receive("onClick", "chat-tab-ui", a)
	})();
	qun.star.model = {};
	plu.model = {};
	qun.star.model.Game = {};
	(function() {
		plu.model.Game = function(a) {
			a = a || {};
			this.id = a.id;
			this.name = a.name;
			this.shortName = a.shortName
		}
	})();
	qun.star.model.Games = {};
	(function() {
		var a = plu.model.Game,
			b = {
				3: ["\u661f\u9645\u4e89\u97382", "sc2"],
				4: ["\u82f1\u96c4\u8054\u76df", "lol"],
				5: ["\u5730\u4e0b\u57ce\u4e0e\u52c7\u58eb", "dnf"],
				6: ["\u661f\u9645\u4e89\u9738", "sc"],
				7: ["\u7a7f\u8d8a\u706b\u7ebf", "cf"],
				8: ["Dota", "dota"],
				9: ["QQ\u98de\u8f66", "speed"],
				10: ["QQ\u70ab\u821e", "x5"],
				11: ["\u70ab\u6597\u4e4b\u738b", "xd"],
				12: ["\u5176\u4ed6"],
				14: ["\u9006\u6218", "nz"],
				15: ["\u5251\u7075", "bns"],
				16: ["\u67aa\u795e\u7eaa", "tps"],
				17: ["TNT", "tnt"],
				18: ["\u82f1\u96c4\u6740", "yxs"],
				19: ["NBA2KOL",
					"nba2k"
				],
				20: ["\u5bfb\u4ed9", "xx"],
				21: ["\u5200\u52512", "d2"],
				22: ["\u751f\u5316\u6218\u573a", "woz"],
				23: ["\u8282\u594f\u5927\u5e08", "da"],
				24: ["\u91cd\u706b\u529b"],
				25: ["\u6218\u4e89\u524d\u7ebf", "wf"],
				26: ["\u70c8\u7130\u884c\u52a8", "btr"],
				28: ["\u9738\u4e09\u56fdOL"],
				29: ["\u7089\u77f3\u4f20\u8bf4", "hs"],
				30: ["Dota2"],
				31: ["\u6597\u6218\u795e", "dzs"],
				32: ["\u795e\u4e4b\u6d69\u52ab", "smite"],
				33: ["FIFA Online3", "eafifa"],
				34: ["\u5168\u6c11\u82f1\u96c4"],
				35: ["\u4f17\u795e\u4e89\u9738", "shen"],
				36: ["\u81ea\u7531\u8db3\u7403",
					"fsf"
				],
				37: ["\u8857\u5934\u7bee\u7403", "fs"],
				38: ["\u5929\u5929\u9177\u8dd1", "pao"],
				39: ["\u5929\u5929\u98de\u8f66", "ttfc"],
				40: ["\u5929\u5929\u7231\u6d88\u9664", "peng"],
				41: ["\u5168\u6c11\u98de\u673a\u5927\u6218", "feiji"],
				42: ["\u8d85\u795e\u82f1\u96c4", "hon"],
				43: ["\u602a\u7269\u730e\u4ebaOL", "mho"],
				44: ["\u65b0\u5bfb\u4ed9", "xx"],
				45: ["\u4f7f\u547d\u53ec\u5524OL", "codol"],
				46: ["\u75be\u98ce\u4e4b\u5203", "jf"],
				47: ["\u70ab\u821e\u65f6\u4ee3", "xuanwu"],
				48: ["\u62f3\u7687", "quanhuang"],
				49: ["\u5929\u6daf\u660e\u6708\u5200",
					"wuxia"
				],
				50: ["\u738b\u724c\u5bf9\u51b3", "wangpai"],
				51: ["\u5200\u950b\u94c1\u9a91", "daofeng"],
				52: ["\u5fa1\u9f99\u5728\u5929", "yl"],
				53: ["QQ\u6e38\u620f", "qqgame"],
				54: ["War3", "war3"],
				55: ["\u9b54\u517d\u4e16\u754c", "wow"],
				56: ["\u9b54\u517d\u771f\u4e09", "war3zhensa"],
				57: ["\u9b54\u517dRPG", "war3rpg"],
				58: ["\u82f1\u9b42\u4e4b\u5203", "cos"],
				59: ["\u96f7\u9706\u6218\u673a", "sylt"],
				60: ["\u6697\u9ed1\u7834\u574f\u795e3", "diablo3"],
				61: ["\u5929\u5929\u70ab\u6597", "ttxd"],
				62: ["\u7cd6\u679c\u4f20\u5947", "ccs"],
				63: ["\u62f3\u7687-QQ\u6e38\u620f\u8857\u673a\u5e73\u53f0",
					"kof"
				],
				64: ["\u4f20\u5947", "mir"],
				65: ["\u6218\u4e89\u96f7\u9706", "zzlt"],
				66: ["\u6218\u5730\u4e4b\u738b", "ava"],
				67: ["\u98ce\u66b4\u82f1\u96c4"],
				68: ["\u5929\u5929\u98ce\u4e4b\u65c5", "fenglv"],
				69: ["\u5929\u5929\u5fb7\u5dde"],
				70: ["\u5929\u5929\u6765\u6218"],
				71: ["\u5929\u5929\u6765\u5854\u9632"],
				72: ["\u4e03\u96c4\u4e89\u9738"],
				73: ["\u5929\u5929\u5bcc\u7fc1"],
				74: ["\u5168\u6c11\u6c34\u6d52"],
				75: ["\u6b22\u4e50\u9ebb\u5c06\u5168\u96c6"],
				76: ["\u5168\u6c11\u5207\u6c34\u679c"],
				77: ["\u57ce\u5821\u4e89\u9738"],
				78: ["\u5168\u6c11\u7cbe\u7075"],
				79: ["\u6211\u53ebMT2"],
				80: ["\u4ed9\u5251\u5947\u4fa0\u4f20"],
				81: ["\u5929\u5929\u661f\u8054\u840c"],
				82: ["TGA\u5927\u5956\u8d5b"],
				83: ["\u5176\u4ed6\u624b\u6e38", "qtsy"],
				84: ["\u82f1\u9b42\u4e4b\u5203"],
				85: ["\u7efc\u5408\u8d5b\u4e8b", "zhsaishi"],
				86: ["\u517d\u4eba\u5fc5\u987b\u6b7b", "omd"],
				87: ["\u5176\u4ed6\u5355\u673a"],
				88: ["\u624b\u6e38", "mgames"],
				89: ["\u5176\u4ed6\u6e38\u620f", "qtyx"],
				90: ["\u4e3b\u673a\u6e38\u620f", "console"],
				91: ["\u5355\u673a&\u4e3b\u673a", "pcconsole"],
				92: ["\u5355\u673a\u6e38\u620f", "pcgames"],
				93: ["\u5168\u6c11\u7a81\u51fb", "qmtj"],
				94: ["\u8f69\u8f95\u4f20\u59472", "xycq2"],
				95: ["\u98ce\u66b4\u82f1\u96c4", "heroes"],
				96: ["\u66b4\u96ea\u6e38\u620f", "blizzard"],
				97: ["Minecraft", "minecraft"]
			};
		plu.model.Games = {
			getGame: function(c) {
				var e = b[c];
				return e ? new a({
					id: c,
					name: e[0],
					shortName: e[1]
				}) : null
			}
		}
	})();
	qun.star.model.RoomInfo = {};
	(function() {
		plu.model.RoomInfo = function(a) {
			this.game = (a || {}).game
		}
	})();
	qun.star.async = {};
	plu.async = {};
	(function(a, b) {
		a.timer = function(c, e) {
			var f = {},
				h = e ? duration(e) : null,
				k;
			k = a.setTimeout(c, h && h.inMilliseconds() || 0);
			f.cancel = function() {
				k && (a.clearTimeout(k), k = b)
			};
			f.isActive = function() {
				return !!k
			};
			return f
		};
		a.timer.periodic = function(c, e) {
			var f = {},
				h = duration(e),
				k;
			c();
			k = a.setInterval(c, h.inMilliseconds());
			f.cancel = function() {
				k && (a.clearInterval(k), k = b)
			};
			f.isActive = function() {
				return !!k
			};
			return f
		}
	})(window);
	(function(a, b, c) {
		function e(a) {
			a = a || f();
			return {
				listen: a.listen,
				first: a.first,
				last: a.last,
				length: a.length,
				where: a.where,
				transform: a.transform,
				skip: a.skip
			}
		}

		function f() {
			function a(b, c, h) {
				e.add(b);
				c && f.add(c);
				h && r.add(h)
			}
			var c = {},
				e = b.Callbacks(),
				f = b.Callbacks(),
				r = b.Callbacks(),
				t = b.Deferred(),
				A = b.Deferred(),
				H = b.Deferred(),
				s = 0,
				G, w;
			c.add = function(a) {
				w || (e.fire(a), 0 == s && t.resolve(a), s++, G = a)
			};
			c.addError = function(a) {
				w || (0 == s && t.reject(a), f.fire(a))
			};
			c.close = function() {
				w = !0;
				r.fire();
				H.resolve(s);
				0 === s && (t.reject(Error("stream is empty.")),
					A.reject(Error("stream is empty")));
				G ? A.resolve(G) : A.reject(Error("stream is empty"))
			};
			c.listen = a;
			c.where = function(b) {
				var c = streamcontroller();
				a(function(a) {
					b(a) && c.add(a)
				});
				return c.stream
			};
			c.transform = function(b) {
				var c = streamcontroller();
				a(function(a) {
					b(a, {
						add: c.add,
						close: c.close
					})
				});
				return c.stream
			};
			c.skip = function(b) {
				var c = streamcontroller(),
					e = 0;
				a(function(a) {
					e >= b && c.add(a);
					e++
				});
				return c.stream
			};
			c.first = t.promise();
			c.last = A.promise();
			c.length = H.promise();
			return c
		}
		a.stream = function() {
			return e()
		};
		a.streamcontroller = function() {
			var a = f();
			return {
				stream: e(a),
				add: a.add,
				addError: a.addError,
				close: a.close
			}
		}
	})(window, jQuery);
	(function() {
		function a() {
			this._callbacks = []
		}

		function b(a) {
			this._future = a
		}

		function c() {
			this.future = new a
		}
		var e = plu.array;
		a.wait = function() {
			var c = new a,
				h = arguments.length,
				k = 0,
				m = [];
			e.forEach(arguments, function(a, e) {
				a.then(function(a) {
					k++;
					m[e] = a;
					k == h && (m.push(new b(c)), c._setValue(m))
				}).catchError(function(a) {
					completer.completeError(a)
				})
			});
			return c
		};
		a.prototype._state = 0;
		a.prototype._result;
		a.prototype._isComplete = function() {
			return 4 <= this._state
		};
		a.prototype._hasValue = function() {
			return 4 == this._state
		};
		a.prototype._hasError = function() {
			return 8 == this._state
		};
		a.prototype.then = function(c, e) {
			var k = new a;
			c = plu.bind(c, e || this);
			this._addCallback(function(a, e) {
				if (8 == a) k._setError(e);
				else {
					var h = c(e, new b(k));
					8 != k._state && (h && h.then && h.catchError ? h.then(function(a) {
						k._setValue(a)
					}).catchError(function(a) {
						k._setError(a)
					}) : k._setValue(h || e))
				}
			});
			return k
		};
		a.prototype.catchError = function(c, e) {
			var k = new a;
			c = plu.bind(c, e || this);
			this._addCallback(function(a, e) {
				if (4 == a) k._setValue(e);
				else {
					var h = c(e, new b(k));
					8 !=
						k._state && void 0 !== h && (h.then && h.catchError ? h.then(function(a) {
							k._setValue(a)
						}).catchError(function(a) {
							k._setError(a)
						}) : k._setValue(h))
				}
			});
			return k
		};
		a.prototype._addCallback = function(a) {
			var b = this._state,
				c = this._result;
			4 == b ? a(4, c) : 8 == b ? calllback(8, c) : this._callbacks.push(a)
		};
		a.prototype._setResult = function(a, b) {
			if (this._isComplete()) throw Error("The future is complete.");
			for (var c = this._callbacks, e = c.length, p = 0; p < e; p++) c[p](a, b);
			this._state = a;
			this._result = b;
			this._callbacks = null
		};
		a.prototype._setValue =
			function(a) {
				this._setResult(4, a)
			};
		a.prototype._setError = function(a) {
			this._setResult(8, a)
		};
		b.prototype.setError = function(a) {
			this._future._setError(a)
		};
		c.prototype.complete = function(a) {
			this.future._setValue(a)
		};
		c.prototype.completeError = function(a) {
			this.future._setError(a)
		};
		plu.async.Completer = c;
		plu.async.Future = a
	})();
	qun.star.uri = {};
	(function(a, b) {
		"object" === typeof exports ? module.exports = b(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" === typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], b) : a.URI = b(a.punycode, a.IPv6, a.SecondLevelDomains, a)
	})(this, function(a, b, c, e) {
		function f(a, b) {
			if (!(this instanceof f)) return new f(a, b);
			void 0 === a && (a = "undefined" !== typeof location ? location.href + "" : "");
			this.href(a);
			return void 0 !== b ? this.absoluteTo(b) : this
		}

		function h(a) {
			return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
		}

		function k(a) {
			return void 0 === a ? "Undefined" : String(Object.prototype.toString.call(a)).slice(8, -1)
		}

		function m(a) {
			return "Array" === k(a)
		}

		function p(a, b) {
			var c, e;
			if (m(b)) {
				c = 0;
				for (e = b.length; c < e; c++)
					if (!p(a, b[c])) return !1;
				return !0
			}
			var f = k(b);
			c = 0;
			for (e = a.length; c < e; c++)
				if ("RegExp" === f) {
					if ("string" === typeof a[c] && a[c].match(b)) return !0
				} else if (a[c] === b) return !0;
			return !1
		}

		function r(a, b) {
			if (!m(a) || !m(b) || a.length !== b.length) return !1;
			a.sort();
			b.sort();
			for (var c = 0, e = a.length; c < e; c++)
				if (a[c] !== b[c]) return !1;
			return !0
		}

		function t(a) {
			return escape(a)
		}

		function A(a) {
			return encodeURIComponent(a).replace(/[!'()*]/g, t).replace(/\*/g, "%2A")
		}
		var H = e && e.URI;
		f.version = "1.13.1";
		var s = f.prototype,
			G = Object.prototype.hasOwnProperty;
		f._parts = function() {
			return {
				protocol: null,
				username: null,
				password: null,
				hostname: null,
				urn: null,
				port: null,
				path: null,
				query: null,
				fragment: null,
				duplicateQueryParameters: f.duplicateQueryParameters,
				escapeQuerySpace: f.escapeQuerySpace
			}
		};
		f.duplicateQueryParameters = !1;
		f.escapeQuerySpace = !0;
		f.protocol_expression =
			/^[a-z][a-z0-9.+-]*$/i;
		f.idn_expression = /[^a-z0-9\.-]/i;
		f.punycode_expression = /(xn--)/i;
		f.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
		f.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
		f.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;
		f.findUri = {
			start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
			end: /[\s\r\n]|$/,
			trim: /[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/
		};
		f.defaultPorts = {
			http: "80",
			https: "443",
			ftp: "21",
			gopher: "70",
			ws: "80",
			wss: "443"
		};
		f.invalid_hostname_characters =
			/[^a-zA-Z0-9\.-]/;
		f.domAttributes = {
			a: "href",
			blockquote: "cite",
			link: "href",
			base: "href",
			script: "src",
			form: "action",
			img: "src",
			area: "href",
			iframe: "src",
			embed: "src",
			source: "src",
			track: "src",
			input: "src"
		};
		f.getDomAttribute = function(a) {
			if (a && a.nodeName) {
				var b = a.nodeName.toLowerCase();
				return "input" === b && "image" !== a.type ? void 0 : f.domAttributes[b]
			}
		};
		f.encode = A;
		f.decode = decodeURIComponent;
		f.iso8859 = function() {
			f.encode = escape;
			f.decode = unescape
		};
		f.unicode = function() {
			f.encode = A;
			f.decode = decodeURIComponent
		};
		f.characters = {
			pathname: {
				encode: {
					expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
					map: {
						"%24": "$",
						"%26": "&",
						"%2B": "+",
						"%2C": ",",
						"%3B": ";",
						"%3D": "=",
						"%3A": ":",
						"%40": "@"
					}
				},
				decode: {
					expression: /[\/\?#]/g,
					map: {
						"/": "%2F",
						"?": "%3F",
						"#": "%23"
					}
				}
			},
			reserved: {
				encode: {
					expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
					map: {
						"%3A": ":",
						"%2F": "/",
						"%3F": "?",
						"%23": "#",
						"%5B": "[",
						"%5D": "]",
						"%40": "@",
						"%21": "!",
						"%24": "$",
						"%26": "&",
						"%27": "'",
						"%28": "(",
						"%29": ")",
						"%2A": "*",
						"%2B": "+",
						"%2C": ",",
						"%3B": ";",
						"%3D": "="
					}
				}
			}
		};
		f.encodeQuery =
			function(a, b) {
				var c = f.encode(a + "");
				void 0 === b && (b = f.escapeQuerySpace);
				return b ? c.replace(/%20/g, "+") : c
			};
		f.decodeQuery = function(a, b) {
			a += "";
			void 0 === b && (b = f.escapeQuerySpace);
			try {
				return f.decode(b ? a.replace(/\+/g, "%20") : a)
			} catch (c) {
				return a
			}
		};
		f.recodePath = function(a) {
			a = (a + "").split("/");
			for (var b = 0, c = a.length; b < c; b++) a[b] = f.encodePathSegment(f.decode(a[b]));
			return a.join("/")
		};
		f.decodePath = function(a) {
			a = (a + "").split("/");
			for (var b = 0, c = a.length; b < c; b++) a[b] = f.decodePathSegment(a[b]);
			return a.join("/")
		};
		var w = {
				encode: "encode",
				decode: "decode"
			},
			D, v = function(a, b) {
				return function(c) {
					return f[b](c + "").replace(f.characters[a][b].expression, function(c) {
						return f.characters[a][b].map[c]
					})
				}
			};
		for (D in w) f[D + "PathSegment"] = v("pathname", w[D]);
		f.encodeReserved = v("reserved", "encode");
		f.parse = function(a, b) {
			var c;
			b || (b = {});
			c = a.indexOf("#"); - 1 < c && (b.fragment = a.substring(c + 1) || null, a = a.substring(0, c));
			c = a.indexOf("?"); - 1 < c && (b.query = a.substring(c + 1) || null, a = a.substring(0, c));
			"//" === a.substring(0, 2) ? (b.protocol = null,
				a = a.substring(2), a = f.parseAuthority(a, b)) : (c = a.indexOf(":"), -1 < c && (b.protocol = a.substring(0, c) || null, b.protocol && !b.protocol.match(f.protocol_expression) ? b.protocol = void 0 : "file" === b.protocol ? a = a.substring(c + 3) : "//" === a.substring(c + 1, c + 3) ? (a = a.substring(c + 3), a = f.parseAuthority(a, b)) : (a = a.substring(c + 1), b.urn = !0)));
			b.path = a;
			return b
		};
		f.parseHost = function(a, b) {
			var c = a.indexOf("/"),
				e; - 1 === c && (c = a.length);
			"[" === a.charAt(0) ? (e = a.indexOf("]"), b.hostname = a.substring(1, e) || null, b.port = a.substring(e + 2, c) ||
				null, "/" === b.port && (b.port = null)) : a.indexOf(":") !== a.lastIndexOf(":") ? (b.hostname = a.substring(0, c) || null, b.port = null) : (e = a.substring(0, c).split(":"), b.hostname = e[0] || null, b.port = e[1] || null);
			b.hostname && "/" !== a.substring(c).charAt(0) && (c++, a = "/" + a);
			return a.substring(c) || "/"
		};
		f.parseAuthority = function(a, b) {
			a = f.parseUserinfo(a, b);
			return f.parseHost(a, b)
		};
		f.parseUserinfo = function(a, b) {
			var c = a.indexOf("/"),
				e = -1 < c ? a.lastIndexOf("@", c) : a.indexOf("@"); - 1 < e && (-1 === c || e < c) ? (c = a.substring(0, e).split(":"), b.username =
				c[0] ? f.decode(c[0]) : null, c.shift(), b.password = c[0] ? f.decode(c.join(":")) : null, a = a.substring(e + 1)) : (b.username = null, b.password = null);
			return a
		};
		f.parseQuery = function(a, b) {
			if (!a) return {};
			a = a.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, "");
			if (!a) return {};
			for (var c = {}, e = a.split("&"), h = e.length, k, m, p = 0; p < h; p++) k = e[p].split("="), m = f.decodeQuery(k.shift(), b), k = k.length ? f.decodeQuery(k.join("="), b) : null, c[m] ? ("string" === typeof c[m] && (c[m] = [c[m]]), c[m].push(k)) : c[m] = k;
			return c
		};
		f.build = function(a) {
			var b = "";
			a.protocol &&
				(b += a.protocol + ":");
			a.urn || !b && !a.hostname || (b += "//");
			b += f.buildAuthority(a) || "";
			"string" === typeof a.path && ("/" !== a.path.charAt(0) && "string" === typeof a.hostname && (b += "/"), b += a.path);
			"string" === typeof a.query && a.query && (b += "?" + a.query);
			"string" === typeof a.fragment && a.fragment && (b += "#" + a.fragment);
			return b
		};
		f.buildHost = function(a) {
			var b = "";
			if (a.hostname) b = f.ip6_expression.test(a.hostname) ? b + ("[" + a.hostname + "]") : b + a.hostname;
			else return "";
			a.port && (b += ":" + a.port);
			return b
		};
		f.buildAuthority = function(a) {
			return f.buildUserinfo(a) +
				f.buildHost(a)
		};
		f.buildUserinfo = function(a) {
			var b = "";
			a.username && (b += f.encode(a.username), a.password && (b += ":" + f.encode(a.password)), b += "@");
			return b
		};
		f.buildQuery = function(a, b, c) {
			var e = "",
				h, k, p, s;
			for (k in a)
				if (G.call(a, k) && k)
					if (m(a[k]))
						for (h = {}, p = 0, s = a[k].length; p < s; p++) void 0 !== a[k][p] && void 0 === h[a[k][p] + ""] && (e += "&" + f.buildQueryParameter(k, a[k][p], c), !0 !== b && (h[a[k][p] + ""] = !0));
					else void 0 !== a[k] && (e += "&" + f.buildQueryParameter(k, a[k], c));
			return e.substring(1)
		};
		f.buildQueryParameter = function(a,
			b, c) {
			return f.encodeQuery(a, c) + (null !== b ? "=" + f.encodeQuery(b, c) : "")
		};
		f.addQuery = function(a, b, c) {
			if ("object" === typeof b)
				for (var e in b) G.call(b, e) && f.addQuery(a, e, b[e]);
			else if ("string" === typeof b) void 0 === a[b] ? a[b] = c : ("string" === typeof a[b] && (a[b] = [a[b]]), m(c) || (c = [c]), a[b] = a[b].concat(c));
			else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
		};
		f.removeQuery = function(a, b, c) {
			var e;
			if (m(b))
				for (c = 0, e = b.length; c < e; c++) a[b[c]] = void 0;
			else if ("object" === typeof b)
				for (e in b) G.call(b,
					e) && f.removeQuery(a, e, b[e]);
			else if ("string" === typeof b)
				if (void 0 !== c)
					if (a[b] === c) a[b] = void 0;
					else {
						if (m(a[b])) {
							e = a[b];
							var h = {},
								k, p;
							if (m(c))
								for (k = 0, p = c.length; k < p; k++) h[c[k]] = !0;
							else h[c] = !0;
							k = 0;
							for (p = e.length; k < p; k++) void 0 !== h[e[k]] && (e.splice(k, 1), p--, k--);
							a[b] = e
						}
					} else a[b] = void 0;
			else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
		};
		f.hasQuery = function(a, b, c, e) {
			if ("object" === typeof b) {
				for (var h in b)
					if (G.call(b, h) && !f.hasQuery(a, h, b[h])) return !1;
				return !0
			}
			if ("string" !==
				typeof b) throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
			switch (k(c)) {
				case "Undefined":
					return b in a;
				case "Boolean":
					return a = Boolean(m(a[b]) ? a[b].length : a[b]), c === a;
				case "Function":
					return !!c(a[b], b, a);
				case "Array":
					return m(a[b]) ? (e ? p : r)(a[b], c) : !1;
				case "RegExp":
					return m(a[b]) ? e ? p(a[b], c) : !1 : Boolean(a[b] && a[b].match(c));
				case "Number":
					c = String(c);
				case "String":
					return m(a[b]) ? e ? p(a[b], c) : !1 : a[b] === c;
				default:
					throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");
			}
		};
		f.commonPath = function(a, b) {
			var c = Math.min(a.length, b.length),
				e;
			for (e = 0; e < c; e++)
				if (a.charAt(e) !== b.charAt(e)) {
					e--;
					break
				}
			if (1 > e) return a.charAt(0) === b.charAt(0) && "/" === a.charAt(0) ? "/" : "";
			if ("/" !== a.charAt(e) || "/" !== b.charAt(e)) e = a.substring(0, e).lastIndexOf("/");
			return a.substring(0, e + 1)
		};
		f.withinString = function(a, b, c) {
			c || (c = {});
			var e = c.start || f.findUri.start,
				h = c.end || f.findUri.end,
				k = c.trim || f.findUri.trim,
				m = /[a-z0-9-]=["']?$/i;
			for (e.lastIndex = 0;;) {
				var p = e.exec(a);
				if (!p) break;
				p = p.index;
				if (c.ignoreHtml) {
					var s =
						a.slice(Math.max(p - 3, 0), p);
					if (s && m.test(s)) continue
				}
				var s = p + a.slice(p).search(h),
					r = a.slice(p, s).replace(k, "");
				c.ignore && c.ignore.test(r) || (s = p + r.length, r = b(r, p, s, a), a = a.slice(0, p) + r + a.slice(s), e.lastIndex = p + r.length)
			}
			e.lastIndex = 0;
			return a
		};
		f.ensureValidHostname = function(b) {
			if (b.match(f.invalid_hostname_characters)) {
				if (!a) throw new TypeError('Hostname "' + b + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
				if (a.toASCII(b).match(f.invalid_hostname_characters)) throw new TypeError('Hostname "' +
					b + '" contains characters other than [A-Z0-9.-]');
			}
		};
		f.noConflict = function(a) {
			if (a) return a = {
				URI: this.noConflict()
			}, e.URITemplate && "function" === typeof e.URITemplate.noConflict && (a.URITemplate = e.URITemplate.noConflict()), e.IPv6 && "function" === typeof e.IPv6.noConflict && (a.IPv6 = e.IPv6.noConflict()), e.SecondLevelDomains && "function" === typeof e.SecondLevelDomains.noConflict && (a.SecondLevelDomains = e.SecondLevelDomains.noConflict()), a;
			e.URI === this && (e.URI = H);
			return this
		};
		s.build = function(a) {
			if (!0 === a) this._deferred_build = !0;
			else if (void 0 === a || this._deferred_build) this._string = f.build(this._parts), this._deferred_build = !1;
			return this
		};
		s.clone = function() {
			return new f(this)
		};
		s.valueOf = s.toString = function() {
			return this.build(!1)._string
		};
		w = {
			protocol: "protocol",
			username: "username",
			password: "password",
			hostname: "hostname",
			port: "port"
		};
		v = function(a) {
			return function(b, c) {
				if (void 0 === b) return this._parts[a] || "";
				this._parts[a] = b || null;
				this.build(!c);
				return this
			}
		};
		for (D in w) s[D] = v(w[D]);
		w = {
			query: "?",
			fragment: "#"
		};
		v = function(a,
			b) {
			return function(c, e) {
				if (void 0 === c) return this._parts[a] || "";
				null !== c && (c += "", c.charAt(0) === b && (c = c.substring(1)));
				this._parts[a] = c;
				this.build(!e);
				return this
			}
		};
		for (D in w) s[D] = v(D, w[D]);
		w = {
			search: ["?", "query"],
			hash: ["#", "fragment"]
		};
		v = function(a, b) {
			return function(c, e) {
				var f = this[a](c, e);
				return "string" === typeof f && f.length ? b + f : f
			}
		};
		for (D in w) s[D] = v(w[D][1], w[D][0]);
		s.pathname = function(a, b) {
			if (void 0 === a || !0 === a) {
				var c = this._parts.path || (this._parts.hostname ? "/" : "");
				return a ? f.decodePath(c) : c
			}
			this._parts.path =
				a ? f.recodePath(a) : "/";
			this.build(!b);
			return this
		};
		s.path = s.pathname;
		s.href = function(a, b) {
			var c;
			if (void 0 === a) return this.toString();
			this._string = "";
			this._parts = f._parts();
			var e = a instanceof f,
				h = "object" === typeof a && (a.hostname || a.path || a.pathname);
			a.nodeName && (h = f.getDomAttribute(a), a = a[h] || "", h = !1);
			!e && h && void 0 !== a.pathname && (a = a.toString());
			if ("string" === typeof a) this._parts = f.parse(a, this._parts);
			else if (e || h)
				for (c in e = e ? a._parts : a, e) G.call(this._parts, c) && (this._parts[c] = e[c]);
			else throw new TypeError("invalid input");
			this.build(!b);
			return this
		};
		s.is = function(a) {
			var b = !1,
				e = !1,
				h = !1,
				k = !1,
				m = !1,
				p = !1,
				s = !1,
				r = !this._parts.urn;
			this._parts.hostname && (r = !1, e = f.ip4_expression.test(this._parts.hostname), h = f.ip6_expression.test(this._parts.hostname), b = e || h, m = (k = !b) && c && c.has(this._parts.hostname), p = k && f.idn_expression.test(this._parts.hostname), s = k && f.punycode_expression.test(this._parts.hostname));
			switch (a.toLowerCase()) {
				case "relative":
					return r;
				case "absolute":
					return !r;
				case "domain":
				case "name":
					return k;
				case "sld":
					return m;
				case "ip":
					return b;
				case "ip4":
				case "ipv4":
				case "inet4":
					return e;
				case "ip6":
				case "ipv6":
				case "inet6":
					return h;
				case "idn":
					return p;
				case "url":
					return !this._parts.urn;
				case "urn":
					return !!this._parts.urn;
				case "punycode":
					return s
			}
			return null
		};
		var x = s.protocol,
			z = s.port,
			J = s.hostname;
		s.protocol = function(a, b) {
			if (void 0 !== a && a && (a = a.replace(/:(\/\/)?$/, ""), !a.match(f.protocol_expression))) throw new TypeError('Protocol "' + a + "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");
			return x.call(this,
				a, b)
		};
		s.scheme = s.protocol;
		s.port = function(a, b) {
			if (this._parts.urn) return void 0 === a ? "" : this;
			if (void 0 !== a && (0 === a && (a = null), a && (a += "", ":" === a.charAt(0) && (a = a.substring(1)), a.match(/[^0-9]/)))) throw new TypeError('Port "' + a + '" contains characters other than [0-9]');
			return z.call(this, a, b)
		};
		s.hostname = function(a, b) {
			if (this._parts.urn) return void 0 === a ? "" : this;
			if (void 0 !== a) {
				var c = {};
				f.parseHost(a, c);
				a = c.hostname
			}
			return J.call(this, a, b)
		};
		s.host = function(a, b) {
			if (this._parts.urn) return void 0 === a ? "" : this;
			if (void 0 === a) return this._parts.hostname ? f.buildHost(this._parts) : "";
			f.parseHost(a, this._parts);
			this.build(!b);
			return this
		};
		s.authority = function(a, b) {
			if (this._parts.urn) return void 0 === a ? "" : this;
			if (void 0 === a) return this._parts.hostname ? f.buildAuthority(this._parts) : "";
			f.parseAuthority(a, this._parts);
			this.build(!b);
			return this
		};
		s.userinfo = function(a, b) {
			if (this._parts.urn) return void 0 === a ? "" : this;
			if (void 0 === a) {
				if (!this._parts.username) return "";
				var c = f.buildUserinfo(this._parts);
				return c.substring(0,
					c.length - 1)
			}
			"@" !== a[a.length - 1] && (a += "@");
			f.parseUserinfo(a, this._parts);
			this.build(!b);
			return this
		};
		s.resource = function(a, b) {
			var c;
			if (void 0 === a) return this.path() + this.search() + this.hash();
			c = f.parse(a);
			this._parts.path = c.path;
			this._parts.query = c.query;
			this._parts.fragment = c.fragment;
			this.build(!b);
			return this
		};
		s.subdomain = function(a, b) {
			if (this._parts.urn) return void 0 === a ? "" : this;
			if (void 0 === a) {
				if (!this._parts.hostname || this.is("IP")) return "";
				var c = this._parts.hostname.length - this.domain().length -
					1;
				return this._parts.hostname.substring(0, c) || ""
			}
			c = this._parts.hostname.length - this.domain().length;
			c = this._parts.hostname.substring(0, c);
			c = RegExp("^" + h(c));
			a && "." !== a.charAt(a.length - 1) && (a += ".");
			a && f.ensureValidHostname(a);
			this._parts.hostname = this._parts.hostname.replace(c, a);
			this.build(!b);
			return this
		};
		s.domain = function(a, b) {
			if (this._parts.urn) return void 0 === a ? "" : this;
			"boolean" === typeof a && (b = a, a = void 0);
			if (void 0 === a) {
				if (!this._parts.hostname || this.is("IP")) return "";
				var c = this._parts.hostname.match(/\./g);
				if (c && 2 > c.length) return this._parts.hostname;
				c = this._parts.hostname.length - this.tld(b).length - 1;
				c = this._parts.hostname.lastIndexOf(".", c - 1) + 1;
				return this._parts.hostname.substring(c) || ""
			}
			if (!a) throw new TypeError("cannot set domain empty");
			f.ensureValidHostname(a);
			!this._parts.hostname || this.is("IP") ? this._parts.hostname = a : (c = RegExp(h(this.domain()) + "$"), this._parts.hostname = this._parts.hostname.replace(c, a));
			this.build(!b);
			return this
		};
		s.tld = function(a, b) {
			if (this._parts.urn) return void 0 === a ? "" :
				this;
			"boolean" === typeof a && (b = a, a = void 0);
			if (void 0 === a) {
				if (!this._parts.hostname || this.is("IP")) return "";
				var e = this._parts.hostname.lastIndexOf("."),
					e = this._parts.hostname.substring(e + 1);
				return !0 !== b && c && c.list[e.toLowerCase()] ? c.get(this._parts.hostname) || e : e
			}
			if (a)
				if (a.match(/[^a-zA-Z0-9-]/))
					if (c && c.is(a)) e = RegExp(h(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(e, a);
					else throw new TypeError('TLD "' + a + '" contains characters other than [A-Z0-9]');
			else {
				if (!this._parts.hostname ||
					this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host");
				e = RegExp(h(this.tld()) + "$");
				this._parts.hostname = this._parts.hostname.replace(e, a)
			} else throw new TypeError("cannot set TLD empty");
			this.build(!b);
			return this
		};
		s.directory = function(a, b) {
			if (this._parts.urn) return void 0 === a ? "" : this;
			if (void 0 === a || !0 === a) {
				if (!this._parts.path && !this._parts.hostname) return "";
				if ("/" === this._parts.path) return "/";
				var c = this._parts.path.length - this.filename().length - 1,
					c = this._parts.path.substring(0,
						c) || (this._parts.hostname ? "/" : "");
				return a ? f.decodePath(c) : c
			}
			c = this._parts.path.length - this.filename().length;
			c = this._parts.path.substring(0, c);
			c = RegExp("^" + h(c));
			this.is("relative") || (a || (a = "/"), "/" !== a.charAt(0) && (a = "/" + a));
			a && "/" !== a.charAt(a.length - 1) && (a += "/");
			a = f.recodePath(a);
			this._parts.path = this._parts.path.replace(c, a);
			this.build(!b);
			return this
		};
		s.filename = function(a, b) {
			if (this._parts.urn) return void 0 === a ? "" : this;
			if (void 0 === a || !0 === a) {
				if (!this._parts.path || "/" === this._parts.path) return "";
				var c = this._parts.path.lastIndexOf("/"),
					c = this._parts.path.substring(c + 1);
				return a ? f.decodePathSegment(c) : c
			}
			c = !1;
			"/" === a.charAt(0) && (a = a.substring(1));
			a.match(/\.?\//) && (c = !0);
			var e = RegExp(h(this.filename()) + "$");
			a = f.recodePath(a);
			this._parts.path = this._parts.path.replace(e, a);
			c ? this.normalizePath(b) : this.build(!b);
			return this
		};
		s.suffix = function(a, b) {
			if (this._parts.urn) return void 0 === a ? "" : this;
			if (void 0 === a || !0 === a) {
				if (!this._parts.path || "/" === this._parts.path) return "";
				var c = this.filename(),
					e = c.lastIndexOf(".");
				if (-1 === e) return "";
				c = c.substring(e + 1);
				c = /^[a-z0-9%]+$/i.test(c) ? c : "";
				return a ? f.decodePathSegment(c) : c
			}
			"." === a.charAt(0) && (a = a.substring(1));
			if (c = this.suffix()) e = a ? RegExp(h(c) + "$") : RegExp(h("." + c) + "$");
			else {
				if (!a) return this;
				this._parts.path += "." + f.recodePath(a)
			}
			e && (a = f.recodePath(a), this._parts.path = this._parts.path.replace(e, a));
			this.build(!b);
			return this
		};
		s.segment = function(a, b, c) {
			var e = this._parts.urn ? ":" : "/",
				f = this.path(),
				h = "/" === f.substring(0, 1),
				f = f.split(e);
			void 0 !== a && "number" !== typeof a &&
				(c = b, b = a, a = void 0);
			if (void 0 !== a && "number" !== typeof a) throw Error('Bad segment "' + a + '", must be 0-based integer');
			h && f.shift();
			0 > a && (a = Math.max(f.length + a, 0));
			if (void 0 === b) return void 0 === a ? f : f[a];
			if (null === a || void 0 === f[a])
				if (m(b)) {
					f = [];
					a = 0;
					for (var k = b.length; a < k; a++)
						if (b[a].length || f.length && f[f.length - 1].length) f.length && !f[f.length - 1].length && f.pop(), f.push(b[a])
				} else {
					if (b || "string" === typeof b) "" === f[f.length - 1] ? f[f.length - 1] = b : f.push(b)
				} else b || "string" === typeof b && b.length ? f[a] = b : f.splice(a,
				1);
			h && f.unshift("");
			return this.path(f.join(e), c)
		};
		s.segmentCoded = function(a, b, c) {
			var e, h;
			"number" !== typeof a && (c = b, b = a, a = void 0);
			if (void 0 === b) {
				a = this.segment(a, b, c);
				if (m(a))
					for (e = 0, h = a.length; e < h; e++) a[e] = f.decode(a[e]);
				else a = void 0 !== a ? f.decode(a) : void 0;
				return a
			}
			if (m(b))
				for (e = 0, h = b.length; e < h; e++) b[e] = f.decode(b[e]);
			else b = "string" === typeof b ? f.encode(b) : b;
			return this.segment(a, b, c)
		};
		var K = s.query;
		s.query = function(a, b) {
			if (!0 === a) return f.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
			if ("function" === typeof a) {
				var c = f.parseQuery(this._parts.query, this._parts.escapeQuerySpace),
					e = a.call(this, c);
				this._parts.query = f.buildQuery(e || c, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
				this.build(!b);
				return this
			}
			return void 0 !== a && "string" !== typeof a ? (this._parts.query = f.buildQuery(a, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!b), this) : K.call(this, a, b)
		};
		s.setQuery = function(a, b, c) {
			var e = f.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
			if ("object" === typeof a)
				for (var h in a) G.call(a, h) && (e[h] = a[h]);
			else if ("string" === typeof a) e[a] = void 0 !== b ? b : null;
			else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
			this._parts.query = f.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
			"string" !== typeof a && (c = b);
			this.build(!c);
			return this
		};
		s.addQuery = function(a, b, c) {
			var e = f.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
			f.addQuery(e, a, void 0 === b ? null : b);
			this._parts.query =
				f.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
			"string" !== typeof a && (c = b);
			this.build(!c);
			return this
		};
		s.removeQuery = function(a, b, c) {
			var e = f.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
			f.removeQuery(e, a, b);
			this._parts.query = f.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
			"string" !== typeof a && (c = b);
			this.build(!c);
			return this
		};
		s.hasQuery = function(a, b, c) {
			var e = f.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
			return f.hasQuery(e, a, b, c)
		};
		s.setSearch = s.setQuery;
		s.addSearch = s.addQuery;
		s.removeSearch = s.removeQuery;
		s.hasSearch = s.hasQuery;
		s.normalize = function() {
			return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
		};
		s.normalizeProtocol = function(a) {
			"string" === typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(),
				this.build(!a));
			return this
		};
		s.normalizeHostname = function(c) {
			this._parts.hostname && (this.is("IDN") && a ? this._parts.hostname = a.toASCII(this._parts.hostname) : this.is("IPv6") && b && (this._parts.hostname = b.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!c));
			return this
		};
		s.normalizePort = function(a) {
			"string" === typeof this._parts.protocol && this._parts.port === f.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!a));
			return this
		};
		s.normalizePath =
			function(a) {
				if (this._parts.urn || !this._parts.path || "/" === this._parts.path) return this;
				var b, c = this._parts.path,
					e = "",
					h, k;
				"/" !== c.charAt(0) && (b = !0, c = "/" + c);
				c = c.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/");
				for (b && (e = c.substring(1).match(/^(\.\.\/)+/) || "") && (e = e[0]);;) {
					h = c.indexOf("/..");
					if (-1 === h) break;
					else if (0 === h) {
						c = c.substring(3);
						continue
					}
					k = c.substring(0, h).lastIndexOf("/"); - 1 === k && (k = h);
					c = c.substring(0, k) + c.substring(h + 3)
				}
				b && this.is("relative") && (c = e + c.substring(1));
				c = f.recodePath(c);
				this._parts.path = c;
				this.build(!a);
				return this
			};
		s.normalizePathname = s.normalizePath;
		s.normalizeQuery = function(a) {
			"string" === typeof this._parts.query && (this._parts.query.length ? this.query(f.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null, this.build(!a));
			return this
		};
		s.normalizeFragment = function(a) {
			this._parts.fragment || (this._parts.fragment = null, this.build(!a));
			return this
		};
		s.normalizeSearch = s.normalizeQuery;
		s.normalizeHash = s.normalizeFragment;
		s.iso8859 = function() {
			var a =
				f.encode,
				b = f.decode;
			f.encode = escape;
			f.decode = decodeURIComponent;
			this.normalize();
			f.encode = a;
			f.decode = b;
			return this
		};
		s.unicode = function() {
			var a = f.encode,
				b = f.decode;
			f.encode = A;
			f.decode = unescape;
			this.normalize();
			f.encode = a;
			f.decode = b;
			return this
		};
		s.readable = function() {
			var b = this.clone();
			b.username("").password("").normalize();
			var c = "";
			b._parts.protocol && (c += b._parts.protocol + "://");
			b._parts.hostname && (b.is("punycode") && a ? (c += a.toUnicode(b._parts.hostname), b._parts.port && (c += ":" + b._parts.port)) : c += b.host());
			b._parts.hostname && b._parts.path && "/" !== b._parts.path.charAt(0) && (c += "/");
			c += b.path(!0);
			if (b._parts.query) {
				for (var e = "", h = 0, k = b._parts.query.split("&"), m = k.length; h < m; h++) {
					var p = (k[h] || "").split("="),
						e = e + ("&" + f.decodeQuery(p[0], this._parts.escapeQuerySpace).replace(/&/g, "%26"));
					void 0 !== p[1] && (e += "=" + f.decodeQuery(p[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"))
				}
				c += "?" + e.substring(1)
			}
			return c + f.decodeQuery(b.hash(), !0)
		};
		s.absoluteTo = function(a) {
			var b = this.clone(),
				c = ["protocol", "username", "password",
					"hostname", "port"
				],
				e, h;
			if (this._parts.urn) throw Error("URNs do not have any generally defined hierarchical components");
			a instanceof f || (a = new f(a));
			b._parts.protocol || (b._parts.protocol = a._parts.protocol);
			if (this._parts.hostname) return b;
			for (e = 0; h = c[e]; e++) b._parts[h] = a._parts[h];
			b._parts.path ? ".." === b._parts.path.substring(-2) && (b._parts.path += "/") : (b._parts.path = a._parts.path, b._parts.query || (b._parts.query = a._parts.query));
			"/" !== b.path().charAt(0) && (a = a.directory(), b._parts.path = (a ? a + "/" : "") +
				b._parts.path, b.normalizePath());
			b.build();
			return b
		};
		s.relativeTo = function(a) {
			var b = this.clone().normalize(),
				c, e, h, k;
			if (b._parts.urn) throw Error("URNs do not have any generally defined hierarchical components");
			a = (new f(a)).normalize();
			c = b._parts;
			e = a._parts;
			h = b.path();
			k = a.path();
			if ("/" !== h.charAt(0)) throw Error("URI is already relative");
			if ("/" !== k.charAt(0)) throw Error("Cannot calculate a URI relative to another relative URI");
			c.protocol === e.protocol && (c.protocol = null);
			if (c.username === e.username &&
				c.password === e.password && null === c.protocol && null === c.username && null === c.password && c.hostname === e.hostname && c.port === e.port) c.hostname = null, c.port = null;
			else return b.build();
			if (h === k) return c.path = "", b.build();
			a = f.commonPath(b.path(), a.path());
			if (!a) return b.build();
			e = e.path.substring(a.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../");
			c.path = e + c.path.substring(a.length);
			return b.build()
		};
		s.equals = function(a) {
			var b = this.clone();
			a = new f(a);
			var c = {},
				e = {},
				h = {},
				k;
			b.normalize();
			a.normalize();
			if (b.toString() ===
				a.toString()) return !0;
			c = b.query();
			e = a.query();
			b.query("");
			a.query("");
			if (b.toString() !== a.toString() || c.length !== e.length) return !1;
			c = f.parseQuery(c, this._parts.escapeQuerySpace);
			e = f.parseQuery(e, this._parts.escapeQuerySpace);
			for (k in c)
				if (G.call(c, k)) {
					if (!m(c[k])) {
						if (c[k] !== e[k]) return !1
					} else if (!r(c[k], e[k])) return !1;
					h[k] = !0
				}
			for (k in e)
				if (G.call(e, k) && !h[k]) return !1;
			return !0
		};
		s.duplicateQueryParameters = function(a) {
			this._parts.duplicateQueryParameters = !!a;
			return this
		};
		s.escapeQuerySpace = function(a) {
			this._parts.escapeQuerySpace = !!a;
			return this
		};
		return f
	});
	qun.star.io = {};
	(function(a, b, c) {
		a.io = a.io || {}
	})(window, jQuery);
	plu.io = plu.io || {};
	Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
		var c = this.length >>> 0,
			e = Number(b) || 0,
			e = 0 > e ? Math.ceil(e) : Math.floor(e);
		for (0 > e && (e += c); e < c; e++)
			if (e in this && this[e] === a) return e;
		return -1
	});
	$.ajaxPrefilter(function(a, b, c) {
		if (!a.mb && "jsonp" == a.dataType) {
			b = URI(a.url);
			var e = b.query(!0);
			b = b.query("").toString();
			b = b.toLowerCase();
			if (!b.match(/\/popup\/get/) && !b.match(/streams\/featured/)) {
				b = b.replace(/\/$/, "");
				var f = a.data && a.data.split("&");
				f && $.each(f, function(a, b) {
					var c = b.split("=");
					e[c[0]] = c[1]
				});
				a.data = null;
				delete e.callback;
				var h = plu.object.getKeys(e);
				h.sort();
				for (var k = h.length, f = [], m = 0; m < k; m++) {
					var p = h[m];
					f.push(p + "=" + e[p])
				}
				h = f.join("&");
				f.length && (h += "&");
				var r = "_c_" + plu.string.hashCode(b).toString(36);
				a.url = b + "?" + h + "callback=" + r;
				window[r] = window[a.jsonpCallback];
				c.always(function() {
					window[r] = null
				})
			}
		}
	});
	(function() {
		plu.io.star = function(a, b) {
			return (new Api.star(a, b.data)).get2()
		}
	})();
	qun.star.core = {};
	(function(a, b, c) {
		a.core = a.core || {};
		c = location.href.match(/\.dev/);
		var e = location.host.match(/test[0-9]?\./);
		a.env = c && c[0] ? "dev" : "cn";
		a.test = e && e[0] ? e[0] : "";
		/beta\./.exec(location.host) ? a.beta = "beta." : a.beta = "";
		a.isFunction = function(a) {
			return "function" === typeof a
		};
		a.isObject = function(a) {
			return "object" === typeof a
		};
		a.loadScript = function(a) {
			return b.ajax({
				dataType: "script",
				cache: !0,
				url: a
			})
		}
	})(window, jQuery);
	(function(a, b, c) {
		core.getter = function(a) {
			return {
				get: function() {
					return a
				}
			}
		};
		core.setter = function(a) {
			var b = {},
				c = a;
			b.set = function(a) {
				c = a
			};
			b.get = function() {
				return c
			};
			return b
		}
	})();
	(function(a, b) {
		a.duration = function(a) {
			a = a || {};
			if (a.__is_duration__) return a;
			var b = {},
				f = 0;
			a.hours = 24 * (a.days || 0) + (a.hours || 0);
			a.minutes = 60 * a.hours + (a.minutes || 0);
			a.seconds = 60 * a.minutes + (a.seconds || 0);
			f = 1E3 * a.seconds + (a.milliseconds || 0);
			b.inDays = function() {
				return parseInt(f / 864E5)
			};
			b.inHours = function() {
				return parseInt(f / 36E5)
			};
			b.inMinutes = function() {
				return parseInt(f / 6E4)
			};
			b.inSeconds = function() {
				return parseInt(f / 1E3)
			};
			b.inMilliseconds = function() {
				return f
			};
			b.__is_duration__ = !0;
			return b
		}
	})(window);
	qun.star.io.userinfo = {};
	(function(a, b, c) {
		function e() {}
		a.userinfo = function(a) {
			a = a || {};
			return {
				id: a.id,
				name: a.name,
				email: a.email,
				avatar: a.avatar,
				title: a.title,
				grade: a.grade,
				role: a.role
			}
		};
		e.URL = "http://star.plu." + env + "/api/user/getcurrentuserinfo";
		e.prototype.profiles_ = 0;
		e.ProfileField = {
			NONE: 0,
			SUBSCRIPTION: 1,
			CURRENCY: 2
		};
		e.prototype.setProfile = function(a, b) {
			this.profiles_ = b ? this.profiles_ | a : this.profiles_ & ~a
		};
		e.prototype.get = function() {
			var a = this,
				c = new plu.async.Completer;
			b.ajax({
				url: e.URL,
				data: {
					"with": this.prifiles_
				},
				dataType: "jsonp"
			}).then(function(b) {
				b &&
					c.complete(a.parseData_(b))
			});
			return c.future
		};
		e.prototype.parseData_ = function(a) {};
		plu.io.UserInfo = e
	})(window, jQuery);
	qun.star.io.roominfo = {};
	(function(a, b, c) {
		function e(a) {
			r && r.game && a != r.game.id && (r.game = m.getGame(a), f())
		}

		function f() {
			k.post("update", "io-roominfo", r, !0)
		}
		var h;
		a.roominfo = function() {
			function c(e) {
				b.map(e, function(b, c) {
					a.roomManagers.push({
						id: b.UserId,
						name: b.UserName,
						grade: b.Grade,
						role: r[b.RoleId]
					})
				})
			}

			function e(a) {
				v.normalManagers = [];
				b.map(a, function(a, b) {
					"Manager" == r[a.RoleId] && v.normalManagers.push({
						id: a.UserId,
						name: a.UserName,
						grade: a.Grade,
						role: r[a.RoleId]
					})
				})
			}

			function f() {
				v.managers = b.map(a.roomManagers || [], function(a) {
					if ("VipUser" !=
						a.role) return userinfo({
						id: a.id,
						name: a.name,
						grade: a.grade,
						role: a.role
					})
				});
				v.vips = b.map(a.roomManagers || [], function(a) {
					if ("VipUser" == a.role) return userinfo({
						id: a.id,
						name: a.name,
						grade: a.grade,
						role: a.role
					})
				})
			}
			if (h) return h;
			var k = a.roomInfo || {},
				m = a.roomHost || {},
				p = plu.messages,
				r = {
					0: "NotSet",
					1: "Host",
					2: "Manager",
					4: "SuperVisor",
					8: "RoomContentManager",
					16: "VipUser"
				};
			(function(c) {
				a.roomManagers = b.map(c, function(a, b) {
					return {
						id: a.id,
						name: a.name,
						grade: a.grade,
						role: r[a.role]
					}
				})
			})(a.roomManagers);
			var v = h = {
				id: k.RoomId,
				name: k.Name,
				desc: k.Desc,
				logo: k.Logo,
				weibo: k.Weibo,
				domain: k.Domain,
				keywords: k.RoomTitleKey,
				grade: roomGrade && roomGrade.grade || 1,
				online: 0,
				thumb: a.sharePic,
				game: {
					id: a.gameId
				},
				user: userinfo({
					id: m.uid,
					name: m.username,
					email: m.email,
					avatar: m.avatar,
					grade: m.grade,
					role: 1,
					title: k.UserTitle
				}),
				managers: b.map(a.roomManagers || [], function(a) {
					if ("VipUser" != a.role) return userinfo({
						id: a.id,
						name: a.name,
						grade: a.grade,
						role: a.role
					})
				}),
				normalManagers: b.map(a.roomManagers || [], function(a) {
					if ("Manager" == a.role) return userinfo({
						id: a.id,
						name: a.name,
						grade: a.grade,
						role: a.role
					})
				}),
				superManagers: b.map(a.roomManagers || [], function(a) {
					if ("SuperVisor" == a.role) return userinfo({
						id: a.id,
						name: a.name,
						grade: a.grade,
						role: a.role
					})
				}),
				vips: b.map(a.roomManagers || [], function(a) {
					if ("VipUser" == a.role) return userinfo({
						id: a.id,
						name: a.name,
						grade: a.grade,
						role: a.role
					})
				})
			};
			p.receive("updatemanager", "roominfo", function(a) {
				c(a);
				e(a);
				f();
				p.post("updatedone", "menuopration")
			}).receive("changeManager", "roominfo", f).receive("onlinechange", "roomstatus", function(a) {
				v.online =
					a
			});
			v.isAdmin = function(a) {
				var c = !1;
				if (v.user.id == a.id) return !0;
				b.each(v.managers, function(b, e) {
					if (e.id == a.id) return c = !0, !1
				});
				return c
			};
			v.isHost = function(a) {
				return v.user.id == a.id ? !0 : !1
			};
			v.isManager = function(a) {
				var c = !1;
				b.each(v.managers, function(b, e) {
					if (e.id == a.id) return c = !0, !1
				});
				return c
			};
			v.isNomalManager = function(a) {
				var c = a.id,
					e = !0;
				b.each(v.managers, function(a, b) {
					if (b.id == c && "Manager" != b.role) return e = !1
				});
				return e
			};
			v.isSuperManager = function(a) {
				var c = a.id,
					e = !1;
				b.each(v.superManagers, function(a,
					b) {
					if (b.id == c) return e = !0, !1
				});
				return e
			};
			v.isVip = function(a) {
				var c = !1;
				b.each(v.vips, function(b, e) {
					if (e.id == a.id) return c = !0, !1
				});
				return c
			};
			return v
		};
		var k = plu.messages,
			m = plu.model.Games,
			p = window.pageData && window.pageData.defaultGameId || gameId,
			r = new plu.model.RoomInfo({
				game: m.getGame(p)
			});
		k.receive("livestart", "roomstatus", function(a) {
			e(a.game.gameId)
		}).receive("liveend", "roomstatus", function(a) {
			e(p)
		});
		f()
	})(window, jQuery);
	qun.star.widget = {};
	qun.star.widget.loginmanager = {};
	(function(a, b, c) {
		var e, f = plu.messages;
		a.loginmanager = function() {
			function a() {
				r.add({
					currentUser: m
				});
				plu.messages.post("change", "loginmanager", m, !0)
			}
			if (e) return e;
			var k = e = {},
				m, p = b.Deferred(),
				r = streamcontroller();
			LoginManager.checkLogin(function(b) {
				var c = b.data.grade,
					e, f = 0,
					k; - 1 == c && (c = 1);
				b.data.profiles ? (f = b.data.profiles.isvalid, k = b.data.profiles.safeusergrade, b.data.profiles.userexp && (e = {
						CurrentGrade: c,
						CurrentGradeExp: b.data.profiles.userexp[0],
						NextGradeExp: b.data.profiles.userexp[2],
						CurrentExp: b.data.profiles.userexp[1]
					})) :
					e = {
						CurrentGrade: c,
						CurrentGradeExp: -1,
						NextGradeExp: -1,
						CurrentExp: -1
					};
				m = {
					id: b.uid,
					name: b.username,
					avatar: b.avatar,
					subscription: b.subscription,
					currency: b.currency,
					grade: e,
					isValid: f,
					safeGrade: k
				};
				p.resolve(m);
				a()
			}, function(b) {
				m = c;
				a()
			});
			f.receive("loginaction", "loginmanager", function() {
				LoginManager.login()
			});
			k.login = function(a) {
				LoginManager.login(a)
			};
			k.logout = function() {
				LoginManager.logout()
			};
			k.loadUserInfo = function() {
				return LoginManager.loadUserInfo()
			};
			k.checkLogin = function(a, b) {
				LoginManager.checkLogin(a,
					b)
			};
			k.getCurrentUser = function() {
				return m
			};
			k.getCurrentUserByAsyn = function() {
				return p.promise()
			};
			k.onChange = r.stream;
			return k
		}
	})(window, jQuery);
	qun.star.string = {};
	plu.string = {};
	plu.string.hashCode = function(a) {
		for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
		return b
	};
	plu.string.similarity = function(a, b) {
		var c = a.length > b.length ? a.length : b.length;
		return 1 - Levenshtein_Distance(a, b) / c
	};

	function Levenshtein_Distance(a, b) {
		var c = a.length,
			e = b.length,
			f = [],
			h, k, m, p;
		if (0 == c) return e;
		if (0 == e) return c;
		for (h = 0; h <= c; h++) f[h] = [], f[h][0] = h;
		for (k = 0; k <= e; k++) f[0][k] = k;
		for (h = 1; h <= c; h++)
			for (m = a.charAt(h - 1), k = 1; k <= e; k++) p = b.charAt(k - 1), p = m == p ? 0 : 1, f[h][k] = Minimum(f[h - 1][k] + 1, f[h][k - 1] + 1, f[h - 1][k - 1] + p);
		return f[c][e]
	}

	function Minimum(a, b, c) {
		return a < b ? a < c ? a : c : b < c ? b : c
	};
	qun.star.object = {};
	plu.object = {};
	plu.object.getKeys = function(a) {
		var b = [],
			c;
		for (c in a) a.hasOwnProperty(c) && b.push(c);
		return b
	};
	qun.star.io.Api = {};
	(function(a) {
		function b(a, b, c) {
			this.uri_ = a;
			this.params_ = b || {};
			this.cache_ = !1 === c ? !1 : !0;
			this.callbackName_ = "_c_" + e.hashCode(a).toString(36)
		}
		var c = plu.async.Completer,
			e = plu.string;
		b.star = function(c, e, k) {
			var m;
			m = a.location.host;
			var p = m.match(/test[0-9]?\./);
			m = p && p[0] ? "http://" + p[0] + "star.api.plu." : m.match(/beta./) ? "http://beta.star.api.plu." : k && "dev" != env ? "http://star.apicdn.plu." : "http://star.api.plu.";
			return new b(m + env + c, e, k || !1)
		};
		b.plu = function(c, e) {
			var k;
			k = a.location.host;
			k = k.match(/test./) ? "http://test.api.plu." :
				k.match(/beta./) ? "http://beta.api.plu." : "http://api.plu.";
			return new b(k + env + c, e, !0)
		};
		b.cdn = function(a, c) {
			return b.star(a, c, !0)
		};
		b.prototype.setParam = function(a, b) {
			this.params_[a] = b
		};
		b.prototype.toString = function() {
			return this.uri_ + "/?" + this.paramsToString_()
		};
		b.prototype.get = function() {
			var a = new c,
				b = this.toString();
			$.ajax({
				url: b,
				cache: this.cache_,
				dataType: "jsonp",
				jsonpCallback: this.callbackName_,
				success: function(b) {
					a.complete(b)
				},
				fail: function() {
					a.completeError(Error("\u6570\u636e\u8bfb\u53d6\u5931\u8d25:" +
						b))
				}
			});
			return a.future
		};
		b.prototype.get2 = function() {
			return $.ajax({
				url: this.toString(),
				cache: this.cache_,
				dataType: "jsonp",
				jsonpCallback: this.callbackName_
			})
		};
		b.prototype.paramsToString_ = function() {
			var a = [],
				b = this.params_,
				c = plu.object.getKeys(b);
			c.sort();
			for (var e = c.length, p = 0; p < e; p++) {
				var r = c[p];
				a.push(r + "=" + b[r])
			}
			return a.join("&")
		};
		b.get = function(a, c) {
			(new b.star(a, c)).get()
		};
		plu.io.Api = b
	})(window);
	qun.star.model.GiftManager = {};
	(function() {
		function a() {}

		function b() {
			e.push({
				name: "thunder",
				moneyCost: 19.9
			});
			e.push({
				name: "yomonkey",
				moneyCost: 29.9
			});
			"undefined" == typeof h && (h = $.Deferred(), c.star("/item/GetAllItems", {}, !0).get().then(function(a) {
				e = a;
				h.resolve()
			}));
			return h.promise()
		}
		var c = plu.io.Api,
			e = [],
			f = {},
			h, k = {
				CLICK: 0,
				POST_INCREASE_INVENTORY: 2,
				POST_BANNER: 3,
				POST_NOTIFICATION: 4,
				LAST_PUSH_MESSAGE_TO_QUEUE: 8
			};
		a.getGift = function(a) {
			var c = $.Deferred(),
				h = "lz_" + a;
			b().then(function() {
				if (!f[h])
					for (var a = 0; a < e.length; a++)
						if ("lz_" + e[a].name ==
							h) {
							f[h] = e[a];
							break
						}
				f[h] ? c.resolve(f[h]) : c.reject()
			});
			return c.promise()
		};
		a.getBannerParams = function(b, c) {
			var e = $.Deferred();
			a.getGift(b).then(function(a) {
				var b = null;
				if (a.options)
					for (var f = 0; f < a.options.length; f++) {
						var h = a.options[f];
						if (h.num == c)
							for (var m = 0; m < h.postActions.length; m++) {
								var w = h.postActions[m];
								if (w.type == k.POST_BANNER) {
									b = w.params;
									break
								}
							}
					}
				b ? e.resolve(b) : e.reject()
			});
			return e.promise()
		};
		a.getNoticeParams = function(b, c) {
			var e = $.Deferred();
			a.getGift(b).then(function(a) {
				var b = null;
				if (a.options)
					for (var f =
							0; f < a.options.length; f++) {
						var h = a.options[f];
						if (h.num == c)
							for (var m = 0; m < h.postActions.length; m++) {
								var w = h.postActions[m];
								if (w.type == k.POST_NOTIFICATION) {
									b = w.params;
									break
								}
							}
					}
				b ? e.resolve(b) : e.reject()
			});
			return e.promise()
		};
		a.getIncreaseInventoryParams = function(b, c) {
			var e = $.Deferred();
			a.getGift(b).then(function(a) {
				var b = null;
				if (a.options)
					for (var f = 0; f < a.options.length; f++) {
						var h = a.options[f];
						if (h.num == c)
							for (var m = 0; m < h.postActions.length; m++) {
								var w = h.postActions[m];
								if (w.type == k.POST_INCREASE_INVENTORY) {
									b =
										w.params;
									break
								}
							}
					}
				b ? e.resolve(b) : e.reject()
			});
			return e.promise()
		};
		a.getRankingParams = function(b) {
			var c = $.Deferred();
			a.getGift(b).then(function(a) {
				var e = null;
				if ("thunder" == b || "yomonkey" == b) c.resolve({});
				else
					for (var f = 0; f < a.postActions.length; f++) {
						var h = a.postActions[f];
						if (h.type == k.LAST_PUSH_MESSAGE_TO_QUEUE) {
							e = h.params;
							break
						}
					}
				e ? c.resolve(e) : c.reject()
			});
			return c.promise()
		};
		a.getClickParams = function(b) {
			var c = $.Deferred();
			a.getGift(b).then(function(a) {
				for (var b = null, e = 0; e < a.preActions.length; e++) {
					var f =
						a.preActions[e];
					if (f.type == k.CLICK) {
						b = f.params;
						break
					}
				}
				b ? c.resolve(b) : c.reject()
			});
			return c.promise()
		};
		plu.model.GiftManager = a;
		plu.model.GiftActionType = k;
		plu.model.GiftClickSendType = {
			SEND_ONE: 0,
			SEND_ALL: 1
		};
		plu.model.GiftCategory = {
			NORMAL: 1,
			LARGE: 2
		}
	})();
	window.ui = window.ui || {};
	plu.ui = plu.ui || {};
	qun.star.ui.GiftMoneyBg = {};
	(function() {
		function a(a, e) {
			var f = e || {};
			this._container = b(a);
			this._fps = f.fps || 6;
			this._frames = f.frames || 10;
			this._offset = f.offset || 345
		}
		var b = jQuery;
		a.prototype._currentFrame = 0;
		a.prototype.show = function() {
			var a = b(".chatroom-top-messages").outerHeight() || 0;
			this._getRoot().css("top", a).show();
			this._playAnimation()
		};
		a.prototype.hide = function() {
			this._getRoot().hide();
			this._stopAnimation()
		};
		a.prototype._getRoot = function() {
			this._root || (this._root = b("<div></div>").addClass("gift-money-bg").appendTo(this._container));
			return this._root
		};
		a.prototype._playAnimation = function() {
			var a = this;
			this._animationTimer = window.setInterval(function() {
				a._currentFrame = ++a._currentFrame % a._frames;
				a._getRoot().css("background-position", parseInt(-a._currentFrame * a._offset) + "px 0")
			}, 1E3 / this._fps)
		};
		a.prototype._stopAnimation = function() {
			this._animationTimer && window.clearInterval(this._animationTimer);
			this._animationTimer = null;
			this._currentFrame = 0
		};
		plu.ui.GiftMoneyBg = a
	})();
	qun.star.stringsimilarity = {};
	var stringSimilarity = function(a, b) {
		var c = Math.max(a.length, b.length),
			e, f, h = 0,
			k = 0,
			m = 0,
			p;
		for (p = 0; p < c; p++) e = a.charCodeAt(p) || 32, f = b.charCodeAt(p) || 32, h += e * f, k += e * e, m += f * f;
		return h / (Math.sqrt(k) * Math.sqrt(m))
	};
	(function(a, b, c) {
		a.widget = function(a) {
			var c = b(a).eq(0);
			return {
				$ele: c,
				find: function(a) {
					return c.find(a)
				}
			}
		}
	})(window, jQuery);
	plu.widget = plu.widget || {};
	qun.star.io.jsonp = {};
	(function() {
		function a(a) {
			var e = b.createElement("script");
			e.src = a;
			c.appendChild(e);
			return e
		}
		plu.io.jsonp = function(a, b) {
			var c = {},
				e = b || {};
			c.get = function(b) {
				var c = e.callbackName;
				return $.ajax({
					url: a,
					cache: !!c,
					dataType: "jsonp",
					jsonpCallback: c,
					data: b
				})
			};
			return c
		};
		var b = document,
			c = b.getElementsByTagName("head")[0],
			e = 0;
		plu.io._callbacks_ = {};
		plu.io.getJsonp = function(b, c) {
			var k = "callback" + e++,
				m;
			plu.io._callbacks_[k] = function(a) {
				c(a);
				m && m.parentNode.removeChild(m);
				plu.io._callbacks_[k] = null
			};
			m = a(b + "&callback=plu.io._callbacks_." +
				k)
		}
	})();
	qun.star.io.messagebus = {};
	(function(a, b, c) {
		function e(a) {
			Error.call(this);
			this.day = a || Number.MAX_VALUE;
			this.message = "\u60a8\u5df2\u88ab\u623f\u4e3b\u7981\u8a00"
		}
		c = "";
		"" != test ? c = test : "" == test && "" != beta && (c = beta);
		var f = "http://" + c + "mb.tga.plu." + env + "/chatroom",
			h = f + "/sendmsg",
			k = f + "/sendgift",
			m = plu.messages,
			p;
		a.messagebus = function() {
			function c() {
				a.mbable && !l && (l = new star.MessageBus(roomInfo.RoomId), l.addEventListener("open", function(a) {
					if (0 != a.msgs.length) {
						for (var c = [], e = a.msgs.length - 1; 0 <= e; e--) "redEnvelope" == a.msgs[e].type &&
							(2 == a.msgs[e].msg.status ? (c.push(a.msgs[e].msg.redEnvelopeId), a.msgs.splice(e, 1)) : 0 <= b.inArray(a.msgs[e].msg.redEnvelopeId, c) && a.msgs.splice(e, 1));
						c = b.map(a.msgs, function(a) {
							if ("redEnvelope" == a.type) return a = a.msg, a = {
								user: {
									id: a.user.uid,
									name: a.user.username,
									grade: a.user.grade
								},
								id: a.redEnvelopeId,
								state: a.status,
								type: a.type,
								mold: "",
								dateTime: a.time
							}, 1 == a.type ? a.mold = "\u7cfb\u7edf\u5956\u52b1" : 2 == a.type ? a.mold = "\u7528\u6237\u53d1\u9001" : 3 == a.type && (a.mold = "\u4e3b\u64ad\u53d1\u9001"), a
						});
						0 != c.length &&
							m.post("onLoad", "RedEnvelope", {
								redenvelopes: c
							})
					}
					m.post("onOpen", "messagebus", a);
					R.add(!1);
					J = a.group;
					a = a.gifts.reverse().concat(a.msgs);
					w(a, !0)
				}), l.addEventListener("close", function() {}), l.addEventListener("message", function(a) {
					w(a.msgs, !1, a.next)
				}), l.addEventListener("limit", function(a) {
					R.add(!0)
				}));
				M || (l.open(), M = !0)
			}

			function t() {
				l && M && (l.close(), M = !1)
			}

			function A(a, c) {
				var e = c || 0,
					f = b.Deferred();
				plu.io.getJsonp(k + "?roomId=" + z.id + "&type=" + a + "&number=" + e, function(a) {
					var b = a.result; - 403 == b ? plu.messages.post("show",
						"msgtip", {
							text: "\u60a8\u5df2\u88ab\u7981\u8a00"
						}) : 0 <= b ? f.resolve({
						rest: a.inventory,
						profiles: a.profiles
					}) : -10 == b ? (a = Error("\u4f59\u989d\u4e0d\u8db3"), a.lack = !0, f.reject(a)) : -11 == b ? (a = Error("\u793c\u7269\u5e93\u5b58\u4e0d\u8db3"), a.lack = !0, f.reject(a)) : -12 == b ? (a = Error("\u7ea2\u5305\u53c2\u6570\u6709\u95ee\u9898"), a.lack = !0, f.reject(a)) : f.reject({})
				});
				return f.promise()
			}

			function H(a, b) {
				var c = a.user,
					c = {
						type: "msg",
						leveltype: a.leveltype,
						user: userinfo({
							id: c.uid,
							name: c.username,
							email: c.email,
							avatar: c.avatar,
							grade: c.grade
						}),
						content: a.content,
						color: a.color,
						style: a.style,
						kind: a.itemType,
						time: moment(a.time),
						history: !!b,
						count: a.number,
						via: a.via
					},
					e = a.medal;
				e && (c.user.fansMedal = {
					id: e.id,
					domain: e.domain,
					name: e.name,
					level: e.level
				});
				return c
			}

			function s(a, b, c) {
				I.add({
					id: a,
					content: b,
					duration: duration({
						seconds: c
					})
				})
			}

			function G(a, b, c, e, f, h) {
				h && plu.messages.post("bean_ui", "bean", {
					newGamesList: h
				}, !0);
				a ? plu.messages.post("livestart", "roomstatus", {
					id: f,
					title: b,
					channels: e,
					game: c
				}, !0) : plu.messages.post("liveend", "roomstatus", {}, !0)
			}

			function w(a, c, e) {
				var f = [],
					h = [],
					k;
				b.each(a, function(a, b) {
					if (b) {
						var c = b.type,
							e = b.msg;
						"announce" === c ? s(e.id, e.content, e.durationSeconds) : "broadcastStart" === c || "broadcastEnd" === c ? (k = e, k.type = c) : "chat" === c ? f.push(e) : "gift" === c ? (e.leveltype = b.leveltype, h.push(e)) : "medal" == c ? (c = new Date, m.post("fansMedalUpgrade", "fansmedal", {
							nickname: e.user.username,
							medalLevel: e.medal.level,
							medalName: e.medal.name,
							mb: !0,
							time: c.getHours() + ":" + c.getMinutes()
						})) : "vipjoin" !== c && ("fifteenUserjoin" === c ? e = {
							type: 5,
							username: e.username,
							usergrade: e.userGrade
						} : "grade" == c ? (e = {
							roomgrade: e.grade,
							roomexp: e.roomexp,
							data: e
						}, plu.messages.post("roomUpgrade", "roomupdate", e)) : "redEnvelope" === c ? (e = {
							user: {
								id: e.user.uid,
								name: e.user.username,
								grade: e.user.grade
							},
							id: e.redEnvelopeId,
							state: e.status,
							type: e.type,
							mold: "",
							dateTime: e.time
						}, 1 == e.type ? e.mold = "\u7cfb\u7edf\u5956\u52b1" : 2 == e.type ? e.mold = "\u7528\u6237\u53d1\u9001" : 3 == e.type && (e.mold = "\u4e3b\u64ad\u53d1\u9001"), plu.messages.post("onLoadRedEnvelopes", "RedEnvelope", e)) : "maxRedEnvelope" === c ? (e = {
							ownName: e.ownName,
							userName: e.userName,
							giftNum: e.num,
							giftTitle: e.title,
							id: e.redEnvelopeId
						}, plu.messages.post("onMaxRedEnvelope", "RedEnvelope", e)) : "drawRedEnvelope" === c ? (e = {
							ownName: e.content,
							userName: e.user.username
						}, plu.messages.post("openEnvelopeTip", "RedEnvelope", e)) : "luckybox" == c && m.post("onLuckyBox", "messagebus", e))
					}
				});
				if (k) {
					a = k;
					var l = a.type;
					"broadcastStart" === l ? (l = b.map(a.Channels, function(a) {
						return {
							name: a.Name,
							code: a.Code
						}
					}), G(!0, a.title, {
							gameId: a && a.gameId,
							gameName: a.gameName
						}, l, a.PlayId ||
						0)) : "broadcastEnd" === l && G(!1)
				}
				f = f.sort(function(a, b) {
					var c = parseInt(a.time && a.time.replace(/\/Date\(/, "")),
						e = parseInt(b.time && b.time.replace(/\/Date\(/, ""));
					return c > e ? 1 : c == e ? 0 : -1
				});
				v(f, c, e);
				D(h, c, e)
			}

			function D(a, c, e) {
				if (c) b.each(a, function(a, b) {
					m.post("onGiftMsg", "messagebus", {
						history: !0,
						msg: b
					})
				});
				else {
					c = a.length;
					var f = 1E3 * (e || 3) / c;
					for (e = 0; e < c; e++)(function(b) {
						setTimeout(function() {
							m.post("onGiftMsg", "messagebus", {
								history: !1,
								msg: a[b]
							})
						}, b * f)
					})(e)
				}
			}

			function v(a, b, c) {
				var e = a.length,
					f = 1E3 * (c || 3) / e;
				for (c = 0; c < e; c++)(function(c) {
					setTimeout(function() {
						S.add(H(a[c], b))
					}, c * f)
				})(c)
			}
			if (p) return p;
			var x = p = {},
				z = roominfo(),
				J, K = window.roomStatus,
				l, q = streamcontroller(),
				u = streamcontroller(),
				F = streamcontroller(),
				I = streamcontroller(),
				R = streamcontroller(),
				S = streamcontroller(),
				ca = streamcontroller(),
				ha = streamcontroller(),
				M = !1;
			m.receive("actionCloseMbStream", "io-messagebus", function(a) {
				a ? L = !0 : T = !0;
				M && L && T && t()
			});
			m.receive("actionOpenMbStream", "io-messagebus", function(a) {
				a ? L = !1 : T = !1;
				M || L && T || c()
			});
			(function(a) {
				var c =
					a.OnlineCount || 0,
					e = a.EggCount || 0,
					f = a.FlowerCount || 0,
					h = a.Broadcast,
					k = h && h.Title,
					l = a.Announcement,
					m = l && l.Id,
					p = l && l.Content,
					q = l && l.Duration,
					r = a.NewGamesList || [],
					A = {
						gameId: h && h.GameId,
						gameName: h && h.GameName,
						parentGameId: h && h.ParentGameId,
						parentGameName: h && h.ParentGameName
					},
					w = [],
					t;
				h && h.Channels && (b.each(h.Channels, function(a, b) {
					w.push({
						name: b.Name,
						code: b.Code
					})
				}), t = h.PlayId || 0);
				0 == r.length ? G(!!h, k, A, w, t) : G(!!h, k, A, w, t, r);
				k = parseInt(a.RoomSubscribeCount);
				l && s(m, p, q);
				u.add({
					flowers: f + e
				});
				F.add(c);
				0 <= k &&
					ca.add({
						count: k
					});
				a.ContributionValue && ha.add({
					value: a.ContributionValue
				});
				h && h.BeginTime && (a = moment(h.BeginTime).toDate(), c = moment(new Date).zone(8).toDate(), a = parseInt((c.getTime() - a.getTime()) / 1E3), plu.messages.post("liveduration", "roomstatus", a, !0))
			})(K);
			var L = !1,
				T = !1;
			x.sendChatMsg = function(c, f) {
				var k = b.Deferred();
				J ? (c = a.encodeURIComponent(c), b.getJSON(h + (f ? "2" : "") + "?group=" + J + "&content=" + c + "&callback=?").done(function(a) {
					a.IsBlock ? (a = moment(a.RemoveBlock).isAfter(moment().subtract("d", -2)) ? new e :
						new e(1), k.reject(a)) : k.resolve(H(a.Msg))
				}).fail(function() {
					k.reject(Error("\u53d1\u8a00\u5931\u8d25"))
				})) : k.reject(Error("\u53d1\u8a00\u5931\u8d25"));
				return k.promise()
			};
			x.sendTscreenMsg = function(c, h, k, l) {
				var m = b.Deferred();
				J ? (c = a.encodeURIComponent(c), b.getJSON(f + "/sendbulletscreen" + (h ? "2" : "") + "?group=" + J + "&content=" + c + "&callback=?", {
						color: l,
						style: k
					}).done(function(a) {
						a.IsBlock ? (a = moment(a.RemoveBlock).isAfter(moment().subtract("d", -2)) ? new e : new e(1), m.reject(a)) : m.resolve(H(a.Msg))
					}).fail(function() {
						m.reject(Error("\u53d1\u8a00\u5931\u8d25"))
					})) :
					m.reject(Error("\u53d1\u8a00\u5931\u8d25"));
				return m.promise()
			};
			x.sendTscreenGift = function(a, c, e, h, k, l) {
				e = e || 0;
				var m = b.Deferred();
				c = encodeURIComponent(c);
				l = f + "/SendBulletScreenGift" + (l ? "2" : "");
				plu.io.getJsonp(l + "?color=" + k + "&style=" + h + "&content=" + c + "&roomId=" + z.id + "&type=" + a + "&number=" + e, function(a) {
					var b = a.result; - 403 == b ? plu.messages.post("show", "msgtip", {
						text: "\u60a8\u5df2\u88ab\u7981\u8a00"
					}) : 0 <= b ? a.other ? m.resolve({
						count: b,
						rest: a.inventory,
						love: a.other,
						profiles: a.profiles
					}) : m.resolve({
						count: b,
						rest: a.inventory,
						profiles: a.profiles
					}) : 0 > a.inventory ? (a = Error("\u793c\u7269\u5e93\u5b58\u4e0d\u8db3"), a.lack = !0, m.reject(a)) : m.reject({})
				});
				return m.promise()
			};
			x.sendFlower = function(a) {
				return A("flower", a)
			};
			x.sendApple = function(a) {
				return A("apple", a)
			};
			x.sendGift = A;
			x.loadRoomStates = function() {};
			x.startMbStream = c;
			x.stopMbStream = t;
			x.onLive = q.stream;
			x.onGift = u.stream;
			x.onView = F.stream;
			x.onBulletin = I.stream;
			x.onChatLimit = R.stream;
			x.onChatMsg = S.stream;
			x.onSubscribeReceive = ca.stream;
			x.onContributionValueChange =
				ha.stream;
			return x
		};
		messagebus.BlockError = e
	})(window, jQuery);
	qun.star.face = {};
	(function(a) {
		a.fn.qqFace = function(b) {
			var c = a.extend({
				id: "facebox",
				path: "face/",
				assign: "content",
				tip: "em_"
			}, b);
			b = a("#" + c.assign);
			var e = c.id,
				f = c.path,
				h = c.tip,
				k = c.parent;
			if (0 >= b.length) return alert("\u7f3a\u5c11\u8868\u60c5\u8d4b\u503c\u5bf9\u8c61\u3002"), !1;
			a(this).click(function(b) {
				var p, r;
				if (0 >= a("#" + e).length) {
					p = '<div id="' + e + '" style="position:absolute;display:none;z-index:9999999;" class="qqFace"><table border="0" cellspacing="0" cellpadding="0"><tr>';
					for (var t = 1; 75 >= t; t++) {
						var A = t;
						64 == t && (A = 80);
						r = "[" + h + A + "]";
						p += '<td><img width="24px" height="24px" src="' + f + A + '.gif" onclick="$(\'#' + c.assign + "').setCaret();$('#" + c.assign + "').insertAtCaret('" + r + "');\" /></td>";
						0 == t % 9 && (p += "</tr><tr>")
					}
					p += "</tr></table></div>"
				}
				k ? a(k).append(p) : a(this).parent().append(p);
				p = a(this).position();
				a("#" + e).css("left", p.left).toggle();
				b.stopPropagation()
			});
			a(document).click(function() {
				a("#" + e).hide().remove()
			})
		}
	})(jQuery);
	jQuery.extend({
		unselectContents: function() {
			window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty()
		}
	});
	jQuery.fn.extend({
		selectContents: function() {
			$(this).each(function(a) {
				var b, c, e, f;
				(e = this.ownerDocument) && (f = e.defaultView) && "undefined" != typeof f.getSelection && "undefined" != typeof e.createRange && (b = window.getSelection()) && "undefined" != typeof b.removeAllRanges ? (c = e.createRange(), c.selectNode(this), 0 == a && b.removeAllRanges(), b.addRange(c)) : document.body && "undefined" != typeof document.body.createTextRange && (c = document.body.createTextRange()) && (c.moveToElementText(this), c.select())
			})
		},
		setCaret: function() {
			if ($.browser.msie) {
				var a =
					function() {
						$(this).get(0).caretPos = document.selection.createRange().duplicate()
					};
				$(this).click(a).select(a).keyup(a)
			}
		},
		insertAtCaret: function(a) {
			var b = $(this).get(0);
			if (document.all && b.createTextRange && b.caretPos) b = b.caretPos, b.text = "" == b.text.charAt(b.text.length - 1) ? a + "" : a;
			else if (b.setSelectionRange) {
				var c = b.selectionStart,
					e = b.selectionEnd,
					f = b.value.substring(0, c),
					e = b.value.substring(e);
				b.value = f + a + e;
				b.focus();
				a = a.length;
				b.setSelectionRange(c + a, c + a)
			} else b.value += a
		}
	});
	qun.star.element = {};
	plu.element = {};
	plu.element.byId = function(a) {
		return document.getElementById(a)
	};
	plu.element.hasClass = function(a, b) {
		var c = !1; - 1 != a.className.indexOf(b) && (c = !0);
		return c
	};
	plu.element.show = function(a) {
		a.style.display = "block"
	};
	plu.element.hide = function(a) {
		a.style.display = "none"
	};
	plu.element.getStyle = function(a, b) {
		var c = document.defaultView;
		if (c && c.getComputedStyle && (c = c.getComputedStyle(a)) && (c = c[b] || c.getPropertyValue(b))) return c;
		if (c = a.currentStyle)
			if (c = c[b]) return c;
		return a.style && a.style[b]
	};
	plu.element.addClass = function(a, b) {
		var c = a.className;
		if (c) {
			if (1 < c.split(b).length) return;
			c += " "
		}
		a.className = (c + b).replace(/\s+/g, " ")
	};
	plu.element.removeClass = function(a, b) {
		var c = a.className;
		c && (c = c.split(b), 1 >= c.length || (a.className = c.join("")))
	};
	plu.element.listen = function(a, b, c, e) {
		var f = function(a) {
			plu.bind(c, e || this)(plu.element._event(a))
		};
		"function" === typeof a.addEventListener ? a.addEventListener(b, f) : a.attachEvent("on" + b, f);
		return {
			cancel: function() {
				plu.element._unlisten(a, b, f)
			}
		}
	};
	plu.element._unlisten = function(a, b, c) {
		"function" === typeof a.removeEventListener ? a.removeEventListener(b, c) : a.detachEvent("on" + b, c)
	};
	plu.element._event = function(a) {
		var b = a || window.event;
		"function" !== typeof b.preventDefault && (b.preventDefault = function() {
			b.returnValue = !1
		});
		"function" !== typeof b.stopPropagation && (b.stopPropagation = function() {
			b.cancelBubble = !0
		});
		return b
	};
	qun.star.ui.Scroll = {};
	(function() {
		plu.ui.Scroll = function(a, b) {
			var c = document;
			this._id = a;
			this._ele = c.getElementById(a + "-scroll");
			this._content = c.getElementById(a + "-scroll-container");
			this._bar = c.getElementById(a + "-scroll-bar");
			this._barUp = c.getElementById(a + "-scroll-up");
			this._barDown = c.getElementById(a + "-scroll-down");
			this._thumb = c.getElementById(a + "-scroll-thumb");
			this._showBar = b || !1;
			this._init()
		};
		plu.ui.Scroll.prototype._barVisible = !1;
		plu.ui.Scroll.prototype._init = function() {
			var a = this._content,
				b = this._ele,
				c = this._parentNode =
				b.parentNode,
				e = this._thumb,
				f = this._barUp,
				h = this._barDown;
			this._offsetTop = parseInt(plu.element.getStyle(a, "paddingTop")) || 0;
			this._offsetBottom = parseInt(plu.element.getStyle(a, "paddingBottom")) || 0;
			this.update(!0);
			plu.element.listen(window, "resize", this._handleResize, this);
			plu.element.listen(b, "scroll", this._handleScroll, this);
			plu.element.listen(e, "mousedown", this._handleMouseDown, this);
			f && plu.element.listen(f, "mousedown", this._handleUpBtnMouseDown, this);
			h && plu.element.listen(h, "mousedown", this._handleDownBtnMouseDown,
				this);
			void 0 !== c.onmouseenter ? (plu.element.listen(c, "mouseenter", this._handleMouseOver, this), plu.element.listen(c, "mouseleave", this._handleMouseOut, this)) : (plu.element.listen(c, "mouseover", this._handleMouseOver, this), plu.element.listen(c, "mouseout", this._handleMouseOut, this))
		};
		plu.ui.Scroll.prototype._handleMouseMove = function(a) {
			a.preventDefault();
			var b = this._mouseY;
			void 0 === b ? this._mouseY = a.clientY : (b = a.clientY, this._ele.scrollTop += (b - this._mouseY) / this._barHeight * this._contentHeight, this._mouseY =
				b)
		};
		plu.ui.Scroll.prototype._handleMouseDown = function(a) {
			a = document;
			this._mouseMoveListener = plu.element.listen(a, "mousemove", this._handleMouseMove, this);
			this._mouseUpListener = plu.element.listen(a, "mouseup", this._handleMouseUp, this);
			this._mouseDown = !0
		};
		plu.ui.Scroll.prototype._handleMouseUp = function(a) {
			this._showBar || this._inContent || plu.element.removeClass(this._bar, "scroll-bar-visible");
			this._mouseMoveListener.cancel();
			this._mouseUpListener.cancel();
			this._mouseUpListener = this._mouseMoveListener =
				null;
			this._mouseY = void 0;
			this._mouseDown = !1
		};
		plu.ui.Scroll.prototype._handleUpBtnMouseDown = function(a) {
			var b = this;
			a = document;
			b._ele.scrollTop -= 20;
			this._mouseDown = setInterval(function() {
				b._ele.scrollTop -= 10
			}, 50);
			this._mouseUpListener = plu.element.listen(a, "mouseup", this._handleUpBtnMouseUp, this)
		};
		plu.ui.Scroll.prototype._handleUpBtnMouseUp = function(a) {
			clearInterval(this._mouseDown);
			this._mouseUpListener.cancel();
			this._mouseUpListener = null;
			this._mouseDown = !1
		};
		plu.ui.Scroll.prototype._handleDownBtnMouseDown =
			function(a) {
				var b = this;
				a = document;
				b._ele.scrollTop += 20;
				this._mouseDown = setInterval(function() {
					b._ele.scrollTop += 10
				}, 50);
				this._mouseUpListener = plu.element.listen(a, "mouseup", this._handleDownBtnMouseUp, this)
			};
		plu.ui.Scroll.prototype._handleDownBtnMouseUp = function(a) {
			clearInterval(this._mouseDown);
			this._mouseUpListener.cancel();
			this._mouseUpListener = null;
			this._mouseDown = !1
		};
		plu.ui.Scroll.prototype._handleResize = function(a) {
			this.update()
		};
		plu.ui.Scroll.prototype._handleScroll = function(a) {
			(this._contentHeight =
				this._content.offsetHeight || 1) > this._containerHeight && (this._updateThumb(), plu.element.addClass(this._bar, "scroll-bar-visible"), plu.messages.post("scroll", this._id + "Scroll", this._barHeight - this._thumbHeight - this._thumbTop))
		};
		plu.ui.Scroll.prototype._handleMouseOver = function(a) {
			!this._showBar && this._barVisible && plu.element.addClass(this._bar, "scroll-bar-visible");
			this._inContent = !0
		};
		plu.ui.Scroll.prototype._handleMouseOut = function(a) {
			this._showBar || !this._barVisible || this._mouseDown || plu.element.removeClass(this._bar,
				"scroll-bar-visible");
			this._inContent = !1
		};
		plu.ui.Scroll.prototype._getDomCss = function(a, b) {
			return a.currentStyle ? a.currentStyle[b] : document.defaultView.getComputedStyle(a, !1)[b]
		};
		plu.ui.Scroll.prototype.update = function(a) {
			var b = this._bar,
				c = this._barUp,
				e = this._barDown,
				f = this._containerHeight = this._ele.offsetHeight || 1,
				h = this._offsetTop,
				k = this._offsetBottom,
				c = c ? parseInt(this._getDomCss(c, "height")) : 0,
				e = e ? parseInt(this._getDomCss(e, "height")) : 0,
				f = this._barHeight = f - h - k - c - e;
			0 < f && (b.style.top = h + "px", b.style.height =
				f + "px", this._updateContent(a))
		};
		plu.ui.Scroll.prototype.updateContent = function(a) {
			this._updateContent(a)
		};
		plu.ui.Scroll.prototype._updateContent = function(a) {
			var b = this._thumb,
				c = this._contentHeight = this._content.offsetHeight || 1;
			if (c <= this._containerHeight) return this._barVisible && plu.element.removeClass(this._bar, "scroll-bar-visible"), this._barVisible = !1;
			this._barVisible || a || plu.element.addClass(this._bar, "scroll-bar-visible");
			this._barVisible = !0;
			var e = this._scrollTop = this._ele.scrollTop;
			a = this._thumbHeight =
				this._barHeight * this._containerHeight / c;
			c = this._thumbTop = this._barHeight * e / c;
			b.style.top = c + "px";
			b.style.height = a + "px";
			return !0
		};
		plu.ui.Scroll.prototype._updateThumb = function() {
			var a = this._thumb,
				b = this._scrollTop = this._ele.scrollTop,
				b = this._thumbTop = this._barHeight * b / this._contentHeight;
			a.style.top = b + "px"
		}
	})();
	qun.star.util = {};
	window.util = window.util || {};
	plu.util = {};
	(function() {
		var a = plu.util;
		a.enfield = function(a) {
			$.map(options || {}, function(c, e) {
				return e ? a[c] || 0 : 0
			})
		};
		a.defield = function() {}
	})();
	(function(a, b) {
		var c = !1,
			e = /tga\.plu/;
		/www\.plu/.exec(window.location.host) || (c = !0);
		a.url = function(a) {
			if (/faq/.exec(a)) return a;
			if (c) return e.exec(a) || /dc\.plu/.exec(a) || /game\.plu/.exec(a) || /pay\.plu/.exec(a) ? a : a.replace(/(www\.)?plu\./, "tga.plu.");
			if (/bbs\.tga/.exec(a)) return a;
			a = a.replace(e, "plu");
			return a.replace(/\/\/plu\./, "//www.plu.")
		};
		"plu" == (a.url.site = c ? "tga" : "plu") && b(".topbar-search form").attr("action", "http://www.plu.cn/search")
	})(window.util, jQuery);
	qun.star.template.recommedLive = {};
	qun.star.template.recommedLive.items = function(a) {
		var b = "";
		a = a.items;
		for (var c = a.length, e = 0; e < c; e++) var f = a[e],
			b = b + ('<div class="list-item"><div class="list-item-thumb"><a href="' + soy.$$escapeHtml(f.liveUrl) + '" class="list-item-thumb-a" title="' + soy.$$escapeHtml(f.liveTitle) + '" target="_blank" data-spm="tgastar.room.3.' + soy.$$escapeHtml(f.index) + '.1"><span class="list-item-mask"><i class="list-item-mask-icon"></i></span><img class="async-image" src="http://res2.plures.net/content/images/pixel.gif"  alt="' + soy.$$escapeHtml(f.liveTitle) +
				'" data-image="' + soy.$$escapeHtml(f.liveThumb) + '"></a>' + (f.match ? '<div class="video-list-match"></div>' : "") + (f.activity ? '<div class="video-list-activity"></div>' : "") + (f.tag ? '<div class="ending-recommend-live-tag">' + soy.$$escapeHtml(f.tag) + "</div>" : "") + '<a href="' + soy.$$escapeHtml(f.roomUrl) + '" class="list-item-thumb-avatar" title="' + soy.$$escapeHtml(f.roomName) + '" target="_blank" data-spm="tgastar.room.3.' + soy.$$escapeHtml(f.index) + '.2"><img class="async-image" src="http://res2.plures.net/content/images/pixel.gif" data-image="' +
				soy.$$escapeHtml(f.roomLogo) + '"></a><div class="list-item-info"><a class="list-item-host" href="' + soy.$$escapeHtml(f.roomUrl) + '" target="_blank" title="' + soy.$$escapeHtml(f.roomName) + '">' + soy.$$escapeHtml(f.roomName) + '</a></div></div><h2 class="list-item-tit"><a href="' + soy.$$escapeHtml(f.liveUrl) + '" title="' + soy.$$escapeHtml(f.liveTitle) + '" target="_blank" data-spm="tgastar.room.3.' + soy.$$escapeHtml(f.index) + '.4">' + soy.$$escapeHtml(f.liveTitle) + '</a></h2><div class="list-item-metas live-item-metas"><span class="list-item-meta list-item-meta-game"><a href="' +
				soy.$$escapeHtml(f.gameUrl) + '" target="_blank" data-spm="tgastar.room.3.' + soy.$$escapeHtml(f.index) + '.5">' + soy.$$escapeHtml(f.gameName) + '</a></span><div class="list-item-meta live-item-meta"><i class="list-item-icon online-icon"></i><span>' + soy.$$escapeHtml(f.views) + "</span></div></div></div>");
		return b
	};
	qun.star.widget.recommendlive = {};
	(function(a, b, c) {
		var e = plu.messages,
			f = qun.star.template.recommedLive,
			h = "http://" + test + "api.plu.cn/tga/streams/featured",
			k = 0;
		widget.recommedlive = function(c, p, r, t) {
			var A = widget(c),
				H = A.find(".recommed-live-content"),
				s = roominfo(),
				G = r || 6,
				w = [],
				D = t || "?from=livetuijian";
			(function() {
				k++;
				var c = a.roomInfo && 5 == a.roomInfo.Type ? {
					"sort-by": "kespa",
					game: window.gameId.split(",")[0]
				} : {
					"max-results": G,
					exclude: s.domain,
					game: window.gameId.split(",")[0]
				};
				return b.ajax({
					url: h,
					cache: !0,
					dataType: "jsonp",
					jsonpCallback: "_recommed_live_callback_" +
						k,
					data: c
				})
			})().then(function(a) {
				if (a = a.data) {
					var c = 0,
						h = b.map(a.items, function(a) {
							if (s.id != parseInt(a.channel.id)) {
								c++;
								var b, e, f, h = a.channel;
								h.tag && ("\u8d5b\u4e8b" == h.tag ? b = !0 : "\u6d3b\u52a8" == h.tag ? e = !0 : f = h.tag);
								return {
									tag: f,
									match: b,
									activity: e,
									liveUrl: "/" + h.domain + D,
									liveTitle: h.status,
									liveThumb: a.preview,
									roomUrl: "/" + h.domain + D,
									roomLogo: h.avatar,
									roomName: h.name,
									gameName: a.game[0].Name,
									gameUrl: util.url("http://longzhu.com/games/" + a.game[0].id) + "?from=livetuijian",
									views: a.viewers,
									index: c
								}
							}
						});
					e.post("load",
						"recommend-live", a.items);
					H.html(f.items({
						items: h
					}));
					A.$ele && A.$ele.show();
					e.post("update", "page");
					for (a = 0; a < w.length; a++) h = w[a], "function" === typeof h && h()
				}
			});
			return {
				addLoadedCallback: function(a) {
					w.push(a)
				}
			}
		}
	})(window, jQuery);
	qun.star.model.gradeManager = {};
	(function() {
		plu.model.gradeManager = {};
		plu.model.gradeManager.getGrade = function() {
			return "\u9752\u94dc1,\u9752\u94dc2,\u9752\u94dc3,\u9752\u94dc4,\u9752\u94dc5,\u767d\u94f61,\u767d\u94f62,\u767d\u94f63,\u767d\u94f64,\u767d\u94f65,\u5b9d\u77f31,\u5b9d\u77f32,\u5b9d\u77f33,\u5b9d\u77f34,\u5b9d\u77f35,\u9ec4\u91d11,\u9ec4\u91d12,\u9ec4\u91d13,\u9ec4\u91d14,\u9ec4\u91d15,\u738b\u80051,\u738b\u80052,\u738b\u80053,\u738b\u80054,\u738b\u80055,\u4f20\u8bf41,\u4f20\u8bf42,\u4f20\u8bf43,\u4f20\u8bf44,\u4f20\u8bf45"
		}
	})();
	qun.star.model.ChatTab = {};
	(function() {
		var a = 1;
		plu.model.ChatTab = function(b) {
			b = b || {};
			this.id = "chat-tab-" + a++;
			this.titleName = b.titleName;
			this.contentId = b.contentId;
			this.index = b.index;
			this.width = b.width;
			this.needInit = b.needInit;
			this.isShow = b.isShow
		}
	})();
	qun.star.widget.chat = {};
	(function(a, b, c) {
		function e() {
			if (r) {
				var a = "",
					c = "";
				"mediakind1" == p ? (a = "\u96f7\u6b7b\u6211", c = "thunder") : "mediakind2" == p && (a = "\u6e9c\u6e9c\u7334", c = "yomonkey");
				b(".chat-barrage").remove();
				b("<div>").addClass("chat-barrage").html('<div class="chat-barrage-icon chat-barrage-' + c + '"></div>[' + a + "]:").appendTo(".chatroom-textarea");
				b("#chatroom-input").css({
					"text-indent": 95
				})
			}
		}

		function f(b, c) {
			function e(c) {
				l = !0;
				a.setTimeout(f, 1E3 * c);
				b(c);
				p++
			}

			function f() {
				l = !1;
				m = 0;
				c()
			}

			function h() {
				p = 0
			}
			var k = {},
				m, p = 0,
				l;
			f();
			k.set = function() {
				if (!l && (m++, "4" == a.roomType && 3 > m && e(3), 3 == m)) {
					switch (p) {
						case 0:
							d = 3;
							break;
						case 1:
							d = 5;
							break;
						case 2:
							d = 10;
							break;
						case 3:
							d = 15;
							a.setTimeout(h, 4E4);
							break;
						default:
							d = 20
					}
					e(d)
				}
			};
			k.isLock = function() {
				return l
			};
			return k
		}
		var h = plu.messages,
			k = plu.string.similarity,
			m, p = "mediakind1",
			r = !1,
			t = 1,
			A = "ffffff",
			H = !1,
			s = !1;
		h.receive("styleChange", "ui-barrage", function(a) {
			p = a;
			e(a);
			H = !0
		}).receive("styleOn", "ui-barrage", function(a) {
			H = r = !0;
			e()
		}).receive("styleOff", "ui-barrage", function(a) {
			r = !1;
			H = !0;
			b(".chat-barrage").remove();
			b("#chatroom-input").css({
				"text-indent": 0
			})
		}).receive("positionChange", "ui-barrage", function(a) {
			t = a;
			H = !0
		}).receive("colorChange", "ui-barrage", function(a) {
			A = a;
			H = !0
		}).receive("onScrollShow", "chatroom-loadmore", function() {
			s = !0
		});
		plu.widget.chat = function() {
			function c(a) {
				a == ta.contentId && (schedule = plu.widget.schedule(scheduleId, {
					15: "bns",
					7: "cf",
					23: "da",
					5: "dnf",
					31: "dzs",
					33: "eafifa",
					29: "hs",
					4: "lol",
					19: "nba2k",
					14: "nz",
					6: "sc",
					3: "sc2",
					32: "smite",
					9: "speed",
					16: "tps",
					10: "x5",
					11: "xd"
				}[gameId] || "other"), schedule.render(b("#chatroom")[0]))
			}

			function e() {
				Y.loadUserInfo();
				Y.checkLogin(function() {}, function() {
					L.blur();
					Y.login()
				})
			}

			function D(a) {
				a.preventDefault();
				var c = Y.getCurrentUser();
				if (c && !y.isLock()) {
					var e = L.val(),
						e = b.trim(e);
					if (T && e == T) plu.messages.post("show", "msgtip", {
						text: "\u8bf7\u52ff\u5728\u77ed\u65f6\u95f4\u5185\u8fde\u7eed\u53d1\u5e03\u91cd\u590d\u6d88\u606f"
					});
					else if ("" !== e) {
						if (H)
							if (r) {
								var f = "thunder";
								"mediakind2" == p && (f = "yomonkey");
								e = e.replace(/\[em_([0-9]*)\]/g, "");
								if ("" == e) return;
								X.sendTscreenGift(f, e, 1, t, "0x" + A, B.isAdmin(c)).done(function(a) {
									var c =
										b.extend({}, Y.getCurrentUser(), !0);
									c.grade = c.grade.CurrentGrade;
									x(c, a.profiles.content, moment(), t, "0x" + A, f, null, "", !0);
									plu.messages.post("change", "usercurrency", {
										currency: a.rest
									});
									plu.messages.post("loadGrade", "ui-userGrade", a)
								}).fail(function(a) {
									if (a.lack) plu.ui.PayDialog.setVisible(!0);
									else throw Error("\u70ab\u5f69\u5f39\u5e55\u53d1\u9001\u5931\u8d25");
								})
							} else X.sendTscreenMsg(e, B.isAdmin(c), t, "0x" + A).done(function(a) {
								T = e;
								clearTimeout(T);
								setTimeout(function() {
									T = ""
								}, 3E4);
								x(a.user, a.content, a.time,
									a.style, a.color, "", null, "", !0);
								B.isAdmin(c) || y.set()
							}).fail(function(a) {
								a instanceof messagebus.BlockError && (a = parseInt(a.day) == a.day ? "\u60a8\u5df2\u88ab\u7981\u8a001\u5929" : "\u60a8\u5df2\u88ab\u7981\u8a00", plu.messages.post("show", "msgtip", {
									text: a
								}))
							});
						else X.sendChatMsg(e, B.isAdmin(c)).done(function(a) {
							T = e;
							clearTimeout(T);
							setTimeout(function() {
								T = ""
							}, 3E4);
							x(a.user, a.content, a.time, "", "", "", 1, "", !0);
							B.isAdmin(c) || y.set()
						}).fail(function(a) {
							a instanceof messagebus.BlockError && (a = parseInt(a.day) == a.day ?
								"\u60a8\u5df2\u88ab\u7981\u8a001\u5929" : "\u60a8\u5df2\u88ab\u7981\u8a00", plu.messages.post("show", "msgtip", {
									text: a
								}))
						});
						setTimeout(function() {
							L.val("")
						}, 1)
					}
				}
			}

			function v(a, c) {
				var e = !1;
				N[a] ? b.each(N[a], function(a, b) {
					b && c && .6 <= k(b, c) && (plu.log(c), e = !0)
				}) : N[a] = [];
				1 < N[a].length && N[a].splice(0, 1);
				c && N[a].push(c);
				return e
			}

			function x(a, b, c, e, f, g, h, k, l) {
				b && 20 < b.length && v(a.id, b) || (k || plu.messages.post("chat", "chatroom", {
					user: a,
					content: b,
					time: c,
					style: e,
					color: f,
					kind: g
				}), e = c.format("HH:mm"), b = {
					uid: a.id,
					nickname: a.name.replace(/^\s*$/g,
						"\u53e3\u53e3"),
					host: B.isHost(a),
					vip: !1,
					fansMedal: a.fansMedal,
					manager: B.isManager(a),
					grade: a.grade,
					content: b,
					time: e,
					fromApp: h && 1 != h
				}, 10 > b.grade && (b.grade = ""), 15 < b.grade && (b.highgrade = !0), B.isHost(a) ? (b.manager = !1, b.vip = !1, b.grade = "") : b.host = !1, B.isManager(a) && (b.vip = !1), B.isAdmin(a) || (b.content = b.content), g && (b.danmaku = !0), a = ja.normalMessage(b), a = a.replace(/\[em_([0-9]*)\]/g, "<img src=http://res.plures.net/lib/jquery/plugin/qqface/face/$1.gif>"), J(a, c, "", l))
			}

			function z(a) {
				var b = a.type,
					c = a.username;
				if (a = a.usergrade) {
					var e = '<div class="chat-msg-grade msg-grade-' + a;
					10 < a && (e += " msg-bigger-icon");
					e += '"></div>'
				} else e = "";
				if (c) {
					switch (b) {
						case 0:
							b = '<div class="chat-msg chatroom-message-system">' + e + '<span class="chatroom-message-vip">[' + c + "]</span>\u5df2\u88ab\u8bbe\u7f6e\u4e3aVIP</div>";
							break;
						case 1:
							b = '<div class="chat-msg chatroom-message-system">' + e + '<span class="chatroom-message-vip">[' + c + "]</span>\u5df2\u88ab\u53d6\u6d88VIP</div>";
							break;
						case 2:
							b = '<div class="chat-msg chatroom-message-system">' +
								e + '<span class="chatroom-message-vip">[' + c + "]</span>\u5df2\u88ab\u8bbe\u7f6e\u4e3a\u7ba1\u7406\u5458</div>";
							break;
						case 3:
							b = '<div class="chat-msg chatroom-message-system">' + e + '<span class="chatroom-message-vip">[' + c + "]</span>\u5df2\u88ab\u53d6\u6d88\u7ba1\u7406\u5458</div>";
							break;
						case 4:
							b = '<div class="chat-msg chatroom-message-system"><div class="chat-msg-vip"></div>' + e + '<span class="chatroom-message-vip">' + c + " </span>\u8fdb\u5165\u76f4\u64ad\u95f4</div>";
							break;
						case 5:
							b = '<div class="chat-msg chatroom-message-highuser">' +
								e + "<span>" + c + "</span>\u8fdb\u5165\u76f4\u64ad\u95f4</div>";
							break;
						case 6:
							b = '<div class="chat-msg chatroom-message-highuser">' + e + "<span>" + c + "</span>\u5728\u65e5\u8d21\u732e\u699c\u63d0\u5347\u5230\u4e86\u7b2c\u4e00</div>";
							break;
						default:
							return
					}
					J(b)
				}
			}

			function J(a, b, c, e) {
				setTimeout(function() {
					var b = document.createElement("div");
					b.innerHTML = a;
					b = b.childNodes[0];
					1 != b.nodeType && (b = b.nextSibling);
					if (200 <= da) {
						if (la && !e) {
							W < ka ? (P.push(a), W++) : (P.shift(), P.push(a));
							return
						}
						var c = O.shift();
						c.parentNode.removeChild(c);
						da--
					}
					na.appendChild(b);
					da++;
					O.push(b);
					K();
					plu.messages.post("update", "chat-content")
				}, 1)
			}

			function K() {
				la ? s || Q.scrollHeight > b("#chatroom-scroll").height() && plu.messages.post("show-button", "chatroom-loadmore", "", !0) : Q.scrollTop = Q.scrollHeight
			}

			function l(c) {
				var e = (a.userManager = c) && c.isValid;
				c ? (u(""), R.html("\u53d1\u9001"), c.grade && c.grade.CurrentGrade && !e && (c = b("#chatroom-verification"), 0 == c.size() ? L.after('<div class="chatroom-verification" id="chatroom-verification"><i class="chatroom-verification-icon"></i>\u804a\u5929\u9700<a href="#" class="chatroom-verification-btn" onclick="verificationDialog();return false;">\u7ed1\u5b9a\u624b\u673a</a></div>') :
					c.html('<div class="chatroom-verification" id="chatroom-verification"><i class="chatroom-verification-icon"></i>\u804a\u5929\u9700<a href="#" class="chatroom-verification-btn" onclick="verificationDialog();return false;">\u7ed1\u5b9a\u624b\u673a</a></div>'))) : u("\u767b\u5f55\u53c2\u4e0e\u804a\u5929\uff0c\u7545\u4eab\u4e92\u52a8\u7279\u6743")
			}

			function q() {
				var c = a.userManager;
				l(c);
				c.grade.CurrentGrade >= c.safeGrade && b("#chatroom-verification").hide();
				h.post("update", "barrage", c, !0)
			}

			function u(a) {
				L[0].placeholder =
					a;
				L[0].value = "";
				L[0].onblur = null;
				L.focus(function() {})
			}
			if (m) return m;
			var F = m = {},
				I = b("#chatroom-messages"),
				R = b("#chatroom-post-button"),
				S = b("#chatroom-emotion"),
				ca = b("#chatroom-post-button-countdown"),
				ha = b("#chatroom-post-button-disable"),
				M = ca.height(),
				L = b("#chatroom-input"),
				T, N = {},
				ja = qun.star.template.chatroom,
				fa = document,
				Q = fa.getElementById("chatroom-scroll"),
				da = 0,
				na = fa.getElementById("chatroom-messages"),
				O = [];
			b("#chatroom-scroll");
			var Y = loginmanager(),
				X = messagebus(),
				B = roominfo(),
				y = f(function(a) {
					0 <
						a && (a *= 1E3, ha.css("z-index", 101).css("display", "block"), ca.css("height", M).css("z-index", 100).css("display", "block").animate({
							height: 0
						}, a, "linear"))
				}, function() {
					ca.css("display", "none").stop();
					ha.css("display", "none").stop()
				});
			b("#chatroom-editor");
			b("#week-rank");
			X.startMbStream();
			L[0].onkeypress = function(b) {
				b = b ? b : a.event;
				13 == b.keyCode && D(b)
			};
			R.click(D);
			h.receive("addSystemMsg", "chat", z).receive("hostjoin", "chat", z).receive("fifteenUserjoin", "chat", z).receive("onSend", "GiftMsgIo", function(a) {}).receive("onLoad",
				"GiftMsgIo",
				function(a) {}).receive("append", "chat", function(a) {
				J(a.html)
			});
			b(a).on("resize", K);
			h.receive("update", "io-roominfo", function(a) {}).receive("rolechange", "menuopration", function(a) {
				a = qun.star.template.chatroom.roleMessage(a);
				J(a)
			});
			var fa = document,
				ka = 200,
				la = !1,
				P = [],
				W = 0;
			h.receive("chatlock-close", "chatlock", function() {
				la = !1;
				var a = W;
				W = 0;
				for (var b = 2E3 / a, c = 0; c < a; c++)(function(a) {
					setTimeout(function() {
						J(P.shift())
					}, a * b)
				})(c)
			}).receive("chatlock-open", "chatlock", function() {
				la = !0
			});
			setTimeout(function() {},
				12E4);
			X.onChatMsg.listen(function(a) {
				var b = Y.getCurrentUser();
				b && b.id === a.user.id || x(a.user, a.content, a.time, a.style, a.color, a.kind, a.via)
			});
			X.onChatLimit.listen(function(a) {
				a && (a = ja.normalMessage({
					nickname: "",
					system: !0,
					time: moment().format("HH:mm"),
					content: "\u804a\u5929\u5ba4\u62e5\u6324\uff0c\u6392\u961f\u7b49\u5019\u4e2d..."
				}), I.html(a))
			});
			L.focus(e).blur();
			R.click(e);
			b("#chatroom-emotion").qqFace({
				id: "chatroom-emotion-selector",
				assign: "chatroom-input",
				path: "http://res.plures.net/lib/jquery/plugin/qqface/face/",
				parent: "#chatroom .chatroom-controls"
			});
			R.hover(function() {
				R.addClass("chat-send-hover")
			}, function() {
				R.removeClass("chat-send-hover")
			});
			S.hover(function() {
				S.addClass("chat-emot-icon-hover")
			}, function() {
				S.removeClass("chat-emot-icon-hover")
			});
			if (b("#week-rank").length) {
				var wa = new plu.ui.Scroll("week-rank");
				h.receive("content-action", "chat-tab-ui", function(a) {
					"chatroom-tab-wr" == a && wa.update()
				})
			}
			var ta;
			scheduleId && (ta = new plu.model.ChatTab({
				titleName: "\u8d5b\u7a0b\u8868",
				contentId: "schedule",
				needInit: !0,
				index: 2
			}), h.post("add", "tab-model", ta, !0).receive("content-init", "chat-tab-ui", c));
			h.receive("loadGrade", "ui-userGrade", function(b) {
				a.userManager.grade.CurrentGrade = b.profiles.usergrade;
				a.userManager.grade.CurrentGradeExp = b.profiles.userexp[0];
				a.userManager.grade.NextGradeExp = b.profiles.userexp[2];
				a.userManager.grade.CurrentExp = b.profiles.userexp[1];
				q()
			});
			Y.onChange.listen(function(a) {
				l(a.currentUser)
			});
			Y.onChange.first.done(function(a) {
				l(a.currentUser)
			});
			h.receive("pass", "verification", q);
			return F
		}
	})(window,
		jQuery);
	qun.star.live = {};
	qun.star.live.msgtip = {};
	(function(a, b, c) {
		function e() {
			h || (h = b("#msgtip"));
			return h
		}

		function f(a) {
			clearTimeout(k);
			e().text(a).show();
			k = setTimeout(function() {
				e().fadeOut()
			}, 5E3)
		}
		b = jQuery;
		var h, k;
		plu.messages.receive("show", "msgtip", function(a) {
			f(a.text)
		})
	})(window, jQuery);
	qun.star.chatroom = {};
	qun.star.chatroom.loadmore = {};
	(function() {
		function a() {
			if (p) {
				var a = p.outerHeight(),
					a = (15 < a ? a : 0) + r.outerHeight();
				k.css("top", a)
			}
		}

		function b() {
			t && t.updateContent()
		}

		function c() {
			t && t.update()
		}

		function e(a) {
			k = $("#chatroom-more-button");
			m = $("#chatroom-scroll");
			$("#chatroom-scroll-container");
			p = $("#chatroom-top-messages");
			r = $("#business-notice");
			a ? f() : 0 < m.scrollTop() && f()
		}

		function f() {
			if (0 == h || 1 == h) {
				var a = p.outerHeight(),
					a = (15 < a ? a : 0) + r.outerHeight();
				k.css("top", a).show();
				h = 2
			}
		}
		var h = 0,
			k, m, p, r, t;
		plu.messages.receive("scroll", "chatroom-scroll",
			function(a) {
				0 == h && e()
			}).receive("click", "chatroom-more-button", function(a) {
			h = 2;
			2 == h && (k.hide(), h = 1);
			t = new plu.ui.Scroll("chatroom");
			m.removeClass("chatroom-scroll-disable");
			plu.messages.receive("update", "chat-content", b);
			plu.messages.receive("resize", "chat", c);
			plu.messages.post("onScrollShow", "chatroom-loadmore", !0)
		}).receive("resize", "page", function(a) {
			0 == h ? e() : 2 == h ? 0 >= m.scrollTop() && 2 == h && (k.hide(), h = 1) : !t && 0 < m.scrollTop() && f()
		}).receive("change", "topmessage", a).receive("change", "businessNoticeUi",
			a).receive("show-button", "chatroom-loadmore", function() {
			0 == h && e(!0)
		})
	})();
	qun.star.view = {};
	var view = window.view || {};
	plu.view = {};
	(function() {})();
	qun.star.template.live = {};
	qun.star.template.live.header = function(a) {
		return '<div class="header container"><div class="header-inner"><div class="main"><div class="room-star-shop"><a href="#" class="room-star-shop-link"><i class="room-star-shop-icon"></i><span class="room-star-shop-text">\u4e3b\u64ad\u5e97\u94fa</span></a><div class="room-star-shop-value">\u8499\u903c\u5916\u8bbe\u5e97</div><i class="feed-border"></i></div><div class="feed-count feed"><a href="javascript:;" class="feed-button"><i class="feed-icon"></i><span class="feed-text">\u8ba2\u9605\u4e3b\u64ad</span></a><div class="feed-count-value"><i class="feed-num-icon"></i><span id="room-subscribe" class="feed-count-text"></span></div><i class="feed-border"></i></div><a href="/520"><img class="room-avatar" alt="\u5c0f\u82cdMM" width="100" height="100" src="http://img.plures.net/c1da/c0ac/0218/86bc/a0b7/752c/1f3e/e107.jpg" data-image="http://img.plures.net/c1da/c0ac/0218/86bc/a0b7/752c/1f3e/e107.jpg"><i id="room-live-icon" class="room-live-icon" style="display: none;"></i></a><div class="room-info clearfix"><a href="#" class="room-name">\u5c0f\u82cdMM</a><div class="grade-type" onmouseover="handle(\'mouseover\', \'grade\', this);" onmouseout="handle(\'mouseout\', \'grade\', this)"><i class="grade-icon grade-menu"></i><div class="grade-wrap"><div class="grade-arrow"></div><div class="grade-arrow-inner"></div><div class="grade-upgrade"><div class="grade-name" id="upgrade1"><i class="grade-icon grade-sub-5"></i><span></span></div><div class="grade-progess"><i class="grade-progess-list grade-progess-list-sel"></i><i class="grade-progess-list grade-progess-list-sel"></i><i class="grade-progess-list grade-progess-list-sel"></i><i class="grade-progess-list grade-progess-list-sel"></i><i class="grade-progess-list"></i><i class="grade-progess-list"></i><i class="grade-progess-list"></i><i class="grade-progess-list"></i><i class="grade-progess-list"></i><i class="grade-progess-list"></i></div><div class="grade-name" id="upgrade2"><i class="grade-icon grade-sub-6"></i><span></span></div></div><div class="need-value">\u8ddd\u79bb\u5347\u7ea7<span id="next-grade"></span>\u8fd8\u6709<span class="need-value" id="need-value"></span>\u7ecf\u9a8c\u503c</div><div class="grade-detail"><a href="http://bbs.tga.plu.cn/thread-290003-1-1.html" target="_blank">\u7b49\u7ea7\u8be6\u60c5&gt;&gt;</a></div></div></div><div class="room-stars"><i class="room-star-short room-star-icon-s1">\u8d5e</i><div class="room-star-wrap"><div class="room-star-arrow"></div><div class="room-star-arrow-inner"></div><div class="room-star-wrap-tit"><a href="#" target="_blank" class="room-star-wrap-info">\u67e5\u770b\u8be6\u60c5>></a>\u201c<span>\u8d5e</span>\u201d\u5468\u661f\u699c</div><div class="room-star-wrap-con"><div class="room-star-wrap-list"><i class="room-star-list-no">01</i><span class="room-star-list-name">\u5f53\u65f6\u6211\u5c31\u61f5\u903c\u4e86</span><span class="room-star-list-value">225151</span></div><div class="room-star-wrap-list"><i class="room-star-list-no">02</i><span class="room-star-list-name">\u5f53\u65f6\u6211\u5c31\u61f5\u903c\u4e86</span><span class="room-star-list-value">225151</span></div><div class="room-star-wrap-list"><i class="room-star-list-no">03</i><span class="room-star-list-name">\u5f53\u65f6\u6211\u5c31\u61f5\u903c\u4e86\u5f53\u65f6\u6211\u5c31\u61f5\u903c\u4e86</span><span class="room-star-list-value">225151</span></div></div></div></div><div class="room-values" style="display: block;"><a href="#" onclick="return false" title="\u8d60\u9001\u4e3b\u64ad\u9c9c\u82b1\uff0c\u589e\u957f\u9c9c\u82b1\u503c"><img class="room-gift-icon vertical-middle" src="http://res2.plures.net/content/images/pixel.gif"><div class="room-flower-value"><i class="room-value-arrow"></i><i class="room-value-right"></i><span id="room-flower" class="room-value"></span></div></a></div></div><div class="room-title"><span>TGA Star  </span><span class="room-title-sep">|</span><span> \u56fd\u5185\u77e5\u540d\u82f1\u96c4\u5973\u89e3\u8bf4</span><span class="room-title-sep">|</span><span>\u82f1\u96c4\u8054\u76df2012-2013\u8d5b\u5b63\u5168\u7403\u4e2d\u6587\u5b98\u65b9\u89e3\u8bf4</span></div><div class="room-desc">\u4eab\u53d7\u7ade\u6280\uff0c\u70ed\u7231\u751f\u6d3b~\uff01\u5c0f\u82cd\u6dd8\u5b9d\u5e97\uff0c\u6b22\u8fce\u6765\u770b\u770b~<a href="http://chixiaocang.taobao.com/" target="_blank">chixiaocang.taobao.com/</a></div><div class="navs"><a href="http://v.plu.cn/520" target="_blank" class="nav-videos" hidefocus="true"><i class="nav-videos-icon"></i><span>\u89c6\u9891</span></a><a id="nav-admin" class="hidden nav-admin" href="/520/Setting" target="_blank" hidefocus="true">\u623f\u95f4\u7ba1\u7406</a></div></div><div class="side"><div id="fans-ranking" class="fans-ranking" onmouseover="handle(\'mouseover\',\'fans-ranking\',this);" onmouseout="handle(\'mouseout\',\'fans-ranking\',this)"><a class="fans-ranking-title" href="#" onclick=";return false;" title="\u5b9e\u65f6\u66f4\u65b0">\u65e5\u8d21\u732e</a><div class="fans-ranking-con " id="fans-ranking-con" data-list=""></div></div></div></div></div>'
	};
	qun.star.template.live.channels = function(a) {
		var b = "";
		a = a.channels;
		for (var c = a.length, e = 0; e < c; e++) b += qun.star.template.live.channel(a[e]);
		return b
	};
	qun.star.template.live.channel = function(a) {
		return '<a class="live-channel" href="#" data-channel="' + soy.$$escapeHtml(a.id) + "\" onclick=\"handle('click', 'livechannel', this);return false\">" + soy.$$escapeHtml(a.name) + "</a>"
	};
	qun.star.template.live.topRecommend = function(a) {
		var b = "";
		a = a.channels;
		for (var c = a.length, e = 0; e < c; e++) var f = a[e],
			b = b + ('<a href="' + soy.$$escapeHtml(f.url) + '" class="setting-top-con-live" target="_blank"><img class="setting-top-con-live-thumb async-image" src="http://res2.plures.net/content/images/pixel.gif" data-image="' + soy.$$escapeHtml(f.thumb) + '" alt="' + soy.$$escapeHtml(f.title) + '" /><img class="setting-top-con-live-avatar async-image" src="http://res2.plures.net/content/images/pixel.gif" data-image="' +
				soy.$$escapeHtml(f.avatar) + '" alt="' + soy.$$escapeHtml(f.roomName) + '" /><i class="setting-top-con-live-icon room-live-icon" style="display: block;"></i><span class="setting-top-con-live-mask"></span><span class="setting-top-con-live-name">' + soy.$$escapeHtml(f.roomName) + '</span><span class="setting-top-con-live-title">' + soy.$$escapeHtml(f.title) + "</span>" + (f.tag ? '<span class="setting-top-con-live-tag">' + soy.$$escapeHtml(f.tag) + "</span>" : "") + "</a>");
		return b
	};
	qun.star.view.LiveView = {};
	(function() {
		function a() {
			c.receive("click", "livechannel", plu.bind(this._onChannelClick, this))
		}
		var b = jQuery,
			c = plu.messages,
			e = qun.star.template.live;
		a.prototype._durationVisible = !1;
		a.prototype._onlineVisible = !1;
		a.prototype._getTitle = function() {
			this._title || (this._title = b("#live-title"));
			return this._title
		};
		a.prototype.setTitle = function(a) {
			this._getTitle().text(a)
		};
		a.prototype._getGame = function() {
			this._game || (this._game = b("#live-game"));
			return this._game
		};
		a.prototype._getPanrentGame = function() {
			this._parentGame ||
				(this._parentGame = b("#live-parent-game"));
			return this._parentGame
		};
		a.prototype._getGameLine = function() {
			this._gameLine || (this._gameLine = b("#live-parent-game-line"));
			return this._gameLine
		};
		a.prototype.setGame = function(a) {};
		a.prototype._getChannelsContainer = function() {
			this._channelsContainer || (this._channelsContainer = b("#live-channels-container"));
			return this._channelsContainer
		};
		a.prototype._getChannels = function() {
			this._channels || (this._channels = b("#live-channels"));
			return this._channels
		};
		a.prototype._setChannels =
			function(a) {
				this._channelsModel = a;
				1 < a.length && (a = b.map(a, function(a, b) {
					return {
						id: b,
						name: a.name
					}
				}), this._getChannelsContainer().html(e.channels({
					channels: a
				})), this._getChannels().show())
			};
		a.prototype._onChannelClick = function(a) {
			a = parseInt(a.getAttribute("data-channel"));
			(a = this._channelsModel[a]) ? this._play(a.code): plu.throwError("\u65e0\u6cd5\u83b7\u53d6\u9891\u9053\u76f4\u64ad\u4ee3\u7801")
		};
		a.prototype._getDuration = function() {
			this._duration || (this._duration = b("#live-duration"));
			return this._duration
		};
		a.prototype.setDuration = function(a) {
			this._getDuration().text(a);
			this._durationNum = a;
			this._durationTimer && clearInterval(this._durationTimer);
			this._durationTimer = setInterval(plu.bind(function() {
				var a = ++this._durationNum;
				this._getDuration().text(a)
			}, this), 6E4)
		};
		a.prototype._setDurationVisible = function(a) {
			this._durationVisible != a && (this._durationContainer || (this._durationContainer = this._getDuration().parent()), a ? this._durationContainer.show() : this._durationContainer.hide(), this._durationVisible = a)
		};
		a.prototype._getOnline =
			function() {
				this._online || (this._online = b("#live-online"));
				return this._online
			};
		a.prototype.setOnline = function(a) {
			this._getOnline().text(a)
		};
		a.prototype._setOnlineVisible = function(a) {
			this._onlineVisible != a && (this._onlineContainer || (this._onlineContainer = this._getOnline().parent()), a ? this._onlineContainer.show() : this._onlineContainer.hide(), this._onlineVisible = a)
		};
		a.prototype._getStatus = function() {
			this._status || (this._status = b("#live-status"));
			return this._status
		};
		a.prototype._getRoomStatus = function() {
			this._roomStatus ||
				(this._roomStatus = b("#room-status"));
			return this._roomStatus
		};
		a.prototype._getPlayer = function() {
			this._player || (this._player = b(".live-player").first());
			return this._player
		};
		a.prototype._play = function(a) {
			var b = this._getPlayer();
			a.match(/v\.qq\.com/) ? this._video = plu.media.vqqlive(b, a) : (a.match(/\.kukuplay\.com/) ? plu.media.fyzblive(b, a) : a.match(/\.twitch\.tv/) ? plu.media.vtwitchlive(b, a) : b.html(a), this._hideDanmakuPane());
			this._getRoomStatus().hide();
			this._getStatus().show();
			this._setOnlineVisible(!0);
			this._setDurationVisible(!0)
		};
		a.prototype._hideDanmakuPane = function() {
			var a = b("#barrage");
			a[0] && (a = a[0], a.style.visibility = "hidden", a.style.height = "0", a.style.width = "0", a.style.overflow = "hidden")
		};
		a.prototype.start = function(a) {
			this._play(a.channels[0].code);
			this.setTitle(a.title);
			this.setDuration(1);
			this._setChannels(a.channels)
		};
		a.prototype.stop = function(a) {
			this._video && this._video.stop && this._video.stop();
			this.setTitle(a.title);
			this._getPlayer().html("");
			this._getRoomStatus().show();
			this._getStatus().hide();
			this._setDurationVisible(!1);
			this._getChannels().hide();
			this._getChannelsContainer().html("");
			this._getDuration().text(1);
			this._setOnlineVisible(!1);
			this._durationTimer && clearInterval(this._durationTimer)
		};
		plu.view.LiveView = a
	})();
	qun.star.media = {};
	plu.media = {};
	qun.star.media.vfyzb = {};
	(function(a, b, c) {
		var e = 0;
		plu.media.fyzblive = function(a, c) {
			var k = b(a);
			k.attr("id", "fyzb" + e.toString());
			e++;
			var m;
			a: {
				if ((m = c.match(/.*flashvars=\"?\'?([^\"\'\s]*)\"?\'?/)) && m[1] && (m = decodeURIComponent(m[1]).match(/.*\"channel\":\"?\'?([^\"\'\s]*)\"?\'?/))) {
					m = m[1];
					break a
				}
				m = null
			}
			null !== m ? (window.fengyunconf = {
				width: "100%",
				height: "100%",
				tv: m
			}, k.html("<div id='feng-yun-player-wrap' style='width: 100%;height:100%'></div><script type='text/javascript' src='http://static.ws.kukuplay.com/support/fengyunplayerloader.js'>\x3c/script>")) : k.html(c)
		}
	})(window,
		jQuery);
	qun.star.media.vqq = {};
	(function(a, b, c) {
		function e(a) {
			return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" id="videoFlash" align="middle"><param name="movie" value="http://imgcache.qq.com/tencentvideo_v1/player/TencentPlayer.swf?max_age=86400&v=20140917&auto=1&vid=' + a + '" /><param name="quality" value="high" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="wmode" value="transparent" /><embed align="none" name="videoFlash" allowfullscreen="true" allowScriptAccess="always" loop="false" menu="false" play="true" pluginspage="http://www.macromedia.com/go/getflashplayer" src="http://imgcache.qq.com/tencentvideo_v1/player/TencentPlayer.swf?max_age=86400&v=20140917&auto=1&vid=' + a +
				'" type="application/x-shockwave-flash" wmode="transparent" /></object>'
		}

		function f(a) {
			var b = a.match(/.*src=\"?\'?([^\"\'\s]*)\"?\'?/);
			b || (b = a.match(/.*data=\"?\'?([^\"\'\s]*)\"?\'?/));
			return b && b[1]
		}
		var h = 0,
			k = 0,
			m, p;
		m = function() {
			p = b.Deferred();
			"undefined" !== typeof tvp ? p.resolve() : loadScript("http://imgcache.gtimg.cn/tencentvideo_v1/tvp/js/tvp.player_v2_jq.js?max_age=86400").done(function() {
				p.resolve()
			});
			return p.promise()
		}();
		plu.media.vqq = function(a, c) {
			function f() {
				m.then(function() {
					var a = new tvp.VideoInfo;
					a.setVid(t);
					player = new tvp.Player;
					player.create({
						type: 2,
						width: "100%",
						height: "100%",
						video: a,
						flashWmode: "opaque",
						autoplay: !0,
						modId: v
					})
				})
			}
			var h = b(a),
				p = {},
				t = r(c);
			if (plu.widget.portal.clientIsDesktop()) p = plu.PageData.get(), p.video && "True" == p.video.IsBulletScreen ? (p = e(t), window.__tscreen_onSend = function(a) {
				plu.messages.post("fullscreen-send", "ui-player", a)
			}) : p = e(t), h.html(p), window.__tenplay_onMessage = function(a, b) {
				switch (b) {
					case 0:
						plu.messages.post("start", "ui-player");
						break;
					case 1:
						plu.messages.post("pause",
							"ui-player");
						break;
					case 2:
						plu.messages.post("stop", "ui-player");
						break;
					case 3:
						plu.messages.post("resume", "ui-player")
				}
			};
			else {
				var v = "vqq" + k;
				k++;
				h.attr("id", v).html("");
				window.setTimeout(f, 1);
				return p
			}
		};
		plu.media.vqqlive = function(a, c, e) {
			function k() {
				m.then(function() {
					var a = new tvp.VideoInfo;
					a.setChannelId(v);
					player = new tvp.Player;
					player.create({
						type: 1,
						video: a,
						width: "100%",
						height: "100%",
						modId: J,
						flashWmode: "opaque",
						autoplay: !0,
						oninited: function() {
							D && r.html("");
							e && e()
						}
					})
				})
			}
			var r = b(a);
			a = {};
			var D = !1,
				v = t(f(c));
			if (plu.widget.portal && plu.widget.portal.clientIsDesktop()) {
				r.html('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" align="middle"><param name="movie" value="http://imgcache.qq.com/minivideo_v1/vd/res/TencentPlayerLive.swf?max_age=86400&auto=1&v=' + v + '&loadingswf=http://imgcache.qq.com/minivideo_v1/vd/res/skins/longzhu_loading.swf" /><param name="quality" value="high" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="wmode" value="transparent" /><embed wmode="opaque" flashvars="vid=' +
					v + "&amp;loadingswf=http://imgcache.qq.com/minivideo_v1/vd/res/skins/longzhu_loading.swf&amp;vurl=http://zb.v.qq.com:1863/?progid=" + v + '&amp;sktype=live&amp;funCnlInfo=TenVideo_FlashLive_GetChannelInfo&amp;funTopUrl=TenVideo_FlashLive_GetTopUrl&amp;funLogin=TenVideo_FlashLive_IsLogin&amp;funOpenLogin=TenVideo_FlashLive_OpenLogin&amp;funSwitchPlayer=TenVideo_FlashLive_SwitchPlayer&amp;txvjsv=2.0&amp;showcfg=1&amp;share=1&amp;full=1&amp;autoplay=1&amp;p=true" src="http://imgcache.qq.com/minivideo_v1/vd/res/TencentPlayerLive.swf?max_age=86400&amp;v=' +
					v + '" quality="high" name="tenvideo_flash_player_1429855293134" id="tenvideo_flash_player_1429855293134" bgcolor="#000000" width="100%" height="100%" align="middle" allowscriptaccess="always" allowfullscreen="true" type="application/x-shockwave-flash" pluginspage="http://get.adobe.com/cn/flashplayer/"></object><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" class="barrage-flash" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" id="videoFlash" align="middle"><param name="movie" value="http://r.plures.net/plu/tplayer/tplayer-ibug8gz4.swf" /><param name="quality" value="high" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="wmode" value="transparent" /><embed align="none" name="videoFlash" allowFullScreen="true" allowScriptAccess="always" loop="false" menu="false" play="true" pluginspage="http://www.macromedia.com/go/getflashplayer" src="http://r.plures.net/plu/tplayer/tplayer-ibug8gz4.swf" type="application/x-shockwave-flash" wmode="transparent" /></object>');
				window.__rp_ld1 && window.__rp_ld1.push("d" + (new Date).getTime());
				var x = !1,
					z = function() {
						if (!x) try {
							var a;
							if (-1 != navigator.appName.indexOf("Microsoft")) {
								var b = window.videoFlash;
								b && 1 < b.length && (b = b[0]);
								a = b
							} else a = document.videoFlash;
							var c = a.PercentLoaded();
							100 == Math.floor(c) ? window.__rp_ld1 && window.__rp_ld1.push("e" + (new Date).getTime()) : window.setTimeout(z)
						} catch (e) {
							window.setTimeout(z)
						}
					};
				window.setTimeout(z, 10);
				window.setTimeout(function() {
					x = !0
				}, 1E4)
			} else {
				var J = "vqqlive" + h;
				h++;
				r.attr("id", J).html("");
				k()
			}
			a.stop = function() {
				D = !0;
				p && p.reject()
			};
			return a
		};
		var r = function(a) {
				if (a) return (a = a.match(/\.qq\.com\/.*vid=([^&]*)/)) && a[1]
			},
			t = function(a) {
				if (a) return (a = a.match(/\.qq\.com\/.*cnlid=([^&]*)/)) && a[1]
			}
	})(window, jQuery);
	qun.star.media.vtwitch = {};
	(function(a, b, c) {
		var e = 0;
		plu.media.vtwitchlive = function(a, c) {
			var k = b(a);
			k.attr("id", "vtwitch" + e);
			e++;
			a: {
				var m;
				(m = c.match(/.*src=\"?\'?([^\"\'\s]*)\"?\'?/)) || (m = c.match(/.*data=\"?\'?([^\"\'\s]*)\"?\'?/));
				if (m = m && m[1])
					if (m = (m = m.match(/twitch\.tv\/.*channel=([^&]*)/)) && m[1]) {
						var p = '<object type="application/x-shockwave-flash" height="100%" width="100%" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=%twitchid%" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="never" /><param name="allowNetworking" value="internal" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel=%twtichid%&auto_play=true&start_volume=25" /></object>'.replace(/%twitchid%/, m),
							p = p.replace(/%twtichid%/, m);
						k.html(p);
						break a
					}
				k.html(c)
			}
		}
	})(window, jQuery);
	qun.star.widget.live = {};
	(function() {
		function a(a) {
			a.title && (e.setTitle(a.title), e.setGame(a.game));
			k != a.id && (e.start(a), k = a.id);
			m && (m = !1, window.__rp_ld1 && (p = window.setTimeout(function() {
				window.PT_internReport("ld1", "v", window.__rp_ld1.join("_"));
				try {
					var a = parseInt(window.__rp_ld1[0].substr(1)),
						c;
					b.each(window.__rp_ld1.reverse(), function(a, b) {
						c || 0 == b.indexOf("e") && (c = parseInt(b.substr(1)))
					});
					a && c && window.PT_internReport("ld2", "d", ((c - a) / 1E3).toFixed(1))
				} catch (e) {}
			}, 2E4)));
			h || (h = !0, c.post("start", "live"))
		}
		var b = jQuery,
			c = plu.messages,
			e = new plu.view.LiveView,
			f = pageData.defaultTitle,
			h = !1,
			k, m = !0,
			p;
		pageData.live ? a(pageData.live) : window.setTimeout(function() {
			c.post("stop", "live")
		}, 1E3);
		c.receive("onlinechange", "roomstatus", function(a) {
			e.setOnline(a)
		}).receive("livestart", "roomstatus", function(b) {
			a(b)
		}).receive("liveend", "roomstatus", function() {
			p && window.clearTimeout(p);
			h && (e.stop({
				title: f
			}), h = !1, c.post("stop", "live"))
		}).receive("liveduration", "roomstatus", function(a) {
			e.setDuration(parseInt(a / 60) || 1)
		})
	})();
	qun.star.widget.icheck = {};
	(function(a, b, c) {
		a.ichecked || (a.ichecked = function() {
			c = a.jQuery || a.Zepto;
			var e = {
				autoInit: !0,
				autoAjax: !0,
				tap: !0,
				checkboxClass: "icheckbox",
				radioClass: "iradio",
				checkedClass: "checked",
				disabledClass: "disabled",
				indeterminateClass: "indeterminate",
				hoverClass: "hover",
				callbacks: {
					ifCreated: !1
				},
				classes: {
					base: "icheck",
					div: "#-item",
					area: "#-area-",
					input: "#-input",
					label: "#-label"
				}
			};
			a.icheck = c.extend(e, a.icheck);
			var f = a.navigator.userAgent,
				h = /MSIE [5-8]/.test(f) || 9 > b.documentMode,
				k = /Opera Mini/.test(f),
				m = e.classes.base,
				p = e.classes.div.replace("#", m),
				r = e.classes.area.replace("#", m),
				t = e.classes.input.replace("#", m),
				A = e.classes.label.replace("#", m);
			delete e.classes;
			var H = {},
				s = {},
				G = new RegExp(m + "\\[(.*?)\\]"),
				w = function(a, b, c) {
					a && (b = G.exec(a)) && s[b[1]] && (c = b[1]);
					return c
				},
				D = a.getComputedStyle,
				v = a.PointerEvent || a.MSPointerEvent,
				x = "ontouchend" in a,
				z = /mobile|tablet|phone|ip(ad|od)|android|silk|webos/i.test(f),
				f = ["mouse", "down", "up", "over", "out"],
				J = a.PointerEvent ? ["pointer", f[1], f[2], f[3], f[4]] : ["MSPointer", "Down", "Up",
					"Over", "Out"
				],
				K = ["touch", "start", "end"],
				l = x && z || v,
				q = l ? x ? K[0] + K[1] : J[0] + J[3] : f[0] + f[3],
				u = l ? x ? K[0] + K[2] : J[0] + J[4] : f[0] + f[4],
				F = l ? x ? !1 : J[0] + J[1] : f[0] + f[1],
				I = l ? x ? !1 : J[0] + J[2] : f[0] + f[2],
				f = k ? "" : q + ".i " + u + ".i ",
				J = !k && F ? F + ".i " + I + ".i" : "",
				R, S, ca = !1 !== e.areaStyle ? 'position:absolute;display:block;content:"";top:#;bottom:#;left:#;right:#;' : 0,
				ha = function(c, e, f) {
					R || (R = b.createElement("style"), (b.head || b.getElementsByTagName("head")[0]).appendChild(R), a.createPopup || R.appendChild(b.createTextNode("")), S = R.sheet ||
						R.styleSheet);
					e || (e = "div." + (f ? r + f + ":after" : p + " input." + t));
					c = c.replace(/!/g, " !important");
					S && (S.addRule ? S.addRule(e, c, 0) : S.insertRule(e + "{" + c + "}", 0))
				};
			ha("position:absolute!;display:block!;outline:none!;" + (e.debug ? "" : "opacity:0!;z-index:-99!;clip:rect(0 0 0 0)!;"));
			(x && z || k) && ha("cursor:pointer!;", "label." + A + ",div." + p);
			ha("display:none!", "iframe.icheck-frame");
			var M = function(a, b, c, e, f, h, k) {
					if (e = a.className) return f = " " + e + " ", 1 === c ? h = b : 0 === c ? k = b : (h = b[0], k = b[1]), h && 0 > f.indexOf(" " + h + " ") && (f += h + " "),
						k && ~f.indexOf(" " + k + " ") && (f = f.replace(" " + k + " ", " ")), f = f.replace(/^\s+|\s+$/g, ""), f !== e && (a.className = f), f
				},
				L = function(a, b, e, f, h, k) {
					s[b] && (f = s[b], h = f.className, k = c(N(a, "div", h)), k.length && (c(a).removeClass(t + " " + h).attr("style", f.style), c("label." + f.esc).removeClass(A + " " + h), c(k).replaceWith(c(a)), e && ja(a, b, e)), s[b] = !1)
				},
				T = function(a, b, e, f, h) {
					e = [];
					for (f = a.length; f--;)
						if (b = a[f], b.type) ~"input[type=checkbox],input[type=radio]".indexOf(b.type) && e.push(b);
						else
							for (b = c(b).find("input[type=checkbox],input[type=radio]"),
								h = b.length; h--;) e.push(b[h]);
					return e
				},
				N = function(a, b, c, e) {
					for (; a && 9 !== a.nodeType;)
						if ((a = a.parentNode) && a.tagName == b.toUpperCase() && ~a.className.indexOf(c)) {
							e = a;
							break
						}
					return e
				},
				ja = function(a, b, e) {
					e = "if" + e;
					if (!1 !== s[b].callbacks) {
						if ("function" == typeof s[b].callbacks[e]) s[b].callbacks[e](a, s[b]);
						!1 !== s[b].callbacks[e] && c(a).trigger(e)
					}
				},
				fa = function(f, h, k, l) {
					f = T(f);
					for (var q = f.length; q--;) {
						var u = f[q],
							v = u.attributes,
							x = {},
							z = v.length,
							F, I, G = {},
							J = {},
							K, V = u.id,
							R = u.className,
							g, S = u.type,
							ia = c.cache ? c.cache[u[c.expando]] :
							0,
							ea = w(R),
							da, Z, pa = "",
							fa = !1;
						Z = [];
						for (var na = a.FastClick ? " needsclick" : ""; z--;) F = v[z].name, I = v[z].value, ~F.indexOf("data-") && (G[F.substr(5)] = I), "style" == F && (g = I), x[F] = I;
						ia && ia.data && (G = c.extend(G, ia.data));
						for (K in G) {
							I = G[K];
							if ("true" == I || "false" == I) I = "true" == I;
							J[K.replace(/checkbox|radio|class|id|label/g, function(a, b) {
								return 0 === b ? a : a.charAt(0).toUpperCase() + a.slice(1)
							})] = I
						}
						v = c.extend({}, e, a.icheck, J, h);
						z = v.handle;
						"checkbox" !== z && "radio" !== z && (z = "input[type=checkbox],input[type=radio]");
						if (!1 !== v.init &&
							~z.indexOf(S)) {
							for (ea && L(u, ea); !s[ea];)
								if (ea = Math.random().toString(36).substr(2, 5), !s[ea]) {
									da = m + "[" + ea + "]";
									break
								}
							delete v.autoInit;
							delete v.autoAjax;
							v.style = g || "";
							v.className = da;
							v.esc = da.replace(/(\[|\])/g, "\\$1");
							s[ea] = v;
							if (z = N(u, "label", "")) !z.htmlFor && V && (z.htmlFor = V), Z.push(z);
							if (V)
								for (F = c('label[for="' + V + '"]'); F.length--;) V = F[F.length], V !== z && Z.push(V);
							for (I = Z.length; I--;) V = Z[I], F = V.className, F = (z = w(F)) ? M(V, m + "[" + z + "]", 0) : (F ? F + " " : "") + A, V.className = F + " " + da + na;
							Z = b.createElement("div");
							if (v.inherit)
								for (V =
									v.inherit.split(/\s*,\s*/), F = V.length; F--;) z = V[F], void 0 !== x[z] && ("class" == z ? pa += x[z] + " " : Z.setAttribute(z, "id" == z ? m + "-" + x[z] : x[z]));
							pa += v[S + "Class"];
							pa += " " + p + " " + da;
							v.area && ca && (fa = ("" + v.area).replace(/%|px|em|\+|-/g, "") | 0) && (H[fa] || (ha(ca.replace(/#/g, "-" + fa + "%"), !1, fa), H[fa] = !0), pa += " " + r + fa);
							Z.className = pa + na;
							u.className = (R ? R + " " : "") + t + " " + da;
							u.parentNode.replaceChild(Z, u);
							Z.appendChild(u);
							v.insert && c(Z).append(v.insert);
							fa && (x = D ? D(Z, null).getPropertyValue("position") : Z.currentStyle.position,
								"static" == x && (Z.style.position = "relative"));
							Q(u, Z, ea, "updated", !0, !1, k);
							s[ea].done = !0;
							l || ja(u, ea, "Created")
						}
					}
				},
				Q = function(a, b, c, e, f, h, k) {
					var l = s[c],
						m = {},
						p = {};
					m.checked = [a.checked, "Checked", "Unchecked"];
					h && !k || "click" === e || (m.disabled = [a.disabled, "Disabled", "Enabled"], m.indeterminate = ["true" == a.getAttribute("indeterminate") || !!a.indeterminate, "Indeterminate", "Determinate"]);
					"updated" == e || "click" == e ? (p.checked = h ? !m.checked[0] : m.checked[0], h && !k || "click" === e || (p.disabled = m.disabled[0], p.indeterminate =
						m.indeterminate[0])) : "checked" == e || "unchecked" == e ? p.checked = "checked" == e : "disabled" == e || "enabled" == e ? p.disabled = "disabled" == e : "indeterminate" == e || "determinate" == e ? p.indeterminate = "determinate" !== e : p.checked = !m.checked[0];
					da(a, b, m, p, c, l, e, f, h, k)
				},
				da = function(a, b, e, f, h, k, l, m, p, q, r) {
					var u = a.type,
						t = "radio" == u ? "Radio" : "Checkbox",
						v, A, x, g, F, I, D, H, G, J;
					b || (b = N(a, "div", k.className));
					if (b) {
						for (v in f)
							if (A = f[v], e[v][0] !== A && "updated" !== l && "click" !== l && (a[v] = A), q && (A ? a.setAttribute(v, v) : a.removeAttribute(v)),
								k[v] !== A) {
								k[v] = A;
								G = !0;
								if ("checked" == v && (J = !0, !r && A && (s[h].done || q) && "radio" == u && a.name))
									for (g = N(a, "form", ""), x = 'input[name="' + a.name + '"]', x = g && !q ? c(g).find(x) : c(x), g = x.length; g--;) F = x[g], I = w(F.className), a !== F && s[I] && s[I].checked && (D = {
										checked: [!0, "Checked", "Unchecked"]
									}, H = {
										checked: !1
									}, da(F, !1, D, H, I, s[I], "updated", m, p, q, !0));
								x = [k[v + "Class"], k[v + t + "Class"], k[e[v][1] + "Class"], k[e[v][1] + t + "Class"], k[v + "LabelClass"]];
								g = [x[3] || x[2], x[1] || x[0]];
								A && g.reverse();
								M(b, g);
								if (k.mirror && x[4])
									for (g = c("label." + k.esc); g.length--;) M(g[g.length],
										x[4], A ? 1 : 0);
								m && !r || ja(a, h, e[v][A ? 1 : 2])
							}
						if (!m || r) G && ja(a, h, "Changed"), J && ja(a, h, "Toggled");
						k.cursor && !z && (k.disabled || k.pointer ? k.disabled && k.pointer && (b.style.cursor = "default", k.pointer = !1) : (b.style.cursor = "pointer", k.pointer = !0));
						s[h] = k
					}
				};
			c.fn.icheck = function(a, b) {
				if (/^(checked|unchecked|indeterminate|determinate|disabled|enabled|updated|toggle|destroy|data|styler)$/.test(a))
					for (var c = T(this), e = c.length; e--;) {
						var f = c[e],
							h = w(f.className);
						if (h) {
							if ("data" == a) return s[h];
							if ("styler" == a) return N(f, "div",
								s[h].className);
							"destroy" == a ? L(f, h, "Destroyed") : Q(f, !1, h, a);
							"function" == typeof b && b(f)
						}
					} else "object" != typeof a && a || fa(this, a || {});
				return this
			};
			var na;
			c(b).on("click.i " + f + J, "label." + A + ",div." + p, function(a) {
				var b = this,
					e = w(b.className);
				if (e) {
					var f = a.type,
						l = s[e],
						m = l.esc,
						e = "DIV" == b.tagName,
						p, r, t, A, D = [
							["label", l.activeLabelClass, l.hoverLabelClass],
							["div", l.activeClass, l.hoverClass]
						];
					e && D.reverse();
					if (f == F || f == I) {
						D[0][1] && M(b, D[0][1], f == F ? 1 : 0);
						if (l.mirror && D[1][1])
							for (t = c(D[1][0] + "." + m); t.length--;) M(t[t.length],
								D[1][1], f == F ? 1 : 0);
						e && f == I && l.tap && z && v && !k && (A = !0)
					} else if (f == q || f == u) {
						D[0][2] && M(b, D[0][2], f == q ? 1 : 0);
						if (l.mirror && D[1][2])
							for (t = c(D[1][0] + "." + m); t.length--;) M(t[t.length], D[1][2], f == q ? 1 : 0);
						e && f == u && l.tap && z && x && !k && (A = !0)
					} else e && (z && (x || v) && l.tap && !k || (A = !0));
					A && setTimeout(function() {
						r = a.currentTarget || {};
						"LABEL" !== r.tagName && (!l.change || 100 < +new Date - l.change) && (p = c(b).find("input." + m).click(), (h || k) && p.change())
					}, 2)
				}
			}).on("click.i change.i focusin.i focusout.i keyup.i keydown.i", "input." + t, function(a) {
				var b =
					w(this.className);
				if (b) {
					var e = a.type,
						f = s[b],
						h = f.esc,
						k = "click" == e ? !1 : N(this, "div", f.className);
					if ("click" == e) s[b].change = +new Date, a.stopPropagation();
					else if ("change" == e) k && !this.disabled && Q(this, k, b, "click");
					else if (~e.indexOf("focus")) {
						if (a = [f.focusClass, f.focusLabelClass], a[0] && k && M(k, a[0], "focusin" == e ? 1 : 0), f.mirror && a[1])
							for (f = c("label." + h); f.length--;) M(f[f.length], a[1], "focusin" == e ? 1 : 0)
					} else k && !this.disabled && ("keyup" == e ? (("checkbox" == this.type && 32 == a.keyCode && f.keydown || "radio" == this.type &&
						!this.checked) && Q(this, k, b, "click", !1, !0), s[b].keydown = s[na].keydown = !1) : (na = b, s[b].keydown = !0))
				}
			}).ready(function() {
				a.icheck.autoInit && c("." + m).icheck();
				if (a.jQuery) {
					var e = b.body || b.getElementsByTagName("body")[0];
					c.ajaxSetup({
						converters: {
							"text html": function(f) {
								if (a.icheck.autoAjax && e) {
									var k = b.createElement("iframe"),
										l;
									h || (k.style = "display:none");
									k.className = "iframe.icheck-frame";
									k.src = "about:blank";
									e.appendChild(k);
									l = k.contentDocument ? k.contentDocument : k.contentWindow.document;
									l.open();
									l.write(f);
									l.close();
									e.removeChild(k);
									l = c(l);
									fa(l.find("." + m), {}, !0);
									l = l[0];
									f = (l.body || l.getElementsByTagName("body")[0]).innerHTML
								}
								return f
							}
						}
					})
				}
			})
		}, "function" == typeof define && define.amd ? define("icheck", [a.jQuery ? "jquery" : "zepto"], a.ichecked) : a.ichecked())
	})(window, document);
	qun.star.widget.SendBarrage = {};
	(function() {
		plu.widget.sendBarrage = function() {
			this._init()
		};
		plu.widget.sendBarrage.prototype._getFlash = function(a) {
			return -1 != navigator.appName.indexOf("Microsoft") ? ((a = window[a]) && 1 < a.length && (a = a[0]), a) : document[a]
		};
		plu.widget.sendBarrage.prototype.setFullScreenInputText = function(a) {
			this._barrageFlash && this._barrageFlash.setInputText(a)
		};
		plu.widget.sendBarrage.prototype.clear = function() {
			this._barrageFlash && this._barrageFlash.clear()
		};
		plu.widget.sendBarrage.prototype.open = function() {
			this._barrageFlash &&
				this._barrageFlash.setScreenClose(!1)
		};
		plu.widget.sendBarrage.prototype.close = function() {
			this._barrageFlash && this._barrageFlash.setScreenClose(!0)
		};
		plu.widget.sendBarrage.prototype.pause = function() {
			this._barrageFlash && this._barrageFlash.setScreenPause(!0)
		};
		plu.widget.sendBarrage.prototype.resume = function() {
			this._barrageFlash && this._barrageFlash.setScreenPause(!1)
		};
		plu.widget.sendBarrage.prototype.freePost = function(a, b, c, e) {
			if ("0x16777215" == b + "" || 16777215 == b) b = "0xffffff";
			if ("" != a) switch (c = parseInt(c),
				c) {
				case 1:
					this._barrageFlash.addText(a, b, e);
					break;
				case 2:
					this._barrageFlash.addFixedText("top", a, b, e);
					break;
				case 3:
					this._barrageFlash.addFixedText("bottom", a, b, e)
			}
		};
		plu.widget.sendBarrage.prototype.payPost = function(a, b, c, e, f, h) {
			e = parseInt(e);
			switch (e) {
				case 1:
					this._barrageFlash.addBanner(a, b, c, null, f, h);
					break;
				case 2:
					this._barrageFlash.addBanner(a, b, c, "top", f, h);
					break;
				case 3:
					this._barrageFlash.addBanner(a, b, c, "bottom", f, h)
			}
		};
		plu.widget.sendBarrage.prototype.getTime = function() {
			if (this._videoFlash.getPlaytime) return this._videoFlash.getPlaytime();
			plu.log("\u89c6\u9891\u8bfb\u53d6\u63a5\u53e3getPlaytime\u4e0d\u5b58\u5728")
		};
		plu.widget.sendBarrage.prototype.setTime = function(a) {
			this._videoFlash.setPlaytime ? this._videoFlash.setPlaytime(a) : plu.log("\u89c6\u9891\u5199\u5165\u63a5\u53e3setPlaytime\u4e0d\u5b58\u5728")
		};
		plu.widget.sendBarrage.prototype._init = function() {
			this._videoFlash = this._barrageFlash = this._getFlash("videoFlash")
		}
	})();
	qun.star.widget.pallet = {};
	(function() {
		widget.pallet = function(a) {
			var b = [];
			a = $.extend({}, {
				className: "pallet-table",
				palletColors: "00 33 66 99 CC FF".split(" "),
				palletSpColors: "FF0000 00FF00 0000FF FFFF00 00FFFF FF00FF".split(" ")
			}, a);
			b.push('<div class="' + a.className + '">');
			$.each("ffffff ff8800 0084ff fd5c77 9cff00 ac41fe".split(" "), function(a, e) {
				var f = "";
				0 == a && (f = ' class="barrage-color-selected"');
				b.push('<div style="background-color:#' + e + '" color="' + e + "\" onclick=\"handle('click','palletSelect', this);\"" + f + "></div>")
			});
			b.push("</div>");
			return b.join("")
		}
	})();
	qun.star.io.LocalStorage = {};
	(function() {
		function a() {
			var a = location.host.split("."),
				b = a.pop(),
				b = a.pop() + "." + b;
			try {
				document.domain = b
			} catch (c) {}
			this._isFrameLoaded = !1;
			this._ifr = void 0;
			this._createIframe()
		}
		var b = void 0,
			c = $.Deferred(),
			e = !1,
			f = location.hostname.split("."),
			h = f.pop(),
			h = f.pop() + "." + h;
		a.prototype.set = function(a, b) {
			this._isFrameLoaded && this._ifr.contentWindow.ls.set(a, b)
		};
		a.prototype.get = function(a, b) {
			if (this._isFrameLoaded) {
				var c = this._ifr.contentWindow.ls.get(a);
				void 0 !== b && b(c);
				return c
			}
		};
		a.prototype.remove = function(a) {
			this._isFrameLoaded &&
				this._ifr.contentWindow.ls.remove(a)
		};
		a.prototype._createIframe = function() {
			this._ifr = document.getElementById("ifr");
			this._ifr || (this._ifr = document.createElement("iframe"), this._ifr.id = "ifr", this._ifr.style.height = "0px", this._ifr.style.width = "0px", this._ifr.style.border = "none", document.body.appendChild(this._ifr))
		};
		a.prototype.loadDone = function() {
			var a = this;
			if (!e) {
				e = !0;
				a._ifr.src = "http://" + location.hostname + "/scripts/localStorage.html";
				var b = function(b) {
					a._isFrameLoaded = !0;
					c.resolve()
				};
				a._ifr.attachEvent ?
					a._ifr.attachEvent("onload", b) : a._ifr.onload = b
			}
			return c.promise()
		};
		plu.io.LocalStorage = function() {
			if (void 0 == b || null == b) b = new a;
			return b
		}
	})();
	qun.star.widget.Barrage = {};
	(function() {
		var a = plu.messages,
			b = plu.element,
			c = plu.io.LocalStorage();
		plu.widget.barrage = function() {
			plu.widget.sendBarrage.call(this)
		};
		plu.inherits(plu.widget.barrage, plu.widget.sendBarrage);
		plu.widget.barrage.prototype._option = {
			barrage: "barrage",
			close: "barrage-close",
			fontPanel: "barrage-font-panel",
			pallet: "barrage-pallet",
			palletMask: "barrage-pallet-mask",
			palletMaskExperience: "barrage-pallet-experience",
			palletMaskLevel: "barrage-pallet-level",
			palletMaskTip: "barrage-pallet-tip",
			palletSelectColor: "barrage-pallet-color",
			palletSelectTxt: "barrage-pallet-txt",
			stylePanel: "barrage-style-panel",
			styleTip: "barrage-setting-styles-alert",
			styleBtn: "barrage-style-btn",
			stylePreview: "barrage-style-preview"
		};
		plu.widget.barrage.prototype._disable = !0;
		plu.widget.barrage.prototype._closed = !0;
		plu.widget.barrage.prototype._enablePostBarrage = !1;
		plu.widget.barrage.prototype._enablePostBarrageLevel = 2;
		plu.widget.barrage.prototype._postBarrageCount = 1;
		plu.widget.barrage.prototype._postBarrageBlockLevel = 8;
		plu.widget.barrage.prototype._isPostBarrageBlock = !0;
		plu.widget.barrage.prototype._scrollType = 1;
		plu.widget.barrage.prototype._color = 16777215;
		plu.widget.barrage.prototype._maxLength = 20;
		plu.widget.barrage.prototype._colorLevel = 5;
		plu.widget.barrage.prototype._styleType = "mediakind1";
		plu.widget.barrage.prototype._useStyle = !1;
		plu.widget.barrage.prototype._settingFontTimer = !1;
		plu.widget.barrage.prototype._settingStyleTimer = !1;
		plu.widget.barrage.prototype._handleFontSettingMouseover = function() {
			clearTimeout(this._settingFontTimer);
			b.addClass(this._fontPanel,
				"barrage-setting-font-hover");
			this.settingFontVisible_ || ($(".barrage-setting-font-content").hide().fadeIn(200), this.settingFontVisible_ = !0)
		};
		plu.widget.barrage.prototype._handleFontSettingMouseout = function() {
			var a = this;
			clearTimeout(this._settingFontTimer);
			this._settingFontTimer = setTimeout(function() {
				b.removeClass(a._fontPanel, "barrage-setting-font-hover");
				$(".barrage-setting-font-content").fadeOut(60);
				a.settingFontVisible_ = !1
			}, 200)
		};
		plu.widget.barrage.prototype._handlePalletSelected = function(a) {
			this._setPallet(a.attributes.color.value);
			b.hasClass(this._fontPanel, "barrage-setting-font-selected") || b.addClass(this._fontPanel, "barrage-setting-font-selected");
			this.palletCellSelected_ ? this.palletCellSelected_.removeClass("barrage-color-selected") : $(".barrage-color-selected").removeClass("barrage-color-selected");
			$(a).addClass("barrage-color-selected");
			this.palletCellSelected_ = $(a)
		};
		plu.widget.barrage.prototype._setPallet = function(a) {
			this._palletSelectColor.style.background = "#" + a;
			this._palletSelectTxt.innerHTML = a;
			this._color = parseInt(a,
				16);
			plu.messages.post("colorChange", "ui-barrage", a, !0);
			c.loadDone().then(function() {
				c.set("barrageColor", a)
			})
		};
		plu.widget.barrage.prototype._handleScrollSelect = function(a) {
			this._scrollType = a;
			plu.messages.post("positionChange", "ui-barrage", a, !0);
			c.loadDone().then(function() {
				c.set("barragePosition", a)
			})
		};
		plu.widget.barrage.prototype._handleStyleSettingMouseover = function() {
			clearTimeout(this._settingStyleTimer);
			b.addClass(this._stylePanel, "barrage-setting-styles-btn-hover");
			this.settingPanelVisible_ ||
				($(".barrage-setting-styles-content").hide().fadeIn(200), this.settingPanelVisible_ = !0)
		};
		plu.widget.barrage.prototype._handleStyleSettingMouseout = function() {
			var a = this;
			clearTimeout(this._settingStyleTimer);
			this._settingStyleTimer = setTimeout(function() {
				b.removeClass(a._stylePanel, "barrage-setting-styles-btn-hover");
				$(".barrage-setting-styles-content").fadeOut(60);
				a.settingPanelVisible_ = !1
			}, 300)
		};
		plu.widget.barrage.prototype._handleStyleSelect = function(a) {
			this._styleType = a;
			plu.messages.post("styleChange",
				"ui-barrage", a);
			this._stylePreview.className = "barrage-setting-style-preview-img barrage-setting-style-preview-img" + a;
			this._setStyle(!0)
		};
		plu.widget.barrage.prototype._handleStyleBtnClick = function() {
			b.hasClass(this._stylePanel, "barrage-setting-styles-check") ? this._setStyle(!1) : this._setStyle(!0)
		};
		plu.widget.barrage.prototype._setStyle = function(a) {
			a ? (this._useStyle = !0, plu.messages.post("styleOn", "ui-barrage", {}), b.addClass(this._stylePanel, "barrage-setting-styles-check")) : (this._useStyle = !1, plu.messages.post("styleOff",
				"ui-barrage", {}), b.removeClass(this._stylePanel, "barrage-setting-styles-check"))
		};
		plu.widget.barrage.prototype._handleCloseClick = function() {
			b.hasClass(this._close, "barrage-close") ? (this._closed = !1, b.removeClass(this._close, "barrage-close"), this._close.innerHTML = "\u5173\u95ed\u5f39\u5e55", this.open()) : (this._closed = !0, b.addClass(this._close, "barrage-close"), this._close.innerHTML = "\u5f00\u542f\u5f39\u5e55", this.close())
		};
		plu.widget.barrage.prototype._show = function() {
			b.show(this._barrage)
		};
		plu.widget.barrage.prototype._hide =
			function() {
				b.hide(this._barrage)
			};
		plu.widget.barrage.prototype._createElement = function() {
			for (var a in this._option) this["_" + a] = b.byId(this._option[a])
		};
		plu.widget.barrage.prototype._initCheck = function() {
			var a = this;
			this._checks = $(this._barrage).find(".iCheck");
			this._checks.icheck({
				checkboxClass: "icheckbox",
				radioClass: "iradio",
				mirror: !0,
				checkedLabelClass: "barrage-setting-type-checked",
				disabledLabelClass: "barrage-setting-type-disabled",
				callbacks: {
					ifChecked: function(b) {
						var c = b.value;
						switch (b.name) {
							case "position":
								a._handleScrollSelect(c);
								break;
							case "modeType":
								a._handleStyleSelect(c)
						}
					}
				}
			})
		};
		plu.widget.barrage.prototype._initPallert = function() {
			var a = document.createElement("div");
			a.innerHTML = widget.pallet({
				className: "barrage-setting-pallet-table"
			});
			this._pallet.appendChild(a.children[0])
		};
		plu.widget.barrage.prototype._play = function(a, b, c, k) {
			var m = 1;
			setInterval(function() {
				m = m == b ? 1 : m + 1;
				$(a).css("background-position", "0 " + -parseInt((m - 1) * c) + "px")
			}, 1E3 / k)
		};
		plu.widget.barrage.prototype._handlePageFullScreenClick = function() {
			this._$body || (this._$body =
				$("body"), this._barrageFlash = $(".barrage-flash,.barrage-flash embed"), this._barrageForm = $(".barrage-form"), this._barragePane = $(".barrage-pane"));
			this._$body.toggleClass("full");
			if (this._$body.is(".full")) {
				var a = this;
				$(window).bind("resize.barrage", function() {
					var b = $(window);
					a._barrageFlash.css("height", b.height() - 130);
					a._barragePane.css("width", b.width() - 350);
					880 > b.width() ? a._barrageForm.hide() : a._barrageForm.show()
				}).resize()
			} else this._barrageFlash.removeAttr("style"), this._barragePane.removeAttr("style"),
				this._barrageForm.hide(), $(window).unbind("resize.barrage")
		};
		plu.widget.barrage.prototype._init = function() {
			plu.widget.barrage._superClass._init.call(this);
			this._disable || (this._createElement(), this._play(this._stylePreview, 12, 100, 10), this._show(), a.receive("click", "barrageClose", plu.bind(this._handleCloseClick, this)), a.receive("mouseover", "barrageFontSetting", plu.bind(this._handleFontSettingMouseover, this)), a.receive("mouseout", "barrageFontSetting", plu.bind(this._handleFontSettingMouseout, this)),
				a.receive("click", "palletSelect", plu.bind(this._handlePalletSelected, this)), a.receive("mouseover", "barrageStyleSetting", plu.bind(this._handleStyleSettingMouseover, this)), a.receive("mouseout", "barrageStyleSetting", plu.bind(this._handleStyleSettingMouseout, this)), a.receive("click", "barrageStyleBtn", plu.bind(this._handleStyleBtnClick, this)), a.receive("click", "pageFullScreen", plu.bind(this._handlePageFullScreenClick, this)), a.receive("change", "loginmanager", function(a) {
					a && 5 <= (a.grade && a.grade.CurrentGrade ||
						1) && c.loadDone().then(function() {
						var a = c.get("barragePosition"),
							b = c.get("barrageColor");
						a && $('.barrage-setting-types .iCheck[value="' + a + '"]').icheck("checked");
						b && $('.barrage-setting-pallet-table div[color="' + b + '"]').click()
					})
				}))
		}
	})();
	qun.star.widget.LiveBarrage = {};
	(function() {
		plu.widget.LiveBarrage = function(a) {
			plu.widget.barrage.call(this);
			this._disable = !0;
			this._selectAble = a || !1
		};
		plu.inherits(plu.widget.LiveBarrage, plu.widget.barrage);
		plu.widget.LiveBarrage.prototype.setSelectAble = function(a) {
			this._selectAble = !!a
		};
		plu.widget.LiveBarrage.prototype.setGiftEnable = function(a) {
			this._giftEnable = !!a
		};
		plu.widget.LiveBarrage.prototype._init = function() {
			this._disable = !1;
			plu.widget.LiveBarrage._superClass._init.call(this)
		};
		plu.widget.LiveBarrage.prototype._handleFontSettingMouseover = function() {
			this._selectAble &&
				plu.widget.LiveBarrage._superClass._handleFontSettingMouseover.call(this)
		};
		plu.widget.LiveBarrage.prototype._handleStyleSettingMouseover = function() {
			this._selectAble && plu.widget.LiveBarrage._superClass._handleStyleSettingMouseover.call(this)
		};
		plu.widget.LiveBarrage.prototype._handleStyleBtnClick = function() {
			this._giftEnable && this._selectAble && plu.widget.LiveBarrage._superClass._handleStyleBtnClick.call(this)
		}
	})();
	qun.star.ui.LiveTscreenSender = {};
	(function() {
		function a() {
			c ? b.post("open", "ui-tscreen", {}, !0) : b.post("close", "ui-tscreen", {}, !0);
			c = !c
		}
		if (plu.widget.portal.clientIsDesktop() && roomInfo && roomInfo.IsBulletScreen) {
			var b = plu.messages,
				c = !1;
			new plu.widget.LiveBarrage(!1);
			b.receive("click", "barrageClose", a)
		}
	})();
	qun.star.model.UserManager = {};
	(function() {
		var a = {
			uid: -1,
			name: "",
			grade: 1
		};
		plu.model.UserManager = {
			setCurrentUser: function(b) {
				a = b
			},
			getCurrentUser: function() {
				return a
			},
			isCurrentUser: function(b) {
				return a.id === b
			}
		}
	})();
	qun.star.ui.LiveTscreen = {};
	(function() {
		function a() {
			D || (D = !0);
			z || k()
		}

		function b() {
			x && x.hide()
		}

		function c(a) {
			if (D && !z) {
				var b = a.content,
					c = a.user,
					e = a.color || 16777215;
				if ("0x16777215" == e + "" || 16777215 == e) e = "0xffffff";
				var f = a.style || 1;
				a = a.kind;
				if ("thunder" == a) m(b, c.name, e, f, "thunder", 2241100);
				else if ("yomonkey" == a) m(b, c.name, e, f, "banner", 2057336);
				else if ((2 <= c.grade || K.isVip(c) || K.isAdmin(c)) && "******" != b && (b = b.replace(/\[em_([0-9]*)\]/g, ""), b = $.trim(b), "" != b))
					if (K.isHost(c)) {
						c = "";
						2 == f ? c = "top" : 3 == f && (c = "bottom");
						try {
							p().addNamedMessage(b,
								"\u4e3b\u64ad", 16766976, parseInt(e, 16), c)
						} catch (h) {}
					} else {
						a = c.fansMedal;
						var k, s;
						if (a) {
							var t = 16731233;
							7 == a.level ? t = 16756224 : 4 > a.level && (t = 5938431);
							k = "http://r.plures.net/qun/images/star/fans-medal-" + a.level + ".png";
							s = a.name;
							4 <= a.level && a.id == roomInfo.RoomId ? r(b, parseInt(e, 16), f, !1, k, "\u3010" + s + "\u3011", t, c.name, 16538369) : 2 >= a.level ? r(b, parseInt(e, 16), f, !1) : r(b, parseInt(e, 16), f, !1, k, "\u3010" + s + "\u3011", t)
						} else r(b, parseInt(e, 16), f, !1)
					}
			}
		}

		function e(a) {
			var b = a.sender,
				c = a.giftName;
			if (!w.isCurrentUser(b.id)) {
				var e =
					a.style || 1;
				"thunder" == c || "yomonkey" == c ? "thunder" == c ? m(a.content, b.name, a.color, e, "thunder", 2241100) : "yomonkey" == c && m(a.content, b.name, a.color, e, "banner", 2057336) : h(a)
			}
		}

		function f(a) {
			h(a)
		}

		function h(a) {
			D && (z || "thunder" != a.giftName && "yomonkey" != a.giftName && G.getGift(a.giftName).then(function(b) {
				if (19.9 <= b.moneyCost * a.num) {
					var c = a.sender,
						e = J[a.giftName] || 16746496;
					try {
						p().addGiftMessage(c.name, b.title, a.num, e)
					} catch (f) {}
				}
			}))
		}

		function k() {
			(v = t()) && v.setScreenClose && v.setScreenClose(!1);
			z = !1;
			s.post("actionOpenMbStream",
				"io-messagebus", !0)
		}

		function m(a, b, c, e, f, h) {
			if (v = t()) try {
				2 == e && (e = "top"), 3 == e && (e = "bottom"), v.addBanner(a, b, c, e, f, h)
			} catch (k) {}
		}

		function p() {
			return v = t()
		}

		function r(a, b, c, e, f, h, k, m, p) {
			(v = t()) && (2 == c ? v.addFixedText("top", a, b, e, f, h, k, m, p) : 3 == c ? v.addFixedText("bottom", a, b, e, f, h, k, m, p) : v.addText(a, b, e, f, h, k, m, p))
		}

		function t() {
			if (-1 != navigator.appName.indexOf("Microsoft")) {
				var a = window.videoFlash;
				a && 1 < a.length && (a = a[0]);
				return a
			}
			return document.videoFlash
		}

		function A() {
			(v = t()) && v.setScreenClose && v.setScreenClose(!0);
			z = !0;
			s.post("actionCloseMbStream", "io-messagebus", !0)
		}

		function H() {
			k()
		}
		if (plu.widget.portal.clientIsDesktop() && roomInfo && roomInfo.IsBulletScreen) {
			var s = plu.messages,
				G = plu.model.GiftManager,
				w = plu.model.UserManager,
				D = !1,
				v, x, z = !1,
				J = {
					admire: 16746496,
					cute: 16342897,
					godlike: 369398,
					donate: 16734720
				};
			s.receive("livestart", "roomstatus", a).receive("liveend", "roomstatus", b).receive("chat", "chatroom", c).receive("onLoad", "GiftMsgIo", e).receive("onSend", "GiftMsgIo", f).receive("close", "ui-tscreen", A).receive("open",
				"ui-tscreen", H);
			var K = window.roominfo()
		}
	})();
	qun.star.ui.component = {};
	(function() {
		plu.ui.component = function(a) {
			var b = {},
				c = a || {},
				e;
			b.render = function(a) {
				if (!e) {
					var b = c.className,
						k = c.innerHTML,
						m = c.id,
						p = document.createElement(c.tagName || "div");
					b && (p.className = b);
					m && (p.id = m);
					k && (p.innerHTML = k);
					e = p
				}(a || document.body).appendChild(e)
			};
			b.getElement = function() {
				return e
			};
			return b
		}
	})();
	qun.star.widget.Schedule = {};
	(function() {
		function a() {
			var a = $(".schedule-day-title-text"),
				b = $(a[0]);
			a.each(function(a, c) {
				var e = $(c),
					h = moment(e.text(), "YYYY\u5e74MM\u6708DD\u65e5"),
					k = moment();
				if (h.isAfter(k) || h.format("YYYY-MM-DD") == k.format("YYYY-MM-DD")) return !1;
				b = e
			});
			var a = $(".schedule-content"),
				c = a.offset().top,
				k = b.offset().top;
			a.scrollTop(k - c - 45)
		}

		function b(a) {
			c || (c = plu.io.jsonp("http://api.plu.cn/schedules/schedule", {
				callbackName: "__plu_widget_schedule__"
			}));
			return c.get({
				seasonid: a
			})
		}
		var c;
		plu.widget.schedule = function(c,
			f) {
			function h(a) {
				t.scrollTop -= 42;
				return !1
			}

			function k(a) {
				t.scrollTop += 42;
				return !1
			}
			var m = plu.ui.component({
					className: "schedule",
					id: "schedule"
				}),
				p, r, t;
			b(c).done(function(b) {
				for (var c = b.length, e = {}, G = 0; G < c; G++) {
					var w = b[G],
						D = w.date;
					e[D] || (e[D] = []);
					var v = "pre",
						x;
					0 < w.videourl.length && (v = "vod", x = w.videourl[0].replace(/star.tga.plu.cn/, "star.longzhu.com"));
					e[D].push({
						title: w.name,
						game: f,
						time: w.matchtime,
						state: v,
						vodUrl: x && x.replace(/star.tga.plu.cn/, "star.longzhu.com")
					})
				}
				b = [];
				for (var z in e) e.hasOwnProperty(z) &&
					b.push({
						title: z,
						items: e[z]
					});
				e = document.createDocumentFragment();
				z = document.createElement("div");
				z.className = "schedule-content";
				z = t = z;
				c = b.length;
				w = "";
				for (G = 0; G < c; G++) {
					v = b[G];
					D = v.items;
					v = '<div class="schedule-day-title"><span class="schedule-day-title-text">' + v.title + '</span><i class="schedule-day-title-line"></i></div>';
					x = D.length;
					for (var J = 0; J < x; J++) {
						var K = D[J],
							l = K.title.replace(/([0-9]:[0-9])/, "<strong>$1</strong>");
						"vod" == K.state && (l = '<a href="' + K.vodUrl + '" target="_blank">' + l + "</a>");
						l = '<i class="schedule-icon tg-icon tg-icon-' +
							K.game + '"></i><div class="schedule-time">' + K.time.replace(/([0-9]+:[0-9]+)-[0-9]+:[0-9]+/, "$1") + '</div><div class="schedule-title">' + l + "</div>";
						l = "live" == K.state ? l + '<div class="schedule-state schedule-state-live">\u76f4\u64ad\u4e2d</div>' : "end" == K.state ? l + '<div class="schedule-state schedule-state-end">\u5df2\u7ed3\u675f</div>' : "vod" == K.state ? l + ('<a href="' + K.vodUrl + '" target="_blank"><div class="schedule-state schedule-state-vod">VOD</div></a>') : l + '<div class="schedule-state schedule-state-pre">\u9884\u544a</div>';
						v += '<div class="schedule-match' + (J == x - 1 ? " schedule-match-last" : "") + ("pre" == K.state ? ' schedule-match-pre"' : '"') + ">" + l + "</div>"
					}
					w += '<div class="schedule-day">' + v + "</div>"
				}
				z.innerHTML = '<div class="schedule-inner">' + w + "</div>";
				b = document.createElement("div");
				b.className = "schedule-controls";
				z = document.createElement("a");
				z.href = "#";
				z.setAttribute("hidefocus", "true");
				z.className = "schedule-up";
				z.innerHTML = '\u5411\u4e0a<i class="schedule-up-icon"></i>';
				p = z;
				z = document.createElement("a");
				z.href = "#";
				z.setAttribute("hidefocus",
					"true");
				z.className = "schedule-down";
				z.innerHTML = '\u5411\u4e0b<i class="schedule-down-icon"></i>';
				r = z;
				b.appendChild(p);
				b.appendChild(r);
				e.appendChild(t);
				e.appendChild(b);
				m.getElement().appendChild(e);
				m.getElement();
				p.onclick = h;
				r.onclick = k;
				a()
			});
			return m
		}
	})();
	qun.star.widget.Analytics = {};
	qun.star.common = {};
	qun.star.common.roominfo = {};
	(function() {
		function a() {
			e || (e = b(".room-live-icon"));
			return e
		}
		var b = jQuery,
			c, e;
		plu.messages.receive("load", "page", function() {
			var a = (window.roomInfo || {}).VerifiedInformation;
			a && (a = a.replace(/\,|\uff0c|\u3001|\|/g, ' <span class="room-title-sep">|</span> '), c || (c = b("#room-title")), c.html(a))
		}).receive("livestart", "roomstatus", function() {
			a().show()
		}).receive("liveend", "roomstatus", function() {
			a().hide()
		});
		if (window.roomInfo && window.roomInfo.RoomPlayVideoType) {
			var f = window.roomInfo.RoomPlayVideoType;
			2 ==
				f || 4 == f ? 0 < window.videoCount ? b(".nav-videos").addClass("nav-videos-con").attr("href", "http://v.plu.cn/" + window.roomInfo.Domain).attr("target", "_blank") : b(".nav-videos").removeClass("nav-videos-con").attr("href", "javascript:;") : b(".nav-videos").removeClass("nav-videos-con").attr("href", "javascript:;")
		}
		if (window.roomInfo && window.roomInfo.ShopName) {
			var f = window.roomInfo.ShopName,
				h = window.roomInfo.ShopUrl;
			"" != f && (b(".room-star-shop").attr("href", h), b(".room-star-shop").attr("title", f), b(".room-star-shop-value").html(f),
				b(".room-star-shop").css("display", "block"), b(".feed-count").css("right", "122px"))
		}
	})();
	qun.star.third = {};
	qun.star.third.moment = {};
	(function(a) {
		function b(a, b) {
			return function(c) {
				return p(a.call(this, c), b)
			}
		}

		function c(a, b) {
			return function(c) {
				return this.lang().ordinal(a.call(this, c), b)
			}
		}

		function e() {}

		function f(a) {
			v(a);
			k(this, a)
		}

		function h(a) {
			a = s(a);
			var b = a.year || 0,
				c = a.month || 0,
				e = a.week || 0,
				f = a.day || 0;
			this._milliseconds = +(a.millisecond || 0) + 1E3 * (a.second || 0) + 6E4 * (a.minute || 0) + 36E5 * (a.hour || 0);
			this._days = +f + 7 * e;
			this._months = +c + 12 * b;
			this._data = {};
			this._bubble()
		}

		function k(a, b) {
			for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
			b.hasOwnProperty("toString") &&
				(a.toString = b.toString);
			b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf);
			return a
		}

		function m(a) {
			return 0 > a ? Math.ceil(a) : Math.floor(a)
		}

		function p(a, b, c) {
			for (var e = Math.abs(a) + ""; e.length < b;) e = "0" + e;
			return (0 <= a ? c ? "+" : "" : "-") + e
		}

		function r(a, b, c, e) {
			var f = b._milliseconds,
				g = b._days;
			b = b._months;
			var h, k;
			f && a._d.setTime(+a._d + f * c);
			if (g || b) h = a.minute(), k = a.hour();
			g && a.date(a.date() + g * c);
			b && a.month(a.month() + b * c);
			f && !e && y.updateOffset(a);
			if (g || b) a.minute(h), a.hour(k)
		}

		function t(a) {
			return "[object Array]" ===
				Object.prototype.toString.call(a)
		}

		function A(a, b, c) {
			var e = Math.min(a.length, b.length),
				f = Math.abs(a.length - b.length),
				g = 0,
				h;
			for (h = 0; h < e; h++)(c && a[h] !== b[h] || !c && w(a[h]) !== w(b[h])) && g++;
			return g + f
		}

		function H(a) {
			if (a) {
				var b = a.toLowerCase().replace(/(.)s$/, "$1");
				a = Xa[a] || Na[b] || b
			}
			return a
		}

		function s(a) {
			var b = {},
				c, e;
			for (e in a) a.hasOwnProperty(e) && (c = H(e)) && (b[c] = a[e]);
			return b
		}

		function G(b) {
			var c, e;
			if (0 === b.indexOf("week")) c = 7, e = "day";
			else if (0 === b.indexOf("month")) c = 12, e = "month";
			else return;
			y[b] = function(f,
				g) {
				var h, k, l = y.fn._lang[b],
					m = [];
				"number" === typeof f && (g = f, f = a);
				k = function(a) {
					a = y().utc().set(e, a);
					return l.call(y.fn._lang, a, f || "")
				};
				if (null != g) return k(g);
				for (h = 0; h < c; h++) m.push(k(h));
				return m
			}
		}

		function w(a) {
			a = +a;
			var b = 0;
			0 !== a && isFinite(a) && (b = 0 <= a ? Math.floor(a) : Math.ceil(a));
			return b
		}

		function D(a) {
			return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
		}

		function v(a) {
			var b;
			a._a && -2 === a._pf.overflow && (b = 0 > a._a[1] || 11 < a._a[1] ? 1 : 1 > a._a[2] || a._a[2] > (new Date(Date.UTC(a._a[0], a._a[1] + 1, 0))).getUTCDate() ? 2 : 0 > a._a[3] || 23 <
				a._a[3] ? 3 : 0 > a._a[4] || 59 < a._a[4] ? 4 : 0 > a._a[5] || 59 < a._a[5] ? 5 : 0 > a._a[6] || 999 < a._a[6] ? 6 : -1, a._pf._overflowDayOfYear && (0 > b || 2 < b) && (b = 2), a._pf.overflow = b)
		}

		function x(a) {
			a._pf = {
				empty: !1,
				unusedTokens: [],
				unusedInput: [],
				overflow: -2,
				charsLeftOver: 0,
				nullInput: !1,
				invalidMonth: null,
				invalidFormat: !1,
				userInvalidated: !1,
				iso: !1
			}
		}

		function z(a) {
			null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && 0 > a._pf.overflow && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict &&
				(a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length));
			return a._isValid
		}

		function J(a) {
			return a ? a.toLowerCase().replace("_", "-") : a
		}

		function K(a, b) {
			return b._isUTC ? y(a).zone(b._offset || 0) : y(a).local()
		}

		function l(a) {
			var b = 0,
				c, e, f, g, h = function(a) {
					if (!W[a] && wa) try {
						require("./lang/" + a)
					} catch (b) {}
					return W[a]
				};
			if (!a) return y.fn._lang;
			if (!t(a)) {
				if (e = h(a)) return e;
				a = [a]
			}
			for (; b < a.length;) {
				g = J(a[b]).split("-");
				c = g.length;
				for (f = (f = J(a[b + 1])) ? f.split("-") : null; 0 < c;) {
					if (e = h(g.slice(0,
							c).join("-"))) return e;
					if (f && f.length >= c && A(g, f, !0) >= c - 1) break;
					c--
				}
				b++
			}
			return y.fn._lang
		}

		function q(a) {
			return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
		}

		function u(a) {
			var b = a.match(Ga),
				c, e;
			c = 0;
			for (e = b.length; c < e; c++) b[c] = ra[b[c]] ? ra[b[c]] : q(b[c]);
			return function(f) {
				var g = "";
				for (c = 0; c < e; c++) g += b[c] instanceof Function ? b[c].call(f, a) : b[c];
				return g
			}
		}

		function F(a, b) {
			if (!a.isValid()) return a.lang().invalidDate();
			b = I(b, a.lang());
			Oa[b] || (Oa[b] = u(b));
			return Oa[b](a)
		}

		function I(a, b) {
			function c(a) {
				return b.longDateFormat(a) ||
					a
			}
			var e = 5;
			for (V.lastIndex = 0; 0 <= e && V.test(a);) a = a.replace(V, c), V.lastIndex = 0, --e;
			return a
		}

		function R(a, b) {
			var c = b._strict;
			switch (a) {
				case "DDDD":
					return Va;
				case "YYYY":
				case "GGGG":
				case "gggg":
					return c ? gb : oa;
				case "YYYYYY":
				case "YYYYY":
				case "GGGGG":
				case "ggggg":
					return c ? hb : ia;
				case "S":
					if (c) return Ta;
				case "SS":
					if (c) return Ua;
				case "SSS":
				case "DDD":
					return c ? Va : g;
				case "MMM":
				case "MMMM":
				case "dd":
				case "ddd":
				case "dddd":
					return eb;
				case "a":
				case "A":
					return l(b._l)._meridiemParse;
				case "X":
					return fb;
				case "Z":
				case "ZZ":
					return Z;
				case "T":
					return pa;
				case "SSSS":
					return ea;
				case "MM":
				case "DD":
				case "YY":
				case "GG":
				case "gg":
				case "HH":
				case "hh":
				case "mm":
				case "ss":
				case "ww":
				case "WW":
					return c ? Ua : qa;
				case "M":
				case "D":
				case "d":
				case "H":
				case "h":
				case "m":
				case "s":
				case "w":
				case "W":
				case "e":
				case "E":
					return c ? Ta : qa;
				default:
					var c = RegExp,
						e;
					e = L(a.replace("\\", "")).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
					return new c(e)
			}
		}

		function S(a) {
			a = (a || "").match(Z) || [];
			a = ((a[a.length - 1] || []) + "").match(bb) || ["-", 0, 0];
			var b = +(60 * a[1]) + w(a[2]);
			return "+" ===
				a[0] ? -b : b
		}

		function ca(a) {
			var b, c = [],
				e, f, g, h, k;
			if (!a._d) {
				e = ha(a);
				a._w && null == a._a[2] && null == a._a[1] && (b = function(b) {
					var c = parseInt(b, 10);
					return b ? 3 > b.length ? 68 < c ? 1900 + c : 2E3 + c : c : null == a._a[0] ? y().weekYear() : a._a[0]
				}, f = a._w, null != f.GG || null != f.W || null != f.E ? b = da(b(f.GG), f.W || 1, f.E, 4, 1) : (g = l(a._l), h = null != f.d ? ja(f.d, g) : null != f.e ? parseInt(f.e, 10) + g._week.dow : 0, k = parseInt(f.w, 10) || 1, null != f.d && h < g._week.dow && k++, b = da(b(f.gg), k, h, g._week.doy, g._week.dow)), a._a[0] = b.year, a._dayOfYear = b.dayOfYear);
				a._dayOfYear &&
					(b = null == a._a[0] ? e[0] : a._a[0], a._dayOfYear > (D(b) ? 366 : 365) && (a._pf._overflowDayOfYear = !0), b = N(b, 0, a._dayOfYear), a._a[1] = b.getUTCMonth(), a._a[2] = b.getUTCDate());
				for (b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = c[b] = e[b];
				for (; 7 > b; b++) a._a[b] = c[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
				c[3] += w((a._tzm || 0) / 60);
				c[4] += w((a._tzm || 0) % 60);
				a._d = (a._useUTC ? N : T).apply(null, c)
			}
		}

		function ha(a) {
			var b = new Date;
			return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
		}

		function M(a) {
			a._a =
				[];
			a._pf.empty = !0;
			var b = l(a._l),
				c = "" + a._i,
				e, f, g, h, k = c.length,
				m = 0;
			f = I(a._f, b).match(Ga) || [];
			for (b = 0; b < f.length; b++) {
				g = f[b];
				if (e = (c.match(R(g, a)) || [])[0]) h = c.substr(0, c.indexOf(e)), 0 < h.length && a._pf.unusedInput.push(h), c = c.slice(c.indexOf(e) + e.length), m += e.length;
				if (ra[g]) {
					e ? a._pf.empty = !1 : a._pf.unusedTokens.push(g);
					h = a;
					var p = void 0,
						q = h._a;
					switch (g) {
						case "M":
						case "MM":
							null != e && (q[1] = w(e) - 1);
							break;
						case "MMM":
						case "MMMM":
							p = l(h._l).monthsParse(e);
							null != p ? q[1] = p : h._pf.invalidMonth = e;
							break;
						case "D":
						case "DD":
							null !=
								e && (q[2] = w(e));
							break;
						case "DDD":
						case "DDDD":
							null != e && (h._dayOfYear = w(e));
							break;
						case "YY":
							q[0] = w(e) + (68 < w(e) ? 1900 : 2E3);
							break;
						case "YYYY":
						case "YYYYY":
						case "YYYYYY":
							q[0] = w(e);
							break;
						case "a":
						case "A":
							h._isPm = l(h._l).isPM(e);
							break;
						case "H":
						case "HH":
						case "h":
						case "hh":
							q[3] = w(e);
							break;
						case "m":
						case "mm":
							q[4] = w(e);
							break;
						case "s":
						case "ss":
							q[5] = w(e);
							break;
						case "S":
						case "SS":
						case "SSS":
						case "SSSS":
							q[6] = w(1E3 * ("0." + e));
							break;
						case "X":
							h._d = new Date(1E3 * parseFloat(e));
							break;
						case "Z":
						case "ZZ":
							h._useUTC = !0;
							h._tzm =
								S(e);
							break;
						case "w":
						case "ww":
						case "W":
						case "WW":
						case "d":
						case "dd":
						case "ddd":
						case "dddd":
						case "e":
						case "E":
							g = g.substr(0, 1);
						case "gg":
						case "gggg":
						case "GG":
						case "GGGG":
						case "GGGGG":
							g = g.substr(0, 2), e && (h._w = h._w || {}, h._w[g] = e)
					}
				} else a._strict && !e && a._pf.unusedTokens.push(g)
			}
			a._pf.charsLeftOver = k - m;
			0 < c.length && a._pf.unusedInput.push(c);
			a._isPm && 12 > a._a[3] && (a._a[3] += 12);
			!1 === a._isPm && 12 === a._a[3] && (a._a[3] = 0);
			ca(a);
			v(a)
		}

		function L(a) {
			return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a,
				b, c, e, f) {
				return b || c || e || f
			})
		}

		function T(a, b, c, e, f, g, h) {
			b = new Date(a, b, c, e, f, g, h);
			1970 > a && b.setFullYear(a);
			return b
		}

		function N(a) {
			var b = new Date(Date.UTC.apply(null, arguments));
			1970 > a && b.setUTCFullYear(a);
			return b
		}

		function ja(a, b) {
			if ("string" === typeof a)
				if (isNaN(a)) {
					if (a = b.weekdaysParse(a), "number" !== typeof a) return null
				} else a = parseInt(a, 10);
			return a
		}

		function fa(a, b, c, e, f) {
			return f.relativeTime(b || 1, !!c, a, e)
		}

		function Q(a, b, c) {
			b = c - b;
			c -= a.day();
			c > b && (c -= 7);
			c < b - 7 && (c += 7);
			a = y(a).add("d", c);
			return {
				week: Math.ceil(a.dayOfYear() /
					7),
				year: a.year()
			}
		}

		function da(a, b, c, e, f) {
			var g = (new Date(p(a, 6, !0) + "-01-01")).getUTCDay();
			b = 7 * (b - 1) + ((null != c ? c : f) - f) + (f - g + (g > e ? 7 : 0)) + 1;
			return {
				year: 0 < b ? a : a - 1,
				dayOfYear: 0 < b ? b : (D(a - 1) ? 366 : 365) + b
			}
		}

		function na(b) {
			var c = b._i,
				e = b._f;
			"undefined" === typeof b._pf && x(b);
			if (null === c) return y.invalid({
				nullInput: !0
			});
			"string" === typeof c && (b._i = c = l().preparse(c));
			if (y.isMoment(c)) b = k({}, c), b._d = new Date(+c._d);
			else if (e)
				if (t(e)) {
					var c = b,
						g, h, m, p;
					if (0 === c._f.length) c._pf.invalidFormat = !0, c._d = new Date(NaN);
					else {
						for (e =
							0; e < c._f.length; e++)
							if (p = 0, g = k({}, c), x(g), g._f = c._f[e], M(g), z(g) && (p += g._pf.charsLeftOver, p += 10 * g._pf.unusedTokens.length, g._pf.score = p, null == m || p < m)) m = p, h = g;
						k(c, h || g)
					}
				} else M(b);
			else if (g = b, h = g._i, m = ta.exec(h), h === a) g._d = new Date;
			else if (m) g._d = new Date(+m[1]);
			else if ("string" === typeof h)
				if (m = g._i, c = ua.exec(m)) {
					g._pf.iso = !0;
					for (h = 4; 0 < h; h--)
						if (c[h]) {
							g._f = Wa[h - 1] + (c[6] || " ");
							break
						}
					for (h = 0; 4 > h; h++)
						if (Ja[h][1].exec(m)) {
							g._f += Ja[h][0];
							break
						}
					m.match(Z) && (g._f += "Z");
					M(g)
				} else g._d = new Date(m);
			else t(h) ?
				(g._a = h.slice(0), ca(g)) : "[object Date]" === Object.prototype.toString.call(h) || h instanceof Date ? g._d = new Date(+h) : "object" === typeof h ? g._d || (h = s(g._i), g._a = [h.year, h.month, h.day, h.hour, h.minute, h.second, h.millisecond], ca(g)) : g._d = new Date(h);
			return new f(b)
		}

		function O(a, b) {
			y.fn[a] = y.fn[a + "s"] = function(a) {
				var c = this._isUTC ? "UTC" : "";
				return null != a ? (this._d["set" + c + b](a), y.updateOffset(this), this) : this._d["get" + c + b]()
			}
		}

		function Y(a) {
			y.duration.fn[a] = function() {
				return this._data[a]
			}
		}

		function X(a, b) {
			y.duration.fn["as" +
				a] = function() {
				return +this / b
			}
		}

		function B(a) {
			var b = !1,
				c = y;
			"undefined" === typeof ender && (a ? (ka.moment = function() {
				!b && console && console.warn && (b = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release."));
				return c.apply(null, arguments)
			}, k(ka.moment, c)) : ka.moment = y)
		}
		for (var y, ka = this, la = Math.round, P, W = {}, wa = "undefined" !== typeof module && module.exports && "undefined" !== typeof require, ta = /^\/?Date\((\-?\d+)/i, ga = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
				ya = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Ga = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, V = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, qa = /\d\d?/, g = /\d{1,3}/, oa = /\d{1,4}/, ia = /[+\-]?\d{1,6}/, ea = /\d+/, eb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
				Z = /Z|[\+\-]\d\d:?\d\d/gi, pa = /T/i, fb = /[\+\-]?\d+(\.\d{1,3})?/, Ta = /\d/, Ua = /\d\d/, Va = /\d{3}/, gb = /\d{4}/, hb = /[+\-]?\d{6}/, ua = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Wa = ["YYYY-MM-DD", "GGGG-[W]WW", "GGGG-[W]WW-E", "YYYY-DDD"], Ja = [
					["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
					["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
					["HH:mm", /(T| )\d\d:\d\d/],
					["HH", /(T| )\d\d/]
				], bb = /([\+\-]|\d\d)/gi, Ka = ["Date", "Hours", "Minutes", "Seconds", "Milliseconds"],
				va = {
					Milliseconds: 1,
					Seconds: 1E3,
					Minutes: 6E4,
					Hours: 36E5,
					Days: 864E5,
					Months: 2592E6,
					Years: 31536E6
				}, Xa = {
					ms: "millisecond",
					s: "second",
					m: "minute",
					h: "hour",
					d: "day",
					D: "date",
					w: "week",
					W: "isoWeek",
					M: "month",
					y: "year",
					DDD: "dayOfYear",
					e: "weekday",
					E: "isoWeekday",
					gg: "weekYear",
					GG: "isoWeekYear"
				}, Na = {
					dayofyear: "dayOfYear",
					isoweekday: "isoWeekday",
					isoweek: "isoWeek",
					weekyear: "weekYear",
					isoweekyear: "isoWeekYear"
				}, Oa = {}, Ya = "DDD w W M D d".split(" "), Za = "MDHhmswW".split(""), ra = {
					M: function() {
						return this.month() + 1
					},
					MMM: function(a) {
						return this.lang().monthsShort(this,
							a)
					},
					MMMM: function(a) {
						return this.lang().months(this, a)
					},
					D: function() {
						return this.date()
					},
					DDD: function() {
						return this.dayOfYear()
					},
					d: function() {
						return this.day()
					},
					dd: function(a) {
						return this.lang().weekdaysMin(this, a)
					},
					ddd: function(a) {
						return this.lang().weekdaysShort(this, a)
					},
					dddd: function(a) {
						return this.lang().weekdays(this, a)
					},
					w: function() {
						return this.week()
					},
					W: function() {
						return this.isoWeek()
					},
					YY: function() {
						return p(this.year() % 100, 2)
					},
					YYYY: function() {
						return p(this.year(), 4)
					},
					YYYYY: function() {
						return p(this.year(),
							5)
					},
					YYYYYY: function() {
						var a = this.year();
						return (0 <= a ? "+" : "-") + p(Math.abs(a), 6)
					},
					gg: function() {
						return p(this.weekYear() % 100, 2)
					},
					gggg: function() {
						return this.weekYear()
					},
					ggggg: function() {
						return p(this.weekYear(), 5)
					},
					GG: function() {
						return p(this.isoWeekYear() % 100, 2)
					},
					GGGG: function() {
						return this.isoWeekYear()
					},
					GGGGG: function() {
						return p(this.isoWeekYear(), 5)
					},
					e: function() {
						return this.weekday()
					},
					E: function() {
						return this.isoWeekday()
					},
					a: function() {
						return this.lang().meridiem(this.hours(), this.minutes(), !0)
					},
					A: function() {
						return this.lang().meridiem(this.hours(), this.minutes(), !1)
					},
					H: function() {
						return this.hours()
					},
					h: function() {
						return this.hours() % 12 || 12
					},
					m: function() {
						return this.minutes()
					},
					s: function() {
						return this.seconds()
					},
					S: function() {
						return w(this.milliseconds() / 100)
					},
					SS: function() {
						return p(w(this.milliseconds() / 10), 2)
					},
					SSS: function() {
						return p(this.milliseconds(), 3)
					},
					SSSS: function() {
						return p(this.milliseconds(), 3)
					},
					Z: function() {
						var a = -this.zone(),
							b = "+";
						0 > a && (a = -a, b = "-");
						return b + p(w(a / 60), 2) + ":" +
							p(w(a) % 60, 2)
					},
					ZZ: function() {
						var a = -this.zone(),
							b = "+";
						0 > a && (a = -a, b = "-");
						return b + p(w(a / 60), 2) + p(w(a) % 60, 2)
					},
					z: function() {
						return this.zoneAbbr()
					},
					zz: function() {
						return this.zoneName()
					},
					X: function() {
						return this.unix()
					},
					Q: function() {
						return this.quarter()
					}
				}, Ha = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Ya.length;) P = Ya.pop(), ra[P + "o"] = c(ra[P], P);
		for (; Za.length;) P = Za.pop(), ra[P + P] = b(ra[P], 2);
		ra.DDDD = b(ra.DDD, 3);
		k(e.prototype, {
			set: function(a) {
				var b, c;
				for (c in a) b = a[c], "function" === typeof b ?
					this[c] = b : this["_" + c] = b
			},
			_months: "January February March April May June July August September October November December".split(" "),
			months: function(a) {
				return this._months[a.month()]
			},
			_monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
			monthsShort: function(a) {
				return this._monthsShort[a.month()]
			},
			monthsParse: function(a) {
				var b, c;
				this._monthsParse || (this._monthsParse = []);
				for (b = 0; 12 > b; b++)
					if (this._monthsParse[b] || (c = y.utc([2E3, b]), c = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""),
							this._monthsParse[b] = new RegExp(c.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b
			},
			_weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
			weekdays: function(a) {
				return this._weekdays[a.day()]
			},
			_weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
			weekdaysShort: function(a) {
				return this._weekdaysShort[a.day()]
			},
			_weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
			weekdaysMin: function(a) {
				return this._weekdaysMin[a.day()]
			},
			weekdaysParse: function(a) {
				var b, c;
				this._weekdaysParse ||
					(this._weekdaysParse = []);
				for (b = 0; 7 > b; b++)
					if (this._weekdaysParse[b] || (c = y([2E3, 1]).day(b), c = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(c.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
			},
			_longDateFormat: {
				LT: "h:mm A",
				L: "MM/DD/YYYY",
				LL: "MMMM D YYYY",
				LLL: "MMMM D YYYY LT",
				LLLL: "dddd, MMMM D YYYY LT"
			},
			longDateFormat: function(a) {
				var b = this._longDateFormat[a];
				!b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,
					function(a) {
						return a.slice(1)
					}), this._longDateFormat[a] = b);
				return b
			},
			isPM: function(a) {
				return "p" === (a + "").toLowerCase().charAt(0)
			},
			_meridiemParse: /[ap]\.?m?\.?/i,
			meridiem: function(a, b, c) {
				return 11 < a ? c ? "pm" : "PM" : c ? "am" : "AM"
			},
			_calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			calendar: function(a, b) {
				var c = this._calendar[a];
				return "function" === typeof c ? c.apply(b) : c
			},
			_relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			relativeTime: function(a, b, c, e) {
				var f = this._relativeTime[c];
				return "function" === typeof f ? f(a, b, c, e) : f.replace(/%d/i, a)
			},
			pastFuture: function(a, b) {
				var c = this._relativeTime[0 < a ? "future" : "past"];
				return "function" === typeof c ? c(b) : c.replace(/%s/i, b)
			},
			ordinal: function(a) {
				return this._ordinal.replace("%d", a)
			},
			_ordinal: "%d",
			preparse: function(a) {
				return a
			},
			postformat: function(a) {
				return a
			},
			week: function(a) {
				return Q(a, this._week.dow, this._week.doy).week
			},
			_week: {
				dow: 0,
				doy: 6
			},
			_invalidDate: "Invalid date",
			invalidDate: function() {
				return this._invalidDate
			}
		});
		y = function(b, c, e, f) {
			"boolean" === typeof e && (f = e, e = a);
			return na({
				_i: b,
				_f: c,
				_l: e,
				_strict: f,
				_isUTC: !1
			})
		};
		y.utc = function(b, c, e, f) {
			"boolean" === typeof e && (f = e, e = a);
			return na({
				_useUTC: !0,
				_isUTC: !0,
				_l: e,
				_i: b,
				_f: c,
				_strict: f
			}).utc()
		};
		y.unix = function(a) {
			return y(1E3 * a)
		};
		y.duration = function(a, b) {
			var c = a,
				e = null,
				f;
			if (y.isDuration(a)) c = {
				ms: a._milliseconds,
				d: a._days,
				M: a._months
			};
			else if ("number" === typeof a) c = {}, b ? c[b] = a : c.milliseconds = a;
			else if (e = ga.exec(a)) f = "-" === e[1] ? -1 : 1, c = {
				y: 0,
				d: w(e[2]) * f,
				h: w(e[3]) * f,
				m: w(e[4]) * f,
				s: w(e[5]) * f,
				ms: w(e[6]) * f
			};
			else if (e = ya.exec(a)) f = "-" === e[1] ? -1 : 1, c = function(a) {
				a = a && parseFloat(a.replace(",", "."));
				return (isNaN(a) ? 0 : a) * f
			}, c = {
				y: c(e[2]),
				M: c(e[3]),
				d: c(e[4]),
				h: c(e[5]),
				m: c(e[6]),
				s: c(e[7]),
				w: c(e[8])
			};
			e = new h(c);
			y.isDuration(a) && a.hasOwnProperty("_lang") && (e._lang = a._lang);
			return e
		};
		y.version = "2.5.0";
		y.defaultFormat =
			"YYYY-MM-DDTHH:mm:ssZ";
		y.updateOffset = function() {};
		y.lang = function(a, b) {
			if (!a) return y.fn._lang._abbr;
			if (b) {
				var c = J(a);
				b.abbr = c;
				W[c] || (W[c] = new e);
				W[c].set(b)
			} else null === b ? (delete W[a], a = "en") : W[a] || l(a);
			return (y.duration.fn._lang = y.fn._lang = l(a))._abbr
		};
		y.langData = function(a) {
			a && a._lang && a._lang._abbr && (a = a._lang._abbr);
			return l(a)
		};
		y.isMoment = function(a) {
			return a instanceof f
		};
		y.isDuration = function(a) {
			return a instanceof h
		};
		for (P = Ha.length - 1; 0 <= P; --P) G(Ha[P]);
		y.normalizeUnits = function(a) {
			return H(a)
		};
		y.invalid = function(a) {
			var b = y.utc(NaN);
			null != a ? k(b._pf, a) : b._pf.userInvalidated = !0;
			return b
		};
		y.parseZone = function(a) {
			return y(a).parseZone()
		};
		k(y.fn = f.prototype, {
			clone: function() {
				return y(this)
			},
			valueOf: function() {
				return +this._d + 6E4 * (this._offset || 0)
			},
			unix: function() {
				return Math.floor(+this / 1E3)
			},
			toString: function() {
				return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
			},
			toDate: function() {
				return this._offset ? new Date(+this) : this._d
			},
			toISOString: function() {
				var a = y(this).utc();
				return 0 <
					a.year() && 9999 >= a.year() ? F(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : F(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
			},
			toArray: function() {
				return [this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds(), this.milliseconds()]
			},
			isValid: function() {
				return z(this)
			},
			isDSTShifted: function() {
				return this._a ? this.isValid() && 0 < A(this._a, (this._isUTC ? y.utc(this._a) : y(this._a)).toArray()) : !1
			},
			parsingFlags: function() {
				return k({}, this._pf)
			},
			invalidAt: function() {
				return this._pf.overflow
			},
			utc: function() {
				return this.zone(0)
			},
			local: function() {
				this.zone(0);
				this._isUTC = !1;
				return this
			},
			format: function(a) {
				a = F(this, a || y.defaultFormat);
				return this.lang().postformat(a)
			},
			add: function(a, b) {
				var c;
				c = "string" === typeof a ? y.duration(+b, a) : y.duration(a, b);
				r(this, c, 1);
				return this
			},
			subtract: function(a, b) {
				var c;
				c = "string" === typeof a ? y.duration(+b, a) : y.duration(a, b);
				r(this, c, -1);
				return this
			},
			diff: function(a, b, c) {
				a = K(a, this);
				var e = 6E4 * (this.zone() - a.zone()),
					f;
				b = H(b);
				"year" === b || "month" === b ? (f = 432E5 * (this.daysInMonth() + a.daysInMonth()), e =
					12 * (this.year() - a.year()) + (this.month() - a.month()), e += (this - y(this).startOf("month") - (a - y(a).startOf("month"))) / f, e -= 6E4 * (this.zone() - y(this).startOf("month").zone() - (a.zone() - y(a).startOf("month").zone())) / f, "year" === b && (e /= 12)) : (f = this - a, e = "second" === b ? f / 1E3 : "minute" === b ? f / 6E4 : "hour" === b ? f / 36E5 : "day" === b ? (f - e) / 864E5 : "week" === b ? (f - e) / 6048E5 : f);
				return c ? e : m(e)
			},
			from: function(a, b) {
				return y.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
			},
			fromNow: function(a) {
				return this.from(y(), a)
			},
			calendar: function() {
				var a =
					K(y(), this).startOf("day"),
					a = this.diff(a, "days", !0),
					a = -6 > a ? "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse";
				return this.format(this.lang().calendar(a, this))
			},
			isLeapYear: function() {
				return D(this.year())
			},
			isDST: function() {
				return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
			},
			day: function(a) {
				var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
				return null != a ? (a = ja(a, this.lang()), this.add({
					d: a - b
				})) : b
			},
			month: function(a) {
				var b =
					this._isUTC ? "UTC" : "",
					c;
				if (null != a) {
					if ("string" === typeof a && (a = this.lang().monthsParse(a), "number" !== typeof a)) return this;
					c = this.date();
					this.date(1);
					this._d["set" + b + "Month"](a);
					this.date(Math.min(c, this.daysInMonth()));
					y.updateOffset(this);
					return this
				}
				return this._d["get" + b + "Month"]()
			},
			startOf: function(a) {
				a = H(a);
				switch (a) {
					case "year":
						this.month(0);
					case "month":
						this.date(1);
					case "week":
					case "isoWeek":
					case "day":
						this.hours(0);
					case "hour":
						this.minutes(0);
					case "minute":
						this.seconds(0);
					case "second":
						this.milliseconds(0)
				}
				"week" ===
				a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1);
				return this
			},
			endOf: function(a) {
				a = H(a);
				return this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
			},
			isAfter: function(a, b) {
				b = "undefined" !== typeof b ? b : "millisecond";
				return +this.clone().startOf(b) > +y(a).startOf(b)
			},
			isBefore: function(a, b) {
				b = "undefined" !== typeof b ? b : "millisecond";
				return +this.clone().startOf(b) < +y(a).startOf(b)
			},
			isSame: function(a, b) {
				b = b || "ms";
				return +this.clone().startOf(b) === +K(a, this).startOf(b)
			},
			min: function(a) {
				a = y.apply(null,
					arguments);
				return a < this ? this : a
			},
			max: function(a) {
				a = y.apply(null, arguments);
				return a > this ? this : a
			},
			zone: function(a) {
				var b = this._offset || 0;
				if (null != a) "string" === typeof a && (a = S(a)), 16 > Math.abs(a) && (a *= 60), this._offset = a, this._isUTC = !0, b !== a && r(this, y.duration(b - a, "m"), 1, !0);
				else return this._isUTC ? b : this._d.getTimezoneOffset();
				return this
			},
			zoneAbbr: function() {
				return this._isUTC ? "UTC" : ""
			},
			zoneName: function() {
				return this._isUTC ? "Coordinated Universal Time" : ""
			},
			parseZone: function() {
				this._tzm ? this.zone(this._tzm) :
					"string" === typeof this._i && this.zone(this._i);
				return this
			},
			hasAlignedHourOffset: function(a) {
				a = a ? y(a).zone() : 0;
				return 0 === (this.zone() - a) % 60
			},
			daysInMonth: function() {
				var a = this.year(),
					b = this.month();
				return (new Date(Date.UTC(a, b + 1, 0))).getUTCDate()
			},
			dayOfYear: function(a) {
				var b = la((y(this).startOf("day") - y(this).startOf("year")) / 864E5) + 1;
				return null == a ? b : this.add("d", a - b)
			},
			quarter: function() {
				return Math.ceil((this.month() + 1) / 3)
			},
			weekYear: function(a) {
				var b = Q(this, this.lang()._week.dow, this.lang()._week.doy).year;
				return null == a ? b : this.add("y", a - b)
			},
			isoWeekYear: function(a) {
				var b = Q(this, 1, 4).year;
				return null == a ? b : this.add("y", a - b)
			},
			week: function(a) {
				var b = this.lang().week(this);
				return null == a ? b : this.add("d", 7 * (a - b))
			},
			isoWeek: function(a) {
				var b = Q(this, 1, 4).week;
				return null == a ? b : this.add("d", 7 * (a - b))
			},
			weekday: function(a) {
				var b = (this.day() + 7 - this.lang()._week.dow) % 7;
				return null == a ? b : this.add("d", a - b)
			},
			isoWeekday: function(a) {
				return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
			},
			get: function(a) {
				a = H(a);
				return this[a]()
			},
			set: function(a, b) {
				a = H(a);
				if ("function" === typeof this[a]) this[a](b);
				return this
			},
			lang: function(b) {
				if (b === a) return this._lang;
				this._lang = l(b);
				return this
			}
		});
		for (P = 0; P < Ka.length; P++) O(Ka[P].toLowerCase().replace(/s$/, ""), Ka[P]);
		O("year", "FullYear");
		y.fn.days = y.fn.day;
		y.fn.months = y.fn.month;
		y.fn.weeks = y.fn.week;
		y.fn.isoWeeks = y.fn.isoWeek;
		y.fn.toJSON = y.fn.toISOString;
		k(y.duration.fn = h.prototype, {
			_bubble: function() {
				var a = this._milliseconds,
					b = this._days,
					c = this._months,
					e = this._data;
				e.milliseconds = a % 1E3;
				a =
					m(a / 1E3);
				e.seconds = a % 60;
				a = m(a / 60);
				e.minutes = a % 60;
				a = m(a / 60);
				e.hours = a % 24;
				b += m(a / 24);
				e.days = b % 30;
				c += m(b / 30);
				e.months = c % 12;
				b = m(c / 12);
				e.years = b
			},
			weeks: function() {
				return m(this.days() / 7)
			},
			valueOf: function() {
				return this._milliseconds + 864E5 * this._days + this._months % 12 * 2592E6 + 31536E6 * w(this._months / 12)
			},
			humanize: function(a) {
				var b = +this,
					c;
				c = !a;
				var e = this.lang(),
					f = la(Math.abs(b) / 1E3),
					g = la(f / 60),
					h = la(g / 60),
					k = la(h / 24),
					l = la(k / 365),
					f = 45 > f && ["s", f] || 1 === g && ["m"] || 45 > g && ["mm", g] || 1 === h && ["h"] || 22 > h && ["hh", h] || 1 ===
					k && ["d"] || 25 >= k && ["dd", k] || 45 >= k && ["M"] || 345 > k && ["MM", la(k / 30)] || 1 === l && ["y"] || ["yy", l];
				f[2] = c;
				f[3] = 0 < b;
				f[4] = e;
				c = fa.apply({}, f);
				a && (c = this.lang().pastFuture(b, c));
				return this.lang().postformat(c)
			},
			add: function(a, b) {
				var c = y.duration(a, b);
				this._milliseconds += c._milliseconds;
				this._days += c._days;
				this._months += c._months;
				this._bubble();
				return this
			},
			subtract: function(a, b) {
				var c = y.duration(a, b);
				this._milliseconds -= c._milliseconds;
				this._days -= c._days;
				this._months -= c._months;
				this._bubble();
				return this
			},
			get: function(a) {
				a =
					H(a);
				return this[a.toLowerCase() + "s"]()
			},
			as: function(a) {
				a = H(a);
				return this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
			},
			lang: y.fn.lang,
			toIsoString: function() {
				var a = Math.abs(this.years()),
					b = Math.abs(this.months()),
					c = Math.abs(this.days()),
					e = Math.abs(this.hours()),
					f = Math.abs(this.minutes()),
					g = Math.abs(this.seconds() + this.milliseconds() / 1E3);
				return this.asSeconds() ? (0 > this.asSeconds() ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (e || f || g ? "T" : "") + (e ? e + "H" : "") + (f ? f + "M" : "") + (g ? g + "S" : "") : "P0D"
			}
		});
		for (P in va) va.hasOwnProperty(P) && (X(P, va[P]), Y(P.toLowerCase()));
		X("Weeks", 6048E5);
		y.duration.fn.asMonths = function() {
			return (+this - 31536E6 * this.years()) / 2592E6 + 12 * this.years()
		};
		y.lang("en", {
			ordinal: function(a) {
				var b = a % 10,
					b = 1 === w(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + b
			}
		});
		wa ? (module.exports = y, B(!0)) : "function" === typeof define && define.amd ? define("moment", function(b, c, e) {
			e.config && e.config() && !0 !== e.config().noGlobal && B(e.config().noGlobal === a);
			return y
		}) : B()
	}).call(this);
	(function(a) {
		a.moment.lang("zh-cn", {
			months: "\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),
			monthsShort: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
			weekdays: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
			weekdaysShort: "\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),
			weekdaysMin: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
			longDateFormat: {
				LT: "Ah\u70b9mm",
				L: "YYYY\u5e74MMMD\u65e5",
				LL: "YYYY\u5e74MMMD\u65e5",
				LLL: "YYYY\u5e74MMMD\u65e5LT",
				LLLL: "YYYY\u5e74MMMD\u65e5ddddLT",
				l: "YYYY\u5e74MMMD\u65e5",
				ll: "YYYY\u5e74MMMD\u65e5",
				lll: "YYYY\u5e74MMMD\u65e5LT",
				llll: "YYYY\u5e74MMMD\u65e5ddddLT"
			},
			meridiem: function(a, c, e) {
				a = 100 * a + c;
				return 600 > a ? "\u51cc\u6668" :
					900 > a ? "\u65e9\u4e0a" : 1130 > a ? "\u4e0a\u5348" : 1230 > a ? "\u4e2d\u5348" : 1800 > a ? "\u4e0b\u5348" : "\u665a\u4e0a"
			},
			calendar: {
				sameDay: function() {
					return 0 === this.minutes() ? "[\u4eca\u5929]Ah[\u70b9\u6574]" : "[\u4eca\u5929]LT"
				},
				nextDay: function() {
					return 0 === this.minutes() ? "[\u660e\u5929]Ah[\u70b9\u6574]" : "[\u660e\u5929]LT"
				},
				lastDay: function() {
					return 0 === this.minutes() ? "[\u6628\u5929]Ah[\u70b9\u6574]" : "[\u6628\u5929]LT"
				},
				nextWeek: function() {
					var a;
					a = moment().startOf("week");
					a = 604800 <= this.unix() - a.unix() ? "[\u4e0b]" :
						"[\u672c]";
					return 0 === this.minutes() ? a + "dddAh\u70b9\u6574" : a + "dddAh\u70b9mm"
				},
				lastWeek: function() {
					var a;
					a = moment().startOf("week");
					a = this.unix() < a.unix() ? "[\u4e0a]" : "[\u672c]";
					return 0 === this.minutes() ? a + "dddAh\u70b9\u6574" : a + "dddAh\u70b9mm"
				},
				sameElse: "L"
			},
			ordinal: function(a, c) {
				switch (c) {
					case "d":
					case "D":
					case "DDD":
						return a + "\u65e5";
					case "M":
						return a + "\u6708";
					case "w":
					case "W":
						return a + "\u5468";
					default:
						return a
				}
			},
			relativeTime: {
				future: "%s\u5185",
				past: "%s\u524d",
				s: "\u51e0\u79d2",
				m: "1\u5206\u949f",
				mm: "%d\u5206\u949f",
				h: "1\u5c0f\u65f6",
				hh: "%d\u5c0f\u65f6",
				d: "1\u5929",
				dd: "%d\u5929",
				M: "1\u4e2a\u6708",
				MM: "%d\u4e2a\u6708",
				y: "1\u5e74",
				yy: "%d\u5e74"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(window);
	qun.star.common.Closer = {};
	(function() {
		plu.messages.receive("close", "roomstatus", function(a) {
			var b = $(window).height() / 2;
			$("#closer").css("top", b);
			b = moment(a.SpamBlack.UnBlackTime).format("YYYY-MM-DD HH:mm:ss");
			"9999-12-31 23:59:59" == b ? b = "\u6c38\u4e45\u5c01\u505c" : $("#closer .unblack").text("\u4e34\u65f6");
			var c = a.SpamBlack.Type,
				e = " \u8272\u60c5\u66b4\u529b \u4fae\u8fb1\u8c29\u9a82 \u53cd\u52a8\u653f\u6cbb \u5e7f\u544a\u6b3a\u8bc8 \u4f7f\u7528\u5916\u6302 \u5047\u5192\u540d\u4eba \u957f\u65f6\u95f4\u9ed1\u5c4f \u5176\u4ed6".split(" ")[c];
			8 ==
				c && (e = a.SpamBlack.Description);
			$("#closer").show();
			$(".mask-all").show();
			$("#closer .reason").text(e);
			$("#closer .date").text(b);
			$(".le-report-btn").attr("href")
		})
	})();
	qun.star.third.Placeholder = {};
	(function(a, b) {
		function c() {
			var a = document,
				b = a.getElementsByTagName("input"),
				c = a.getElementsByTagName("textarea"),
				k = "placeholder" in a.createElement("input"),
				m = "placeholder" in a.createElement("textarea"),
				a = function(a) {
					var b = a.getAttribute("placeholder");
					"" == a.defaultValue && (a.value = b, a.setAttribute("old_color", a.style.color), a.style.color = "#c0c0c0");
					a.onfocus = function() {
						this.style.color = this.getAttribute("old_color");
						a.value === b && (this.value = "")
					};
					a.onblur = function() {
						"" === a.value && (this.style.color =
							"#c0c0c0", this.value = b)
					}
				};
			if (!k)
				for (var k = 0, p = b.length; k < p; k++) {
					var r = b[k],
						t = r.getAttribute("placeholder");
					"text" === r.type && t && a(r)
				}
			if (!m)
				for (k = 0, p = c.length; k < p; k++) b = c[k], t = b.getAttribute("placeholder"), "text" === b.type && t && a(b)
		}
		a.placeHolder = c;
		c()
	})(window, jQuery);
	qun.star.io.Popup = {};
	(function() {
		function a(a) {
			r != a.game.gameId && (r = a.game.gameId, e(), c())
		}

		function b(a) {
			r != t && (r = t, e(), c())
		}

		function c() {
			A != p.OPEN && (f(), H = window.setInterval(f, 18E4), A = p.OPEN)
		}

		function e() {
			A != p.CLOSE && A != p.PENDING && (window.clearInterval(H), A = p.CLOSE)
		}

		function f() {
			k.star("/webapi/Notification", {
				pageType: 2,
				gameId: r
			}, !0).get().then(h)
		}

		function h(a) {
			m.post("load", "io-popup", a, !0)
		}
		var k = plu.io.Api,
			m = plu.messages,
			p = {
				OPEN: "open",
				CLOSE: "close",
				PENDING: "pending"
			},
			r = window.gameId,
			t = window.pageData && pageData.defaultGameId ||
			gameId,
			A = p.PENDING,
			H;
		m.receive("load", "page", function() {
			m.receive("livestart", "roomstatus", a).receive("liveend", "roomstatus", b);
			c()
		}).receive("send", "io-popup", function() {
			f()
		})
	})();
	qun.star.io.UserIo = {};
	(function() {
		function a(a) {
			c.isCurrentUser(a.id) || (c.setCurrentUser(a), b.post(e.ON_CHANGE, "User", a, !0))
		}
		var b = plu.messages,
			c = plu.model.UserManager,
			e = {
				ON_CHANGE: "onChange"
			};
		window.LoginManager.checkLogin(function(b) {
			b = b.data;
			a({
				id: b.uid,
				name: b.username,
				grade: b.grade || 1
			})
		}, function(b) {
			a({
				id: b.uid,
				name: b.username,
				grade: b.grade
			})
		})
	})();
	qun.star.nsl = {};
	qun.star.nsl.formerMain = {};
	(function(a, b, c) {
		roominfo();
		setTimeout(function() {
			chat = plu.widget.chat()
		}, 300);
		window.setTimeout(function() {
			plu.io.Api.get("/pvcount/room", {
				type: "live",
				roomId: pvCount.roomId
			})
		})
	})(window, jQuery);
})();