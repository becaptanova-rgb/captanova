(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/captanova-main-fixed/captanova-main/components/ui/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Reveal({ children, delay = 0, direction = "up", className, once = true }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
        fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/Reveal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Reveal, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountdownTimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function getTimeLeft(targetDate) {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) return null;
    return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor(diff % 86400000 / 3600000),
        minutes: Math.floor(diff % 3600000 / 60000),
        seconds: Math.floor(diff % 60000 / 1000)
    };
}
const units = [
    {
        key: "days",
        label: "Days",
        short: "D"
    },
    {
        key: "hours",
        label: "Hours",
        short: "H"
    },
    {
        key: "minutes",
        label: "Min",
        short: "M"
    },
    {
        key: "seconds",
        label: "Sec",
        short: "S"
    }
];
function CountdownTimer({ targetDate, className = "", compact = false, onExpire }) {
    _s();
    // Start null so server and first client render match (no target-computed
    // value from Date.now() at build/SSR time) — real numbers fill in on mount.
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountdownTimer.useEffect": ()=>{
            // Standard "mounted" flag pattern to avoid a server/client hydration
            // mismatch — the server can never know Date.now(), so it must render a
            // static skeleton first and swap to the real countdown after mount.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setMounted(true);
            setTimeLeft(getTimeLeft(targetDate));
            const interval = setInterval({
                "CountdownTimer.useEffect.interval": ()=>{
                    const next = getTimeLeft(targetDate);
                    setTimeLeft(next);
                    if (!next) {
                        clearInterval(interval);
                        onExpire?.();
                    }
                }
            }["CountdownTimer.useEffect.interval"], 1000);
            return ({
                "CountdownTimer.useEffect": ()=>clearInterval(interval)
            })["CountdownTimer.useEffect"];
        }
    }["CountdownTimer.useEffect"], [
        targetDate,
        onExpire
    ]);
    if (!mounted) {
        // Static skeleton for SSR — avoids a flash of "00:00:00:00" before mount.
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex gap-2 md:gap-3 ${className}`,
            children: units.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `glass-strong rounded-2xl ${compact ? "w-12 py-1.5" : "w-16 md:w-20 py-3"} flex flex-col items-center`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `font-display font-bold gradient-text-champagne ${compact ? "text-lg" : "text-2xl md:text-3xl"}`,
                            children: "--"
                        }, void 0, false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this),
                        !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[9px] uppercase tracking-wider text-[var(--text-tertiary)] mt-0.5",
                            children: u.label
                        }, void 0, false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
                            lineNumber: 63,
                            columnNumber: 26
                        }, this)
                    ]
                }, u.key, true, {
                    fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    if (!timeLeft) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `glass-strong rounded-2xl px-6 py-3 inline-flex items-center gap-2 ${className}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-2 h-2 rounded-full bg-red-500 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-display font-semibold text-[var(--text-primary)]",
                    children: "We're live right now — join in!"
                }, void 0, false, {
                    fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex gap-2 md:gap-3 ${className}`,
        children: units.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `glass-strong rounded-2xl ${compact ? "w-12 py-1.5" : "w-16 md:w-20 py-3"} flex flex-col items-center overflow-hidden`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "popLayout",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: {
                                y: -14,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: 14,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.25
                            },
                            className: `font-display font-bold gradient-text-champagne tabular-nums ${compact ? "text-lg" : "text-2xl md:text-3xl"}`,
                            children: String(timeLeft[u.key]).padStart(2, "0")
                        }, timeLeft[u.key], false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] uppercase tracking-wider text-[var(--text-tertiary)] mt-0.5",
                        children: u.label
                    }, void 0, false, {
                        fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this)
                ]
            }, u.key, true, {
                fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(CountdownTimer, "Vd4AO67yzfwWhw1Z5KPW+17W17E=");
_c = CountdownTimer;
var _c;
__turbopack_context__.k.register(_c, "CountdownTimer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-main-fixed/captanova-main/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AMAZON_KDP_URL",
    ()=>AMAZON_KDP_URL,
    "MASTERCLASS_DATE_ISO",
    ()=>MASTERCLASS_DATE_ISO,
    "MASTERCLASS_ZOOM_URL",
    ()=>MASTERCLASS_ZOOM_URL,
    "profiles",
    ()=>profiles,
    "programs",
    ()=>programs,
    "quizQuestions",
    ()=>quizQuestions
]);
const AMAZON_KDP_URL = "https://www.amazon.in/s?k=the+awareness+journal+captanova+academy";
const MASTERCLASS_DATE_ISO = "2026-08-15T19:00:00+05:30";
const MASTERCLASS_ZOOM_URL = "https://forms.gle/PLACEHOLDER-swap-for-real-zoom-or-webinar-link";
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
"[project]/captanova-main-fixed/captanova-main/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildICSDownloadUrl",
    ()=>buildICSDownloadUrl,
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function buildICSDownloadUrl(opts) {
    const { title, description, startISO, durationMinutes = 60, location = "Online (link sent by email)" } = opts;
    const start = new Date(startISO);
    const end = new Date(start.getTime() + durationMinutes * 60000);
    const toICSDate = (d)=>d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const escapeText = (s)=>s.replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");
    const ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Captanova Academy//Masterclass//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        `UID:${Date.now()}@captanovaacademy.com`,
        `DTSTAMP:${toICSDate(new Date())}`,
        `DTSTART:${toICSDate(start)}`,
        `DTEND:${toICSDate(end)}`,
        `SUMMARY:${escapeText(title)}`,
        `DESCRIPTION:${escapeText(description)}`,
        `LOCATION:${escapeText(location)}`,
        "END:VEVENT",
        "END:VCALENDAR"
    ].join("\r\n");
    const blob = new Blob([
        ics
    ], {
        type: "text/calendar;charset=utf-8"
    });
    return URL.createObjectURL(blob);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/captanova-main-fixed/captanova-main/lib/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
const META_PIXEL_ID = ("TURBOPACK compile-time value", "1678832619740607") || "";
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
"[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MasterclassPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/lucide-react/dist/esm/icons/brain.mjs [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/lucide-react/dist/esm/icons/target.mjs [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$CountdownTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/components/ui/CountdownTimer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/captanova-main-fixed/captanova-main/lib/analytics.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const dateObj = new Date(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTERCLASS_DATE_ISO"]);
const dateLabel = dateObj.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Asia/Kolkata"
});
const timeLabel = dateObj.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Kolkata"
});
const takeaways = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        color: "#7C3AED",
        title: "Rewire Your Mind",
        desc: "Break the overthinking cycle in 3 simple steps"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
        color: "#A78BFA",
        title: "Find Clarity",
        desc: "Make decisions with confidence, not confusion"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        color: "#D4A574",
        title: "Take Action",
        desc: "Move from thinking to doing, starting today"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        color: "#B8860B",
        title: "Build Momentum",
        desc: "Create lasting habits that stick"
    }
];
const hostStats = [
    {
        label: "Years Coaching",
        value: "12+",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    },
    {
        label: "Lives Changed",
        value: "3000+",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        label: "Success Rate",
        value: "94%",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"]
    },
    {
        label: "Rating",
        value: "4.9★",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    }
];
const initialForm = {
    name: "",
    email: "",
    phone: "",
    city: "",
    age: ""
};
function MasterclassPage() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialForm);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [registered, setRegistered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [icsUrl, setIcsUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openFaq, setOpenFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MasterclassPage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackViewContent"])({
                content_name: "Free Masterclass Landing Page"
            });
        }
    }["MasterclassPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MasterclassPage.useEffect": ()=>{
            return ({
                "MasterclassPage.useEffect": ()=>{
                    if (icsUrl) URL.revokeObjectURL(icsUrl);
                }
            })["MasterclassPage.useEffect"];
        }
    }["MasterclassPage.useEffect"], [
        icsUrl
    ]);
    function scrollToForm() {
        document.getElementById("register")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.city.trim() || !form.age) {
            setError("Please fill in every field so we can confirm your seat.");
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...form,
                    type: "masterclass",
                    source: "masterclass-landing"
                })
            });
            if (!res.ok) throw new Error("Registration failed");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackLead"])({
                content_name: "Free Masterclass"
            });
            const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildICSDownloadUrl"])({
                title: "Free Masterclass: Stop Overthinking, Start Living — Captanova",
                description: "Live masterclass with Renu Sharma. Join link will be emailed to you before the session.",
                startISO: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTERCLASS_DATE_ISO"],
                durationMinutes: 90
            });
            setIcsUrl(url);
            setRegistered(true);
        } catch  {
            setError("Something went wrong — please try again in a moment.");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full bg-white text-gray-900 overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    y: -100
                },
                animate: {
                    y: 0
                },
                className: "fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-purple-200/30 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-full mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "font-bold text-lg sm:text-xl bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent flex-shrink-0",
                            children: "Captanova"
                        }, void 0, false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-amber-50 border border-purple-200/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-purple-600 animate-pulse flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-gray-600 uppercase tracking-wider",
                                    children: "In"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$CountdownTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    targetDate: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTERCLASS_DATE_ISO"],
                                    compact: true
                                }, void 0, false, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: scrollToForm,
                            className: "bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all shadow-lg hover:shadow-xl flex-shrink-0",
                            children: "Reserve Now"
                        }, void 0, false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "md:hidden w-full pt-20 pb-8 px-4 bg-gradient-to-b from-purple-50 via-white to-white min-h-screen flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "w-full max-w-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-purple-400/30 to-amber-400/20 rounded-3xl blur-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl ring-8 ring-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/mentors/renu-speaking-stage.jpg",
                                                alt: "Renu Sharma",
                                                fill: true,
                                                priority: true,
                                                className: "object-cover",
                                                sizes: "100vw"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.2
                                        },
                                        className: "absolute -bottom-8 left-4 right-4 bg-gradient-to-r from-purple-700 via-purple-600 to-amber-500 rounded-2xl px-6 py-4 shadow-2xl border-4 border-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-black text-lg",
                                                children: "Renu Sharma"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/90 font-bold text-sm",
                                                children: "Transformational Coach"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                        className: "w-3.5 h-3.5 text-white/80",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-white/80",
                                                        children: "12+ Years • 3000+ Lives Changed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-12 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-purple-700 text-xs font-black uppercase tracking-widest mb-4",
                                            children: [
                                                "📅 ",
                                                dateLabel,
                                                " · ",
                                                timeLabel
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl font-black leading-tight text-gray-900 mb-4",
                                            children: [
                                                "Stop Overthinking.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent italic",
                                                    children: "Start Living."
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-base leading-relaxed mb-8 font-medium",
                                            children: "A free live masterclass on breaking free from overthinking and building real, lasting confidence."
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-2xl bg-purple-50 border-2 border-purple-200 mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black text-gray-700 uppercase mb-2",
                                                    children: "⏰ Seats Closing In"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$CountdownTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        targetDate: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTERCLASS_DATE_ISO"]
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: scrollToForm,
                                            className: "w-full bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white font-black text-lg py-4 px-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-3 mb-3",
                                            children: [
                                                "Reserve My Free Seat",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 font-bold",
                                            children: "✓ 100% free · ✓ No card · ✓ 30 seconds"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hidden md:block relative pt-32 pb-24 px-6 overflow-hidden min-h-screen flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 -z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-200/40 to-transparent rounded-full blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 bg-purple-50 border-2 border-purple-200 rounded-full px-5 py-3 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-black uppercase tracking-wider text-purple-700",
                                                children: "Free Live Masterclass"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-6xl lg:text-7xl font-black leading-[1.1] mb-8 text-gray-900",
                                        children: [
                                            "Stop Overthinking.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent italic",
                                                children: "Start Living."
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-gray-600 mb-8 leading-relaxed font-medium max-w-xl",
                                        children: "Join Renu Sharma for a transformational masterclass on breaking the overthinking cycle and building lasting confidence."
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-4 mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-purple-50 to-amber-50 border-2 border-purple-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "w-5 h-5 text-purple-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-gray-600 uppercase",
                                                                children: "Date & Time"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 303,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-gray-900",
                                                                children: [
                                                                    dateLabel,
                                                                    ", ",
                                                                    timeLabel,
                                                                    " IST"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-purple-50 to-amber-50 border-2 border-purple-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "w-5 h-5 text-purple-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-gray-600 uppercase",
                                                                children: "Format"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-gray-900",
                                                                children: "Live Online · 90 mins"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        onClick: scrollToForm,
                                        className: "bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white text-lg font-black py-5 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3 mb-6",
                                        children: [
                                            "Reserve My Free Seat",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 font-bold",
                                        children: "✓ Completely free · ✓ No credit card · ✓ 30 seconds to register"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.1
                                },
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-purple-400/30 to-amber-400/20 rounded-3xl blur-3xl"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl ring-8 ring-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/mentors/renu-speaking-stage.jpg",
                                                alt: "Renu Sharma",
                                                fill: true,
                                                priority: true,
                                                className: "object-cover",
                                                sizes: "(max-width: 1024px) 90vw, 40vw"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.7,
                                                    delay: 0.3
                                                },
                                                className: "absolute bottom-6 left-6 right-6 bg-gradient-to-r from-purple-700 to-amber-500 rounded-2xl px-6 py-4 shadow-2xl border-4 border-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-black text-lg",
                                                        children: "Renu Sharma"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/90 font-bold text-sm",
                                                        children: "Transformational Coach & Founder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                                className: "w-4 h-4 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-white/90",
                                                                children: "12+ Years • 3000+ Transformations"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-purple-50/30 to-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-12 md:mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-purple-700 text-xs md:text-sm font-black uppercase tracking-widest mb-4",
                                        children: "In This Masterclass"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-4",
                                        children: "4 Game-Changing Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-base md:text-lg font-medium max-w-2xl mx-auto",
                                        children: "You'll leave with concrete frameworks you can use starting today."
                                    }, void 0, false, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: takeaways.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    delay: i * 0.1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            y: -8
                                        },
                                        className: "group bg-white rounded-2xl p-6 sm:p-7 border-2 border-gray-200 hover:border-purple-300 shadow-md hover:shadow-xl transition-all cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6 inline-block p-3 rounded-xl bg-gradient-to-br from-purple-100 to-amber-100 group-hover:from-purple-200 group-hover:to-amber-200 transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    className: "w-6 h-6",
                                                    style: {
                                                        color: item.color
                                                    },
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 389,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-gray-900 font-black text-lg sm:text-xl mb-3",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-base leading-relaxed",
                                                children: item.desc
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 393,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 17
                                    }, this)
                                }, item.title, false, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full py-16 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                direction: "left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-purple-400 text-xs md:text-sm font-black uppercase tracking-widest mb-4",
                                            children: "Meet Your Coach"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl md:text-5xl font-black mb-6 leading-tight",
                                            children: "Renu Sharma"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-6 mb-8 py-8 border-y border-white/20",
                                            children: hostStats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        delay: i * 0.1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent",
                                                            children: stat.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-xs font-bold uppercase tracking-wider mt-2",
                                                            children: stat.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, stat.label, true, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 text-lg leading-relaxed mb-6 font-medium",
                                            children: "For over a decade, Renu has been helping high-achievers break free from overthinking and step into their power. She's directly coached thousands of individuals who wanted clarity, confidence, and the ability to actually take action on what they know."
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white italic text-lg font-bold",
                                            children: '"My mission is simple: help you become the captain of your life, not a passenger."'
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                direction: "right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            className: "col-span-2 rounded-3xl overflow-hidden ring-4 ring-white/20 shadow-2xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/mentors/renu-portrait.jpg",
                                                alt: "Renu Sharma - Professional Coach Portrait",
                                                width: 900,
                                                height: 800,
                                                priority: true,
                                                className: "w-full h-auto object-contain",
                                                sizes: "(max-width: 768px) 100vw, 50vw"
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 447,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 443,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            className: "rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-xl h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                        className: "w-12 h-12 text-white/80 mx-auto mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-bold text-sm",
                                                        children: "Certified Coach"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 463,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            className: "rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-xl h-48 bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "w-12 h-12 text-white/80 mx-auto mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-bold text-sm",
                                                        children: "3000+ Lives"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 470,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 441,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full py-16 md:py-24 px-4 sm:px-6 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-black text-center mb-12 text-gray-900",
                                children: "Is This Masterclass For You?"
                            }, void 0, false, {
                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                lineNumber: 489,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 488,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-6 md:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    direction: "left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "w-7 h-7 text-purple-700 flex-shrink-0",
                                                        strokeWidth: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-black text-gray-900",
                                                        children: "Perfect If You:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-4",
                                                children: [
                                                    "Overthink decisions (big and small)",
                                                    "Know what to do but struggle to act",
                                                    "Want to feel more confident",
                                                    "Are ready for real change, not just inspiration"
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 rounded-full bg-purple-700 mt-2 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 509,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700 font-medium text-base",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 510,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, item, true, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 501,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 496,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 495,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    direction: "right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border-2 border-amber-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                        className: "w-7 h-7 text-amber-700 flex-shrink-0",
                                                        strokeWidth: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-black text-gray-900",
                                                        children: "You'll Get:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-4",
                                                children: [
                                                    "90 minutes of live coaching",
                                                    "Exclusive frameworks & strategies",
                                                    "Live Q&A with Renu",
                                                    "Lifetime replay access + resources"
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 rounded-full bg-amber-700 mt-2 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700 font-medium text-base",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 532,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, item, true, {
                                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 523,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 494,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                    lineNumber: 487,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "register",
                className: "w-full py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-purple-50 via-white to-purple-50 scroll-mt-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-purple-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: registered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.95
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    className: "text-center py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-gradient-to-br from-purple-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-8 h-8 text-purple-700",
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                lineNumber: 556,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 555,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-black text-gray-900 mb-3",
                                            children: "You're In! 🎉"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 559,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-base leading-relaxed mb-8 font-medium",
                                            children: [
                                                "Your seat is reserved for ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: dateLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 49
                                                }, this),
                                                " at ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: [
                                                        timeLabel,
                                                        " IST"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 99
                                                }, this),
                                                ". Check your email for the confirmation."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 563,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                icsUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: icsUrl,
                                                    download: "captanova-masterclass.ics",
                                                    className: "w-full block bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all text-center",
                                                    children: "📅 Add To Calendar"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `https://wa.me/${("TURBOPACK compile-time value", "4571587709") || "919876543210"}?text=${encodeURIComponent("Hi! I just registered for the free masterclass 🎉")}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "w-full block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all text-center",
                                                    children: "💬 Get Reminders on WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 567,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, "success", true, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-purple-700 text-xs font-black uppercase tracking-widest mb-2 text-center",
                                            children: "Secure Your Spot"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-black text-gray-900 text-center mb-8",
                                            children: "Register Now"
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Full Name",
                                                    value: form.name,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            name: e.target.value
                                                        }),
                                                    className: "w-full bg-gray-50 border-2 border-gray-300 hover:border-purple-300 focus:border-purple-500 focus:bg-white rounded-xl px-4 py-3.5 text-gray-900 text-base placeholder-gray-500 outline-none transition-all font-medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    placeholder: "Email Address",
                                                    value: form.email,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            email: e.target.value
                                                        }),
                                                    className: "w-full bg-gray-50 border-2 border-gray-300 hover:border-purple-300 focus:border-purple-500 focus:bg-white rounded-xl px-4 py-3.5 text-gray-900 text-base placeholder-gray-500 outline-none transition-all font-medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    placeholder: "Phone Number",
                                                    value: form.phone,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            phone: e.target.value
                                                        }),
                                                    className: "w-full bg-gray-50 border-2 border-gray-300 hover:border-purple-300 focus:border-purple-500 focus:bg-white rounded-xl px-4 py-3.5 text-gray-900 text-base placeholder-gray-500 outline-none transition-all font-medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "City",
                                                    value: form.city,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            city: e.target.value
                                                        }),
                                                    className: "w-full bg-gray-50 border-2 border-gray-300 hover:border-purple-300 focus:border-purple-500 focus:bg-white rounded-xl px-4 py-3.5 text-gray-900 text-base placeholder-gray-500 outline-none transition-all font-medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: form.age,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            age: e.target.value
                                                        }),
                                                    className: "w-full bg-gray-50 border-2 border-gray-300 hover:border-purple-300 focus:border-purple-500 focus:bg-white rounded-xl px-4 py-3.5 text-gray-900 text-base outline-none transition-all appearance-none font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select Age Range"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Under 18",
                                                            children: "Under 18"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "18-24",
                                                            children: "18–24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                            lineNumber: 636,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "25-34",
                                                            children: "25–34"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "35-44",
                                                            children: "35–44"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "45-54",
                                                            children: "45–54"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "55+",
                                                            children: "55+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                            lineNumber: 640,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 629,
                                                    columnNumber: 23
                                                }, this),
                                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-600 text-sm font-bold text-center",
                                                    children: error
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: loading,
                                                    className: "w-full bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 disabled:opacity-50 text-white font-black text-lg py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2",
                                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 652,
                                                                columnNumber: 29
                                                            }, this),
                                                            "Reserving…"
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            "Reserve My Free Seat",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                                lineNumber: 658,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 596,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-6 text-center font-bold",
                                            children: "Your privacy is protected. We respect your inbox."
                                        }, void 0, false, {
                                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                            lineNumber: 664,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, "form", true, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                lineNumber: 547,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 546,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                        lineNumber: 545,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                    lineNumber: 544,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                lineNumber: 543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "w-full bg-black text-white py-8 px-4 sm:px-6 border-t border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "font-bold text-xl mb-4 inline-block bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent",
                            children: "Captanova"
                        }, void 0, false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 678,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm mb-6",
                            children: "Building confident, decisive leaders."
                        }, void 0, false, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 681,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-6 text-sm text-gray-400 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy-policy",
                                    className: "hover:text-white transition-colors font-medium",
                                    children: "Privacy"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 683,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 686,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/refund-policy",
                                    className: "hover:text-white transition-colors font-medium",
                                    children: "Refunds"
                                }, void 0, false, {
                                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                    lineNumber: 687,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 682,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-xs",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Captanova Academy. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                            lineNumber: 691,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                    lineNumber: 677,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                lineNumber: 676,
                columnNumber: 7
            }, this),
            !registered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t-2 border-purple-200 shadow-2xl px-4 py-3 flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold text-gray-600 uppercase",
                                children: "Starts In"
                            }, void 0, false, {
                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                lineNumber: 701,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$components$2f$ui$2f$CountdownTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                targetDate: __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTERCLASS_DATE_ISO"],
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                                lineNumber: 702,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                        lineNumber: 700,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$captanova$2d$main$2d$fixed$2f$captanova$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: scrollToForm,
                        className: "bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white text-sm font-black py-3 px-6 rounded-lg flex-shrink-0 shadow-lg",
                        children: "Reserve"
                    }, void 0, false, {
                        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                        lineNumber: 704,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
                lineNumber: 699,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/captanova-main-fixed/captanova-main/app/masterclass/page.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_s(MasterclassPage, "LibDxSLwZTvCFt9XzXhye+YzLcQ=");
_c = MasterclassPage;
var _c;
__turbopack_context__.k.register(_c, "MasterclassPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=captanova-main-fixed_captanova-main_0i0e6h6._.js.map