package main

import (
    "github.com/gin-gonic/gin"
    "portfolio-backend/routes"
)

func main() {
    r := gin.Default()

    // Allow CORS from frontend
    r.Use(func(c *gin.Context) {
        c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
        c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(204)
            return
        }
        c.Next()
    })

    routes.SetupRoutes(r)

    r.Run(":8080")
}