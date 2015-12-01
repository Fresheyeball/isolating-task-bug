module OK where

import Task exposing (Task, andThen)
import Native.FS

writeFileOK : String -> String -> Task x ()
writeFileOK = Native.FS.writeFileOK

readFileAndLog : String -> Task x ()
readFileAndLog = Native.FS.readFileAndLog

file : String
file = "oktest"

port run : Task x ()
port run = writeFileOK file "testomatic"
  `andThen` always (readFileAndLog file)
