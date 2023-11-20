class Actions {
  analyticsSaveTrack = () => ({ type: 'ANALYTICS_SAVE_TRACK' })
  analyticsSaveTrackFile = () => ({ type: 'ANALYTICS_SAVE_TRACK_FILE' })
  analyticsLoadTrack = () => ({ type: 'ANALYTICS_LOAD_TRACK' })
  analyticsLoadTrackFile = () => ({ type: 'ANALYTICS_LOAD_TRACK_FILE' })
  analyticsCopyLink = (linkType) => ({
    type: 'ANALYTICS_COPY_LINK',
    payload: linkType
  })

  audioLoadFail = (e) => ({
    type: 'LOAD_AUDIO_FAIL',
    payload: e,
    error: true
  })

  loadAudioPending = () => ({ type: 'LOAD_AUDIO_PENDING' })

  toggleAudio = () => ({ type: 'TOGGLE_AUDIO' })
  removeAudio = () => ({ type: 'REMOVE_AUDIO' })

  setAudioOffset = (offset) => ({
    type: 'SET_AUDIO_OFFSET',
    payload: offset
  })

  loadAudio = (name, arraybuffer) => ({
    type: 'LOAD_AUDIO',
    payload: { name, arraybuffer }
  })

  loadLocalAudioAction = (path, name) => ({
    type: 'LOAD_LOCAL_AUDIO',
    payload: {path, name}
  })

  setAudioVolume = (volume) => ({
    type: 'SET_AUDIO_VOLUME',
    payload: volume
  })

  // TODO: this doesn't actually clear autosave, rename to "disable" maybe
  clearAutosave = () => ({
    type: 'CLEAR_AUTOSAVE'
  })

  loadAutosave = () => ({
    type: 'LOAD_AUTOSAVE'
  })

  setEditorCamera = (position, zoom) => ({
    type: 'SET_EDITOR_CAMERA',
    payload: { position, zoom }
  })
  setEditorFollowerFocus = (focusIndex) => ({
    type: 'SET_EDITOR_FOLLOWER_FOCUS',
    payload: focusIndex
  })
  setPlaybackZoom = (zoom) => ({
    type: 'SET_PLAYBACK_ZOOM',
    payload: zoom
  })
  setPlaybackPan = (pan) => ({
    type: 'SET_PLAYBACK_PAN',
    payload: pan
  })
  setPlaybackFollowerFocus = (focusList) => ({
    type: 'SET_PLAYBACK_FOLLOWER_FOCUS',
    payload: focusList
  })
  toggleEditorFollower = () => ({ type: 'TOGGLE_EDITOR_FOLLOWER' })

  setPlaybackDimensions = (dimensions) => ({
    type: 'SET_PLAYBACK_DIMENSIONS',
    payload: dimensions
  })

  triggerCommand = (command) => {
    return {
      type: 'TRIGGER_COMMAND',
      payload: command,
      meta: { ignorable: true }
    }
  }

  beginModifierCommand = (command, e) => {
    return {
      type: 'BEGIN_MODIFIER_COMMAND',
      payload: command,
      meta: { ignorable: true, event: e }
    }
  }

  endModifierCommand = (command) => {
    return {
      type: 'END_MODIFIER_COMMAND',
      payload: command,
      meta: { ignorable: true }
    }
  }

  toggleModifierCommand = (command) => {
    return {
      type: 'TOGGLE_MODIFIER_COMMAND',
      payload: command,
      meta: { ignorable: true }
    }
  }

  // TODO: this is unused
  // object where the keys are commands and the values are hotkey bindings
  setCommandHotkeys = (commandHotkeys) => {
    return {
      type: 'SET_COMMAND_HOTKEYS',
      payload: commandHotkeys
    }
  }

  // fired at startup on Macs to replace 'ctrl' in hotkeys with 'cmd'
  replaceCtrlKey = (replacementKey) => {
    return {
      type: 'REPLACE_CTRL_KEY',
      payload: replacementKey
    }
  }

  toggleTrackLinesLocked = () => ({ type: 'TOGGLE_TRACK_LINES_LOCKED' })

  selectLineType = (lineType) => ({
    type: 'SELECT_LINE_TYPE',
    payload: lineType
  })

  setTool = (tool) => ({
    type: 'SET_TOOL',
    payload: tool
  })

  setToolState = (toolId, state) => ({
    type: 'SET_TOOL_STATE',
    payload: state,
    meta: { id: toolId }
  })

  updateLines = (name, linesToRemove, linesToAdd, initialLoad = false) => ({
    type: 'UPDATE_LINES',
    payload: { linesToRemove, linesToAdd, initialLoad },
    meta: { name }
  })

  addLine = (line) => this.updateLines('ADD_LINE', null, [line])

  loadLines = (lines) => this.updateLines('LOAD_LINES', null, lines, true)

  addLines = (lines) => this.updateLines('ADD_LINES', null, lines)
  duplicateLines = (lines) => this.updateLines('DUPLICATE_LINES', null, lines)

  removeLine = (lineId) => this.updateLines('REMOVE_LINE', [lineId], null)

  removeLines = (lineIds) => this.updateLines('REMOVE_LINES', lineIds, null)

  // for lines that already have IDs
  setLines = (lines) => this.updateLines('SET_LINES', null, lines)

  replaceLine = (prevLineId, line) => this.updateLines('REPLACE_LINE', [prevLineId], [line])

  undoAction = () => ({ type: 'UNDO' })

  redoAction = () => ({ type: 'REDO' })

  commitTrackChanges = () => ({ type: 'COMMIT_TRACK_CHANGES' })

  revertTrackChanges = () => ({ type: 'REVERT_TRACK_CHANGES', meta: { ignorable: true } })

  addLayer = () => ({ type: 'ADD_LAYER' })
  removeLayer = (id) => ({
    type: 'REMOVE_LAYER',
    payload: {id}
  })
  moveLayer = (id, index) => ({
    type: 'MOVE_LAYER',
    payload: {id, index}
  })
  renameLayer = (id, name) => ({
    type: 'RENAME_LAYER',
    payload: {id, name}
  })
  setLayerActive = (id) => ({
    type: 'SET_LAYER_ACTIVE',
    payload: {id}
  })
  setLayerVisible = (id, visible) => ({
    type: 'SET_LAYER_VISIBLE',
    payload: {id, visible}
  })
  setLayerEditable = (id, editable) => ({
    type: 'SET_LAYER_EDITABLE',
    payload: {id, editable}
  })

  setRiders = (riders) => ({
    type: 'SET_RIDERS',
    payload: riders
  })

  triggerHint = (hint, tooltip = null) => ({
    type: 'TRIGGER_HINT',
    payload: {hint, tooltip}
  })

  showHint = () => ({
    type: 'SHOW_HINT'
  })

  // input actions aren't used by any reducers, but they're used by the tool middleware

  pointerDown = ({ pointerType, pointerId, x, y }, isPrimary, button) => ({
    type: 'POINTER_DOWN',
    payload: {
      pointerType,
      isPrimary,
      button,
      id: pointerId,
      pos: { x, y }
    }
  })

  pointerUp = ({ pointerType, pointerId, x, y }, isPrimary, button) => ({
    type: 'POINTER_UP',
    payload: {
      pointerType,
      isPrimary,
      button,
      id: pointerId,
      pos: { x, y }
    }
  })

  makePointerArg = ({ pointerType, pointerId, x, y, buttons }) =>
    ({ pointerType, pointerId, x, y, buttons })

  pointerHover = ({ x, y }) => ({
    type: 'POINTER_HOVER',
    payload: {
      pos: { x, y }
    }
  })

  pointerDrag = ({ pointerType, pointerId, x, y, buttons }, isPrimary) => ({
    type: 'POINTER_DRAG',
    payload: {
      pointerType,
      isPrimary,
      buttons,
      id: pointerId,
      pos: { x, y }
    }
  })

  makeWheelArg = ({ clientX, clientY, deltaX, deltaY, deltaMode, ctrlKey }) =>
    ({ clientX, clientY, deltaX, deltaY, deltaMode, ctrlKey })

  wheel = (e, trackpad) => ({
    type: 'WHEEL',
    payload: {
      pos: {
        x: e.clientX,
        y: e.clientY
      },
      delta: {
        x: e.deltaX,
        // normalize conventional scroll wheels
        y: e.deltaY * (trackpad ? 1 : e.deltaMode === 0 ? 0.25 : e.deltaMode === 1 ? 20 : 1)
      },
      pinch: e.ctrlKey // chrome pinch-to-zoom sets ctrlKey
    }
  })

  keyDown = (key) => ({
    type: 'KEY_DOWN',
    payload: key,
    meta: { ignorable: true }
  })

  keyUp = (key) => ({
    type: 'KEY_UP',
    payload: key,
    meta: { ignorable: true }
  })

  showNotification = (message, autoHide = true, progressId) => ({
    type: 'notifications/SHOW_NOTIFICATION',
    payload: { message, autoHide, progressId }
  })

  hideNotification = (message) => ({
    type: 'notifications/HIDE_NOTIFICATION',
    payload: message
  })

  setPlayerFps = (fps) => ({
    type: 'SET_PLAYER_FPS',
    payload: fps
  })
  toggleInterpolate = () => ({ type: 'TOGGLE_INTERPOLATE' })
  setInterpolate = payload => ({ type: 'SET_INTERPOLATE', payload })
  toggleSlowMotion = () => ({ type: 'TOGGLE_SLOW_MOTION' })
  incPlayerIndex = () => ({ type: 'INC_PLAYER_INDEX' })
  decPlayerIndex = () => ({ type: 'DEC_PLAYER_INDEX' })
  startPlayer = () => ({ type: 'START_PLAYER' })
  stopPlayer = () => ({ type: 'STOP_PLAYER' })
  setFlag = () => ({ type: 'SET_FLAG' })

  setFrameIndex = (index) => ({
    type: 'SET_PLAYER_INDEX',
    payload: index
  })

  setPlayerMaxIndex = (maxIndex) => ({
    type: 'SET_PLAYER_MAX_INDEX',
    payload: maxIndex
  })

  setFlagIndex = (flagIndex) => ({
    type: 'SET_FLAG_INDEX',
    payload: flagIndex
  })

  setPlayerRunning = (running) => ({
    type: 'SET_PLAYER_RUNNING',
    payload: running
  })

  setPlayerScrubbing = (scrubbing) => ({
    type: 'SET_PLAYER_SCRUBBING',
    payload: scrubbing
  })

  setPlayerFastForward = (fastForward) => ({
    type: 'SET_PLAYER_FAST_FORWARD',
    payload: fastForward
  })

  setPlayerRewind = (rewind) => ({
    type: 'SET_PLAYER_REWIND',
    payload: rewind
  })

  setPlayerStopAtEnd = (stopAtEnd) => ({
    type: 'SET_PLAYER_STOP_AT_END',
    payload: stopAtEnd
  })

  // for mods
  setPlayerSettings = (settings) => ({
    type: 'SET_PLAYER_SETTINGS',
    payload: settings
  })

  setViewOption = (viewOption, value) => ({
    type: 'SET_VIEW_OPTION',
    payload: {
      key: viewOption,
      value
    }
  })

  setRendererFlag = (showFlag) => this.setViewOption('flag', showFlag)
  toggleColorPlayback = () => this.setViewOption('colorPlayback', null)
  togglePlaybackPreview = () => this.setViewOption('playbackPreview', null)

  setPixelRatio = (pixelRatio) => ({
    type: 'SET_PIXEL_RATIO',
    payload: pixelRatio
  })

  // TODO: this is unused
  setRendererScene = (key, scene) => ({
    type: 'SET_RENDERER_SCENE',
    payload: { key, scene }
  })
  enableMillions = () => ({
    type: 'SET_MILLIONS',
    payload: true
  })

  disableMillions = () => ({
    type: 'SET_MILLIONS',
    payload: false
  })

  setSpriteSheets = (spriteSheets) => ({
    type: 'SET_SPRITE_SHEETS',
    payload: spriteSheets
  })

  setOnionSkin = (onionSkin) => ({
    type: 'SET_ONION_SKIN',
    payload: onionSkin
  })

  setSkeleton = (skeleton) => ({
    type: 'SET_SKELETON',
    payload: skeleton
  })

  setOnionSkinFramesBefore = (framesBefore) => ({
    type: 'SET_ONION_SKIN_FRAMES_BEFORE',
    payload: framesBefore
  })

  setOnionSkinFramesAfter = (framesAfter) => ({
    type: 'SET_ONION_SKIN_FRAMES_AFTER',
    payload: framesAfter
  })

  setAutosaveEnabled = (enabled) => ({
    type: 'SET_AUTOSAVE_ENABLED',
    payload: enabled
  })

  loadSavedTracks = (savedTracks) => ({
    type: 'LOAD_SAVED_TRACKS',
    payload: savedTracks
  })

  putSavedTrack = (trackData) => ({
    type: 'PUT_SAVED_TRACK',
    payload: trackData
  })

  removeSavedTrack = (trackData) => ({
    type: 'REMOVE_SAVED_TRACK',
    payload: trackData
  })

  newTrack = (isV61 = false) => ({
    type: 'NEW_TRACK',
    payload: {
      startPosition: { x: 0, y: 0 },
      version: isV61 ? '6.1' : '6.2',
      label: '',
      creator: '',
      description: '',
      dirty: false,
      saveTime: null,
      viewOnly: false,
      derivedFrom: null
    }
  })

  loadTrackAction = (trackData) => ({
    type: 'LOAD_TRACK',
    payload: {
      viewOnly: trackData["for viewing only, please don't steal tracks"] === true,
      ...trackData
    }
  })

  saveTrackAction = () => ({ type: 'SAVE_TRACK' })

  setCloudInfo = (cloudInfo) => ({
    type: 'trackData/SET_CLOUD_INFO',
    payload: cloudInfo
  })

  setTrackDetails = (title, creator, description, cloudInfo = null, derivedFrom = null) => ({
    type: 'trackData/SET_TRACK_DETAILS',
    payload: {
      title,
      creator,
      description,
      cloudInfo,
      derivedFrom
    }
  })

  setLocalFile = (saveToFile) => ({
    type: 'trackData/SET_LOCAL_FILE',
    payload: saveToFile
  })

  setTrackScript = (script) => ({
    type: 'trackData/SET_TRACK_SCRIPT',
    payload: script
  })

  resize = ({ width, height }) => ({
    type: 'RESIZE',
    payload: { width, height }
  })

  setControlsActive = (active) => ({
    type: 'SET_CONTROLS_ACTIVE',
    payload: active
  })

  toggleControlsActive = () => ({
    type: 'TOGGLE_CONTROLS_ACTIVE'
  })

  ping = (pointerType) => ({ type: 'PING', payload: pointerType })

  editCopy = () => ({ type: 'EDIT_COPY' })

  loadSettings = (settings) => ({ type: 'LOAD_SETTINGS', payload: settings})
  setSetting = (key, value) => ({ type: 'SET_SETTING', payload: {key, value}})
  toggleSetting = (key) => ({ type: 'TOGGLE_SETTING', payload: {key} })
}