package main

import (
	"gopkg.in/mgo.v2"
	"log"
	"testing"
)

func TestSanity(t *testing.T) {
	t.Log("Has sanity")
}

func TestMongo(t *testing.T){
	session, err := mgo.Dial("localhost:27017")
	if err != nil {
		log.Fatalln(err)
		log.Fatalln("mongo err")
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)
	t.Log("connecto to mongo")
}