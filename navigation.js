async function loadalldata() {
  await includeHTML();
  setTimeout(loadhome, 200);
}
loadalldata();
