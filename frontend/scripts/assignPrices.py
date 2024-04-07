import mysql.connector
import random


def connect_database():
    return mysql.connector.connect(
        host="localhost",    # e.g., "localhost"
        user="root",
        password="Sunidhi 19",  # Replace with your actual password
        database="interiorDesign"
    )


def assign_prices(conn, start_price, end_price):
    cursor = conn.cursor()
    for design_id in range(1, 101):
        price = random.randint(start_price, end_price)
        query = "UPDATE design SET price = %s WHERE designID = %s;"
        cursor.execute(query, (price, design_id))
    conn.commit()
    cursor.close()


def generate_price_ranges(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT price FROM design;")
    prices = [price[0] for price in cursor.fetchall()]
    min_price, max_price = min(prices), max(prices)

    # Adjust the segment count as needed
    segment_count = 5
    range_size = (max_price - min_price) // segment_count
    price_ranges = [(min_price + i * range_size, min_price +
                     (i + 1) * range_size - 1) for i in range(segment_count)]
    # Ensure the last range includes the max_price
    price_ranges[-1] = (price_ranges[-1][0], max_price)
    cursor.close()
    return price_ranges


# Main execution
if __name__ == "__main__":
    conn = connect_database()
    # Assign prices within a specified range
    assign_prices(conn, 15000, 100000)
    # Generate and print price ranges
    price_ranges = generate_price_ranges(conn)
    for start, end in price_ranges:
        print(f"${start} - ${end}")
    conn.close()
