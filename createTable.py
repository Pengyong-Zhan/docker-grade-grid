import sqlite3
from sqlite3 import Error

def create_connection(DBName):
    conn = None
    try:
        conn = sqlite3.connect(DBName)
        print(sqlite3.version)
        print("test0", conn) 
    except sqlite3.Error as e:
        print(e)
    return conn 


def createTable(conn, create_table_sql):
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)


def startCreating():
    database = "score"
    sql_create_scores_table = """CREATE TABLE IF NOT EXISTS scores (
                                        id integer PRIMARY KEY,
                                        fName text NOT NULL,
                                        lName text NOT NULL,
                                        course text NOT NULL,
                                        work_type text NOT NULL,
                                        grade text NOT NULL,
                                        grade_processed int
                                    ); """
    conn = create_connection(database)
    print("test", conn) 

    if conn is not None:
        createTable(conn, sql_create_scores_table)
    else:
        print("Error happened!")

startCreating()
