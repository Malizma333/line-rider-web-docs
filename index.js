/** Full audio data
* @typedef {{
*   enabled: boolean
*   name: ?string
*   offset: number
*   path: ?string
*   volume: number
* }} AudioData
*/

/** Partial audio data used in saves
* @typedef {{
*   name: ?string
*   offset: number
*   path: ?string
* }} AudioDataFragment
*/

/** Audio file loader properties
* @typedef {{
*   error: ?string
*   loadingFile: boolean
* }} AudioLoader
*/

/** Data important to autosaving
* @typedef {{
*   cloudInfo: CloudInfo
*   details: TrackDetails
*   info: {duration: number}
*   localFile: boolean
*   props: TrackFragment
* }} AutosaveData
*/

/** Camera position and zoom properties
* @typedef {{
*   position: V2
*   zoom: number
* }} Camera
*/

/** Cloud base properties
* @typedef {{
*   derivativeKey: string
*   derivedFrom: DerivedFrom
*   masterKey: string
*   saveTime: number
*   trackId: number
*   versionTitle: string
*   versionId: string
* }} CloudInfo
*/

/** Cloud save peroperties
* @typedef {{
*   cloudInfo: CloudInfo
*   details: TrackDetails
* }} CloudSave
*/

/** Current ui view state
* @typedef {{
*   "About"?: string
*   "Main"?: string
*   "Sidebar"?: string
*   "TrackLoader"?: string
*   "TrackSaver"?: string
* }} CurrentViews
*/

/** Cloud derived properties
* @typedef {{
*   creator: string
*   title: string
*   version: "6.1" | "6.2"
* }} DerivedFrom
*/

/** Camera dimensions
* @typedef {{
*   height: number
*   width: number
* }} Dimensions
*/

/** Editor notification properties
* @typedef {{
*   autoHide: boolean
*   message: string
*   open: boolean
* }} EditorNotification
*/

/** Engine state properties
* @typedef {{
*   _changeCount: number
*   _computed?: Object
*   _locked: boolean
*   _target?: Object
*   linesList: {buffer: LineBase[]}
*   props: Object
*   start: {
*     position: {x: number, y: number}
*     velocity: {x: number, y: number}
*   }
*   state: {
*     activeLayerId: number
*     layers: {buffer: Layer[]}
*     lines: {buffer: Line[]}
*     riders: {buffer: Rider[]}
*   }
* }} Engine
*/

/** Layer properties
* @typedef {{
*   editable: boolean
*   id: number
*   name: string
*   visible: boolean
* }} Layer
*/

/** Progress data for saves/loads 
* @typedef {{
*   error: ?string
*   percent: ?(true | number)
*   status: ?boolean
* }} Progress
*/

/** Fragment of a track used in save data
* @typedef {{
*   audio: AudioDataFragment
*   layers: {buffer: Layer[]}
*   riders: {buffer: Rider[]}
*   script: string
*   version: "6.1" | "6.2"
* }} TrackFragment
*/

/** Tool state
* @typedef {{
*   status: {
*     inactive: boolean
*   }
* }} ToolState
*/

/** Available subactions for updating lines
* @typedef {...
*   "ADD_LINE" |
*   "ADD_LINES" |
*   "LOAD_LINES" |
*   "DUPLICATE_LINES" |
*   "REMOVE_LINE" |
*   "REMOVE_LINES" |
*   "SET_LINES" |
*   "REPLACE_LINE"
* } UpdateLineSubaction
*/

/** Two-dimensional vector
* @typedef {{
*   x: number
*   y: number
* }} V2
*/

/** Camera dimensions and zoom properties
* @typedef {{
*   height: number
*   width: number
*   zoom: number
* }} Viewbox
*/

/** Renderer view settings
* @typedef {{
*   color: boolean
*   flag: ?boolean
*   skeleton: SkeletonMode
* }} ViewSettings
*/

