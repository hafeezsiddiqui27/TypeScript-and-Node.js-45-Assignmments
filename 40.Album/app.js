function make_album1(ArtistName, AlbumTitle) {
    return { ArtistName: ArtistName, AlbumTitle: AlbumTitle };
}
var album1 = make_album1("Atif Aslam", "IPL Song");
var album2 = make_album1("Asim Azhar", "BEMATLAB");
var album3 = make_album1("Ali Zafar", "PSL Song");
console.log(album3);
//with tracks
function make_album2(ArtistName, AlbumTitle, numberoftracks) {
    return { ArtistName: ArtistName, AlbumTitle: AlbumTitle, numberoftracks: numberoftracks };
}
var album4 = make_album2("Atif Aslam", "IPL Song", 20);
var album5 = make_album2("Asim Azhar", "BEMATLAB", 30);
var album6 = make_album2("Ali Zafar", "PSL Song");
console.log(album5);
