package main

import "fmt"

func main() {
    var input string
    fmt.Println("Enter some input:")
    fmt.Scanln(&input) // Accepts user input
    fmt.Printf("You entered: %s\n", input)
}