!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Reselect={})}(this,(function(e){"use strict";var t="NOT_FOUND";var n=function(e,t){return e===t};function r(e,r){var u,o,i="object"==typeof r?r:{equalityCheck:r},c=i.equalityCheck,f=i.maxSize,a=void 0===f?1:f,l=i.resultEqualityCheck,p=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,u=0;r>u;u++)if(!e(t[u],n[u]))return!1;return!0}}(void 0===c?n:c),s=1===a?(u=p,{get:function(e){return o&&u(o.key,e)?o.value:t},put:function(e,t){o={key:e,value:t}},getEntries:function(){return o?[o]:[]},clear:function(){o=void 0}}):function(e,n){var r=[];function u(e){var u=r.findIndex((function(t){return n(e,t.key)}));if(u>-1){var o=r[u];return u>0&&(r.splice(u,1),r.unshift(o)),o.value}return t}return{get:u,put:function(n,o){u(n)===t&&(r.unshift({key:n,value:o}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(a,p);function v(){var n=s.get(arguments);if(n===t){if(n=e.apply(null,arguments),l){var r=s.getEntries(),u=r.find((function(e){return l(e.value,n)}));u&&(n=u.value)}s.put(arguments,n)}return n}return v.clearCache=function(){return s.clear()},v}function u(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return"function"==typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function o(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=Array(t),o=0;t>o;o++)r[o]=arguments[o];var i,c=0,f={memoizeOptions:void 0},a=r.pop();if("object"==typeof a&&(f=a,a=r.pop()),"function"!=typeof a)throw Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=f,p=l.memoizeOptions,s=void 0===p?n:p,v=Array.isArray(s)?s:[s],y=u(r),d=e.apply(void 0,[function(){return c++,a.apply(null,arguments)}].concat(v)),h=e((function(){for(var e=[],t=y.length,n=0;t>n;n++)e.push(y[n].apply(null,arguments));return i=d.apply(null,e)}));return Object.assign(h,{resultFunc:a,memoizedResultFunc:d,dependencies:y,lastResult:function(){return i},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),h};return o}var i=o(r);e.createSelector=i,e.createSelectorCreator=o,e.createStructuredSelector=function(e,t){if(void 0===t&&(t=i),"object"!=typeof e)throw Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e),r=t(n.map((function(t){return e[t]})),(function(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return t.reduce((function(e,t,r){return e[n[r]]=t,e}),{})}));return r},e.defaultEqualityCheck=n,e.defaultMemoize=r,Object.defineProperty(e,"__esModule",{value:!0})}));

const Actions = (function() {
  const analyticsSaveTrack = () => ({ type: 'ANALYTICS_SAVE_TRACK' })
  const analyticsSaveTrackFile = () => ({ type: 'ANALYTICS_SAVE_TRACK_FILE' })
  const analyticsLoadTrack = () => ({ type: 'ANALYTICS_LOAD_TRACK' })
  const analyticsLoadTrackFile = () => ({ type: 'ANALYTICS_LOAD_TRACK_FILE' })
  const analyticsCopyLink = (linkType) => ({
    type: 'ANALYTICS_COPY_LINK',
    payload: linkType
  })

  const audioLoadFail = (e) => ({
    type: 'LOAD_AUDIO_FAIL',
    payload: e,
    error: true
  })

  const loadAudioPending = () => ({ type: 'LOAD_AUDIO_PENDING' })

  const toggleAudio = () => ({ type: 'TOGGLE_AUDIO' })
  const removeAudio = () => ({ type: 'REMOVE_AUDIO' })

  const setAudioOffset = (offset) => ({
    type: 'SET_AUDIO_OFFSET',
    payload: offset
  })

  const loadAudio = (name, arraybuffer) => ({
    type: 'LOAD_AUDIO',
    payload: { name, arraybuffer }
  })

  const loadLocalAudioAction = (path, name) => ({
    type: 'LOAD_LOCAL_AUDIO',
    payload: {path, name}
  })

  const setAudioVolume = (volume) => ({
    type: 'SET_AUDIO_VOLUME',
    payload: volume
  })

  // TODO: this doesn't actually clear autosave, rename to "disable" maybe
  const clearAutosave = () => ({
    type: 'CLEAR_AUTOSAVE'
  })

  const loadAutosave = () => ({
    type: 'LOAD_AUTOSAVE'
  })

  const setEditorCamera = (position, zoom) => ({
    type: 'SET_EDITOR_CAMERA',
    payload: { position, zoom }
  })
  const setEditorFollowerFocus = (focusIndex) => ({
    type: 'SET_EDITOR_FOLLOWER_FOCUS',
    payload: focusIndex
  })
  const setPlaybackZoom = (zoom) => ({
    type: 'SET_PLAYBACK_ZOOM',
    payload: zoom
  })
  const setPlaybackPan = (pan) => ({
    type: 'SET_PLAYBACK_PAN',
    payload: pan
  })
  const setPlaybackFollowerFocus = (focusList) => ({
    type: 'SET_PLAYBACK_FOLLOWER_FOCUS',
    payload: focusList
  })
  const toggleEditorFollower = () => ({ type: 'TOGGLE_EDITOR_FOLLOWER' })

  const setPlaybackDimensions = (dimensions) => ({
    type: 'SET_PLAYBACK_DIMENSIONS',
    payload: dimensions
  })

  const triggerCommand = (command) => {
    return {
      type: 'TRIGGER_COMMAND',
      payload: command,
      meta: { ignorable: true }
    }
  }

  const beginModifierCommand = (command, e) => {
    return {
      type: 'BEGIN_MODIFIER_COMMAND',
      payload: command,
      meta: { ignorable: true, event: e }
    }
  }

  const endModifierCommand = (command) => {
    return {
      type: 'END_MODIFIER_COMMAND',
      payload: command,
      meta: { ignorable: true }
    }
  }

  const toggleModifierCommand = (command) => {
    return {
      type: 'TOGGLE_MODIFIER_COMMAND',
      payload: command,
      meta: { ignorable: true }
    }
  }

  // TODO: this is unused
  // object where the keys are commands and the values are hotkey bindings
  const setCommandHotkeys = (commandHotkeys) => {
    return {
      type: 'SET_COMMAND_HOTKEYS',
      payload: commandHotkeys
    }
  }

  // fired at startup on Macs to replace 'ctrl' in hotkeys with 'cmd'
  const replaceCtrlKey = (replacementKey) => {
    return {
      type: 'REPLACE_CTRL_KEY',
      payload: replacementKey
    }
  }

  const toggleTrackLinesLocked = () => ({ type: 'TOGGLE_TRACK_LINES_LOCKED' })

  const selectLineType = (lineType) => ({
    type: 'SELECT_LINE_TYPE',
    payload: lineType
  })

  const setTool = (tool) => ({
    type: 'SET_TOOL',
    payload: tool
  })

  const setToolState = (toolId, state) => ({
    type: 'SET_TOOL_STATE',
    payload: state,
    meta: { id: toolId }
  })

  const updateLines = (name, linesToRemove, linesToAdd, initialLoad = false) => ({
    type: 'UPDATE_LINES',
    payload: { linesToRemove, linesToAdd, initialLoad },
    meta: { name }
  })

  const addLine = (line) => this.updateLines('ADD_LINE', null, [line])

  const loadLines = (lines) => this.updateLines('LOAD_LINES', null, lines, true)

  const addLines = (lines) => this.updateLines('ADD_LINES', null, lines)
  const duplicateLines = (lines) => this.updateLines('DUPLICATE_LINES', null, lines)

  const removeLine = (lineId) => this.updateLines('REMOVE_LINE', [lineId], null)

  const removeLines = (lineIds) => this.updateLines('REMOVE_LINES', lineIds, null)

  // for lines that already have IDs
  const setLines = (lines) => this.updateLines('SET_LINES', null, lines)

  const replaceLine = (prevLineId, line) => this.updateLines('REPLACE_LINE', [prevLineId], [line])

  const undoAction = () => ({ type: 'UNDO' })

  const redoAction = () => ({ type: 'REDO' })

  const commitTrackChanges = () => ({ type: 'COMMIT_TRACK_CHANGES' })

  const revertTrackChanges = () => ({ type: 'REVERT_TRACK_CHANGES', meta: { ignorable: true } })

  const addLayer = () => ({ type: 'ADD_LAYER' })
  const removeLayer = (id) => ({
    type: 'REMOVE_LAYER',
    payload: {id}
  })
  const moveLayer = (id, index) => ({
    type: 'MOVE_LAYER',
    payload: {id, index}
  })
  const renameLayer = (id, name) => ({
    type: 'RENAME_LAYER',
    payload: {id, name}
  })
  const setLayerActive = (id) => ({
    type: 'SET_LAYER_ACTIVE',
    payload: {id}
  })
  const setLayerVisible = (id, visible) => ({
    type: 'SET_LAYER_VISIBLE',
    payload: {id, visible}
  })
  const setLayerEditable = (id, editable) => ({
    type: 'SET_LAYER_EDITABLE',
    payload: {id, editable}
  })

  const setRiders = (riders) => ({
    type: 'SET_RIDERS',
    payload: riders
  })

  const triggerHint = (hint, tooltip = null) => ({
    type: 'TRIGGER_HINT',
    payload: {hint, tooltip}
  })

  const showHint = () => ({
    type: 'SHOW_HINT'
  })

  // input actions aren't used by any reducers, but they're used by the tool middleware

  const pointerDown = ({ pointerType, pointerId, x, y }, isPrimary, button) => ({
    type: 'POINTER_DOWN',
    payload: {
      pointerType,
      isPrimary,
      button,
      id: pointerId,
      pos: { x, y }
    }
  })

  const pointerUp = ({ pointerType, pointerId, x, y }, isPrimary, button) => ({
    type: 'POINTER_UP',
    payload: {
      pointerType,
      isPrimary,
      button,
      id: pointerId,
      pos: { x, y }
    }
  })

  const makePointerArg = ({ pointerType, pointerId, x, y, buttons }) =>
    ({ pointerType, pointerId, x, y, buttons })

  const pointerHover = ({ x, y }) => ({
    type: 'POINTER_HOVER',
    payload: {
      pos: { x, y }
    }
  })

  const pointerDrag = ({ pointerType, pointerId, x, y, buttons }, isPrimary) => ({
    type: 'POINTER_DRAG',
    payload: {
      pointerType,
      isPrimary,
      buttons,
      id: pointerId,
      pos: { x, y }
    }
  })

  const makeWheelArg = ({ clientX, clientY, deltaX, deltaY, deltaMode, ctrlKey }) =>
    ({ clientX, clientY, deltaX, deltaY, deltaMode, ctrlKey })

  const wheel = (e, trackpad) => ({
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

  const keyDown = (key) => ({
    type: 'KEY_DOWN',
    payload: key,
    meta: { ignorable: true }
  })

  const keyUp = (key) => ({
    type: 'KEY_UP',
    payload: key,
    meta: { ignorable: true }
  })

  const showNotification = (message, autoHide = true, progressId) => ({
    type: 'notifications/SHOW_NOTIFICATION',
    payload: { message, autoHide, progressId }
  })

  const hideNotification = (message) => ({
    type: 'notifications/HIDE_NOTIFICATION',
    payload: message
  })

  const setPlayerFps = (fps) => ({
    type: 'SET_PLAYER_FPS',
    payload: fps
  })
  const toggleInterpolate = () => ({ type: 'TOGGLE_INTERPOLATE' })
  const setInterpolate = payload => ({ type: 'SET_INTERPOLATE', payload })
  const toggleSlowMotion = () => ({ type: 'TOGGLE_SLOW_MOTION' })
  const incPlayerIndex = () => ({ type: 'INC_PLAYER_INDEX' })
  const decPlayerIndex = () => ({ type: 'DEC_PLAYER_INDEX' })
  const startPlayer = () => ({ type: 'START_PLAYER' })
  const stopPlayer = () => ({ type: 'STOP_PLAYER' })
  const setFlag = () => ({ type: 'SET_FLAG' })

  const setFrameIndex = (index) => ({
    type: 'SET_PLAYER_INDEX',
    payload: index
  })

  const setPlayerMaxIndex = (maxIndex) => ({
    type: 'SET_PLAYER_MAX_INDEX',
    payload: maxIndex
  })

  const setFlagIndex = (flagIndex) => ({
    type: 'SET_FLAG_INDEX',
    payload: flagIndex
  })

  const setPlayerRunning = (running) => ({
    type: 'SET_PLAYER_RUNNING',
    payload: running
  })

  const setPlayerScrubbing = (scrubbing) => ({
    type: 'SET_PLAYER_SCRUBBING',
    payload: scrubbing
  })

  const setPlayerFastForward = (fastForward) => ({
    type: 'SET_PLAYER_FAST_FORWARD',
    payload: fastForward
  })

  const setPlayerRewind = (rewind) => ({
    type: 'SET_PLAYER_REWIND',
    payload: rewind
  })

  const setPlayerStopAtEnd = (stopAtEnd) => ({
    type: 'SET_PLAYER_STOP_AT_END',
    payload: stopAtEnd
  })

  // for mods
  const setPlayerSettings = (settings) => ({
    type: 'SET_PLAYER_SETTINGS',
    payload: settings
  })

  const setViewOption = (viewOption, value) => ({
    type: 'SET_VIEW_OPTION',
    payload: {
      key: viewOption,
      value
    }
  })

  const setRendererFlag = (showFlag) => this.setViewOption('flag', showFlag)
  const toggleColorPlayback = () => this.setViewOption('colorPlayback', null)
  const togglePlaybackPreview = () => this.setViewOption('playbackPreview', null)

  const setPixelRatio = (pixelRatio) => ({
    type: 'SET_PIXEL_RATIO',
    payload: pixelRatio
  })

  // TODO: this is unused
  const setRendererScene = (key, scene) => ({
    type: 'SET_RENDERER_SCENE',
    payload: { key, scene }
  })
  const enableMillions = () => ({
    type: 'SET_MILLIONS',
    payload: true
  })

  const disableMillions = () => ({
    type: 'SET_MILLIONS',
    payload: false
  })

  const setSpriteSheets = (spriteSheets) => ({
    type: 'SET_SPRITE_SHEETS',
    payload: spriteSheets
  })

  const setOnionSkin = (onionSkin) => ({
    type: 'SET_ONION_SKIN',
    payload: onionSkin
  })

  const setSkeleton = (skeleton) => ({
    type: 'SET_SKELETON',
    payload: skeleton
  })

  const setOnionSkinFramesBefore = (framesBefore) => ({
    type: 'SET_ONION_SKIN_FRAMES_BEFORE',
    payload: framesBefore
  })

  const setOnionSkinFramesAfter = (framesAfter) => ({
    type: 'SET_ONION_SKIN_FRAMES_AFTER',
    payload: framesAfter
  })

  const setAutosaveEnabled = (enabled) => ({
    type: 'SET_AUTOSAVE_ENABLED',
    payload: enabled
  })

  const loadSavedTracks = (savedTracks) => ({
    type: 'LOAD_SAVED_TRACKS',
    payload: savedTracks
  })

  const putSavedTrack = (trackData) => ({
    type: 'PUT_SAVED_TRACK',
    payload: trackData
  })

  const removeSavedTrack = (trackData) => ({
    type: 'REMOVE_SAVED_TRACK',
    payload: trackData
  })

  const newTrack = (isV61 = false) => ({
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

  const loadTrackAction = (trackData) => ({
    type: 'LOAD_TRACK',
    payload: {
      viewOnly: trackData["for viewing only, please don't steal tracks"] === true,
      ...trackData
    }
  })

  const saveTrackAction = () => ({ type: 'SAVE_TRACK' })

  const setCloudInfo = (cloudInfo) => ({
    type: 'trackData/SET_CLOUD_INFO',
    payload: cloudInfo
  })

  const setTrackDetails = (title, creator, description, cloudInfo = null, derivedFrom = null) => ({
    type: 'trackData/SET_TRACK_DETAILS',
    payload: {
      title,
      creator,
      description,
      cloudInfo,
      derivedFrom
    }
  })

  const setLocalFile = (saveToFile) => ({
    type: 'trackData/SET_LOCAL_FILE',
    payload: saveToFile
  })

  const setTrackScript = (script) => ({
    type: 'trackData/SET_TRACK_SCRIPT',
    payload: script
  })

  const resize = ({ width, height }) => ({
    type: 'RESIZE',
    payload: { width, height }
  })

  const setControlsActive = (active) => ({
    type: 'SET_CONTROLS_ACTIVE',
    payload: active
  })

  const toggleControlsActive = () => ({
    type: 'TOGGLE_CONTROLS_ACTIVE'
  })

  const ping = (pointerType) => ({ type: 'PING', payload: pointerType })

  const editCopy = () => ({ type: 'EDIT_COPY' })

  const loadSettings = (settings) => ({ type: 'LOAD_SETTINGS', payload: settings})
  const setSetting = (key, value) => ({ type: 'SET_SETTING', payload: {key, value}})
  const toggleSetting = (key) => ({ type: 'TOGGLE_SETTING', payload: {key} })
  return {addLayer, addLine, addLines, analyticsCopyLink, analyticsLoadTrack, analyticsLoadTrackFile, analyticsSaveTrack, analyticsSaveTrackFile, audioLoadFail, beginModifierCommand, clearAutosave, commitTrackChanges, decPlayerIndex, disableMillions, duplicateLines, editCopy, enableMillions, endModifierCommand, hideNotification, incPlayerIndex, keyDown, keyUp, loadAudio, loadAudioPending, loadAutosave, loadLines, loadLocalAudioAction, loadSavedTracks, loadSettings, loadTrackAction, makePointerArg, makeWheelArg, moveLayer, newTrack, ping, pointerDown, pointerDrag, pointerHover, pointerUp, putSavedTrack, redoAction, removeAudio, removeLayer, removeLine, removeLines, removeSavedTrack, renameLayer, replaceCtrlKey, replaceLine, resize, revertTrackChanges, saveTrackAction, selectLineType, setAudioOffset, setAudioVolume, setAutosaveEnabled, setCloudInfo, setCommandHotkeys, setControlsActive, setEditorCamera, setEditorFollowerFocus, setFlag, setFlagIndex, setFrameIndex, setInterpolate, setLayerActive, setLayerEditable, setLayerVisible, setLines, setLocalFile, setOnionSkin, setOnionSkinFramesAfter, setOnionSkinFramesBefore, setPixelRatio, setPlaybackDimensions, setPlaybackFollowerFocus, setPlaybackPan, setPlaybackZoom, setPlayerFastForward, setPlayerFps, setPlayerMaxIndex, setPlayerRewind, setPlayerRunning, setPlayerRunning, setPlayerScrubbing, setPlayerSettings, setPlayerStopAtEnd, setRendererFlag, setRendererScene, setRiders, setSetting, setSkeleton, setSpriteSheets, setTool, setToolState, setTrackDetails, setTrackScript, setViewOption, showHint, showNotification, startPlayer, stopPlayer, toggleAudio, toggleColorPlayback, toggleControlsActive, toggleEditorFollower, toggleInterpolate, toggleModifierCommand, togglePlaybackPreview, toggleSetting, toggleSlowMotion, toggleTrackLinesLocked, triggerCommand, triggerHint, undoAction, updateLines, wheel}
})()

const Selectors = (function() {
  const getAudioEnabled = state => state.audio.enabled
  const getAudioOffset = state => state.audio.offset

  const isAudioFileLoading = state => state.audioFileLoader.loadingFile

  const getAudioProps = state => state.audio
  const getAudioFileLoading = state => state.audioFileLoader

  const getLocalAudioProps = state => {
    const {name, path, offset} = state.audio
    if (path) {
      return {name, path, offset}
    }
    return null
  }

  const getEditorZoom = state => state.camera.editorZoom
  const getEditorPosition = state => state.camera.editorPosition

  const getEditorCamera = Reselect.createSelector(
    state => state.camera.editorPosition,
    this.getEditorZoom,
    (position, zoom) => ({ position, zoom })
  )

  const getUseEditorFollower = state => state.settings['cam.useEditorFollower']

  const getEditorDimensions = state => state.camera.editorDimensions
  const getEditorFollowerFocus = state => Math.min(this.getNumRiders(state) - 1, state.camera.editorFollowerFocus)

  const getPlaybackZoom = state =>
    window.getAutoZoom ? window.getAutoZoom(this.getPlayerIndex(state)) : state.camera.playbackZoom
  const getPlaybackFixedPosition = state => state.camera.playbackFixedPosition
  const getPlaybackIsFixedPosition = state => state.camera.playbackFollower.isFixed()

  const hasPlaybackDimensions = state => state.camera.playbackDimensions != null

  // TODO: handle custom camera dimensions with cropping like in thumbnail choosing mode
  const getPlaybackDimensions = state => state.camera.playbackDimensions || this.getEditorDimensions(state)

  const getPlaybackCameraParams = Reselect.createSelector(
    this.getPlaybackZoom,
    this.getPlaybackDimensions,
    (zoom, { width, height }) => ({ zoom, width, height })
  )

  const getPlaybackCamera = Reselect.createSelector(
    state => state.camera.playbackFollower,
    this.getSimulatorTrack,
    this.getPlayerIndex,
    this.getPlaybackZoom,
    this.getPlaybackCameraParams,
    this.getPlaybackFixedPosition,
    (playbackFollower, track, index, zoom, params, pan) => ({
      position: playbackFollower.isFixed() ? pan : playbackFollower.getCamera(track, params, index),
      zoom
    })
  )
  const getPlaybackCameraFocus = state => state.camera.playbackFollower.focus

  const getCurrentCamera = state => this.getPlayerRunning(state) ? this.getPlaybackCamera(state) : this.getEditorCamera(state)

  const getCommandsToHotkeys = Reselect.createSelector(
    state => state.command.hotkeys,
    (hotkeys) => Object.keys(hotkeys).map(command => [command, hotkeys[command]])
  )

  const getTriggerCounts = (state, trigger) => state.command.triggerCounts.get(trigger, 0)

  const getModifier = (state, modifier) => state.command.activeModifiers.has(modifier)

  const getModifiersActive = state => !state.command.activeModifiers.isEmpty()

  const getZoomSliderActive = state => this.getModifier(state, 'modifiers.zoom')

  const getNotification = Reselect.createSelector(
    state => state.notifications.message,
    state => state.notifications.autoHide,
    state => state.notifications.open,
    (message, autoHide, open) => ({ message, autoHide, open })
  )

  const getNotificationProgressId = state => state.notifications.progressId

  const getNotificationsCount = state => state.notifications.count

  const getPlayerRunning = state => state.player.running

  const getPlayerIndex = state => state.player.index

  const getPlayerMaxIndex = state => Math.ceil(state.player.maxIndex)
  const getPlayerFlagIndex = state => state.player.flagIndex
  const getPlayerFlagActive = state => this.getPlayerFlagIndex(state) !== 0

  const getPlayerSlowMotion = state => state.player.slowMotion
  const getPlayerReversed = state => (state.player.reverse || state.player.rewind) && !state.player.fastForward
  const getPlayerFrameRateSetting = state => state.renderer.skeleton === 0 ? state.player.settings.interpolate : false
  const getPlayerSettings = state => state.player.settings

  const getPlayerFps = state => state.player.settings.fps

  const getPlayerTime = Reselect.createSelector(
    this.getPlayerIndex,
    this.getPlayerFps,
    (index, fps) => index / fps
  )

  const getCurrentPlayerRate = Reselect.createSelector(
    state => state.player.settings.baseRate,
    state => state.player.settings.slowMotionRate,
    state => state.player.settings.fastForwardRate,
    state => state.player.slowMotion,
    state => state.player.fastForward,
    state => state.player.rewind,
    this.getPlayerRunning,
    (baseRate, slowMotionRate, fastForwardRate, slowMotion, fastForward, rewind, running) => {
      if (slowMotion) {
        baseRate *= slowMotionRate
      }
      if (running && (fastForward || rewind)) {
        baseRate *= fastForwardRate
      }
      return baseRate
    }
  )

  const getTrackSaverProgress = state => state.progress['SAVE_TRACK']
  const getTrackSaverInProgress = state => state.progress['SAVE_TRACK'].percent != null

  const getTrackLoaderProgress = state => state.progress['LOAD_TRACK']

  const getAutosaveProgress = state => state.progress['AUTOSAVE']

  const getProgress = (state, progressId) => {
    let progress = state.progress[progressId]

    if (!progress) throw new Error('unknown progressId:', progressId)

    return progress
  }

  const getPixelRatio = state => state.renderer.pixelRatio

  const getRendererScenes = Reselect.createStructuredSelector({
    customEditScene: state => state.renderer.edit,
    customPlaybackScene: state => state.renderer.playback
  })

  const getMillionsEnabled = state => state.renderer.millionsEnabled

  const getSpriteSheet = Reselect.createSelector(
    this.getNumRiders,
    state => state.renderer.spriteSheets,
    (numRiders, spriteSheets) => {
      if (!spriteSheets) {
        return null
      }
      if (numRiders === 1) {
        return [spriteSheets[0]]
      } else {
        let out = []
        for (let i = 0; i < numRiders; i++) {
          let index = (i + 1) % (spriteSheets.length)
          out.push(spriteSheets[index])
        }
        return out
      }
    }
  )

  const getOnionBeginIndex = state => Math.max(0, Math.ceil(state.player.index) - state.renderer.onionSkinFramesBefore)
  const getOnionEndIndex = state => Math.min(state.player.maxIndex, Math.max(0, Math.floor(state.player.index) + state.renderer.onionSkinFramesAfter))
  const getOnionSkinActive = state => state.renderer.onionSkin

  const getPlaybackPreview = state => state.renderer.playbackPreview
  const getColorPlayback = state => state.renderer.colorPlayback

  const getViewOptions = Reselect.createStructuredSelector({
    color: state => this.getPlayerRunning(state) ? this.getColorPlayback(state) : !this.getPlaybackPreview(state),
    flag: state => state.renderer.flag != null ? state.renderer.flag : !(this.getInViewer(state) && this.getPlayerRunning(state)),
    skeleton: state => state.renderer.skeleton
  })

  const getSimulatorTrack = state => state.simulator.engine
  const getSimulatorCommittedTrack = state => state.simulator.committedEngine

  const getSimulatorLines = state => state.simulator.engine.linesList
  const getSimulatorCommittedLines = state => state.simulator.committedEngine.linesList

  // for compatibility
  const getSimulatorStartPos = state => state.simulator.engine.start.position
  const getSimulatorVersion = state => state.simulator.engine.isLegacy() ? '6.1' : '6.2'

  const getSimulatorTrackTotalLineCount = state => state.simulator.engine.linesList.size()

  const getTrackIsEmpty = state => this.getSimulatorTrackTotalLineCount(state) === 0
  const getTrackIsDirty = state => state.simulator.committedEngine !== state.simulator.lastSavedEngine

  const getSimulatorLineCount = this.Reselect.createSelector(
    state => state.simulator.engine,
    (engine) => {
      let { total, ...lineCounts } = engine.getLineCounts()
      return { total, lineCounts }
    }
  )

  const getSimulatorTotalLineCount = state => this.getSimulatorLineCount(state).total

  const getTrackLayers = state => this.getSimulatorTrack(state).engine.state.layers
  const getTrackActiveLayerId = state => this.getSimulatorTrack(state).engine.state.activeLayerId
  const getActiveLayerEditable = state => {
    const id = this.getTrackActiveLayerId(state)
    const layers = this.getTrackLayers(state)

    const index = layers.findIndex(layer => layer.id === id)

    if (index >= 0) {
      const layer = layers.get(index)
      return layer.visible && layer.editable
    }
  }
  const getSimulatorHasUndo = Reselect.createSelector(
    state => state.simulator.history,
    state => state.simulator.committedEngine,
    (history, engine) => history.findIndex(e => e === engine) > 0
  )

  const getSimulatorHasRedo = Reselect.createSelector(
    state => state.simulator.history,
    state => state.simulator.committedEngine,
    (history, engine) => history.findIndex(e => e === engine) < history.length - 1
  )

  const getRiders = state => state.simulator.engine.engine.state.riders
  const getCommittedRiders = state => state.simulator.committedEngine.engine.state.riders
  const getNumRiders = (state) => this.getRiders(state).length

  const getSavedTracks = state => state.savedTracks

  const getSavedTracksAvailable = state => !!state.savedTracks

  const getAutosaveEnabled = state => state.autosaveEnabled

  const getToolState = (state, toolId) => state.toolState[toolId]

  const getSelectedTool = state => state.selectedTool

  const colorPickerOpenSelector = Reselect.createSelector(
    this.getSelectedTool,
    (selectedTool) => window.Tools[selectedTool].usesSwatches
  )

  const getLineTypePickerActive = this.colorPickerOpenSelector

  const getTrackLinesLocked = state => state.trackLinesLocked

  // Defaults to scenery if track lines locked
  const getSelectedLineType = state => this.getTrackLinesLocked(state) ? 2 : state.selectedLineType

  const getCursor = state => window.Tools[state.selectedTool].getCursor(state)

  const getToolSceneLayer = state => window.Tools[state.selectedTool].getSceneLayer(state)

  const getTrackIsLocalFile = state => state.trackData.localFile
  const getTrackScript = state => state.trackData.script

  const getTrackProps = Reselect.createStructuredSelector({
    riders: this.getCommittedRiders,
    version: this.getSimulatorVersion,
    audio: this.getLocalAudioProps,
    layers: this.getTrackLayers,
    script: this.getTrackScript
  })

  const getTrackDetails = Reselect.createStructuredSelector({
    title: state => state.trackData.label,
    creator: state => state.trackData.creator,
    description: state => state.trackData.description
  })

  const getTrackCloudInfo = Reselect.createSelector(
    state => state.trackData.cloudInfo,
    state => state.trackData.derivedFrom,
    state => state.trackData.saveTime,
    (cloudInfo, derivedFrom, saveTime) => {
      if (derivedFrom) {
        return { saveTime, ...cloudInfo, derivedFrom }
      }
      if (cloudInfo) {
        return { saveTime, ...cloudInfo }
      }
      if (saveTime) {
        return { saveTime }
      }
      return undefined
    }
  )

  const getTrackDetailsWithCloudInfo = Reselect.createStructuredSelector({
    details: this.getTrackDetails,
    cloudInfo: this.getTrackCloudInfo
  })

  const getTrackInfo = Reselect.createStructuredSelector({
    duration: state => this.getPlayerMaxIndex(state)
  })

  const getTrackObjectForAutosave = Reselect.createStructuredSelector({
    props: this.getTrackProps,
    details: this.getTrackDetails,
    info: this.getTrackInfo,
    cloudInfo: this.getTrackCloudInfo,
    localFile: this.getTrackIsLocalFile
  })

  const getTrackObjectForSaving = (state, trackDetails) => ({
    label: trackDetails.title, 
    creator: trackDetails.creator,
    description: trackDetails.description,
    duration: this.getPlayerMaxIndex(state),
    version: this.getSimulatorVersion(state),
    audio: this.getLocalAudioProps(state),
    startPosition: this.getSimulatorStartPos(state),
    riders: this.getCommittedRiders(state),
    lines: this.getSimulatorLines(state).toJS(),
    layers: this.getTrackLayers(state).toJS(),
    script: this.getTrackScript(state)
  })

  const getControlsActive = state => state.ui.controlsActive

  const Views = {
    Main: 'Main',
    Sidebar: 'Sidebar',
    About: 'About',
    TrackLoader: 'TrackLoader',
    TrackSaver: 'TrackSaver',
    ReleaseNotes: 'ReleaseNotes'
  }
  
  const Pages = {
    [this.Views.Main]: {
      Editor: 'editor',
      Viewer: 'viewer',
      EditableViewer: 'editable-viewer'
    },
    [this.Views.Sidebar]: {
      Share: 'share',
      Info: 'info',
      Settings: 'settings',
      Help: 'help'
    },
    [this.Views.About]: {
      Launch: 'launch',
      Loading: 'loading'
    },
    [this.Views.TrackLoader]: {
      Load: 'load'
    },
    [this.Views.TrackSaver]: {
      Save: 'save'
    },
    [this.Views.VideoExporter]: {
      Export: 'export'
    },
    [this.Views.ReleaseNotes]: {
      Notes: 'notes'
    }
  }

  const getViews = state => state.views

  const getSidebarPage = state => this.getViews(state)[this.Views.Sidebar]

  const getMainPage = state => this.getViews(state)[this.Views.Main]

  const getInEditor = state => state.views[this.Views.Main] === this.Views.Pages.Main.Editor

  const getInViewer = state => state.views[this.Views.Main] === this.Views.Pages.Main.Viewer || state.views[this.Views.Main] === this.Views.Pages.Main.EditableViewer

  const getInTrackSaver = state => state.views[this.Views.TrackSaver] === this.Views.Pages.TrackSaver.Save

  const getInTrackLoader = state => state.views[this.Views.TrackLoader] === this.Views.Pages.TrackLoader.Load

  const getInVideoExporter = state => state.views[this.Views.VideoExporter] === this.Views.Pages.VideoExporter.Export

  const getHasOverlay = state => (
    state.views[this.Views.About] ||
    state.views[this.Views.TrackLoader] ||
    state.views[this.Views.TrackSaver] ||
    state.views[this.Views.VideoExporter] ||
    state.views[this.Views.ReleaseNotes]
  )

  return {colorPickerOpenSelector, getActiveLayerEditable, getAudioEnabled, getAudioFileLoading, getAudioOffset, getAudioProps, getAutosaveEnabled, getAutosaveProgress, getColorPlayback, getCommandsToHotkeys, getCommittedRiders, getControlsActive, getCurrentCamera, getCurrentPlayerRate, getCursor, getEditorCamera, getEditorDimensions, getEditorFollowerFocus, getEditorFollowerFocus, getEditorPosition, getEditorZoom, getHasOverlay, getInEditor, getInTrackLoader, getInTrackSaver, getInVideoExporter, getInViewer, getLineTypePickerActive, getLocalAudioProps, getMainPage, getMillionsEnabled, getModifier, getModifiersActive, getNotification, getNotificationProgressId, getNotificationsCount, getNumRiders, getOnionBeginIndex, getOnionEndIndex, getOnionSkinActive, getPixelRatio, getPlaybackCamera, getPlaybackCameraFocus, getPlaybackCameraParams, getPlaybackDimensions, getPlaybackFixedPosition, getPlaybackIsFixedPosition, getPlaybackPreview, getPlaybackZoom, getPlayerFlagActive, getPlayerFlagIndex, getPlayerFps, getPlayerFrameRateSetting, getPlayerIndex, getPlayerMaxIndex, getPlayerReversed, getPlayerRunning, getPlayerSettings, getPlayerSlowMotion, getPlayerTime, getProgress, getRendererScenes, getRiders, getSavedTracks, getSavedTracksAvailable, getSelectedLineType, getSelectedLineType, getSelectedTool, getSidebarPage, getSimulatorCommittedLines, getSimulatorCommittedTrack, getSimulatorHasRedo, getSimulatorHasUndo, getSimulatorLineCount, getSimulatorLines, getSimulatorStartPos, getSimulatorTotalLineCount, getSimulatorTrack, getSimulatorTrackTotalLineCount, getSimulatorVersion, getSpriteSheet, getToolSceneLayer, getToolState, getTrackActiveLayerId, getTrackCloudInfo, getTrackDetails, getTrackDetailsWithCloudInfo, getTrackInfo, getTrackIsDirty, getTrackIsEmpty, getTrackIsLocalFile, getTrackLayers, getTrackLinesLocked, getTrackLoaderProgress, getTrackObjectForAutosave, getTrackObjectForSaving, getTrackProps, getTrackSaverInProgress, getTrackSaverProgress, getTrackScript, getTriggerCounts, getUseEditorFollower, getViewOptions, getViews, getZoomSliderActive, hasPlaybackDimensions, isAudioFileLoading}
})()