import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Datos personales
  nombre = "Anthony De La Cruz";
  carrera = "Análisis de Sistemas Empresariales ";
  semestre = "4to semestre";
  edad = 19;
  correo = "Anthony.delacruz.levano@vallegrande.edu.pe";
  telefono = "986535611";
  ubicacion = "Cañete, Lima, Perú";

  github = "https://github.com/Joseph-Delacruz";
  linkedin = "https://www.linkedin.com/in/anthony-joseph-de-la-cruz-levano-a22013360/";

  // Sobre mí
  sobreMi = "Soy estudiante apasionado por el desarrollo web, enfocado en crear aplicaciones modernas y funcionales.";

  // Skills
  skills = ["HTML", "CSS", "TypeScript", "Angular"];

  // Formación
  formacion = {
    carrera: "Analisis de Sistemas Empresariales",
    institucion: "Valle Grande",
    cursos: "Angular, JavaScript, Bases de Datos"
  };
  
  
  // Proyecto
  proyecto = {
    nombre: "Sistema Académico",
    descripcion: "Aplicación web para gestión de estudiantes.",
    tecnologias: "Angular, Node.js, MySQL"
  };

  // Interactividad
  mostrarMas = false;
  modoOscuro = false;

  toggleInfo() {
    this.mostrarMas = !this.mostrarMas;
  }

  toggleModo() {
    this.modoOscuro = !this.modoOscuro;
  }
}