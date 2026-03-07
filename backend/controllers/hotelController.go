package controllers

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func GetHotels(c *gin.Context) {
    hotels := []map[string]string{
        {"id": "1", "name": "Hotel X", "city": "Addis Ababa"},
        {"id": "2", "name": "Hotel Y", "city": "Bahir Dar"},
    }
    c.JSON(http.StatusOK, hotels)
}