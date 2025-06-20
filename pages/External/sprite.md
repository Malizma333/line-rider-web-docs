---
layout: page
title: Sprite
parent: Externals
permalink: /externals/sprite/
---

## Sprite

An example svg sprite sheet to use for riders.

```js
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:lr="https://www.linerider.com" width="64" height="64" viewBox="0 0 64 64" version="1.1">
  <style type="text/css"><![CDATA[
    .lr-bbox {
      display: none;
      stroke-width: 0.2px;
      stroke: blue;
      fill: none;
    }
    .no-fill {
      fill: none;
    }
    .flag {
      fill: rgba(0,0,0,0.4);
    }
    .outline {
      stroke: black;
      stroke-width: 0.3;
    }
    .skin {
      fill: white;
    }
    .hair {
      fill: black;
    }
    .eye {
      fill: black;
    }
    .torso {
      fill: white;
    }
    .scarfEven {
      fill: white;
    }
    .scarf1 {
      fill: #FD4F38;
    }
    .scarf3 {
      fill: #06A725;
    }
    .scarf5 {
      fill: #3995FD;
    }
    .hat .ball {
      fill: black;
    }
    .hat .top {
      fill: white;
    }
    .hat .bottom {
      stroke: black;
      stroke-width: 1;
      stroke-linecap: round;
    }
    .sled {
      fill: white;
    }
    .arm .sleeve {
      fill: black;
    }
    .arm .hand {
      fill: white;
    }
    .leg .pants {
      fill: black;
    }
    .leg .foot {
      fill: white;
    }
  ]]></style>

  <g class="lr-entity" lr:entity="flag">
    <defs>
      <path id="flag" class="flag" transform="translate(-6 -21)" d="M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3Z"/>
      <path id="start-flag" class="flag" transform="translate(-6 -21)" d="M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3M7,7.25V11.5C7,11.5 9,10 11,10C13,10 14,12 16,12C18,12 18,11 18,11V7.5C18,7.5 17,8 16,8C14,8 13,6 11,6C9,6 7,7.25 7,7.25Z"/>
    </defs>
    <g class="lr-sprite" lr:anchor="START_FLAG">
      <use class="lr-anchor" x="3" y="20" xlink:href="#start-flag"/>
    <rect class="lr-bbox" x="1" y="1" width="17" height="20"/></g>
    <g class="lr-sprite" lr:anchor="FLAG">
      <use class="lr-anchor" x="21" y="20" xlink:href="#flag"/>
    <rect class="lr-bbox" x="19" y="1" width="17" height="20"/></g>
  </g>

  <g class="lr-entity" lr:entity="rider">
    <defs>
      <!-- head parts -->
      <g id="head">
        <rect class="skin" x="7" y="-2.25" width="3.1" height="4.5"/>
        <rect class="hair" x="9.95" y="-2.25" width="0.3" height="4.5"/>
      </g>
      <rect id="face-outline" class="hair" x="7" y="-0.15" width="3.1" height="0.3"/>
      <rect id="hair" y="-2.4" class="fill" width="3.1" height="4.8"/>
      <polygon id="eye" points="0.4,-0.4 0,-0.5 -0.4,-0.4 -0.5,0 -0.4,0.4 0,0.5 0.4,0.4 0.5,0"/>
      <path id="nose" class="outline skin" d="M 0 -0.25 v 0.4 c 0.1 1.3 1.2 1.2 3.1 0 v -0.4"/>

      <g> <!-- sled parts -->
        <path id="sled-top" class="sled outline" d="M13.6-2.2c-1.35,0-2.55,0.75-3.15,1.85H0C-0.2-0.35-0.35-0.2-0.35,0S-0.2,0.35,0,0.35h1.75V1.2l0.7-0.45v-0.4h6.6V0.7l0.7,0.5V0.35h0.35C10.05,0.5,10,0.7,10,0.9c0,0.2,0.15,0.35,0.35,0.35c0.15,0,0.3-0.1,0.35-0.25c0.05-0.2,0.1-0.45,0.2-0.65h0.9c0.2,0,0.35-0.15,0.35-0.35S12-0.35,11.8-0.35h-0.5c0.5-0.7,1.35-1.15,2.3-1.15c0.99,0,1.85,0.47,2.38,1.2l0.99,0.38C16.43-1.25,15.12-2.2,13.6-2.2z"/>
        <path id="sled-middle" class="sled outline" d="M9.75,1.2L9.05,0.7L9.05,4.05L9.75,4.35z"/>
        <path id="sled-tail" class="sled outline" d="M2.45,4.4V0.75L1.75,1.2v3.2H-0.2c-0.2,0-0.35,0.15-0.35,0.35S-0.4,5.1-0.2,5.1h6.85l-0.9-0.7H2.45z"/>
        <path id="sled-nose" class="sled outline" d="M15.98-0.3c0.36,0.49,0.57,1.09,0.57,1.75c0,1.65-1.3,2.95-2.95,2.95H9.75V4.35l-0.7-0.3V4.4h-3.3l0.9,0.7h6.95c2,0,3.65-1.65,3.65-3.65c0-0.48-0.1-0.95-0.27-1.37L15.98-0.3z"/>
        <path id="sled" class="sled outline" d="M13.6-2.2c-1.35,0-2.55,0.75-3.15,1.85H0C-0.2-0.35-0.35-0.2-0.35,0S-0.2,0.35,0,0.35h1.75V4.4H-0.2c-0.2,0-0.35,0.15-0.35,0.35S-0.4,5.1-0.2,5.1h13.8c2,0,3.65-1.65,3.65-3.65S15.6-2.2,13.6-2.2zM9.05,4.4h-6.6V0.35h6.6V4.4z M13.6,4.4H9.75V0.35h0.35C10.05,0.5,10,0.7,10,0.9c0,0.2,0.15,0.35,0.35,0.35c0.15,0,0.3-0.1,0.35-0.25c0.05-0.2,0.1-0.45,0.2-0.65h0.9c0.2,0,0.35-0.15,0.35-0.35S12-0.35,11.8-0.35h-0.5c0.5-0.7,1.35-1.15,2.3-1.15c1.65,0,2.95,1.3,2.95,2.95C16.55,3.1,15.25,4.4,13.6,4.4z"/>
      </g>

      <g id="arm" class="arm outline">
        <path class="sleeve" d="M5,0.7H0c-0.4,0-0.7-0.3-0.7-0.7S-0.4-0.7,0-0.7h5"/>
        <path class="hand" d="M5-0.7h0.5c0,0,0.3-0.7,0.5-0.6c0.2,0.1,0,0.6,0,0.6s0.4,0,0.6,0c0.2,0,0.5,0.3,0.5,0.7c0,0.4-0.2,0.7-0.5,0.7c-0.5,0-1.6,0-1.6,0"/>
      </g>

      <g id="leg" class="leg outline">
        <path class="pants" d="M4.8-0.7H0c-0.4,0-0.7,0.3-0.7,0.7S-0.4,0.7,0,0.7h4.8"/>
        <path class="foot" d="M4.8,0.7h2.4l0-2.7L6.7-2L6-0.7H4.8"/>
      </g>

      <g id="body">
        <rect class="torso outline" x="0" y="-2.2" width="7" height="4.4"/>
        <g class="neck">
          <rect class="scarf1 scarfOdd" stroke-width="0" x="5.2" y="1.5" width="2" height="1"/>
          <rect class="scarf2 scarfEven" stroke-width="0" x="5.2" y="0.5" width="2" height="1"/>
          <rect class="scarf3 scarfOdd" stroke-width="0" x="5.2" y="-0.5" width="2" height="1"/>
          <rect class="scarf4 scarfEven" stroke-width="0" x="5.2" y="-1.5" width="2" height="1"/>
          <rect class="scarf5 scarfOdd" stroke-width="0" x="5.2" y="-2.5" width="2" height="1"/>
        </g>
        <g class="hat">
          <path class="top outline" d="M11-2.6h-0.4v5.2H11c1.2,0,2.2-1.2,2.2-2.6S12.2-2.6,11-2.6z"/>
          <path class="bottom" d="M10.6-2.6 v5.2"/>
          <circle class="ball" cx="13.9" cy="0" r="0.7"/>
        </g>
      </g>
      <rect id="scarf0" class="scarf0 scarfEven" x="0" y="-1" width="2" height="2"/>
      <rect id="scarf1" class="scarf1 scarfOdd" x="0" y="-1" width="2" height="2"/>
      <rect id="scarf2" class="scarf2 scarfEven" x="0" y="-1" width="2" height="2"/>
      <rect id="scarf3" class="scarf3 scarfOdd" x="0" y="-1" width="2" height="2"/>
      <rect id="scarf4" class="scarf4 scarfEven" x="0" y="-1" width="2" height="2"/>
      <rect id="scarf5" class="scarf5 scarfOdd" x="0" y="-1" width="2" height="2"/>
    </defs>

    <g class="lr-sprite" lr:anchor="SHOULDER" lr:lookAt="SCARF_0" id="base-scarf">
      <use class="lr-anchor" x="38" y="20" xlink:href="#scarf0"/>
    <rect class="lr-bbox" x="37" y="18" width="4" height="4"/></g>
    <g class="lr-sprite" lr:copy="base-scarf" lr:anchor="SCARF_0" lr:lookAt="SCARF_1"/>

    <g class="lr-sprite" lr:anchor="SCARF_1" lr:lookAt="SCARF_2">
      <use class="lr-anchor" x="38" y="25" xlink:href="#scarf1"/>
    <rect class="lr-bbox" x="37" y="23" width="4" height="4"/></g>

    <g class="lr-sprite" lr:anchor="SCARF_2" lr:lookAt="SCARF_3">
      <use class="lr-anchor" x="43" y="30" xlink:href="#scarf2"/>
    <rect class="lr-bbox" x="42" y="28" width="4" height="4"/></g>

    <g class="lr-sprite" lr:anchor="SCARF_3" lr:lookAt="SCARF_4">
      <use class="lr-anchor" x="38" y="30" xlink:href="#scarf3"/>
    <rect class="lr-bbox" x="37" y="28" width="4" height="4"/></g>

    <g class="lr-sprite" lr:anchor="SCARF_4" lr:lookAt="SCARF_5">
      <use class="lr-anchor" x="43" y="35" xlink:href="#scarf4"/>
    <rect class="lr-bbox" x="42" y="33" width="4" height="4"/></g>

    <g class="lr-sprite" lr:anchor="SCARF_5" lr:lookAt="SCARF_6">
      <use class="lr-anchor" x="38" y="35" xlink:href="#scarf5"/>
    <rect class="lr-bbox" x="37" y="33" width="4" height="4"/></g>

    <g class="lr-sprite" lr:anchor="PEG" lr:lookAt="STRING">
      <use class="lr-anchor" x="2.5" y="36.5" xlink:href="#sled-top-base"/>
      <defs>
        <use id="sled-top-base" xlink:href="#sled-top">
          <animate repeatCount="indefinite" begin="ba.end" dur="2s" lr:param="broken" attributeName="opacity" values="0; 1; 1" keyTimes="0; 0.01; 1"/>
        </use>
      </defs>
    <rect class="lr-bbox" x="1" y="33" width="20" height="6"/></g>
    <g class="lr-sprite" lr:anchor="PEG" lr:lookAt="STRING">
      <use class="lr-anchor" x="25.1" y="32" xlink:href="#sled-middle-base"/>
      <defs>
        <use id="sled-middle-base" xlink:href="#sled-middle">
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="2s" lr:param="broken" type="rotate" values="0 9.5 0.7; 0 9.5 0.7; 75 9.5 0.7" keyTimes="0; 0.02; 1"/>
          <animate repeatCount="indefinite" begin="ba.end" dur="2s" lr:param="broken" attributeName="opacity" values="0; 1; 1" keyTimes="0; 0.01; 1"/>
        </use>
      </defs>
    <rect class="lr-bbox" x="33" y="31" width="3" height="7"/></g>
    <g class="lr-sprite" lr:anchor="PEG" lr:lookAt="STRING">
      <use class="lr-anchor" x="23.75" y="31.75" xlink:href="#sled-tail-base"/>
      <defs>
        <use id="sled-tail-base" xlink:href="#sled-tail">
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="2s" lr:param="broken" type="rotate" values="0 -1 3; 0 -1 3; -20 -1 3" keyTimes="0; 0.02; 1"/>
          <animate repeatCount="indefinite" begin="ba.end" dur="2s" lr:param="broken" attributeName="opacity" values="0; 1; 1" keyTimes="0; 0.01; 1"/>
        </use>
      </defs>
    <rect class="lr-bbox" x="22" y="31" width="10" height="7"/></g>
    <g class="lr-sprite" lr:anchor="PEG" lr:lookAt="STRING">
      <use class="lr-anchor" x="17.55" y="23.7" xlink:href="#sled-nose-base"/>
      <defs>
        <use id="sled-nose-base" xlink:href="#sled-nose">
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="2s" lr:param="broken" type="rotate" values="0 16 0; 0 16 0; 17 16 0" keyTimes="0; 0.02; 1"/>
          <animate repeatCount="indefinite" begin="ba.end" dur="2s" lr:param="broken" attributeName="opacity" values="0; 1; 1" keyTimes="0; 0.01; 1"/>
        </use>
      </defs>
    <rect class="lr-bbox" x="22" y="22" width="14" height="8"/></g>
    <g class="lr-sprite" lr:anchor="PEG" lr:lookAt="STRING" lr:cam="sled">
      <use class="lr-anchor" x="2.6" y="25.5" xlink:href="#sled-base"/>
      <defs>
        <use id="sled-base" xlink:href="#sled">
          <animate repeatCount="indefinite" begin="ba.end" dur="2s" lr:param="broken" attributeName="opacity" values="1; 1; 0; 0" keyTimes="0; 0.01; 0.02; 1"/>
        </use>
      </defs>
    <rect class="lr-bbox" x="1" y="22" width="20" height="10"/></g>

    <g class="lr-sprite lr-stretch" lr:anchor="LHAND" lr:lookAt="STRING" id="base-string">
      <use class="lr-anchor" x="43" y="19.5" xlink:href="#string"/>
      <defs>
        <line id="string" x1="0" y1="0" x2="8" y2="0" stroke-width="0.3" stroke="black">
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="2s" lr:param="crashed" type="translate" values="0 0; 8 0" keyTimes="0; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="2s" lr:param="crashed" type="scale" values="1 1; 0 1" keyTimes="0; 1"/>
        </line>
      </defs>
    <rect class="lr-bbox" x="42" y="18" width="10" height="3"/></g>

    <g class="lr-sprite" lr:anchor="SHOULDER" lr:lookAt="LHAND" id="base-arm" lr:cam="rider">
      <use class="lr-anchor" x="54.75" y="18.75" xlink:href="#arm"/>
    <rect class="lr-bbox" x="53" y="16" width="10" height="5"/></g>

    <g class="lr-sprite" lr:anchor="BUTT" lr:lookAt="LFOOT" id="base-leg" lr:cam="rider">
      <use class="lr-anchor" x="53.3" y="13.15" xlink:href="#leg"/>
    <rect class="lr-bbox" x="51" y="10" width="11" height="5"/></g>

    <g class="lr-sprite" lr:copy="base-leg" lr:anchor="BUTT" lr:lookAt="RFOOT" lr:cam="rider"/>

    <g class="lr-sprite" lr:anchor="BUTT" lr:lookAt="SHOULDER">
      <use class="lr-anchor" x="31.45" y="13.5" xlink:href="#head"/>
    <rect class="lr-bbox" x="37" y="10" width="6" height="7"/></g>
    <g class="lr-sprite" lr:anchor="BUTT" lr:lookAt="SHOULDER">
      <use class="lr-anchor" x="36.45" y="23.5" xlink:href="#left-face-outline"/>
      <defs>
        <use id="left-face-outline" xlink:href="#face-outline">
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="translate" values="0 -2.4; 0 -2.4; 0 -2.25; 0 -2.25; 0 -2.4" keyTimes="0; 0.5; 0.55; 0.95; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="scale" values="1 1; 1 1; 1 0; 1 0; 1 1" keyTimes="0; 0.5; 0.55; 0.95; 1"/>
        </use>
      </defs>
    <rect class="lr-bbox" x="42" y="22" width="6" height="3"/></g>
    <g class="lr-sprite" lr:anchor="BUTT" lr:lookAt="SHOULDER">
      <use class="lr-anchor" x="36.45" y="23.5" xlink:href="#right-face-outline"/>
      <defs>
        <use id="right-face-outline" xlink:href="#face-outline">
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="translate" values="0 2.4; 0 2.25; 0 2.25; 0 2.4; 0 2.4" keyTimes="0; 0.05; 0.45; 0.5; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="scale" values="1 1; 1 0; 1 0; 1 1; 1 1" keyTimes="0; 0.05; 0.45; 0.5; 1"/>
        </use>
      </defs>
    <rect class="lr-bbox" x="42" y="22" width="6" height="3"/></g>
    <g class="lr-sprite" lr:anchor="BUTT" lr:lookAt="SHOULDER">
      <use class="lr-anchor" x="49.5" y="2.5" xlink:href="#nose-base"/>
      <defs>
        <use id="nose-base" xlink:href="#nose" transform="translate(7 0)">
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="translate" values="0 2.25; 0 2.25; 0 -2.25; 0 -2.25" keyTimes="0; 0.5; 0.5; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="scale" values="1 0; 1 1; 1 0; 1 0; 1 -1; 1 0" keyTimes="0; 0.25; 0.5; 0.5; 0.75; 1"/>
        </use>
      </defs>
    <rect class="lr-bbox" x="55" y="1" width="6" height="4"/></g>
    <g class="lr-sprite" lr:anchor="BUTT" lr:lookAt="SHOULDER">
      <use class="lr-anchor" x="56.5" y="7.5" xlink:href="#left-eye"/>
      <defs>
        <use id="left-eye" xlink:href="#eye">
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="translate" values="8.5 4; 8.5 -6.4" keyTimes="0; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="translate" values="0 -0.5; 0 -0.5; 0 0.5; 0 0.5" keyTimes="0; 0.5; 0.5; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="scale" values="1 0; 1 0; 1 1; 1 1; 1 0; 1 0" keyTimes="0; 0.09; 0.16; 0.56; 0.73; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="translate" values="0 0.5; 0 0.5; 0 -0.5; 0 -0.5" keyTimes="0; 0.5; 0.5; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="1s" lr:param="blinking" type="scale" values="1 1; 0.5 1.3" keyTimes="0; 1"/>
        </use>
      </defs>
    <rect class="lr-bbox" x="55" y="6" width="3" height="3"/></g>
    <g class="lr-sprite" lr:anchor="BUTT" lr:lookAt="SHOULDER">
      <use class="lr-anchor" x="60.5" y="7.5" xlink:href="#right-eye"/>
      <defs>
        <use id="right-eye" xlink:href="#eye">
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="translate" values="8.5 6.4; 8.5 -4" keyTimes="0; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="translate" values="0 -0.5; 0 -0.5; 0 0.5; 0 0.5" keyTimes="0; 0.5; 0.5; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="scale" values="1 0; 1 0; 1 1; 1 1; 1 0; 1 0" keyTimes="0; 0.27; 0.44; 0.84; 0.91; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="translate" values="0 0.5; 0 0.5; 0 -0.5; 0 -0.5" keyTimes="0; 0.5; 0.5; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="1s" lr:param="blinking" type="scale" values="1 1; 0.5 1.3" keyTimes="0; 1"/>
        </use>
      </defs>
    <rect class="lr-bbox" x="59" y="6" width="3" height="3"/></g>
    <g class="lr-sprite" lr:anchor="BUTT" lr:lookAt="SHOULDER">
      <use class="lr-anchor" x="38.45" y="13.5" xlink:href="#hair-base"/>
      <defs>
        <use id="hair-base" xlink:href="#hair" transform="translate(7 0)">
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="translate" values="0 0; 0 -2.4; 0 2.4; 0 0" keyTimes="0; 0.45; 0.55; 1"/>
          <animateTransform attributeName="transform" additive="sum" repeatCount="indefinite" begin="ba.end" dur="8s" lr:param="rotation" type="scale" values="1 1; 1 0; 1 0; 1 1" keyTimes="0; 0.45; 0.55; 1"/>
        </use>
      </defs>
    <rect class="lr-bbox" x="44" y="10" width="6" height="7"/></g>
    <g class="lr-sprite" lr:anchor="BUTT" lr:lookAt="SHOULDER" lr:cam="rider">
      <use class="lr-anchor" x="38.25" y="5" xlink:href="#body"/>
    <rect class="lr-bbox" x="37" y="1" width="17" height="8"/></g>

    <g class="lr-sprite" lr:copy="base-string" lr:anchor="RHAND" lr:lookAt="STRING"/>

    <g class="lr-sprite" lr:copy="base-arm" lr:anchor="SHOULDER" lr:lookAt="RHAND"/>
  </g>
</svg>
```
