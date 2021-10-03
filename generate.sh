echo > ./output/MoodleShortcuts.html
cat ./fragments/010.html >> ./output/MoodleShortcuts.html
echo "<style>" >> ./output/MoodleShortcuts.html
cat ./node_modules/bulma/css/bulma.min.css >> ./output/MoodleShortcuts.html
echo "</style>" >> ./output/MoodleShortcuts.html
echo "<script>" >> ./output/MoodleShortcuts.html
cat ./node_modules/jquery/dist/jquery.min.js >> ./output/MoodleShortcuts.html
echo >> ./output/MoodleShortcuts.html
cat ./support-javascript/vanillajs.js >> ./output/MoodleShortcuts.html
echo >> ./output/MoodleShortcuts.html
echo "var configData = " >> ./output/MoodleShortcuts.html
cat ./config/config.yml | yq >> ./output/MoodleShortcuts.html
echo ";" >> ./output/MoodleShortcuts.html
echo "</script>" >> ./output/MoodleShortcuts.html
cat ./fragments/020.html >> ./output/MoodleShortcuts.html