package routes

import (
    "github.com/gin-gonic/gin"
    "portfolio-backend/controllers"
)

func SetupRoutes(r *gin.Engine) {
    api := r.Group("/api")

    // Contact form
    api.POST("/contact", controllers.SubmitContact)

    // Test ping (optional)
    r.GET("/api/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{"message": "pong"})
    })
}