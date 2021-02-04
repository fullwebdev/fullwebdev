/**
 * @param {HTMLElement} container
 * @param {(container: HTMLElement) => void} renderFn
 */
export const renderingBenchmark = (
  container,
  renderFn,
  repeat = 1,
  runs = 50
) =>
  new Promise((resolve) => {
    const logs = [];
    let startTime = performance.now();
    let i = 0;
    // eslint-disable-next-line no-param-reassign
    container.textContent = "";
    const repeatedRendering = () => {
      i += 1;
      logs.push(performance.now() - startTime);
      for (let j = 0; j < repeat; j += 1) {
        renderFn(container);
      }
      startTime = performance.now();
      if (i < runs) {
        requestAnimationFrame(repeatedRendering);
      } else {
        const sum = logs.reduce((pre, cur) => pre + cur, 0);
        resolve(sum / runs);
      }
    };

    requestAnimationFrame(repeatedRendering);
  });
