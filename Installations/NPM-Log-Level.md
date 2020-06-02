To set the log for current user account : 
npm config set loglevel user-name

To set it globally for all users on the machine, :  >npm config set loglevel info --global.



The levels are: silent, win, error, warn, info, verbose, and silly.

silent: completely silent. Zero logging output.
win: Just the “npm ok” or “npm not ok” message at the end.
error: When something unexpected and bad happens.
warn: When something odd or potentially dangerous is happening.
info: Helpful information so you can track what’s happening.
verbose: Even more. Perhaps just a wee bit obnoxious, even.
silly: Completely crazy.Dump everything. Whole objects.

npm config set loglevel verbose

NPM Config options

npm config set <key> <value> [-g|--global]
npm config get <key>
npm config delete <key>
npm config list
npm config edit
npm get <key>
npm set <key> <value> [-g|--global]

Also set the Bower log level
