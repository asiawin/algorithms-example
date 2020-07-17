const byteSize = str => new Blob([str]).size;
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
const castArray = val => (Array.isArray(val) ? val : [val]);
const currentURL = () => window.location.href;
const dayOfYear = date =>
    Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const decapitalize = ([first, ...rest]) =>
    first.toLowerCase() + rest.join('')
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};
const functionName = fn => (console.debug(fn.name), fn);
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
const hasClass = (el, className) => el.classList.contains(className);
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));
const $ = (el) => document.querySelector(el);
const httpsRedirect = () => {
    if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);
const is = (type, val) => ![, null].includes(val) && val.constructor === type;
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
const isBrowserTabFocused = () => !document.hidden;
const isLowerCase = str => str === str.toLowerCase();
const isBoolean = val => typeof val === 'boolean';
const isNil = val => val === undefined || val === null;
const isNull = val => val === null;
const isNumber = val => typeof val === 'number';
const isObject = obj => obj === Object(obj);
const isObjectLike = val => val !== null && typeof val === 'object';
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
$.prototype.setStyle = (el, ruleName, val) => (el.style[ruleName] = val);
$.prototype.show = (...el) => [...el].forEach(e => (e.style.display = ''));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const smoothScroll = element =>
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
const times = (n, fn, context = undefined) => {
    let i = 0;
    while (fn.call(context, i) !== false && ++i < n) {}
};
const toCurrency = (n, curr, LanguageFormat = undefined) =>
    Intl.NumberFormat(LanguageFormat, {
        style: 'currency',
        currency: curr
    }).format(n);
const toggleClass = (el, className) => el.classList.toggle(className);
$.prototype.toggleClass = toggleClass;
const tomorrow = () => {
    let t = new Date();
    t.setDate(t.getDate() + 1);
    return t.toISOString().split('T')[0];
};
const union = (a, b) => Array.from(new Set([...a, ...b]));
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
class Struct {
    constructor(props) {
        super(props);
        var names = names.split(' ');
        var count = names.length;

        function constructor() {
            for (var i = 0; i < count; i++) {
                this[names[i]] = arguments[i];
            }
        }
        return constructor;
    }

}
class HTMLStripper{
    constructor(props) {
        super(props);
    }
    tagsToEntites(string) {
        // 1. Use build in replace method and RegExp to change characters
        return string
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    }
    stripScriptTag(string) {
        return string
            .replace(/<(\/)?script>/ig, '')
    }
}