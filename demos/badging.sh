#!/bin/bash

VBoxManage controlvm WinDev resume
# require to set in "gpedit.msc"
# [Windows Settings -> Security Settings -> Local Policies -> Security Options -> Accounts: Limit local account use of blank passwords to console logon only] to DISABLED
VBoxManage guestcontrol WinDev --username User run -- "C:\Users\User\AppData\Local\Google\Chrome SxS\Application\chrome_proxy.exe"  --profile-directory=Default --app-id=cdpnnkjfelaildoafoknamkpeaneofpc
