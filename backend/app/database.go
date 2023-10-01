package app

import (
	"database/sql"
	"room_borrowing_backend/helper"
)

var db *sql.DB

func NewDatabase() *sql.DB {
	if db == nil {
		database, err := sql.Open("mysql", "root@tcp(localhost:3306)/slc_room_borrowing?parseTime=true")
		helper.PanicIfError(err)
		db = database
	}
	return db
}
