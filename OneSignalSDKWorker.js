// Push notifications (OneSignal)
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// Number on the app icon: +1 for each notification, cleared when the site is opened
const BADGE_KEY = "./__badge-count";
self.addEventListener("push", e => {
  if(!self.navigator || !self.navigator.setAppBadge) return;
  e.waitUntil(caches.open("paradesi-badge").then(async c => {
    const r = await c.match(BADGE_KEY); const n = (r ? Number(await r.text()) : 0) + 1;
    await c.put(BADGE_KEY, new Response(String(n)));
    return self.navigator.setAppBadge(n);
  }).catch(()=>{}));
});

// Simple offline support: app shell cached, network first for everything else.
const CACHE = "paradesi-v5";
const SHELL = ["./", "./index.html", "./data.js", "./logo.svg", "./manifest.webmanifest",
  "./img/hero.jpg", "./img/garden.jpg", "./img/invitation.jpg", "./img/synagogue.jpg",
  "./img/day1.jpg","./img/day2.jpg","./img/day3.jpg","./img/day4.jpg","./img/day5.jpg","./img/day6.jpg","./img/day7.jpg","./img/day8.jpg","./img/qr.svg",
  "./img/cover.jpg","./img/map-he.jpg","./img/map-en.jpg","./zemiron.pdf","./icons/icon-192.png","./icons/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== "paradesi-badge").map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return; // Google calls go straight to network
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
});
