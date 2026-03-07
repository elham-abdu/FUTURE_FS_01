package config

import "os"

type Config struct {
    Port     string
    DBUser   string
    DBPass   string
    DBHost   string
    DBName   string
}

func LoadConfig() Config {
    return Config{
        Port:   getEnv("PORT", "8080"),
        DBUser: getEnv("DB_USER", "root"),
        DBPass: getEnv("DB_PASS", "password"),
        DBHost: getEnv("DB_HOST", "127.0.0.1:3306"),
        DBName: getEnv("DB_NAME", "portfolio"),
    }
}

// helper to get env or default
func getEnv(key, defaultVal string) string {
    if val, exists := os.LookupEnv(key); exists {
        return val
    }
    return defaultVal
}