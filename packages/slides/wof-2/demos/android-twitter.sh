#!/bin/bash

adb shell am broadcast -a com.android.systemui.demo -e command enter
adb shell am start -p com.chrome.canary -a android.intent.action.VIEW -d https://mobile.twitter.com/noel_mace
scrcpy
