(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const navLinks = [
    {
        label: "Programs",
        href: "#programs"
    },
    {
        label: "Journal",
        href: "#journal"
    },
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Mentors",
        href: "#mentors"
    },
    {
        label: "Testimonials",
        href: "#testimonials"
    }
];
function Navbar() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handler = {
                "Navbar.useEffect.handler": ()=>setScrolled(window.scrollY > 24)
            }["Navbar.useEffect.handler"];
            window.addEventListener("scroll", handler);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handler)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
        className: "fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4",
        initial: {
            y: -80,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-6xl mx-auto rounded-2xl transition-all duration-500 ${scrolled ? "glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.06)] py-3 px-5" : "bg-transparent py-4 px-5"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "flex flex-col leading-none group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display text-[#111111] text-xl tracking-[3px] uppercase font-medium group-hover:tracking-[4px] transition-all duration-300",
                                    children: "Captanova"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#999999] text-[8px] tracking-[2.5px] uppercase mt-0.5 font-medium",
                                    children: "Be The Captain Of Your Life"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-1",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "relative text-[#555555] hover:text-[#111111] text-base font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-black/[0.03]",
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#quiz",
                                className: "relative bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white text-base font-semibold px-5 py-2.5 rounded-full tracking-tight transition-all duration-300 hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:scale-[1.03] active:scale-[0.98]",
                                children: "Take The Assessment"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden text-[#111111] w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5",
                            onClick: ()=>setMenuOpen(!menuOpen),
                            "aria-label": "Toggle menu",
                            children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 53
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        className: "md:hidden overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-col gap-1 pt-4 pb-2 border-t border-black/5 mt-4",
                            children: [
                                navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.href,
                                        onClick: ()=>setMenuOpen(false),
                                        className: "text-[#555555] hover:text-[#111111] text-base font-medium px-3 py-3 rounded-xl hover:bg-black/[0.03] transition-colors",
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#quiz",
                                    onClick: ()=>setMenuOpen(false),
                                    className: "bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-semibold text-base px-5 py-3 rounded-full text-center mt-2",
                                    children: "Take The Assessment"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Navbar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Navbar, "EaXJNDiM7KISlWFYokQmqh/1M0I=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const frameworkSteps = [
    {
        label: "Awareness",
        sub: "Creates Clarity",
        color: "#7c3aed"
    },
    {
        label: "Clarity",
        sub: "Creates Confidence",
        color: "#2563eb"
    },
    {
        label: "Confidence",
        sub: "Improves Communication",
        color: "#0891b2"
    },
    {
        label: "Communication",
        sub: "Fuels Action",
        color: "#059669"
    },
    {
        label: "Action",
        sub: "Develops Leadership",
        color: "#c9962f"
    },
    {
        label: "Leadership",
        sub: "Creates Legacy",
        color: "#f0654c"
    }
];
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex flex-col overflow-hidden aurora-hero pt-32 pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-[500px] h-[500px] bg-purple-300/30 -top-40 -left-40"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-[400px] h-[400px] bg-blue-300/25 top-20 -right-20"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-[450px] h-[450px] bg-amber-200/25 bottom-0 left-1/3"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.1
                        },
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-2 glass-card text-[#555555] text-base tracking-[2px] uppercase font-semibold px-5 py-2.5 rounded-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb]"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                "The Captanova Framework"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.9,
                            delay: 0.25,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "font-display text-[#111111] leading-[0.92] mb-7 max-w-5xl font-medium",
                        style: {
                            fontSize: "clamp(2.75rem, 9vw, 6.75rem)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "Stop"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block italic gradient-text-purple",
                                children: "Overthinking."
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "Start Leading"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: "Your Life."
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.55
                        },
                        className: "text-[#555555] text-lg md:text-xl font-medium tracking-wide mb-10 max-w-md",
                        children: "From Overthinking to Conscious Leadership"
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.7
                        },
                        className: "flex flex-col sm:flex-row gap-3 mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#quiz",
                                className: "group relative bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-[#2563eb] text-white font-semibold px-9 py-4 rounded-full text-base tracking-tight transition-all duration-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.4)] hover:scale-[1.03] active:scale-[0.98]",
                                children: "Start Your 21-Day Reset"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#about",
                                className: "glass-card text-[#333333] hover:text-[#111111] px-9 py-4 rounded-full text-base font-semibold tracking-tight transition-all duration-300 hover:scale-[1.02] hover-lift",
                                children: "Discover The System"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 1,
                            delay: 1
                        },
                        className: "w-full max-w-6xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3",
                            children: frameworkSteps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "glass-card hover-lift rounded-2xl p-4 flex flex-col items-center text-center",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 1.1 + i * 0.08,
                                        duration: 0.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 rounded-full flex items-center justify-center mb-2.5 text-white text-base font-bold",
                                            style: {
                                                background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`
                                            },
                                            children: i + 1
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#111111] text-[11px] font-semibold tracking-tight",
                                            children: step.label
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#999999] text-[9px] mt-0.5 hidden md:block leading-tight",
                                            children: step.sub
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, step.label, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-10 flex justify-center pb-4",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-px h-10 bg-gradient-to-b from-[#7c3aed]/40 to-transparent",
                    animate: {
                        scaleY: [
                            0,
                            1,
                            0
                        ]
                    },
                    transition: {
                        duration: 1.8,
                        repeat: Infinity
                    }
                }, void 0, false, {
                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/HeroSection.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Reveal({ children, delay = 0, direction = "up", className, once = true }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once,
        margin: "-80px 0px"
    });
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        variants: variants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        transition: {
            duration: 0.7,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Reveal, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PainPointsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const painPoints = [
    "You overthink everything.",
    "You lack confidence.",
    "You struggle to express yourself.",
    "You procrastinate and feel stuck.",
    "You feel lost and unsure about your purpose.",
    "You know you're meant for more."
];
const helpCategories = [
    {
        icon: "🧠",
        label: "Overthinking",
        color: "#7c3aed"
    },
    {
        icon: "💪",
        label: "Confidence",
        color: "#2563eb"
    },
    {
        icon: "🎤",
        label: "Communication",
        color: "#0891b2"
    },
    {
        icon: "⏰",
        label: "Procrastination",
        color: "#059669"
    },
    {
        icon: "🧭",
        label: "Feeling Lost",
        color: "#c9962f"
    },
    {
        icon: "👑",
        label: "Leadership",
        color: "#f0654c"
    }
];
function PainPointsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative aurora-emerald py-24 md:py-32 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-96 h-96 bg-emerald-200/30 top-10 right-0"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-80 h-80 bg-cyan-200/25 bottom-10 left-0"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-5xl mx-auto mb-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-center text-[#999999] text-base tracking-[4px] uppercase font-semibold mb-12",
                            children: "What Do You Need Help With?"
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 md:grid-cols-6 gap-4",
                        children: helpCategories.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: i * 0.08,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#quiz",
                                    className: "glass-card hover-lift rounded-2xl p-5 flex flex-col items-center gap-2.5 group cursor-pointer text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110",
                                            style: {
                                                background: `linear-gradient(135deg, ${cat.color}18, ${cat.color}08)`
                                            },
                                            children: cat.icon
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#333333] group-hover:text-[#111111] text-[11px] font-semibold tracking-tight",
                                            children: cat.label
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            }, cat.label, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto grid md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        direction: "left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-card hover-lift rounded-3xl p-8 h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[#111111] font-display font-semibold text-xl mb-6",
                                    children: "Does This Sound Like You?"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3.5",
                                    children: painPoints.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#059669] mt-0.5 flex-shrink-0 text-base",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#555555] text-base leading-relaxed",
                                                    children: point
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#059669] text-base font-semibold mt-6",
                                    children: "You're not alone."
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.15,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-card hover-lift rounded-3xl p-8 h-full flex flex-col justify-center bg-gradient-to-br from-white/80 to-purple-50/40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[#111111] font-display font-semibold text-xl mb-6",
                                    children: "The Truth Is…"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#555555] text-base mb-2",
                                    children: "You are not broken."
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#555555] text-base mb-6",
                                    children: "The issue is not lack of knowledge."
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#555555] text-base mb-3",
                                    children: "The issue is lack of"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "block text-4xl font-display font-semibold text-[#111111] tracking-tight",
                                            animate: {
                                                opacity: [
                                                    0.7,
                                                    1,
                                                    0.7
                                                ]
                                            },
                                            transition: {
                                                duration: 3,
                                                repeat: Infinity
                                            },
                                            children: "Clarity"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-display text-[#999999]",
                                            children: "&"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-4xl font-display font-semibold gradient-text-purple tracking-tight",
                                            children: "Implementation."
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#777777] text-base mt-8 leading-relaxed",
                                    children: [
                                        "That's what ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#7c3aed] font-semibold",
                                            children: "Captanova"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                            lineNumber: 99,
                                            columnNumber: 27
                                        }, this),
                                        " is here to change."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        direction: "right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-card hover-lift rounded-3xl p-8 h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[#111111] font-display font-semibold text-xl mb-6",
                                    children: "Why I Created Captanova"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#555555] text-base leading-relaxed mb-4",
                                    children: "For years I searched for answers through personal development, awareness practices, coaching, books, courses, and life experience."
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#555555] text-base leading-relaxed mb-4",
                                    children: "What I discovered was simple: Most people don't need more information. They need clarity. They need confidence. They need communication skills."
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#333333] text-base leading-relaxed font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#c9962f] font-semibold",
                                            children: "Captanova"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        " was created to bridge that gap. A place where awareness becomes implementation."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#c9962f] text-base font-bold mt-5 italic font-display",
                                    children: "Because learning alone does not change your life. Action does."
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PainPointsSection.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = PainPointsSection;
var _c;
__turbopack_context__.k.register(_c, "PainPointsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const bioPoints = [
    "Born and raised in Denmark with Indian roots.",
    "Years of personal development work.",
    "Experience coaching and mentoring individuals and leaders.",
    "Deeply influenced by transformational teachings including Bob Proctor's Thinking Into Results program, along with years of personal study, awareness practices, and real-life experience.",
    "Created Captanova to bridge the gap between knowing and doing."
];
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "relative bg-white py-24 md:py-32 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-96 h-96 bg-amber-100/40 top-20 left-0"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-80 h-80 bg-purple-100/30 bottom-0 right-10"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-16 items-center mb-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                direction: "left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative max-w-[280px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[340px] mx-auto md:mx-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-[2.5rem] aspect-[4/5] overflow-hidden relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/mentors/renu-guide-portrait.jpg",
                                                    alt: "Renu Sharma, Founder of Captanova",
                                                    fill: true,
                                                    sizes: "(max-width: 640px) 280px, 340px",
                                                    className: "object-cover object-top",
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute -bottom-6 -right-6 w-28 h-28 glass-card rounded-3xl -z-10",
                                            animate: {
                                                y: [
                                                    -4,
                                                    4,
                                                    -4
                                                ]
                                            },
                                            transition: {
                                                duration: 4,
                                                repeat: Infinity
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c3aed]/20 to-[#2563eb]/20 -z-10",
                                            animate: {
                                                y: [
                                                    4,
                                                    -4,
                                                    4
                                                ]
                                            },
                                            transition: {
                                                duration: 5,
                                                repeat: Infinity
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                direction: "right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#c9962f] text-base tracking-[3px] uppercase font-semibold mb-4 block",
                                            children: "Meet Your Guide"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display text-[#111111] text-4xl md:text-5xl font-semibold mb-6 leading-tight",
                                            children: "Renu Sharma"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4 mb-8",
                                            children: bioPoints.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#c9962f] mt-1 flex-shrink-0 text-base",
                                                            children: "✦"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#555555] text-base leading-relaxed",
                                                            children: point
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                                            lineNumber: 65,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-2xl p-6 border-l-[3px] border-l-[#7c3aed]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#333333] text-lg leading-relaxed italic font-display",
                                                    children: '"My mission is simple: To help you become the captain of your life — through awareness, confidence, communication, action, and leadership."'
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
                                                    className: "text-[#7c3aed] text-base mt-3 block not-italic font-semibold tracking-wide",
                                                    children: "— RENU SHARMA"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-card hover-lift rounded-[2rem] p-10 text-center max-w-2xl mx-auto bg-gradient-to-br from-white/90 via-purple-50/30 to-amber-50/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-[#111111] text-2xl font-semibold mb-8",
                                    children: [
                                        "Why ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "gradient-text-purple",
                                            children: "Captanova"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this),
                                        "?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-8 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[#c9962f] text-base tracking-[2px] uppercase font-semibold mb-3",
                                                    children: "Eastern Awareness"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#777777] text-base leading-relaxed",
                                                    children: "Ancient wisdom, mindfulness, Sankalp, conscious presence"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[#2563eb] text-base tracking-[2px] uppercase font-semibold mb-3",
                                                    children: "Western Implementation"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#777777] text-base leading-relaxed",
                                                    children: "Modern systems, accountability, action frameworks, results"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[#999999] text-2xl mb-6",
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: "text-[#555555] text-base leading-relaxed",
                                    animate: {
                                        opacity: [
                                            0.7,
                                            1,
                                            0.7
                                        ]
                                    },
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity
                                    },
                                    children: "Captanova combines the best of both worlds to create real, lasting change."
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/AboutSection.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MentorsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/lucide-react/dist/esm/icons/earth.mjs [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/lucide-react/dist/esm/icons/quote.mjs [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const trustBadges = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        label: "Certified Coach"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"],
        label: "International Standards"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        label: "Thousands of Students"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        label: "Real Workshop Experience"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        label: "Evidence-Based Training"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        label: "Hands-On Learning"
    }
];
const credentials = [
    "Trained in Thinking Into Results™ and other global personal-development methodologies.",
    "Active member of international leadership masterminds across the US and Europe.",
    "Years of real, hands-on coaching experience — not theory read from a book.",
    "Trusted by students across the Awareness, Mindset, Communication and Leadership journey."
];
const gallery = [
    {
        src: "/mentors/mastermind-diamond-rich.jpg",
        title: "Diamond Rich Club",
        sub: "International leadership mastermind"
    },
    {
        src: "/mentors/mastermind-coffee-charts.jpg",
        title: "Global Mastermind Circles",
        sub: "Learning alongside industry experts"
    },
    {
        src: "/mentors/leadership-mastermind.jpg",
        title: "Leadership Mastermind",
        sub: "Immersive leadership retreats"
    },
    {
        src: "/mentors/women-empower-women.jpg",
        title: "Women Empower Women",
        sub: "A global sisterhood of leaders"
    },
    {
        src: "/mentors/renu-portrait-flowers.jpg",
        title: "Celebrating Every Win",
        sub: "A community that shows up for you"
    }
];
/** Desktop-only mouse-parallax tilt wrapper. Touch devices never fire mousemove, so this is a no-op on mobile. */ function TiltCard({ children, className }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(y, [
        -0.5,
        0.5
    ], [
        7,
        -7
    ]), {
        stiffness: 150,
        damping: 22
    });
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
        -0.5,
        0.5
    ], [
        -7,
        7
    ]), {
        stiffness: 150,
        damping: 22
    });
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(1, {
        stiffness: 150,
        damping: 22
    });
    function handleMouseMove(e) {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    }
    function handleEnter() {
        scale.set(1.02);
    }
    function handleLeave() {
        x.set(0);
        y.set(0);
        scale.set(1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        onMouseMove: handleMouseMove,
        onMouseEnter: handleEnter,
        onMouseLeave: handleLeave,
        style: {
            rotateX,
            rotateY,
            scale,
            transformStyle: "preserve-3d"
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(TiltCard, "4xU4DfYKJ8hL1QQncMRq0J+qSZo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = TiltCard;
function MentorsSection() {
    const marqueeItems = [
        ...gallery,
        ...gallery
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "mentors",
        className: "relative aurora-gold py-24 md:py-32 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-[28rem] h-[28rem] bg-purple-100/30 -top-20 -left-20"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-96 h-96 bg-amber-100/35 bottom-0 right-0"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16 md:mb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2 glass-card text-[#555555] text-base tracking-[2px] uppercase font-semibold px-5 py-2.5 rounded-full mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#c9962f] to-[#7c3aed]"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        "The Experience Behind Captanova"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-[#111111] text-4xl md:text-5xl font-semibold leading-tight mb-5",
                                    children: [
                                        "Guided By Real Experience.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "hidden md:block"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        "Backed By ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "gradient-text-purple italic",
                                            children: "Global Standards."
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 120,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#777777] text-base md:text-lg max-w-2xl mx-auto leading-relaxed",
                                    children: "You're not learning from theory in a book. You're learning from someone who has sat in the world's leading rooms of leadership, mindset and mastery — and brought that experience home to you."
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-[1.05fr_1fr] gap-20 lg:gap-16 items-center mb-28 md:mb-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                direction: "left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:mr-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                perspective: 1200
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TiltCard, {
                                                className: "relative rounded-[2.5rem] overflow-hidden aspect-[4/5] glass-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/mentors/renu-speaking-stage.jpg",
                                                        alt: "Renu Sharma coaching a live session on stage",
                                                        fill: true,
                                                        sizes: "(max-width: 1024px) 90vw, 40vw",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-black/0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-5 left-5 right-20 sm:right-24 glass-strong rounded-2xl px-5 py-4 inline-block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white text-lg font-display font-semibold",
                                                                children: "Renu Sharma"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white/80 text-base",
                                                                children: "Founder & Lead Coach, Captanova"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute -bottom-10 -left-6 sm:-left-12 w-36 sm:w-44 md:w-48 glass-strong rounded-3xl p-2.5 shadow-2xl z-20",
                                            animate: {
                                                y: [
                                                    -6,
                                                    6,
                                                    -6
                                                ]
                                            },
                                            transition: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative rounded-2xl overflow-hidden aspect-square",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/mentors/renu-mentor-1.jpg",
                                                        alt: "Learning directly from world-class mentors",
                                                        fill: true,
                                                        sizes: "200px",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#333333] text-[11px] font-semibold text-center mt-2 leading-tight px-1",
                                                    children: "Trained Under World-Class Mentors"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute -top-6 -right-4 md:-right-8 glass-strong rounded-2xl px-4 py-3 shadow-xl hidden sm:block z-20",
                                            animate: {
                                                y: [
                                                    4,
                                                    -4,
                                                    4
                                                ]
                                            },
                                            transition: {
                                                duration: 4.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                        className: "w-4 h-4 text-[#059669]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#333333] text-[11px] font-semibold tracking-wide whitespace-nowrap",
                                                        children: "Certified Coach"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                direction: "right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-2xl p-6 mb-8 border-l-[3px] border-l-[#c9962f]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                    className: "w-6 h-6 text-[#c9962f]/50 mb-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#333333] text-lg leading-relaxed italic font-display",
                                                    children: "Real growth doesn't happen in a classroom alone. It happens in rooms full of people who refuse to stay the same. I've sat in those rooms — and now I bring that experience home to you."
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
                                                    className: "text-[#c9962f] text-base mt-3 block not-italic font-semibold tracking-wide",
                                                    children: "— RENU SHARMA"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4 mb-9",
                                            children: credentials.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-6 h-6 rounded-full bg-gradient-to-br from-[#7c3aed]/15 to-[#2563eb]/15 flex items-center justify-center flex-shrink-0 mt-0.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 rounded-full bg-[#7c3aed]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#555555] text-base leading-relaxed",
                                                            children: c
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#programs",
                                            className: "group inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-[#2563eb] text-white font-semibold px-8 py-3.5 rounded-full text-base tracking-tight transition-all duration-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.4)] hover:scale-[1.03] active:scale-[0.98]",
                                            children: [
                                                "Learn With Renu",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-3 mb-20 md:mb-24",
                            children: trustBadges.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "glass-card hover-lift inline-flex items-center gap-2 px-5 py-3 rounded-full",
                                    animate: {
                                        y: [
                                            0,
                                            i % 2 === 0 ? -5 : 5,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 4 + i % 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.15
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(b.icon, {
                                            className: "w-4 h-4 text-[#7c3aed]"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#333333] text-base font-semibold tracking-tight",
                                            children: b.label
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, b.label, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#c9962f] text-base tracking-[3px] uppercase font-semibold mb-3 block",
                                    children: "Academy Culture"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-[#111111] text-3xl md:text-4xl font-semibold",
                                    children: [
                                        "Real Rooms. ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "gradient-text-purple italic",
                                            children: "Real Growth."
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 256,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative hidden md:block mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "marquee-track flex gap-6 w-max",
                            style: {
                                animationDuration: "38s"
                            },
                            children: marqueeItems.map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hover-lift group relative w-80 aspect-[4/3] rounded-3xl overflow-hidden glass-card flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: g.src,
                                            alt: g.title,
                                            fill: true,
                                            sizes: "320px",
                                            className: "object-cover transition-transform duration-700 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-4 left-4 right-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white font-semibold text-base leading-tight",
                                                    children: g.title
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/75 text-[13px] mt-0.5",
                                                    children: g.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fafafa] to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fafafa] to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden mt-4 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 -mx-6 px-6",
                    children: gallery.map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-[78vw] max-w-xs aspect-[4/3] rounded-3xl overflow-hidden glass-card flex-shrink-0 snap-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: g.src,
                                    alt: g.title,
                                    fill: true,
                                    sizes: "78vw",
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-4 left-4 right-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white font-semibold text-base leading-tight",
                                            children: g.title
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/75 text-[13px] mt-0.5",
                                            children: g.sub
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/MentorsSection.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_c1 = MentorsSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "TiltCard");
__turbopack_context__.k.register(_c1, "MentorsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PathSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const pathSteps = [
    {
        icon: "🔦",
        label: "Awareness",
        sub: "Start with you.",
        desc: "Reconnect with yourself through reflection, gratitude, Sankalp and deep self-awareness.",
        color: "#7c3aed"
    },
    {
        icon: "🧠",
        label: "Mindset Mastery",
        sub: "Think differently.",
        desc: "Break free from overthinking. Build empowering beliefs and make better decisions faster.",
        color: "#2563eb"
    },
    {
        icon: "🎤",
        label: "Communication Mastery",
        sub: "Express yourself.",
        desc: "Speak with confidence. Handle difficult conversations. Develop an executive presence.",
        color: "#0891b2"
    },
    {
        icon: "🎯",
        label: "Action Mastery",
        sub: "Execute consistently.",
        desc: "Stop procrastinating. Build unbreakable habits and follow through on everything.",
        color: "#059669"
    },
    {
        icon: "👑",
        label: "Leadership Mentorship",
        sub: "Lead yourself & others.",
        desc: "Identity transformation. Purpose, vision and conscious leadership for lasting impact.",
        color: "#c9962f"
    }
];
const whatYouLearn = [
    {
        number: "1",
        title: "Mindset Mastery",
        outcome: "Think Differently.",
        color: "#7c3aed",
        features: [
            "Stop overthinking",
            "Build confidence",
            "Overcome self-doubt",
            "Make better decisions",
            "Develop empowering beliefs"
        ]
    },
    {
        number: "2",
        title: "Communication Mastery",
        outcome: "Express Yourself.",
        color: "#2563eb",
        features: [
            "Speak confidently",
            "Communicate at work",
            "Improve relationships",
            "Handle difficult conversations",
            "Develop leadership presence"
        ]
    },
    {
        number: "3",
        title: "Action Mastery",
        outcome: "Execute Consistently.",
        color: "#0891b2",
        features: [
            "Stop procrastinating",
            "Build discipline",
            "Stay focused",
            "Build habits",
            "Follow through consistently"
        ]
    },
    {
        number: "4",
        title: "Leadership Mentorship",
        outcome: "Lead Yourself & Others.",
        color: "#c9962f",
        features: [
            "Identity transformation",
            "Purpose and vision",
            "Leadership mindset",
            "High-performance habits",
            "Conscious leadership"
        ]
    }
];
function PathSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative aurora-cyan py-24 md:py-32 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-96 h-96 bg-cyan-200/25 top-0 left-1/4"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-80 h-80 bg-purple-200/20 bottom-20 right-0"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#0891b2] text-base tracking-[3px] uppercase font-semibold mb-3 block",
                                    children: "A Proven Path"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-[#111111] text-3xl md:text-4xl font-semibold",
                                    children: [
                                        "The Captanova ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "gradient-text-purple italic",
                                            children: "Path"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto pb-4 mb-24 -mx-6 px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-stretch gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-5",
                            children: pathSteps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    delay: i * 0.1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-card hover-lift rounded-3xl p-6 w-52 md:w-full h-full flex flex-col items-center text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4",
                                                style: {
                                                    background: `linear-gradient(135deg, ${step.color}1a, ${step.color}0a)`
                                                },
                                                children: step.icon
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#111111] text-base font-semibold mb-1",
                                                children: step.label
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#999999] text-base italic mb-3",
                                                children: step.sub
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#777777] text-[11px] leading-relaxed",
                                                children: step.desc
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this)
                                }, step.label, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center font-display text-[#111111] text-3xl md:text-4xl font-semibold mb-3",
                                children: [
                                    "What You Can ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text-purple italic",
                                        children: "Learn Here"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                        lineNumber: 63,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[#999999] text-base tracking-widest uppercase font-medium mb-16",
                                children: "A complete ecosystem for your transformation"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: whatYouLearn.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: i * 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "glass-card hover-lift rounded-3xl p-7 h-full flex flex-col",
                                    whileHover: {
                                        y: -8
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base mb-5 text-white",
                                            style: {
                                                background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`
                                            },
                                            children: item.number
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[#111111] font-semibold text-base mb-1",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2.5 flex-1 mt-4",
                                            children: item.features.map((feat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: item.color
                                                            },
                                                            className: "text-base mt-0.5 flex-shrink-0",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#666666] text-base leading-relaxed",
                                                            children: feat
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, feat, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 pt-5 border-t border-black/[0.06]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] tracking-[2px] uppercase font-bold",
                                                    style: {
                                                        color: item.color
                                                    },
                                                    children: "OUTCOME"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#333333] text-base italic font-display mt-1",
                                                    children: item.outcome
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            }, item.title, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/PathSection.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = PathSection;
var _c;
__turbopack_context__.k.register(_c, "PathSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JournalSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const journalIncludes = [
    "Future Letter To Myself",
    "21-Day Sankalp Journey",
    "Gratitude Practice",
    "Awareness Exercises",
    "Reflection Prompts",
    "Weekly Check-ins",
    "Vision & Conscious Creation",
    "Alignment & Action Pages"
];
function JournalSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "journal",
        className: "relative aurora-gold py-24 md:py-32 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-96 h-96 bg-amber-200/30 top-10 right-0"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-80 h-80 bg-blue-100/25 bottom-0 left-0"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            direction: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "glass-card rounded-[2.5rem] aspect-[3/4] max-w-sm mx-auto flex flex-col items-center justify-center p-10 relative overflow-hidden",
                                        animate: {
                                            y: [
                                                -8,
                                                8,
                                                -8
                                            ]
                                        },
                                        transition: {
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-br from-amber-50/60 via-white/40 to-purple-50/40"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-px bg-gradient-to-r from-transparent via-[#c9962f] to-transparent mb-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl mb-4 gradient-text-gold",
                                                        children: "∞"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[#111111] font-display text-2xl font-medium tracking-[3px] uppercase text-center mb-1",
                                                        children: "The Awareness"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "gradient-text-gold font-display text-3xl font-semibold tracking-[3px] uppercase text-center mb-6",
                                                        children: "Journal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#999999] text-base tracking-[1.5px] uppercase text-center leading-relaxed font-medium",
                                                        children: "The Most Important Meeting Is With Yourself"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-px bg-gradient-to-r from-transparent via-[#c9962f] to-transparent mt-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-amber-200/15 rounded-[2.5rem] blur-3xl -z-10 max-w-sm mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            direction: "right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#c9962f] text-base tracking-[3px] uppercase font-semibold mb-3 block",
                                        children: "Start Here"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-[#111111] text-4xl md:text-5xl font-semibold mb-3 leading-tight",
                                        children: "The Awareness Journal"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "gradient-text-gold text-base tracking-widest uppercase font-bold mb-6",
                                        children: "The Most Important Meeting Is With Yourself"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#555555] text-base leading-relaxed mb-4",
                                        children: "A guided 21-day self-discovery and transformation journey."
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#777777] text-base leading-relaxed mb-8",
                                        children: "Most people spend their lives meeting everyone except themselves. The Awareness Journal helps you reconnect with yourself through reflection, gratitude, Sankalp, awareness, and conscious action."
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[#999999] text-base tracking-[2px] uppercase font-semibold mb-4",
                                        children: "Journal Includes"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-y-3 gap-x-4 mb-8",
                                        children: journalIncludes.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "flex items-center gap-2",
                                                initial: {
                                                    opacity: 0,
                                                    x: -10
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: i * 0.06
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#c9962f] text-base flex-shrink-0",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#555555] text-base",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-card rounded-2xl p-5 mb-8 border-l-[3px] border-l-[#c9962f]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#444444] text-base italic leading-relaxed font-display",
                                            children: '"When you switch on the light of awareness, you cannot unsee the truth."'
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#programs",
                                        className: "inline-flex items-center gap-2 bg-gradient-to-r from-[#c9962f] to-[#e8c373] hover:shadow-[0_12px_32px_rgba(201,150,47,0.4)] text-white font-semibold px-7 py-3.5 rounded-full text-base tracking-tight transition-all duration-300 hover:scale-[1.03]",
                                        children: "Start Your 21-Day Journey →"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/JournalSection.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = JournalSection;
var _c;
__turbopack_context__.k.register(_c, "JournalSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "profiles",
    ()=>profiles,
    "programs",
    ()=>programs,
    "quizQuestions",
    ()=>quizQuestions
]);
const quizQuestions = [
    {
        id: 1,
        question: "Which statement sounds most like you?",
        options: [
            {
                text: "I think too much before making decisions.",
                profile: "overthinker"
            },
            {
                text: "I often question whether I am good enough.",
                profile: "doubter"
            },
            {
                text: "I struggle expressing my thoughts confidently.",
                profile: "silent-voice"
            },
            {
                text: "I know what to do but don't follow through consistently.",
                profile: "action-seeker"
            },
            {
                text: "I know I'm capable of more but feel stuck.",
                profile: "hidden-leader"
            }
        ]
    },
    {
        id: 2,
        question: "What frustrates you most right now?",
        options: [
            {
                text: "Overthinking",
                profile: "overthinker"
            },
            {
                text: "Self-doubt",
                profile: "doubter"
            },
            {
                text: "Fear of judgment",
                profile: "silent-voice"
            },
            {
                text: "Lack of consistency",
                profile: "action-seeker"
            },
            {
                text: "Lack of direction",
                profile: "hidden-leader"
            }
        ]
    },
    {
        id: 3,
        question: "What would you most like to improve?",
        options: [
            {
                text: "Clarity",
                profile: "overthinker"
            },
            {
                text: "Confidence",
                profile: "doubter"
            },
            {
                text: "Communication",
                profile: "silent-voice"
            },
            {
                text: "Discipline",
                profile: "action-seeker"
            },
            {
                text: "Leadership",
                profile: "hidden-leader"
            }
        ]
    },
    {
        id: 4,
        question: "When opportunities appear, what usually happens?",
        options: [
            {
                text: "I overanalyze them.",
                profile: "overthinker"
            },
            {
                text: "I doubt myself.",
                profile: "doubter"
            },
            {
                text: "I stay quiet.",
                profile: "silent-voice"
            },
            {
                text: "I delay taking action.",
                profile: "action-seeker"
            },
            {
                text: "I don't know which direction to choose.",
                profile: "hidden-leader"
            }
        ]
    },
    {
        id: 5,
        question: "What is your biggest challenge?",
        options: [
            {
                text: "Making decisions",
                profile: "overthinker"
            },
            {
                text: "Believing in myself",
                profile: "doubter"
            },
            {
                text: "Speaking up",
                profile: "silent-voice"
            },
            {
                text: "Following through",
                profile: "action-seeker"
            },
            {
                text: "Creating a vision for my future",
                profile: "hidden-leader"
            }
        ]
    },
    {
        id: 6,
        question: "Which statement describes you best?",
        options: [
            {
                text: "I spend too much time in my head.",
                profile: "overthinker"
            },
            {
                text: "I compare myself to others.",
                profile: "doubter"
            },
            {
                text: "I hold back my opinions.",
                profile: "silent-voice"
            },
            {
                text: "I start more than I finish.",
                profile: "action-seeker"
            },
            {
                text: "I know there is more potential inside me.",
                profile: "hidden-leader"
            }
        ]
    },
    {
        id: 7,
        question: "What do you fear most?",
        options: [
            {
                text: "Making the wrong decision.",
                profile: "overthinker"
            },
            {
                text: "Failing.",
                profile: "doubter"
            },
            {
                text: "Being judged.",
                profile: "silent-voice"
            },
            {
                text: "Not reaching my goals.",
                profile: "action-seeker"
            },
            {
                text: "Wasting my potential.",
                profile: "hidden-leader"
            }
        ]
    },
    {
        id: 8,
        question: "What do people often tell you?",
        options: [
            {
                text: "Stop overthinking.",
                profile: "overthinker"
            },
            {
                text: "Believe in yourself.",
                profile: "doubter"
            },
            {
                text: "Speak up more.",
                profile: "silent-voice"
            },
            {
                text: "Just do it.",
                profile: "action-seeker"
            },
            {
                text: "You have so much potential.",
                profile: "hidden-leader"
            }
        ]
    },
    {
        id: 9,
        question: "What would change your life most over the next 90 days?",
        options: [
            {
                text: "Greater clarity.",
                profile: "overthinker"
            },
            {
                text: "More confidence.",
                profile: "doubter"
            },
            {
                text: "Better communication skills.",
                profile: "silent-voice"
            },
            {
                text: "Consistent action.",
                profile: "action-seeker"
            },
            {
                text: "Stronger self-leadership.",
                profile: "hidden-leader"
            }
        ]
    },
    {
        id: 10,
        question: "What are you looking for right now?",
        options: [
            {
                text: "Clear thinking.",
                profile: "overthinker"
            },
            {
                text: "Self-belief.",
                profile: "doubter"
            },
            {
                text: "Better communication.",
                profile: "silent-voice"
            },
            {
                text: "Momentum.",
                profile: "action-seeker"
            },
            {
                text: "Personal growth and leadership.",
                profile: "hidden-leader"
            }
        ]
    }
];
const profiles = {
    overthinker: {
        id: "overthinker",
        title: "The Overthinker",
        emoji: "🧠",
        tagline: "Thoughtful. Intelligent. Reflective.",
        gift: "You see possibilities and details others often miss. Your analytical mind is a superpower — when directed well.",
        holding: "You spend so much time searching for certainty that action gets delayed. Thinking becomes a substitute for doing.",
        focus: [
            "Less analysis",
            "More trust",
            "Decisive action"
        ],
        insight: "Clarity rarely comes before action. More often, action creates clarity.",
        challenge: "Make one decision within 60 seconds every day for 7 days. Trust yourself. Observe what happens.",
        cta: "Start Your Awareness Journey",
        ctaLink: "#programs",
        color: "#1a1a2e",
        accentColor: "#D4AF37"
    },
    doubter: {
        id: "doubter",
        title: "The Doubter",
        emoji: "💎",
        tagline: "Caring. Meticulous. Full of untapped potential.",
        gift: "You care deeply and want to do things well. You have more potential than you currently recognize.",
        holding: "You wait until you feel ready. You underestimate your strengths and compare yourself to others.",
        focus: [
            "Build self-trust",
            "Recognize your progress",
            "Act before confidence arrives"
        ],
        insight: "Confidence is not found. Confidence is built through action.",
        challenge: "Each evening write down three things you did well today. No matter how small. Do this for 7 days.",
        cta: "Build Your Confidence",
        ctaLink: "#programs",
        color: "#0d1b2a",
        accentColor: "#D4AF37"
    },
    "silent-voice": {
        id: "silent-voice",
        title: "The Silent Voice",
        emoji: "🎤",
        tagline: "Wise. Observant. With worlds left to express.",
        gift: "You have valuable ideas, wisdom and perspectives. People genuinely benefit when you share them.",
        holding: "Fear of judgment. Fear of saying the wrong thing. Fear of being truly seen.",
        focus: [
            "Communication",
            "Expression",
            "Visibility"
        ],
        insight: "Your voice becomes stronger every time you use it. Silence doesn't protect you — it limits you.",
        challenge: "Speak up once every day. Share an opinion. Ask a question. Express a thought. Do this for 7 days.",
        cta: "Find Your Voice",
        ctaLink: "#programs",
        color: "#0a1628",
        accentColor: "#D4AF37"
    },
    "action-seeker": {
        id: "action-seeker",
        title: "The Action Seeker",
        emoji: "🚀",
        tagline: "Ambitious. Growth-hungry. Ready to execute.",
        gift: "You are ambitious and growth-oriented. You genuinely want to improve your life and have what it takes.",
        holding: "You know more than enough. The challenge is implementation — turning knowledge into consistent action.",
        focus: [
            "Consistency",
            "Systems",
            "Daily non-negotiables"
        ],
        insight: "Success is rarely created by intensity. It is created by consistency.",
        challenge: "Choose one important habit. Do it every day for 7 days. No exceptions. No excuses.",
        cta: "Build Your System",
        ctaLink: "#programs",
        color: "#0f1923",
        accentColor: "#D4AF37"
    },
    "hidden-leader": {
        id: "hidden-leader",
        title: "The Hidden Leader",
        emoji: "👑",
        tagline: "Visionary. Powerful. Waiting to step forward.",
        gift: "You naturally think bigger than your current situation. You have leadership potential that others can feel.",
        holding: "You haven't fully stepped into your own power yet. You are still waiting for permission that will never come.",
        focus: [
            "Leadership",
            "Ownership",
            "Vision",
            "Responsibility"
        ],
        insight: "Leadership begins the moment you stop waiting and start deciding.",
        challenge: "Ask yourself every morning: 'What would the strongest version of me do today?' Then act accordingly.",
        cta: "Step Into Leadership",
        ctaLink: "#programs",
        color: "#110a1e",
        accentColor: "#D4AF37"
    }
};
const programs = [
    {
        id: "awareness-journal",
        name: "The Awareness Journal",
        tagline: "The Most Important Meeting Is With Yourself",
        price: 999,
        originalPrice: 1999,
        razorpayAmount: 99900,
        features: [
            "Future Letter To Myself",
            "21-Day Sankalp Journey",
            "Gratitude Practice",
            "Awareness Exercises",
            "Reflection Prompts",
            "Weekly Check-ins",
            "Vision & Conscious Creation",
            "Alignment & Action Pages"
        ],
        highlight: false
    },
    {
        id: "mindset-mastery",
        name: "Mindset Mastery",
        tagline: "Think Differently. Live Differently.",
        price: 4999,
        originalPrice: 9999,
        razorpayAmount: 499900,
        features: [
            "Stop overthinking framework",
            "Build unshakeable confidence",
            "Overcome self-doubt permanently",
            "Make better decisions faster",
            "Develop empowering beliefs",
            "6 live coaching sessions",
            "Private community access",
            "Lifetime resource access"
        ],
        highlight: false
    },
    {
        id: "transformation-system",
        name: "Captanova Transformation System™",
        tagline: "From Overthinking to Self-Leadership",
        price: 14999,
        originalPrice: 29999,
        razorpayAmount: 1499900,
        features: [
            "Full Mindset Mastery program",
            "Communication Mastery module",
            "Action Mastery framework",
            "Leadership Mentorship (3 months)",
            "1-on-1 strategy sessions",
            "Daily accountability system",
            "Access to all future programs",
            "Direct WhatsApp support with Renu"
        ],
        highlight: true
    },
    {
        id: "leadership-mentorship",
        name: "Leadership Mentorship",
        tagline: "Lead Yourself & Others",
        price: 24999,
        originalPrice: 49999,
        razorpayAmount: 2499900,
        features: [
            "Everything in Transformation System",
            "Personal 1-on-1 mentorship (6 months)",
            "Identity transformation deep-dive",
            "Purpose & vision clarity sessions",
            "High-performance habit design",
            "Communication excellence training",
            "Conscious leadership development",
            "VIP priority access & support"
        ],
        highlight: false
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/lib/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GA_ID",
    ()=>GA_ID,
    "META_PIXEL_ID",
    ()=>META_PIXEL_ID,
    "fbq",
    ()=>fbq,
    "gtag",
    ()=>gtag,
    "trackEvent",
    ()=>trackEvent,
    "trackInitiateCheckout",
    ()=>trackInitiateCheckout,
    "trackLead",
    ()=>trackLead,
    "trackPurchase",
    ()=>trackPurchase,
    "trackQuizComplete",
    ()=>trackQuizComplete,
    "trackViewContent",
    ()=>trackViewContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use client";
const GA_ID = ("TURBOPACK compile-time value", "G-PLACEHOLDER") || "";
function gtag(...args) {
    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.gtag) {
        window.gtag(...args);
    }
}
function trackEvent(eventName, params) {
    gtag("event", eventName, params);
}
const META_PIXEL_ID = ("TURBOPACK compile-time value", "PLACEHOLDER_YOUR_META_PIXEL_ID") || "";
function fbq(event, eventName, params) {
    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.fbq) {
        window.fbq(event, eventName, params);
    }
}
function trackLead(params) {
    fbq("track", "Lead", params);
    trackEvent("generate_lead", params);
}
function trackPurchase(params) {
    fbq("track", "Purchase", params);
    trackEvent("purchase", {
        value: params.value,
        currency: params.currency,
        items: [
            {
                item_name: params.content_name
            }
        ]
    });
}
function trackInitiateCheckout(params) {
    fbq("track", "InitiateCheckout", params);
    trackEvent("begin_checkout", params);
}
function trackViewContent(params) {
    fbq("track", "ViewContent", params);
    trackEvent("view_item", params);
}
function trackQuizComplete(profile) {
    fbq("track", "CompleteRegistration", {
        content_name: `Quiz: ${profile}`
    });
    trackEvent("quiz_complete", {
        profile
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/lib/analytics.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function getProfile(answers) {
    const counts = {};
    answers.forEach((a)=>{
        counts[a] = (counts[a] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b)=>b[1] - a[1])[0][0];
}
function QuizSection() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("intro");
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const progress = current / __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizQuestions"].length * 100;
    const handleAnswer = (profileKey)=>{
        setSelected(profileKey);
        setTimeout(()=>{
            const newAnswers = [
                ...answers,
                profileKey
            ];
            setAnswers(newAnswers);
            setSelected(null);
            if (current + 1 < __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizQuestions"].length) {
                setCurrent(current + 1);
            } else {
                const result = getProfile(newAnswers);
                setProfile(result);
                setStep("capture");
            }
        }, 400);
    };
    const handleCapture = async ()=>{
        if (!form.name || !form.email) {
            setError("Please enter your name and email.");
            return;
        }
        setError("");
        setLoading(true);
        try {
            await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...form,
                    source: "quiz",
                    quizProfile: profile
                })
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackLead"])({
                content_name: `Quiz Lead: ${profile}`
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackQuizComplete"])(profile);
            setStep("result");
        } catch  {
            setError("Something went wrong. Please try again.");
        }
        setLoading(false);
    };
    const p = profile ? __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profiles"][profile] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "quiz",
        className: "relative aurora-hero py-24 md:py-32 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-96 h-96 bg-purple-200/25 top-0 right-1/4"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-80 h-80 bg-blue-200/20 bottom-10 left-0"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: [
                        step === "intro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -30
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2 glass-card text-[#7c3aed] text-base tracking-[2px] uppercase font-bold px-5 py-2.5 rounded-full mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb]"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        "Captanova Clarity Assessment™"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-[#111111] text-4xl md:text-5xl font-semibold mb-6 leading-tight",
                                    children: [
                                        "Discover What's Really",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "gradient-text-purple italic",
                                            children: "Holding You Back"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-base leading-relaxed mb-4 max-w-lg mx-auto",
                                    children: "Most people are not stuck because they lack potential."
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-base leading-relaxed mb-4 max-w-lg mx-auto",
                                    children: "They are stuck because one hidden pattern keeps showing up in different areas of life."
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#444444] text-base leading-relaxed mb-10 max-w-lg mx-auto",
                                    children: [
                                        "Take this ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#7c3aed] font-semibold",
                                            children: "3-minute assessment"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 94,
                                            columnNumber: 27
                                        }, this),
                                        " to discover your personal",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#7c3aed] font-semibold",
                                            children: "Captanova Growth Profile™"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4 mb-10 max-w-sm mx-auto text-center",
                                    children: [
                                        [
                                            "10",
                                            "Questions"
                                        ],
                                        [
                                            "3 min",
                                            "Duration"
                                        ],
                                        [
                                            "5",
                                            "Profiles"
                                        ]
                                    ].map(([num, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-2xl py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "gradient-text-purple text-xl font-bold font-display",
                                                    children: num
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#999999] text-base mt-1 font-medium",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>setStep("quiz"),
                                    className: "bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-semibold px-10 py-4 rounded-full text-base tracking-tight transition-all duration-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.4)]",
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    whileTap: {
                                        scale: 0.97
                                    },
                                    children: "Discover My Growth Profile →"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, "intro", true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this),
                        step === "quiz" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 40
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            exit: {
                                opacity: 0,
                                x: -40
                            },
                            transition: {
                                duration: 0.4
                            },
                            className: "glass-card rounded-[2rem] p-8 md:p-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#999999] text-base tracking-widest uppercase font-medium",
                                                    children: [
                                                        "Question ",
                                                        current + 1,
                                                        " of ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizQuestions"].length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#7c3aed] text-base font-bold",
                                                    children: [
                                                        Math.round(current / __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizQuestions"].length * 100),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-1.5 bg-black/[0.06] rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "h-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] rounded-full",
                                                animate: {
                                                    width: `${progress}%`
                                                },
                                                transition: {
                                                    duration: 0.4
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-[#111111] text-xl md:text-2xl font-medium mb-8 leading-snug text-center",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizQuestions"][current].question
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizQuestions"][current].options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: ()=>handleAnswer(opt.profile),
                                            disabled: selected !== null,
                                            className: `w-full text-left px-6 py-4 rounded-2xl border transition-all duration-200 group ${selected === opt.profile ? "border-[#7c3aed]/40 bg-gradient-to-r from-[#7c3aed]/10 to-[#2563eb]/10 text-[#111111]" : "border-black/[0.06] bg-white/50 text-[#555555] hover:border-[#7c3aed]/30 hover:text-[#111111] hover:bg-white/80"}`,
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: i * 0.06
                                            },
                                            whileHover: {
                                                x: 4
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `w-7 h-7 rounded-full border flex-shrink-0 flex items-center justify-center text-base font-bold transition-all duration-200 ${selected === opt.profile ? "border-[#7c3aed] bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white" : "border-black/10 text-[#999999] group-hover:border-[#7c3aed]/40 group-hover:text-[#7c3aed]"}`,
                                                        children: String.fromCharCode(65 + i)
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-base leading-relaxed",
                                                        children: opt.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `quiz-${current}`, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        step === "capture" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-5xl mb-6",
                                    children: "✨"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#7c3aed] text-base tracking-[3px] uppercase font-bold mb-3",
                                    children: "Assessment Complete"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-[#111111] text-3xl md:text-4xl font-semibold mb-4",
                                    children: "Your Growth Profile™ is Ready"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#666666] text-base leading-relaxed mb-10 max-w-md mx-auto",
                                    children: "Enter your details to receive your personalized Captanova Growth Profile™, your natural gift, what's holding you back, and your 7-Day Challenge."
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card rounded-3xl p-8 text-left max-w-md mx-auto mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 text-base",
                                        children: [
                                            "✓ Your Captanova Growth Profile™",
                                            "✓ Your Natural Gift",
                                            "✓ What's Holding You Back",
                                            "✓ Your Personal Growth Focus",
                                            "✓ Your 7-Day Captanova Challenge"
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#555555]",
                                                children: item
                                            }, item, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                lineNumber: 207,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 max-w-md mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Your Name",
                                            value: form.name,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    name: e.target.value
                                                }),
                                            className: "w-full bg-white/70 border border-black/[0.08] focus:border-[#7c3aed]/40 focus:bg-white rounded-xl px-5 py-3.5 text-[#111111] text-base placeholder-[#999999] outline-none transition-all text-center"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Email Address",
                                            value: form.email,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    email: e.target.value
                                                }),
                                            className: "w-full bg-white/70 border border-black/[0.08] focus:border-[#7c3aed]/40 focus:bg-white rounded-xl px-5 py-3.5 text-[#111111] text-base placeholder-[#999999] outline-none transition-all text-center"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#f0654c] text-base",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 227,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: handleCapture,
                                            disabled: loading,
                                            className: "w-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] hover:shadow-[0_12px_32px_rgba(124,58,237,0.35)] disabled:opacity-60 text-white font-semibold py-4 rounded-full text-base tracking-tight transition-all duration-300",
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            children: loading ? "Unlocking…" : "SHOW MY RESULTS →"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#bbbbbb] text-base text-center",
                                            children: "No spam. Pure value. Unsubscribe anytime."
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, "capture", true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this),
                        step === "result" && p && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "text-6xl mb-4",
                                            animate: {
                                                rotate: [
                                                    0,
                                                    10,
                                                    -10,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 0.6,
                                                delay: 0.3
                                            },
                                            children: p.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#7c3aed] text-base tracking-[3px] uppercase font-bold mb-3 block",
                                            children: "Your Captanova Growth Profile™"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display text-[#111111] text-4xl md:text-5xl font-semibold mb-3",
                                            children: p.title
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#7c3aed] text-base italic font-medium mb-2",
                                            children: p.tagline
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 mb-10",
                                    children: [
                                        [
                                            {
                                                label: "Your Natural Gift",
                                                content: p.gift,
                                                icon: "🌟"
                                            },
                                            {
                                                label: "What's Holding You Back",
                                                content: p.holding,
                                                icon: "🔑"
                                            },
                                            {
                                                label: "Your Growth Focus",
                                                content: p.focus.join(" · "),
                                                icon: "🎯"
                                            }
                                        ].map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "glass-card rounded-2xl p-6",
                                                initial: {
                                                    opacity: 0,
                                                    x: -20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: i * 0.15
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl",
                                                                children: card.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#7c3aed] text-base tracking-[2px] uppercase font-bold",
                                                                children: card.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#555555] text-base leading-relaxed",
                                                        children: card.content
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, card.label, true, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "glass-card rounded-2xl p-6 text-center bg-gradient-to-br from-white/85 to-purple-50/40",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 0.5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#7c3aed] text-base tracking-[2px] uppercase font-bold mb-3",
                                                    children: "Captanova Insight"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-display text-[#111111] text-lg font-medium italic leading-relaxed",
                                                    children: [
                                                        '"',
                                                        p.insight,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "glass-card rounded-2xl p-6",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 0.6
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#c9962f] text-base tracking-[2px] uppercase font-bold mb-3",
                                                    children: "⚡ Your 7-Day Challenge"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#555555] text-base leading-relaxed",
                                                    children: p.challenge
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex flex-col gap-3 text-center",
                                    initial: {
                                        opacity: 0,
                                        y: 15
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#programs",
                                            className: "block bg-gradient-to-r from-[#7c3aed] to-[#2563eb] hover:shadow-[0_16px_40px_rgba(124,58,237,0.4)] text-white font-semibold py-4 rounded-full text-base tracking-tight transition-all duration-300",
                                            children: [
                                                p.cta,
                                                " →"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setStep("intro");
                                                setCurrent(0);
                                                setAnswers([]);
                                                setProfile(null);
                                                setForm({
                                                    name: "",
                                                    email: ""
                                                });
                                            },
                                            className: "text-[#999999] hover:text-[#555555] text-base transition-colors py-2",
                                            children: "Retake Assessment"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                            lineNumber: 324,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, "result", true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/QuizSection.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(QuizSection, "t94huBE2v4GWz0bvaBl9mStVpgk=");
_c = QuizSection;
var _c;
__turbopack_context__.k.register(_c, "QuizSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransformationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const before = [
    "Overthinking every decision",
    "Lack of confidence",
    "Fear of speaking up",
    "Procrastination",
    "Self-doubt",
    "Lack of direction",
    "Consuming content without change"
];
const after = [
    "Mental clarity",
    "Stronger confidence",
    "Better communication",
    "Consistent action",
    "Better decisions",
    "Greater self-awareness",
    "Self-leadership"
];
function TransformationSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative aurora-coral py-24 md:py-32 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-96 h-96 bg-orange-200/30 top-0 right-1/4"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-80 h-80 bg-emerald-100/30 bottom-10 left-10"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center font-display text-[#111111] text-3xl md:text-4xl font-semibold mb-3",
                                children: [
                                    "Results ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#f0654c] italic",
                                        children: "Transformation"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[#999999] text-base tracking-widest uppercase font-medium mb-16",
                                children: "What changes when you commit"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-[1fr_auto_1fr] gap-8 items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                direction: "left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card rounded-3xl p-8 h-full border-l-[3px] border-l-[#f0654c]/40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-9 h-9 rounded-full bg-[#f0654c]/10 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#f0654c] text-base font-bold",
                                                        children: "✗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[#777777] text-base tracking-[2px] uppercase font-bold",
                                                    children: "Before Captanova"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3.5",
                                            children: before.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                    className: "flex items-center gap-3",
                                                    initial: {
                                                        opacity: 0,
                                                        x: -15
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        delay: i * 0.07
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#f0654c]/60 text-base flex-shrink-0",
                                                            children: "✗"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#888888] text-base",
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                            lineNumber: 65,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, item, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "w-16 h-16 rounded-full glass-card flex items-center justify-center text-[#7c3aed] text-2xl",
                                        animate: {
                                            scale: [
                                                1,
                                                1.1,
                                                1
                                            ]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity
                                        },
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                direction: "right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card rounded-3xl p-8 h-full border-l-[3px] border-l-[#059669]/50 bg-gradient-to-br from-white/85 to-emerald-50/40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-9 h-9 rounded-full bg-[#059669]/10 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#059669] text-base font-bold",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[#059669] text-base tracking-[2px] uppercase font-bold",
                                                    children: "After Captanova"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3.5",
                                            children: after.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                    className: "flex items-center gap-3",
                                                    initial: {
                                                        opacity: 0,
                                                        x: 15
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        delay: i * 0.07
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#059669] text-base flex-shrink-0",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#333333] text-base font-medium",
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, item, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#999999] text-base tracking-widest uppercase font-medium mb-4",
                                    children: "The Captanova Promise"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display text-[#111111] text-2xl md:text-3xl font-medium leading-relaxed max-w-3xl mx-auto",
                                    children: [
                                        "You don't become a different person.",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "gradient-text-purple italic",
                                            children: "You become more of who you were always capable of being."
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#programs",
                                    className: "inline-block mt-10 bg-gradient-to-r from-[#f0654c] to-[#fb9382] hover:shadow-[0_12px_32px_rgba(240,101,76,0.35)] text-white font-semibold px-8 py-4 rounded-full text-base tracking-tight transition-all duration-300 hover:scale-[1.03]",
                                    children: "Start Your Transformation"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TransformationSection.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = TransformationSection;
var _c;
__turbopack_context__.k.register(_c, "TransformationSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgramsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/lib/analytics.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const cardAccents = [
    "#7c3aed",
    "#2563eb",
    "#c9962f",
    "#f0654c"
];
function CheckoutModal({ program, onClose }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handlePay = async ()=>{
        if (!form.name || !form.email || !form.phone) {
            setError("Please fill in all fields.");
            return;
        }
        setError("");
        setLoading(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackInitiateCheckout"])({
            value: program.price,
            currency: "INR",
            content_name: program.name
        });
        try {
            const orderRes = await fetch("/api/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    programId: program.id,
                    programName: program.name,
                    amount: program.razorpayAmount,
                    customerName: form.name,
                    customerEmail: form.email,
                    customerPhone: form.phone
                })
            });
            const order = await orderRes.json();
            if (!order.orderId) throw new Error(order.error || "Order creation failed");
            const rzp = new window.Razorpay({
                key: order.keyId || ("TURBOPACK compile-time value", "rzp_test_PLACEHOLDER"),
                amount: order.amount,
                currency: order.currency,
                order_id: order.orderId,
                name: "Captanova Academy",
                description: program.name,
                theme: {
                    color: "#7c3aed"
                },
                prefill: {
                    name: form.name,
                    email: form.email,
                    contact: form.phone
                },
                handler: async (response)=>{
                    const verifyRes = await fetch("/api/verify", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            ...response,
                            customerName: form.name,
                            customerEmail: form.email,
                            programName: program.name
                        })
                    });
                    const verify = await verifyRes.json();
                    if (verify.success) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPurchase"])({
                            value: program.price,
                            currency: "INR",
                            content_name: program.name
                        });
                        setSuccess(true);
                    } else {
                        setError("Payment verification failed. Please contact support.");
                    }
                    setLoading(false);
                },
                modal: {
                    ondismiss: ()=>setLoading(false)
                }
            });
            rzp.open();
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/30 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative w-full max-w-md glass-strong rounded-[2rem] p-8 z-10 shadow-[0_24px_80px_rgba(0,0,0,0.18)]",
                initial: {
                    scale: 0.9,
                    y: 20
                },
                animate: {
                    scale: 1,
                    y: 0
                },
                exit: {
                    scale: 0.9,
                    y: 20
                },
                children: success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "🎉"
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display text-[#111111] text-2xl font-semibold mb-3",
                            children: "You're in!"
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#666666] text-base leading-relaxed mb-6",
                            children: [
                                "Your enrollment in ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#7c3aed] font-semibold",
                                    children: program.name
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                    lineNumber: 105,
                                    columnNumber: 34
                                }, this),
                                " is confirmed. Check your email for next steps."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-semibold px-6 py-3 rounded-full text-base",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 text-[#999999] hover:text-[#111111] text-xl transition-colors",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#7c3aed] text-base tracking-[2px] uppercase font-semibold mb-1",
                                    children: "Enrolling In"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[#111111] text-xl font-semibold font-display",
                                    children: program.name
                                }, void 0, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline gap-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "gradient-text-purple text-2xl font-bold",
                                            children: [
                                                "₹",
                                                program.price.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        program.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#bbbbbb] text-base line-through",
                                            children: [
                                                "₹",
                                                program.originalPrice.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 mb-5",
                            children: [
                                "name",
                                "email",
                                "phone"
                            ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: field === "email" ? "email" : field === "phone" ? "tel" : "text",
                                    placeholder: field === "name" ? "Your Full Name" : field === "email" ? "Email Address" : "Phone Number",
                                    value: form[field],
                                    onChange: (e)=>setForm({
                                            ...form,
                                            [field]: e.target.value
                                        }),
                                    className: "w-full bg-white/70 border border-black/[0.08] focus:border-[#7c3aed]/40 focus:bg-white rounded-xl px-4 py-3 text-[#111111] text-base placeholder-[#999999] outline-none transition-all"
                                }, field, false, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#f0654c] text-base mb-4",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                            lineNumber: 146,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePay,
                            disabled: loading,
                            className: "w-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] hover:shadow-[0_12px_32px_rgba(124,58,237,0.35)] disabled:opacity-60 text-white font-semibold py-4 rounded-full text-base tracking-tight transition-all duration-300 hover:scale-[1.01]",
                            children: loading ? "Processing…" : `Pay ₹${program.price.toLocaleString()} Securely`
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#aaaaaa] text-base text-center mt-3",
                            children: "🔒 Secured by Razorpay · SSL Encrypted"
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(CheckoutModal, "//M+rcGVK7ICgSDIalpQ1bHth44=");
_c = CheckoutModal;
function ProgramsSection() {
    _s1();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "programs",
        className: "relative bg-[#fafafa] py-24 md:py-32 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-96 h-96 bg-purple-100/30 top-0 left-1/3"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-80 h-80 bg-blue-100/25 bottom-10 right-0"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center font-display text-[#111111] text-3xl md:text-4xl font-semibold mb-3",
                                children: [
                                    "Choose Your ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text-purple italic",
                                        children: "Starting Point"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                        lineNumber: 176,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[#999999] text-base tracking-widest uppercase font-medium mb-16",
                                children: "A complete ecosystem designed for your transformation"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["programs"].map((program, i)=>{
                            const accent = cardAccents[i % cardAccents.length];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: i * 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `relative glass-card hover-lift rounded-3xl p-7 flex flex-col h-full ${program.highlight ? "ring-2 ring-[#7c3aed]/30" : ""}`,
                                    whileHover: {
                                        y: -8
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    children: [
                                        program.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-3.5 left-1/2 -translate-x-1/2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full uppercase shadow-[0_4px_16px_rgba(124,58,237,0.4)]",
                                                children: "Most Popular"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                lineNumber: 197,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 196,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-xl mb-5 flex items-center justify-center",
                                            style: {
                                                background: `linear-gradient(135deg, ${accent}18, ${accent}08)`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full",
                                                style: {
                                                    background: accent
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                lineNumber: 207,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[#111111] font-semibold text-base mb-1",
                                                    children: program.name
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#999999] text-base italic",
                                                    children: program.tagline
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline gap-2 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl font-bold font-display",
                                                    style: {
                                                        color: accent
                                                    },
                                                    children: [
                                                        "₹",
                                                        program.price.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, this),
                                                program.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#cccccc] text-base line-through",
                                                    children: [
                                                        "₹",
                                                        program.originalPrice.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2.5 flex-1 mb-7",
                                            children: program.features.map((feat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: accent
                                                            },
                                                            className: "text-base mt-0.5 flex-shrink-0",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#666666] text-base leading-relaxed",
                                                            children: feat
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, feat, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 222,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelected(program),
                                            className: `w-full py-3.5 rounded-full text-base font-semibold tracking-tight transition-all duration-300 hover:scale-[1.02] ${program.highlight ? "bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white hover:shadow-[0_12px_28px_rgba(124,58,237,0.35)]" : "text-white hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"}`,
                                            style: !program.highlight ? {
                                                background: `linear-gradient(135deg, ${accent}, ${accent}dd)`
                                            } : {},
                                            children: "Enroll Now"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                    lineNumber: 188,
                                    columnNumber: 17
                                }, this)
                            }, program.id, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-6 mt-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card hover-lift rounded-3xl p-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#c9962f] text-base tracking-[2px] uppercase font-bold mb-4",
                                            children: "New to Captanova? Start Here."
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#666666] text-base leading-relaxed mb-5",
                                            children: [
                                                "The Awareness Journal is the foundation of the Captanova journey. This is the place to start. Most people don't need another course. ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#333333] font-medium",
                                                    children: "They need a place to start."
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 150
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                setSelected(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["programs"][0]);
                                            },
                                            className: "inline-block bg-gradient-to-r from-[#c9962f] to-[#e8c373] text-white font-semibold text-base px-5 py-2.5 rounded-full tracking-tight hover:shadow-[0_8px_24px_rgba(201,150,47,0.35)] transition-all duration-300",
                                            children: "Start Your 21-Day Journey →"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card hover-lift rounded-3xl p-7 bg-gradient-to-br from-white/85 to-emerald-50/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#059669] text-base tracking-[2px] uppercase font-bold mb-4",
                                            children: "Captanova Is For You If:"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2.5",
                                            children: [
                                                "You overthink",
                                                "You struggle with confidence",
                                                "You want stronger communication skills",
                                                "You know you're capable of more",
                                                "You want to stop procrastinating",
                                                "You are ready to take action",
                                                "You want personal growth that creates real-life results"
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#059669] text-base mt-0.5",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#666666] text-base",
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, item, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card hover-lift rounded-3xl p-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#f0654c] text-base tracking-[2px] uppercase font-bold mb-4",
                                            children: "Captanova Is Not For You If:"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2.5",
                                            children: [
                                                "You want a quick fix",
                                                "You want motivation without action",
                                                "You are unwilling to take responsibility for your growth",
                                                "You expect change without commitment"
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#f0654c]/70 text-base mt-0.5",
                                                            children: "✗"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#888888] text-base",
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, item, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckoutModal, {
                    program: selected,
                    onClose: ()=>setSelected(null)
                }, void 0, false, {
                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                    lineNumber: 316,
                    columnNumber: 22
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/ProgramsSection.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s1(ProgramsSection, "PVKrpNrydW4BpnDEq9OT3cVmCk4=");
_c1 = ProgramsSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "CheckoutModal");
__turbopack_context__.k.register(_c1, "ProgramsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const testimonials = [
    {
        quote: "The Awareness Journal changed the way I see myself. It was the start of my transformation. I finally stopped overthinking and started actually living.",
        name: "Priya M.",
        role: "Marketing Manager",
        initials: "PM",
        profile: "The Overthinker",
        color: "#7c3aed"
    },
    {
        quote: "I went from overthinking everything to taking action each and every day. Captanova gave me my life back. I feel like the captain of my own story now.",
        name: "Arjun S.",
        role: "Entrepreneur",
        initials: "AS",
        profile: "The Action Seeker",
        color: "#059669"
    },
    {
        quote: "My confidence and communication have improved so much. I'm now leading my team with ease. I only wish I had found Captanova sooner.",
        name: "Neha K.",
        role: "Team Lead",
        initials: "NK",
        profile: "The Hidden Leader",
        color: "#c9962f"
    },
    {
        quote: "I was always the quiet one in the room. After Communication Mastery, I spoke up in a board meeting and got promoted within 3 months.",
        name: "Rahul D.",
        role: "Senior Analyst",
        initials: "RD",
        profile: "The Silent Voice",
        color: "#0891b2"
    },
    {
        quote: "Renu's approach is unlike anything else. It's not just motivation — it's a complete system. The combination of awareness and action is exactly what I needed.",
        name: "Shreya P.",
        role: "Life Coach",
        initials: "SP",
        profile: "The Doubter",
        color: "#f0654c"
    }
];
function TestimonialsSection() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialsSection.useEffect": ()=>{
            const timer = setInterval({
                "TestimonialsSection.useEffect.timer": ()=>{
                    setActive({
                        "TestimonialsSection.useEffect.timer": (prev)=>(prev + 1) % testimonials.length
                    }["TestimonialsSection.useEffect.timer"]);
                }
            }["TestimonialsSection.useEffect.timer"], 5000);
            return ({
                "TestimonialsSection.useEffect": ()=>clearInterval(timer)
            })["TestimonialsSection.useEffect"];
        }
    }["TestimonialsSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "testimonials",
        className: "relative bg-white py-24 md:py-32 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-96 h-96 bg-purple-100/25 top-10 left-0"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-80 h-80 bg-amber-100/25 bottom-0 right-10"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center font-display text-[#111111] text-3xl md:text-4xl font-semibold mb-3",
                                children: [
                                    "Transformation ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text-purple italic",
                                        children: "Stories"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                        lineNumber: 68,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[#999999] text-base tracking-widest uppercase font-medium mb-16",
                                children: "Real people. Real results."
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative min-h-[300px] mb-10",
                        children: testimonials.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: i === active ? 1 : 0,
                                    y: i === active ? 0 : 20
                                },
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card rounded-[2rem] p-10 md:p-14 text-center h-full flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-6xl font-display leading-none mb-6",
                                            style: {
                                                color: `${t.color}30`
                                            },
                                            children: '"'
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#333333] text-lg md:text-xl font-display font-medium leading-relaxed mb-8 italic max-w-3xl mx-auto",
                                            children: t.quote
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full flex items-center justify-center font-bold text-base text-white",
                                                    style: {
                                                        background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)`
                                                    },
                                                    children: t.initials
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#111111] font-semibold text-base",
                                                            children: t.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#999999] text-base",
                                                            children: t.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block mt-1.5 text-[10px] tracking-[1.5px] uppercase font-bold px-3 py-1 rounded-full",
                                                            style: {
                                                                background: `${t.color}12`,
                                                                color: t.color
                                                            },
                                                            children: t.profile
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-2",
                        children: testimonials.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActive(i),
                                className: `h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-gradient-to-r from-[#7c3aed] to-[#2563eb]" : "w-2 bg-black/10"}`
                            }, i, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-5 mt-16",
                        children: testimonials.slice(0, 3).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: i * 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card hover-lift rounded-2xl p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#666666] text-base leading-relaxed italic mb-4",
                                            children: [
                                                '"',
                                                t.quote.slice(0, 100),
                                                '…"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-full flex items-center justify-center text-base font-bold text-white",
                                                    style: {
                                                        background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)`
                                                    },
                                                    children: t.initials
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#333333] text-base font-semibold",
                                                            children: t.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#aaaaaa] text-[10px]",
                                                            children: t.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            }, t.name, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/TestimonialsSection.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(TestimonialsSection, "g0++h9M18jyb+3aelILICt47jn0=");
_c = TestimonialsSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeadMagnetSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/lib/analytics.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LeadMagnetSection() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async ()=>{
        if (!form.name || !form.email) {
            setError("Please enter your name and email.");
            return;
        }
        setError("");
        setLoading(true);
        try {
            await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...form,
                    source: "free-reset"
                })
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackLead"])({
                content_name: "Free Daily Reset"
            });
            setDone(true);
        } catch  {
            setError("Something went wrong. Please try again.");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative aurora-emerald py-20 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-80 h-80 bg-emerald-200/30 top-0 left-1/4"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-xl mx-auto text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card hover-lift rounded-[2rem] p-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669]/15 to-[#0891b2]/15 flex items-center justify-center mx-auto mb-5 text-2xl",
                                children: "🎁"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#059669] text-base tracking-[3px] uppercase font-bold mb-3",
                                children: "Free Daily Reset"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-[#111111] text-2xl font-semibold mb-3",
                                children: "A Simple 3-Minute Awareness Practice"
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#777777] text-base leading-relaxed mb-8",
                                children: "Designed to help you clear mental noise and reconnect with clarity. Enter your email to receive instant access."
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                className: "text-center py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl mb-3",
                                        children: "✨"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#059669] font-semibold mb-1",
                                        children: "Check your inbox!"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#888888] text-base",
                                        children: "Your Free Daily Reset is on its way."
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Your Name",
                                        value: form.name,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                name: e.target.value
                                            }),
                                        className: "w-full bg-white/70 border border-black/[0.08] focus:border-[#059669]/40 focus:bg-white rounded-xl px-4 py-3 text-[#111111] text-base placeholder-[#999999] outline-none transition-all text-center"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        placeholder: "Your Email Address",
                                        value: form.email,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                email: e.target.value
                                            }),
                                        className: "w-full bg-white/70 border border-black/[0.08] focus:border-[#059669]/40 focus:bg-white rounded-xl px-4 py-3 text-[#111111] text-base placeholder-[#999999] outline-none transition-all text-center"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#f0654c] text-base",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                        lineNumber: 78,
                                        columnNumber: 27
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSubmit,
                                        disabled: loading,
                                        className: "w-full bg-gradient-to-r from-[#059669] to-[#0891b2] hover:shadow-[0_12px_28px_rgba(5,150,105,0.3)] disabled:opacity-60 text-white font-semibold py-3.5 rounded-full text-base tracking-tight transition-all duration-300 hover:scale-[1.01]",
                                        children: loading ? "Sending…" : "GET FREE ACCESS"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/LeadMagnetSection.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(LeadMagnetSection, "p/TbURNCxGrbWQZIdG+84RLQDmU=");
_c = LeadMagnetSection;
var _c;
__turbopack_context__.k.register(_c, "LeadMagnetSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UrgencySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function UrgencySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-[#fafafa] py-24 md:py-32 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-96 h-96 bg-purple-100/30 top-10 right-1/4"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-80 h-80 bg-coral-100/20 bottom-0 left-0"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            direction: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card hover-lift rounded-[2rem] p-10 h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-[#111111] text-xl font-semibold mb-6",
                                        children: "The Cost of Waiting"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#666666] text-base leading-relaxed mb-5",
                                        children: "Imagine carrying the same challenges. One year from now. Still overthinking. Still doubting yourself. Still delaying important decisions. Still waiting for confidence to appear."
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#333333] text-base leading-relaxed font-medium mb-8",
                                        children: "The cost of waiting is often greater than the cost of starting."
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-black/[0.06] pt-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#f0654c] text-base font-semibold tracking-tight",
                                            children: "Every transformation begins with one decision."
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            direction: "right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card hover-lift rounded-[2rem] p-10 h-full flex flex-col justify-between bg-gradient-to-br from-white/90 via-purple-50/40 to-blue-50/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#7c3aed] text-base tracking-[3px] uppercase font-bold mb-3",
                                                children: "Imagine This"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-[#111111] text-2xl md:text-3xl font-semibold leading-tight mb-6",
                                                children: [
                                                    "One Year From Now,",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "gradient-text-purple italic",
                                                        children: "You'll Wish You Started Today."
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#666666] text-base leading-relaxed mb-6",
                                                children: "Your future is created by the decisions you make today, not tomorrow."
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                href: "#quiz",
                                                className: "block w-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] hover:shadow-[0_16px_40px_rgba(124,58,237,0.4)] text-white font-semibold text-center py-4 rounded-full text-base tracking-tight transition-all duration-300",
                                                whileHover: {
                                                    scale: 1.02
                                                },
                                                whileTap: {
                                                    scale: 0.98
                                                },
                                                children: "Start Your 21-Day Reset"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-[#bbbbbb] text-base",
                                                children: "Be The Captain Of Your Life"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/sections/UrgencySection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = UrgencySection;
var _c;
__turbopack_context__.k.register(_c, "UrgencySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const footerLinks = {
    Programs: [
        {
            label: "Awareness Journal",
            href: "#programs"
        },
        {
            label: "Mindset Mastery",
            href: "#programs"
        },
        {
            label: "Transformation System™",
            href: "#programs"
        },
        {
            label: "Leadership Mentorship",
            href: "#programs"
        }
    ],
    Explore: [
        {
            label: "Take The Assessment",
            href: "#quiz"
        },
        {
            label: "About Renu Sharma",
            href: "#about"
        },
        {
            label: "Testimonials",
            href: "#testimonials"
        },
        {
            label: "The Awareness Journal",
            href: "#journal"
        }
    ],
    Connect: [
        {
            label: "WhatsApp",
            href: `https://wa.me/${("TURBOPACK compile-time value", "+4571587709") || "+4571587709"}`
        },
        {
            label: "Instagram",
            href: "#"
        },
        {
            label: "LinkedIn",
            href: "#"
        },
        {
            label: "YouTube",
            href: "#"
        }
    ]
};
const stepColors = [
    "#7c3aed",
    "#2563eb",
    "#0891b2",
    "#059669",
    "#c9962f",
    "#f0654c"
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative bg-white border-t border-black/[0.06] py-16 px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glow-blob w-80 h-80 bg-purple-50 top-0 left-1/4"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-4 gap-12 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-display gradient-text-purple text-xl tracking-[3px] uppercase font-semibold",
                                                children: "Captanova"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                                lineNumber: 37,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#999999] text-[8px] tracking-[2px] uppercase mt-1 font-medium",
                                                children: "Be The Captain Of Your Life"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                                lineNumber: 40,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#888888] text-base leading-relaxed mb-6",
                                        children: "The Academy for Mindset, Communication & Self-Leadership. Where awareness becomes implementation."
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: "#quiz",
                                        className: "inline-block glass-card hover:bg-white text-[#7c3aed] text-base font-bold px-5 py-2.5 rounded-full tracking-tight transition-all duration-200",
                                        whileHover: {
                                            scale: 1.03
                                        },
                                        children: "Take The Assessment →"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            Object.entries(footerLinks).map(([category, links])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#bbbbbb] text-[10px] tracking-[2px] uppercase font-bold mb-5",
                                            children: category
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.href,
                                                        className: "text-[#777777] hover:text-[#7c3aed] text-base font-medium transition-colors duration-200",
                                                        children: link.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, this)
                                                }, link.label, false, {
                                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, category, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-black/[0.06] pt-10 mb-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-x-3 gap-y-2 text-center",
                            children: [
                                "Awareness",
                                "Clarity",
                                "Confidence",
                                "Communication",
                                "Action",
                                "Leadership"
                            ].map((step, i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-semibold tracking-wide",
                                            style: {
                                                color: stepColors[i]
                                            },
                                            children: step
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this),
                                        i < arr.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#cccccc] text-base",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                            lineNumber: 90,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, step, true, {
                                    fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-black/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#aaaaaa] text-base",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Captanova Academy. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6",
                                children: [
                                    "Privacy Policy",
                                    "Terms of Service",
                                    "Refund Policy"
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "text-[#aaaaaa] hover:text-[#555555] text-base transition-colors",
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/Footer.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-academy-mentors-section (4)/captanova/components/WhatsAppButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/captanova-academy-mentors-section (4)/captanova/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
"use client";
;
;
;
const WA_NUMBER = ("TURBOPACK compile-time value", "+4571587709") || "+4571587709";
const WA_MESSAGE = encodeURIComponent("Hi Renu! I just completed the Captanova Clarity Assessment and I'd love to learn more about the programs. 🙏");
function WhatsAppButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
        href: `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Chat on WhatsApp",
        className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#1fb855] text-white rounded-full shadow-[0_8px_28px_rgba(37,211,102,0.4)] px-4 py-3.5 group",
        initial: {
            scale: 0,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        transition: {
            delay: 2,
            type: "spring",
            stiffness: 200
        },
        whileHover: {
            scale: 1.05
        },
        whileTap: {
            scale: 0.95
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                className: "w-6 h-6 fill-white"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/WhatsAppButton.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap",
                children: "Chat with Renu"
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/WhatsAppButton.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$academy$2d$mentors$2d$section__$28$4$292f$captanova$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full",
                animate: {
                    scale: [
                        1,
                        1.3,
                        1
                    ]
                },
                transition: {
                    repeat: Infinity,
                    duration: 1.5
                }
            }, void 0, false, {
                fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/WhatsAppButton.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-academy-mentors-section (4)/captanova/components/WhatsAppButton.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = WhatsAppButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=captanova-academy-mentors-section%20%284%29_captanova_1ro8a3c._.js.map