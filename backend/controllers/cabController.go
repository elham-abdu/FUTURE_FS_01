package controllers

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func GetCabs(c *gin.Context) {
    cabs := []map[string]string{
        {"id": "1", "name": "Cab A", "city": "Addis Ababa"},
        {"id": "2", "name": "Cab B", "city": "Bahir Dar"},
    }
    c.JSON(http.StatusOK, cabs)
}