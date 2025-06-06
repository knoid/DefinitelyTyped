{
    // Node's "DOM-like" Event differs from the real DOM in a few key aspects
    const evt = new Event("");
    // $ExpectType EventTarget
    evt.composedPath()[1];
    // $ExpectType number
    evt.eventPhase;

    const et: EventTarget = new EventTarget();
    et.addEventListener("", () => {}, { passive: true });
}
