export default function validateYoutubeLink(urlToParse) {
  // prettier-ignore
  if (urlToParse) {
    const regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (urlToParse.match(regExp)) {
      return true;
    }
  }
  return false;
}
