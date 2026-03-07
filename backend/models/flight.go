package models

type Flight struct {
    ID     string `json:"id"`
    Name   string `json:"name"`
    From   string `json:"from"`
    To     string `json:"to"`
}