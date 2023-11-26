// Reselect Library
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Reselect={})}(this,(function(e){"use strict";var t="NOT_FOUND";var n=function(e,t){return e===t};function r(e,r){var u,o,i="object"==typeof r?r:{equalityCheck:r},c=i.equalityCheck,f=i.maxSize,a=void 0===f?1:f,l=i.resultEqualityCheck,p=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,u=0;r>u;u++)if(!e(t[u],n[u]))return!1;return!0}}(void 0===c?n:c),s=1===a?(u=p,{get:function(e){return o&&u(o.key,e)?o.value:t},put:function(e,t){o={key:e,value:t}},getEntries:function(){return o?[o]:[]},clear:function(){o=void 0}}):function(e,n){var r=[];function u(e){var u=r.findIndex((function(t){return n(e,t.key)}));if(u>-1){var o=r[u];return u>0&&(r.splice(u,1),r.unshift(o)),o.value}return t}return{get:u,put:function(n,o){u(n)===t&&(r.unshift({key:n,value:o}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(a,p);function v(){var n=s.get(arguments);if(n===t){if(n=e.apply(null,arguments),l){var r=s.getEntries(),u=r.find((function(e){return l(e.value,n)}));u&&(n=u.value)}s.put(arguments,n)}return n}return v.clearCache=function(){return s.clear()},v}function u(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return"function"==typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function o(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=Array(t),o=0;t>o;o++)r[o]=arguments[o];var i,c=0,f={memoizeOptions:void 0},a=r.pop();if("object"==typeof a&&(f=a,a=r.pop()),"function"!=typeof a)throw Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=f,p=l.memoizeOptions,s=void 0===p?n:p,v=Array.isArray(s)?s:[s],y=u(r),d=e.apply(void 0,[function(){return c++,a.apply(null,arguments)}].concat(v)),h=e((function(){for(var e=[],t=y.length,n=0;t>n;n++)e.push(y[n].apply(null,arguments));return i=d.apply(null,e)}));return Object.assign(h,{resultFunc:a,memoizedResultFunc:d,dependencies:y,lastResult:function(){return i},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),h};return o}var i=o(r);e.createSelector=i,e.createSelectorCreator=o,e.createStructuredSelector=function(e,t){if(void 0===t&&(t=i),"object"!=typeof e)throw Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e),r=t(n.map((function(t){return e[t]})),(function(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return t.reduce((function(e,t,r){return e[n[r]]=t,e}),{})}));return r},e.defaultEqualityCheck=n,e.defaultMemoize=r,Object.defineProperty(e,"__esModule",{value:!0})}));

/**
* @typedef {{
*   startPosition: V2
*   startVelocity: V2
*   startAngle: Number
*   remountable: boolean
* }} Rider
* 
* @typedef {{
*   id?: Number
*   type: 0 | 1 | 2
*   x1: Number
*   y1: Number
*   x2: Number
*   y2: Number
*   flipped?: boolean
*   leftExtended?: boolean
*   rightExtended?: boolean
*   multiplier?: Number
*   layer?: Number
* }} Line
* 
* @typedef {{
*   id: Number
*   name: string
*   visible: boolean
*   editable: boolean
* }} Layer
* 
* @typedef {{
*   startPosition?: {x: Number, y: Number}
*   version: '6.1' | '6.2'
*   label?: string
*   creator?: string
*   description?: string
*   viewOnly?: boolean
*   riders?: Array.<Rider>
*   lines?: Array.<Line>
*   layers?: Array.<Layer>
* }} Track
* 
* @typedef {{
*   interpolate?: boolean | Number
*   fps?: Number
*   baseRate?: Number
*   slowMotion?: Number
*   fastForward?: Number
*   maxDuration?: Number
* }} PlayerSettings
* 
* @typedef {{
*   'audio.slowMotion': boolean
*   'cam.useEditorFollower': boolean
*   'ui.undoRedoGestures': boolean
*   'ui.twoFingerPan': boolean
*   'ui.pinchToZoom': boolean
* }} OtherSettings
*/

const Enums = (function() {
  /** Hotkey ids for various commands */
  const COMMANDS = {
    TRIGGERS: {
      PENCIL_TOOL: "triggers.pencilTool",
      LINE_TOOL: "triggers.lineTool",
      ERASER_TOOL: "triggers.eraserTool",
      SELECT_TOOL: "triggers.selectTool",
      PAN_TOOL: "triggers.panTool",
      ZOOM_TOOL: "triggers.zoomTool",
      PLAY: "triggers.play",
      PLAY_EDITOR_ZOOM: "triggers.playWithEditorZoom",
      STOP: "triggers.stop",
      FLAG: "triggers.flag",
      PLAY_PAUSE: "triggers.playPause",
      PLAY_PAUSE_EDITOR_ZOOM: "triggers.playWithEditorZoomPause",
      TOGGLE_SLOW: "triggers.toggleSlowMotion",
      REMOVE_LAST_LINE: "triggers.removeLastLine",
      UNDO: "triggers.undo",
      REDO: "triggers.redo",
      NORMAL_SWATCH: "triggers.normalSwatch",
      ACCEL_SWATCH: "triggers.accelSwatch",
      SCENERY_SWATCH: "triggers.scenerySwatch",
      NEXT_FRAME: "triggers.nextFrame",
      PREV_FRAME: "triggers.prevFrame",
      SAVE: "triggers.save",
      OPEN: "triggers.open",
      GO_TO_START: "triggers.goToStart",
      ONION_SKINNING: "triggers.toggleOnionSkin",
      SKELETON_VIEW: "triggers.toggleSkeleton",
      PLAYBACK_CAMERA: "triggers.showPlaybackCamera",
      PLAYBACK_PREVIEW: "triggers.togglePlaybackPreview",
      Select: {
        COPY: "triggers.select.copy",
        PASTE: "triggers.select.paste",
        DUPLICATE: "triggers.select.duplicate",
        DESELECT: "triggers.select.deselect",
        COPY_CLIPBOARD: "triggers.select.clipboard.copy",
        PASTE_CLIPBOARD: "triggers.select.clipboard.paste",
        CONVERT_NORMAL: "triggers.select.convertToNormal",
        CONVERT_ACCEL: "triggers.select.convertToAccel",
        CONVERT_SCENERY: "triggers.select.convertToScenery",
        REVERSE_LINE: "triggers.select.reverseLine",
        MOVE_UP: "triggers.select.moveUp",
        MOVE_LEFT: "triggers.select.moveLeft",
        MOVE_DOWN: "triggers.select.moveDown",
        MOVE_RIGHT: "triggers.select.moveRight"
      }
    },
    MODIFIERS: {
      ANGLE_SNAP: "modifiers.angleSnap",
      NO_POINT_SNAP: "modifiers.disablePointSnap",
      FLIP_LINE: "modifiers.flipLine",
      FORCE_ZOOM: "modifiers.forceZoom",
      PLAYBACK_CAM_MDF: "modifiers.showPlaybackCamera",
      LOCK_EDITOR_CAM: "modifiers.lockEditorCamera",
      ANGLE_LOCK: "modifiers.angleLock",
      FAST_FORWARD: "modifiers.fastForward",
      REWIND: "modifiers.rewind",
      SELECT: {
        ADD: "modifiers.select.add",
        SUBTRACT: "modifiers.select.subtract",
        POINT: "modifiers.select.singlePoint",
        DUPLICATE: "modifiers.select.duplicate",
        FINE_NUDGE: "modifiers.select.fineNudge",
        TRANSFORM_STATE: "modifiers.select.transformState",
      }
    }
  }

  /** Numerical representation of line types */
  const LINE_TYPES = {
    REGULAR: 0,
    ACCEL: 1,
    SCENERY: 2
  }

  /** Available editor tools */
  const TOOLS = {
    ZOOM: 'ZOOM_TOOL',
    SELECT: 'SELECT_TOOL',
    PENCIL: 'PENCIL_TOOL',
    PAN: 'PAN_TOOL',
    LINE: 'LINE_TOOL',
    ERASER: 'ERASER_TOOL',
    ADJUST_START: 'ADJUST_START_TOOL'
  }

  /** Modes of playback refresh rates */
  const PLAYBACK_MODES = {
    FORTY: false,
    SIXTY: 60,
    SMOOTH: true
  }

  /** Advanced skelton views */
  const SKELETON_MODES = {
    NORMAL: 0,
    NORMAL_SKELETON: 1,
    SKELETON: 2
  }

  /** Separate viewable pages */
  const VIEWS = {
    MAIN: 'MAIN',
    SIDEBAR: 'SIDEBAR',
    ABOUT: 'ABOUT',
    TRACK_LOADER: 'TRACK_LOADER',
    TRACK_SAVER: 'TRACK_SAVER',
    VIDEO_EXPORTER: 'VIDEO_EXPORTER',
    RELEASE_NOTES: 'RELEASE_NOTES'
  }

  /** Subpages within each of the viewable pages */
  const PAGES = {
    [VIEWS.MAIN]: {
      EDITOR: 'editor',
      VIEWER: 'viewer',
      EDITABLE_VIEWER: 'editable-viewer'
    },
    [VIEWS.SIDEBAR]: {
      SHARE: 'share',
      INFO: 'info',
      SETTINGS: 'settings',
      HELP: 'help'
    },
    [VIEWS.ABOUT]: {
      LAUNCH: 'launch',
      LOADING: 'loading'
    },
    [VIEWS.TRACK_LOADER]: {
      LOAD: 'load'
    },
    [VIEWS.TRACK_SAVER]: {
      SAVE: 'save'
    },
    [VIEWS.VIDEO_EXPORTER]: {
      EXPORT: 'export'
    },
    [VIEWS.RELEASE_NOTES]: {
      NOTES: 'notes'
    }
  }

  return {COMMANDS, LINE_TYPES, PLAYBACK_MODES, TOOLS, SKELETON_MODES, VIEWS, PAGES}
})()

// TODO provide examples
const Actions = (function() {
  /** Toggles audio volume */
  const toggleAudio = () => ({ type: 'TOGGLE_AUDIO' })

  /** Removes the current audio file */
  const removeAudio = () => ({ type: 'REMOVE_AUDIO' })

  /**
  * Sets the offset of the audio file
  * @param {Number} offset Seconds After Start
  */
  const setAudioOffset = (offset) => ({
    type: 'SET_AUDIO_OFFSET',
    payload: offset
  })

  /**
  * Sets the audio volume
  * @param {Number} volume Percent Volume (0 - 1)
  */
  const setAudioVolume = (volume) => ({
    type: 'SET_AUDIO_VOLUME',
    payload: volume
  })

  /** Loads the last cached autosave */
  const loadAutosave = () => ({ type: 'LOAD_AUTOSAVE' })

  /**
  * Sets the properties of the editor camera
  * @param {{x: Number, y: Number}} position Camera Position
  * @param {Number} zoom Camera Zoom
  */
  const setEditorCamera = (position, zoom) => ({
    type: 'SET_EDITOR_CAMERA',
    payload: { position, zoom }
  })

  /**
  * Sets which rider to focus on in the editor
  * @param {Number} focusIndex Rider Index (Starts at 0)
  */
  const setEditorFollowerFocus = (focusIndex) => ({
    type: 'SET_EDITOR_FOLLOWER_FOCUS',
    payload: focusIndex
  })

  /**
  * Sets zoom of playback camera
  * @param {Number} zoom Playback Zoom
  */
  const setPlaybackZoom = (zoom) => ({
    type: 'SET_PLAYBACK_ZOOM',
    payload: zoom
  })

  /**
  * Sets the weight each rider has on where the camera focuses
  * @param {Array.<Number>} focusList Relative Weights
  */
  const setPlaybackFollowerFocus = (focusList) => ({
    type: 'SET_PLAYBACK_FOLLOWER_FOCUS',
    payload: focusList
  })

  /** Toggles whether the editor camera should keep the target rider in view */
  const toggleEditorFollower = () => ({ type: 'TOGGLE_EDITOR_FOLLOWER' })

  /**
  * Sets viewport dimensions of the playback camera
  * @param {{width: Number, height: Number}} dimensions Camera Dimensions
  */
  const setPlaybackDimensions = (dimensions) => ({
    type: 'SET_PLAYBACK_DIMENSIONS',
    payload: dimensions
  })

  /**
  * Triggers the result of a triggerable hotkey being pressed
  * @param {string} command Trigger Command
  */
  const triggerCommand = (command) => ({
    type: 'TRIGGER_COMMAND',
    payload: command,
    meta: { ignorable: true }
  })

  /**
  * Triggers the beginning of a modifier hotkey being pressed
  * @param {string} command Modifier Command 
  */
  const beginModifierCommand = (command) => ({
    type: 'BEGIN_MODIFIER_COMMAND',
    payload: command,
    meta: { ignorable: true }
  })

  /**
  * Triggers the end of a modifier hotkey being pressed
  * @param {string} command Modifier Command
  */
  const endModifierCommand = (command) => ({
    type: 'END_MODIFIER_COMMAND',
    payload: command,
    meta: { ignorable: true }
  })

  /**
  * Changes hotkeys given a series of commands and the new key value
  * @param {{string: string}} commandHotkeys Hotkey Dictionary
  */
  const setCommandHotkeys = (commandHotkeys) => ({
    type: 'SET_COMMAND_HOTKEYS',
    payload: commandHotkeys
  })

  /** Toggles locked track lines */
  const toggleTrackLinesLocked = () => ({ type: 'TOGGLE_TRACK_LINES_LOCKED' })

  /**
  * Changes the color swatch of the current tool (if available)
  * @param {Number} lineType Color Swatch
  */
  const selectLineType = (lineType) => ({
    type: 'SELECT_LINE_TYPE',
    payload: lineType
  })

  /**
  * Changes current tool to target tool
  * @param {string} tool Target Tool
  */
  const setTool = (tool) => ({
    type: 'SET_TOOL',
    payload: tool
  })

  /**
  * Changes the tool state of a tool
  * @param {string} toolId Target Tool
  * @param {{status: boolean, props}} state Tool State (Tool Dependant)
  */
  const setToolState = (toolId, state) => ({
    type: 'SET_TOOL_STATE',
    payload: state,
    meta: { id: toolId }
  })

  /**
  * Update lines given a subaction and a list of lines to add/remove
  * @param {string} name Subaction Name
  * @param {Array.<Number>} linesToRemove Remove Lines by Id
  * @param {Array.<Line>} linesToAdd Add Lines by Props
  */
  const updateLines = (name, linesToRemove, linesToAdd) => ({
    type: 'UPDATE_LINES',
    payload: { linesToRemove, linesToAdd, initialLoad: false },
    meta: { name }
  })

  /**
  * Adds a single line to the currently active layer
  * @param {Line} line Line Object
  */
  const addLine = (line) => updateLines('ADD_LINE', null, [line])

  /**
  * Adds a list of lines to the currently active layer
  * @param {Array.<Line>} lines Line Array
  */
  const addLines = (lines) => updateLines('ADD_LINES', null, lines)

  /**
  * Preloads a list of lines incrementally
  * @param {Array.<Line>} lines Line Array
  */
  const loadLines = (lines) => updateLines('LOAD_LINES', null, lines, true)  

  /**
  * Duplicates a list of lines by removing id prop
  * @param {Array.<Line>} lines Line Array
  */
  const duplicateLines = (lines) => updateLines('DUPLICATE_LINES', null, lines)

  /**
  * Removes a single line given an id
  * @param {Number} lineId Line Id
  */
  const removeLine = (lineId) => updateLines('REMOVE_LINE', [lineId], null)

  /**
  * Removes a list of lines given their ids
  * @param {Array.<Number>} lineIds Line Id Array
  */
  const removeLines = (lineIds) => updateLines('REMOVE_LINES', lineIds, null)

  /**
  * Changes a list of lines given a list of altered lines with known ids
  * @param {Array.<Line>} lines Line Array
  */
  const setLines = (lines) => updateLines('SET_LINES', null, lines)

  /**
  * Replaces a line given the line id to replace and the new props
  * @param {Number} prevLineId Line Id to Replace
  * @param {Line} line New Line Properties
  */
  const replaceLine = (prevLineId, line) => updateLines('REPLACE_LINE', [prevLineId], [line])

  /** Decrements engine state to previous point in history if available */
  const undoAction = () => ({ type: 'UNDO' })

  /** Increments engine state to next point in history if available */
  const redoAction = () => ({ type: 'REDO' })

  /** Commits track changes to committed engine state */
  const commitTrackChanges = () => ({ type: 'COMMIT_TRACK_CHANGES' })

  /** Clears track changes from uncommitted engine state */
  const revertTrackChanges = () => ({ type: 'REVERT_TRACK_CHANGES', meta: { ignorable: true } })

  /** Adds a new layer */
  const addLayer = () => ({ type: 'ADD_LAYER' })

  /**
  * Removes layer given a layer id
  * @param {Number} id Target Layer Id
  */
  const removeLayer = (id) => ({
    type: 'REMOVE_LAYER',
    payload: {id}
  })

  /**
  * Changes index of a layer in the layer list
  * @param {Number} id Target Layer Id
  * @param {Number} index New Index
  */
  const moveLayer = (id, index) => ({
    type: 'MOVE_LAYER',
    payload: {id, index}
  })

  /**
  * Renames target layer
  * @param {Number} id Target Layer Id
  * @param {string} name New Name
  */
  const renameLayer = (id, name) => ({
    type: 'RENAME_LAYER',
    payload: {id, name}
  })

  /**
  * Sets the active layer to target layer
  * @param {Number} id Target Layer Id
  */
  const setLayerActive = (id) => ({
    type: 'SET_LAYER_ACTIVE',
    payload: {id}
  })

  /**
  * Toggles target layer visiblity
  * @param {Number} id Target Layer Id
  * @param {boolean} visible Layer Visible 
  */
  const setLayerVisible = (id, visible) => ({
    type: 'SET_LAYER_VISIBLE',
    payload: {id, visible}
  })

  /**
  * Toggles target layer editability
  * @param {Number} id Target Layer Id
  * @param {boolean} editable Layer Editable 
  */
  const setLayerEditable = (id, editable) => ({
    type: 'SET_LAYER_EDITABLE',
    payload: {id, editable}
  })

  /**
  * Sets the list of riders
  * @param {Array.<Rider>} riders Rider Array
  */
  const setRiders = (riders) => ({
    type: 'SET_RIDERS',
    payload: riders
  })

  /**
  * Show notification in top-right corner
  * @param {string} message Notification Message
  * @param {boolean} [autoHide] Hide Message After Timer
  */
  const showNotification = (message, autoHide = true) => ({
    type: 'notifications/SHOW_NOTIFICATION',
    payload: { message, autoHide }
  })

  /**
  * Hides notification based on message as id
  * @param {string} message Message / Id
  */
  const hideNotification = (message) => ({
    type: 'notifications/HIDE_NOTIFICATION',
    payload: message
  })

  /**
  * Sets the fps of the playback renderer
  * @param {Number} fps Target Fps
  */
  const setPlayerFps = (fps) => ({
    type: 'SET_PLAYER_FPS',
    payload: fps
  })

  /** Toggles smooth playback */
  const toggleInterpolate = () => ({ type: 'TOGGLE_INTERPOLATE' })
  
  /** 
  * Toggles different smooth playback modes
  * @param {boolean|Number} playbackMode Playback Mode
  */
  const setInterpolate = (playbackMode) => ({
    type: 'SET_INTERPOLATE',
    payload: playbackMode
  })

  /** Toggles slow motion playback */
  const toggleSlowMotion = () => ({ type: 'TOGGLE_SLOW_MOTION' })

  /** Increments player timeline index if possible */
  const incPlayerIndex = () => ({ type: 'INC_PLAYER_INDEX' })

  /** Decrements player timeline index if possible */
  const decPlayerIndex = () => ({ type: 'DEC_PLAYER_INDEX' })

  /** Starts playback */
  const startPlayer = () => ({ type: 'START_PLAYER' })

  /** Stops playback */
  const stopPlayer = () => ({ type: 'STOP_PLAYER' })

  /** Sets the flag at the current timeline position */
  const setFlag = () => ({ type: 'SET_FLAG' })

  /**
  * Sets the timeline index
  * @param {Number} index Index
  */
  const setFrameIndex = (index) => ({
    type: 'SET_PLAYER_INDEX',
    payload: index
  })

  /**
  * Sets the max index of the timeline
  * @param {Number} maxIndex Max Index
  */
  const setPlayerMaxIndex = (maxIndex) => ({
    type: 'SET_PLAYER_MAX_INDEX',
    payload: maxIndex
  })

  /**
  * Sets the flag index to a specific index
  * @param {Number} flagIndex Target Index
  */
  const setFlagIndex = (flagIndex) => ({
    type: 'SET_FLAG_INDEX',
    payload: flagIndex
  })

  /**
  * Toggles whether the track is playing
  * @param {boolean} running Playback Running
  */
  const setPlayerRunning = (running) => ({
    type: 'SET_PLAYER_RUNNING',
    payload: running
  })

  /**
  * Toggles timeline fast forward
  * @param {boolean} fastForward Fast Forward
  */
  const setPlayerFastForward = (fastForward) => ({
    type: 'SET_PLAYER_FAST_FORWARD',
    payload: fastForward
  })

  /**
  * Toggles timeline rewind
  * @param {boolean} rewind Rewind
  */
  const setPlayerRewind = (rewind) => ({
    type: 'SET_PLAYER_REWIND',
    payload: rewind
  })

  /**
  * Toggles whether the timeline should stop at the max
  * @param {boolean} stopAtEnd
  */
  const setPlayerStopAtEnd = (stopAtEnd) => ({
    type: 'SET_PLAYER_STOP_AT_END',
    payload: stopAtEnd
  })

  /**
  * Sets configuration settings for the timeline player
  * @param {PlayerSettings} [settings] Player Settings 
  */
  const setPlayerSettings = (settings) => ({
    type: 'SET_PLAYER_SETTINGS',
    payload: settings
  })

  /**
  * Toggles a view option given a key and the new value
  * @param {string} viewOption Target View Option
  * @param {boolean | null} value New Value
  */
  const setViewOption = (viewOption, value) => ({
    type: 'SET_VIEW_OPTION',
    payload: {
      key: viewOption,
      value
    }
  })

  /** Toggles whether flags render */
  const toggleFlag = () => setViewOption('flag', null)

  /** Toggles color playback */
  const toggleColorPlayback = () => setViewOption('colorPlayback', null)

  /** Toggles playback preview */
  const togglePlaybackPreview = () => setViewOption('playbackPreview', null)

  /** Toggles whether viewport dimensions are shown */
  const toggleViewport = () => setViewOption('showViewport', null)

  /** Toggles whether visible areas are shown */
  const toggleVisibleAreas = () => setViewOption('showVisibleAreas', null)

  /**
  * Toggles onion skinning
  * @param {boolean} onionSkin Onion Skinning
  */
  const setOnionSkin = (onionSkin) => ({
    type: 'SET_ONION_SKIN',
    payload: onionSkin
  })

  /**
  * Sets number of onion skin frames to render before current
  * @param {Number} framesBefore Frames Before
  */
  const setOnionSkinFramesBefore = (framesBefore) => ({
    type: 'SET_ONION_SKIN_FRAMES_BEFORE',
    payload: framesBefore
  })

  /**
  * Sets number of onion skin frames to render after current
  * @param {Number} framesAfter Frames After
  */
  const setOnionSkinFramesAfter = (framesAfter) => ({
    type: 'SET_ONION_SKIN_FRAMES_AFTER',
    payload: framesAfter
  })

  /**
  * Sets the skeleton mode
  * @param {Number} skeletonMode Skeleton Mode
  */
  const setSkeleton = (skeletonMode) => ({
    type: 'SET_SKELETON',
    payload: skeletonMode
  })

  /**
  * Sets whether autosave is enabled
  * @param {boolean} enabled Enabled
  */
  const setAutosaveEnabled = (enabled) => ({
    type: 'SET_AUTOSAVE_ENABLED',
    payload: enabled
  })

  /**
  * Adds a new track object to local database storage
  * @param {Track} trackData New Track
  */
  const putSavedTrack = (trackData) => ({
    type: 'PUT_SAVED_TRACK',
    payload: trackData
  })

  /**
  * Removes track object from local storage if it exists
  * @param {Track} trackData Track to Remove
  */
  const removeSavedTrack = (trackData) => ({
    type: 'REMOVE_SAVED_TRACK',
    payload: trackData
  })

  /**
  * Creates a new track 
  * @param {boolean} isV61 Version 6.1
  */
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

  /**
  * Loads a track into the current editor
  * @param {Track} trackData Track Object
  */
  const loadTrackAction = (trackData) => ({
    type: 'LOAD_TRACK',
    payload: {
      viewOnly: trackData["for viewing only, please don't steal tracks"] === true,
      ...trackData
    }
  })

  /**
  * Sets details of the currently loaded track
  * @param {string} title Title
  * @param {string} creator Creator
  * @param {string} description Description
  */
  const setTrackDetails = (title, creator, description) => ({
    type: 'trackData/SET_TRACK_DETAILS',
    payload: {
      title,
      creator,
      description
    }
  })

  /**
  * Set whether track saves to local file
  * @param {boolean} saveToFile Save Locally
  */
  const setLocalFile = (saveToFile) => ({
    type: 'trackData/SET_LOCAL_FILE',
    payload: saveToFile
  })

  /**
  * Sets the track script
  * @param {string} script Script
  */
  const setTrackScript = (script) => ({
    type: 'trackData/SET_TRACK_SCRIPT',
    payload: script
  })

  /**
  * Sets whether the timeline is visible or not
  * @param {boolean} active Timeline Active 
  */
  const setControlsActive = (active) => ({
    type: 'SET_CONTROLS_ACTIVE',
    payload: active
  })

  /** Toggles whether the timeline is active */
  const toggleControlsActive = () => ({ type: 'TOGGLE_CONTROLS_ACTIVE' })

  /**
  * Sets a setting given a specific setting key
  * @param {OtherSettings} key Target Setting
  * @param {boolean} value New Value
  */
  const setSetting = (key, value) => ({
    type: 'SET_SETTING',
    payload: {key, value}
  })

  /**
  * Toggles a specific setting
  * @param {OtherSettings} key Target Setting
  */
  const toggleSetting = (key) => ({ type: 'TOGGLE_SETTING', payload: {key} })

  return {addLayer, addLine, addLines, beginModifierCommand, commitTrackChanges, decPlayerIndex, duplicateLines, endModifierCommand, hideNotification, incPlayerIndex, loadAutosave, loadLines, loadTrackAction, moveLayer, newTrack, putSavedTrack, redoAction, removeAudio, removeLayer, removeLine, removeLines, removeSavedTrack, renameLayer, replaceLine, revertTrackChanges, selectLineType, setAudioOffset, setAudioVolume, setAutosaveEnabled, setCommandHotkeys, setControlsActive, setEditorCamera, setEditorFollowerFocus, setFlag, setFlagIndex, setFrameIndex, setInterpolate, setLayerActive, setLayerEditable, setLayerVisible, setLines, setLocalFile, setOnionSkin, setOnionSkinFramesAfter, setOnionSkinFramesBefore, setPlaybackDimensions, setPlaybackFollowerFocus, setPlaybackZoom, setPlayerFastForward, setPlayerFps, setPlayerMaxIndex, setPlayerRewind, setPlayerRunning, setPlayerRunning, setPlayerSettings, setPlayerStopAtEnd, setRiders, setSetting, setSkeleton, setTool, setToolState, setTrackDetails, setTrackScript, showNotification, startPlayer, stopPlayer, toggleAudio, toggleColorPlayback, toggleControlsActive, toggleEditorFollower, toggleFlag, toggleInterpolate, togglePlaybackPreview, toggleSetting, toggleSlowMotion, toggleTrackLinesLocked, toggleViewport, toggleVisibleAreas, triggerCommand, updateLines, undoAction}
})()

const Selectors = (function() {
  function getAudioEnabled(state) {return state.audio.enabled}

  function getAudioOffset(state) {return state.audio.offset}

  function isAudioFileLoading(state) {return state.audioFileLoader.loadingFile}

  function getAudioProps(state) {return state.audio}

  function getAudioFileLoading(state) {return state.audioFileLoader}

  function getLocalAudioProps (state) {
    const {name, path, offset} = state.audio
    if (path) {
      return {name, path, offset}
    }
    return null
  }

  function getEditorZoom(state) {return state.camera.editorZoom}

  function getEditorPosition(state) {return state.camera.editorPosition}

  const getEditorCamera = Reselect.createSelector(
    state => state.camera.editorPosition,
    getEditorZoom,
    (position, zoom) => ({ position, zoom })
  )

  function getUseEditorFollower(state) {return state.settings['cam.useEditorFollower']}

  function getEditorDimensions(state) {return state.camera.editorDimensions}

  function getEditorFollowerFocus(state) {return Math.min(getNumRiders(state) - 1, state.camera.editorFollowerFocus)}

  function getPlaybackZoom(state) {return window.getAutoZoom ? window.getAutoZoom(getPlayerIndex(state)) : state.camera.playbackZoom}

  function getPlaybackFixedPosition(state) {return state.camera.playbackFixedPosition}

  function getPlaybackIsFixedPosition(state) {return state.camera.playbackFollower.isFixed()}

  function hasPlaybackDimensions(state) {return state.camera.playbackDimensions != null}

  function getPlaybackDimensions(state) {return state.camera.playbackDimensions || getEditorDimensions(state)}

  const getPlaybackCameraParams = Reselect.createSelector(
    getPlaybackZoom,
    getPlaybackDimensions,
    (zoom, { width, height }) => ({ zoom, width, height })
  )

  const getPlaybackCamera = Reselect.createSelector(
    state => state.camera.playbackFollower,
    getSimulatorTrack,
    getPlayerIndex,
    getPlaybackZoom,
    getPlaybackCameraParams,
    getPlaybackFixedPosition,
    (playbackFollower, track, index, zoom, params, pan) => ({
      position: playbackFollower.isFixed() ? pan : playbackFollower.getCamera(track, params, index),
      zoom
    })
  )

  function getPlaybackCameraFocus(state) {return state.camera.playbackFollower.focus}

  function getCurrentCamera(state) {return getPlayerRunning(state) ? getPlaybackCamera(state) : getEditorCamera(state)}

  const getCommandsToHotkeys = Reselect.createSelector(
    state => state.command.hotkeys,
    (hotkeys) => Object.keys(hotkeys).map(command => [command, hotkeys[command]])
  )

  function getTriggerCounts(state, trigger) {return state.command.triggerCounts.get(trigger, 0)}

  function getModifier(state, modifier) {return state.command.activeModifiers.has(modifier)}

  function getModifiersActive(state) {return !state.command.activeModifiers.isEmpty()}

  function getZoomSliderActive(state) {return getModifier(state, 'modifiers.zoom')}

  const getNotification = Reselect.createSelector(
    state => state.notifications.message,
    state => state.notifications.autoHide,
    state => state.notifications.open,
    (message, autoHide, open) => ({ message, autoHide, open })
  )

  function getNotificationProgressId(state) {return state.notifications.progressId}

  function getNotificationsCount(state) {return state.notifications.count}

  function getPlayerRunning(state) {return state.player.running}

  function getPlayerIndex(state) {return state.player.index}

  function getPlayerMaxIndex(state) {return Math.ceil(state.player.maxIndex)}

  function getPlayerFlagIndex(state) {return state.player.flagIndex}

  function getPlayerFlagActive(state) {return getPlayerFlagIndex(state) !== 0}

  function getPlayerSlowMotion(state) {return state.player.slowMotion}

  function getPlayerReversed(state) {return (state.player.reverse || state.player.rewind) && !state.player.fastForward}

  function getPlayerFrameRateSetting(state) {return state.renderer.skeleton === 0 ? state.player.settings.interpolate : false}

  function getPlayerSettings(state) {return state.player.settings}

  function getPlayerFps(state) {return state.player.settings.fps}

  const getPlayerTime = Reselect.createSelector(
    getPlayerIndex,
    getPlayerFps,
    (index, fps) => index / fps
  )

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
        baseRate *= slowMotionRate
      }
      if (running && (fastForward || rewind)) {
        baseRate *= fastForwardRate
      }
      return baseRate
    }
  )

  function getTrackSaverProgress(state) {return state.progress['SAVE_TRACK']}

  function getTrackSaverInProgress(state) {return state.progress['SAVE_TRACK'].percent != null}

  function getTrackLoaderProgress(state) {return state.progress['LOAD_TRACK']}

  function getAutosaveProgress(state) {return state.progress['AUTOSAVE']}

  function getProgress(state, progressId) {
    let progress = state.progress[progressId]

    if (!progress) throw new Error('unknown progressId:', progressId)

    return progress
  }

  function getPixelRatio(state) {return state.renderer.pixelRatio}

  const getRendererScenes = Reselect.createStructuredSelector({
    customEditScene: state => state.renderer.edit,
    customPlaybackScene: state => state.renderer.playback
  })

  function getMillionsEnabled(state) {return state.renderer.millionsEnabled}

  const getSpriteSheet = Reselect.createSelector(
    getNumRiders,
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

  function getOnionBeginIndex(state) {return Math.max(0, Math.ceil(state.player.index) - state.renderer.onionSkinFramesBefore)}

  function getOnionEndIndex(state) {return Math.min(state.player.maxIndex, Math.max(0, Math.floor(state.player.index) + state.renderer.onionSkinFramesAfter))}

  function getOnionSkinActive(state) {return state.renderer.onionSkin}

  function getPlaybackPreview(state) {return state.renderer.playbackPreview}

  function getColorPlayback(state) {return state.renderer.colorPlayback}

  const getViewOptions = Reselect.createStructuredSelector({
    color: state => getPlayerRunning(state) ? getColorPlayback(state) : !getPlaybackPreview(state),
    flag: state => state.renderer.flag != null ? state.renderer.flag : !(getInViewer(state) && getPlayerRunning(state)),
    skeleton: state => state.renderer.skeleton
  })

  function getSimulatorTrack(state) {return state.simulator.engine}

  function getSimulatorCommittedTrack(state) {return state.simulator.committedEngine}

  function getSimulatorLines(state) {return state.simulator.engine.linesList}

  function getSimulatorCommittedLines(state) {return state.simulator.committedEngine.linesList}

  // for compatibility
  function getSimulatorStartPos(state) {return state.simulator.engine.start.position}

  function getSimulatorVersion(state) {return state.simulator.engine.isLegacy() ? '6.1' : '6.2'}

  function getSimulatorTrackTotalLineCount(state) {return state.simulator.engine.linesList.size()}

  function getTrackIsEmpty(state) {return getSimulatorTrackTotalLineCount(state) === 0}

  function getTrackIsDirty(state) {return state.simulator.committedEngine !== state.simulator.lastSavedEngine}

  const getSimulatorLineCount = Reselect.createSelector(
    state => state.simulator.engine,
    (engine) => {
      let { total, ...lineCounts } = engine.getLineCounts()
      return { total, lineCounts }
    }
  )

  function getSimulatorTotalLineCount(state) {return getSimulatorLineCount(state).total}

  function getTrackLayers(state) {return getSimulatorTrack(state).engine.state.layers}

  function getTrackActiveLayerId(state) {return getSimulatorTrack(state).engine.state.activeLayerId}

  function getActiveLayerEditable(state) {
    const id = getTrackActiveLayerId(state)
    const layers = getTrackLayers(state)

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

  function getRiders(state) {return state.simulator.engine.engine.state.riders}

  function getCommittedRiders(state) {return state.simulator.committedEngine.engine.state.riders}

  function getNumRiders(state) {return getRiders(state).length}

  function getSavedTracks(state) {return state.savedTracks}

  function getSavedTracksAvailable(state) {return !!state.savedTracks}

  function getAutosaveEnabled(state) {return state.autosaveEnabled}

  function getToolState(state, toolId) {return state.toolState[toolId]}

  function getSelectedTool(state) {return state.selectedTool}

  const colorPickerOpenSelector = Reselect.createSelector(
    getSelectedTool,
    (selectedTool) => window.Tools[selectedTool].usesSwatches
  )

  const getLineTypePickerActive = colorPickerOpenSelector

  function getTrackLinesLocked(state) {return state.trackLinesLocked}

  function getSelectedLineType(state) {return getTrackLinesLocked(state) ? Enums.LINE_TYPES.SCENERY : state.selectedLineType}

  function getCursor(state) {return window.Tools[state.selectedTool].getCursor(state)}

  function getToolSceneLayer(state) {return window.Tools[state.selectedTool].getSceneLayer(state)}

  function getTrackIsLocalFile(state) {return state.trackData.localFile}

  function getTrackScript(state) {return state.trackData.script}

  const getTrackProps = Reselect.createStructuredSelector({
    riders: getCommittedRiders,
    version: getSimulatorVersion,
    audio: getLocalAudioProps,
    layers: getTrackLayers,
    script: getTrackScript
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
    details: getTrackDetails,
    cloudInfo: getTrackCloudInfo
  })

  const getTrackInfo = Reselect.createStructuredSelector({
    duration: state => getPlayerMaxIndex(state)
  })

  const getTrackObjectForAutosave = Reselect.createStructuredSelector({
    props: getTrackProps,
    details: getTrackDetails,
    info: getTrackInfo,
    cloudInfo: getTrackCloudInfo,
    localFile: getTrackIsLocalFile
  })

  function getTrackObjectForSaving(state, trackDetails) {return ({
    label: trackDetails.title,
    creator: trackDetails.creator,
    description: trackDetails.description,
    duration: getPlayerMaxIndex(state),
    version: getSimulatorVersion(state),
    audio: getLocalAudioProps(state),
    startPosition: getSimulatorStartPos(state),
    riders: getCommittedRiders(state),
    lines: getSimulatorLines(state).toJS(),
    layers: getTrackLayers(state).toJS(),
    script: getTrackScript(state)
  })}

  function getControlsActive(state) {return state.ui.controlsActive}

  function getViews(state) {return state.views}

  function getSidebarPage(state) {return getViews(state)[Enums.VIEWS.SIDEBAR]}

  function getMainPage(state) {return getViews(state)[Enums.VIEWS.MAIN]}

  function getInEditor(state) {return state.views[Enums.VIEWS.MAIN] === Enums.PAGES.MAIN.EDITOR}

  function getInViewer(state) {return state.views[Enums.VIEWS.MAIN] === Enums.PAGES.MAIN.VIEWER || state.views[Enums.VIEWS.MAIN] === Enums.PAGES.MAIN.EDITABLE_VIEWER}

  function getInTrackSaver(state) {return state.views[Enums.VIEWS.TRACK_SAVER] === Enums.PAGES.TRACK_SAVER.SAVE}

  function getInTrackLoader(state) {return state.views[Enums.VIEWS.TRACK_LOADER] === Enums.PAGES.TRACK_LOADER.LOAD}

  function getInVideoExporter(state) {return state.views[Enums.VIEWS.VIDEO_EXPORTER] === Enums.PAGES.VIDEO_EXPORTER.EXPORT}

  function getHasOverlay(state) {return (
    state.views[Enums.VIEWS.ABOUT] ||
    state.views[Enums.VIEWS.TRACK_LOADER] ||
    state.views[Enums.VIEWS.TRACK_SAVER] ||
    state.views[Enums.VIEWS.VIDEO_EXPORTER] ||
    state.views[Enums.VIEWS.RELEASE_NOTES]
  )}

  return {colorPickerOpenSelector, getActiveLayerEditable, getAudioEnabled, getAudioFileLoading, getAudioOffset, getAudioProps, getAutosaveEnabled, getAutosaveProgress, getColorPlayback, getCommandsToHotkeys, getCommittedRiders, getControlsActive, getCurrentCamera, getCurrentPlayerRate, getCursor, getEditorCamera, getEditorDimensions, getEditorFollowerFocus, getEditorFollowerFocus, getEditorPosition, getEditorZoom, getHasOverlay, getInEditor, getInTrackLoader, getInTrackSaver, getInVideoExporter, getInViewer, getLineTypePickerActive, getLocalAudioProps, getMainPage, getMillionsEnabled, getModifier, getModifiersActive, getNotification, getNotificationProgressId, getNotificationsCount, getNumRiders, getOnionBeginIndex, getOnionEndIndex, getOnionSkinActive, getPixelRatio, getPlaybackCamera, getPlaybackCameraFocus, getPlaybackCameraParams, getPlaybackDimensions, getPlaybackFixedPosition, getPlaybackIsFixedPosition, getPlaybackPreview, getPlaybackZoom, getPlayerFlagActive, getPlayerFlagIndex, getPlayerFps, getPlayerFrameRateSetting, getPlayerIndex, getPlayerMaxIndex, getPlayerReversed, getPlayerRunning, getPlayerSettings, getPlayerSlowMotion, getPlayerTime, getProgress, getRendererScenes, getRiders, getSavedTracks, getSavedTracksAvailable, getSelectedLineType, getSelectedLineType, getSelectedTool, getSidebarPage, getSimulatorCommittedLines, getSimulatorCommittedTrack, getSimulatorHasRedo, getSimulatorHasUndo, getSimulatorLineCount, getSimulatorLines, getSimulatorStartPos, getSimulatorTotalLineCount, getSimulatorTrack, getSimulatorTrackTotalLineCount, getSimulatorVersion, getSpriteSheet, getToolSceneLayer, getToolState, getTrackActiveLayerId, getTrackCloudInfo, getTrackDetails, getTrackDetailsWithCloudInfo, getTrackInfo, getTrackIsDirty, getTrackIsEmpty, getTrackIsLocalFile, getTrackLayers, getTrackLinesLocked, getTrackLoaderProgress, getTrackObjectForAutosave, getTrackObjectForSaving, getTrackProps, getTrackSaverInProgress, getTrackSaverProgress, getTrackScript, getTriggerCounts, getUseEditorFollower, getViewOptions, getViews, getZoomSliderActive, hasPlaybackDimensions, isAudioFileLoading}
})()