/**
 * @typedef {{ repository: string; name: string; branch: string; path: string }} ProjectData
 */

/**
 * @type {ProjectData}
 */
let site;

/**
 * @param { ProjectData } data
 */
export const setProject = (data) => {
  site = data;
};

/**
 * @returns {ProjectData}
 */
export const getProject = () => {
  if (!site) {
    throw new Error(`no website data have been set`);
  }
  return site;
};
