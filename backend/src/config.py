from flask import Flask
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# Configuración de la conexión a MySQL
db_config = {
    "host": "localhost",
    "port": 3306,
    "user": "root",  # Cambia si usas otro usuario
    "password": "cocodrilo09",
    "database": "northwind",
}

def get_db_connection():
    """Conectar a la base de datos y devolver la conexión"""
    try:
        connection = mysql.connector.connect(**db_config)
        if connection.is_connected():
            return connection
    except Error as e:
        print(f"Error al conectar a MySQL: {e}")
        return None
