export async function initTonToUsdObserver() {
    observeDOMChanges();
    await convertAll();
}

export async function convertAllTonToUsd() {
    await convertAll();
}
