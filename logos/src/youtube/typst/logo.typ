#let logo(body) = context [
  #set page(
    width: 1in,
    height: 1in,
    margin: 0mm,
    fill: gradient.radial(rgb("#003884"), rgb("#020234"))
  )
  #set text(lang: "de", font: "DejaVu Serif", fill: white, top-edge: "bounds", bottom-edge: "bounds")
  #set align(center+horizon)
  #page(body)
]

#logo[
  #text(size: 1in)[ⅈ]
]

#logo[
#text(size: 26pt)[ⅈ𝕟𝕗𝕠]
#linebreak()
#text(size: 16pt)[lektuell]
]
