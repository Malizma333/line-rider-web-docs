class Actions {
  static analyticsSaveTrack = () => ({ type: 'ANALYTICS_SAVE_TRACK' })
  static analyticsSaveTrackFile = () => ({ type: 'ANALYTICS_SAVE_TRACK_FILE' })
  static analyticsLoadTrack = () => ({ type: 'ANALYTICS_LOAD_TRACK' })
  static analyticsLoadTrackFile = () => ({ type: 'ANALYTICS_LOAD_TRACK_FILE' })
  static analyticsCopyLink = (linkType) => ({
    type: 'ANALYTICS_COPY_LINK',
    payload: linkType
  })

  static audioLoadFail = (e) => ({
    type: 'LOAD_AUDIO_FAIL',
    payload: e,
    error: true
  })

  static loadAudioPending = () => ({ type: 'LOAD_AUDIO_PENDING' })

  static toggleAudio = () => ({ type: 'TOGGLE_AUDIO' })
  static removeAudio = () => ({ type: 'REMOVE_AUDIO' })

  static setAudioOffset = (offset) => ({
    type: 'SET_AUDIO_OFFSET',
    payload: offset
  })

  static loadAudio = (name, arraybuffer) => ({
    type: 'LOAD_AUDIO',
    payload: { name, arraybuffer }
  })

  static loadLocalAudioAction = (path, name) => ({
    type: 'LOAD_LOCAL_AUDIO',
    payload: {path, name}
  })

  static setAudioVolume = (volume) => ({
    type: 'SET_AUDIO_VOLUME',
    payload: volume
  })

  // TODO: this doesn't actually clear autosave, rename to "disable" maybe
  static clearAutosave = () => ({
    type: 'CLEAR_AUTOSAVE'
  })

  static loadAutosave = () => ({
    type: 'LOAD_AUTOSAVE'
  })

  static setEditorCamera = (position, zoom) => ({
    type: 'SET_EDITOR_CAMERA',
    payload: { position, zoom }
  })
  static setEditorFollowerFocus = (focusIndex) => ({
    type: 'SET_EDITOR_FOLLOWER_FOCUS',
    payload: focusIndex
  })
  static setPlaybackZoom = (zoom) => ({
    type: 'SET_PLAYBACK_ZOOM',
    payload: zoom
  })
  static setPlaybackPan = (pan) => ({
    type: 'SET_PLAYBACK_PAN',
    payload: pan
  })
  static setPlaybackFollowerFocus = (focusList) => ({
    type: 'SET_PLAYBACK_FOLLOWER_FOCUS',
    payload: focusList
  })
  static toggleEditorFollower = () => ({ type: 'TOGGLE_EDITOR_FOLLOWER' })

  static setPlaybackDimensions = (dimensions) => ({
    type: 'SET_PLAYBACK_DIMENSIONS',
    payload: dimensions
  })

  static triggerCommand = (command) => {
    return {
      type: 'TRIGGER_COMMAND',
      payload: command,
      meta: { ignorable: true }
    }
  }

  static beginModifierCommand = (command, e) => {
    return {
      type: 'BEGIN_MODIFIER_COMMAND',
      payload: command,
      meta: { ignorable: true, event: e }
    }
  }

  static endModifierCommand = (command) => {
    return {
      type: 'END_MODIFIER_COMMAND',
      payload: command,
      meta: { ignorable: true }
    }
  }

  static toggleModifierCommand = (command) => {
    return {
      type: 'TOGGLE_MODIFIER_COMMAND',
      payload: command,
      meta: { ignorable: true }
    }
  }

  // TODO: this is unused
  // object where the keys are commands and the values are hotkey bindings
  static setCommandHotkeys = (commandHotkeys) => {
    return {
      type: 'SET_COMMAND_HOTKEYS',
      payload: commandHotkeys
    }
  }

  // fired at startup on Macs to replace 'ctrl' in hotkeys with 'cmd'
  static replaceCtrlKey = (replacementKey) => {
    return {
      type: 'REPLACE_CTRL_KEY',
      payload: replacementKey
    }
  }

  static toggleTrackLinesLocked = () => ({ type: 'TOGGLE_TRACK_LINES_LOCKED' })

  static selectLineType = (lineType) => ({
    type: 'SELECT_LINE_TYPE',
    payload: lineType
  })

  static setTool = (tool) => ({
    type: 'SET_TOOL',
    payload: tool
  })

  static setToolState = (toolId, state) => ({
    type: 'SET_TOOL_STATE',
    payload: state,
    meta: { id: toolId }
  })

  static updateLines = (name, linesToRemove, linesToAdd, initialLoad = false) => ({
    type: 'UPDATE_LINES',
    payload: { linesToRemove, linesToAdd, initialLoad },
    meta: { name }
  })

  static addLine = (line) => this.updateLines('ADD_LINE', null, [line])

  static loadLines = (lines) => this.updateLines('LOAD_LINES', null, lines, true)

  static addLines = (lines) => this.updateLines('ADD_LINES', null, lines)
  static duplicateLines = (lines) => this.updateLines('DUPLICATE_LINES', null, lines)

  static removeLine = (lineId) => this.updateLines('REMOVE_LINE', [lineId], null)

  static removeLines = (lineIds) => this.updateLines('REMOVE_LINES', lineIds, null)

  // for lines that already have IDs
  static setLines = (lines) => this.updateLines('SET_LINES', null, lines)

  static replaceLine = (prevLineId, line) => this.updateLines('REPLACE_LINE', [prevLineId], [line])

  static undoAction = () => ({ type: 'UNDO' })

  static redoAction = () => ({ type: 'REDO' })

  static commitTrackChanges = () => ({ type: 'COMMIT_TRACK_CHANGES' })

  static revertTrackChanges = () => ({ type: 'REVERT_TRACK_CHANGES', meta: { ignorable: true } })

  static addLayer = () => ({ type: 'ADD_LAYER' })
  static removeLayer = (id) => ({
    type: 'REMOVE_LAYER',
    payload: {id}
  })
  static moveLayer = (id, index) => ({
    type: 'MOVE_LAYER',
    payload: {id, index}
  })
  static renameLayer = (id, name) => ({
    type: 'RENAME_LAYER',
    payload: {id, name}
  })
  static setLayerActive = (id) => ({
    type: 'SET_LAYER_ACTIVE',
    payload: {id}
  })
  static setLayerVisible = (id, visible) => ({
    type: 'SET_LAYER_VISIBLE',
    payload: {id, visible}
  })
  static setLayerEditable = (id, editable) => ({
    type: 'SET_LAYER_EDITABLE',
    payload: {id, editable}
  })

  static setRiders = (riders) => ({
    type: 'SET_RIDERS',
    payload: riders
  })

  static triggerHint = (hint, tooltip = null) => ({
    type: 'TRIGGER_HINT',
    payload: {hint, tooltip}
  })

  static showHint = () => ({
    type: 'SHOW_HINT'
  })

  // input actions aren't used by any reducers, but they're used by the tool middleware

  static pointerDown = ({ pointerType, pointerId, x, y }, isPrimary, button) => ({
    type: 'POINTER_DOWN',
    payload: {
      pointerType,
      isPrimary,
      button,
      id: pointerId,
      pos: { x, y }
    }
  })

  static pointerUp = ({ pointerType, pointerId, x, y }, isPrimary, button) => ({
    type: 'POINTER_UP',
    payload: {
      pointerType,
      isPrimary,
      button,
      id: pointerId,
      pos: { x, y }
    }
  })

  static makePointerArg = ({ pointerType, pointerId, x, y, buttons }) =>
    ({ pointerType, pointerId, x, y, buttons })

  static pointerHover = ({ x, y }) => ({
    type: 'POINTER_HOVER',
    payload: {
      pos: { x, y }
    }
  })

  static pointerDrag = ({ pointerType, pointerId, x, y, buttons }, isPrimary) => ({
    type: 'POINTER_DRAG',
    payload: {
      pointerType,
      isPrimary,
      buttons,
      id: pointerId,
      pos: { x, y }
    }
  })

  static makeWheelArg = ({ clientX, clientY, deltaX, deltaY, deltaMode, ctrlKey }) =>
    ({ clientX, clientY, deltaX, deltaY, deltaMode, ctrlKey })

  static wheel = (e, trackpad) => ({
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

  static keyDown = (key) => ({
    type: 'KEY_DOWN',
    payload: key,
    meta: { ignorable: true }
  })

  static keyUp = (key) => ({
    type: 'KEY_UP',
    payload: key,
    meta: { ignorable: true }
  })

  static showNotification = (message, autoHide = true, progressId) => ({
    type: 'notifications/SHOW_NOTIFICATION',
    payload: { message, autoHide, progressId }
  })

  static hideNotification = (message) => ({
    type: 'notifications/HIDE_NOTIFICATION',
    payload: message
  })

  static setPlayerFps = (fps) => ({
    type: 'SET_PLAYER_FPS',
    payload: fps
  })
  static toggleInterpolate = () => ({ type: 'TOGGLE_INTERPOLATE' })
  static setInterpolate = payload => ({ type: 'SET_INTERPOLATE', payload })
  static toggleSlowMotion = () => ({ type: 'TOGGLE_SLOW_MOTION' })
  static incPlayerIndex = () => ({ type: 'INC_PLAYER_INDEX' })
  static decPlayerIndex = () => ({ type: 'DEC_PLAYER_INDEX' })
  static startPlayer = () => ({ type: 'START_PLAYER' })
  static stopPlayer = () => ({ type: 'STOP_PLAYER' })
  static setFlag = () => ({ type: 'SET_FLAG' })

  static setFrameIndex = (index) => ({
    type: 'SET_PLAYER_INDEX',
    payload: index
  })

  static setPlayerMaxIndex = (maxIndex) => ({
    type: 'SET_PLAYER_MAX_INDEX',
    payload: maxIndex
  })

  static setFlagIndex = (flagIndex) => ({
    type: 'SET_FLAG_INDEX',
    payload: flagIndex
  })

  static setPlayerRunning = (running) => ({
    type: 'SET_PLAYER_RUNNING',
    payload: running
  })

  static setPlayerScrubbing = (scrubbing) => ({
    type: 'SET_PLAYER_SCRUBBING',
    payload: scrubbing
  })

  static setPlayerFastForward = (fastForward) => ({
    type: 'SET_PLAYER_FAST_FORWARD',
    payload: fastForward
  })

  static setPlayerRewind = (rewind) => ({
    type: 'SET_PLAYER_REWIND',
    payload: rewind
  })

  static setPlayerStopAtEnd = (stopAtEnd) => ({
    type: 'SET_PLAYER_STOP_AT_END',
    payload: stopAtEnd
  })

  // for mods
  static setPlayerSettings = (settings) => ({
    type: 'SET_PLAYER_SETTINGS',
    payload: settings
  })

  static setViewOption = (viewOption, value) => ({
    type: 'SET_VIEW_OPTION',
    payload: {
      key: viewOption,
      value
    }
  })

  static setRendererFlag = (showFlag) => this.setViewOption('flag', showFlag)
  static toggleColorPlayback = () => this.setViewOption('colorPlayback', null)
  static togglePlaybackPreview = () => this.setViewOption('playbackPreview', null)

  static setPixelRatio = (pixelRatio) => ({
    type: 'SET_PIXEL_RATIO',
    payload: pixelRatio
  })

  // TODO: this is unused
  static setRendererScene = (key, scene) => ({
    type: 'SET_RENDERER_SCENE',
    payload: { key, scene }
  })
  static enableMillions = () => ({
    type: 'SET_MILLIONS',
    payload: true
  })

  static disableMillions = () => ({
    type: 'SET_MILLIONS',
    payload: false
  })

  static setSpriteSheets = (spriteSheets) => ({
    type: 'SET_SPRITE_SHEETS',
    payload: spriteSheets
  })

  static setOnionSkin = (onionSkin) => ({
    type: 'SET_ONION_SKIN',
    payload: onionSkin
  })

  static setSkeleton = (skeleton) => ({
    type: 'SET_SKELETON',
    payload: skeleton
  })

  static setOnionSkinFramesBefore = (framesBefore) => ({
    type: 'SET_ONION_SKIN_FRAMES_BEFORE',
    payload: framesBefore
  })

  static setOnionSkinFramesAfter = (framesAfter) => ({
    type: 'SET_ONION_SKIN_FRAMES_AFTER',
    payload: framesAfter
  })

  static setAutosaveEnabled = (enabled) => ({
    type: 'SET_AUTOSAVE_ENABLED',
    payload: enabled
  })

  static loadSavedTracks = (savedTracks) => ({
    type: 'LOAD_SAVED_TRACKS',
    payload: savedTracks
  })

  static putSavedTrack = (trackData) => ({
    type: 'PUT_SAVED_TRACK',
    payload: trackData
  })

  static removeSavedTrack = (trackData) => ({
    type: 'REMOVE_SAVED_TRACK',
    payload: trackData
  })

  static newTrack = (isV61 = false) => ({
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

  static loadTrackAction = (trackData) => ({
    type: 'LOAD_TRACK',
    payload: {
      viewOnly: trackData["for viewing only, please don't steal tracks"] === true,
      ...trackData
    }
  })

  static saveTrackAction = () => ({ type: 'SAVE_TRACK' })

  static setCloudInfo = (cloudInfo) => ({
    type: 'trackData/SET_CLOUD_INFO',
    payload: cloudInfo
  })

  static setTrackDetails = (title, creator, description, cloudInfo = null, derivedFrom = null) => ({
    type: 'trackData/SET_TRACK_DETAILS',
    payload: {
      title,
      creator,
      description,
      cloudInfo,
      derivedFrom
    }
  })

  static setLocalFile = (saveToFile) => ({
    type: 'trackData/SET_LOCAL_FILE',
    payload: saveToFile
  })

  static setTrackScript = (script) => ({
    type: 'trackData/SET_TRACK_SCRIPT',
    payload: script
  })

  static resize = ({ width, height }) => ({
    type: 'RESIZE',
    payload: { width, height }
  })

  static setControlsActive = (active) => ({
    type: 'SET_CONTROLS_ACTIVE',
    payload: active
  })

  static toggleControlsActive = () => ({
    type: 'TOGGLE_CONTROLS_ACTIVE'
  })

  static ping = (pointerType) => ({ type: 'PING', payload: pointerType })

  static editCopy = () => ({ type: 'EDIT_COPY' })

  static loadSettings = (settings) => ({ type: 'LOAD_SETTINGS', payload: settings})
  static setSetting = (key, value) => ({ type: 'SET_SETTING', payload: {key, value}})
  static toggleSetting = (key) => ({ type: 'TOGGLE_SETTING', payload: {key} })
}