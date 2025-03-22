#let logo(body) = context [
  #set text(lang: "de", font: "DejaVu Serif", fill: white)
  #set align(center+horizon)
  #set page(
    width: 1in,
    height: 1in,
    margin: 0mm,
    fill: gradient.radial(rgb("#003884"), rgb("#020234"), focal-radius: 0%, radius: 100%)
  )
  #page(body)
]

#logo[
  #text(size: 18pt)[ⅈ𝕟𝕗𝕠]
  #linebreak()
  #text(size: 14pt)[lektuell]
]

#logo[
  #text(size: 20pt)[ⅈ]
]
