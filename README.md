# JUKEBOX_mp3Player
mp3 player with basic design and functionality. 
Pulls up only song that in the same folder!
But it can easily be changed to play any song by running it on Node.js . 
HOWEVER this one is PURE JAVASCRIPT and jQUERY.

Use Load button to select a song. Any song will work if added the same folder with app.

The trick of accessing to the path with pure Javascript bypassing security limitations achieved by cutting of "C:/fakepath" which is generated to cover actual address .
So by cutting fakepath we get file name and as long as it is in the same folder you can play it.
