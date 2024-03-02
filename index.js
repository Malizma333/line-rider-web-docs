/** Whether timeline is currently active @returns {boolean} */
function getControlsActive(state) {
  return state.ui.controlsActive;
}

/** Information about currently active ui components @returns {CurrentViews} */
function getViews(state) {
  return state.views;
}

/** Sidebar page information @returns {string?} */
function getSidebarPage(state) {
  return getViews(state)["SIDEBAR"];
}

/** Main page information @returns {string?} */
function getMainPage(state) {
  return getViews(state)["MAIN"];
}

/** Whether currently in track editor @returns {boolean} */
function getInEditor(state) {
  return state.views["MAIN"] === "editor";
}

/** Whether currently in track viewer @returns {boolean} */
function getInViewer(state) {
  return state.views["MAIN"] === "viewer" || 
          state.views["MAIN"] === "editable-viewer";
}

/** Whether currently in save window @returns {boolean} */
function getInTrackSaver(state) {
  return state.views["TRACK_SAVER"] === "save";
}

/** Whether currently in load window @returns {boolean} */
function getInTrackLoader(state) {
  return state.views["TRACK_LOADER"] === "load";
}

/** Whether currently in video export window @returns {boolean} */
function getInVideoExporter(state) {
  return state.views["VIDEO_EXPORTER"] === "export";
}

/** Whether there is an overlay over the main page @returns {string?} */
function getHasOverlay(state) {return (
  state.views["ABOUT"] ||
  state.views["TRACK_LOADER"] ||
  state.views["TRACK_SAVER"] ||
  state.views["VIDEO_EXPORTER"] ||
  state.views["RELEASE_NOTES"]
);}