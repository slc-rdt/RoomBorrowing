package app

import (
	"database/sql"
	"github.com/renaldiaddison/roomborrowingbackend/helper"
)

var db *sql.DB

func NewDatabase() *sql.DB {
	if db == nil {
		database, err := sql.Open("mysql", "slc_room_borrowing:r00mb00r!@tcp(localhost:3306)/slc_room_borrowing?parseTime=true")
		helper.PanicIfError(err)
		db = database
	}
	return db
}
