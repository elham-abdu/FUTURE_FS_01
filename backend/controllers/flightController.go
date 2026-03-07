package controllers

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func GetFlights(c *gin.Context) {
    flights := []map[string]string{
        {"id": "1", "name": "Flight A", "from": "Addis", "to": "London"},
        {"id": "2", "name": "Flight B", "from": "Addis", "to": "Dubai"},
    }
    c.JSON(http.StatusOK, flights)
}