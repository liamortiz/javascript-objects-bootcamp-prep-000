var playlist = {
  drake : "Up and Out",
  marshmellow : "Where you at",
  slim : "Stan"
}
function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title
  return playlist
}