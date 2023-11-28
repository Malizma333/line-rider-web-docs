/*
reselect.min.js

The MIT License (MIT)

Copyright (c) 2015-2018 Reselect Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Reselect={});}(this,(function(e){"use strict";var t="NOT_FOUND";var n=function(e,t){return e===t;};function r(e,r){var u,o,i="object"==typeof r?r:{equalityCheck:r},c=i.equalityCheck,f=i.maxSize,a=void 0===f?1:f,l=i.resultEqualityCheck,p=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,u=0;r>u;u++)if(!e(t[u],n[u]))return!1;return!0;};}(void 0===c?n:c),s=1===a?(u=p,{get:function(e){return o&&u(o.key,e)?o.value:t;},put:function(e,t){o={key:e,value:t};},getEntries:function(){return o?[o]:[];},clear:function(){o=void 0;}}):function(e,n){var r=[];function u(e){var u=r.findIndex((function(t){return n(e,t.key);}));if(u>-1){var o=r[u];return u>0&&(r.splice(u,1),r.unshift(o)),o.value;}return t;}return{get:u,put:function(n,o){u(n)===t&&(r.unshift({key:n,value:o}),r.length>e&&r.pop());},getEntries:function(){return r;},clear:function(){r=[];}};}(a,p);function v(){var n=s.get(arguments);if(n===t){if(n=e.apply(null,arguments),l){var r=s.getEntries(),u=r.find((function(e){return l(e.value,n);}));u&&(n=u.value);}s.put(arguments,n);}return n;}return v.clearCache=function(){return s.clear();},v;}function u(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e;}))){var n=t.map((function(e){return"function"==typeof e?"function "+(e.name||"unnamed")+"()":typeof e;})).join(", ");throw Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]");}return t;}function o(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=Array(t),o=0;t>o;o++)r[o]=arguments[o];var i,c=0,f={memoizeOptions:void 0},a=r.pop();if("object"==typeof a&&(f=a,a=r.pop()),"function"!=typeof a)throw Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=f,p=l.memoizeOptions,s=void 0===p?n:p,v=Array.isArray(s)?s:[s],y=u(r),d=e.apply(void 0,[function(){return c++,a.apply(null,arguments);}].concat(v)),h=e((function(){for(var e=[],t=y.length,n=0;t>n;n++)e.push(y[n].apply(null,arguments));return i=d.apply(null,e);}));return Object.assign(h,{resultFunc:a,memoizedResultFunc:d,dependencies:y,lastResult:function(){return i;},recomputations:function(){return c;},resetRecomputations:function(){return c=0;}}),h;};return o;}var i=o(r);e.createSelector=i,e.createSelectorCreator=o,e.createStructuredSelector=function(e,t){if(void 0===t&&(t=i),"object"!=typeof e)throw Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e),r=t(n.map((function(t){return e[t];})),(function(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return t.reduce((function(e,t,r){return e[n[r]]=t,e;}),{});}));return r;},e.defaultEqualityCheck=n,e.defaultMemoize=r,Object.defineProperty(e,"__esModule",{value:!0});}));

// TODO enforce single quotes linting
// TODO replace enum instances and use cases with purely jsdoc comments
// TODO possibly split up everything into multiple files?
// TODO create testing for actions and selectors
// TODO convert jsdoc comments into multiple markdown files
// TODO minify everything into one file

/**
* @typedef {{
*   enabled: boolean
*   name: ?string
*   offset: number
*   path: ?string
*   volume: number
* }} AudioData
* 
* @typedef {{
*   name: ?string
*   offset: number
*   path: ?string
* }} AudioDataFragment
* 
* @typedef {{
*   error: ?string
*   loadingFile: boolean
* }} AudioLoader
* 
* @typedef {{
*   cloudInfo: CloudInfo
*   details: TrackDetails
*   info: {duration: number}
*   localFile: boolean
*   props: TrackFragment
* }} AutosaveData
* 
* @typedef {{
*   position: V2
*   zoom: number
* }} Camera
* 
* @typedef {{
*   derivativeKey: string
*   derivedFrom: DerivedFrom
*   masterKey: string
*   saveTime: number
*   trackId: number
*   versionTitle: string
*   versionId: string
* }} CloudInfo
* 
* @typedef {{
*   cloudInfo: CloudInfo
*   details: TrackDetails
* }} CloudSave
* 
* @typedef {{
*   "About"?: string
*   "Main"?: string
*   "Sidebar"?: string
*   "TrackLoader"?: string
*   "TrackSaver"?: string
*   "tutorial"?: string
*   "undefined": ?
* }} CurrentViews
* 
* @typedef {{
*   creator: string
*   title: string
*   version: '6.1' | '6.2'
* }} DerivedFrom
* 
* @typedef {{
*   height: number
*   width: number
* }} Dimensions
* 
* @typedef {{
*   autoHide: boolean
*   message: string
*   open: boolean
* }} EditorNotification
* 
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
* 
* @typedef {{
*   editable: boolean
*   id: number
*   name: string
*   visible: boolean
* }} Layer
* 
* @typedef {{
*   id?: number
*   type: 0 | 1 | 2
*   x1: number
*   y1: number
*   x2: number
*   y2: number
*   flipped?: boolean
*   leftExtended?: boolean
*   rightExtended?: boolean
*   multiplier?: number
*   layer?: number
* }} Line
* 
* @typedef {{
*   extension?: number
*   flipped?: boolean
*   id: number
*   invLengthSq?: number
*   layer?: number
*   leftBound?: number
*   leftExtended?: boolean
*   length: number
*   norm: V2
*   p1: V2
*   p2: V2
*   rightBound?: number
*   rightExtended?: boolean
*   vec: V2
* }} LineBase
* 
* @typedef {{
*   baseRate?: number
*   fastForward?: number
*   fps?: number
*   interpolate?: boolean | number
*   maxDuration?: number
*   slowMotion?: number
* }} PlayerSettings
* 
* @typedef {{
*   error: ?string
*   percent: ?(true | number)
*   status: ?boolean
* }} Progress
* 
* @typedef {{
*   remountable: boolean
*   startAngle: number
*   startPosition: {x: number, y: number}
*   startVelocity: {x: number, y: number}
* }} Rider
* 
* @typedef {{
*   audio?: AudioDataFragment
*   creator?: string
*   description?: string
*   duration?: number
*   label?: string
*   layers?: Layer[]
*   lines?: Line[]
*   riders?: Rider[]
*   script?: string
*   startPosition?: {x: number, y: number}
*   version: '6.1' | '6.2'
*   viewOnly?: boolean
* }} Track
* 
* @typedef {{
*   cloudInfo: TrackDetails
*   details: CloudInfo
*   removed?: boolean
* }} TrackData
* 
* @typedef {{
*   creator: string
*   description: string
*   title: string
* }} TrackDetails
* 
* @typedef {{
*   audio: AudioDataFragment
*   layers: {buffer: Layer[]}
*   riders: {buffer: Rider[]}
*   script: string
*   version: '6.1' | '6.2'
* }} TrackFragment
* 
* @typedef {{
*   status: {
*     inactive: boolean
*   }
* }} ToolState
* 
* @typedef {{
*   x: number
*   y: number
* }} V2
* 
* @typedef {{
*   height: number
*   width: number
*   zoom: number
* }} Viewbox
* 
* @typedef {{
*   color: boolean
*   flag: ?boolean
*   skeleton: number
* }} ViewSettings
*/

