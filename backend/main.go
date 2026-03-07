package main

import (
    "github.com/gin-gonic/gin"
    "portfolio-backend/routes"
)

func main() {
    r := gin.Default()

    // Setup routes
    routes.SetupRoutes(r)

    // Start server
    r.Run(":8080") // http://localhost:8080
}