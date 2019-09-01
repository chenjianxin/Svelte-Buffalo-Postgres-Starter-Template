package main

import (
	"log"

	"vuerecipe/actions"
)

func main() {
	app := actions.App()
	log.Fatal(app.Serve())
}
