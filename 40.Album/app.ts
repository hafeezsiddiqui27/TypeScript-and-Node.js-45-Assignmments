function make_album1(ArtistName: string, AlbumTitle: string) {
  return { ArtistName, AlbumTitle };
}
let album1 = make_album1(`Atif Aslam`, `IPL Song`);
let album2 = make_album1(`Asim Azhar`, `BEMATLAB`);
let album3 = make_album1(`Ali Zafar`, `PSL Song`);

console.log(album3);

//with tracks
function make_album2(
  ArtistName: string,
  AlbumTitle: string,
  numberoftracks?: number
) {
  return { ArtistName, AlbumTitle, numberoftracks };
}
let album4 = make_album2(`Atif Aslam`, `IPL Song`, 20);
let album5 = make_album2(`Asim Azhar`, `BEMATLAB`, 30);
let album6 = make_album2(`Ali Zafar`, `PSL Song`);

console.log(album5);
