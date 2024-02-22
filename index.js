const Selectors = (function() {
  /** Editor zoom @returns {number} */
  function getEditorZoom(state) {
    return state.camera.editorZoom;
  }

  /** Position in editor @returns {V2} */
  function getEditorPosition(state) {
    return state.camera.editorPosition;
  }

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