const Enums = (function() {
  /** Hotkey ids for various commands */
  const COMMANDS = {
    TRIGGERS: {
      ACCEL_SWATCH: "triggers.accelSwatch",
      ERASER_TOOL: "triggers.eraserTool",
      FLAG: "triggers.flag",
      GO_TO_START: "triggers.goToStart",
      LINE_TOOL: "triggers.lineTool",
      NEXT_FRAME: "triggers.nextFrame",
      NORMAL_SWATCH: "triggers.normalSwatch",
      ONION_SKINNING: "triggers.toggleOnionSkin",
      OPEN: "triggers.open",
      PAN_TOOL: "triggers.panTool",
      PENCIL_TOOL: "triggers.pencilTool",
      PLAY: "triggers.play",
      PLAY_EDITOR_ZOOM: "triggers.playWithEditorZoom",
      PLAY_PAUSE: "triggers.playPause",
      PLAY_PAUSE_EDITOR_ZOOM: "triggers.playWithEditorZoomPause",
      PLAYBACK_CAMERA: "triggers.showPlaybackCamera",
      PLAYBACK_PREVIEW: "triggers.togglePlaybackPreview",
      PREV_FRAME: "triggers.prevFrame",
      REDO: "triggers.redo",
      REMOVE_LAST_LINE: "triggers.removeLastLine",
      SAVE: "triggers.save",
      SCENERY_SWATCH: "triggers.scenerySwatch",
      Select: {
        CONVERT_ACCEL: "triggers.select.convertToAccel",
        CONVERT_NORMAL: "triggers.select.convertToNormal",
        CONVERT_SCENERY: "triggers.select.convertToScenery",
        COPY: "triggers.select.copy",
        COPY_CLIPBOARD: "triggers.select.clipboard.copy",
        DESELECT: "triggers.select.deselect",
        DUPLICATE: "triggers.select.duplicate",
        MOVE_DOWN: "triggers.select.moveDown",
        MOVE_LEFT: "triggers.select.moveLeft",
        MOVE_RIGHT: "triggers.select.moveRight",
        MOVE_UP: "triggers.select.moveUp",
        PASTE: "triggers.select.paste",
        PASTE_CLIPBOARD: "triggers.select.clipboard.paste",
        REVERSE_LINE: "triggers.select.reverseLine"
      },
      SELECT_TOOL: "triggers.selectTool",
      SKELETON_VIEW: "triggers.toggleSkeleton",
      STOP: "triggers.stop",
      TOGGLE_SLOW: "triggers.toggleSlowMotion",
      UNDO: "triggers.undo",
      ZOOM_TOOL: "triggers.zoomTool"
    },
    MODIFIERS: {
      ANGLE_LOCK: "modifiers.angleLock",
      ANGLE_SNAP: "modifiers.angleSnap",
      FAST_FORWARD: "modifiers.fastForward",
      FLIP_LINE: "modifiers.flipLine",
      FORCE_ZOOM: "modifiers.forceZoom",
      LOCK_EDITOR_CAM: "modifiers.lockEditorCamera",
      NO_POINT_SNAP: "modifiers.disablePointSnap",
      PLAYBACK_CAM_MDF: "modifiers.showPlaybackCamera",
      REWIND: "modifiers.rewind",
      SELECT: {
        ADD: "modifiers.select.add",
        DUPLICATE: "modifiers.select.duplicate",
        FINE_NUDGE: "modifiers.select.fineNudge",
        POINT: "modifiers.select.singlePoint",
        SUBTRACT: "modifiers.select.subtract",
        TRANSFORM_STATE: "modifiers.select.transformState"
      }
    }
  };

  /** Numerical representation of line types */
  const LINE_TYPES = {
    REGULAR: 0,
    ACCEL: 1,
    SCENERY: 2
  };

  /** Available editor tools */
  const TOOLS = {
    ADJUST_START: "ADJUST_START_TOOL",
    ERASER: "ERASER_TOOL",
    LINE: "LINE_TOOL",
    PAN: "PAN_TOOL",
    PENCIL: "PENCIL_TOOL",
    SELECT: "SELECT_TOOL",
    ZOOM: "ZOOM_TOOL"
  };

  /** Modes of playback refresh rates */
  const PLAYBACK_MODES = {
    FORTY: false,
    SIXTY: 60,
    SMOOTH: true
  };

  /** Advanced skelton views */
  const SKELETON_MODES = {
    NORMAL: 0,
    NORMAL_SKELETON: 1,
    SKELETON: 2
  };

  /** Separate viewable pages */
  const VIEWS = {
    ABOUT: "ABOUT",
    MAIN: "MAIN",
    RELEASE_NOTES: "RELEASE_NOTES",
    SIDEBAR: "SIDEBAR",
    TRACK_LOADER: "TRACK_LOADER",
    TRACK_SAVER: "TRACK_SAVER",
    VIDEO_EXPORTER: "VIDEO_EXPORTER"
  };

  /** Subpages within each of the viewable pages */
  const PAGES = {
    [VIEWS.MAIN]: {
      EDITABLE_VIEWER: "editable-viewer",
      EDITOR: "editor",
      VIEWER: "viewer"
    },
    [VIEWS.SIDEBAR]: {
      HELP: "help",
      INFO: "info",
      SETTINGS: "settings",
      SHARE: "share"
    },
    [VIEWS.ABOUT]: {
      LAUNCH: "launch",
      LOADING: "loading"
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
  };

  return {
    COMMANDS,
    LINE_TYPES,
    PLAYBACK_MODES,
    TOOLS,
    SKELETON_MODES,
    VIEWS,
    PAGES
  };
})();

/**
* @summary Namespace of callable actions
* @description
* This object hosts actions that can be used to affect the redux state tree.
* 
* These actions don't do anything on their own. To affect anything, they
* must be used with the store.dispatch() redux function.
* @example
* // This returns the appropriate object for toggling audio
* const toggleAudioAction = Actions.toggleAudio();
* 
* // This dispatches the action to the redux store
* store.dispatch(toggleAudioAction);
*/
const Actions = (function() {
  /** Toggle audio volume */
  const toggleAudio = () => ({ type: 'TOGGLE_AUDIO' });

  /** Remove the current audio file */
  const removeAudio = () => ({ type: 'REMOVE_AUDIO' });

  /**
  * Set the offset of the audio file
  * @param {number} offset Seconds After Start
  * @example
  * // Set audio to start playing 2 seconds in
  * Actions.setAudioOffset(2)
  */
  const setAudioOffset = (offset = 0) => ({
    type: 'SET_AUDIO_OFFSET',
    payload: offset
  });

  /**
  * Set the audio volume
  * @param {number} volume Percent Volume (0 - 1)
  * @example
  * // Set audio volume to 50%
  * Actions.setAudioVolume(0.5)
  */
  const setAudioVolume = (volume = 1) => ({
    type: 'SET_AUDIO_VOLUME',
    payload: volume
  });

  /** Load the last cached autosave */
  const loadAutosave = () => ({ type: 'LOAD_AUTOSAVE' });

  /**
  * Set the properties of the editor camera
  * @param {{x: number, y: number}} position Camera Position
  * @param {number} zoom Camera Zoom
  * @example
  * // Move editor camera to (0,-20) and apply a zoom of 5
  * Actions.setEditorCamera({x: 0, y: -20}, 5)
  */
  const setEditorCamera = (position, zoom) => ({
    type: 'SET_EDITOR_CAMERA',
    payload: { position, zoom }
  });

  /**
  * Set which rider to focus on in the editor
  * @param {number} focusIndex Rider Index (Starts at 0)
  * @example
  * // Set the editor camera to focus on the second rider
  * Actions.setEditorFollowerFocus(1)
  */
  const setEditorFollowerFocus = (focusIndex = 0) => ({
    type: 'SET_EDITOR_FOLLOWER_FOCUS',
    payload: focusIndex
  });

  /**
  * Set zoom of playback camera
  * @param {number} zoom Playback Zoom
  * @example
  * // Set the playback zoom to 4
  * Actions.setPlaybackZoom(4)
  */
  const setPlaybackZoom = (zoom = 2) => ({
    type: 'SET_PLAYBACK_ZOOM',
    payload: zoom
  });

  /**
  * Set the weight each rider has on where the camera focuses
  * @param {number[]} focusList Relative Weights
  * @example
  * // Set the playback focus between riders 1 and 3
  * Actions.setPlaybackFollowerFocus([1, 0, 1])
  */
  const setPlaybackFollowerFocus = (focusList) => ({
    type: 'SET_PLAYBACK_FOLLOWER_FOCUS',
    payload: focusList
  });

  /** Toggle whether the editor camera should keep the target rider in view */
  const toggleEditorFollower = () => ({ type: 'TOGGLE_SETTING', payload: {key: 'cam.useEditorFollower'} });

  /**
  * Set viewport dimensions of the playback camera
  * @param {{width: number, height: number}} dimensions Camera Dimensions
  * @example
  * // Set the viewport to be 1920 x 1080
  * Actions.setPlaybackDimensions({ width: 1920, height: 1080 })
  */
  const setPlaybackDimensions = (dimensions) => ({
    type: 'SET_PLAYBACK_DIMENSIONS',
    payload: dimensions
  });

  /**
  * Trigger the result of a triggerable hotkey being pressed
  * @param {string} command Trigger Command
  * @example
  * // Toggle skeleton view
  * Actions.triggerCommand(Enums.COMMANDS.TRIGGERS.SKELETON_VIEW)
  */
  const triggerCommand = (command) => ({
    type: 'TRIGGER_COMMAND',
    payload: command,
    meta: { ignorable: true }
  });

  /**
  * Trigger the beginning of a modifier hotkey being pressed
  * @param {string} command Modifier Command
  * @example
  * // Start fast-forwarding playback
  * Actions.beginModifierCommand(Enums.COMMANDS.MODIFIERS.FAST_FORWARD)
  */
  const beginModifierCommand = (command) => ({
    type: 'BEGIN_MODIFIER_COMMAND',
    payload: command,
    meta: { ignorable: true }
  });

  /**
  * Trigger the end of a modifier hotkey being pressed
  * @param {string} command Modifier Command
  * @example
  * // Stop fast-forwarding playback
  * Actions.endModifierCommand(Enums.COMMANDS.MODIFIERS.FAST_FORWARD)
  */
  const endModifierCommand = (command) => ({
    type: 'END_MODIFIER_COMMAND',
    payload: command,
    meta: { ignorable: true }
  });

  /**
  * Change hotkeys given a series of commands and the new key value
  * @param {{string: string}} commandHotkeys Hotkey Dictionary
  * @example
  * // Set the flag hotkey to "f"
  * Actions.setCommandHotkeys({Enums.COMMANDS.TRIGGERS.FLAG: 'f'})
  */
  const setCommandHotkeys = (commandHotkeys) => ({
    type: 'SET_COMMAND_HOTKEYS',
    payload: commandHotkeys
  });

  /** Toggle locked track lines */
  const toggleTrackLinesLocked = () => ({ type: 'TOGGLE_TRACK_LINES_LOCKED' });

  /**
  * Change the color swatch of the current tool (if available)
  * @param {number} lineType Color Swatch
  * @example
  * // Set color swatch to blue
  * Actions.selectLineType(Enums.LINE_TYPES.REGULAR)
  */
  const selectLineType = (lineType = 0) => ({
    type: 'SELECT_LINE_TYPE',
    payload: lineType
  });

  /**
  * Change current tool to target tool
  * @param {string} tool Target Tool
  * @example
  * // Set tool to eraser
  * Actions.setTool(Enums.TOOLS.ERASER)
  */
  const setTool = (tool = "PENCIL_TOOL") => ({
    type: 'SET_TOOL',
    payload: tool
  });

  /**
  * Update lines given a subaction and a list of lines to add/remove
  * @param {string} name Subaction Name
  * @param {number[]} linesToRemove Remove Lines by Id
  * @param {Line[]} linesToAdd Add Lines by Props
  * @example
  * // Add a horizontal green line
  * Action.updateLines(
  *   'ADD_LINE',
  *   null,
  *   [{x1:0, y1:0, x2:0, y2:5, type:Enums.LINE_TYPES.SCENERY}]
  * )
  * Action.commitTrackChanges()
  * Action.revertTrackChanges()
  */
  const updateLines = (name, linesToRemove, linesToAdd) => ({
    type: 'UPDATE_LINES',
    payload: { linesToRemove, linesToAdd, initialLoad: false },
    meta: { name }
  });

  /**
  * Add a list of lines to the currently active layer
  * @param {Line[]} lines Line Array
  * @example
  * // Add a triangle
  * Action.addLines([
  *   {x1:0, y1:0, x2:5, y2:0, type:Enums.LINE_TYPES.SCENERY},
  *   {x1:5, y1:0, x2:5, y2:5, type:Enums.LINE_TYPES.SCENERY},
  *   {x1:5, y1:5, x2:0, y2:0, type:Enums.LINE_TYPES.SCENERY}
  * ])
  * Action.commitTrackChanges()
  * Action.revertTrackChanges()
  */
  const addLines = (lines) => updateLines('ADD_LINES', null, lines);

  /**
  * Remove a list of lines given their ids
  * @param {number[]} lineIds Line Id Array
  * @example
  * // Remove the first 3 lines
  * Action.removeLines([1,2,3])
  * Action.commitTrackChanges()
  * Action.revertTrackChanges() 
  */
  const removeLines = (lineIds) => updateLines('REMOVE_LINES', lineIds, null);

  /** Decrement engine state to previous point in history if available */
  const undoAction = () => ({ type: 'UNDO' });

  /** Increment engine state to next point in history if available */
  const redoAction = () => ({ type: 'REDO' });

  /** Commit track changes to committed engine state */
  const commitTrackChanges = () => ({ type: 'COMMIT_TRACK_CHANGES' });

  /** Clear track changes from uncommitted engine state */
  const revertTrackChanges = () => ({ type: 'REVERT_TRACK_CHANGES', meta: { ignorable: true } });

  /** Add a new layer */
  const addLayer = () => ({ type: 'ADD_LAYER' });

  /**
  * Remove layer given a layer id
  * @param {number} id Target Layer Id
  * @example
  * // Remove layer 1
  * Actions.removeLayer(1)
  * Action.commitTrackChanges()
  * Action.revertTrackChanges() 
  */
  const removeLayer = (id) => ({
    type: 'REMOVE_LAYER',
    payload: {id}
  });

  /**
  * Change index of a layer in the layer buffer
  * @param {number} id Target Layer Id
  * @param {number} index New Index
  * @example
  * // Move layer 1 to the second position above the base layer
  * Actions.moveLayer(1, 2)
  * Action.commitTrackChanges()
  * Action.revertTrackChanges() 
  */
  const moveLayer = (id, index) => ({
    type: 'MOVE_LAYER',
    payload: {id, index}
  });

  /**
  * Rename target layer
  * @param {number} id Target Layer Id
  * @param {string} name New Name
  * @example
  * // Rename layer 1 to "Background Layer"
  * Actions.renameLayer(1, "Background Layer")
  * Action.commitTrackChanges()
  * Action.revertTrackChanges() 
  */
  const renameLayer = (id, name) => ({
    type: 'RENAME_LAYER',
    payload: {id, name}
  });

  /**
  * Set the active layer to target layer
  * @param {number} id Target Layer Id
  * @example
  * // Set the base layer to be the active layer
  * Actions.setLayerActive(0)
  * Action.commitTrackChanges()
  * Action.revertTrackChanges() 
  */
  const setLayerActive = (id) => ({
    type: 'SET_LAYER_ACTIVE',
    payload: {id}
  });

  /**
  * Toggle target layer visiblity
  * @param {number} id Target Layer Id
  * @param {boolean} visible Layer Visible
  * @example
  * // Set Layer 1 to be invisible
  * Actions.setLayerVisible(1, false)
  * Action.commitTrackChanges()
  * Action.revertTrackChanges() 
  */
  const setLayerVisible = (id, visible = true) => ({
    type: 'SET_LAYER_VISIBLE',
    payload: {id, visible}
  });

  /**
  * Toggles target layer editability
  * @param {number} id Target Layer Id
  * @param {boolean} editable Layer Editable 
  * @example
  * // Set Layer 2 to be editable
  * Actions.setLayerEditable(2, true)
  * Action.commitTrackChanges()
  * Action.revertTrackChanges() 
  */
  const setLayerEditable = (id, editable = true) => ({
    type: 'SET_LAYER_EDITABLE',
    payload: {id, editable}
  });

  /**
  * Set the list of riders
  * @param {Rider[]} riders Rider Array
  * @example
  * // Remove all riders
  * Actions.setRiders([])
  * Action.commitTrackChanges()
  * Action.revertTrackChanges()
  */
  const setRiders = (riders) => ({
    type: 'SET_RIDERS',
    payload: riders
  });

  /**
  * Show notification in top-right corner
  * @param {string} message Notification Message
  * @param {boolean} [autoHide] Hide Message After Timer
  * @example
  * // Show a "Hello, world!" notification
  * Actions.showNotification("Hello, world!")
  */
  const showNotification = (message, autoHide = true) => ({
    type: 'notifications/SHOW_NOTIFICATION',
    payload: { message, autoHide }
  });

  /**
  * Hide notification based on message as id
  * @param {string} message Message / Id
  * @example
  * // Hide a notification with the message "Hello, world!"
  * Actions.hideNotification("Hello, world!")
  */
  const hideNotification = (message) => ({
    type: 'notifications/HIDE_NOTIFICATION',
    payload: message
  });

  /**
  * Set the fps of the playback renderer
  * @param {number} fps Target Fps
  * @example
  * // Set the playback to 24 fps
  * Actions.setPlayerFps(24)
  */
  const setPlayerFps = (fps = 40) => ({
    type: 'SET_PLAYER_FPS',
    payload: fps
  });

  /** Toggle smooth playback */
  const toggleInterpolate = () => ({ type: 'TOGGLE_INTERPOLATE' });
  
  /** 
  * Toggle different smooth playback modes
  * @param {boolean|number} playbackMode Playback Mode
  * @example
  * // Set playback mode to 60 fps
  * Actions.setInterpolate(60)
  */
  const setInterpolate = (playbackMode = true) => ({
    type: 'SET_INTERPOLATE',
    payload: playbackMode
  });

  /** Toggle slow motion playback */
  const toggleSlowMotion = () => ({ type: 'TOGGLE_SLOW_MOTION' });

  /** Increment player timeline index if possible */
  const incPlayerIndex = () => ({ type: 'INC_PLAYER_INDEX' });

  /** Decrement player timeline index if possible */
  const decPlayerIndex = () => ({ type: 'DEC_PLAYER_INDEX' });

  /** Start playback */
  const startPlayer = () => ({ type: 'START_PLAYER' });

  /** Stop playback */
  const stopPlayer = () => ({ type: 'STOP_PLAYER' });

  /** Set the flag at the current timeline position */
  const setFlag = () => ({ type: 'SET_FLAG' });

  /**
  * Set the timeline index
  * @param {number} index Index
  * @example
  * // Set the frame index to the beginning
  * Actions.setFrameIndex(0)
  */
  const setFrameIndex = (index) => ({
    type: 'SET_PLAYER_INDEX',
    payload: index
  });

  /**
  * Set the max index of the timeline
  * @param {number} maxIndex Max Index
  * @example
  * // Set the max index to 80 frames
  * Actions.setPlayerMaxIndex(80)
  */
  const setPlayerMaxIndex = (maxIndex = 1200) => ({
    type: 'SET_PLAYER_MAX_INDEX',
    payload: maxIndex
  });

  /**
  * Set the flag index to a specific index
  * @param {number} flagIndex Target Index
  * @example
  * // Set the flag index to frame 40
  * Actions.setFlagIndex(40)
  */
  const setFlagIndex = (flagIndex) => ({
    type: 'SET_FLAG_INDEX',
    payload: flagIndex
  });

  /**
  * Toggle whether the track is playing
  * @param {boolean} running Playback Running
  * @example
  * // Play the track
  * Actions.setPlayerRunning(true)
  */
  const setPlayerRunning = (running) => ({
    type: 'SET_PLAYER_RUNNING',
    payload: running
  });

  /**
  * Toggle timeline fast forward
  * @param {boolean} fastForward Fast Forward
  * @example
  * // Fast forward track
  * Actions.setPlayerFastForward(true)
  */
  const setPlayerFastForward = (fastForward) => ({
    type: 'SET_PLAYER_FAST_FORWARD',
    payload: fastForward
  });

  /**
  * Toggle timeline rewind
  * @param {boolean} rewind Rewind
  * @example
  * // Rewind track
  * Actions.setPlayerRewind(true)
  */
  const setPlayerRewind = (rewind) => ({
    type: 'SET_PLAYER_REWIND',
    payload: rewind
  });

  /**
  * Toggle whether the timeline should stop at the max
  * @param {boolean} stopAtEnd
  * // Set track to not stop at the max index
  * Actions.setPlayerStopAtEnd(false)
  */
  const setPlayerStopAtEnd = (stopAtEnd = false) => ({
    type: 'SET_PLAYER_STOP_AT_END',
    payload: stopAtEnd
  });

  /**
  * Set configuration settings for the timeline player
  * @param {PlayerSettings} [settings] Player Settings 
  * @example
  * // Set base playback rate to be 2x speed
  * Actions.setPlayerSettings({
  *   baseRate: 2
  * })
  */
  const setPlayerSettings = (settings) => ({
    type: 'SET_PLAYER_SETTINGS',
    payload: settings
  });

  /**
  * Toggle a view option given a key and the new value
  * @param {string} viewOption Target View Option
  * @param {?boolean} value New Value
  * @example
  * // Turn off playback preview
  * Actions.setViewOption('playbackPreview', false)
  */
  const setViewOption = (viewOption, value) => ({
    type: 'SET_VIEW_OPTION',
    payload: {
      key: viewOption,
      value
    }
  });

  /** Toggle whether flags render */
  const toggleFlag = () => setViewOption('flag', null);

  /** Toggle color playback */
  const toggleColorPlayback = () => setViewOption('colorPlayback', null);

  /** Toggle playback preview */
  const togglePlaybackPreview = () => setViewOption('playbackPreview', null);

  /** Toggle whether viewport dimensions are shown */
  const toggleViewport = () => setViewOption('showViewport', null);

  /** Toggle whether visible areas are shown */
  const toggleVisibleAreas = () => setViewOption('showVisibleAreas', null);

  /**
  * Toggle onion skinning
  * @param {boolean} onionSkin Onion Skinning
  * @example
  * // Turn on onion skinning
  * Actions.setOnionSkin(true)
  */
  const setOnionSkin = (onionSkin) => ({
    type: 'SET_ONION_SKIN',
    payload: onionSkin
  });

  /**
  * Set number of onion skin frames to render before current
  * @param {number} framesBefore Frames Before
  * @example
  * // Set onion skinning frames before to 5
  * Actions.setOnionSkinFramesBefore(5)
  */
  const setOnionSkinFramesBefore = (framesBefore = 20) => ({
    type: 'SET_ONION_SKIN_FRAMES_BEFORE',
    payload: framesBefore
  });

  /**
  * Set number of onion skin frames to render after current
  * @param {number} framesAfter Frames After
  * @example
  * // Set onion skinning frames after to 10
  * Actions.setOnionSkinFramesAfter(10)
  */
  const setOnionSkinFramesAfter = (framesAfter = 20) => ({
    type: 'SET_ONION_SKIN_FRAMES_AFTER',
    payload: framesAfter
  });

  /**
  * Set the skeleton mode
  * @param {number} skeletonMode Skeleton Mode
  * @example
  * // Turn on both skeleton view and normal view
  * Actions.setSkeleton(Enums.SKELETON_MODES.NORMAL_SKELETON)
  */
  const setSkeleton = (skeletonMode = 0) => ({
    type: 'SET_SKELETON',
    payload: skeletonMode
  });

  /**
  * Set whether autosave is enabled
  * @param {boolean} enabled Enabled
  * @example
  * // Turn off autosave
  * Actions.setAutosaveEnabled(false)
  */
  const setAutosaveEnabled = (enabled = true) => ({
    type: 'SET_AUTOSAVE_ENABLED',
    payload: enabled
  });

  /**
  * Create a new track 
  * @param {boolean} isV61 Version 6.1
  * @example
  * // Create a new legacy track
  * Actions.newTrack(true)
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
  });

  /**
  * Load a track into the current editor
  * @param {Track} trackData Track Object
  * @example
  * // Load a blank track with 2 riders
  * Actions.loadTrackAction({
  *   startPosition: { x: 0, y: 0 },
  *   version: '6.2',
  *   riders: [
  *     {startPosition: {x: 0, y: 0}, startVelocity: {x: 0.4, y: 0}},
  *     {startPosition: {x: 0, y: 30}, startVelocity: {x: 0.4, y: 0}}
  *   ]
  * })
  */
  const loadTrackAction = (trackData) => ({
    type: 'LOAD_TRACK',
    payload: {
      viewOnly: trackData["for viewing only, please don't steal tracks"] === true,
      ...trackData
    }
  });

  /**
  * Set details of the currently loaded track
  * @param {string} title Title
  * @param {string} creator Creator
  * @param {string} description Description
  * @example
  * // Set title to be "Test Track" and creator to be "Me" with empty description
  * Actions.setTrackDetails("Test Track", "Me", "")
  */
  const setTrackDetails = (title, creator, description) => ({
    type: 'trackData/SET_TRACK_DETAILS',
    payload: {
      title,
      creator,
      description
    }
  });

  /**
  * Set whether track saves to local file
  * @param {boolean} saveToFile Save Locally
  * @example
  * // Make track save locally
  * Actions.setLocalFile(true)
  */
  const setLocalFile = (saveToFile = false) => ({
    type: 'trackData/SET_LOCAL_FILE',
    payload: saveToFile
  });

  /**
  * Set the track script
  * @param {string} script Script
  * @example
  * // Clear the script
  * Actions.setTrackScript('')
  */
  const setTrackScript = (script = '') => ({
    type: 'trackData/SET_TRACK_SCRIPT',
    payload: script
  });

  /**
  * Set whether the timeline is visible or not
  * @param {boolean} active Timeline Active
  * @example
  * // Hide the timeline
  * Actions.setControlsActive(false)
  */
  const setControlsActive = (active) => ({
    type: 'SET_CONTROLS_ACTIVE',
    payload: active
  });

  /** Toggle whether the timeline is active */
  const toggleControlsActive = () => ({ type: 'TOGGLE_CONTROLS_ACTIVE' });

  return {
    addLayer,
    addLines,
    beginModifierCommand,
    commitTrackChanges,
    decPlayerIndex,
    endModifierCommand,
    hideNotification,
    incPlayerIndex,
    loadAutosave,
    loadTrackAction,
    moveLayer,
    newTrack,
    redoAction,
    removeAudio,
    removeLayer,
    removeLines,
    renameLayer,
    revertTrackChanges,
    selectLineType,
    setAudioOffset,
    setAudioVolume,
    setAutosaveEnabled,
    setCommandHotkeys,
    setControlsActive,
    setEditorCamera,
    setEditorFollowerFocus,
    setFlag,
    setFlagIndex,
    setFrameIndex,
    setInterpolate,
    setLayerActive,
    setLayerEditable,
    setLayerVisible,
    setLocalFile,
    setOnionSkin,
    setOnionSkinFramesAfter,
    setOnionSkinFramesBefore,
    setPlaybackDimensions,
    setPlaybackFollowerFocus,
    setPlaybackZoom,
    setPlayerFastForward,
    setPlayerFps,
    setPlayerMaxIndex,
    setPlayerRewind,
    setPlayerRunning,
    setPlayerRunning,
    setPlayerSettings,
    setPlayerStopAtEnd,
    setRiders,
    setSkeleton,
    setTool,
    setTrackDetails,
    setTrackScript,
    showNotification,
    startPlayer,
    stopPlayer,
    toggleAudio,
    toggleColorPlayback,
    toggleControlsActive,
    toggleEditorFollower,
    toggleFlag,
    toggleInterpolate,
    togglePlaybackPreview,
    toggleSlowMotion,
    toggleTrackLinesLocked,
    toggleViewport,
    toggleVisibleAreas,
    triggerCommand,
    updateLines,
    undoAction
  };
})();

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
    return state.settings['cam.useEditorFollower'];
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

  /** Command hotkeys array @type {[string, string][]*/
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
    return getModifier(state, 'modifiers.zoom');
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
    return state.progress['SAVE_TRACK'];
  }

  /** Track saving in progress @returns {boolean} */
  function getTrackSaverInProgress(state) {
    return state.progress['SAVE_TRACK'].percent != null;
  }

  /** Current track loading progress @returns {Progress} */
  function getTrackLoaderProgress(state) {
    return state.progress['LOAD_TRACK'];
  }

  /** Current track autosaving progress @returns {Progress} */
  function getAutosaveProgress(state) {
    return state.progress['AUTOSAVE'];
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

  /** Track version @returns {'6.1' | '6.2'} */
  function getSimulatorVersion(state) {
    return state.simulator.engine.isLegacy() ? '6.1' : '6.2';
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

  /**
  * Tool state of target tool
  * @param {string} toolId Target Tool
  * @returns {ToolState}
  */
  function getToolState(state, toolId) {
    return state.toolState[toolId];
  }

  /** Currently selected tool @returns {string} */
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

  /** Currently selected line type in color swatch @returns {number} */
  function getSelectedLineType(state) {
    return getTrackLinesLocked(state) ?
      Enums.LINE_TYPES.SCENERY :
      state.selectedLineType ;
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
    return getViews(state)[Enums.VIEWS.SIDEBAR];
  }

  /** Main page information @returns {string?} */
  function getMainPage(state) {
    return getViews(state)[Enums.VIEWS.MAIN];
  }

  /** Whether currently in track editor @returns {boolean} */
  function getInEditor(state) {
    return state.views[Enums.VIEWS.MAIN] === Enums.PAGES.MAIN.EDITOR;
  }

  /** Whether currently in track viewer @returns {boolean} */
  function getInViewer(state) {
    return state.views[Enums.VIEWS.MAIN] === Enums.PAGES.MAIN.VIEWER || 
           state.views[Enums.VIEWS.MAIN] === Enums.PAGES.MAIN.EDITABLE_VIEWER;
  }

  /** Whether currently in save window @returns {boolean} */
  function getInTrackSaver(state) {
    return state.views[Enums.VIEWS.TRACK_SAVER] === Enums.PAGES.TRACK_SAVER.SAVE;
  }

  /** Whether currently in load window @returns {boolean} */
  function getInTrackLoader(state) {
    return state.views[Enums.VIEWS.TRACK_LOADER] === Enums.PAGES.TRACK_LOADER.LOAD;
  }

  /** Whether currently in video export window @returns {boolean} */
  function getInVideoExporter(state) {
    return state.views[Enums.VIEWS.VIDEO_EXPORTER] === Enums.PAGES.VIDEO_EXPORTER.EXPORT;
  }

  /** Whether there is an overlay over the main page @returns {string?} */
  function getHasOverlay(state) {return (
    state.views[Enums.VIEWS.ABOUT] ||
    state.views[Enums.VIEWS.TRACK_LOADER] ||
    state.views[Enums.VIEWS.TRACK_SAVER] ||
    state.views[Enums.VIEWS.VIDEO_EXPORTER] ||
    state.views[Enums.VIEWS.RELEASE_NOTES]
  );}

  return {
    getActiveLayerEditable,
    getAudioEnabled,
    getAudioFileLoader,
    getAudioFileLoading,
    getAudioOffset,
    getAudioProps,
    getAutosaveEnabled,
    getAutosaveProgress,
    getColorPlayback,
    getCommandsToHotkeys,
    getCommittedRiders,
    getControlsActive,
    getCurrentCamera,
    getCurrentPlayerRate,
    getEditorCamera,
    getEditorDimensions,
    getEditorFollowerFocus,
    getEditorFollowerFocus,
    getEditorPosition,
    getEditorZoom,
    getHasOverlay,
    getInEditor,
    getInTrackLoader,
    getInTrackSaver,
    getInVideoExporter,
    getInViewer,
    getLineTypePickerActive,
    getLocalAudioProps,
    getMainPage,
    getModifier,
    getModifiersActive,
    getNotification,
    getNotificationProgressId,
    getNotificationsCount,
    getNumRiders,
    getOnionBeginIndex,
    getOnionEndIndex,
    getOnionSkinActive,
    getPlaybackCamera,
    getPlaybackCameraFocus,
    getPlaybackCameraParams,
    getPlaybackDimensions,
    getPlaybackDimensionsDefined,
    getPlaybackPreview,
    getPlaybackZoom,
    getPlayerFlagActive,
    getPlayerFlagIndex,
    getPlayerFps,
    getPlayerFrameRateSetting,
    getPlayerIndex,
    getPlayerMaxIndex,
    getPlayerReversed,
    getPlayerRunning,
    getPlayerSettings,
    getPlayerSlowMotion,
    getPlayerTime,
    getRiders,
    getSavedTracks,
    getSavedTracksAvailable,
    getSelectedLineType,
    getSelectedLineType,
    getSelectedTool,
    getSidebarPage,
    getSimulatorCommittedLines,
    getSimulatorCommittedTrack,
    getSimulatorHasRedo,
    getSimulatorHasUndo,
    getSimulatorLines,
    getSimulatorTrack,
    getSimulatorTrackTotalLineCount,
    getSimulatorVersion,
    getToolState,
    getTrackActiveLayerId,
    getTrackCloudInfo,
    getTrackDetails,
    getTrackDetailsWithCloudInfo,
    getTrackDuration,
    getTrackIsDirty,
    getTrackIsEmpty,
    getTrackIsLocalFile,
    getTrackLayers,
    getTrackLinesLocked,
    getTrackLoaderProgress,
    getTrackObjectForAutosave,
    getTrackObjectForSaving,
    getTrackProps,
    getTrackSaverInProgress,
    getTrackSaverProgress,
    getTrackScript,
    getTriggerCounts,
    getUseEditorFollower,
    getViewOptions,
    getViews,
    getZoomSliderActive
  };
})();