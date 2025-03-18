import de.infolektuell.gradle.astro.tasks.AstroBuildTask
import de.infolektuell.gradle.astro.tasks.AstroCheckTask

plugins {
  id("base")
  id("de.infolektuell.astro")
}

val websiteLogoTask by project(":logos").tasks.named("compileWebsiteTypstSvg")

val copyLogosTask by tasks.registering(Copy::class) {
  from(websiteLogoTask)
  into(layout.projectDirectory.dir("src/assets/logos"))
  include("*.svg")
  duplicatesStrategy = DuplicatesStrategy.INCLUDE
}

tasks.withType(AstroBuildTask::class) {
  dependsOn(copyLogosTask)
}

tasks.withType(AstroCheckTask::class) {
  dependsOn(copyLogosTask)
}
