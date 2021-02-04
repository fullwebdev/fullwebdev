/**
 * @type {PerformanceObserverCallback}
 */
//#region callback
function perfObserver(list) {
  const performanceEntries = list.getEntriesByType("paint");
  performanceEntries.forEach((performanceEntry) => {
    console.log(
      `${performanceEntry.name} est égal à ${performanceEntry.startTime} millisecondes.`
    );
  });
}
//#endregion callback

//#region observer
if (window.performance) {
  const observer = new PerformanceObserver(perfObserver);
  observer.observe({ entryTypes: ["paint"] });
} else {
  console.log(`La Performance API n'est pas supportée.`);
}
//#endregion observer
