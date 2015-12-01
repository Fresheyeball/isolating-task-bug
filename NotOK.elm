module NotOK where

import Task exposing (Task, andThen)
import Native.FS

writeFileNotOK : String -> String -> Task x ()
writeFileNotOK = Native.FS.writeFileNotOK

readFileAndLog : String -> Task x ()
readFileAndLog = Native.FS.readFileAndLog

file : String
file = "notoktest"

port run : Task x ()
port run = writeFileNotOK file "testomatic"
  `andThen` always (readFileAndLog file)