const Selectors = (function() {
  /** Audio file enabled @returns {boolean} */
  function getAudioEnabled(state) {
    return state.audio.enabled;
  }

  /** Audio file offset @returns {number} */
  function getAudioOffset(state) {
    return state.audio.offset;
  }

  /** Audio file is loading @returns {boolean} */
  function getAudioFileLoading(state) {
    return state.audioFileLoader.loadingFile;
  }

  /** Audio file properties @returns {AudioData} */
  function getAudioProps(state) {
    return state.audio;
  }

  /** Audio file loading properties @returns {AudioLoader} */
  function getAudioFileLoader(state) {
    return state.audioFileLoader;
  }

  /** Local audio file properties @returns {AudioDataFragment} */
  function getLocalAudioProps (state) {
    const {name, path, offset} = state.audio;
    if (path) {
      return {name, path, offset};
    }
    return null;
  }

  /** Editor zoom @returns {number} */
  function getEditorZoom(state) {
    return state.camera.editorZoom;
  }

  /** Position in editor @returns {V2} */
  function getEditorPosition(state) {
    return state.camera.editorPosition;
  }

  /** Editor camera properties @type {Camera} */
  const getEditorCamera = Reselect.createSelector(
    state => state.camera.editorPosition,
    getEditorZoom,
    (position, zoom) => ({ position, zoom })
  );

  /** Keep rider in view while scrubbing timeline @returns {boolean} */
  function getUseEditorFollower(state) {
    return state.settings["cam.useEditorFollower"];
  }

  /** Editor canvas dimensions @returns {Dimensions} */
  function getEditorDimensions(state) {
    return state.camera.editorDimensions;
  }

  /** Rider being follow by editor camera @returns {number} */
  function getEditorFollowerFocus(state) {
    return Math.min(getNumRiders(state) - 1, state.camera.editorFollowerFocus);
  }

  /** Playback zoom @returns {number} */
  function getPlaybackZoom(state) {
    return window.getAutoZoom ?
      window.getAutoZoom(getPlayerIndex(state)) :
      state.camera.playbackZoom ;
  }

  /** Playback dimensions not null @returns {boolean} */
  function getPlaybackDimensionsDefined(state) {
    return state.camera.playbackDimensions != null;
  }

  /** Playback dimensions @returns {Dimensions} */
  function getPlaybackDimensions(state) {
    return state.camera.playbackDimensions || getEditorDimensions(state);
  }

  /** Playback camera viewbox @type {Viewbox} */
  const getPlaybackCameraParams = Reselect.createSelector(
    getPlaybackZoom,
    getPlaybackDimensions,
    (zoom, { width, height }) => ({ zoom, width, height })
  );

  /** Playback camera properties @type {Camera} */
  const getPlaybackCamera = Reselect.createSelector(
    state => state.camera.playbackFollower,
    getSimulatorTrack,
    getPlayerIndex,
    getPlaybackZoom,
    getPlaybackCameraParams,
    state => state.camera.playbackFixedPosition,
    (playbackFollower, track, index, zoom, params, pan) => ({
      position: playbackFollower.isFixed() ? pan : playbackFollower.getCamera(track, params, index),
      zoom
    })
  );

  /** Playback camera focus array @returns {Array.<boolean|number>} */
  function getPlaybackCameraFocus(state) {
    return state.camera.playbackFollower.focus;
  }

  /** Current camera being used @returns {Camera} */
  function getCurrentCamera(state) {
    return getPlayerRunning(state) ?
      getPlaybackCamera(state) :
      getEditorCamera(state) ;
  }

  /** Command hotkeys array @type {[Command, string][]}*/
  const getCommandsToHotkeys = Reselect.createSelector(
    state => state.command.hotkeys,
    (hotkeys) => Object.keys(hotkeys).map(command => [command, hotkeys[command]])
  );

  /**
  * Trigger activation count
  * @param {string} trigger Target Trigger
  * @return {number}
  */
  function getTriggerCounts(state, trigger) {
    return state.command.triggerCounts.get(trigger, 0);
  }

  /**
  * Target modifier is active
  * @param {string} modifier Target Modifier
  * @return {boolean}
  */
  function getModifier(state, modifier) {
    return state.command.activeModifiers.has(modifier);
  }

  /** Modifiers active @return {boolean} */
  function getModifiersActive(state) {
    return !state.command.activeModifiers.isEmpty();
  }

  /** Zoom slider active @return {boolean} */
  function getZoomSliderActive(state) {
    return getModifier(state, "modifiers.zoom");
  }

  /** Current active notification @type {EditorNotification} */
  const getNotification = Reselect.createSelector(
    state => state.notifications.message,
    state => state.notifications.autoHide,
    state => state.notifications.open,
    (message, autoHide, open) => ({ message, autoHide, open })
  );

  /** Active notification progress id @returns {?string} */
  function getNotificationProgressId(state) {
    return state.notifications.progressId;
  }

  /** Count of notifications @returns {number} */
  function getNotificationsCount(state) {
    return state.notifications.count;
  }

  /** Player running @returns {boolean} */
  function getPlayerRunning(state) {
    return state.player.running;
  }

  /** Current player index @returns {number} */
  function getPlayerIndex(state) {
    return state.player.index;
  }

  /** Max player index @returns {number} */
  function getPlayerMaxIndex(state) {
    return Math.ceil(state.player.maxIndex);
  }

  /** Flag index @returns {number} */
  function getPlayerFlagIndex(state) {
    return state.player.flagIndex;
  }

  /** Flag active @returns {boolean} */
  function getPlayerFlagActive(state) {
    return getPlayerFlagIndex(state) !== 0;
  }

  /** Slow motion active @returns {boolean} */
  function getPlayerSlowMotion(state) {
    return state.player.slowMotion;
  }

  /** Playing in reverse @returns {boolean} */
  function getPlayerReversed(state) {
    return (state.player.reverse || state.player.rewind) && !state.player.fastForward;
  }

  /** Smooth playback @returns {boolean} */
  function getPlayerFrameRateSetting(state) {
    return state.renderer.skeleton === 0 ?
      state.player.settings.interpolate :
      false ;
  }

  /** Player settings @returns {PlayerSettings} */
  function getPlayerSettings(state) {
    return state.player.settings;
  }

  /** Playback framerate @returns {number} */
  function getPlayerFps(state) {
    return state.player.settings.fps;
  }

  /** Current player time in seconds @type {number} */
  const getPlayerTime = Reselect.createSelector(
    getPlayerIndex,
    getPlayerFps,
    (index, fps) => index / fps
  );

  /** Current playback rate @type {number} */
  const getCurrentPlayerRate = Reselect.createSelector(
    state => state.player.settings.baseRate,
    state => state.player.settings.slowMotionRate,
    state => state.player.settings.fastForwardRate,
    state => state.player.slowMotion,
    state => state.player.fastForward,
    state => state.player.rewind,
    getPlayerRunning,
    (baseRate, slowMotionRate, fastForwardRate, slowMotion, fastForward, rewind, running) => {
      if (slowMotion) {
        baseRate *= slowMotionRate;
      }
      if (running && (fastForward || rewind)) {
        baseRate *= fastForwardRate;
      }
      return baseRate;
    }
  );

  /** Current track saving progress @returns {Progress} */
  function getTrackSaverProgress(state) {
    return state.progress["SAVE_TRACK"];
  }

  /** Track saving in progress @returns {boolean} */
  function getTrackSaverInProgress(state) {
    return state.progress["SAVE_TRACK"].percent != null;
  }

  /** Current track loading progress @returns {Progress} */
  function getTrackLoaderProgress(state) {
    return state.progress["LOAD_TRACK"];
  }

  /** Current track autosaving progress @returns {Progress} */
  function getAutosaveProgress(state) {
    return state.progress["AUTOSAVE"];
  }

  /** Onion skinning start index @returns {number} */
  function getOnionBeginIndex(state) {
    return Math.max(
      0, Math.ceil(state.player.index) - state.renderer.onionSkinFramesBefore
    );
  }

  /** Onion skinning end index @returns {number} */
  function getOnionEndIndex(state) {
    return Math.min(
      state.player.maxIndex, Math.max(
        0, Math.floor(state.player.index) + state.renderer.onionSkinFramesAfter
      )
    );
  }

  /** Onion skinning enabled @returns {boolean} */
  function getOnionSkinActive(state) {
    return state.renderer.onionSkin;
  }

  /** Playback preview enabled @returns {boolean} */
  function getPlaybackPreview(state) {
    return state.renderer.playbackPreview;
  }

  /** Color playback enabled @returns {boolean} */
  function getColorPlayback(state) {
    return state.renderer.colorPlayback;
  }

  /** Renderer view settings @type {ViewSettings} */
  const getViewOptions = Reselect.createStructuredSelector({
    color: state => getPlayerRunning(state) ? getColorPlayback(state) : !getPlaybackPreview(state),
    flag: state => state.renderer.flag != null ? 
      state.renderer.flag : !(getInViewer(state) && getPlayerRunning(state)),
    skeleton: state => state.renderer.skeleton
  });

  /** Track engine (uncommitted) @returns {{engine: Engine}} */
  function getSimulatorTrack(state) {
    return state.simulator.engine;
  }

  /** Track engine (committed) @returns {{engine: Engine}} */
  function getSimulatorCommittedTrack(state) {
    return state.simulator.committedEngine;
  }

  /** Track lines (uncommitted) @returns {{buffer: LineBase[]}} */
  function getSimulatorLines(state) {
    return state.simulator.engine.linesList;
  }

  /** Track lines (committed) @returns {{buffer: LineBase[]}} */
  function getSimulatorCommittedLines(state) {
    return state.simulator.committedEngine.linesList;
  }

  /** Track version @returns {"6.1" | "6.2"} */
  function getSimulatorVersion(state) {
    return state.simulator.engine.isLegacy() ? "6.1" : "6.2";
  }

  /** Track total line count @returns {number} */
  function getSimulatorTrackTotalLineCount(state) {
    return state.simulator.engine.linesList.size();
  }

  /** Whether track is empty @returns {boolean} */
  function getTrackIsEmpty(state) {
    return getSimulatorTrackTotalLineCount(state) === 0;
  }

  /** Whether track has uncommitted changes @returns {boolean} */
  function getTrackIsDirty(state) {
    return state.simulator.committedEngine !== state.simulator.lastSavedEngine;
  }

  /** Track layers buffer @returns {{buffer: Layer[]}} */
  function getTrackLayers(state) {
    return getSimulatorTrack(state).engine.state.layers;
  }

  /** Committed track layers buffer @returns {{buffer: Layer[]}} */
  function getCommittedTrackLayers(state) {
    return getSimulatorCommittedTrack(state).engine.state.layers;
  }

  /** Currently active layer @returns {number} */
  function getTrackActiveLayerId(state) {
    return getSimulatorTrack(state).engine.state.activeLayerId;
  }

  /** Whether the active layer is editable @returns {boolean} */
  function getActiveLayerEditable(state) {
    const id = getTrackActiveLayerId(state);
    const layers = getTrackLayers(state);

    const index = layers.findIndex(layer => layer.id === id);

    if (index >= 0) {
      const layer = layers.get(index);
      return layer.visible && layer.editable;
    }
  }

  /** Whether there are changes available to undo @type {boolean} */
  const getSimulatorHasUndo = Reselect.createSelector(
    state => state.simulator.history,
    state => state.simulator.committedEngine,
    (history, engine) => history.findIndex(e => e === engine) > 0
  );

  /** Whether there are undone changes available to redo @type {boolean} */
  const getSimulatorHasRedo = Reselect.createSelector(
    state => state.simulator.history,
    state => state.simulator.committedEngine,
    (history, engine) => history.findIndex(e => e === engine) < history.length - 1
  );

  /** Track rider buffer @returns {{buffer: Rider[]}} */
  function getRiders(state) {
    return state.simulator.engine.engine.state.riders;
  }

  /** Buffer of committed track riders @returns {{buffer: Rider[]}} */
  function getCommittedRiders(state) {
    return state.simulator.committedEngine.engine.state.riders;
  }

  /** Number of riders @returns {number} */
  function getNumRiders(state) {
    return getRiders(state).length;
  }

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

  /** Whether line color swatch is active @type {boolean} */
  const getLineTypePickerActive = Reselect.createSelector(
    getSelectedTool,
    (selectedTool) => window.Tools[selectedTool].usesSwatches
  );

  /** Whether track lines are locked @returns {boolean} */
  function getTrackLinesLocked(state) {
    return state.trackLinesLocked;
  }

  /** Currently selected line type in color swatch @returns {LineType} */
  function getSelectedLineType(state) {
    return getTrackLinesLocked(state) ? 2 : state.selectedLineType ;
  }

  /** Whether track is a local file @returns {boolean} */
  function getTrackIsLocalFile(state) {
    return state.trackData.localFile;
  }

  /** Track script property @returns {string} */
  function getTrackScript(state) {
    return state.trackData.script;
  }

  /** Notable track properties @type {TrackFragment}*/
  const getTrackProps = Reselect.createStructuredSelector({
    riders: getCommittedRiders,
    version: getSimulatorVersion,
    audio: getLocalAudioProps,
    layers: getTrackLayers,
    script: getTrackScript
  });

  /** Track details @type {TrackDetails} */
  const getTrackDetails = Reselect.createStructuredSelector({
    title: state => state.trackData.label,
    creator: state => state.trackData.creator,
    description: state => state.trackData.description
  });

  /** Track cloud data @type {CloudInfo} */
  const getTrackCloudInfo = Reselect.createSelector(
    state => state.trackData.cloudInfo,
    state => state.trackData.derivedFrom,
    state => state.trackData.saveTime,
    (cloudInfo, derivedFrom, saveTime) => {
      if (derivedFrom) {
        return { saveTime, ...cloudInfo, derivedFrom };
      }
      if (cloudInfo) {
        return { saveTime, ...cloudInfo };
      }
      if (saveTime) {
        return { saveTime };
      }
      return undefined;
    }
  );

  /** Track cloud data with track details @type {{details: TrackDetails, cloudInfo: CloudInfo}} */
  const getTrackDetailsWithCloudInfo = Reselect.createStructuredSelector({
    details: getTrackDetails,
    cloudInfo: getTrackCloudInfo
  });

  /** Track duration @type {{duration: number}} */
  const getTrackDuration = Reselect.createStructuredSelector({
    duration: state => getPlayerMaxIndex(state)
  });

  /** Track data important for autosaving @type {AutosaveData} */
  const getTrackObjectForAutosave = Reselect.createStructuredSelector({
    props: getTrackProps,
    details: getTrackDetails,
    info: getTrackDuration,
    cloudInfo: getTrackCloudInfo,
    localFile: getTrackIsLocalFile
  });

  /**
  * Track data important for saving
  * @param {TrackDetails} trackDetails
  * @returns {Track}
  */
  function getTrackObjectForSaving(state, trackDetails) {
    return ({
      label: trackDetails.title,
      creator: trackDetails.creator,
      description: trackDetails.description,
      duration: getPlayerMaxIndex(state),
      version: getSimulatorVersion(state),
      audio: getLocalAudioProps(state),
      startPosition: state => state.simulator.engine.start.position,
      riders: getCommittedRiders(state),
      lines: getSimulatorLines(state).toJS(),
      layers: getTrackLayers(state).toJS(),
      script: getTrackScript(state)
    });
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
})();