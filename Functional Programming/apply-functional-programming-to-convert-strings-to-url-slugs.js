// Only change code below this line
function urlSlug(title) {
  let titleLower = title.toLowerCase();
  const array = titleLower.split(/ +/);
  const filtered = array.filter((item) => {
    return item != ""
  })
  return filtered.join("-")
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");