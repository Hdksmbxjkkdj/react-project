import { usePage } from "@inertiajs/react"

function Lang(word) {
  let lang = usePage().props.langs.public

  if (lang[word] == undefined) {
    return word
  }
  return lang[word]
}
export { Lang }