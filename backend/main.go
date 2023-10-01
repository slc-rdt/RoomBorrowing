package main

import (
	"log"
	"net/http"
	"os"
	"room_borrowing_backend/app"
	"room_borrowing_backend/controller"

	"github.com/go-playground/validator/v10"
	_ "github.com/go-sql-driver/mysql"

	//"room_borrowing_backend/middleware"
	"room_borrowing_backend/repository"
	"room_borrowing_backend/service"
)

const defaultPort = "8080"

func main() {

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	db := app.NewDatabase()
	validate := validator.New()
	roomTransactionRepository := repository.NewRoomTransactionRepository()
	roomTransactionService := service.NewRoomTransaction(roomTransactionRepository, db, validate)
	roomTransactionController := controller.NewRoomTransaction(roomTransactionService)
	router := app.NewRouter(roomTransactionController)

	log.Printf("Server is at http://localhost:%s/", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
