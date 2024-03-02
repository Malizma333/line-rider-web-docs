/** Cloud saved track data @returns {CloudSave[]} */
function getSavedTracks(state) {
  return state.savedTracks;
}

/** Whether cloud saved tracks are available @returns {boolean} */
function getSavedTracksAvailable(state) {
  return !!state.savedTracks;
}

/** Whether autosave is enabled @returns {boolean} */
function getAutosaveEnabled(state) {
  return state.autosaveEnabled;
}

/** Currently active tool @returns {Tool} */
function getActiveTool(state) {
  return state.selectedTool;
}

/**
* Tool state of target tool
* @param {Tool} toolId Target Tool
* @returns {ToolState}
*/
function getToolState(state, toolId) {
  return state.toolState[toolId];
}

/** Currently selected tool @returns {Tool} */
function getSelectedTool(state) {
  return state.selectedTool;
}

/** Whether track lines are locked @returns {boolean} */
function getTrackLinesLocked(state) {
  return state.trackLinesLocked;
}

/** Whether track is a local file @returns {boolean} */
function getTrackIsLocalFile(state) {
  return state.trackData.localFile;
}

/** Track script property @returns {string} */
function getTrackScript(state) {
  return state.trackData.script;
}

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