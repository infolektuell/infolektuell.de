plugins {
    // Good practice to have some standard tasks like clean, assemble, build
    id("base")
    // Apply the Typst plugin
    id("de.infolektuell.typst") version "0.4.2"
}

// The release tag for the Typst version to be used, defaults to latest stable release on GitHub
typst.version = "v0.13.1"

typst.sourceSets {
    val common by registering

    val website by registering {
        addSourceSet(common)
        documents = listOf("logo", "favicon")
        format {
            pdf.enabled = false
            svg.enabled = true
        }
    }

    val youtube by registering {
        addSourceSet(common)
        documents = listOf("logo", "favicon")
        format {
            pdf.enabled = false
            png.enabled = true
        }
    }
}
