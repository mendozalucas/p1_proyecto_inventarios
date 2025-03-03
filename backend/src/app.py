from flask import Flask, jsonify
from flask_cors import CORS
from config import get_db_connection

app = Flask(__name__)
CORS(app)

@app.route('/mensaje', methods=['GET'])
def obtener_mensaje():
    return jsonify({"mensaje": "Hola Mundo!"})

@app.route("/test_db", methods=["GET"])
def test_db():
    """Ruta para probar la conexión con MySQL"""
    connection = get_db_connection()
    if connection:
        return jsonify({"message": "Conexion exitosa a MySQL"}), 200
    else:
        return jsonify({"error": "No se pudo conectar a MySQL"}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)  # Escucha en todas las IPs