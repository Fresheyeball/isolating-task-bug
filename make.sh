echo "Testing Task weirdness"
echo "OK Version ->"

elm make OK.elm --output=ok.js
echo "Elm.worker(Elm.OK);" >> ok.js
node ok.js

echo "Not Ok Version ->"

elm make NotOK.elm --output=notok.js
echo "Elm.worker(Elm.NotOK);" >> notok.js
node notok.js

echo "Cleaning up..."

rm ok.js notok.js oktest notoktest

echo "Done."
