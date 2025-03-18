#let logo(body) = [
  #set page(
    width: auto,
    height: auto,
    margin: 2mm,
    fill: aqua
  )
  #set align(center+horizon)
  #set text(lang: "de", region: "DE", size: 18pt, fallback: false)
  #body
]

#let favicon(body) = [
#set page(
  width: 16pt,
  height: 16pt,
  margin: 1mm,
    fill: aqua
)
#set align(center+horizon)
#set text(lang: "de", region: "DE", size: 14pt, fallback: false)
#body
]
