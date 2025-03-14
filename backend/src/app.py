from flask import Flask, jsonify, request
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

@app.route("/all_products", methods=["GET"])
def get_all_products():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM products")  # 🔹 Obtiene TODOS los productos sin filtros
    results = cursor.fetchall()
    connection.close()
    return jsonify(results)

@app.route("/filter_products", methods=["POST"])
def filter_products():
    data = request.json
    print(data)
    query = "SELECT * FROM products WHERE 1=1"
    params = []

    if data["brand"]:
        query += " AND brand_product = %s"
        params.append(data["brand"])

    if int(data["category"]) == 1:
        query += " AND category_product = %s"
        params.append('Other')
    elif int(data["category"]) == 2:
        query += " AND category_product = %s"
        params.append('Peripheral')
    elif int(data["category"]) == 3:
        query += " AND category_product = %s"
        params.append('Microprocessor')
    elif int(data["category"]) == 4:
        query += " AND category_product = %s"
        params.append('GPU')

    if data["model"]:
        query += " AND model_product = %s"
        params.append(data["model"])

    if data["colors"]:
        query += f" AND color_product IN ({', '.join(['%s'] * len(data['colors']))})"
        params.extend(data["colors"])

    if data["minPrice"]:
        query += " AND price_product >= %s"
        params.append(data["minPrice"])

    if data["maxPrice"]:
        query += " AND price_product <= %s"
        params.append(data["maxPrice"])
        
    if int(data["availability"]) == 0:
        query += " AND current_stock >= %s"
        params.append(0)
    elif int(data["availability"]) == 1:
        query += " AND current_stock > %s"
        params.append(0)
    elif int(data["availability"]) == 2:
        query += " AND current_stock = %s"
        params.append(0)

    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)  # Retrieve results as dictionaries
    cursor.execute(query, params)  # Execute the query with the parameters
    # It replaces the %s with the values in the list params. It prevents SQL injections
    
    results = cursor.fetchall()  # Fetch all results

    connection.close()
    return jsonify(results)

@app.route("/update_stock", methods=["POST"])
def update_stock():
    try:
        data = request.json.get("updates", [])

        connection = get_db_connection()
        cursor = connection.cursor()

        for update in data:
            query = "UPDATE products SET current_stock = %s WHERE code_product = %s"
            cursor.execute(query, (update["new_stock"], update["code_product"]))

        connection.commit()
        connection.close()
    except Exception as e:
        print(e)
    else:
        return jsonify({"message": "Stock actualizado exitosamente"}), 200
    
@app.route("/create_product", methods=["POST"])
def create_product():
    data = request.json
    category = ""
    
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)  # Retrieve results as dictionaries
    cursor.execute("SELECT * FROM products WHERE %s = code_product", [data["code"]])  # Execute the query with the parameters
    results = cursor.fetchall()  # Fetch all results
    
    if results:
        return jsonify({"error": "El código de producto ya existe"}), 400
    else:
        if data["category"] == 0:
            category = "Other"
        elif data["category"] == 1:
            category = "Peripheral"
        elif data["category"] == 2:
            category = "Microprocessor"
        elif data["category"] == 3:
            category = "GPU"
        query = "INSERT INTO products (code_product, brand_product, model_product, category_product, color_product, price_product, current_stock) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(query, (data["code"], data["brand"], data["model"], category, data["color"], data["price"], data["stock"]))
        connection.commit() # Apply changes to the database permanently
        connection.close()
        return jsonify({"message": "Producto creado exitosamente"}), 201
    
@app.route("/delete_item", methods=["DELETE"])
def delete_item():
    data = request.json
    code = data.get("code")

    if not code:
        return jsonify({"error": "Invalid request: No code provided"}), 400

    connection = get_db_connection()
    cursor = connection.cursor()
    
    cursor.execute("SELECT * FROM products WHERE code_product = %s", (code,))  # Asegurar formato correcto
    results = cursor.fetchall()

    if results:
        cursor.execute("DELETE FROM products WHERE code_product = %s", (code,))
        connection.commit()
        connection.close()
        
        return jsonify({"message": "Product deleted successfully"}), 200
    else:
        connection.close()
        return jsonify({"error": "The code doesn't exist"}), 400
    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)  # listen on all IPs on port 5000