package com.demo.project;


import java.sql.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		try {
			// Establecer la conexión con PostgreSQL
			Connection connection = DriverManager.getConnection("jdbc:postgresql://34.175.59.135:5432/realworldapp", "postgres", "123456789");

			// Realizar una consulta de prueba
			connection.createStatement().execute("SELECT 1");

			System.out.println("Conexión exitosa a PostgreSQL");
			connection.close();
		} catch (SQLException e) {
			System.out.println("Error al conectar a PostgreSQL: " + e.getMessage());
		}

		SpringApplication.run(DemoApplication.class, args);
	}

}
