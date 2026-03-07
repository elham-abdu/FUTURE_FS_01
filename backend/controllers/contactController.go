package controllers

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "portfolio-backend/models"
)

func SubmitContact(c *gin.Context) {
    var contact models.Contact
    if err := c.ShouldBindJSON(&contact); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    // For now, just log
    println("Contact Message:", contact.Name, contact.Email, contact.Message)

    c.JSON(http.StatusOK, gin.H{"status": "Message received"})
}