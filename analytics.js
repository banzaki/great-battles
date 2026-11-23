// Visit counter (PostHog, plain HTTP API: no SDK, no cookies, no autocapture, no session recording).
// Sends a page view and a few named events with technical properties only.
// Each browser gets a random anonymous id in localStorage; no person profiles are created.
// Off when the browser sends Global Privacy Control or Do Not Track.
const Analytics = (() => {
  const KEY = "phc_yAPsCTimsNEuMUFgo9hsJeTH2ZFueRMScRKiqUQ8zF8C"; // public project key, meant for browsers
  const URL_ = "https://eu.i.posthog.com/i/v0/e/";
  const off = navigator.globalPrivacyControl === true || navigator.doNotTrack === "1";
  const rid = () => (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now());
  let id;
  try { id = localStorage.getItem("gb-aid") || rid(); localStorage.setItem("gb-aid", id); } catch (e) { id = rid(); }

  // Where the visit came from: only the other site's origin, never its path or query.
  const ref = (() => { try { const u = new URL(document.referrer); return u.host === location.host ? {} : { $referrer: u.origin, $referring_domain: u.host }; } catch (e) { return {}; } })();
  // Campaign tags from the address (?utm_source=reddit...), nothing else from the query.
  const utm = {};
  for (const [k, v] of new URLSearchParams(location.search)) if (/^utm_(source|medium|campaign|content|term)$/.test(k) && v) utm[k] = v.slice(0, 100);

  function track(event, props = {}) {
    if (off) return;
    const body = JSON.stringify({
      api_key: KEY, event, distinct_id: id, timestamp: new Date().toISOString(),
      properties: { $process_person_profile: false, $host: location.host, $pathname: location.pathname,
        $current_url: location.origin + location.pathname, ...ref, ...utm, ...props },
    });
    try { fetch(URL_, { method: "POST", body, keepalive: true }).catch(() => {}); } catch (e) {}
  }
  return { track };
})();
